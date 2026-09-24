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
    <div className="relative w-full flex items-center justify-center select-none py-4 lg:py-2">

      {/* ======================================================================= */}
      {/* EXPANSIVE SOVEREIGN ARCHITECTURAL VISUAL (OPEN, ATMOSPHERIC, NO BOX)   */}
      {/* Generous negative space, wide soft atmospheric dissolve, no frame     */}
      {/* ======================================================================= */}
      <div className="relative w-full max-w-[460px] sm:max-w-[560px] lg:max-w-[620px] xl:max-w-[660px] z-10 transition-transform duration-700 ease-out">
        
        {/* Expansive Stage with Wide, Soft Atmospheric Mask (Zero Tight Window / Zero Card) */}
        <div 
          className="relative aspect-[16/9] w-full [mask-image:radial-gradient(ellipse_96%_90%_at_50%_50%,black_75%,rgba(0,0,0,0.65)_88%,transparent_100%)] [-webkit-mask-image:radial-gradient(ellipse_96%_90%_at_50%_50%,black_75%,rgba(0,0,0,0.65)_88%,transparent_100%)]"
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
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 70vw, 45vw"
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
        </div>

      </div>

    </div>
  );
}
