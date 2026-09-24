'use client';

import React from 'react';
import Link from 'next/link';
import { useLanguage } from '@/lib/languageContext';
import { officialRatesData } from '@/data/rates';
import { TrendingUp, ArrowRight, ArrowLeft, Clock, ArrowUpRight } from 'lucide-react';

export default function EconomicStrip() {
  const { isRtl, t } = useLanguage();
  
  // Use all available official rates
  const ratesList = officialRatesData.rates;
  
  // Duplicate array for a seamless, continuous infinite ticker loop
  const tickerItems = [...ratesList, ...ratesList];

  return (
    <div className="bg-cbos-ink text-cbos-ivory border-b border-cbos-ink-border py-2.5 px-4 md:px-8 relative overflow-hidden select-none">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4 text-xs font-mono">
        
        {/* Left: Fixed Ticker Label with Live Pulsing Badge */}
        <div className="flex items-center gap-2.5 shrink-0 z-10 bg-cbos-ink pr-3 rtl:pr-0 rtl:pl-3 border-r rtl:border-r-0 rtl:border-l border-cbos-ink-border">
          <div className="flex items-center gap-1.5 text-cbos-gold font-bold">
            <span className="w-2 h-2 rounded-full bg-emerald-400 ring-2 ring-emerald-500/20 shrink-0" />
            <TrendingUp className="w-3.5 h-3.5 text-cbos-gold" />
            <span className="whitespace-nowrap font-arabic">
              {isRtl ? 'الأسعار التأشيرية المباشرة:' : 'Official Indicative Rates:'}
            </span>
          </div>
        </div>

        {/* Center: Infinite Animated Financial Ticker Stream */}
        <div className="flex-1 overflow-hidden relative fx-ticker-mask">
          <div className="animate-fx-ticker flex items-center gap-3 tabular-nums py-0.5">
            {tickerItems.map((r, idx) => (
              <Link
                key={`${r.currency_code}-${idx}`}
                href="/exchange-rates"
                className="flex items-center gap-2 bg-cbos-ink-surface hover:bg-[#1C2C24] px-3 py-1 rounded-lg border border-cbos-ink-border hover:border-cbos-gold/60 transition-all shrink-0 group cursor-pointer"
                title={`${t(r.currency_name)}: ${r.official_middle.toFixed(2)} SDG`}
              >
                <div className="flex items-center gap-1">
                  <span className="text-white font-bold text-xs group-hover:text-cbos-gold transition-colors">
                    {r.currency_code}
                  </span>
                  <span className="text-[10px] text-emerald-400 flex items-center">
                    <ArrowUpRight className="w-2.5 h-2.5" />
                  </span>
                </div>
                
                <span className="text-cbos-gold font-bold text-xs tracking-tight">
                  {r.official_middle.toFixed(2)}
                </span>
                
                <span className="text-[10px] text-cbos-stone/60 font-sans">
                  SDG
                </span>
              </Link>
            ))}
          </div>
        </div>

        {/* Right: Timestamp & Action Shortcut to Exchange Rates Page */}
        <div className="flex items-center gap-3 shrink-0 text-[11px] z-10 bg-cbos-ink pl-3 rtl:pl-0 rtl:pr-3 border-l rtl:border-l-0 rtl:border-r border-cbos-ink-border">
          <span className="hidden xl:flex items-center gap-1.5 text-cbos-stone font-mono">
            <Clock className="w-3 h-3 text-cbos-gold" />
            <span>{officialRatesData.date}</span>
          </span>
          <span className="h-3 w-px bg-cbos-ink-border hidden xl:block" />
          <Link
            href="/exchange-rates"
            className="text-cbos-gold hover:text-white font-bold flex items-center gap-1 transition-colors whitespace-nowrap"
          >
            <span>{isRtl ? 'كافة العملات' : 'All Currencies'}</span>
            {isRtl ? <ArrowLeft className="w-3 h-3" /> : <ArrowRight className="w-3 h-3" />}
          </Link>
        </div>

      </div>
    </div>
  );
}
