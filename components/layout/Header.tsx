'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useLanguage } from '@/lib/languageContext';
import { primaryNavigation } from '@/data/navigation';
import { NavGroup } from '@/types';
import MegaMenu from './MegaMenu';
import UtilityBar from './UtilityBar';
import { Menu, X, ChevronDown, Search, PhoneCall, Building2, FileText, ShieldCheck } from 'lucide-react';

export default function Header({ onOpenSearch }: { onOpenSearch?: () => void }) {
  const { isRtl, t } = useLanguage();
  const [activeGroup, setActiveGroup] = useState<NavGroup | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="sticky top-0 z-40 w-full transition-all">
      {/* 1. Sovereign Utility Top Bar */}
      <UtilityBar />

      {/* 2. Main Institutional Masthead */}
      <div 
        className={`w-full border-b border-[#22446D] text-white transition-all duration-200 ${scrolled ? 'shadow-xl py-2.5' : 'py-3.5'}`}
        style={{ backgroundColor: '#0B1A2D' }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          
          {/* Official CBOS Crest & Title */}
          <Link 
            href="/" 
            className="flex items-center gap-3.5 group focus:outline-none shrink-0"
            aria-label={isRtl ? 'الرئيسية — بنك السودان المركزي' : 'Home — Central Bank of Sudan'}
          >
            <div className="relative w-11 h-11 sm:w-12 sm:h-12 md:w-14 md:h-14 flex items-center justify-center shrink-0">
              <Image
                src="/images/cbos/official/cbos-logo-white.png"
                alt="شعار بنك السودان المركزي"
                width={56}
                height={56}
                className="object-contain w-full h-full drop-shadow-md group-hover:scale-105 transition-transform"
                priority
              />
            </div>
            
            <div>
              <div className="text-base sm:text-lg lg:text-[19px] font-bold tracking-tight text-white font-display">
                {isRtl ? 'بنك السودان المركزي' : 'Central Bank of Sudan'}
              </div>
              <div className="text-[11.5px] sm:text-xs text-[#8F9CAE] font-medium font-sans mt-0.5">
                {isRtl ? 'الاستقرار النقدي والشمول المالي' : 'Monetary Stability & Financial Inclusion'}
              </div>
            </div>
          </Link>

          {/* Desktop Primary Navigation Links */}
          <nav 
            className="hidden xl:flex items-center gap-1 rtl:space-x-reverse text-[14.5px] font-medium font-sans"
            aria-label={isRtl ? 'التنقل الرئيسي' : 'Primary Navigation'}
          >
            {primaryNavigation.slice(0, 7).map((group) => {
              const isActive = activeGroup?.id === group.id;
              return (
                <div
                  key={group.id}
                  className="relative py-1"
                  onMouseEnter={() => setActiveGroup(group)}
                >
                  <button
                    onClick={() => setActiveGroup(isActive ? null : group)}
                    className={`px-3.5 py-2 rounded-lg transition-all flex items-center gap-1.5 ${
                      isActive 
                        ? 'bg-[#162D4C] text-white shadow-sm border-b-2 border-[#2F88C2]' 
                        : 'text-white/90 hover:text-white hover:bg-white/[0.06]'
                    }`}
                    aria-expanded={isActive}
                  >
                    <span>{t(group.title)}</span>
                    <ChevronDown className={`w-3.5 h-3.5 text-[#2F88C2] group-hover:text-[#DFAC46] transition-transform duration-200 ${isActive ? 'rotate-180' : ''}`} />
                  </button>
                </div>
              );
            })}
          </nav>

          {/* Action Triggers: Search & Accessible Mobile Hamburger */}
          <div className="flex items-center gap-2.5">
            {/* Global Search Shortcut Pill */}
            <button
              onClick={onOpenSearch}
              className="w-11 h-11 min-w-[44px] min-h-[44px] flex items-center justify-center rounded-lg bg-[#162D4C] hover:bg-[#1B375C] text-[#DFAC46] hover:text-white border border-[#22446D] transition-colors shadow-sm focus:outline-none focus:ring-2 focus:ring-[#DFAC46]"
              title={isRtl ? 'البحث في الموقع (اضغط /)' : 'Search Website (Press /)'}
              aria-label={isRtl ? 'البحث في الموقع' : 'Search Website'}
            >
              <Search className="w-4 h-4" />
            </button>

            {/* Accessible 44x44px Hamburger Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="xl:hidden w-11 h-11 min-w-[44px] min-h-[44px] flex items-center justify-center rounded-lg bg-[#162D4C] hover:bg-[#1B375C] text-white border border-[#22446D] transition-colors shadow-sm focus:outline-none focus:ring-2 focus:ring-[#2F88C2]"
              aria-label={mobileMenuOpen ? 'إغلاق القائمة' : 'فتح القائمة الرئيسية'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-5 h-5 text-amber-200" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* 3. Secondary Navigation: Disciplined MegaMenu Dropdown */}
      {activeGroup && (
        <MegaMenu
          group={activeGroup}
          isOpen={!!activeGroup}
          onClose={() => setActiveGroup(null)}
        />
      )}

      {/* 4. Mobile Navigation Drawer (Spacious, Touch-Friendly, Accessible) */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-[#0B1A2D] border-b-2 border-[#2F88C2] text-white px-5 py-6 space-y-6 max-h-[82vh] overflow-y-auto animate-fadeIn shadow-2xl">
          
          {/* Main Navigation Sections */}
          <div className="space-y-4">
            {primaryNavigation.map((group) => (
              <div key={group.id} className="border-b border-[#22446D]/60 pb-3">
                <Link
                  href={group.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="min-h-[44px] flex items-center justify-between text-base font-bold text-[#DFAC46] font-display hover:text-white transition-colors"
                >
                  <span>{t(group.title)}</span>
                </Link>
                
                {/* Child Links with Disciplined Spacing & 44px Minimum Touch Targets */}
                <div className="mt-2 space-y-1 ps-2 rtl:pr-2 border-s-2 rtl:border-r-2 rtl:border-s-0 border-[#22446D]/50">
                  {group.categories.flatMap(c => c.items).map(item => (
                    <Link
                      key={item.id}
                      href={item.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="min-h-[44px] flex items-center px-3 rounded-lg text-[14.5px] text-white/85 hover:text-white hover:bg-white/[0.06] font-sans font-medium transition-colors"
                    >
                      {t(item.title)}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Quick Utility Access within Mobile Drawer */}
          <div className="pt-4 border-t border-[#22446D] space-y-3 font-sans">
            <div className="text-xs font-bold uppercase tracking-wider text-[#8F9CAE]">
              {isRtl ? 'روابط وقنوات رسمية مباشرة' : 'Direct Institutional Channels'}
            </div>
            
            <div className="grid grid-cols-2 gap-2 text-xs font-medium">
              <Link
                href="/correspondents"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center gap-2 p-2.5 rounded-lg bg-[#11253E] border border-[#22446D] text-white hover:text-amber-200"
              >
                <Building2 className="w-3.5 h-3.5 text-[#2F88C2]" />
                <span>{isRtl ? 'المراسلين' : 'Correspondents'}</span>
              </Link>

              <Link
                href="/tenders"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center gap-2 p-2.5 rounded-lg bg-[#11253E] border border-[#22446D] text-white hover:text-amber-200"
              >
                <FileText className="w-3.5 h-3.5 text-[#2F88C2]" />
                <span>{isRtl ? 'العطاءات' : 'Tenders'}</span>
              </Link>

              <Link
                href="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center gap-2 p-2.5 rounded-lg bg-[#11253E] border border-[#22446D] text-white hover:text-amber-200"
              >
                <PhoneCall className="w-3.5 h-3.5 text-[#2F88C2]" />
                <span>{isRtl ? 'اتصل بنا' : 'Contact'}</span>
              </Link>

              <Link
                href="/consumer-protection"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center gap-2 p-2.5 rounded-lg bg-[#11253E] border border-[#22446D] text-white hover:text-amber-200"
              >
                <ShieldCheck className="w-3.5 h-3.5 text-[#2F88C2]" />
                <span>{isRtl ? 'حماية المستهلك' : 'Protection'}</span>
              </Link>
            </div>

            {/* Hotline Strip */}
            <div className="p-3 rounded-lg bg-[#162D4C] border border-[#22446D] flex items-center justify-between text-xs">
              <span className="text-white/80 font-medium">{isRtl ? 'الخط الساخن للمستهلك المصرفي:' : 'Consumer Hotline:'}</span>
              <a href="tel:1959" className="font-mono font-bold text-[#DFAC46] text-sm">1959</a>
            </div>
          </div>

        </div>
      )}
    </header>
  );
}
