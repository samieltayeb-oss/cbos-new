'use client';

import React from 'react';
import Link from 'next/link';
import { useLanguage } from '@/lib/languageContext';
import { NavGroup } from '@/types';
import { ArrowLeft, ArrowRight, FileText, ChevronRight, ChevronLeft } from 'lucide-react';

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
      className="absolute top-full left-0 right-0 w-full text-white border-b-2 border-[#B99553] shadow-2xl z-40 transition-all duration-300 animate-fadeIn"
      style={{ backgroundColor: '#0A1813' }}
      onMouseLeave={onClose}
    >
      <div className="max-w-7xl mx-auto px-6 py-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          
          {/* Main Navigation Links (Cols 1, 2 & 3) */}
          <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-2 gap-8">
            {group.categories.map((cat, idx) => (
              <div key={idx} className="space-y-4">
                <h3 className="text-xs font-bold uppercase tracking-wider text-[#DDC99B] border-b border-[#273830] pb-2 flex items-center gap-1.5 font-mono">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#B99553] inline-block" />
                  <span>{t(cat.title)}</span>
                </h3>
                
                <ul className="space-y-3.5">
                  {cat.items.map((item) => (
                    <li key={item.id}>
                      <Link
                        href={item.href}
                        onClick={onClose}
                        className="group flex items-start gap-2.5 text-[14.5px] text-white/90 hover:text-white transition-colors"
                      >
                        <span className="text-[#B99553] group-hover:translate-x-0.5 rtl:group-hover:-translate-x-0.5 transition-transform mt-1">
                          {isRtl ? <ChevronLeft className="w-3.5 h-3.5" /> : <ChevronRight className="w-3.5 h-3.5" />}
                        </span>
                        <div>
                          <div className="font-semibold text-white group-hover:text-[#DDC99B] transition-colors">
                            {t(item.title)}
                          </div>
                          {item.description && (
                            <div className="text-[13px] text-[#D8D4C8] mt-0.5 leading-normal">
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
          <div className="bg-[#15231C] border border-[#273830] rounded-xl p-5 flex flex-col justify-between">
            {group.featuredDocument ? (
              <div className="space-y-3">
                <div className="flex items-center justify-between text-xs text-[#DDC99B] font-mono">
                  <span className="font-bold">{isRtl ? 'وثيقة رسمية مميزة' : 'Featured Publication'}</span>
                  <span dir="ltr">{group.featuredDocument.refNumber}</span>
                </div>
                
                <div className="w-8 h-8 rounded-lg bg-[#B99553]/20 flex items-center justify-center text-[#B99553]">
                  <FileText className="w-4 h-4" />
                </div>
                
                <h4 className="text-[15px] font-bold text-white line-clamp-2 leading-snug">
                  {t(group.featuredDocument.title)}
                </h4>
                
                <p className="text-[13px] text-[#D8D4C8] leading-relaxed">
                  {isRtl 
                    ? 'إصدار رسمي معتمد متوفر للاطلاع المباشر والتحميل الرقمي بصيغة PDF.'
                    : 'Official institutional release available for instant reading and digital download.'}
                </p>
                
                <Link
                  href={group.featuredDocument.href}
                  onClick={onClose}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#DDC99B] hover:text-white transition-colors mt-2"
                >
                  <span>{isRtl ? 'عرض الوثيقة الكاملة' : 'View Full Document'}</span>
                  {isRtl ? <ArrowLeft className="w-3.5 h-3.5" /> : <ArrowRight className="w-3.5 h-3.5" />}
                </Link>
              </div>
            ) : (
              <div className="space-y-3">
                <div className="text-xs text-[#DDC99B] font-mono font-bold">
                  {isRtl ? 'الخدمات الإلكترونية' : 'Digital Services'}
                </div>
                <p className="text-[13px] text-[#D8D4C8] leading-relaxed">
                  {isRtl 
                    ? 'الوصول المباشر إلى قواعد بيانات ونظم البنك المركزي.'
                    : 'Direct access to Central Bank registries and sovereign databases.'}
                </p>
                <Link
                  href={group.href}
                  onClick={onClose}
                  className="inline-flex items-center gap-1 text-xs font-bold text-[#DDC99B] hover:text-white transition-colors"
                >
                  <span>{isRtl ? 'استعراض القسم بالكامل' : 'Explore All Section'}</span>
                  {isRtl ? <ArrowLeft className="w-3.5 h-3.5" /> : <ArrowRight className="w-3.5 h-3.5" />}
                </Link>
              </div>
            )}

            <div className="pt-4 border-t border-[#273830] text-[11px] text-[#A8A294] font-mono flex items-center justify-between">
              <span>CBOS Sovereign Portal</span>
              <span className="text-[#B99553] font-bold">2026</span>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}
