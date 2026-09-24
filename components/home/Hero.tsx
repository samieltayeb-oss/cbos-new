'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useLanguage } from '@/lib/languageContext';
import { ArrowLeft, ArrowRight, ShieldCheck, TrendingUp, FileText } from 'lucide-react';

export default function Hero() {
  const { isRtl } = useLanguage();

  return (
    <section className="relative bg-cbos-green-dark text-cbos-ivory overflow-hidden border-b border-cbos-green">
      
      {/* 1. Sovereign Guilloche & Nile Curves SVG Background */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
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

      <div className="max-w-7xl mx-auto px-4 md:px-8 py-16 md:py-24 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Hero Copy (Cols 1-7) */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Sovereign Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cbos-green/50 border border-cbos-gold/40 text-xs font-mono text-cbos-gold">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>{isRtl ? 'المؤسسة النقدية السيادية لجمهورية السودان' : 'Sovereign Monetary Authority of Sudan'}</span>
            </div>

            {/* Signature Headline */}
            <div className="space-y-2">
              <h2 className="text-sm md:text-base font-bold text-cbos-gold uppercase tracking-widest font-mono">
                {isRtl ? 'بنك السودان المركزي' : 'Central Bank of Sudan'}
              </h2>
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-black text-white tracking-tight font-display leading-tight">
                {isRtl ? (
                  <>
                    الاستقرار النقدي.<br />
                    نظام مالي أكثر قوة.<br />
                    <span className="text-cbos-gold">اقتصاد يخدم السودان.</span>
                  </>
                ) : (
                  <>
                    Monetary stability.<br />
                    A stronger financial system.<br />
                    <span className="text-cbos-gold">An economy serving Sudan.</span>
                  </>
                )}
              </h1>
            </div>

            {/* Restrained Subtitle */}
            <p className="text-sm md:text-base text-cbos-ivory/85 max-w-2xl leading-relaxed font-sans">
              {isRtl
                ? 'إدارة السياسة النقدية، حماية القوة الشرائية للجنيه السوداني، وتطوير بنية تحتية رقمية رصينة وشاملة تعزز استقرار المعاملات المصرفية وتدعم الإنتاج القومي.'
                : 'Formulating monetary policy, safeguarding the purchasing power of the Sudanese Pound, and advancing a resilient digital financial infrastructure for national economic recovery.'}
            </p>

            {/* Action Buttons */}
            <div className="pt-2 flex flex-wrap items-center gap-4 text-xs md:text-sm font-bold">
              <Link
                href="/monetary-policy"
                className="px-6 py-3.5 rounded-xl bg-cbos-gold hover:bg-cbos-gold-hover text-cbos-ink transition-all shadow-lg flex items-center gap-2"
              >
                <span>{isRtl ? 'استكشاف السياسة النقدية' : 'Explore Monetary Policy'}</span>
                {isRtl ? <ArrowLeft className="w-4 h-4" /> : <ArrowRight className="w-4 h-4" />}
              </Link>

              <Link
                href="/data"
                className="px-6 py-3.5 rounded-xl bg-cbos-green/40 hover:bg-cbos-green text-white border border-cbos-gold/40 transition-all flex items-center gap-2"
              >
                <TrendingUp className="w-4 h-4 text-cbos-gold" />
                <span>{isRtl ? 'مؤشرات البيانات الاقتصادية' : 'View Economic Indicators'}</span>
              </Link>
            </div>

          </div>

          {/* Hero Visual Card / Emblem / Key Benchmark (Cols 8-12) */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl bg-gradient-to-b from-cbos-green/30 to-cbos-ink/70 border border-cbos-gold/40 p-6 md:p-8 backdrop-blur-md shadow-2xl space-y-6">
              
              {/* Emblem Header */}
              <div className="flex items-center justify-between border-b border-cbos-gold/20 pb-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-cbos-green p-1 flex items-center justify-center border border-cbos-gold/40">
                    <Image
                      src="/images/cbos/official/cbos-logo-white.png"
                      alt="CBOS Crest"
                      width={44}
                      height={44}
                      className="object-contain"
                    />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-white font-display">
                      {isRtl ? 'المقر السيادي والمؤشرات اليومية' : 'Sovereign Core & Daily Indicators'}
                    </div>
                    <div className="text-[10px] text-cbos-gold font-mono">
                      REF: CDNIPS202601 • ISO 20022
                    </div>
                  </div>
                </div>

                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse"></span>
              </div>

              {/* 3 Metric Rows */}
              <div className="space-y-3.5 text-xs font-mono">
                <div className="p-3 rounded-lg bg-cbos-ink/60 border border-cbos-green/40 flex items-center justify-between">
                  <span className="text-cbos-stone">{isRtl ? 'السعر التأشيري للدولار (USD)' : 'Official USD Rate'}</span>
                  <span className="font-bold text-cbos-gold text-sm">1,987.93 SDG</span>
                </div>

                <div className="p-3 rounded-lg bg-cbos-ink/60 border border-cbos-green/40 flex items-center justify-between">
                  <span className="text-cbos-stone">{isRtl ? 'جاهزية المقسم القومي (NIPS)' : 'NIPS Switch Throughput'}</span>
                  <span className="font-bold text-emerald-400 text-sm">10,000 TPS</span>
                </div>

                <div className="p-3 rounded-lg bg-cbos-ink/60 border border-cbos-green/40 flex items-center justify-between">
                  <span className="text-cbos-stone">{isRtl ? 'الاحتياطي الإلزامي المصرفي' : 'Statutory Cash Reserve'}</span>
                  <span className="font-bold text-white text-sm">18.00%</span>
                </div>
              </div>

              {/* Action shortcut to circular */}
              <div className="pt-2">
                <Link
                  href="/documents?type=circular"
                  className="w-full py-2.5 px-3 rounded-lg bg-cbos-green/40 hover:bg-cbos-green text-cbos-gold hover:text-white transition-all text-xs font-bold flex items-center justify-center gap-2 border border-cbos-gold/30"
                >
                  <FileText className="w-3.5 h-3.5" />
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
