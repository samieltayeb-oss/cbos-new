'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useLanguage } from '@/lib/languageContext';
import { licensedInstitutionsData } from '@/data/institutions';
import { Landmark, Search, ShieldCheck, ArrowRight, ArrowLeft, ExternalLink } from 'lucide-react';

export default function FinancialSystemEcosystem() {
  const { isRtl } = useLanguage();
  const [filterType, setFilterType] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const filtered = licensedInstitutionsData.filter((inst) => {
    const matchesType = filterType === 'all' || inst.type === filterType;
    const nameStr = (inst.name.ar + ' ' + inst.name.en + ' ' + (inst.swiftBic || '')).toLowerCase();
    const matchesSearch = !searchQuery || nameStr.includes(searchQuery.toLowerCase());
    return matchesType && matchesSearch;
  });

  return (
    <section className="py-14 px-4 md:px-8 bg-cbos-ivory">
      <div className="max-w-7xl mx-auto space-y-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-cbos-stone/60 pb-4">
          <div>
            <span className="text-xs font-bold text-cbos-green uppercase tracking-widest font-mono">
              {isRtl ? 'الهيكل المصرفي والمالي' : 'Regulated Financial Institutions'}
            </span>
            <h2 className="text-2xl md:text-3xl font-black text-cbos-ink font-display mt-1">
              {isRtl ? 'دليل المؤسسات والمصارف المرخصة في السودان' : 'Directory of Licensed Banks & Regulated Entities'}
            </h2>
          </div>
          <Link
            href="/financial-system"
            className="text-xs font-bold text-cbos-green hover:text-cbos-green-dark flex items-center gap-1.5 transition-colors"
          >
            <span>{isRtl ? 'عرض السجل المصرفي الكامل' : 'View Full Registry'}</span>
            {isRtl ? <ArrowLeft className="w-3.5 h-3.5" /> : <ArrowRight className="w-3.5 h-3.5" />}
          </Link>
        </div>

        {/* Filter Controls & Search */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          
          {/* Category Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto w-full sm:w-auto text-xs font-semibold">
            <button
              onClick={() => setFilterType('all')}
              className={`px-3 py-1.5 rounded-lg transition-all ${filterType === 'all' ? 'bg-cbos-green text-white shadow' : 'bg-white text-cbos-ink border border-cbos-stone'}`}
            >
              {isRtl ? 'الكل' : 'All Entities'}
            </button>
            <button
              onClick={() => setFilterType('commercial_bank')}
              className={`px-3 py-1.5 rounded-lg transition-all ${filterType === 'commercial_bank' ? 'bg-cbos-green text-white shadow' : 'bg-white text-cbos-ink border border-cbos-stone'}`}
            >
              {isRtl ? 'المصارف التجارية' : 'Commercial Banks'}
            </button>
            <button
              onClick={() => setFilterType('specialized_bank')}
              className={`px-3 py-1.5 rounded-lg transition-all ${filterType === 'specialized_bank' ? 'bg-cbos-green text-white shadow' : 'bg-white text-cbos-ink border border-cbos-stone'}`}
            >
              {isRtl ? 'المصارف المتخصصة' : 'Specialized Banks'}
            </button>
            <button
              onClick={() => setFilterType('payment_switch')}
              className={`px-3 py-1.5 rounded-lg transition-all ${filterType === 'payment_switch' ? 'bg-cbos-green text-white shadow' : 'bg-white text-cbos-ink border border-cbos-stone'}`}
            >
              {isRtl ? 'أنظمة الدفع والمقسم' : 'Payment Switches'}
            </button>
          </div>

          {/* Quick Search */}
          <div className="relative w-full sm:w-72">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={isRtl ? 'بحث باسم البنك أو كود SWIFT...' : 'Filter bank or SWIFT...'}
              className="w-full bg-white border border-cbos-stone rounded-xl px-3 py-1.5 text-xs text-cbos-ink placeholder-slate-400 outline-none focus:border-cbos-gold"
            />
            <Search className="w-3.5 h-3.5 text-slate-400 absolute right-3 rtl:right-auto rtl:left-3 top-2.5 pointer-events-none" />
          </div>

        </div>

        {/* Directory Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {filtered.map((inst) => (
            <div
              key={inst.id}
              className="p-5 rounded-2xl bg-white border border-cbos-stone hover:border-cbos-green hover:shadow-cbos-elevation transition-all flex flex-col justify-between space-y-4"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="w-8 h-8 rounded-lg bg-cbos-green/10 text-cbos-green flex items-center justify-center font-bold text-xs font-mono">
                    {inst.id.substring(0, 3)}
                  </div>
                  <span className="px-2 py-0.5 rounded bg-emerald-100 text-emerald-800 text-[10px] font-bold font-mono">
                    {inst.status === 'active' ? (isRtl ? 'مرخص نشط' : 'Licensed') : inst.status}
                  </span>
                </div>

                <div>
                  <h4 className="text-sm font-bold text-cbos-ink font-display">
                    {isRtl ? inst.name.ar : inst.name.en}
                  </h4>
                  <div className="text-[11px] text-cbos-gold font-mono mt-0.5">
                    {isRtl ? inst.typeLabel.ar : inst.typeLabel.en}
                  </div>
                </div>

                <div className="text-[11px] text-slate-500 font-mono space-y-0.5 pt-1">
                  <div>{isRtl ? 'الترخيص:' : 'License:'} <span className="text-cbos-ink">{inst.licenseNumber}</span></div>
                  {inst.swiftBic && <div>SWIFT: <span className="text-cbos-ink font-bold">{inst.swiftBic}</span></div>}
                  <div>{isRtl ? 'المقر:' : 'HQ:'} <span>{isRtl ? inst.headquarters.ar : inst.headquarters.en}</span></div>
                </div>
              </div>

              <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                <span className="text-[10px] text-slate-400 font-mono">
                  {isRtl ? `تأسس عام ${inst.establishedYear}` : `Est. ${inst.establishedYear}`}
                </span>
                {inst.website && (
                  <a
                    href={inst.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-cbos-green hover:text-cbos-gold font-bold flex items-center gap-1 text-[11px]"
                  >
                    <span>{isRtl ? 'البوابة' : 'Portal'}</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
