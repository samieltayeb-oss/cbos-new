'use client';

import React from 'react';
import Link from 'next/link';
import { useLanguage } from '@/lib/languageContext';
import { Globe, Search, ShieldCheck, Calendar, PhoneCall, FileText } from 'lucide-react';

export default function UtilityBar({ onOpenSearch }: { onOpenSearch?: () => void }) {
  const { language, toggleLanguage, isRtl, t } = useLanguage();

  return (
    <div 
      className="text-white text-[12.5px] font-medium border-b border-[#075A3A]/60 py-2 px-4 md:px-8"
      style={{ backgroundColor: '#022319' }}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        
        {/* Left / Start: Sovereign Identification */}
        <div className="flex items-center space-x-3 rtl:space-x-reverse">
          <div className="flex items-center gap-1.5 font-bold tracking-normal text-white">
            <ShieldCheck className="w-3.5 h-3.5 text-[#B99553]" />
            <span>{isRtl ? 'جمهورية السودان — بنك السودان المركزي' : 'Republic of the Sudan — Central Bank of Sudan'}</span>
          </div>
          <span className="hidden lg:inline text-white/30">|</span>
          <span className="hidden lg:inline text-[#DDC99B] text-xs font-normal">
            {isRtl ? 'السلطة النقدية والرقابية السيادية' : 'Sovereign Monetary & Regulatory Authority'}
          </span>
        </div>

        {/* Right / End: Utilities, Search Trigger & Language Switcher */}
        <div className="flex items-center space-x-4 rtl:space-x-reverse text-[12.5px] font-medium">
          
          {/* Gregorian & Hijri Date */}
          <div className="hidden md:flex items-center gap-1 text-[#E2DDD3]">
            <Calendar className="w-3.5 h-3.5 text-[#B99553]" />
            <span>
              {isRtl 
                ? 'الخميس 24 سبتمبر 2026 م — 12 ربيع الأول 1448 هـ'
                : 'Thursday, 24 September 2026 — 12 Rabi\' al-Awwal 1448 AH'}
            </span>
          </div>

          <span className="h-3.5 w-px bg-white/20 hidden md:block" />

          {/* Quick Links */}
          <Link href="/news" className="text-white hover:text-[#B99553] transition-colors flex items-center gap-1">
            <FileText className="w-3.5 h-3.5 text-[#B99553]" />
            <span>{isRtl ? 'العطاءات' : 'Tenders'}</span>
          </Link>

          <Link href="/contact" className="text-white hover:text-[#B99553] transition-colors flex items-center gap-1">
            <PhoneCall className="w-3.5 h-3.5 text-[#B99553]" />
            <span>{isRtl ? 'الاتصال' : 'Contact'}</span>
          </Link>

          <span className="h-3.5 w-px bg-white/20" />

          {/* Global Search Shortcut Pill */}
          <button
            onClick={onOpenSearch}
            className="flex items-center gap-1.5 px-2.5 py-0.5 rounded bg-[#075A3A]/70 hover:bg-[#075A3A] hover:text-white transition-all text-white border border-[#B99553]/40 font-mono text-xs"
            title={isRtl ? 'البحث الشامل (اضغط /)' : 'Global Search (Press /)'}
          >
            <Search className="w-3 h-3 text-[#B99553]" />
            <span className="font-arabic">{isRtl ? 'بحث' : 'Search'}</span>
            <kbd className="bg-black/40 px-1 py-0.2 rounded text-[10px] text-[#DDC99B] font-sans">/</kbd>
          </button>

          {/* Language Switcher */}
          <button
            onClick={toggleLanguage}
            className="flex items-center gap-1 px-3 py-1 rounded bg-[#B99553]/20 text-[#DDC99B] hover:bg-[#B99553] hover:text-[#101713] font-bold transition-all border border-[#B99553]/50 text-xs"
          >
            <Globe className="w-3.5 h-3.5" />
            <span>{isRtl ? 'English' : 'العربية'}</span>
          </button>

        </div>

      </div>
    </div>
  );
}
