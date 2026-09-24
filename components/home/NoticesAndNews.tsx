'use client';

import React from 'react';
import Link from 'next/link';
import { useLanguage } from '@/lib/languageContext';
import { officialNewsData } from '@/data/news';
import { Bell, Newspaper, FileText, ArrowRight, ArrowLeft, Download, AlertCircle } from 'lucide-react';

export default function NoticesAndNews() {
  const { isRtl } = useLanguage();

  const officialNotices = officialNewsData.filter(n => n.category === 'official_notice' || n.category === 'tender');
  const pressNews = officialNewsData.filter(n => n.category === 'press_release');

  return (
    <section className="py-14 px-4 md:px-8 bg-cbos-ivory">
      <div className="max-w-7xl mx-auto space-y-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-cbos-stone/60 pb-4">
          <div>
            <span className="text-xs font-bold text-cbos-green uppercase tracking-widest font-mono">
              {isRtl ? 'المركز الإعلامي والرقابي' : 'Official Communications & Regulatory Notices'}
            </span>
            <h2 className="text-2xl md:text-3xl font-black text-cbos-ink font-display mt-1">
              {isRtl ? 'التعاميم الرسمية، العطاءات، والبيانات الصحفية' : 'Sovereign Notices, Tenders & Official Announcements'}
            </h2>
          </div>
          <Link
            href="/news"
            className="text-xs font-bold text-cbos-green hover:text-cbos-green-dark flex items-center gap-1.5 transition-colors"
          >
            <span>{isRtl ? 'أرشيف الأخبار والإعلانات الكامل' : 'All Announcements Archive'}</span>
            {isRtl ? <ArrowLeft className="w-3.5 h-3.5" /> : <ArrowRight className="w-3.5 h-3.5" />}
          </Link>
        </div>

        {/* Two-Column Segregated Grid: High-Priority Notices (Left/Top) vs News (Right/Bottom) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Col 1-6: Sovereign Notices & Tenders (High Priority) */}
          <div className="lg:col-span-6 space-y-4">
            <div className="flex items-center gap-2 text-xs font-bold text-cbos-ink uppercase font-mono border-b-2 border-cbos-gold pb-2">
              <Bell className="w-4 h-4 text-cbos-gold" />
              <span>{isRtl ? 'المنشورات والتعاميم والعطاءات السيادية' : 'Sovereign Circulars & National Tenders'}</span>
            </div>

            <div className="space-y-4">
              {officialNotices.map((notice) => (
                <div
                  key={notice.id}
                  className="p-6 rounded-2xl bg-white border-2 border-cbos-gold/40 shadow-cbos-card hover:border-cbos-gold transition-all space-y-3"
                >
                  <div className="flex items-center justify-between text-xs">
                    <span className="px-2.5 py-0.5 rounded bg-cbos-gold/15 text-cbos-ink font-mono font-bold border border-cbos-gold/40">
                      {notice.referenceNumber || 'CIRCULAR'}
                    </span>
                    <span className="text-cbos-stone-dark font-mono text-[11px]">{notice.date}</span>
                  </div>

                  <h3 className="text-base font-bold text-cbos-ink hover:text-cbos-green transition-colors font-display">
                    <Link href={`/news#${notice.slug}`}>
                      {isRtl ? notice.title.ar : notice.title.en}
                    </Link>
                  </h3>

                  <p className="text-xs text-slate-600 leading-relaxed font-sans">
                    {isRtl ? notice.excerpt.ar : notice.excerpt.en}
                  </p>

                  <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-xs">
                    <span className="text-[11px] text-cbos-gold font-bold flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5" />
                      <span>{isRtl ? 'إشعار إلزامي للجهاز المصرفي' : 'Mandatory Banking Notice'}</span>
                    </span>
                    <Link
                      href={`/news#${notice.slug}`}
                      className="font-bold text-cbos-green hover:underline flex items-center gap-1"
                    >
                      <span>{isRtl ? 'التفاصيل والملف' : 'Read Notice'}</span>
                      {isRtl ? <ArrowLeft className="w-3 h-3" /> : <ArrowRight className="w-3 h-3" />}
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Col 7-12: Press Releases & Institutional News */}
          <div className="lg:col-span-6 space-y-4">
            <div className="flex items-center gap-2 text-xs font-bold text-cbos-ink uppercase font-mono border-b-2 border-cbos-green pb-2">
              <Newspaper className="w-4 h-4 text-cbos-green" />
              <span>{isRtl ? 'البيانات الصحفية والأنشطة المؤسسية' : 'Press Releases & Institutional News'}</span>
            </div>

            <div className="space-y-4">
              {pressNews.map((item) => (
                <div
                  key={item.id}
                  className="p-6 rounded-2xl bg-white border border-cbos-stone shadow-cbos-card hover:border-cbos-green transition-all space-y-3"
                >
                  <div className="flex items-center justify-between text-xs">
                    <span className="px-2 py-0.5 rounded bg-cbos-green/10 text-cbos-green font-mono font-bold">
                      {isRtl ? 'بيان صحفي' : 'Press Release'}
                    </span>
                    <span className="text-cbos-stone-dark font-mono text-[11px]">{item.date}</span>
                  </div>

                  <h3 className="text-base font-bold text-cbos-ink hover:text-cbos-green transition-colors font-display">
                    <Link href={`/news#${item.slug}`}>
                      {isRtl ? item.title.ar : item.title.en}
                    </Link>
                  </h3>

                  <p className="text-xs text-slate-600 leading-relaxed font-sans">
                    {isRtl ? item.excerpt.ar : item.excerpt.en}
                  </p>

                  <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-xs">
                    <span className="text-[11px] text-cbos-stone-dark font-mono">
                      {isRtl ? 'الإعلام والعلاقات العامة' : 'Media & PR Directorate'}
                    </span>
                    <Link
                      href={`/news#${item.slug}`}
                      className="font-bold text-cbos-green hover:underline flex items-center gap-1"
                    >
                      <span>{isRtl ? 'قراءة البيان كاملاً' : 'Read Full Statement'}</span>
                      {isRtl ? <ArrowLeft className="w-3 h-3" /> : <ArrowRight className="w-3 h-3" />}
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
