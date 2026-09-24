'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import HeroVideo from './HeroVideo';
import { useLanguage } from '@/lib/languageContext';
import { ArrowLeft, ArrowRight, ShieldCheck, TrendingUp, FileText, ChevronRight, ChevronLeft, Activity } from 'lucide-react';

export default function Hero() {
  const { isRtl } = useLanguage();

  return (
    <div className="bg-[#071321] text-white overflow-hidden border-b border-[#22446D]">
      
      {/* ========================================================================= */}
      {/* 1. HERO STAGE — Pure, Clean, Distraction-Free Typography & 3D Building   */}
      {/* (No busy background photo behind text — maximum reading comfort)         */}
      {/* ========================================================================= */}
      <section className="relative pt-10 pb-14 sm:pt-14 sm:pb-16 lg:py-20">
        
        {/* Soft Ambient Depth (Ultra-subtle, seamless depth without spotlight halos) */}
        <div className="absolute top-1/3 left-1/4 -translate-y-1/2 w-[600px] h-[600px] bg-[#2F88C2]/03 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute bottom-10 right-1/4 w-[500px] h-[500px] bg-[#C58F2B]/03 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 xl:gap-16 items-center">
            
            {/* Start Column (RTL: Right): Calm, Spacious, Comfortable Typography */}
            <div className="lg:col-span-6 xl:col-span-6 space-y-7 text-start">
              
              {/* Sovereign Eyebrow Pill */}
              <div>
                <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#11253E] border border-[#22446D] text-xs font-sans font-semibold text-[#DFAC46] shadow-sm">
                  <ShieldCheck className="w-4 h-4 text-[#2F88C2] shrink-0" />
                  <span>
                    {isRtl 
                      ? 'جمهورية السودان • بنك السودان المركزي • تأسس 1960' 
                      : 'Republic of the Sudan • Central Bank of Sudan • Est. 1960'}
                  </span>
                </div>
              </div>

              {/* Sovereign Headline Hierarchy — Disciplined Scale, Spacing & Breathing Room */}
              <div className="space-y-4">
                {/* Level 1: Primary Sovereign Mandate (Dominant H1) */}
                <h1 className="text-3xl sm:text-4xl lg:text-[44px] xl:text-[48px] font-bold text-white tracking-normal leading-[1.35] font-tajawal">
                  {isRtl ? 'الاستقرار النقدي والمالي' : 'Monetary & Financial Stability'}
                </h1>

                {/* Level 2: Institutional Purpose & National Vision (Harmonious Secondary Tier) */}
                <div className="space-y-2.5 pt-1">
                  <div className="text-xl sm:text-2xl lg:text-[26px] xl:text-[28px] font-medium text-[#E2E8F0] tracking-normal leading-[1.4] font-tajawal">
                    {isRtl ? 'نظام مصرفي صامد وموثوق' : 'A Resilient & Trusted Banking System'}
                  </div>
                  
                  <div className="text-xl sm:text-2xl lg:text-[26px] xl:text-[28px] font-bold text-[#DFAC46] tracking-normal leading-[1.4] font-tajawal">
                    {isRtl ? 'اقتصاد يخدم شعب السودان' : 'An Economy Serving the People of Sudan'}
                  </div>
                </div>
              </div>

              {/* Comfortable Lead Paragraph — Generous Line-Height & Relaxed Reading Flow */}
              <p className="text-[15px] sm:text-base lg:text-[17px] text-[#C4D1DF] font-normal leading-[2.05] max-w-xl">
                {isRtl
                  ? 'صياغة وتنفيذ السياسة النقدية، حماية القوة الشرائية للجنيه السوداني، وتطوير بنية مصرفية رقمية رصينة تقود مسار التعافي الاقتصادي وتعزز الشمول المالي.'
                  : 'Managing monetary policy, safeguarding the purchasing power of the Sudanese Pound, and advancing a resilient digital financial infrastructure for national economic recovery and financial inclusion.'}
              </p>

              {/* High-Contrast Action Triggers */}
              <div className="pt-2 flex flex-wrap items-center gap-4">
                <Link
                  href="/exchange-rates"
                  className="min-h-[46px] px-6 py-3 rounded-lg bg-[#2F88C2] hover:bg-[#2574A8] text-white font-sans font-bold text-sm shadow-md flex items-center gap-2.5 border border-[#2F88C2] transition-all focus:outline-none focus:ring-2 focus:ring-[#DFAC46]"
                >
                  <span>{isRtl ? 'أسعار الصرف والسياسة النقدية' : 'Exchange Rates & Policy'}</span>
                  {isRtl ? <ArrowLeft className="w-4 h-4 shrink-0" /> : <ArrowRight className="w-4 h-4 shrink-0" />}
                </Link>

                <Link
                  href="/documents"
                  className="min-h-[46px] px-6 py-3 rounded-lg bg-[#11253E] hover:bg-[#162D4C] text-white font-sans font-semibold text-sm shadow-sm flex items-center gap-2 border border-[#22446D] transition-all focus:outline-none focus:ring-2 focus:ring-[#2F88C2]"
                >
                  <FileText className="w-4 h-4 text-[#2F88C2] shrink-0" />
                  <span>{isRtl ? 'سجل المنشورات والتشريعات' : 'Legislation & Directives'}</span>
                </Link>
              </div>

            </div>

            {/* End Column (RTL: Left): The Monumental Sovereign Architecture Video & Flowing Flag */}
            <div className="lg:col-span-6 xl:col-span-6 flex items-center justify-center relative w-full">
              <HeroVideo />
            </div>

          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 2. SOVEREIGN POLICY INDICATORS DOCK — Clean, Separated, Ultra-Scannable  */}
      {/* (Completely outside the hero view — zero interference with the building)  */}
      {/* ========================================================================= */}
      <section className="border-t border-[#22446D] bg-[#0B1A2D] py-7 sm:py-8 relative z-10 shadow-2xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header Row: Title & Statutory Citation */}
          <div className="flex flex-wrap items-center justify-between pb-3.5 mb-4 border-b border-[#22446D]/60 text-xs">
            <div className="flex items-center gap-2 text-[#DFAC46] font-sans font-bold">
              <Activity className="w-4 h-4 text-[#3DA66E] shrink-0" />
              <span className="text-[13px]">{isRtl ? 'مؤشرات النشرة اليومية والسياسة النقدية' : 'Official Policy Benchmarks & Daily Fixing'}</span>
            </div>
            
            <div className="text-[#8F9CAE] font-sans text-xs">
              {isRtl ? 'المادة 26 من قانون بنك السودان 2002 • معيار IMF e-GDDS' : 'Art. 26 CBOS Act 2002 • IMF e-GDDS Certified'}
            </div>
          </div>

          {/* 4 Distinct, Easily Scannable Indicator Tiles */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5">
            
            {/* Tile 1: Official Indicative USD Fixing */}
            <div className="rounded-xl bg-[#11253E] border border-[#22446D] border-t-2 border-t-[#DFAC46] p-4 sm:p-5 space-y-2 shadow-md transition-all hover:border-[#DFAC46]/60">
              <div className="flex items-center justify-between">
                <span className="text-xs font-sans font-semibold text-white/95">
                  {isRtl ? 'السعر التأشيري الرسمي للدولار' : 'Official Indicative USD Fixing'}
                </span>
                <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-[#3DA66E]/15 text-[#3DA66E] text-[10px] font-sans font-bold">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#3DA66E] animate-pulse" />
                  <span>{isRtl ? 'سعر معتمد' : 'ACTIVE'}</span>
                </span>
              </div>

              <div className="flex items-baseline gap-2 pt-0.5">
                <span dir="ltr" className="text-2xl sm:text-3xl font-extrabold font-mono text-[#DFAC46] tabular-nums tracking-tight">
                  1,987.93
                </span>
                <span className="text-xs font-sans font-bold text-[#8F9CAE]">SDG</span>
              </div>

              <div className="pt-2 border-t border-[#22446D]/60 flex items-center justify-between text-xs text-[#8F9CAE] font-sans">
                <span>{isRtl ? 'شراء:' : 'Buy:'} <strong dir="ltr" className="font-mono text-white font-bold">1,977.99</strong></span>
                <span className="text-white/20">•</span>
                <span>{isRtl ? 'بيع:' : 'Sell:'} <strong dir="ltr" className="font-mono text-white font-bold">1,997.87</strong></span>
              </div>
            </div>

            {/* Tile 2: Statutory Cash Reserve Ratio (CRR) */}
            <div className="rounded-xl bg-[#11253E] border border-[#22446D] border-t-2 border-t-[#2F88C2] p-4 sm:p-5 space-y-2 shadow-md transition-all hover:border-[#2F88C2]/60">
              <div className="flex items-center justify-between">
                <span className="text-xs font-sans font-semibold text-white/95">
                  {isRtl ? 'الاحتياطي النقدي القانوني (CRR)' : 'Statutory Cash Reserve (CRR)'}
                </span>
                <span className="px-2 py-0.5 rounded-full bg-[#2F88C2]/15 text-[#2F88C2] text-[10px] font-sans font-bold">
                  {isRtl ? 'إلزامي' : 'MANDATE'}
                </span>
              </div>

              <div className="flex items-baseline gap-2 pt-0.5">
                <span dir="ltr" className="text-2xl sm:text-3xl font-extrabold font-mono text-white tabular-nums tracking-tight">
                  18.00%
                </span>
                <span className="text-xs font-sans font-bold text-[#8F9CAE]">{isRtl ? 'من الودائع' : 'of deposits'}</span>
              </div>

              <div className="pt-2 border-t border-[#22446D]/60 text-xs text-[#8F9CAE] font-sans flex items-center justify-between">
                <span>{isRtl ? 'محدد السيولة المصرفية الإلزامي' : 'Mandatory Banking Liquidity'}</span>
                <span className="text-[#3DA66E] font-mono text-[11px] font-bold">ACTIVE</span>
              </div>
            </div>

            {/* Tile 3: National Payment Switch (NIPS) */}
            <div className="rounded-xl bg-[#11253E] border border-[#22446D] border-t-2 border-t-[#3DA66E] p-4 sm:p-5 space-y-2 shadow-md transition-all hover:border-[#3DA66E]/60">
              <div className="flex items-center justify-between">
                <span className="text-xs font-sans font-semibold text-white/95">
                  {isRtl ? 'المحوّل القومي للمدفوعات (NIPS)' : 'National Switch Rails (NIPS)'}
                </span>
                <span className="px-2 py-0.5 rounded-full bg-[#3DA66E]/15 text-[#3DA66E] text-[10px] font-sans font-bold">
                  ISO 20022
                </span>
              </div>

              <div className="flex items-baseline gap-2 pt-0.5">
                <span dir="ltr" className="text-2xl sm:text-3xl font-extrabold font-mono text-[#3DA66E] tabular-nums tracking-tight">
                  10,000
                </span>
                <span className="text-xs font-sans font-bold text-[#8F9CAE]">TPS</span>
              </div>

              <div className="pt-2 border-t border-[#22446D]/60 text-xs text-[#8F9CAE] font-sans flex items-center justify-between">
                <span>{isRtl ? 'المقسم الفوري الموحد بين البنوك' : 'Unified Instant Interbank Rails'}</span>
                <span className="text-[#3DA66E] font-mono text-[11px] font-bold">ONLINE</span>
              </div>
            </div>

            {/* Tile 4: Full FX Bulletin Action Tile */}
            <Link
              href="/exchange-rates"
              className="rounded-xl bg-[#162D4C] hover:bg-[#1B375C] border border-[#22446D] border-t-2 border-t-[#DFAC46] p-4 sm:p-5 space-y-2 shadow-md transition-all group flex flex-col justify-between"
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-sans font-semibold text-[#DFAC46]">
                  {isRtl ? 'النشرة المصرفية الكاملة' : 'Full Exchange Bulletin'}
                </span>
                <TrendingUp className="w-4 h-4 text-[#2F88C2] group-hover:text-[#DFAC46] transition-colors" />
              </div>

              <div>
                <div className="text-[15px] font-bold text-white font-display group-hover:text-[#DFAC46] transition-colors">
                  {isRtl ? 'جدول كافة العملات الأجنبية' : 'All Foreign Currencies Table'}
                </div>
                <p className="text-xs text-[#8F9CAE] font-sans mt-0.5">
                  {isRtl ? 'أسعار الصرف التأشيرية والتجارية المعتمدة' : 'Official Fixing & Commercial Bank Rates'}
                </p>
              </div>

              <div className="pt-2 border-t border-[#22446D]/60 text-xs font-bold text-[#DFAC46] flex items-center justify-between">
                <span>{isRtl ? 'استعراض النشرة اليومية' : 'View Full Bulletin'}</span>
                {isRtl ? (
                  <ChevronLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                ) : (
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                )}
              </div>
            </Link>

          </div>

        </div>
      </section>

    </div>
  );
}
