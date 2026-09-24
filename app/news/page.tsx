'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useLanguage } from '@/lib/languageContext';
import { officialNewsData, NewsItem } from '@/data/news';
import { 
  Newspaper, 
  Search, 
  Calendar, 
  FileText, 
  Bell, 
  Tag, 
  ArrowRight, 
  ArrowLeft,
  Mail,
  AlertCircle
} from 'lucide-react';

export default function NewsPage() {
  const { t, isRtl } = useLanguage();
  const ArrowIcon = isRtl ? ArrowLeft : ArrowRight;

  const [activeTab, setActiveTab] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const filteredNews = officialNewsData.filter((item) => {
    const matchesTab = activeTab === 'all' || item.category === activeTab;
    const q = searchQuery.toLowerCase();
    const matchesQuery = 
      t(item.title).toLowerCase().includes(q) ||
      t(item.excerpt).toLowerCase().includes(q) ||
      (item.referenceNumber && item.referenceNumber.toLowerCase().includes(q));

    return matchesTab && matchesQuery;
  });

  const featuredNotice = officialNewsData.find(item => item.isImportant);

  const tabs = [
    { id: 'all', label: { ar: 'كافة الأخبار والبيانات', en: 'All Media & Notices' } },
    { id: 'press_release', label: { ar: 'البيانات الصحفية', en: 'Press Releases' } },
    { id: 'official_notice', label: { ar: 'الإعلانات الرسمية', en: 'Official Notices' } },
    { id: 'tender', label: { ar: 'العطاءات والمناقصات', en: 'Tenders & RFPs' } }
  ];

  return (
    <div className="bg-sand-50 min-h-screen">
      {/* Header Banner */}
      <section className="bg-cbos-green-950 text-white relative overflow-hidden py-16 lg:py-20 border-b border-cbos-gold/30">
        <div className="absolute inset-0 bg-guilloche opacity-15 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex items-center gap-3 text-cbos-gold text-xs font-mono uppercase tracking-wider mb-4">
            <Newspaper className="w-4 h-4" />
            <span>{t({ ar: 'المركز الإعلامي والاتصال المؤسسي', en: 'Media Center & Communications' })}</span>
            <span>/</span>
            <span>{t({ ar: 'الأخبار والبيانات الرسمية والعطاءات', en: 'Press Releases, Notices & Tenders' })}</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white max-w-4xl leading-tight mb-4">
            {t({
              ar: 'المركز الإعلامي الرسمي لبنك السودان المركزي',
              en: 'Official Media Center & Institutional Press Room'
            })}
          </h1>

          <p className="text-sand-300 text-sm sm:text-base max-w-3xl leading-relaxed">
            {t({
              ar: 'المصدر الرسمي المعتمد لكافة البيانات الصحفية لمحافظ البنك المركزي، القرارات الرقابية، إعلانات مزادات النقد والذهب، وكراسات العطاءات والمناقصات القومية.',
              en: 'The certified source for Governor press releases, regulatory announcements, sovereign auction results, and public national procurement tenders.'
            })}
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {/* Featured Notice Banner if available */}
        {featuredNotice && (
          <div className="bg-white border-2 border-cbos-gold/40 rounded-2xl p-6 sm:p-8 shadow-sm mb-12 relative overflow-hidden">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-6 border-b border-sand-200">
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <span className="px-2.5 py-0.5 rounded text-[11px] font-mono font-bold bg-amber-100 text-amber-900 flex items-center gap-1">
                    <AlertCircle className="w-3.5 h-3.5" />
                    <span>{t({ ar: 'إعلان سيادي عاجل', en: 'SOVEREIGN ANNOUNCEMENT' })}</span>
                  </span>
                  {featuredNotice.referenceNumber && (
                    <span className="font-mono text-xs font-bold text-ink-muted">
                      REF: {featuredNotice.referenceNumber}
                    </span>
                  )}
                  <span className="text-xs font-mono text-ink-muted">
                    • {featuredNotice.date}
                  </span>
                </div>

                <h2 className="text-2xl font-serif font-bold text-cbos-green-950">
                  {t(featuredNotice.title)}
                </h2>

                <p className="text-sm text-ink-muted leading-relaxed max-w-3xl">
                  {t(featuredNotice.excerpt)}
                </p>
              </div>

              <Link
                href="/documents"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-cbos-green-900 text-white hover:bg-cbos-green-800 text-xs font-mono font-bold transition-colors shrink-0 shadow-sm"
              >
                <span>{t({ ar: 'التفاصيل والوثائق', en: 'View Details & Docs' })}</span>
                <ArrowIcon className="w-3.5 h-3.5" />
              </Link>
            </div>

            <p className="text-xs text-ink-base leading-relaxed pt-4 italic">
              &ldquo;{t(featuredNotice.content)}&rdquo;
            </p>
          </div>
        )}

        {/* Filter and Search Controls */}
        <div className="bg-white border border-sand-300 rounded-xl p-6 shadow-sm mb-8 space-y-4">
          <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
            
            {/* Tab Filters */}
            <div className="flex flex-wrap gap-2">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                    activeTab === tab.id
                      ? 'bg-cbos-green-900 text-white shadow-sm'
                      : 'bg-sand-100 text-ink-muted hover:text-ink-base hover:bg-sand-200'
                  }`}
                >
                  {t(tab.label)}
                </button>
              ))}
            </div>

            {/* Search Input */}
            <div className="relative w-full md:w-64">
              <Search className="w-4 h-4 absolute start-3 top-2.5 text-ink-muted" />
              <input
                type="text"
                placeholder={t({ ar: 'بحث في الأخبار...', en: 'Search news...' })}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full ps-9 pe-4 py-2 bg-sand-50 border border-sand-300 rounded-lg text-xs focus:outline-none focus:border-cbos-green-800 text-ink-base"
              />
            </div>
          </div>
        </div>

        {/* News Feed Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {filteredNews.map((item) => (
            <div
              key={item.id}
              className="bg-white border border-sand-300 rounded-xl p-6 shadow-sm hover:border-cbos-green-700 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-mono font-bold px-2 py-0.5 rounded bg-sand-100 text-ink-muted">
                    {item.category === 'press_release' && t({ ar: 'بيان صحفي', en: 'Press Release' })}
                    {item.category === 'official_notice' && t({ ar: 'إعلان رسمي', en: 'Official Notice' })}
                    {item.category === 'tender' && t({ ar: 'عطاء عام', en: 'Tender RFP' })}
                  </span>

                  <span className="text-xs font-mono text-ink-muted flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{item.date}</span>
                  </span>
                </div>

                {item.referenceNumber && (
                  <div className="text-xs font-mono font-bold text-cbos-gold mb-1">
                    REF: {item.referenceNumber}
                  </div>
                )}

                <h3 className="font-serif font-bold text-xl text-cbos-green-950 mb-2 leading-snug">
                  {t(item.title)}
                </h3>

                <p className="text-xs text-ink-muted leading-relaxed mb-4">
                  {t(item.excerpt)}
                </p>

                <div className="p-3 bg-sand-50 rounded-lg border border-sand-200 text-xs text-ink-base leading-relaxed">
                  {t(item.content)}
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-sand-100 flex items-center justify-between text-xs">
                <span className="font-mono text-[10px] text-ink-muted">CBOS MEDIA RELATIONS</span>
                <Link
                  href="/documents"
                  className="inline-flex items-center gap-1 text-cbos-green-800 hover:text-cbos-gold font-bold transition-colors"
                >
                  <span>{t({ ar: 'تحميل المرفق', en: 'Download Circular/RFP' })}</span>
                  <ArrowIcon className="w-3 h-3" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Media Inquiries & Spokesperson Contact */}
        <div className="bg-sand-100 border border-sand-300 rounded-xl p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-cbos-green-900 text-white flex items-center justify-center shrink-0">
              <Mail className="w-6 h-6 text-cbos-gold" />
            </div>
            <div>
              <h3 className="font-serif font-bold text-lg text-ink-base">
                {t({ ar: 'استفسارات ممثلي وسائل الإعلام والصحافة', en: 'Press & Media Inquiries' })}
              </h3>
              <p className="text-xs text-ink-muted mt-0.5 max-w-xl">
                {t({
                  ar: 'تستقبل إدارة الإعلام والعلاقات العامة استفسارات الصحفيين والمؤسسات الإعلامية المحلية والدولية عبر البريد الرسمي المعتمد.',
                  en: 'The Media & Public Relations Directorate handles accredited press requests and official interview scheduling via certified email.'
                })}
              </p>
            </div>
          </div>

          <a
            href="mailto:media@cbos.gov.sd"
            className="px-5 py-2.5 rounded-lg bg-cbos-green-900 text-white text-xs font-mono font-bold hover:bg-cbos-green-800 transition-colors shrink-0"
          >
            media@cbos.gov.sd
          </a>
        </div>

      </div>
    </div>
  );
}
