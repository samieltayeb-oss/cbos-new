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
      {/* 1. Sovereign Architectural Photography Hero Layer (Desktop & Mobile) */}
      <div className="absolute inset-0 pointer-events-none z-0">
        {/* Desktop / Tablet Landscape Hero */}
        <div className="hidden sm:block absolute inset-0">
          <Image
            src="/images/cbos/hero/cbos-hero-building-khartoum-premium.webp"
            alt={isRtl ? 'المقر السيادي لبنك السودان المركزي بالخرطوم' : 'Central Bank of Sudan Sovereign Headquarters Khartoum'}
            fill
            priority
            quality={92}
            className={`object-cover ${isRtl ? 'object-[left_center] lg:object-left' : 'object-[right_center] lg:object-right'} opacity-45 filter contrast-[1.1] saturate-[1.05]`}
            sizes="100vw"
          />
        </div>

        {/* Mobile Portrait Crop */}
        <div className="sm:hidden absolute inset-0">
          <Image
            src="/images/cbos/hero/cbos-hero-building-khartoum-premium-mobile.webp"
            alt={isRtl ? 'المقر السيادي لبنك السودان المركزي' : 'Central Bank of Sudan Sovereign Headquarters'}
            fill
            priority
            quality={90}
            className="object-cover object-top opacity-35 filter contrast-[1.1]"
            sizes="100vw"
          />
        </div>

        {/* Direction-Aware Institutional Scrim Overlay */}
        <div 
          className={`absolute inset-0 ${
            isRtl 
              ? 'bg-gradient-to-l from-[#032A1E] via-[#032A1E]/90 to-[#032A1E]/40' 
              : 'bg-gradient-to-r from-[#032A1E] via-[#032A1E]/90 to-[#032A1E]/40'
          }`} 
        />
        
        {/* Vertical Top/Bottom Seamless Fades */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#021F16]/95 via-transparent to-[#032A1E]" />
      </div>

      {/* 2. Banknote Security Guilloche Pattern Overlay */}
      <div className="absolute inset-0 pointer-events-none opacity-20 z-[1]">
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
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Hero Copy (Cols 1-7) */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Sovereign Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#075A3A]/80 backdrop-blur-md border border-[#B99553]/60 text-xs font-mono font-bold text-[#DDC99B] shadow-md">
              <ShieldCheck className="w-4 h-4 text-[#B99553]" />
              <span>{isRtl ? 'المؤسسة النقدية السيادية لجمهورية السودان' : 'Sovereign Monetary Authority of Sudan'}</span>
            </div>

            {/* Signature Headline */}
            <div className="space-y-2">
              <h2 className="text-sm md:text-base font-bold text-[#DDC99B] uppercase tracking-wider font-mono">
                {isRtl ? 'بنك السودان المركزي' : 'Central Bank of Sudan'}
              </h2>
              <h1 className="text-3xl md:text-5xl lg:text-[58px] font-extrabold text-white tracking-normal leading-[1.15] font-display drop-shadow-sm">
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

            {/* Restrained Subtitle */}
            <p className="text-base sm:text-lg text-[#E2DDD3] font-normal sm:font-medium max-w-2xl leading-[1.9] font-sans drop-shadow-sm">
              {isRtl
                ? 'إدارة السياسة النقدية، حماية القوة الشرائية للجنيه السوداني، وتطوير بنية تحتية رقمية رصينة وشاملة تعزز استقرار المعاملات المصرفية وتدعم الإنتاج القومي.'
                : 'Formulating monetary policy, safeguarding the purchasing power of the Sudanese Pound, and advancing a resilient digital financial infrastructure for national economic recovery.'}
            </p>

            {/* Action Buttons */}
            <div className="pt-2 flex flex-wrap items-center gap-4 text-sm font-bold">
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
                      {isRtl ? 'المقر السيادي والمؤشرات اليومية' : 'Sovereign Core & Daily Indicators'}
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
                  <span className="text-[#D8D4C8] text-xs font-sans">{isRtl ? 'السعر التأشيري للدولار (USD)' : 'Official USD Rate'}</span>
                  <span dir="ltr" className="font-bold text-[#DDC99B] text-sm tabular-nums">1,987.93 SDG</span>
                </div>

                <div className="p-3.5 rounded-lg bg-[#0A1813]/90 border border-[#075A3A]/60 flex items-center justify-between">
                  <span className="text-[#D8D4C8] text-xs font-sans">{isRtl ? 'جاهزية المقسم القومي (NIPS)' : 'NIPS Switch Throughput'}</span>
                  <span dir="ltr" className="font-bold text-emerald-400 text-sm tabular-nums">10,000 TPS</span>
                </div>

                <div className="p-3.5 rounded-lg bg-[#0A1813]/90 border border-[#075A3A]/60 flex items-center justify-between">
                  <span className="text-[#D8D4C8] text-xs font-sans">{isRtl ? 'الاحتياطي الإلزامي المصرفي' : 'Statutory Cash Reserve'}</span>
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
