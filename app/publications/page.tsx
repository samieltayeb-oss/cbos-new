'use client';

import React, { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { useLanguage } from '@/lib/languageContext';
import { 
  BookOpen, 
  Download, 
  FileText, 
  Search, 
  Calendar, 
  Filter, 
  FileSpreadsheet, 
  ArrowDownToLine, 
  Clock, 
  CheckCircle2,
  Building,
  TrendingUp,
  BarChart3
} from 'lucide-react';

interface Publication {
  id: string;
  type: 'annual-report' | 'bulletin' | 'digest' | 'journal' | 'research' | 'policy-brief';
  title: { ar: string; en: string };
  category: { ar: string; en: string };
  year: string;
  period: { ar: string; en: string };
  refNumber: string;
  fileSize: string;
  pages: number;
  description: { ar: string; en: string };
  downloadUrl: string;
}

const publicationsData: Publication[] = [
  {
    id: 'pub-ar-2025',
    type: 'annual-report',
    title: { 
      ar: 'التقرير السنوي الخامس والستون — الأداء الاقتصادي والمصرفي 2025', 
      en: '65th Annual Report — Economic & Financial Performance 2025' 
    },
    category: { ar: 'التقارير السنوية', en: 'Annual Reports' },
    year: '2025',
    period: { ar: 'التقرير السنوي الكامل', en: 'Full Annual Issue' },
    refNumber: 'AR-CBOS-2025',
    fileSize: '14.2 MB',
    pages: 218,
    description: {
      ar: 'التقرير الشامل لأداء الاقتصاد القومي ومؤشرات التضخم والسيولة النقدية والميزانية العمومية لبنك السودان المركزي.',
      en: 'Comprehensive assessment of national macroeconomic performance, inflation trends, monetary liquidity, and CBOS balance sheet.'
    },
    downloadUrl: '/documents/cbos-annual-report-2025.pdf'
  },
  {
    id: 'pub-ar-2024',
    type: 'annual-report',
    title: { 
      ar: 'التقرير السنوي الرابع والستون — استقرار القطاع المالي في ظل التحديات الاستثنائية', 
      en: '64th Annual Report — Financial Soundness Amid Exceptional Conditions' 
    },
    category: { ar: 'التقارير السنوية', en: 'Annual Reports' },
    year: '2024',
    period: { ar: 'التقرير السنوي الكامل', en: 'Full Annual Issue' },
    refNumber: 'AR-CBOS-2024',
    fileSize: '12.8 MB',
    pages: 194,
    description: {
      ar: 'توثيق التدابير المصرفية الاستثنائية وإعادة تأهيل مقاسم الدفع وحماية أصول الجهاز المصرفي السوداني.',
      en: 'Documentation of exceptional central banking measures, payment switch resilience, and financial sector protection.'
    },
    downloadUrl: '/documents/cbos-annual-report-2024.pdf'
  },
  {
    id: 'pub-bul-2026-q1',
    type: 'bulletin',
    title: { 
      ar: 'النشرة الاقتصادية والمالية الدورية — الربع الأول 2026', 
      en: 'Quarterly Economic & Financial Bulletin — Q1 2026' 
    },
    category: { ar: 'النشرات الاقتصادية', en: 'Economic Bulletins' },
    year: '2026',
    period: { ar: 'الربع الأول 2026', en: 'First Quarter 2026' },
    refNumber: 'BUL-2026-Q1',
    fileSize: '4.8 MB',
    pages: 64,
    description: {
      ar: 'تحليل دوري للمتغيرات النقدية، الكتلة النقدية (M1/M2)، حركة الودائع والتمويل المصرفي الممنوح للقطاعات الإنتاجية.',
      en: 'Quarterly analysis of monetary aggregates, broad money growth, deposits, and banking credit distributed across economic sectors.'
    },
    downloadUrl: '/documents/economic-bulletin-2026-q1.pdf'
  },
  {
    id: 'pub-bul-2025-q4',
    type: 'bulletin',
    title: { 
      ar: 'النشرة الاقتصادية والمالية الدورية — الربع الرابع 2025', 
      en: 'Quarterly Economic & Financial Bulletin — Q4 2025' 
    },
    category: { ar: 'النشرات الاقتصادية', en: 'Economic Bulletins' },
    year: '2025',
    period: { ar: 'الربع الرابع 2025', en: 'Fourth Quarter 2025' },
    refNumber: 'BUL-2025-Q4',
    fileSize: '5.1 MB',
    pages: 72,
    description: {
      ar: 'مؤشرات الإغلاق المالي لعام 2025 ومسار أسعار السلع الأساسية وحجم المعاملات عبر المقسم القومي للمدفوعات.',
      en: 'Year-end financial indicators for 2025, commodities index, and settlement volumes across national payment switches.'
    },
    downloadUrl: '/documents/economic-bulletin-2025-q4.pdf'
  },
  {
    id: 'pub-dig-2026',
    type: 'digest',
    title: { 
      ar: 'موجز إحصاءات التجارة الخارجية والذهب — الربع الأول 2026', 
      en: 'Foreign Trade & Gold Statistical Digest — Q1 2026' 
    },
    category: { ar: 'التجارة الخارجية', en: 'Foreign Trade' },
    year: '2026',
    period: { ar: 'يناير — مارس 2026', en: 'Jan — Mar 2026' },
    refNumber: 'FTD-2026-01',
    fileSize: '3.6 MB',
    pages: 48,
    description: {
      ar: 'بيانات تفصيلية لصادرات الذهب، الصمغ العربي، والمحاصيل الزراعية، بجانب فاتورة الاستيراد وحصائل الصادر المعتمدة.',
      en: 'Granular foreign trade data covering gold exports, gum Arabic, agricultural shipments, and supervised import payments.'
    },
    downloadUrl: '/documents/trade-digest-2026-q1.pdf'
  },
  {
    id: 'pub-mas-2026',
    type: 'journal',
    title: { 
      ar: 'مجلة المصرفي — العدد 78: التقنية المالية والتحول الرقمي للمصارف', 
      en: 'Al-Masrafi Banking Journal — Issue 78: Digital Banking & FinTech' 
    },
    category: { ar: 'الدوريات المصرفية', en: 'Banking Journals' },
    year: '2026',
    period: { ar: 'إصدار نصف سنوي', en: 'Bi-Annual Issue' },
    refNumber: 'MASRAFI-VOL-78',
    fileSize: '8.4 MB',
    pages: 96,
    description: {
      ar: 'دراسات محكّمة في الصيرفة الإسلامية، وإدارة المخاطر التشغيلية، ومستقبل العملات الرقمية للبنوك المركزية (CBDC).',
      en: 'Peer-reviewed studies on Islamic finance instruments, operational risk resilience, and central bank digital currency frameworks.'
    },
    downloadUrl: '/documents/masrafi-issue-78.pdf'
  },
  {
    id: 'pub-res-2026',
    type: 'research',
    title: { 
      ar: 'ورقة بحثية: كفاءة أدوات إدارة السيولة الإسلامية (شهامة وشامة)', 
      en: 'Research Paper: Operational Efficiency of Sudanese Islamic Liquidity Papers' 
    },
    category: { ar: 'أوراق العمل والبحوث', en: 'Research Papers' },
    year: '2026',
    period: { ar: 'سلسلة البحوث الاقتصادية', en: 'Economic Research Series' },
    refNumber: 'RES-CBOS-2026-02',
    fileSize: '2.1 MB',
    pages: 42,
    description: {
      ar: 'تقييم شامل لأثر شهادات الإجارة الحكومية في امتصاص فائض السيولة وتحفيز الاستثمار الإنتاجي في السودان.',
      en: 'Empirical assessment of sovereign Sukuk certificates on banking liquidity sterilization and real output expansion.'
    },
    downloadUrl: '/documents/research-paper-liquidity-2026.pdf'
  },
  {
    id: 'pub-pol-2026',
    type: 'policy-brief',
    title: { 
      ar: 'موجز السياسة النقدية: موجهات الاستقرار واستعادة كفاءة قنوات الدفع', 
      en: 'Monetary Policy Brief: Framework for Payment System Restoration' 
    },
    category: { ar: 'موجزات السياسة النقدية', en: 'Policy Briefs' },
    year: '2026',
    period: { ar: 'توجيه سيادي', en: 'Sovereign Directive' },
    refNumber: 'POL-BRIEF-2026-01',
    fileSize: '1.9 MB',
    pages: 28,
    description: {
      ar: 'رؤية بنك السودان المركزي للمحافظة على استقرار العملة الوطنية وتوحيد قنوات الدفع الرقمية تحت مظلة مقسم NIPS.',
      en: 'Strategic roadmap for national currency preservation and payment channel interoperability under the NIPS platform.'
    },
    downloadUrl: '/documents/monetary-policy-2026.pdf'
  }
];

function PublicationsContent() {
  const { isRtl, t } = useLanguage();
  const searchParams = useSearchParams();
  const initialType = searchParams.get('type') || 'all';

  const [selectedType, setSelectedType] = useState<string>(initialType);
  const [searchQuery, setSearchQuery] = useState<string>('');

  useEffect(() => {
    const typeParam = searchParams.get('type');
    if (typeParam) {
      setSelectedType(typeParam);
    }
  }, [searchParams]);

  const categories = [
    { id: 'all', label: { ar: 'كافة الإصدارات', en: 'All Publications' } },
    { id: 'annual-report', label: { ar: 'التقارير السنوية', en: 'Annual Reports' } },
    { id: 'bulletin', label: { ar: 'النشرة الاقتصادية', en: 'Economic Bulletins' } },
    { id: 'digest', label: { ar: 'موجز التجارة الخارجية', en: 'Foreign Trade Digest' } },
    { id: 'journal', label: { ar: 'مجلة المصرفي', en: 'Banking Journal' } },
    { id: 'research', label: { ar: 'الأوراق البحثية', en: 'Research Papers' } },
    { id: 'policy-brief', label: { ar: 'موجزات السياسة', en: 'Policy Briefs' } }
  ];

  const filteredPublications = publicationsData.filter((pub) => {
    const matchesType = selectedType === 'all' || pub.type === selectedType;
    const q = searchQuery.toLowerCase();
    const matchesQuery = 
      t(pub.title).toLowerCase().includes(q) ||
      t(pub.description).toLowerCase().includes(q) ||
      pub.refNumber.toLowerCase().includes(q) ||
      pub.year.includes(q);
    return matchesType && matchesQuery;
  });

  return (
    <div className="bg-sand-50 min-h-screen">
      {/* Header Banner */}
      <section 
        className="text-white relative overflow-hidden py-16 lg:py-20 border-b border-[#22446D]"
        style={{ backgroundColor: '#0B1A2D' }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex items-center gap-3 text-[#DDC99B] text-xs font-mono uppercase tracking-wider mb-4">
            <BookOpen className="w-4 h-4 text-[#B99553]" />
            <span>{isRtl ? 'البحوث والإصدارات الرسمية' : 'Official Publications & Research'}</span>
            <span>/</span>
            <span>{isRtl ? 'مستودع الوثائق والتقارير الدورية' : 'Institutional Archive & Periodicals'}</span>
          </div>

          <h1 className="text-3xl lg:text-4xl font-extrabold text-white mb-4 font-display">
            {isRtl ? 'التقارير والإصدارات الدورية للبنك المركزي' : 'CBOS Official Reports & Publications Archive'}
          </h1>
          <p className="text-base text-[#E2DDD3] max-w-3xl leading-relaxed font-sans">
            {isRtl
              ? 'المستودع الرقمي الرسمي للتقارير السنوية لبنك السودان المركزي، والنشرات الاقتصادية الربع سنوية، وموجزات التجارة الخارجية والبحوث المصرفية المحكّمة وفقاً لأعلى معايير الإفصاح والشفافية الدولية.'
              : 'The official digital repository for CBOS Annual Reports, Quarterly Economic Bulletins, Foreign Trade Digests, and peer-reviewed banking research conforming to international disclosure standards.'}
          </p>

          <div className="mt-8 flex flex-wrap gap-4 text-xs font-mono">
            <div className="px-3.5 py-1.5 rounded-lg bg-[#2F88C2]/60 border border-[#B99553]/40 flex items-center gap-2">
              <span className="text-[#DDC99B]">{isRtl ? 'الأرشيف المتاح:' : 'Available Archive:'}</span>
              <span className="font-bold text-white">1960 — 2026</span>
            </div>
            <div className="px-3.5 py-1.5 rounded-lg bg-[#2F88C2]/60 border border-[#B99553]/40 flex items-center gap-2">
              <span className="text-[#DDC99B]">{isRtl ? 'المعايير المعتمدة:' : 'Reporting Standards:'}</span>
              <span className="font-bold text-white">IMF e-GDDS / AAOIFI</span>
            </div>
            <div className="px-3.5 py-1.5 rounded-lg bg-[#2F88C2]/60 border border-[#B99553]/40 flex items-center gap-2">
              <span className="text-[#DDC99B]">{isRtl ? 'صيغة التحميل:' : 'Format:'}</span>
              <span className="font-bold text-white">PDF / Tabular Data</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        
        {/* Search & Filter Bar */}
        <div className="bg-white rounded-xl p-5 border border-sand-300 shadow-sm mb-8 space-y-4">
          <div className="flex flex-col md:flex-row gap-4 justify-between items-center">
            
            {/* Search Input */}
            <div className="relative w-full md:w-96">
              <Search className="w-4 h-4 text-cbos-ink-muted absolute top-1/2 -translate-y-1/2 left-3 rtl:left-auto rtl:right-3" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder={isRtl ? 'ابحث بالاسم، الرقم المرجعي، أو سنة الإصدار...' : 'Search by title, reference, or release year...'}
                className="w-full bg-sand-50 border border-sand-300 rounded-xl py-2.5 px-9 text-xs focus:outline-none focus:border-cbos-green-700 font-sans"
              />
            </div>

            {/* Total Results Counter */}
            <div className="text-xs font-mono text-cbos-ink-muted flex items-center gap-2">
              <span>{isRtl ? 'عدد الوثائق المدرجة:' : 'Publications Listed:'}</span>
              <span className="px-2.5 py-1 bg-sand-100 rounded-full font-bold text-cbos-ink border border-sand-300">
                {filteredPublications.length}
              </span>
            </div>
          </div>

          {/* Category Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto pb-1 border-t border-sand-200 pt-3">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedType(cat.id)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap transition-all ${
                  selectedType === cat.id
                    ? 'bg-cbos-green-900 text-white font-bold shadow-sm'
                    : 'bg-sand-100 text-cbos-ink-muted hover:bg-sand-200 hover:text-cbos-ink'
                }`}
              >
                {t(cat.label)}
              </button>
            ))}
          </div>
        </div>

        {/* Publications List */}
        {filteredPublications.length === 0 ? (
          <div className="bg-white rounded-xl p-12 text-center border border-sand-300 space-y-3">
            <BookOpen className="w-12 h-12 text-sand-400 mx-auto" />
            <h3 className="font-bold text-base text-cbos-ink">
              {isRtl ? 'لم يتم العثور على إصدارات مطابقة' : 'No matching publications found'}
            </h3>
            <p className="text-xs text-cbos-ink-muted max-w-md mx-auto">
              {isRtl ? 'يرجى تجربة كلمات بحث مختلفة أو اختيار تصنيف آخر من القائمة أعلاه.' : 'Try adjusting your search query or selecting a different category filter.'}
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredPublications.map((pub) => (
              <div
                key={pub.id}
                className="bg-white rounded-xl p-6 border border-sand-300 shadow-sm hover:border-[#B99553] hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div className="space-y-4">
                  {/* Meta Badges */}
                  <div className="flex items-center justify-between">
                    <span className="px-2.5 py-1 rounded bg-[#2F88C2]/10 text-cbos-green-900 font-mono font-bold text-xs border border-cbos-green-200">
                      {pub.refNumber}
                    </span>
                    <span className="text-xs font-mono text-[#A58242] font-bold">
                      {pub.year} • {t(pub.period)}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <div className="space-y-2">
                    <h3 className="text-base font-bold text-cbos-ink leading-snug font-display">
                      {t(pub.title)}
                    </h3>
                    <p className="text-xs text-cbos-ink-muted leading-relaxed font-sans">
                      {t(pub.description)}
                    </p>
                  </div>
                </div>

                {/* Footer / Download Action */}
                <div className="mt-6 pt-4 border-t border-sand-200 flex items-center justify-between text-xs font-mono">
                  <div className="flex items-center gap-3 text-cbos-ink-muted">
                    <span>{pub.fileSize}</span>
                    <span>•</span>
                    <span>{pub.pages} {isRtl ? 'صفحة' : 'Pages'}</span>
                  </div>

                  <a
                    href={pub.downloadUrl}
                    className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-cbos-green-900 text-white hover:bg-cbos-green-800 transition-colors font-bold text-xs shadow-sm"
                  >
                    <ArrowDownToLine className="w-3.5 h-3.5 text-[#DDC99B]" />
                    <span>{isRtl ? 'تحميل الوثيقة (PDF)' : 'Download PDF'}</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        )}

      </section>
    </div>
  );
}

export default function PublicationsPage() {
  return (
    <Suspense fallback={<div className="p-12 text-center text-xs font-mono">Loading Publications Archive...</div>}>
      <PublicationsContent />
    </Suspense>
  );
}
