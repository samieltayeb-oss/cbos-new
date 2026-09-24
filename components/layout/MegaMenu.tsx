'use client';

import React from 'react';
import Link from 'next/link';
import { useLanguage } from '@/lib/languageContext';
import { NavGroup } from '@/types';
import { ArrowLeft, ArrowRight, FileText, ChevronRight, ChevronLeft, ExternalLink } from 'lucide-react';

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
      className="absolute top-full left-0 right-0 w-full text-white border-b-2 border-[#2F88C2] shadow-2xl z-40 transition-all duration-200 animate-fadeIn"
      style={{ backgroundColor: '#0B1A2D' }}
      onMouseLeave={onClose}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 xl:gap-12 items-start">
          
          {/* Main Navigation Categories (Cols 1-8/9) with Generous Breathing Room */}
          <div className="lg:col-span-8 xl:col-span-9 grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {group.categories.map((cat, idx) => (
              <div key={idx} className="space-y-5">
                <h3 className="text-xs font-bold uppercase tracking-wider text-[#2F88C2] border-b border-[#22446D] pb-3 flex items-center gap-2 font-sans">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#2F88C2] inline-block shrink-0" />
                  <span>{t(cat.title)}</span>
                </h3>
                
                <ul className="space-y-4">
                  {cat.items.map((item) => (
                    <li key={item.id}>
                      <Link
                        href={item.href}
                        onClick={onClose}
                        className="group block p-2 -mx-2 rounded-lg hover:bg-white/[0.04] transition-all"
                      >
                        <div className="flex items-start gap-2.5">
                          <span className="text-[#2F88C2] group-hover:text-[#DFAC46] group-hover:translate-x-0.5 rtl:group-hover:-translate-x-0.5 transition-all mt-0.5 shrink-0">
                            {isRtl ? <ChevronLeft className="w-4 h-4" /> : <ChevronRight className="w-4 h-4" />}
                          </span>
                          <div>
                            <div className="font-semibold text-[14.5px] text-white/95 group-hover:text-[#DFAC46] transition-colors font-sans">
                              {t(item.title)}
                            </div>
                            {item.description && (
                              <div className="text-[13px] text-[#8F9CAE] mt-0.5 leading-relaxed font-sans">
                                {t(item.description)}
                              </div>
                            )}
                          </div>
                        </div>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Featured Sovereign Document / Institutional Context (Cols 9/10-12) */}
          <div className="lg:col-span-4 xl:col-span-3 bg-[#11253E] border border-[#22446D] rounded-xl p-6 flex flex-col justify-between shadow-lg">
            {group.featuredDocument ? (
              <div className="space-y-4">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-bold text-[#DFAC46] font-sans">
                    {isRtl ? 'وثيقة رسمية مميزة' : 'Featured Publication'}
                  </span>
                  <span dir="ltr" className="text-[#8F9CAE] font-mono text-[11px]">
                    {group.featuredDocument.refNumber}
                  </span>
                </div>
                
                <div className="w-10 h-10 rounded-lg bg-[#2F88C2]/15 border border-[#2F88C2]/30 flex items-center justify-center text-[#2F88C2]">
                  <FileText className="w-5 h-5" />
                </div>
                
                <h4 className="text-[15px] font-bold text-white font-display leading-snug line-clamp-2">
                  {t(group.featuredDocument.title)}
                </h4>
                
                <p className="text-[13px] text-[#8F9CAE] leading-relaxed font-sans">
                  {isRtl 
                    ? 'إصدار رسمي معتمد متوفر للاطلاع المباشر والتحميل الرقمي المعتمد.'
                    : 'Official institutional release available for instant digital access and review.'}
                </p>
                
                <Link
                  href={group.featuredDocument.href}
                  onClick={onClose}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#DFAC46] hover:text-white transition-colors pt-1 font-sans"
                >
                  <span>{isRtl ? 'عرض الوثيقة الكاملة' : 'View Full Document'}</span>
                  {isRtl ? <ArrowLeft className="w-3.5 h-3.5" /> : <ArrowRight className="w-3.5 h-3.5" />}
                </Link>
              </div>
            ) : (
              <div className="space-y-4">
                <div className="text-xs text-[#DFAC46] font-bold font-sans">
                  {isRtl ? 'الخدمات والقواعد المؤسسية' : 'Institutional Services'}
                </div>
                
                <p className="text-[13px] text-[#8F9CAE] leading-relaxed font-sans">
                  {isRtl 
                    ? 'الوصول المباشر إلى المنشورات الرقابية، البيانات الإحصائية، ونظم الدفع القومية.'
                    : 'Direct access to regulatory circulars, statistical bulletins, and national payment rails.'}
                </p>
                
                <Link
                  href={group.href}
                  onClick={onClose}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#DFAC46] hover:text-white transition-colors pt-2 font-sans"
                >
                  <span>{isRtl ? 'استعراض القسم بالكامل' : 'Explore All Section'}</span>
                  {isRtl ? <ArrowLeft className="w-3.5 h-3.5" /> : <ArrowRight className="w-3.5 h-3.5" />}
                </Link>
              </div>
            )}

            <div className="pt-5 mt-4 border-t border-[#22446D] text-[11px] text-[#8F9CAE] font-sans flex items-center justify-between">
              <span>{isRtl ? 'بوابة بنك السودان المركزي' : 'CBOS Sovereign Portal'}</span>
              <span className="text-[#2F88C2] font-mono font-bold">2026</span>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}
