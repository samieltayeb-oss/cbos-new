'use client';

import React from 'react';
import Link from 'next/link';
import { useLanguage } from '@/lib/languageContext';
import { Globe, Calendar, PhoneCall, FileText, Building2 } from 'lucide-react';

export default function UtilityBar() {
  const { toggleLanguage, isRtl } = useLanguage();

  return (
    <div 
      className="text-white text-xs font-sans border-b border-[#2574A8] py-1.5 px-4 md:px-8 shadow-sm transition-all"
      style={{ backgroundColor: '#2F88C2' }}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between min-h-[28px]">
        
        {/* Left / Start: Sovereign Identification & Official Calendar */}
        <div className="flex items-center gap-3">
          {/* Sovereign Sudanese Flag */}
          <div 
            className="inline-flex items-center shadow-sm rounded-[2px] overflow-hidden border border-white/60 shrink-0"
            title={isRtl ? 'علم جمهورية السودان' : 'Flag of the Republic of the Sudan'}
          >
            <svg 
              className="w-5 h-3.5 object-cover block" 
              viewBox="0 0 600 300" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <rect width="600" height="100" fill="#D21034" />
              <rect y="100" width="600" height="100" fill="#FFFFFF" />
              <rect y="200" width="600" height="100" fill="#000000" />
              <polygon points="0,0 200,150 0,300" fill="#007229" />
            </svg>
          </div>

          <div className="flex items-center gap-2 font-bold tracking-normal text-white text-xs sm:text-[13px]">
            <span>{isRtl ? 'جمهورية السودان' : 'Republic of the Sudan'}</span>
            <span className="text-white/60 font-normal">•</span>
            <span className="font-semibold text-white/95">
              {isRtl ? 'بنك السودان المركزي' : 'Central Bank of Sudan'}
            </span>
          </div>

          {/* Gregorian & Hijri Sovereign Calendar (Desktop Only) */}
          <div className="hidden lg:flex items-center gap-1.5 text-white/90 text-[12px] font-normal border-s border-white/30 ps-3 ms-1">
            <Calendar className="w-3.5 h-3.5 text-amber-200 shrink-0" />
            <span>
              {isRtl 
                ? 'الخميس 24 سبتمبر 2026 م — 12 ربيع الأول 1448 هـ'
                : 'Thursday, 24 September 2026 — 12 Rabi\' al-Awwal 1448 AH'}
            </span>
          </div>
        </div>

        {/* Right / End: Direct Institutional Utilities & Language Switcher */}
        <div className="flex items-center gap-4 text-xs font-medium">
          
          {/* Desktop Secondary Institutional Links */}
          <div className="hidden md:flex items-center gap-5 text-white/95">
            <Link 
              href="/correspondents" 
              className="hover:text-amber-200 transition-colors flex items-center gap-1 text-[12.5px]"
            >
              <Building2 className="w-3.5 h-3.5 text-white/70" />
              <span>{isRtl ? 'المراسلين' : 'Correspondents'}</span>
            </Link>

            <Link 
              href="/tenders" 
              className="hover:text-amber-200 transition-colors flex items-center gap-1 text-[12.5px]"
            >
              <FileText className="w-3.5 h-3.5 text-white/70" />
              <span>{isRtl ? 'العطاءات' : 'Tenders'}</span>
            </Link>

            <Link 
              href="/contact" 
              className="hover:text-amber-200 transition-colors flex items-center gap-1 text-[12.5px]"
            >
              <PhoneCall className="w-3.5 h-3.5 text-white/70" />
              <span>{isRtl ? 'اتصل بنا' : 'Contact'}</span>
            </Link>

            <span className="h-3.5 w-px bg-white/30" />

            {/* Official LinkedIn Channel */}
            <a
              href="https://www.linkedin.com/company/central-bank-of-sudan/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-6 h-6 rounded bg-black/15 hover:bg-[#0077B5] hover:text-white transition-all text-white border border-white/20"
              title="Central Bank of Sudan on LinkedIn"
              aria-label="Central Bank of Sudan on LinkedIn"
            >
              <svg className="w-3 h-3 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451c.979 0 1.778-.773 1.778-1.729V1.73C24 .774 23.205 0 22.222 0h.003z"/>
              </svg>
            </a>
          </div>

          {/* Canonical Language Switcher (Always accessible across mobile and desktop) */}
          <button
            onClick={toggleLanguage}
            className="flex items-center gap-1.5 px-3 py-1 min-h-[32px] rounded bg-black/15 text-white hover:bg-white hover:text-[#0B1A2D] font-bold transition-all border border-white/30 text-xs shadow-sm"
            aria-label={isRtl ? 'Switch to English' : 'التحويل إلى اللغة العربية'}
          >
            <Globe className="w-3.5 h-3.5 shrink-0" />
            <span className="font-sans">{isRtl ? 'English' : 'العربية'}</span>
          </button>

        </div>

      </div>
    </div>
  );
}
