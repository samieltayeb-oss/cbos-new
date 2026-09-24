'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useLanguage } from '@/lib/languageContext';
import { officialDocumentsData } from '@/data/documents';
import { BookOpen, Download, FileText, ArrowRight, ArrowLeft } from 'lucide-react';

export default function PublicationsPreview() {
  const { isRtl } = useLanguage();

  const publications = [
    {
      id: 'pub-annual',
      title: { ar: 'التقرير السنوي لبنك السودان المركزي 2025', en: 'CBOS Annual Report 2025' },
      type: { ar: 'تقرير سنوي رسمي', en: 'Official Annual Report' },
      year: 2025,
      image: '/images/cbos/official/publication-bulletin.jpg',
      size: '8.4 MB • PDF',
      href: '/publications?type=annual-report'
    },
    {
      id: 'pub-digest',
      title: { ar: 'موجز إحصاءات التجارة الخارجية وميزان المدفوعات', en: 'Foreign Trade Statistical Digest' },
      type: { ar: 'موجز إحصائي ربع سنوي', en: 'Quarterly Statistical Digest' },
      year: 2025,
      image: '/images/cbos/official/publication-trade-digest.jpg',
      size: '2.1 MB • PDF',
      href: '/publications?type=digest'
    },
    {
      id: 'pub-masrafi',
      title: { ar: 'مجلة المصرفي — العدد الدوري المحكم', en: 'Al-Masrafi Banking Journal' },
      type: { ar: 'دورية مصرفية محكمة', en: 'Peer-Reviewed Journal' },
      year: 2025,
      image: '/images/cbos/official/publication-masrafi-journal.jpg',
      size: '5.2 MB • PDF',
      href: '/publications?type=journal'
    },
    {
      id: 'pub-studies',
      title: { ar: 'الدراسات والبحوث المصرفية والشرعية', en: 'Economic & Sharia Working Papers' },
      type: { ar: 'أوراق بحثية متخصصة', en: 'Research Studies' },
      year: 2025,
      image: '/images/cbos/official/publication-economic-studies.jpg',
      size: '1.8 MB • PDF',
      href: '/publications?type=research'
    }
  ];

  return (
    <section className="py-14 px-4 md:px-8 bg-cbos-ivory-dark/40 border-t border-cbos-stone/60">
      <div className="max-w-7xl mx-auto space-y-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-cbos-stone/50 pb-4">
          <div>
            <span className="text-xs font-bold text-cbos-green uppercase tracking-widest font-mono">
              {isRtl ? 'المكتبة والبحوث الاقتصادية' : 'Sovereign Research & Publications Library'}
            </span>
            <h2 className="text-2xl md:text-3xl font-black text-cbos-ink font-display mt-1">
              {isRtl ? 'أحدث التقارير السنوية والدوريات الإحصائية' : 'Latest Annual Reports & Statistical Bulletins'}
            </h2>
          </div>
          <Link
            href="/publications"
            className="text-xs font-bold text-cbos-green hover:text-cbos-green-dark flex items-center gap-1.5 transition-colors"
          >
            <span>{isRtl ? 'أرشيف الإصدارات والتقارير' : 'Explore All Publications'}</span>
            {isRtl ? <ArrowLeft className="w-3.5 h-3.5" /> : <ArrowRight className="w-3.5 h-3.5" />}
          </Link>
        </div>

        {/* Publications Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {publications.map((pub) => (
            <div
              key={pub.id}
              className="group bg-white rounded-2xl p-4 border border-cbos-stone shadow-cbos-card hover:shadow-cbos-elevation hover:border-cbos-gold transition-all duration-300 flex flex-col justify-between"
            >
              <div className="space-y-4">
                {/* Cover Thumbnail */}
                <div className="relative w-full aspect-[3/4] rounded-xl overflow-hidden bg-cbos-green-dark/10 border border-cbos-stone/40">
                  <Image
                    src={pub.image}
                    alt={isRtl ? pub.title.ar : pub.title.en}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-2 right-2 rtl:right-auto rtl:left-2 bg-cbos-green-dark/90 text-cbos-gold px-2 py-0.5 rounded text-[10px] font-mono font-bold">
                    {pub.year}
                  </div>
                </div>

                <div className="space-y-1">
                  <span className="text-[10px] text-cbos-green font-mono font-bold uppercase">
                    {isRtl ? pub.type.ar : pub.type.en}
                  </span>
                  <h4 className="text-sm font-bold text-cbos-ink group-hover:text-cbos-green transition-colors font-display line-clamp-2">
                    {isRtl ? pub.title.ar : pub.title.en}
                  </h4>
                </div>
              </div>

              <div className="pt-3 mt-4 border-t border-slate-100 flex items-center justify-between text-xs">
                <span className="text-[10px] text-slate-400 font-mono">{pub.size}</span>
                <Link
                  href={pub.href}
                  className="px-2.5 py-1 rounded bg-cbos-ivory hover:bg-cbos-gold hover:text-cbos-ink text-cbos-ink text-[11px] font-bold flex items-center gap-1 transition-colors border border-cbos-stone"
                >
                  <Download className="w-3 h-3 text-cbos-green" />
                  <span>{isRtl ? 'تحميل' : 'Download'}</span>
                </Link>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
