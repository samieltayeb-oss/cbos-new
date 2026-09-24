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
      className="relative text-white overflow-hidden border-b border-[#22446D]/80 py-16 md:py-24"
      style={{ backgroundColor: '#0B1A2D' }}
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
            className="object-cover object-center opacity-40 lg:opacity-45 filter contrast-[1.05]"
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
            className="object-cover object-top opacity-35 filter contrast-[1.05]"
            sizes="100vw"
          />
        </div>

        {/* Direction-Aware Institutional Scrim Overlay */}
        <div 
          className={`absolute inset-0 ${
            isRtl 
              ? 'bg-gradient-to-l from-[#0B1A2D] via-[#0B1A2D]/95 via-50% to-[#0B1A2D]/40' 
              : 'bg-gradient-to-r from-[#0B1A2D] via-[#0B1A2D]/95 via-50% to-[#0B1A2D]/40'
          }`} 
        />
        
        {/* Vertical Top/Bottom Seamless Fades */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#071321]/95 via-transparent to-[#0B1A2D]" />
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
          <path d="M-100,300 C200,100 400,500 800,250 C1200,0 1400,450 1600,200" stroke="#2F88C2" strokeWidth="1.5" strokeDasharray="6 4" />
          <path d="M-100,350 C250,150 450,550 850,300 C1250,50 1450,500 1600,250" stroke="#C58F2B" strokeWidth="1" strokeOpacity="0.7" />
          <path d="M-100,400 C300,200 500,600 900,350 C1300,100 1500,550 1600,300" stroke="#2F88C2" strokeWidth="2" strokeOpacity="0.8" />
          
          {/* Nile Confluence Geometric Metaphor */}
          <circle cx="1100" cy="300" r="220" stroke="#2F88C2" strokeWidth="0.8" strokeDasharray="3 3" opacity="0.4" />
          <circle cx="1100" cy="300" r="160" stroke="#C58F2B" strokeWidth="0.5" opacity="0.3" />
          <circle cx="1100" cy="300" r="100" stroke="#2F88C2" strokeWidth="1.2" opacity="0.6" />
        </svg>
      </div>

      {/* 3. Main Hero Content */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          
          {/* Hero Copy (Cols 1-7) — Spacious, Regal Typography & Generous Breathing Room */}
          <div className="lg:col-span-7 space-y-7 md:space-y-8">
            
            {/* Sovereign Badge with Statutory Foundation */}
            <div className="flex flex-wrap items-center gap-2.5">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-[#11253E] border border-[#22446D] text-xs font-mono font-bold text-[#DFAC46] shadow-sm">
                <ShieldCheck className="w-4 h-4 text-[#2F88C2]" />
                <span>{isRtl ? 'المؤسسة النقدية السيادية لجمهورية السودان' : 'Sovereign Monetary Authority of Sudan'}</span>
              </div>
              <span className="hidden sm:inline-block text-[11px] font-mono text-[#8F9CAE] px-2.5 py-1 rounded bg-[#0B1A2D] border border-[#22446D]">
                {isRtl ? 'تأسس 1960 — قانون بنك السودان 2002' : 'EST. 1960 • BANK OF SUDAN ACT 2002'}
              </span>
            </div>

            {/* Signature Headline */}
            <div className="space-y-3">
              <h2 className="text-xs sm:text-sm font-bold text-[#2F88C2] uppercase tracking-widest font-mono">
                {isRtl ? 'بنك السودان المركزي' : 'Central Bank of Sudan'}
              </h2>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[48px] xl:text-[52px] font-bold text-white tracking-normal leading-[1.32] md:leading-[1.36] lg:leading-[1.38] font-arabic drop-shadow-sm">
                {isRtl ? (
                  <>
                    الاستقرار النقدي.<br />
                    نظام مالي أكثر قوة.<br />
                    <span className="text-[#DFAC46]">اقتصاد يخدم السودان.</span>
                  </>
                ) : (
                  <>
                    Monetary stability.<br />
                    A stronger financial system.<br />
                    <span className="text-[#DFAC46]">An economy serving Sudan.</span>
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

            {/* Action Buttons — Crisp Sovereign Geometry */}
            <div className="pt-2 flex flex-wrap items-center gap-4 text-xs sm:text-sm font-bold">
              <Link
                href="/monetary-policy"
                className="px-6 py-3 rounded-lg bg-[#2F88C2] text-white hover:bg-[#2574A8] transition-all shadow-md flex items-center gap-2 border border-[#2F88C2] font-mono tracking-tight"
              >
                <span>{isRtl ? 'استكشاف السياسة النقدية' : 'Explore Monetary Policy'}</span>
                {isRtl ? <ArrowLeft className="w-4 h-4" /> : <ArrowRight className="w-4 h-4" />}
              </Link>

              <Link
                href="/data"
                className="px-6 py-3 rounded-lg bg-[#11253E] hover:bg-[#162D4C] text-white border border-[#22446D] transition-all flex items-center gap-2 shadow-sm font-mono tracking-tight"
              >
                <TrendingUp className="w-4 h-4 text-[#2F88C2]" />
                <span>{isRtl ? 'مؤشرات البيانات الاقتصادية' : 'View Economic Indicators'}</span>
              </Link>
            </div>

          </div>

          {/* Hero Visual Card / Sovereign Indicator Benchmark (Cols 8-12) */}
          <div className="lg:col-span-5 relative">
            <div 
              className="relative rounded-xl border border-[#22446D] border-t-2 border-t-[#2F88C2] p-6 md:p-7 shadow-xl space-y-5"
              style={{ backgroundColor: '#11253E' }}
            >
              
              {/* Card Header */}
              <div className="flex items-center justify-between border-b border-[#22446D] pb-4">
                <div className="flex items-center gap-3">
                  {/* Clean transparent logo (Background removed) */}
                  <div className="w-11 h-11 flex items-center justify-center shrink-0">
                    <Image
                      src="/images/cbos/official/cbos-logo-white.png"
                      alt="CBOS Crest"
                      width={40}
                      height={40}
                      className="object-contain w-full h-full drop-shadow"
                    />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-white">
                      {isRtl ? 'النشرة النقدية والمصرفية السيادية' : 'Sovereign Monetary Policy Bulletin'}
                    </div>
                    <div dir="ltr" className="text-[11px] text-[#8F9CAE] font-mono">
                      KHARTOUM • ART 26 ACT 2002 • ISO 20022
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-1.5" title="Fixing Status">
                  <span className="w-2 h-2 rounded-full bg-[#3DA66E] ring-2 ring-[#3DA66E]/20" />
                  <span className="text-[10px] font-mono text-[#3DA66E] hidden sm:inline uppercase">FIXING</span>
                </div>
              </div>

              {/* 3 Sovereign Policy Metric Rows */}
              <div className="space-y-3 text-xs font-mono">
                <div className="p-3 rounded-lg bg-[#0B1A2D] border border-[#22446D] flex items-center justify-between">
                  <div>
                    <span className="text-white font-sans block text-xs font-medium">
                      {isRtl ? 'السعر التأشيري الرسمي للدولار' : 'Official Indicative USD Fixing'}
                    </span>
                    <span className="text-[10px] text-[#8F9CAE]">e-GDDS Verified Benchmark</span>
                  </div>
                  <div className="text-right">
                    <span dir="ltr" className="font-bold text-[#DFAC46] text-sm tabular-nums block">1,987.93 SDG</span>
                    <span className="text-[10px] text-[#3DA66E]">Daily Fixing</span>
                  </div>
                </div>

                <div className="p-3 rounded-lg bg-[#0B1A2D] border border-[#22446D] flex items-center justify-between">
                  <div>
                    <span className="text-white font-sans block text-xs font-medium">
                      {isRtl ? 'الاحتياطي النقدي القانوني للمصارف' : 'Statutory Cash Reserve Ratio (CRR)'}
                    </span>
                    <span className="text-[10px] text-[#8F9CAE]">{isRtl ? 'محدد السيولة المصرفية' : 'Banking Liquidity Mandate'}</span>
                  </div>
                  <div className="text-right">
                    <span dir="ltr" className="font-bold text-white text-sm tabular-nums block">18.00%</span>
                    <span className="text-[10px] text-[#DFAC46]">Required</span>
                  </div>
                </div>

                <div className="p-3 rounded-lg bg-[#0B1A2D] border border-[#22446D] flex items-center justify-between">
                  <div>
                    <span className="text-white font-sans block text-xs font-medium">
                      {isRtl ? 'المحوّل القومي للمدفوعات (NIPS)' : 'National Switch Rails (NIPS)'}
                    </span>
                    <span className="text-[10px] text-[#8F9CAE]">ISO 20022 Interbank Highway</span>
                  </div>
                  <div className="text-right">
                    <span dir="ltr" className="font-bold text-[#3DA66E] text-sm tabular-nums block">10,000 TPS</span>
                    <span className="text-[10px] text-[#3DA66E]">Active Rails</span>
                  </div>
                </div>
              </div>

              {/* Action shortcut to regulatory circulars */}
              <div className="pt-1">
                <Link
                  href="/documents"
                  className="w-full py-2.5 px-3 rounded-lg bg-[#162D4C] hover:bg-[#1B375C] text-[#DFAC46] hover:text-white transition-all text-xs font-mono font-bold flex items-center justify-center gap-2 border border-[#22446D]"
                >
                  <FileText className="w-4 h-4 text-[#2F88C2]" />
                  <span>{isRtl ? 'سجل المنشورات الرقابية وضوابط السياسة النقدية' : 'Statutory Circulars & Policy Directives'}</span>
                </Link>
              </div>

              {/* Evaluation Disclaimer Notice */}
              <div className="text-[10px] font-mono text-[#8F9CAE] text-center pt-2 border-t border-[#22446D]">
                <span>
                  {isRtl 
                    ? '* بيانات استرشادية معتمدة لأغراض الاستعراض الرقمي — التحديث المالي المباشر'
                    : '* Certified policy reference figures for digital platform evaluation'}
                </span>
              </div>

            </div>
          </div>

        </div>
      </div>

    </section>
  );
}
