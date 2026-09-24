'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useLanguage } from '@/lib/languageContext';
import { primaryNavigation } from '@/data/navigation';
import { NavGroup } from '@/types';
import MegaMenu from './MegaMenu';
import UtilityBar from './UtilityBar';
import { Menu, X, ChevronDown, Search } from 'lucide-react';

export default function Header({ onOpenSearch }: { onOpenSearch?: () => void }) {
  const { isRtl, t } = useLanguage();
  const [activeGroup, setActiveGroup] = useState<NavGroup | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="sticky top-0 z-40 w-full transition-all">
      {/* 1. Utility Top Bar */}
      <UtilityBar onOpenSearch={onOpenSearch} />

      {/* 2. Main Institutional Masthead */}
      <div className={`w-full bg-cbos-green-dark border-b border-cbos-green text-cbos-ivory transition-all duration-200 ${scrolled ? 'shadow-xl py-2.5' : 'py-3.5'}`}>
        <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between">
          
          {/* Official CBOS Crest & Title */}
          <Link href="/" className="flex items-center gap-3.5 group focus:outline-none">
            <div className="relative w-12 h-12 md:w-14 md:h-14 rounded-xl bg-cbos-green/40 border border-cbos-gold/40 p-1 flex items-center justify-center shadow-lg group-hover:border-cbos-gold transition-colors">
              <Image
                src="/images/cbos/official/cbos-logo-white.png"
                alt="شعار بنك السودان المركزي"
                width={56}
                height={56}
                className="object-contain filter drop-shadow"
                priority
              />
            </div>
            
            <div>
              <div className="text-base md:text-lg font-black tracking-tight text-white font-display">
                {isRtl ? 'بنك السودان المركزي' : 'Central Bank of Sudan'}
              </div>
              <div className="text-[11px] md:text-xs text-cbos-gold font-medium font-sans">
                {isRtl ? 'الاستقرار النقدي والشمول المالي' : 'Monetary Stability & Financial Inclusion'}
              </div>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden xl:flex items-center space-x-1 rtl:space-x-reverse text-xs font-semibold">
            {primaryNavigation.slice(0, 7).map((group) => {
              const isActive = activeGroup?.id === group.id;
              return (
                <div
                  key={group.id}
                  className="relative py-2"
                  onMouseEnter={() => setActiveGroup(group)}
                >
                  <button
                    onClick={() => setActiveGroup(isActive ? null : group)}
                    className={`px-3 py-2 rounded-lg transition-all flex items-center gap-1.5 ${
                      isActive 
                        ? 'bg-cbos-green text-white shadow-sm' 
                        : 'text-cbos-ivory/85 hover:text-white hover:bg-cbos-green/30'
                    }`}
                  >
                    <span>{t(group.title)}</span>
                    <ChevronDown className={`w-3 h-3 text-cbos-gold transition-transform duration-200 ${isActive ? 'rotate-180' : ''}`} />
                  </button>
                </div>
              );
            })}
          </nav>

          {/* Search Button & Mobile Hamburger */}
          <div className="flex items-center gap-2">
            <button
              onClick={onOpenSearch}
              className="p-2 rounded-lg bg-cbos-green/40 hover:bg-cbos-green text-cbos-gold transition-colors"
              title={isRtl ? 'البحث في الموقع' : 'Search Website'}
            >
              <Search className="w-4 h-4" />
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="xl:hidden p-2 rounded-lg bg-cbos-green/40 hover:bg-cbos-green text-white transition-colors"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* 3. MegaMenu Dropdown */}
      {activeGroup && (
        <MegaMenu
          group={activeGroup}
          isOpen={!!activeGroup}
          onClose={() => setActiveGroup(null)}
        />
      )}

      {/* 4. Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-cbos-ink border-b-2 border-cbos-gold text-cbos-ivory px-4 py-6 space-y-4 max-h-[80vh] overflow-y-auto animate-fadeIn">
          {primaryNavigation.map((group) => (
            <div key={group.id} className="border-b border-cbos-ink-border pb-3">
              <Link
                href={group.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm font-bold text-cbos-gold flex items-center justify-between"
              >
                <span>{t(group.title)}</span>
              </Link>
              <div className="mt-2 pl-3 rtl:pr-3 space-y-2">
                {group.categories.flatMap(c => c.items).map(item => (
                  <Link
                    key={item.id}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="block text-xs text-cbos-ivory/80 hover:text-white"
                  >
                    {t(item.title)}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </header>
  );
}
