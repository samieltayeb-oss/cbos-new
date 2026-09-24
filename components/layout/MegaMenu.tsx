'use client';

import React from 'react';
import Link from 'next/link';
import { useLanguage } from '@/lib/languageContext';
import { NavGroup } from '@/types';
import { ArrowLeft, ArrowRight, FileText, ExternalLink, ChevronRight, ChevronLeft } from 'lucide-react';

interface MegaMenuProps {
  group: NavGroup;
  isOpen: boolean;
  onClose: () => void;
}

export default function MegaMenu({ group, isOpen, onClose }: MegaMenuProps) {
  const { isRtl, t } = useLanguage();

  if (!isOpen) return null;

  return (
    <div 
      className="absolute top-full left-0 right-0 w-full bg-cbos-ink text-cbos-ivory border-b-2 border-cbos-gold shadow-2xl z-40 transition-all duration-300 animate-fadeIn"
      onMouseLeave={onClose}
    >
      <div className="max-w-7xl mx-auto px-6 py-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          
          {/* Main Navigation Links (Cols 1, 2 & 3) */}
          <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-2 gap-8">
            {group.categories.map((cat, idx) => (
              <div key={idx} className="space-y-4">
                <h3 className="text-xs font-bold uppercase tracking-wider text-cbos-gold border-b border-cbos-ink-border pb-2 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-cbos-gold inline-block"></span>
                  {t(cat.title)}
                </h3>
                
                <ul className="space-y-3">
                  {cat.items.map((item) => (
                    <li key={item.id}>
                      <Link
                        href={item.href}
                        onClick={onClose}
                        className="group flex items-start gap-2 text-sm text-cbos-ivory/80 hover:text-white transition-colors"
                      >
                        <span className="text-cbos-gold/60 group-hover:text-cbos-gold transition-colors mt-1">
                          {isRtl ? <ChevronLeft className="w-3.5 h-3.5" /> : <ChevronRight className="w-3.5 h-3.5" />}
                        </span>
                        <div>
                          <div className="font-semibold group-hover:translate-x-0.5 rtl:group-hover:-translate-x-0.5 transition-transform">
                            {t(item.title)}
                          </div>
                          {item.description && (
                            <div className="text-xs text-cbos-stone mt-0.5">
                              {t(item.description)}
                            </div>
                          )}
                        </div>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Featured Sovereign Document / Direct Action (Col 4) */}
          <div className="bg-cbos-ink-card border border-cbos-ink-border rounded-xl p-5 flex flex-col justify-between">
            {group.featuredDocument ? (
              <div className="space-y-3">
                <div className="flex items-center justify-between text-[11px] text-cbos-gold font-mono">
                  <span>{isRtl ? 'وثيقة مميزة' : 'Featured Publication'}</span>
                  <span>{group.featuredDocument.refNumber}</span>
                </div>
                
                <div className="w-8 h-8 rounded-lg bg-cbos-gold/15 flex items-center justify-center text-cbos-gold">
                  <FileText className="w-4 h-4" />
                </div>
                
                <h4 className="text-sm font-bold text-white line-clamp-2">
                  {t(group.featuredDocument.title)}
                </h4>
                
                <p className="text-xs text-cbos-stone">
                  {isRtl 
                    ? 'إصدار رسمي معتمد متوفر للاطلاع المباشر والتحميل الرقمي بصيغة PDF.'
                    : 'Official institutional release available for instant reading and digital download.'}
                </p>
                
                <Link
                  href={group.featuredDocument.href}
                  onClick={onClose}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-cbos-gold hover:text-cbos-gold-light mt-2"
                >
                  <span>{isRtl ? 'عرض الوثيقة الكاملة' : 'View Full Document'}</span>
                  {isRtl ? <ArrowLeft className="w-3.5 h-3.5" /> : <ArrowRight className="w-3.5 h-3.5" />}
                </Link>
              </div>
            ) : (
              <div className="space-y-3">
                <div className="text-xs text-cbos-gold font-mono font-bold">
                  {isRtl ? 'الخدمات الإلكترونية' : 'Digital Services'}
                </div>
                <p className="text-xs text-cbos-stone">
                  {isRtl 
                    ? 'الوصول المباشر إلى قواعد بيانات ونظم البنك المركزي.'
                    : 'Direct access to Central Bank registries and sovereign databases.'}
                </p>
                <Link
                  href={group.href}
                  onClick={onClose}
                  className="inline-flex items-center gap-1 text-xs font-bold text-cbos-gold"
                >
                  <span>{isRtl ? 'استعراض القسم بالكامل' : 'Explore All Section'}</span>
                  {isRtl ? <ArrowLeft className="w-3.5 h-3.5" /> : <ArrowRight className="w-3.5 h-3.5" />}
                </Link>
              </div>
            )}

            <div className="pt-4 border-t border-cbos-ink-border text-[11px] text-cbos-stone font-mono flex items-center justify-between">
              <span>CBOS Sovereign Portal</span>
              <span className="text-cbos-gold">2026</span>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}
