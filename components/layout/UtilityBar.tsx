'use client';

import React from 'react';
import Link from 'next/link';
import { useLanguage } from '@/lib/languageContext';
import { Globe, Search, ShieldCheck, Calendar, PhoneCall, FileText } from 'lucide-react';

export default function UtilityBar({ onOpenSearch }: { onOpenSearch?: () => void }) {
  const { language, toggleLanguage, isRtl, t } = useLanguage();

  return (
    <div 
      className="text-white text-[12.5px] font-semibold border-b border-[#2574A8] py-1.5 px-4 md:px-8 shadow-sm"
      style={{ backgroundColor: '#2F88C2' }}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        
        {/* Left / Start: Sovereign Identification */}
        <div className="flex items-center space-x-3 rtl:space-x-reverse">
          <div className="flex items-center gap-2 font-bold tracking-normal text-white">
            {/* Sovereign Sudanese Flag */}
            <div 
              className="inline-flex items-center shadow-sm rounded-[2.5px] overflow-hidden border border-white/50 shrink-0 cursor-default"
              title={isRtl ? 'علم جمهورية السودان' : 'Flag of the Republic of the Sudan'}
            >
              <svg 
                className="w-5 h-3.5 object-cover block" 
                viewBox="0 0 600 300" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="600" height="100" fill="#D21034" />
                <rect y="100" width="600" height="100" fill="#FFFFFF" />
                <rect y="200" width="600" height="100" fill="#000000" />
                <polygon points="0,0 200,150 0,300" fill="#007229" />
              </svg>
            </div>
            <ShieldCheck className="w-3.5 h-3.5 text-amber-200" />
            <span>{isRtl ? 'جمهورية السودان — بنك السودان المركزي' : 'Republic of the Sudan — Central Bank of Sudan'}</span>
          </div>
          <span className="hidden lg:inline text-white/40">|</span>
          <span className="hidden lg:inline text-white/90 text-xs font-normal">
            {isRtl ? 'السلطة النقدية والرقابية السيادية' : 'Sovereign Monetary & Regulatory Authority'}
          </span>
        </div>

        {/* Right / End: Utilities, Search Trigger & Language Switcher */}
        <div className="flex items-center space-x-4 rtl:space-x-reverse text-[12.5px] font-medium">
          
          {/* Gregorian & Hijri Date */}
          <div className="hidden md:flex items-center gap-1.5 text-white/95">
            <Calendar className="w-3.5 h-3.5 text-amber-200" />
            <span>
              {isRtl 
                ? 'الخميس 24 سبتمبر 2026 م — 12 ربيع الأول 1448 هـ'
                : 'Thursday, 24 September 2026 — 12 Rabi\' al-Awwal 1448 AH'}
            </span>
          </div>

          <span className="h-3.5 w-px bg-white/30 hidden md:block" />

          {/* Quick Links matching cbos.gov.sd */}
          <Link href="/correspondents" className="text-white hover:text-amber-200 transition-colors flex items-center gap-1">
            <span>{isRtl ? 'المراسلين' : 'Correspondents'}</span>
          </Link>

          <span className="h-3.5 w-px bg-white/30 hidden lg:block" />

          <Link href="/consumer-protection" className="text-white hover:text-amber-200 transition-colors hidden lg:flex items-center gap-1">
            <span>{isRtl ? 'حماية المستهلك المالي' : 'Consumer Protection'}</span>
          </Link>

          <span className="h-3.5 w-px bg-white/30 hidden md:block" />

          <Link href="/gallery" className="text-white hover:text-amber-200 transition-colors hidden md:flex items-center gap-1">
            <span>{isRtl ? 'معرض الصور' : 'Gallery'}</span>
          </Link>

          <span className="h-3.5 w-px bg-white/30 hidden sm:block" />

          <Link href="/tenders" className="text-white hover:text-amber-200 transition-colors hidden sm:flex items-center gap-1">
            <FileText className="w-3.5 h-3.5 text-amber-200" />
            <span>{isRtl ? 'العطاءات' : 'Tenders'}</span>
          </Link>

          <span className="h-3.5 w-px bg-white/30" />

          <Link href="/contact" className="text-white hover:text-amber-200 transition-colors flex items-center gap-1">
            <PhoneCall className="w-3.5 h-3.5 text-amber-200" />
            <span>{isRtl ? 'اتصل بنا' : 'Contact'}</span>
          </Link>

          <span className="h-3.5 w-px bg-white/30" />

          {/* Global Search Shortcut Pill */}
          <button
            onClick={onOpenSearch}
            className="flex items-center gap-1.5 px-2.5 py-0.5 rounded bg-black/20 hover:bg-black/35 hover:text-white transition-all text-white border border-white/30 font-mono text-xs"
            title={isRtl ? 'البحث الشامل (اضغط /)' : 'Global Search (Press /)'}
          >
            <Search className="w-3 h-3 text-amber-200" />
            <span className="font-arabic">{isRtl ? 'بحث' : 'Search'}</span>
            <kbd className="bg-black/30 px-1 py-0.2 rounded text-[10px] text-amber-200 font-sans">/</kbd>
          </button>

          {/* Language Switcher */}
          <button
            onClick={toggleLanguage}
            className="flex items-center gap-1.5 px-3 py-1 min-h-[34px] rounded bg-white/15 text-white hover:bg-white hover:text-[#0B1A2D] font-bold transition-all border border-white/40 text-xs shadow-sm"
            aria-label={isRtl ? 'Switch to English' : 'التحويل إلى اللغة العربية'}
          >
            <Globe className="w-3.5 h-3.5" />
            <span>{isRtl ? 'English' : 'العربية'}</span>
          </button>

        </div>

      </div>
    </div>
  );
}
