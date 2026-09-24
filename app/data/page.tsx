'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { useLanguage } from '@/lib/languageContext';
import { 
  BarChart3, 
  Download, 
  Calendar, 
  Database, 
  FileSpreadsheet, 
  TrendingUp, 
  Filter, 
  ArrowUpRight, 
  ArrowDownRight,
  Layers,
  Search,
  CheckCircle2
} from 'lucide-react';

interface MetricItem {
  id: string;
  code: string;
  title: { ar: string; en: string };
  category: 'monetary' | 'banking' | 'external' | 'real_sector';
  categoryLabel: { ar: string; en: string };
  value: string;
  unit: { ar: string; en: string };
  change: string;
  isPositive: boolean;
  frequency: { ar: string; en: string };
  period: string;
  description: { ar: string; en: string };
}

export default function DataPortalPage() {
  const { t } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const metrics: MetricItem[] = [
    {
      id: 'm2',
      code: 'M2-TOTAL',
      title: { ar: 'السيولة المحلية الكلية (عرض النقود M2)', en: 'Broad Money Supply (M2)' },
      category: 'monetary',
      categoryLabel: { ar: 'القطاع النقدي', en: 'Monetary Sector' },
      value: '14,820.5',
      unit: { ar: 'مليار جنيه', en: 'Billion SDG' },
      change: '+14.2%',
      isPositive: true,
      frequency: { ar: 'شهري', en: 'Monthly' },
      period: 'Q3-2026',
      description: {
        ar: 'إجمالي النقد المتداول خارج النظام المصرفي مضافاً إليه ودائع الجمهور تحت الطلب وشبه النقود (الودائع الاستثمارية والادخارية بالعملة الوطنية والأجنبية).',
        en: 'Currency outside banks plus transferable demand deposits and quasi-money (time, savings, and foreign currency deposits) held by the public.'
      }
    },
    {
      id: 'm1',
      code: 'M1-NARROW',
      title: { ar: 'عرض النقود بالمعنى الضيق (M1)', en: 'Narrow Money Supply (M1)' },
      category: 'monetary',
      categoryLabel: { ar: 'القطاع النقدي', en: 'Monetary Sector' },
      value: '8,450.2',
      unit: { ar: 'مليار جنيه', en: 'Billion SDG' },
      change: '+11.8%',
      isPositive: true,
      frequency: { ar: 'شهري', en: 'Monthly' },
      period: 'Q3-2026',
      description: {
        ar: 'النقد المتداول لدى الجمهور خارج المصارف مضافاً إليه الودائع الجارية الخاضعة للطلب بالعملة المحلية.',
        en: 'Currency in circulation outside the banking sector plus transferable demand deposits held in local currency.'
      }
    },
    {
      id: 'fx_reserves',
      code: 'OFFICIAL-RES',
      title: { ar: 'إجمالي الأصول والاحتياطيات الرسمية', en: 'Official Sovereign Reserves' },
      category: 'external',
      categoryLabel: { ar: 'القطاع الخارجي', en: 'External Sector' },
      value: '1,842.0',
      unit: { ar: 'مليون دولار أمريكي', en: 'Million USD' },
      change: '+6.5%',
      isPositive: true,
      frequency: { ar: 'شهري', en: 'Monthly' },
      period: 'Q3-2026',
      description: {
        ar: 'الاحتياطيات الرسمية السيادية المودعة لدى البنك المركزي تشمل سبائك الذهب الخالص والأرصدة بالعملات الأجنبية الحرة القابلة للتحويل وحقوق السحب الخاصة (SDRs).',
        en: 'Gross sovereign official reserve assets held by CBOS including monetary gold bullion, convertible foreign exchange balances, and SDR holdings.'
      }
    },
    {
      id: 'bank_assets',
      code: 'BANK-ASSETS',
      title: { ar: 'إجمالي الأصول المجمعة للجهاز المصرفي', en: 'Banking Sector Total Consolidated Assets' },
      category: 'banking',
      categoryLabel: { ar: 'القطاع المصرفي', en: 'Banking Sector' },
      value: '22,410.8',
      unit: { ar: 'مليار جنيه', en: 'Billion SDG' },
      change: '+18.4%',
      isPositive: true,
      frequency: { ar: 'ربع سنوي', en: 'Quarterly' },
      period: 'Q2-2026',
      description: {
        ar: 'الميزانية الموحدة لكافة المصارف التجارية والمتخصصة المرخصة العاملة في السودان متضمنة المحافظ التمويلية والأرصدة النقدية والاستثمارات في الصكوك.',
        en: 'Consolidated balance sheet assets of all licensed commercial and specialized banks in Sudan, including credit portfolios and sukuk holdings.'
      }
    },
    {
      id: 'private_credit',
      code: 'CREDIT-PRIV',
      title: { ar: 'التمويل المصرفي الممنوح للقطاع الخاص', en: 'Bank Credit to Private Sector' },
      category: 'banking',
      categoryLabel: { ar: 'القطاع المصرفي', en: 'Banking Sector' },
      value: '9,650.0',
      unit: { ar: 'مليار جنيه', en: 'Billion SDG' },
      change: '+15.1%',
      isPositive: true,
      frequency: { ar: 'شهري', en: 'Monthly' },
      period: 'Q3-2026',
      description: {
        ar: 'إجمالي التسهيلات التمويلية بصيغ المرابحة والمضاربة والمشاركة والسلم الموجهة للمؤسسات والشركات والأنشطة الزراعية والصناعية والتجارية.',
        en: 'Total Sharia-compliant credit facilities (Murabaha, Mudaraba, Musharaka, Salam) deployed to private agricultural, industrial, and trading enterprises.'
      }
    },
    {
      id: 'gold_exports',
      code: 'GOLD-EXP',
      title: { ar: 'مشتريات وصادرات الذهب الرسمية', en: 'Official Sovereign Gold Purchases & Exports' },
      category: 'external',
      categoryLabel: { ar: 'القطاع الخارجي', en: 'External Sector' },
      value: '34.2',
      unit: { ar: 'طن متري', en: 'Metric Tons' },
      change: '+22.0%',
      isPositive: true,
      frequency: { ar: 'نصف سنوي', en: 'Semi-Annual' },
      period: 'H1-2026',
      description: {
        ar: 'حجم الذهب المصفى المشتري عبر نوافذ البنك المركزي ومصفاة السودان للذهب والمصدر عبر القنوات النظامية الرسمية لتعزيز الاحتياطيات النقدية.',
        en: 'Volume of refined monetary gold procured via CBOS windows and the Sudan Gold Refinery, exported officially to build sovereign foreign buffers.'
      }
    }
  ];

  const filteredMetrics = metrics.filter(m => {
    const matchesCat = selectedCategory === 'all' || m.category === selectedCategory;
    const matchesQuery = 
      t(m.title).toLowerCase().includes(searchQuery.toLowerCase()) ||
      m.code.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesQuery;
  });

  const handleDownloadAllData = () => {
    const headers = ['Code', 'Title EN', 'Title AR', 'Category', 'Value', 'Unit EN', 'Change', 'Period', 'Frequency'];
    const rows = metrics.map(m => [
      m.code,
      m.title.en,
      m.title.ar,
      m.category,
      m.value,
      m.unit.en,
      m.change,
      m.period,
      m.frequency.en
    ]);
    const csvContent = 'data:text/csv;charset=utf-8,' + [headers.join(','), ...rows.map(e => e.join(','))].join('\n');
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement('a');
    link.setAttribute('href', encodedUri);
    link.setAttribute('download', `cbos_sovereign_statistics_2026.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="bg-[#FAF9F6] min-h-screen text-[#10231C]">
      {/* Sovereign High-Contrast Hero Banner */}
      <section 
        className="text-white relative overflow-hidden py-16 lg:py-24 border-b border-[#B99553]/40"
        style={{ backgroundColor: '#0B1A2D' }}
      >
        <div className="absolute inset-0 bg-guilloche opacity-20 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex items-center gap-2.5 text-[#DDC99B] text-xs font-mono uppercase font-bold tracking-wider mb-4">
            <Database className="w-4 h-4 text-[#B99553]" />
            <span>{t({ ar: 'بوابة البيانات والإحصاءات', en: 'Data & Statistics Portal' })}</span>
            <span className="text-[#DDC99B]/50">/</span>
            <span dir="ltr">e-GDDS Sovereign Statistical Hub</span>
          </div>

          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
            <div className="max-w-4xl">
              <h1 
                className="text-white font-extrabold tracking-normal leading-[1.15] mb-5 text-[34px] sm:text-[46px] lg:text-[56px]"
                style={{ fontFamily: 'var(--font-arabic)' }}
              >
                {t({
                  ar: 'بوابة البيانات الاقتصادية والنقدية السيادية',
                  en: 'Sovereign Economic & Monetary Data Portal'
                })}
              </h1>
              <p 
                className="text-[#E2DDD3] font-normal sm:font-medium text-base sm:text-lg lg:text-[18px] leading-[1.85] max-w-[780px]"
                style={{ fontFamily: 'var(--font-arabic)' }}
              >
                {t({
                  ar: 'منصة البيانات الإحصائية الرسمية لبنك السودان المركزي المعدة وفق معايير نظام نشر البيانات المعزز (e-GDDS) لصندوق النقد الدولي لضمان الشفافية المؤسسية والموثوقية التحليلية.',
                  en: 'The official statistical repository of CBOS aligned with the IMF Enhanced General Data Dissemination System (e-GDDS) ensuring institutional transparency and sovereign credibility.'
                })}
              </p>
            </div>

            <button
              onClick={handleDownloadAllData}
              className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-[#B99553] text-[#101713] hover:bg-[#D4AF37] font-bold text-[15px] sm:text-base transition-all shadow-lg shrink-0 border border-[#B99553]"
            >
              <Download className="w-4 h-4 shrink-0" />
              <span>{t({ ar: 'تصدير كافة المؤشرات (CSV)', en: 'Export Full Dataset (CSV)' })}</span>
            </button>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {/* Filter & Search Bar */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 mb-8 bg-white border border-[#D8D4C8] p-4 rounded-xl shadow-sm">
          {/* Categories */}
          <div className="flex flex-wrap gap-2">
            {[
              { id: 'all', label: { ar: 'كافة المؤشرات', en: 'All Indicators' } },
              { id: 'monetary', label: { ar: 'القطاع النقدي', en: 'Monetary' } },
              { id: 'banking', label: { ar: 'القطاع المصرفي', en: 'Banking' } },
              { id: 'external', label: { ar: 'القطاع الخارجي', en: 'External' } }
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setSelectedCategory(tab.id)}
                className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all ${
                  selectedCategory === tab.id
                    ? 'bg-[#033E2D] text-white shadow-sm'
                    : 'bg-[#F6F4EE] text-[#44534D] hover:text-[#10231C] hover:bg-[#ECE8DF] border border-[#D8D4C8]'
                }`}
              >
                {t(tab.label)}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative">
            <Search className="w-4 h-4 absolute start-3.5 top-3 text-[#44534D]" />
            <input
              type="text"
              placeholder={t({ ar: 'بحث في المؤشرات...', en: 'Search metrics...' })}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="ps-10 pe-4 py-2.5 text-sm bg-[#FAF9F6] border border-[#D8D4C8] rounded-lg focus:outline-none focus:border-[#22446D] w-full sm:w-64 text-[#10231C]"
            />
          </div>
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {filteredMetrics.map((item) => (
            <div 
              key={item.id}
              className="bg-white border border-[#D8D4C8] rounded-xl p-6 shadow-sm hover:border-[#22446D] transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span 
                    dir="ltr"
                    className="font-mono text-[13px] font-semibold px-2 py-0.5 rounded bg-[#ECE8DF] text-[#10231C]"
                  >
                    {item.code}
                  </span>
                  <span className="text-[13px] font-medium text-[#2F88C2]">
                    {t(item.categoryLabel)}
                  </span>
                </div>

                <h3 className="text-lg sm:text-[20px] font-bold text-[#10231C] leading-snug mt-2 mb-3">
                  {t(item.title)}
                </h3>

                {/* Big Metric Value Box */}
                <div className="bg-[#F6F4EE] rounded-lg p-4 my-3 border border-[#E2DDD3]">
                  <div className="flex items-baseline justify-between">
                    <span 
                      dir="ltr"
                      className="text-3xl sm:text-[36px] font-mono font-bold text-[#0B1A2D] tabular-nums"
                    >
                      {item.value}
                    </span>
                    <span className="text-[13px] sm:text-sm font-medium text-[#44534D]">
                      {t(item.unit)}
                    </span>
                  </div>
                  <div className="flex items-center justify-between mt-2 pt-2 border-t border-[#D8D4C8] text-xs">
                    <span dir="ltr" className="font-mono text-xs font-semibold text-[#62736C]">
                      {item.period}
                    </span>
                    <span dir="ltr" className="inline-flex items-center gap-1 font-mono text-sm font-bold text-[#096E47] tabular-nums">
                      <ArrowUpRight className="w-4 h-4" />
                      {item.change}
                    </span>
                  </div>
                </div>

                <p className="text-[15px] text-[#44534D] leading-[1.75] font-normal">
                  {t(item.description)}
                </p>
              </div>

              <div className="mt-6 pt-3 border-t border-[#ECE8DF] flex items-center justify-between text-[13px] text-[#62736C]">
                <span className="font-medium">
                  {t({ ar: 'تواتر النشر:', en: 'Freq:' })} {t(item.frequency)}
                </span>
                <span dir="ltr" className="font-mono text-xs font-bold text-[#B99553]">
                  IMF e-GDDS
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Directorate of Economic Research & Statistics Documentary Feature */}
        <div className="bg-white rounded-xl border border-[#D8D4C8] overflow-hidden shadow-sm mb-16 grid grid-cols-1 lg:grid-cols-12">
          <div className="relative h-72 sm:h-96 lg:h-auto lg:col-span-6 bg-[#0B1A2D]">
            <Image
              src="/images/cbos/research/cbos-economic-research-team.webp"
              alt={t({ ar: 'فريق الإدارة العامة للبحوث والإحصاء ببنك السودان المركزي', en: 'CBOS Economic Research & Macroeconomic Statistics Directorate' })}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent lg:hidden" />
            <div className="absolute bottom-3 start-4 text-[11px] font-mono text-white/90 bg-black/50 px-2.5 py-1 rounded backdrop-blur-sm">
              ECONOMIC RESEARCH DIRECTORATE • IMF e-GDDS COMPLIANCE
            </div>
          </div>

          <div className="p-8 sm:p-10 lg:col-span-6 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-[#033E2D] text-xs font-mono uppercase tracking-wider mb-2">
                <span className="w-2 h-2 rounded-full bg-[#B99553]" />
                <span>{t({ ar: 'البحوث والتحليل الاقتصادي الكلي', en: 'Macroeconomic Analysis & Research' })}</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-[#10231C] font-display mb-3 leading-snug">
                {t({
                  ar: 'الإدارة العامة للبحوث الإحصائية والسياسات النقدية',
                  en: 'General Directorate of Economic Research & Statistics'
                })}
              </h3>
              <p className="text-xs sm:text-sm text-[#44534D] leading-[1.8] font-sans mb-6">
                {t({
                  ar: 'يعكف فريق الخبراء والباحثين الاقتصاديين في بنك السودان المركزي على نمذجة المتغيرات النقدية والمصرفية، وتحليل ميزان المدفوعات وتدفقات التجارة الخارجية والذهب، وتزويد متخذي القرار بسياسات وتوصيات قائمة على البيانات لضمان الاستقرار السعري والنقدي.',
                  en: 'CBOS quantitative economists and policy researchers model monetary dynamics, analyze the balance of payments, gold flows, and trade aggregates to furnish leadership with empirical policy recommendations underpinning national price stability.'
                })}
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-4 border-t border-[#ECE8DF]">
                <div className="p-3 rounded-lg bg-[#FAF9F6] border border-[#D8D4C8]">
                  <div className="font-mono text-base font-bold text-[#0B1A2D]">IMF e-GDDS</div>
                  <div className="text-[11px] text-[#44534D] leading-tight mt-0.5">
                    {t({ ar: 'المعيار الدولي للنشر', en: 'Dissemination Standard' })}
                  </div>
                </div>
                <div className="p-3 rounded-lg bg-[#FAF9F6] border border-[#D8D4C8]">
                  <div className="font-mono text-base font-bold text-[#0B1A2D]">100%</div>
                  <div className="text-[11px] text-[#44534D] leading-tight mt-0.5">
                    {t({ ar: 'تغطية القطاع المصرفي', en: 'Banking Sector Census' })}
                  </div>
                </div>
                <div className="p-3 rounded-lg bg-[#FAF9F6] border border-[#D8D4C8] col-span-2 sm:col-span-1">
                  <div className="font-mono text-base font-bold text-[#B99553]">Monthly</div>
                  <div className="text-[11px] text-[#44534D] leading-tight mt-0.5">
                    {t({ ar: 'تحديث المؤشرات الدورية', en: 'Periodic Bulletin' })}
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-[#ECE8DF] flex items-center justify-between text-xs font-mono text-[#62736C]">
              <span>DOCUMENTARY ARCHIVE • SUDAN MACROECONOMIC RESEARCH</span>
              <span className="text-[#033E2D] font-bold">CBOS 2026</span>
            </div>
          </div>
        </div>

        {/* Statistical Publications & Dissemination Calendar Strip */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          <div className="lg:col-span-8 bg-white border border-[#D8D4C8] rounded-xl p-6 sm:p-8 shadow-sm">
            <div className="flex items-center gap-3 text-[#033E2D] font-bold text-xl mb-4 border-b border-[#ECE8DF] pb-3">
              <Calendar className="w-5 h-5 text-[#B99553]" />
              <h2>{t({ ar: 'تقويم نشر البيانات الإحصائية والتقارير الدورية (2026)', en: 'Statistical Release Calendar (2026)' })}</h2>
            </div>

            <div className="space-y-4">
              {[
                {
                  title: { ar: 'النشرة الإحصائية الشهرية (سبتمبر 2026)', en: 'Monthly Statistical Bulletin (September 2026)' },
                  date: '2026-10-15',
                  coverage: { ar: 'القطاع النقدي والمصرفي وأسعار الصرف', en: 'Monetary, Banking & FX Indicators' }
                },
                {
                  title: { ar: 'موجز إحصاءات التجارة الخارجية (الربع الثالث 2026)', en: 'Foreign Trade Statistical Digest (Q3 2026)' },
                  date: '2026-11-01',
                  coverage: { ar: 'صادرات الذهب، السلع الزراعية والمستوردات', en: 'Gold, Agricultural Exports & Strategic Imports' }
                },
                {
                  title: { ar: 'التقرير السنوي لمجلس الإدارة عن العام المالي 2025', en: 'Annual Report of the Board of Directors 2025' },
                  date: '2026-06-30',
                  coverage: { ar: 'الحسابات الختامية والأداء الاقتصادي القومي', en: 'Audited Financials & National Macroeconomic Review' }
                }
              ].map((cal, idx) => (
                <div key={idx} className="p-4 rounded-lg bg-[#FAF9F6] border border-[#D8D4C8] flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div>
                    <div className="font-bold text-sm sm:text-base text-[#10231C]">{t(cal.title)}</div>
                    <div className="text-xs text-[#44534D] mt-0.5">{t(cal.coverage)}</div>
                  </div>
                  <div className="flex items-center gap-2 shrink-0">
                    <span dir="ltr" className="font-mono text-xs bg-[#DCEFE6] text-[#033E2D] px-2.5 py-1 rounded font-bold">
                      {cal.date}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div 
            className="lg:col-span-4 text-white rounded-xl p-6 border border-[#B99553]/40 flex flex-col justify-between"
            style={{ backgroundColor: '#0B1A2D' }}
          >
            <div>
              <div className="flex items-center gap-2 text-[#DDC99B] text-xs font-mono uppercase font-bold tracking-wider mb-2">
                <CheckCircle2 className="w-4 h-4 text-[#B99553]" />
                <span dir="ltr">IMF e-GDDS METADATA</span>
              </div>
              <h3 className="font-bold text-xl text-white mb-3">
                {t({ ar: 'المعايير الدولية للنشر الإحصائي', en: 'IMF Dissemination Standards' })}
              </h3>
              <p className="text-[#E2DDD3] text-sm leading-[1.8] mb-6">
                {t({
                  ar: 'يلتزم بنك السودان المركزي بأفضل الممارسات الإحصائية الدولية لتوفير سلاسل زمنية دقيقة تدعم القرارات الاستثمارية والأبحاث الأكاديمية والسياسات العامة.',
                  en: 'CBOS commits to international statistical best practices, offering precise time series supporting academic research, policymaking, and sovereign investment.'
                })}
              </p>
            </div>

            <div dir="ltr" className="pt-4 border-t border-[#054C36] text-xs text-[#D8D4C8] font-mono">
              DIRECTORATE OF ECONOMIC RESEARCH & STATISTICS
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
