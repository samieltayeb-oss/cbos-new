'use client';

import React from 'react';
import Link from 'next/link';
import { useLanguage } from '@/lib/languageContext';
import { Globe, Search, ShieldCheck, Calendar, PhoneCall, FileText } from 'lucide-react';

export default function UtilityBar({ onOpenSearch }: { onOpenSearch?: () => void }) {
  const { language, toggleLanguage, isRtl, t } = useLanguage();

  return (
    <div className="bg-cbos-green-dark text-cbos-ivory/90 text-xs border-b border-cbos-green/40 py-1.5 px-4 md:px-8">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        
        {/* Left / Start: Sovereign Identification */}
        <div className="flex items-center space-x-3 rtl:space-x-reverse">
          <div className="flex items-center gap-1.5 font-bold tracking-wide text-white">
            <ShieldCheck className="w-3.5 h-3.5 text-cbos-gold" />
            <span>{isRtl ? 'جمهورية السودان — بنك السودان المركزي' : 'Republic of the Sudan — Central Bank of Sudan'}</span>
          </div>
          <span className="hidden lg:inline text-cbos-ivory/40">|</span>
          <span className="hidden lg:inline text-cbos-ivory/70 text-[11px]">
            {isRtl ? 'السلطة النقدية والرقابية السيادية' : 'Sovereign Monetary & Regulatory Authority'}
          </span>
        </div>

        {/* Right / End: Utilities, Search Trigger & Language Switcher */}
        <div className="flex items-center space-x-4 rtl:space-x-reverse text-[11px]">
          
          {/* Gregorian & Hijri Date */}
          <div className="hidden md:flex items-center gap-1 text-cbos-ivory/80">
            <Calendar className="w-3 h-3 text-cbos-gold" />
            <span>
              {isRtl 
                ? 'الخميس 24 سبتمبر 2026 م — 12 ربيع الأول 1448 هـ'
                : 'Thursday, 24 September 2026 — 12 Rabi\' al-Awwal 1448 AH'}
            </span>
          </div>

          <span className="h-3 w-px bg-cbos-green/60 hidden md:block" />

          {/* Quick Links */}
          <Link href="/tenders" className="hover:text-cbos-gold transition-colors flex items-center gap-1">
            <FileText className="w-3 h-3 text-cbos-gold" />
            <span>{isRtl ? 'العطاءات' : 'Tenders'}</span>
          </Link>

          <Link href="/contact" className="hover:text-cbos-gold transition-colors flex items-center gap-1">
            <PhoneCall className="w-3 h-3 text-cbos-gold" />
            <span>{isRtl ? 'الاتصال' : 'Contact'}</span>
          </Link>

          <span className="h-3 w-px bg-cbos-green/60" />

          {/* Global Search Shortcut Pill */}
          <button
            onClick={onOpenSearch}
            className="flex items-center gap-1.5 px-2 py-0.5 rounded bg-cbos-green/50 hover:bg-cbos-green hover:text-white transition-all text-cbos-ivory/90 border border-cbos-green/60 font-mono text-[11px]"
            title={isRtl ? 'البحث الشامل (اضغط /)' : 'Global Search (Press /)'}
          >
            <Search className="w-3 h-3 text-cbos-gold" />
            <span>{isRtl ? 'بحث' : 'Search'}</span>
            <kbd className="bg-black/30 px-1 py-0.2 rounded text-[9px] text-cbos-gold font-sans">/</kbd>
          </button>

          {/* Language Switcher */}
          <button
            onClick={toggleLanguage}
            className="flex items-center gap-1 px-2.5 py-0.5 rounded bg-cbos-gold/15 text-cbos-gold hover:bg-cbos-gold hover:text-cbos-ink font-bold transition-all border border-cbos-gold/40 text-[11px]"
          >
            <Globe className="w-3 h-3" />
            <span>{isRtl ? 'English' : 'العربية'}</span>
          </button>

        </div>

      </div>
    </div>
  );
}
