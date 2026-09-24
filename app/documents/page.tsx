'use client';

import React, { useState } from 'react';
import { useLanguage } from '@/lib/languageContext';
import { officialDocumentsData } from '@/data/documents';
import { CBOSDocument, DocumentType } from '@/types/document';
import { 
  FileText, 
  Search, 
  Download, 
  Filter, 
  Calendar, 
  Building2, 
  ExternalLink,
  ShieldCheck,
  CheckCircle,
  FileCode
} from 'lucide-react';

export default function DocumentsPage() {
  const { t } = useLanguage();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedType, setSelectedType] = useState<string>('all');
  const [selectedYear, setSelectedYear] = useState<string>('all');

  const filteredDocs = officialDocumentsData.filter((doc) => {
    const matchesType = selectedType === 'all' || doc.type === selectedType;
    const matchesYear = selectedYear === 'all' || doc.year.toString() === selectedYear;
    const q = searchQuery.toLowerCase();
    const matchesQuery = 
      t(doc.title).toLowerCase().includes(q) ||
      doc.reference_number.toLowerCase().includes(q) ||
      t(doc.summary).toLowerCase().includes(q) ||
      (doc.keywords && doc.keywords.some(k => k.toLowerCase().includes(q)));

    return matchesType && matchesYear && matchesQuery;
  });

  const categories = [
    { id: 'all', label: { ar: 'كافة الوثائق والتشريعات', en: 'All Documents' } },
    { id: 'circular', label: { ar: 'المنشورات الرقابية', en: 'Regulatory Circulars' } },
    { id: 'law', label: { ar: 'القوانين المصرفية', en: 'Banking Laws' } },
    { id: 'regulation', label: { ar: 'اللوائح والسياسات', en: 'Regulations' } },
    { id: 'annual-report', label: { ar: 'التقارير السنوية', en: 'Annual Reports' } },
    { id: 'digest', label: { ar: 'الموجزات الإحصائية', en: 'Statistical Digests' } },
    { id: 'tender', label: { ar: 'العطاءات والمناقصات', en: 'Tenders & RFPs' } }
  ];

  const years = ['all', '2026', '2025', '2024', '2004', '2002'];

  return (
    <div className="bg-sand-50 min-h-screen">
      {/* Header Banner */}
      <section className="bg-cbos-green-950 text-white relative overflow-hidden py-16 lg:py-20 border-b border-cbos-gold/30">
        <div className="absolute inset-0 bg-guilloche opacity-15 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex items-center gap-3 text-cbos-gold text-xs font-mono uppercase tracking-wider mb-4">
            <FileText className="w-4 h-4" />
            <span>{t({ ar: 'المكتبة الرقمية والمستودع القانوني', en: 'Digital Legal Repository' })}</span>
            <span>/</span>
            <span>{t({ ar: 'الوثائق والمنشورات الرسمية', en: 'Official Directives & Publications' })}</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white max-w-4xl leading-tight mb-4">
            {t({
              ar: 'المستودع الرقمي للتشريعات والمنشورات الرقابية',
              en: 'Sovereign Repository of Banking Legislation & Circulars'
            })}
          </h1>

          <p className="text-sand-300 text-sm sm:text-base max-w-3xl leading-relaxed">
            {t({
              ar: 'المنصة الرسمية المعتمدة للبحث والوصول إلى كافة القوانين المنظمة للعمل المصرفي، منشورات السياسة النقدية، موجهات الرقابة المصرفية، والتقارير الاقتصادية الصادرة عن بنك السودان المركزي.',
              en: 'The certified public repository to search and download all banking laws, monetary policy circulars, supervisory directives, and official economic reports published by the Central Bank of Sudan.'
            })}
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {/* Search & Multifaceted Filtering Controls */}
        <div className="bg-white border border-sand-300 rounded-xl p-6 shadow-sm mb-8 space-y-6">
          
          {/* Search Box */}
          <div className="relative">
            <Search className="w-5 h-5 absolute start-4 top-3.5 text-ink-muted" />
            <input
              type="text"
              placeholder={t({
                ar: 'بحث برقم المنشور، العنوان، الكلمات المفتاحية (مثل: NIPS، الصادرات، العملة)...',
                en: 'Search by reference number, title, keywords (e.g. NIPS, exports, currency)...'
              })}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full ps-12 pe-4 py-3 bg-sand-50 border border-sand-300 rounded-xl text-sm font-sans focus:outline-none focus:border-cbos-green-800 text-ink-base"
            />
          </div>

          {/* Categories & Year Filters */}
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pt-4 border-t border-sand-200">
            {/* Category Tabs */}
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setSelectedType(cat.id)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                    selectedType === cat.id
                      ? 'bg-cbos-green-900 text-white shadow-sm'
                      : 'bg-sand-100 text-ink-muted hover:text-ink-base hover:bg-sand-200'
                  }`}
                >
                  {t(cat.label)}
                </button>
              ))}
            </div>

            {/* Year Selector */}
            <div className="flex items-center gap-2 shrink-0">
              <span className="text-xs font-mono text-ink-muted uppercase">
                {t({ ar: 'سنة الإصدار:', en: 'Year:' })}
              </span>
              <select
                value={selectedYear}
                onChange={(e) => setSelectedYear(e.target.value)}
                className="bg-sand-50 border border-sand-300 rounded-lg px-3 py-1.5 text-xs font-mono font-bold text-ink-base focus:outline-none focus:border-cbos-green-800"
              >
                {years.map(y => (
                  <option key={y} value={y}>
                    {y === 'all' ? t({ ar: 'كافة الأعوام', en: 'All Years' }) : y}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="flex items-center justify-between text-xs font-mono text-ink-muted pt-2 border-t border-sand-100">
            <span>
              {t({ ar: 'عدد الوثائق المطابقة:', en: 'Matching Documents:' })} {filteredDocs.length}
            </span>
            <span>OFFICIAL CENTRAL BANK ARCHIVE</span>
          </div>
        </div>

        {/* Documents Listing */}
        <div className="space-y-4 mb-16">
          {filteredDocs.length === 0 ? (
            <div className="bg-white border border-sand-300 rounded-xl p-12 text-center">
              <FileText className="w-12 h-12 text-sand-300 mx-auto mb-3" />
              <h3 className="font-serif font-bold text-lg text-ink-base mb-1">
                {t({ ar: 'لم يتم العثور على وثائق مطابقة', en: 'No matching documents found' })}
              </h3>
              <p className="text-xs text-ink-muted">
                {t({ ar: 'يرجى تجربة كلمات بحث أخرى أو إزالة قيود التصفية.', en: 'Try adjusting your search query or reset the filters.' })}
              </p>
            </div>
          ) : (
            filteredDocs.map((doc) => (
              <div 
                key={doc.id}
                className="bg-white border border-sand-300 rounded-xl p-6 shadow-sm hover:border-cbos-green-700 transition-all flex flex-col md:flex-row md:items-center justify-between gap-6"
              >
                <div className="space-y-2 flex-1">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="font-mono text-xs font-bold px-2.5 py-0.5 rounded bg-cbos-green-100 text-cbos-green-900 border border-cbos-green-200">
                      {doc.reference_number}
                    </span>
                    <span className="text-xs font-serif font-semibold text-cbos-gold">
                      {doc.type === 'circular' && t({ ar: 'منشور دوري', en: 'Circular' })}
                      {doc.type === 'law' && t({ ar: 'قانون نافذ', en: 'Law' })}
                      {doc.type === 'regulation' && t({ ar: 'لائحة تنظيمية', en: 'Regulation' })}
                      {doc.type === 'annual-report' && t({ ar: 'تقرير سنوي', en: 'Annual Report' })}
                      {doc.type === 'digest' && t({ ar: 'موجز إحصائي', en: 'Digest' })}
                      {doc.type === 'tender' && t({ ar: 'عطاء عام', en: 'Tender RFP' })}
                    </span>
                    <span className="text-xs font-mono text-ink-muted">
                      • {doc.publication_date}
                    </span>
                  </div>

                  <h3 className="font-serif font-bold text-lg sm:text-xl text-ink-base hover:text-cbos-green-900 transition-colors">
                    {t(doc.title)}
                  </h3>

                  <p className="text-xs text-ink-muted leading-relaxed line-clamp-2">
                    {t(doc.summary)}
                  </p>

                  <div className="flex flex-wrap items-center gap-4 text-xs text-ink-muted pt-2">
                    <div className="flex items-center gap-1.5">
                      <Building2 className="w-3.5 h-3.5 text-cbos-gold shrink-0" />
                      <span>{t(doc.department)}</span>
                    </div>
                    {doc.keywords && (
                      <div className="flex items-center gap-1.5">
                        {doc.keywords.slice(0, 3).map((kw, i) => (
                          <span key={i} className="px-2 py-0.5 rounded bg-sand-100 text-[11px] font-mono">
                            #{kw}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>

                {/* Actions & Meta */}
                <div className="flex sm:flex-col items-center sm:items-end justify-between sm:justify-center gap-3 shrink-0 pt-4 md:pt-0 border-t md:border-t-0 md:border-s md:border-sand-200 md:ps-6">
                  <div className="text-start sm:text-end text-xs font-mono text-ink-muted">
                    <div className="font-bold text-ink-base uppercase">{doc.file_format} FORMAT</div>
                    <div>{(doc.file_size_kb / 1024).toFixed(1)} MB</div>
                  </div>

                  <a
                    href={doc.file_url}
                    download
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-cbos-green-900 hover:bg-cbos-green-800 text-white text-xs font-mono font-bold transition-colors shadow-sm"
                  >
                    <Download className="w-3.5 h-3.5" />
                    <span>{t({ ar: 'تحميل الوثيقة', en: 'Download File' })}</span>
                  </a>
                </div>
              </div>
            ))
          )}
        </div>

      </div>
    </div>
  );
}
