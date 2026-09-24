'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useLanguage } from '@/lib/languageContext';
import { ArrowLeft, ArrowRight, ShieldCheck, TrendingUp, FileText, ChevronRight, ChevronLeft } from 'lucide-react';

export default function Hero() {
  const { isRtl } = useLanguage();

  return (
    <section 
      className="relative text-white overflow-hidden border-b border-[#22446D]/80 pt-8 pb-14 sm:pt-12 sm:pb-16 md:py-20 lg:py-24"
      style={{ backgroundColor: '#0B1A2D' }}
    >
      {/* 1. Architectural Sovereign Identity Background */}
      <div className="absolute inset-0 pointer-events-none z-0">
        {/* Desktop / Tablet Landscape Hero Image */}
        <div className="hidden sm:block absolute inset-0">
          <Image
            src="/images/cbos/hero/cbos-hero-master-center.webp"
            alt={isRtl ? 'المقر الرئيسي لبنك السودان المركزي' : 'Central Bank of Sudan Headquarters'}
            fill
            priority
            quality={95}
            className="object-cover object-center opacity-80 lg:opacity-90 filter contrast-[1.05]"
            sizes="100vw"
          />
        </div>

        {/* Dedicated Mobile Portrait Composition */}
        <div className="sm:hidden absolute inset-0">
          <Image
            src="/images/cbos/hero/cbos-hero-master-center-mobile.webp"
            alt={isRtl ? 'المقر الرئيسي لبنك السودان المركزي' : 'Central Bank of Sudan Headquarters'}
            fill
            priority
            quality={92}
            className="object-cover object-center opacity-75 filter contrast-[1.05]"
            sizes="100vw"
          />
        </div>

        {/* Direction-Aware Institutional Scrim Overlay: Ensures pristine typography contrast */}
        <div 
          className={`absolute inset-0 ${
            isRtl 
              ? 'bg-gradient-to-l from-[#0B1A2D]/95 via-[#0B1A2D]/80 to-[#0B1A2D]/35' 
              : 'bg-gradient-to-r from-[#0B1A2D]/95 via-[#0B1A2D]/80 to-[#0B1A2D]/35'
          }`} 
        />
        
        {/* Vertical Top/Bottom Seamless Fades */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0B1A2D]/40 via-transparent via-50% to-[#0B1A2D]" />
      </div>

      {/* 2. Main Hero Content Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Hero Copy (Cols 1-7) — Spacious, Disciplined Sovereign Typography */}
          <div className="lg:col-span-7 space-y-6 md:space-y-7">
            
            {/* Unified Sovereign Eyebrow Badge (Single, Restrained, Regal) */}
            <div>
              <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[#11253E]/90 border border-[#22446D] text-xs font-sans font-semibold text-[#DFAC46] shadow-sm backdrop-blur-sm">
                <ShieldCheck className="w-4 h-4 text-[#2F88C2] shrink-0" />
                <span>
                  {isRtl 
                    ? 'جمهورية السودان • بنك السودان المركزي • تأسس 1960' 
                    : 'Republic of the Sudan • Central Bank of Sudan • Est. 1960'}
                </span>
              </div>
            </div>

            {/* Signature Mandate Headline */}
            <div className="space-y-2">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[46px] xl:text-[50px] font-bold text-white tracking-tight leading-[1.26] font-display drop-shadow-sm">
                {isRtl ? (
                  <>
                    الاستقرار النقدي والمالي.<br />
                    نظام مصرفي صامد وموثوق.<br />
                    <span className="text-[#DFAC46]">اقتصاد يخدم شعب السودان.</span>
                  </>
                ) : (
                  <>
                    Monetary & Financial Stability.<br />
                    A Resilient Banking System.<br />
                    <span className="text-[#DFAC46]">An Economy Serving Sudan.</span>
                  </>
                )}
              </h1>
            </div>

            {/* Disciplined Lead Paragraph */}
            <p className="text-[15px] sm:text-base md:text-[17px] text-[#D1D9E2] font-normal leading-[1.85] max-w-2xl font-sans drop-shadow-sm">
              {isRtl
                ? 'السلطة النقدية والرقابية السيادية: إدارة السياسة النقدية، حماية القوة الشرائية للجنيه السوداني، وتطوير بنية تحتية مالية رقمية متقدمة تعزز استقرار المعاملات المصرفية وتدعم مسار التعافي الاقتصادي.'
                : 'The sovereign monetary and supervisory authority: executing monetary policy, safeguarding the purchasing power of the Sudanese Pound, and advancing a resilient digital financial infrastructure for national economic recovery.'}
            </p>

            {/* Purposeful Action Triggers (44px Minimum Touch Targets, Sans Typography) */}
            <div className="pt-2 flex flex-wrap items-center gap-3.5 sm:gap-4">
              <Link
                href="/exchange-rates"
                className="min-h-[44px] px-6 py-3 rounded-lg bg-[#2F88C2] hover:bg-[#2574A8] text-white font-sans font-bold text-sm shadow-md flex items-center gap-2 border border-[#2F88C2] transition-all focus:outline-none focus:ring-2 focus:ring-[#DFAC46]"
              >
                <span>{isRtl ? 'أسعار الصرف والسياسة النقدية' : 'Exchange Rates & Monetary Policy'}</span>
                {isRtl ? <ArrowLeft className="w-4 h-4 shrink-0" /> : <ArrowRight className="w-4 h-4 shrink-0" />}
              </Link>

              <Link
                href="/documents"
                className="min-h-[44px] px-6 py-3 rounded-lg bg-[#11253E] hover:bg-[#162D4C] text-white font-sans font-semibold text-sm shadow-sm flex items-center gap-2 border border-[#22446D] transition-all focus:outline-none focus:ring-2 focus:ring-[#2F88C2]"
              >
                <FileText className="w-4 h-4 text-[#2F88C2] shrink-0" />
                <span>{isRtl ? 'سجل المنشورات والتشريعات' : 'Legislation & Directives'}</span>
              </Link>
            </div>

          </div>

          {/* Hero Sovereign Indicator Monolith (Cols 8-12) — Crystal-Clear, High-Contrast Focus */}
          <div className="lg:col-span-5 relative">
            <div 
              className="relative rounded-2xl border border-[#22446D] border-t-2 border-t-[#2F88C2] p-6 sm:p-7 shadow-2xl space-y-5 backdrop-blur-md"
              style={{ backgroundColor: '#11253E' }}
            >
              
              {/* Monolith Header */}
              <div className="flex items-center justify-between border-b border-[#22446D] pb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 flex items-center justify-center shrink-0">
                    <Image
                      src="/images/cbos/official/cbos-logo-white.png"
                      alt="CBOS Crest"
                      width={38}
                      height={38}
                      className="object-contain w-full h-full drop-shadow"
                    />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-white font-display">
                      {isRtl ? 'النشرة اليومية لأسعار الصرف' : 'Daily Official Indicative Rates'}
                    </div>
                    <div className="text-[11.5px] text-[#8F9CAE] font-sans mt-0.5">
                      {isRtl ? 'المادة 26 من قانون بنك السودان 2002' : 'Art. 26 Bank of Sudan Act 2002'}
                    </div>
                  </div>
                </div>

                <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#3DA66E]/15 border border-[#3DA66E]/30" title="Fixing Status">
                  <span className="w-2 h-2 rounded-full bg-[#3DA66E] ring-2 ring-[#3DA66E]/30 animate-pulse" />
                  <span className="text-[10.5px] font-sans font-bold text-[#3DA66E] uppercase">
                    {isRtl ? 'سعر معتمد' : 'ACTIVE FIXING'}
                  </span>
                </div>
              </div>

              {/* Core Hero Metric: Official USD Fixing Benchmark */}
              <div className="p-4 rounded-xl bg-[#0B1A2D] border border-[#22446D] space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-sans font-semibold text-white/90">
                    {isRtl ? 'السعر التأشيري الرسمي للدولار (USD)' : 'Official USD Fixing Benchmark'}
                  </span>
                  <span className="text-[10.5px] font-sans text-[#8F9CAE]">
                    {isRtl ? 'معيار e-GDDS' : 'e-GDDS Verified'}
                  </span>
                </div>

                <div className="flex items-baseline gap-2">
                  <span dir="ltr" className="text-3xl sm:text-4xl font-extrabold font-mono text-[#DFAC46] tabular-nums tracking-tight">
                    1,987.93
                  </span>
                  <span className="text-sm font-sans font-bold text-[#8F9CAE]">SDG</span>
                </div>

                <div className="flex items-center justify-between pt-1 border-t border-[#22446D]/60 text-xs text-[#8F9CAE] font-sans">
                  <span>
                    {isRtl ? 'سعر الشراء:' : 'Official Buy:'}{' '}
                    <strong dir="ltr" className="text-white font-mono font-bold">1,977.99</strong>
                  </span>
                  <span className="text-white/30">•</span>
                  <span>
                    {isRtl ? 'سعر البيع:' : 'Official Sell:'}{' '}
                    <strong dir="ltr" className="text-white font-mono font-bold">1,997.87</strong>
                  </span>
                </div>
              </div>

              {/* Secondary Policy Indicators (Disciplined 2-Column Grid) */}
              <div className="grid grid-cols-2 gap-3">
                <div className="p-3 rounded-xl bg-[#0B1A2D] border border-[#22446D] space-y-1">
                  <span className="text-[11px] font-sans text-[#8F9CAE] block">
                    {isRtl ? 'الاحتياطي النقدي (CRR)' : 'Statutory CRR'}
                  </span>
                  <span dir="ltr" className="text-base sm:text-lg font-bold font-mono text-white tabular-nums block">
                    18.00%
                  </span>
                  <span className="text-[10px] font-sans text-[#3DA66E] block font-medium">
                    {isRtl ? 'محدد السيولة الإلزامي' : 'Mandatory Reserve'}
                  </span>
                </div>

                <div className="p-3 rounded-xl bg-[#0B1A2D] border border-[#22446D] space-y-1">
                  <span className="text-[11px] font-sans text-[#8F9CAE] block">
                    {isRtl ? 'المحوّل القومي (NIPS)' : 'National Switch'}
                  </span>
                  <span dir="ltr" className="text-base sm:text-lg font-bold font-mono text-[#3DA66E] tabular-nums block">
                    10,000 TPS
                  </span>
                  <span className="text-[10px] font-sans text-[#8F9CAE] block font-medium">
                    {isRtl ? 'المقسم الفوري الموحد' : 'Instant Rails'}
                  </span>
                </div>
              </div>

              {/* Direct Shortcut to Full FX Table */}
              <div>
                <Link
                  href="/exchange-rates"
                  className="w-full py-2.5 px-3 rounded-lg bg-[#162D4C] hover:bg-[#1B375C] text-[#DFAC46] hover:text-white transition-all text-xs font-sans font-bold flex items-center justify-center gap-2 border border-[#22446D]"
                >
                  <TrendingUp className="w-4 h-4 text-[#2F88C2]" />
                  <span>{isRtl ? 'استعراض نشرة كافة العملات الأجنبية' : 'View Full FX Currency Table'}</span>
                  {isRtl ? <ChevronLeft className="w-3.5 h-3.5" /> : <ChevronRight className="w-3.5 h-3.5" />}
                </Link>
              </div>

              {/* Official Attestation Note */}
              <div className="text-[11px] font-sans text-[#8F9CAE] text-center pt-2 border-t border-[#22446D]">
                <span>
                  {isRtl 
                    ? 'بيانات استرشادية معتمدة — التحديث المالي المباشر • IMF e-GDDS'
                    : 'Official indicative benchmark data • IMF e-GDDS Certified'}
                </span>
              </div>

            </div>
          </div>

        </div>
      </div>

    </section>
  );
}
