'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useLanguage } from '@/lib/languageContext';
import { officialBanknotesData } from '@/data/banknotes';
import { SecurityFeature } from '@/types/banknote';
import { ShieldCheck, Eye, Sparkles, ArrowRight, ArrowLeft, Info } from 'lucide-react';

export default function BanknotesShowcase() {
  const { isRtl } = useLanguage();
  const [selectedNoteIndex, setSelectedNoteIndex] = useState(0);
  const [activeFeature, setActiveFeature] = useState<SecurityFeature | null>(
    officialBanknotesData[0].securityFeatures[0]
  );

  const note = officialBanknotesData[selectedNoteIndex];

  return (
    <section className="py-16 px-4 md:px-8 bg-[#0B1A2D] text-cbos-ivory border-y border-[#22446D] relative overflow-hidden">
      
      {/* Background Guilloche Watermark Lines */}
      <div className="absolute inset-0 pointer-events-none opacity-10">
        <svg className="w-full h-full" viewBox="0 0 1000 400" fill="none">
          <circle cx="500" cy="200" r="300" stroke="#C58F2B" strokeWidth="2" strokeDasharray="8 4" />
          <circle cx="500" cy="200" r="200" stroke="#2F88C2" strokeWidth="1" />
          <circle cx="500" cy="200" r="100" stroke="#2F88C2" strokeWidth="2" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto space-y-10 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-[#22446D] pb-4">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-bold text-cbos-gold font-mono uppercase tracking-widest">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>{isRtl ? 'العملة الوطنية السودانية' : 'National Currency & Sovereignty'}</span>
            </div>
            <h2 className="text-2xl md:text-3xl font-black text-white font-display mt-1">
              {isRtl ? 'العلامات التأمينية والمواصفات الفنية للبنكنوت' : 'Banknote Architecture & Security Features'}
            </h2>
          </div>

          {/* Denomination Switcher */}
          <div className="flex items-center gap-2">
            {officialBanknotesData.map((b, idx) => (
              <button
                key={b.id}
                onClick={() => {
                  setSelectedNoteIndex(idx);
                  setActiveFeature(b.securityFeatures[0]);
                }}
                className={`px-4 py-2 rounded-xl text-xs font-mono font-bold transition-all shadow ${
                  selectedNoteIndex === idx
                    ? 'bg-cbos-gold text-[#0B1A2D]'
                    : 'bg-[#162D4C] text-[#8F9CAE] hover:text-white border border-[#22446D]'
                }`}
              >
                {b.value.toLocaleString()} SDG
              </button>
            ))}
          </div>
        </div>

        {/* Banknote Visual & Interactive Hotspots Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left: Banknote High-Res Canvas with Hotspots (Cols 1-7) */}
          <div className="lg:col-span-7 bg-cbos-ink/70 rounded-xl p-4 md:p-6 border border-cbos-gold/40 shadow-xl relative space-y-4">
            
            <div className="flex items-center justify-between text-xs font-mono border-b border-cbos-ink-border pb-2 text-cbos-stone">
              <span>{isRtl ? note.title.ar : note.title.en}</span>
              <span className="text-cbos-gold">{note.dimensions}</span>
            </div>

            {/* Note Canvas Container */}
            <div className="relative w-full aspect-[16/8] rounded-lg overflow-hidden shadow-xl border-2 border-cbos-gold/30 group">
              <Image
                src={note.frontImage}
                alt={isRtl ? note.title.ar : note.title.en}
                fill
                className="object-cover"
                priority
              />

              {/* Hotspot Pins */}
              {note.securityFeatures.map((feat) => {
                const isSelected = activeFeature?.id === feat.id;
                return (
                  <button
                    key={feat.id}
                    onClick={() => setActiveFeature(feat)}
                    style={{ left: `${feat.x_percent}%`, top: `${feat.y_percent}%` }}
                    className={`absolute -translate-x-1/2 -translate-y-1/2 w-7 h-7 rounded-full flex items-center justify-center transition-transform cursor-pointer ${
                      isSelected
                        ? 'bg-cbos-gold text-[#0B1A2D] ring-4 ring-cbos-gold/50 shadow-md'
                        : 'bg-[#2F88C2] text-white hover:bg-cbos-gold hover:text-[#0B1A2D] ring-2 ring-white/60 transition-colors'
                    }`}
                    title={isRtl ? feat.name.ar : feat.name.en}
                    aria-label={isRtl ? feat.name.ar : feat.name.en}
                  >
                    <Eye className="w-3.5 h-3.5" />
                  </button>
                );
              })}
            </div>

            <div className="text-[11px] text-cbos-stone flex items-center justify-between font-mono pt-1">
              <span>{isRtl ? 'اضغط على النقاط لفحص العلامة التأمينية' : 'Click pins to inspect security features'}</span>
              <span className="text-cbos-gold">{isRtl ? 'إصدار رسمي معتمد' : 'Official Issue'}</span>
            </div>

          </div>

          {/* Right: Security Feature Inspector & Technical Specifications (Cols 8-12) */}
          <div className="lg:col-span-5 space-y-6">
            
            {activeFeature ? (
              <div className="bg-[#11253E] rounded-xl p-6 border-2 border-cbos-gold/60 shadow-xl space-y-4">
                <div className="flex items-center justify-between border-b border-[#22446D] pb-3">
                  <div className="flex items-center gap-2 text-cbos-gold text-xs font-mono font-bold uppercase">
                    <ShieldCheck className="w-4 h-4 text-cbos-gold" />
                    <span>{isRtl ? 'المواصفة التأمينية النشطة' : 'Active Security Feature'}</span>
                  </div>
                  <span className="px-2 py-0.5 rounded bg-[#2F88C2]/30 text-white font-mono text-[10px]">
                    {activeFeature.type.toUpperCase()}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-white font-display">
                  {isRtl ? activeFeature.name.ar : activeFeature.name.en}
                </h3>

                <p className="text-xs md:text-sm text-cbos-ivory/85 leading-relaxed font-sans">
                  {isRtl ? activeFeature.description.ar : activeFeature.description.en}
                </p>

                <div className="p-3 rounded-lg bg-[#0B1A2D] border border-[#22446D] text-xs text-[#8F9CAE] space-y-1 font-mono">
                  <div>{isRtl ? 'اللون الغالب:' : 'Dominant Color:'} <span className="text-white">{isRtl ? note.primaryColor.ar : note.primaryColor.en}</span></div>
                  <div>{isRtl ? 'الموضوع الأمامي:' : 'Front Motif:'} <span className="text-white">{isRtl ? note.frontTheme.ar : note.frontTheme.en}</span></div>
                </div>
              </div>
            ) : null}

            {/* Link to Full Currency Gallery */}
            <div className="pt-2">
              <Link
                href="/banknotes"
                className="w-full py-3 px-4 rounded-xl bg-[#162D4C] hover:bg-cbos-blue text-cbos-gold hover:text-white border border-[#22446D] text-xs font-bold flex items-center justify-center gap-2 transition-all shadow"
              >
                <span>{isRtl ? 'دليل مكافحة التزييف وكافة الفئات النقدية' : 'Full Currency Guide & Counterfeit Prevention'}</span>
                {isRtl ? <ArrowLeft className="w-4 h-4" /> : <ArrowRight className="w-4 h-4" />}
              </Link>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
