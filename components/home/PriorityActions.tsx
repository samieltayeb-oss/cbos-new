'use client';

import React from 'react';
import Link from 'next/link';
import { useLanguage } from '@/lib/languageContext';
import { Coins, LineChart, Scale, BookOpen, ArrowRight, ArrowLeft } from 'lucide-react';

export default function PriorityActions() {
  const { isRtl } = useLanguage();

  const cards = [
    {
      id: 'rates',
      title: { ar: 'أسعار الصرف الرسمية', en: 'Official Exchange Rates' },
      desc: { ar: 'النشرة التأشيرية اليومية لأسعار العملات مقابل الجنيه السوداني وحاسبة التحويل المباشر.', en: 'Daily indicative exchange rates, commercial bank spreads, and live currency converter.' },
      meta: { ar: 'تحديث يومي • 10 عملات رئيسية', en: 'Daily Updates • 10 Currencies' },
      href: '/exchange-rates',
      icon: Coins,
      accent: 'border-cbos-gold/40 hover:border-cbos-gold'
    },
    {
      id: 'indicators',
      title: { ar: 'المؤشرات الاقتصادية والنقدية', en: 'Economic Indicators' },
      desc: { ar: 'إحصاءات السيولة النقدية، ميزان المدفوعات، والتجارة الخارجية وفق معايير GDDS الدولية.', en: 'Monetary aggregates, external sector statistics, trade balance, and e-GDDS datasets.' },
      meta: { ar: 'سلاسل زمنية • تنزيل CSV / Excel', en: 'Time Series • CSV/Excel Export' },
      href: '/data',
      icon: LineChart,
      accent: 'border-cbos-blue/40 hover:border-cbos-blue'
    },
    {
      id: 'laws',
      title: { ar: 'القوانين والمنشورات الرقابية', en: 'Laws & Regulations' },
      desc: { ar: 'التشريعات المصرفية، تعاميم النقد الأجنبي، والضوابط الاحترازية الصادرة للبنوك والمصارف.', en: 'Primary banking acts, foreign exchange circulars, and prudential supervisory directives.' },
      meta: { ar: 'أرشيف قانوني مصنف • بحث فوري', en: 'Indexed Legal Archive • Instant Search' },
      href: '/documents',
      icon: Scale,
      accent: 'border-cbos-gold/40 hover:border-cbos-gold'
    },
    {
      id: 'publications',
      title: { ar: 'التقارير والإصدارات الدورية', en: 'Publications & Reports' },
      desc: { ar: 'التقرير السنوي، النشرة الاقتصادية والمالية، موجز التجارة الخارجية، ومجلة المصرفي.', en: 'CBOS Annual Reports archive, quarterly economic reviews, and research working papers.' },
      meta: { ar: 'إصدارات رسمية مدققة • ملفات PDF', en: 'Audited Official Releases • PDF' },
      href: '/publications',
      icon: BookOpen,
      accent: 'border-cbos-blue/40 hover:border-cbos-blue'
    }
  ];

  return (
    <section className="py-12 px-4 md:px-8 bg-cbos-ivory">
      <div className="max-w-7xl mx-auto space-y-6">
        
        <div className="flex items-center justify-between border-b border-cbos-stone/60 pb-3">
          <div>
            <h3 className="text-xs font-bold text-cbos-blue uppercase tracking-widest font-mono">
              {isRtl ? 'الخدمات والقواعد المؤسسية' : 'Core Institutional Gateways'}
            </h3>
            <h2 className="text-xl md:text-2xl font-black text-cbos-ink font-display mt-0.5">
              {isRtl ? 'المحاور الإشرافية والبيانات السيادية' : 'Sovereign Portals & Regulatory Intelligence'}
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {cards.map((card) => {
            const IconComponent = card.icon;
            return (
              <Link
                key={card.id}
                href={card.href}
                className={`group p-6 rounded-xl bg-white border ${card.accent} shadow-cbos-card hover:shadow-cbos-elevation transition-all duration-200 flex flex-col justify-between`}
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="w-10 h-10 rounded-lg bg-cbos-ivory-dark group-hover:bg-cbos-blue group-hover:text-white transition-colors flex items-center justify-center text-cbos-blue">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <span className="text-cbos-stone group-hover:text-cbos-gold group-hover:translate-x-1 rtl:group-hover:-translate-x-1 transition-all">
                      {isRtl ? <ArrowLeft className="w-4 h-4" /> : <ArrowRight className="w-4 h-4" />}
                    </span>
                  </div>

                  <div className="space-y-1.5">
                    <h4 className="text-base font-bold text-cbos-ink group-hover:text-cbos-blue transition-colors font-display">
                      {isRtl ? card.title.ar : card.title.en}
                    </h4>
                    <p className="text-xs text-slate-600 leading-relaxed font-sans">
                      {isRtl ? card.desc.ar : card.desc.en}
                    </p>
                  </div>
                </div>

                <div className="pt-4 mt-4 border-t border-slate-100 text-[11px] font-mono text-cbos-stone-dark flex items-center justify-between">
                  <span>{isRtl ? card.meta.ar : card.meta.en}</span>
                </div>
              </Link>
            );
          })}
        </div>

      </div>
    </section>
  );
}
