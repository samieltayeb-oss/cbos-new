'use client';

import React from 'react';
import Link from 'next/link';
import { useLanguage } from '@/lib/languageContext';
import { officialRatesData } from '@/data/rates';
import { TrendingUp, FileText, ArrowRight, ArrowLeft, Clock } from 'lucide-react';

export default function EconomicStrip() {
  const { isRtl } = useLanguage();
  const primaryRates = officialRatesData.rates.filter(r => r.isPrimary).slice(0, 4);

  return (
    <div className="bg-cbos-ink text-cbos-ivory border-b border-cbos-ink-border py-3 px-4 md:px-8">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-mono">
        
        {/* FX Quick Strip */}
        <div className="flex items-center gap-4 overflow-x-auto w-full md:w-auto">
          <div className="flex items-center gap-1.5 text-cbos-gold font-bold shrink-0">
            <TrendingUp className="w-3.5 h-3.5" />
            <span>{isRtl ? 'الأسعار التأشيرية الرسمية:' : 'Official Indicative Rates:'}</span>
          </div>

          <div className="flex items-center gap-4 text-cbos-stone shrink-0 tabular-nums">
            {primaryRates.map((r) => (
              <div key={r.currency_code} className="flex items-center gap-1.5 bg-cbos-ink-surface px-2.5 py-1 rounded border border-cbos-ink-border">
                <span className="text-white font-bold">{r.currency_code}:</span>
                <span className="text-cbos-gold font-bold">{r.official_middle.toFixed(2)}</span>
                <span className="text-[10px] text-cbos-stone/60">SDG</span>
              </div>
            ))}
          </div>
        </div>

        {/* Action Shortcut to Full Rates Table */}
        <div className="flex items-center gap-3 shrink-0 text-[11px]">
          <span className="hidden lg:flex items-center gap-1 text-cbos-stone">
            <Clock className="w-3 h-3 text-cbos-gold" />
            <span>{officialRatesData.date}</span>
          </span>
          <span className="h-3 w-px bg-cbos-ink-border hidden lg:block"></span>
          <Link
            href="/exchange-rates"
            className="text-cbos-gold hover:text-white font-bold flex items-center gap-1 transition-colors"
          >
            <span>{isRtl ? 'جدول كافة العملات الأجنبية' : 'All Currencies Table'}</span>
            {isRtl ? <ArrowLeft className="w-3 h-3" /> : <ArrowRight className="w-3 h-3" />}
          </Link>
        </div>

      </div>
    </div>
  );
}
