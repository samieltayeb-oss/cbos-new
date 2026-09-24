'use client';

import React from 'react';
import Image from 'next/image';
import { useLanguage } from '@/lib/languageContext';

export default function HeroVisual() {
  const { isRtl } = useLanguage();

  return (
    <div className="relative w-full flex items-center justify-center select-none py-2 lg:py-0">
      
      {/* ======================================================================= */}
      {/* 1. SOVEREIGN PATTERN LAYER — Banknote Guilloche Rosette & Security Lathe */}
      {/* ======================================================================= */}
      <div 
        className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden"
        aria-hidden="true"
      >
        {/* Slowly rotating banknote guilloche rosette halo */}
        <div 
          className="relative w-[340px] h-[340px] sm:w-[480px] sm:h-[480px] lg:w-[600px] lg:h-[600px] xl:w-[660px] xl:h-[660px] opacity-15 sm:opacity-20 transition-opacity duration-1000 [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_72%)]"
        >
          <div className="w-full h-full animate-[spin_50s_linear_infinite]">
            <Image
              src="/images/cbos/hero/sovereign-guilloche-halo.svg"
              alt=""
              width={660}
              height={660}
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
        <div className="w-[300px] sm:w-[440px] lg:w-[520px] h-[260px] sm:h-[360px] bg-[#2F88C2]/15 rounded-full blur-[80px] sm:blur-[110px] transform -translate-y-4" />
        
        {/* Warm golden foundation contact lighting */}
        <div className="absolute bottom-2 sm:bottom-4 w-[280px] sm:w-[420px] lg:w-[480px] h-[60px] sm:h-[80px] bg-[#DFAC46]/12 rounded-full blur-[45px] sm:blur-[60px]" />
      </div>

      {/* ======================================================================= */}
      {/* 3. DATA GEOMETRY LAYER — Blueprint Lat/Lon & Institutional Coordinates */}
      {/* ======================================================================= */}
      <div 
        className="absolute inset-0 pointer-events-none flex flex-col justify-between p-2 sm:p-4 text-[9px] sm:text-[10px] font-mono tracking-widest text-[#8F9CAE]/40"
        aria-hidden="true"
      >
        {/* Top coordinate watermark */}
        <div className="hidden sm:flex items-center justify-between w-full px-2">
          <span>CBOS • HQ • KHARTOUM</span>
          <span>15.6003° N • 32.5332° E</span>
        </div>

        {/* Bottom subtle elevation & institutional datum */}
        <div className="hidden sm:flex items-center justify-between w-full px-2 pt-2 border-t border-[#22446D]/20">
          <span>ELEV 381M • NILE BASIN</span>
          <span>EST. 1960 • SOVEREIGN RAILS</span>
        </div>
      </div>

      {/* ======================================================================= */}
      {/* 4. BUILDING LAYER — Monumental Central Bank & Flowing Sudanese Flag      */}
      {/* (100% Isolated, Standalone Architectural Asset — Zero Box Boundaries)    */}
      {/* ======================================================================= */}
      <div className="relative w-full max-w-[460px] sm:max-w-[560px] lg:max-w-[680px] xl:max-w-[740px] z-10">
        <div className="relative aspect-[1319/707] w-full transform transition-transform duration-700 hover:scale-[1.015] ease-out">
          {/* Monumental Central Bank of Sudan Architecture + Royal Silk Flag */}
          <Image
            src="/images/cbos/hero/cbos-building-sovereign-flag.webp"
            alt={isRtl ? 'المقر الرئيسي لبنك السودان المركزي والعلم الوطني' : 'Central Bank of Sudan Headquarters & National Flag'}
            fill
            priority
            quality={95}
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 75vw, 50vw"
            className="object-contain object-center drop-shadow-[0_20px_50px_rgba(0,0,0,0.75)] drop-shadow-[0_4px_20px_rgba(47,136,194,0.25)]"
          />

          {/* Very slow, subtle sunlight sheen pass across the architectural facade */}
          <div 
            className="absolute inset-0 pointer-events-none overflow-hidden [mask-image:radial-gradient(ellipse_at_center,black_60%,transparent_90%)]"
            aria-hidden="true"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/[0.04] to-transparent -translate-x-full animate-[sheen_16s_ease-in-out_infinite]" />
          </div>
        </div>
      </div>

    </div>
  );
}
