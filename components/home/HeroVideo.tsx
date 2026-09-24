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
      {/* 1. SOVEREIGN PATTERN LAYER — Banknote Guilloche Rosette Watermark       */}
      {/* ======================================================================= */}
      <div 
        className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden"
        aria-hidden="true"
      >
        <div 
          className="relative w-[340px] h-[340px] sm:w-[480px] sm:h-[480px] lg:w-[620px] lg:h-[620px] xl:w-[680px] xl:h-[680px] opacity-15 sm:opacity-20 transition-opacity duration-1000 [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_72%)]"
        >
          <div className="w-full h-full animate-[spin_55s_linear_infinite]">
            <Image
              src="/images/cbos/hero/sovereign-guilloche-halo.svg"
              alt=""
              width={680}
              height={680}
              className="w-full h-full object-contain"
              priority
            />
          </div>
        </div>
      </div>

      {/* ======================================================================= */}
      {/* 2. LIGHT ATMOSPHERE LAYER — Sovereign Volumetric & Foundation Glow       */}
      {/* ======================================================================= */}
      <div 
        className="absolute inset-0 flex items-center justify-center pointer-events-none" 
        aria-hidden="true"
      >
        {/* Core sovereign blue back-illumination */}
        <div className="w-[300px] sm:w-[440px] lg:w-[540px] h-[260px] sm:h-[360px] bg-[#2F88C2]/15 rounded-full blur-[80px] sm:blur-[110px] transform -translate-y-4" />
        
        {/* Warm golden foundation contact lighting */}
        <div className="absolute bottom-2 sm:bottom-4 w-[280px] sm:w-[420px] lg:w-[500px] h-[60px] sm:h-[80px] bg-[#DFAC46]/15 rounded-full blur-[45px] sm:blur-[60px]" />
      </div>

      {/* ======================================================================= */}
      {/* 3. DATA GEOMETRY LAYER — Blueprint Lat/Lon & Institutional Coordinates */}
      {/* ======================================================================= */}
      <div 
        className="absolute inset-0 pointer-events-none flex flex-col justify-between p-2 sm:p-4 text-[9px] sm:text-[10px] font-mono tracking-widest text-[#8F9CAE]/40"
        aria-hidden="true"
      >
        <div className="hidden sm:flex items-center justify-between w-full px-2">
          <span>CBOS • HQ • KHARTOUM</span>
          <span>15.6003° N • 32.5332° E</span>
        </div>

        <div className="hidden sm:flex items-center justify-between w-full px-2 pt-2 border-t border-[#22446D]/20">
          <span>ELEV 381M • NILE BASIN</span>
          <span>EST. 1960 • SOVEREIGN RAILS</span>
        </div>
      </div>

      {/* ======================================================================= */}
      {/* 4. VIDEO HERO STAGE — Seamless Loop with Soft Sovereign Edge Feathering */}
      {/* ======================================================================= */}
      <div className="relative w-full max-w-[460px] sm:max-w-[580px] lg:max-w-[700px] xl:max-w-[760px] z-10">
        
        {/* Aspect container with soft edge dissolution into #071321 */}
        <div 
          className="relative aspect-[16/9] w-full overflow-hidden rounded-2xl shadow-2xl [mask-image:radial-gradient(ellipse_at_center,black_70%,transparent_98%)] transition-transform duration-700 hover:scale-[1.01] ease-out"
        >
          {prefersReducedMotion ? (
            /* Static high-resolution poster frame for reduced motion preference */
            <Image
              src="/images/cbos/hero/cbos-hero-video-poster.webp"
              alt={isRtl ? 'المقر الرئيسي لبنك السودان المركزي' : 'Central Bank of Sudan Headquarters'}
              fill
              priority
              quality={92}
              className="object-cover object-center"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 75vw, 50vw"
            />
          ) : (
            /* HTML5 Auto-playing Seamless Looping Video Background */
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

          {/* Controlled Sovereign Overlays */}
          {/* Directional gradient blending into text canvas */}
          <div 
            className={`absolute inset-0 pointer-events-none ${
              isRtl 
                ? 'bg-gradient-to-r from-transparent via-transparent to-[#071321]/40' 
                : 'bg-gradient-to-l from-transparent via-transparent to-[#071321]/40'
            }`} 
            aria-hidden="true"
          />

          {/* Top and Bottom soft fade into page background */}
          <div 
            className="absolute inset-0 pointer-events-none bg-gradient-to-b from-[#071321]/30 via-transparent to-[#071321]/50" 
            aria-hidden="true"
          />

          {/* Very subtle ambient gold rim glow on borders */}
          <div 
            className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/10 pointer-events-none" 
            aria-hidden="true"
          />
        </div>

      </div>

    </div>
  );
}
