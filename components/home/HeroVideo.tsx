'use client';

import React, { useRef, useEffect, useState } from 'react';
import Image from 'next/image';
import { useLanguage } from '@/lib/languageContext';

export default function HeroVideo() {
  const { isRtl } = useLanguage();
  const videoRef = useRef<HTMLVideoElement>(null);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    // Respect OS-level reduced motion preference
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);

    const handleChange = (e: MediaQueryListEvent) => {
      setPrefersReducedMotion(e.matches);
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  return (
    <div className="relative w-full flex items-center justify-center select-none py-2 lg:py-0">

      {/* ======================================================================= */}
      {/* SEAMLESS ARCHITECTURAL HERO VIDEO (ZERO BOX, ZERO BORDER, ZERO CARD)   */}
      {/* The Central Bank building & flag emerge directly from sovereign navy   */}
      {/* ======================================================================= */}
      <div className="relative w-full max-w-[500px] sm:max-w-[620px] lg:max-w-[740px] xl:max-w-[800px] z-10">
        
        {/* Aspect ratio container with smooth edge dissolution into #071321 */}
        <div 
          className="relative aspect-[16/9] w-full [mask-image:radial-gradient(ellipse_90%_82%_at_50%_50%,black_55%,rgba(0,0,0,0.85)_75%,transparent_100%)] [-webkit-mask-image:radial-gradient(ellipse_90%_82%_at_50%_50%,black_55%,rgba(0,0,0,0.85)_75%,transparent_100%)] transition-transform duration-700 ease-out"
        >
          {prefersReducedMotion ? (
            /* Static high-resolution poster frame for reduced motion preference */
            <Image
              src="/images/cbos/hero/cbos-hero-video-poster.webp"
              alt={isRtl ? 'المقر الرئيسي لبنك السودان المركزي' : 'Central Bank of Sudan Headquarters'}
              fill
              priority
              quality={94}
              className="object-cover object-center"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 75vw, 50vw"
            />
          ) : (
            /* HTML5 Auto-playing Seamless Looping Video with zero container framing */
            <video
              ref={videoRef}
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              poster="/images/cbos/hero/cbos-hero-video-poster.webp"
              aria-hidden="true"
              className="w-full h-full object-cover object-center"
            >
              <source
                src="/images/cbos/hero/cbos-hero-loop.webm"
                type="video/webm"
              />
              <source
                src="/images/cbos/hero/cbos-hero-loop.mp4"
                type="video/mp4"
              />
              {/* Fallback image */}
              <Image
                src="/images/cbos/hero/cbos-hero-video-poster.webp"
                alt=""
                fill
                className="object-cover object-center"
              />
            </video>
          )}

          {/* =================================================================== */}
          {/* DIRECTIONAL INTEGRATION SCRIMS — Smooth 4-edge dissolving into #071321*/}
          {/* =================================================================== */}
          {/* Top sky dissolution into #071321 */}
          <div 
            className="absolute inset-x-0 top-0 h-14 sm:h-20 bg-gradient-to-b from-[#071321] via-[#071321]/60 to-transparent pointer-events-none" 
            aria-hidden="true"
          />

          {/* Bottom street dissolution into #071321 */}
          <div 
            className="absolute inset-x-0 bottom-0 h-12 sm:h-16 bg-gradient-to-t from-[#071321] via-[#071321]/60 to-transparent pointer-events-none" 
            aria-hidden="true"
          />

          {/* Text-side soft gradient transition (RTL & LTR aware) */}
          <div 
            className={`absolute inset-y-0 ${
              isRtl 
                ? 'right-0 bg-gradient-to-l' 
                : 'left-0 bg-gradient-to-r'
            } w-14 sm:w-20 from-[#071321] via-[#071321]/30 to-transparent pointer-events-none`} 
            aria-hidden="true"
          />

          {/* Outer screen-side soft gradient transition */}
          <div 
            className={`absolute inset-y-0 ${
              isRtl 
                ? 'left-0 bg-gradient-to-r' 
                : 'right-0 bg-gradient-to-l'
            } w-14 sm:w-20 from-[#071321] via-[#071321]/30 to-transparent pointer-events-none`} 
            aria-hidden="true"
          />
        </div>

      </div>

    </div>
  );
}
