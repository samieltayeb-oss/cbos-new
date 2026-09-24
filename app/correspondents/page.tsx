'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import { useLanguage } from '@/lib/languageContext';
import { officialCorrespondentsData, CorrespondentBankRecord } from '@/data/correspondents';
import { 
  Building2, 
  Search, 
  Download, 
  Printer, 
  Globe2, 
  ShieldCheck, 
  Check, 
  Copy, 
  ArrowLeft, 
  ArrowRight,
  Filter
} from 'lucide-react';

export default function CorrespondentsPage() {
  const { t, isRtl } = useLanguage();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCurrency, setSelectedCurrency] = useState('ALL');
  const [copiedCode, setCopiedCode] = useState<string | null>(null);

  const currencies = ['ALL', 'AED', 'EUR', 'GBP', 'SAR', 'TRY', 'USD'];

  const filteredData = useMemo(() => {
    return officialCorrespondentsData.filter((item) => {
      const matchesCurrency = selectedCurrency === 'ALL' || item.currency === selectedCurrency;
      const q = searchQuery.toLowerCase().trim();
      if (!q) return matchesCurrency;

      const matchesSearch = 
        item.swift_bic.toLowerCase().includes(q) ||
        item.bank_name.ar.toLowerCase().includes(q) ||
        item.bank_name.en.toLowerCase().includes(q) ||
        item.city_country.ar.toLowerCase().includes(q) ||
        item.city_country.en.toLowerCase().includes(q) ||
        item.currency.toLowerCase().includes(q);

      return matchesCurrency && matchesSearch;
    });
  }, [searchQuery, selectedCurrency]);

  const handleCopySwift = (swift: string) => {
    navigator.clipboard.writeText(swift);
    setCopiedCode(swift);
    setTimeout(() => setCopiedCode(null), 2000);
  };

  const handleExportCsv = () => {
    let csv = "Correspondent_SWIFT_BIC,Correspondent_Bank_En,Correspondent_Bank_Ar,City_Country,Currency\n";
    filteredData.forEach(row => {
      csv += `"${row.swift_bic}","${row.bank_name.en}","${row.bank_name.ar}","${row.city_country.en}","${row.currency}"\n`;
    });
    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `cbos_correspondent_banks_${selectedCurrency}.csv`;
    link.click();
  };

  return (
    <div className="bg-sand-50 min-h-screen">
      {/* Sovereign Header Banner */}
      <section 
        className="bg-cbos-navyDark text-white relative overflow-hidden py-14 lg:py-20 border-b border-[#22446D]"
        style={{ backgroundColor: '#0B1A2D' }}
      >
        <div className="absolute inset-0 bg-guilloche opacity-15 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Breadcrumb matching cbos.gov.sd */}
          <div className="flex items-center gap-2 text-cbos-blue text-xs font-mono uppercase tracking-wider mb-4">
            <Link href="/" className="hover:underline">
              {isRtl ? 'الرئيسية' : 'Home'}
            </Link>
            <span>/</span>
            <span className="text-[#8F9CAE]">
              {isRtl ? 'مراسلي بنك السودان المركزي' : 'CBOS Correspondent Banks'}
            </span>
          </div>

          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#162D4C] border border-[#22446D] text-xs font-mono font-bold text-cbos-blue mb-3">
                <Globe2 className="w-3.5 h-3.5 text-cbos-gold" />
                <span>{isRtl ? 'إدارة النقد الأجنبي والأسواق المالية' : 'FOREIGN EXCHANGE & INTERNATIONAL BANKING'}</span>
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-normal font-display">
                {isRtl ? 'مراسلي بنك السودان المركزي' : 'Correspondent Banks Directory'}
              </h1>
              <p className="text-[#8F9CAE] text-sm sm:text-base max-w-3xl leading-relaxed mt-2">
                {isRtl
                  ? 'السجل الرسمي للمصارف المراسلة الدولية المعتمدة لدى بنك السودان المركزي لتنفيذ العمليات المصرفية والتحويلات الخارجية بمختلف العملات الحرة القابلة للتحويل.'
                  : 'Official directory of international correspondent banks authorized by the Central Bank of Sudan for external settlements and global transactions across major reserve currencies.'}
              </p>
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={handleExportCsv}
                className="px-4 py-2.5 rounded-xl bg-[#162D4C] hover:bg-[#1B375C] text-white border border-[#22446D] text-xs font-bold font-mono flex items-center gap-2 transition-all shadow-sm"
              >
                <Download className="w-4 h-4 text-cbos-blue" />
                <span>{isRtl ? 'تصدير (CSV)' : 'Export CSV'}</span>
              </button>
              <button
                onClick={() => window.print()}
                className="px-4 py-2.5 rounded-xl bg-cbos-blue hover:bg-cbos-blue-hover text-white text-xs font-bold font-mono flex items-center gap-2 transition-all shadow-md"
              >
                <Printer className="w-4 h-4" />
                <span>{isRtl ? 'طباعة' : 'Print'}</span>
              </button>
            </div>
          </div>

        </div>
      </section>

      {/* Main Content Area */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-6">
        
        {/* Filter and Search Bar */}
        <div className="bg-white rounded-xl p-4 sm:p-5 border border-sand-300 shadow-sm flex flex-col md:flex-row items-center justify-between gap-4">
          
          {/* Currency Pills */}
          <div className="flex items-center gap-1.5 overflow-x-auto w-full md:w-auto pb-2 md:pb-0">
            <span className="text-xs font-bold text-cbos-ink-muted uppercase font-mono px-2 hidden sm:inline">
              <Filter className="w-3.5 h-3.5 inline mr-1" />
              {isRtl ? 'العملة:' : 'Currency:'}
            </span>
            {currencies.map((curr) => (
              <button
                key={curr}
                onClick={() => setSelectedCurrency(curr)}
                className={`px-3 py-1.5 rounded-lg text-xs font-mono font-bold transition-all shrink-0 ${
                  selectedCurrency === curr
                    ? 'bg-cbos-blue text-white shadow-sm'
                    : 'bg-sand-100 hover:bg-sand-200 text-cbos-ink border border-sand-200'
                }`}
              >
                {curr === 'ALL' ? (isRtl ? 'كافة العملات' : 'All Currencies') : curr}
              </button>
            ))}
          </div>

          {/* Quick Search */}
          <div className="relative w-full md:w-80">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={isRtl ? 'ابحث برمز SWIFT، اسم البنك، أو الدولة...' : 'Search SWIFT/BIC, bank name, country...'}
              className="w-full bg-sand-50 border border-sand-300 rounded-xl px-4 py-2 text-xs text-cbos-ink placeholder-slate-400 outline-none focus:border-cbos-blue font-sans pr-10 rtl:pr-4 rtl:pl-10"
            />
            <Search className="w-4 h-4 text-slate-400 absolute right-3 rtl:right-auto rtl:left-3 top-2.5 pointer-events-none" />
          </div>

        </div>

        {/* Master Official Correspondent Table */}
        <div className="bg-white rounded-xl border border-sand-300 shadow-cbos-card overflow-hidden">
          
          <div className="px-6 py-3.5 bg-sand-100/70 border-b border-sand-200 flex items-center justify-between text-xs font-mono">
            <span className="font-bold text-cbos-ink">
              {isRtl ? `إجمالي المصارف المطابقة: ${filteredData.length}` : `Total Correspondent Records: ${filteredData.length}`}
            </span>
            <span className="text-cbos-ink-muted text-[11px]">
              {isRtl ? 'بيانات معتمدة رسمياً من بنك السودان المركزي' : 'Certified Official Central Bank of Sudan Records'}
            </span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left rtl:text-right border-collapse">
              <thead>
                <tr className="bg-sand-50 border-b border-sand-200 text-xs font-mono text-cbos-ink uppercase tracking-wider">
                  <th className="py-3.5 px-6 font-bold w-1/4">
                    {isRtl ? 'رمز السويفت (SWIFT/BIC)' : 'Correspondent SWIFT/BIC'}
                  </th>
                  <th className="py-3.5 px-6 font-bold w-1/2">
                    {isRtl ? 'المصرف المراسل والمقر' : 'Correspondent Bank & Location'}
                  </th>
                  <th className="py-3.5 px-6 font-bold text-center w-1/4">
                    {isRtl ? 'العملة' : 'Curr'}
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-sand-200 text-xs font-sans">
                {filteredData.length === 0 ? (
                  <tr>
                    <td colSpan={3} className="py-12 text-center text-cbos-ink-muted font-mono">
                      {isRtl ? 'لم يتم العثور على مراسل مطابق لمعايير البحث.' : 'No correspondent banks matching your criteria.'}
                    </td>
                  </tr>
                ) : (
                  filteredData.map((item) => (
                    <tr 
                      key={item.id}
                      className="hover:bg-sand-50/80 transition-colors group"
                    >
                      {/* SWIFT / BIC Column */}
                      <td className="py-4 px-6 font-mono font-bold text-cbos-ink text-sm">
                        <div className="flex items-center gap-2">
                          <span className="bg-sand-100 group-hover:bg-white px-2.5 py-1 rounded border border-sand-200 group-hover:border-cbos-blue text-cbos-blue transition-colors">
                            {item.swift_bic}
                          </span>
                          <button
                            onClick={() => handleCopySwift(item.swift_bic)}
                            title={isRtl ? 'نسخ رمز السويفت' : 'Copy SWIFT'}
                            className="p-1 text-slate-400 hover:text-cbos-blue transition-colors"
                          >
                            {copiedCode === item.swift_bic ? (
                              <Check className="w-3.5 h-3.5 text-emerald-600" />
                            ) : (
                              <Copy className="w-3.5 h-3.5" />
                            )}
                          </button>
                        </div>
                      </td>

                      {/* Bank Name & Location Column */}
                      <td className="py-4 px-6 space-y-0.5">
                        <div className="font-bold text-cbos-ink text-sm font-display">
                          {isRtl ? item.bank_name.ar : item.bank_name.en}
                        </div>
                        <div className="text-[11px] text-cbos-ink-muted font-sans flex items-center gap-1.5">
                          <span>{isRtl ? item.city_country.ar : item.city_country.en}</span>
                          <span className="text-slate-300">•</span>
                          <span className="font-mono text-cbos-gold font-bold">{item.bank_name.en}</span>
                        </div>
                      </td>

                      {/* Currency Column */}
                      <td className="py-4 px-6 text-center">
                        <span className={`inline-block px-3 py-1 rounded-full text-xs font-mono font-bold shadow-sm ${
                          item.currency === 'USD' ? 'bg-emerald-100 text-emerald-800 border border-emerald-200' :
                          item.currency === 'EUR' ? 'bg-blue-100 text-blue-800 border border-blue-200' :
                          item.currency === 'AED' ? 'bg-amber-100 text-amber-800 border border-amber-200' :
                          item.currency === 'GBP' ? 'bg-purple-100 text-purple-800 border border-purple-200' :
                          item.currency === 'SAR' ? 'bg-teal-100 text-teal-800 border border-teal-200' :
                          'bg-sand-100 text-cbos-ink border border-sand-300'
                        }`}>
                          {item.currency}
                        </span>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>

        </div>

        {/* Regulatory Advisory Footnote Card */}
        <div className="bg-[#11253E] rounded-xl p-6 text-white border border-[#22446D] shadow-md flex flex-col md:flex-row items-start gap-4">
          <ShieldCheck className="w-6 h-6 text-cbos-gold shrink-0 mt-1" />
          <div className="space-y-1.5 text-xs">
            <h4 className="font-bold text-white text-sm font-display">
              {isRtl ? 'تعليمات وإرشادات المعاملات الخارجية والمراسلة المصرفية' : 'International Correspondent Banking Compliance Notice'}
            </h4>
            <p className="text-[#8F9CAE] leading-relaxed">
              {isRtl
                ? 'تخضع كافة التحويلات والمعاملات المصرفية عبر المصارف المراسلة لمنشورات وضوابط النقد الأجنبي الصادرة عن بنك السودان المركزي وقواعد الامتثال المالي الدولية لمكافحة غسل الأموال وتمويل الإرهاب (FATF). يُرجى من المصارف والمؤسسات المعتمدة مراجعة إدارة النقد الأجنبي لأي استفسارات تشغيلية.'
                : 'All transactions executed via correspondent accounts operate in strict conformity with CBOS Foreign Exchange Directives and international financial compliance standards (FATF). Licensed financial institutions must consult the Foreign Exchange Directorate for clearing instructions.'}
            </p>
          </div>
        </div>

      </section>
    </div>
  );
}
