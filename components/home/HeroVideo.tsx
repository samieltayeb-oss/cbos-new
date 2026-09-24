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
      {/* Complete Sudanese Flag (Green triangle, red, white, black), generous   */}
      {/* negative space, and seamless integration with sovereign navy (#071321)  */}
      {/* ======================================================================= */}
      <div className="relative w-full max-w-[500px] sm:max-w-[600px] lg:max-w-[680px] xl:max-w-[740px] z-10 transition-transform duration-700 ease-out">
        
        {/* Expansive Stage — Seamless Background Dissolution (No Box, No Window, No Cutoff) */}
        <div className="relative aspect-[16/9] w-full">
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
