import cv2
import numpy as np
import subprocess
import os
import time

def generate_video():
    src_video = 'public/images/cbos/hero/wav.mp4'
    temp_dir = 'scratch/video_frames'
    os.makedirs(temp_dir, exist_ok=True)
    
    cap = cv2.VideoCapture(src_video)
    fps = cap.get(cv2.CAP_PROP_FPS) or 24.0
    total_frames = int(cap.get(cv2.CAP_PROP_FRAME_COUNT))
    print(f"Source video: {total_frames} frames at {fps} fps")
    
    # Segment: 2.5s (frame 60) to 8.5s (frame 204), total 144 frames (6.0s)
    # Loop crossfade: 1.0s (24 frames) -> Seamless 5.0s loop (120 frames)
    start_frame = int(2.5 * fps) # 60
    end_frame = int(8.5 * fps)   # 204
    num_frames = end_frame - start_frame # 144
    fade_len = int(1.0 * fps)    # 24
    loop_len = num_frames - fade_len # 120 (5.0s)
    
    print(f"Extracting {num_frames} frames from frame {start_frame} to {end_frame}...")
    
    raw_frames = []
    cap.set(cv2.CAP_PROP_POS_MSEC, 2500)
    for i in range(num_frames):
        ret, frame = cap.read()
        if not ret:
            break
        raw_frames.append(frame)
    cap.release()
    print(f"Loaded {len(raw_frames)} frames.")
    
    # Compositing parameters
    bg_bgr = np.array([33, 19, 7], dtype=np.float32) # #071321 in BGR
    # Scale building by 0.86 to keep it commanding and large while granting generous breathing room
    scale = 0.86
    new_w = int(1920 * scale) # 1651
    new_h = int(1080 * scale) # 928
    offset_x = 80
    offset_y = 50
    
    # 1. Broad, ultra-smooth sky twilight gradient (extends down to 380px for seamless atmospheric dissolution)
    sky_s, sky_e = 15, 380
    sky_factor = np.zeros(new_h, dtype=np.float32)
    for y in range(sky_s):
        sky_factor[y] = 1.0
    for y in range(sky_s, sky_e):
        prog = (y - sky_s) / float(sky_e - sky_s)
        # Cosine ease for zero harsh lines
        sky_factor[y] = (0.5 + 0.5 * np.cos(np.pi * prog)) ** 1.1
        
    # 2. Bottom base fade
    bot_s, bot_e = new_h - 140, new_h - 25
    bot_factor = np.zeros(new_h, dtype=np.float32)
    for y in range(bot_s, bot_e):
        prog = (y - bot_s) / float(bot_e - bot_s)
        bot_factor[y] = (0.5 - 0.5 * np.cos(np.pi * prog)) ** 1.1
    for y in range(bot_e, new_h):
        bot_factor[y] = 1.0
        
    # Ribbon de-emphasis (tones down bottom foreground ribbon so the building entrance commands focus)
    ribbon_s = int(new_h * 0.63)
    ribbon_factor = np.zeros(new_h, dtype=np.float32)
    for y in range(ribbon_s, new_h - 60):
        prog = (y - ribbon_s) / float(new_h - 60 - ribbon_s)
        ribbon_factor[y] = (prog ** 1.3) * 0.28
        
    # 3. Right edge fade (soft 190px easing into navy)
    r_s, r_e = new_w - 200, new_w - 20
    r_factor = np.zeros(new_w, dtype=np.float32)
    for x in range(r_s, r_e):
        prog = (x - r_s) / float(r_e - r_s)
        r_factor[x] = (0.5 - 0.5 * np.cos(np.pi * prog)) ** 1.1
    for x in range(r_e, new_w):
        r_factor[x] = 1.0
        
    # 4. Left flag silk contour (preserves 100% of the green triangle, red, white, and black stripes!)
    y_flag_start = int(new_h * 0.42)
    y_flag_end = new_h - 40
    h_flag = y_flag_end - y_flag_start
    silk_offsets = np.zeros(new_h, dtype=int)
    for y in range(y_flag_start, y_flag_end):
        phase = (y - y_flag_start) / float(h_flag)
        silk_offsets[y] = int(8 * np.sin(phase * np.pi * 2.5) + 3 * np.sin(phase * np.pi * 5.0) + 10)

    def process_single_frame(f_bgr):
        scaled = cv2.resize(f_bgr, (new_w, new_h), interpolation=cv2.INTER_LANCZOS4).astype(np.float32)
        
        # 1. Sky twilight
        for y in range(sky_e):
            f_val = sky_factor[y]
            scaled[y, :] = scaled[y, :] * (1.0 - f_val) + bg_bgr * f_val
            
        # 2. Bottom grounding & ribbon
        for y in range(bot_s, new_h):
            f_val = bot_factor[y]
            scaled[y, :] = scaled[y, :] * (1.0 - f_val) + bg_bgr * f_val
            
        for y in range(ribbon_s, new_h - 60):
            f_val = ribbon_factor[y]
            scaled[y, :] = scaled[y, :] * (1.0 - f_val) + bg_bgr * f_val
            
        # 3. Right edge
        for x in range(r_s, new_w):
            f_val = r_factor[x]
            scaled[:, x] = scaled[:, x] * (1.0 - f_val) + bg_bgr * f_val
            
        # 4. Left sky (above flag)
        for y in range(y_flag_start):
            w_fade = int(140 * (1.0 - y / float(y_flag_start) * 0.5))
            for x in range(w_fade):
                f_val = ((w_fade - x) / float(w_fade)) ** 1.3
                scaled[y, x] = scaled[y, x] * (1.0 - f_val) + bg_bgr * f_val
                
        # 5. Left flag (silk ripple curve + anti-aliased edge)
        # Keeps green triangle 100% visible, fully opaque and saturated!
        for y in range(y_flag_start, y_flag_end):
            cut = silk_offsets[y]
            scaled[y, :cut] = bg_bgr
            for step in range(4):
                f_aa = (step + 1) / 5.0
                px = cut + step
                if px < new_w:
                    scaled[y, px] = scaled[y, px] * f_aa + bg_bgr * (1.0 - f_aa)
                    
        # Put on 1920x1080 canvas
        canvas = np.full((1080, 1920, 3), bg_bgr, dtype=np.float32)
        canvas[offset_y:offset_y+new_h, offset_x:offset_x+new_w] = scaled
        return np.clip(canvas, 0, 255).astype(np.uint8)

    print("Compositing and crossfading frames for seamless loop...")
    t_start = time.time()
    for i in range(loop_len):
        frame_main = process_single_frame(raw_frames[i])
        
        # Crossfade tail back into head for perfectly seamless 5.0s loop
        if i < fade_len:
            weight = 0.5 - 0.5 * np.cos(np.pi * (i + 1) / float(fade_len))
            frame_tail = process_single_frame(raw_frames[loop_len + i])
            blended = frame_tail.astype(np.float32) * (1.0 - weight) + frame_main.astype(np.float32) * weight
            final_frame = np.clip(blended, 0, 255).astype(np.uint8)
        else:
            final_frame = frame_main
            
        cv2.imwrite(f"{temp_dir}/frame_{i:04d}.png", final_frame)
        if i % 30 == 0:
            print(f"Processed {i}/{loop_len} frames ({time.time()-t_start:.1f}s)...")
            
    print(f"All {loop_len} frames saved in {time.time()-t_start:.1f}s.")
    
    # Save the key poster frame
    poster_src = f"{temp_dir}/frame_0050.png"
    out_poster = "public/images/cbos/hero/cbos-hero-video-poster.webp"
    subprocess.run([
        "ffmpeg", "-y", "-i", poster_src,
        "-quality", "94", out_poster
    ], check=True)
    print(f"Saved poster: {out_poster}")
    
    # Encode MP4 (H.264, yuv420p, crf 20, faststart, no audio)
    out_mp4 = "public/images/cbos/hero/cbos-hero-loop.mp4"
    subprocess.run([
        "ffmpeg", "-y", "-framerate", str(fps),
        "-i", f"{temp_dir}/frame_%04d.png",
        "-c:v", "libx264", "-pix_fmt", "yuv420p",
        "-preset", "slow", "-crf", "20",
        "-movflags", "+faststart", "-an",
        out_mp4
    ], check=True)
    print(f"Saved MP4: {out_mp4} ({os.path.getsize(out_mp4)/1024:.1f} KB)")
    
    # Encode WebM (VP9, yuv420p, crf 26, b:v 0, no audio)
    out_webm = "public/images/cbos/hero/cbos-hero-loop.webm"
    subprocess.run([
        "ffmpeg", "-y", "-framerate", str(fps),
        "-i", f"{temp_dir}/frame_%04d.png",
        "-c:v", "libvpx-vp9", "-pix_fmt", "yuv420p",
        "-crf", "26", "-b:v", "0",
        "-an", out_webm
    ], check=True)
    print(f"Saved WebM: {out_webm} ({os.path.getsize(out_webm)/1024:.1f} KB)")
    
    print("Done generating updated sovereign video assets!")

if __name__ == '__main__':
    generate_video()
