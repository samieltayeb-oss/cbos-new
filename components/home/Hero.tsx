'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useLanguage } from '@/lib/languageContext';
import { ArrowLeft, ArrowRight, ShieldCheck, TrendingUp, FileText, Building2, ExternalLink } from 'lucide-react';

export default function Hero() {
  const { isRtl } = useLanguage();

  return (
    <section 
      className="relative text-white overflow-hidden border-b border-[#075A3A]/80 py-16 md:py-24"
      style={{ backgroundColor: '#032A1E' }}
    >
      {/* 1. Sovereign Landmarks Hero Layer (Sudan & Khartoum: Nile, Meroë Pyramids, Tuti Bridge) */}
      <div className="absolute inset-0 pointer-events-none z-0">
        {/* Desktop / Tablet Landscape Hero */}
        <div className="hidden sm:block absolute inset-0">
          <Image
            src="/images/cbos/hero/cbos-hero-sudan-landmarks.webp"
            alt={isRtl ? 'معالم السودان والخرطوم السيادية — النيل، أهرامات مروي، وجسر توتي' : 'Sovereign Landmarks of Sudan & Khartoum — The Nile, Meroë Pyramids, and Tuti Bridge'}
            fill
            priority
            quality={92}
            className="object-cover object-center opacity-65 lg:opacity-75 filter contrast-[1.05] saturate-[1.1]"
            sizes="100vw"
          />
        </div>

        {/* Mobile Portrait Crop */}
        <div className="sm:hidden absolute inset-0">
          <Image
            src="/images/cbos/hero/cbos-hero-sudan-landmarks-mobile.webp"
            alt={isRtl ? 'معالم السودان السيادية' : 'Sovereign Landmarks of Sudan'}
            fill
            priority
            quality={90}
            className="object-cover object-top opacity-55 filter contrast-[1.05] saturate-[1.1]"
            sizes="100vw"
          />
        </div>

        {/* Direction-Aware Institutional Scrim Overlay */}
        <div 
          className={`absolute inset-0 ${
            isRtl 
              ? 'bg-gradient-to-l from-[#032A1E] via-[#032A1E]/85 via-45% to-[#032A1E]/30' 
              : 'bg-gradient-to-r from-[#032A1E] via-[#032A1E]/85 via-45% to-[#032A1E]/30'
          }`} 
        />
        
        {/* Vertical Top/Bottom Seamless Fades */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#021F16]/90 via-transparent to-[#032A1E]" />
      </div>

      {/* 2. Banknote Security Guilloche Pattern Overlay */}
      <div className="absolute inset-0 pointer-events-none opacity-10 lg:opacity-15 z-[1]">
        <svg 
          className="w-full h-full object-cover" 
          viewBox="0 0 1440 600" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Banknote Rosette & Guilloche Curves */}
          <path d="M-100,300 C200,100 400,500 800,250 C1200,0 1400,450 1600,200" stroke="#B99553" strokeWidth="1.5" strokeDasharray="6 4" />
          <path d="M-100,350 C250,150 450,550 850,300 C1250,50 1450,500 1600,250" stroke="#B99553" strokeWidth="1" strokeOpacity="0.7" />
          <path d="M-100,400 C300,200 500,600 900,350 C1300,100 1500,550 1600,300" stroke="#075A3A" strokeWidth="2" strokeOpacity="0.8" />
          
          {/* Nile Confluence Geometric Metaphor */}
          <circle cx="1100" cy="300" r="220" stroke="#B99553" strokeWidth="0.8" strokeDasharray="3 3" opacity="0.4" />
          <circle cx="1100" cy="300" r="160" stroke="#B99553" strokeWidth="0.5" opacity="0.3" />
          <circle cx="1100" cy="300" r="100" stroke="#B99553" strokeWidth="1.2" opacity="0.6" />
        </svg>
      </div>

      {/* 3. Main Hero Content */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          
          {/* Hero Copy (Cols 1-7) — Spacious, Regal Typography & Generous Breathing Room */}
          <div className="lg:col-span-7 space-y-7 md:space-y-8">
            
            {/* Sovereign Badge */}
            <div>
              <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-[#075A3A]/70 backdrop-blur-md border border-[#B99553]/60 text-xs font-mono font-bold text-[#DDC99B] shadow-md">
                <ShieldCheck className="w-4 h-4 text-[#B99553]" />
                <span>{isRtl ? 'المؤسسة النقدية السيادية لجمهورية السودان' : 'Sovereign Monetary Authority of Sudan'}</span>
              </div>
            </div>

            {/* Signature Headline */}
            <div className="space-y-3">
              <h2 className="text-xs sm:text-sm font-bold text-[#DDC99B] uppercase tracking-widest font-mono">
                {isRtl ? 'بنك السودان المركزي' : 'Central Bank of Sudan'}
              </h2>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[48px] xl:text-[52px] font-bold text-white tracking-normal leading-[1.32] md:leading-[1.36] lg:leading-[1.38] font-arabic drop-shadow-sm">
                {isRtl ? (
                  <>
                    الاستقرار النقدي.<br />
                    نظام مالي أكثر قوة.<br />
                    <span className="text-[#DDC99B]">اقتصاد يخدم السودان.</span>
                  </>
                ) : (
                  <>
                    Monetary stability.<br />
                    A stronger financial system.<br />
                    <span className="text-[#DDC99B]">An economy serving Sudan.</span>
                  </>
                )}
              </h1>
            </div>

            {/* Restrained Subtitle with Clear Separation */}
            <p className="text-sm sm:text-base md:text-[17px] text-[#E2DDD3] font-normal leading-[1.9] md:leading-[2.0] max-w-2xl font-arabic drop-shadow-sm">
              {isRtl
                ? 'صياغة السياسة النقدية وتنفيذها، حماية القوة الشرائية للجنيه السوداني، وتطوير بنية تحتية رقمية رصينة تعزز استقرار المعاملات المصرفية وتدعم مسار التعافي الاقتصادي القومي وتحفيز الإنتاج.'
                : 'Formulating and implementing monetary policy, safeguarding the purchasing power of the Sudanese Pound, and advancing a resilient digital financial infrastructure for national economic recovery and production growth.'}
            </p>

            {/* Action Buttons */}
            <div className="pt-3 flex flex-wrap items-center gap-4 text-sm font-bold">
              <Link
                href="/monetary-policy"
                className="px-6 py-3.5 rounded-xl bg-[#B99553] text-[#101713] hover:bg-[#D4AF37] transition-all shadow-lg flex items-center gap-2 border border-[#B99553]"
              >
                <span>{isRtl ? 'استكشاف السياسة النقدية' : 'Explore Monetary Policy'}</span>
                {isRtl ? <ArrowLeft className="w-4 h-4" /> : <ArrowRight className="w-4 h-4" />}
              </Link>

              <Link
                href="/data"
                className="px-6 py-3.5 rounded-xl bg-[#075A3A]/80 hover:bg-[#075A3A] text-white border border-[#B99553]/50 backdrop-blur-md transition-all flex items-center gap-2 shadow"
              >
                <TrendingUp className="w-4 h-4 text-[#B99553]" />
                <span>{isRtl ? 'مؤشرات البيانات الاقتصادية' : 'View Economic Indicators'}</span>
              </Link>
            </div>

          </div>

          {/* Hero Visual Card / Sovereign Indicator Benchmark (Cols 8-12) */}
          <div className="lg:col-span-5 relative">
            <div 
              className="relative rounded-2xl border border-[#B99553]/40 p-6 md:p-8 backdrop-blur-md shadow-2xl space-y-6"
              style={{ backgroundColor: 'rgba(2, 31, 22, 0.88)' }}
            >
              
              {/* Card Header */}
              <div className="flex items-center justify-between border-b border-[#075A3A]/70 pb-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-[#075A3A] p-1 flex items-center justify-center border border-[#B99553]/50">
                    <Image
                      src="/images/cbos/official/cbos-logo-white.png"
                      alt="CBOS Crest"
                      width={44}
                      height={44}
                      className="object-contain"
                    />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-white">
                      {isRtl ? 'المؤشرات النقدية والمصرفية اليومية' : 'Daily Monetary & Banking Indicators'}
                    </div>
                    <div dir="ltr" className="text-xs text-[#DDC99B] font-mono">
                      REF: CDNIPS202601 • ISO 20022
                    </div>
                  </div>
                </div>

                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
              </div>

              {/* 3 Metric Rows */}
              <div className="space-y-3.5 text-xs font-mono">
                <div className="p-3.5 rounded-lg bg-[#0A1813]/90 border border-[#075A3A]/60 flex items-center justify-between">
                  <span className="text-[#D8D4C8] text-xs font-sans">{isRtl ? 'السعر التأشيري للدولار (USD)' : 'Official Indicative USD Rate'}</span>
                  <span dir="ltr" className="font-bold text-[#DDC99B] text-sm tabular-nums">1,987.93 SDG</span>
                </div>

                <div className="p-3.5 rounded-lg bg-[#0A1813]/90 border border-[#075A3A]/60 flex items-center justify-between">
                  <span className="text-[#D8D4C8] text-xs font-sans">{isRtl ? 'جاهزية المحوّل القومي (NIPS)' : 'NIPS National Switch Status'}</span>
                  <span dir="ltr" className="font-bold text-emerald-400 text-sm tabular-nums">10,000 TPS</span>
                </div>

                <div className="p-3.5 rounded-lg bg-[#0A1813]/90 border border-[#075A3A]/60 flex items-center justify-between">
                  <span className="text-[#D8D4C8] text-xs font-sans">{isRtl ? 'الاحتياطي النقدي القانوني للمصارف' : 'Statutory Cash Reserve Ratio'}</span>
                  <span dir="ltr" className="font-bold text-white text-sm tabular-nums">18.00%</span>
                </div>
              </div>

              {/* Action shortcut to circular */}
              <div className="pt-2">
                <Link
                  href="/documents"
                  className="w-full py-3 px-3 rounded-lg bg-[#075A3A]/70 hover:bg-[#075A3A] text-[#DDC99B] hover:text-white transition-all text-xs font-bold flex items-center justify-center gap-2 border border-[#B99553]/40"
                >
                  <FileText className="w-4 h-4" />
                  <span>{isRtl ? 'تصفح أحدث المنشورات الرقابية 2026' : 'Browse Latest 2026 Circulars'}</span>
                </Link>
              </div>

            </div>
          </div>

        </div>
      </div>

    </section>
  );
}
