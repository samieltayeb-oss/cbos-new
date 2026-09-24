'use client';

import React, { useState } from 'react';
import { useLanguage } from '@/lib/languageContext';
import { officialRatesData } from '@/data/rates';
import { 
  ArrowLeftRight, 
  Download, 
  TrendingUp, 
  Info, 
  Search, 
  ShieldCheck, 
  FileSpreadsheet,
  FileCode2,
  Calendar,
  Clock
} from 'lucide-react';

export default function ExchangeRatesPage() {
  const { t } = useLanguage();
  
  // Calculator state
  const [calcAmount, setCalcAmount] = useState<number>(1000);
  const [calcCurrency, setCalcCurrency] = useState<string>('USD');
  const [calcDirection, setCalcDirection] = useState<'FX_TO_SDG' | 'SDG_TO_FX'>('FX_TO_SDG');
  
  // Table search & filter
  const [searchQuery, setSearchQuery] = useState<string>('');
  
  // Chart currency selection
  const [selectedChartCur, setSelectedChartCur] = useState<string>('USD');

  const selectedRateItem = officialRatesData.rates.find(r => r.currency_code === calcCurrency) || officialRatesData.rates[0];
  const chartRateItem = officialRatesData.rates.find(r => r.currency_code === selectedChartCur) || officialRatesData.rates[0];

  // Calculated conversion value
  const conversionResult = calcDirection === 'FX_TO_SDG' 
    ? calcAmount * selectedRateItem.official_middle 
    : calcAmount / (selectedRateItem.official_middle || 1);

  // Filtered rates list
  const filteredRates = officialRatesData.rates.filter(item => {
    const q = searchQuery.toLowerCase();
    return (
      item.currency_code.toLowerCase().includes(q) ||
      t(item.currency_name).toLowerCase().includes(q)
    );
  });

  // Export to CSV function
  const handleExportCSV = () => {
    const headers = ['Currency Code', 'Currency Name EN', 'Currency Name AR', 'Official Buy (SDG)', 'Official Sell (SDG)', 'Official Middle (SDG)'];
    const rows = officialRatesData.rates.map(r => [
      r.currency_code,
      r.currency_name.en,
      r.currency_name.ar,
      r.official_buy,
      r.official_sell,
      r.official_middle
    ]);
    const csvContent = 'data:text/csv;charset=utf-8,' + [headers.join(','), ...rows.map(e => e.join(','))].join('\n');
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement('a');
    link.setAttribute('href', encodedUri);
    link.setAttribute('download', `cbos_rates_${officialRatesData.date}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Export to JSON function
  const handleExportJSON = () => {
    const dataStr = 'data:text/json;charset=utf-8,' + encodeURIComponent(JSON.stringify(officialRatesData, null, 2));
    const downloadAnchor = document.createElement('a');
    downloadAnchor.setAttribute('href', dataStr);
    downloadAnchor.setAttribute('download', `cbos_rates_${officialRatesData.date}.json`);
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
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
            <ArrowLeftRight className="w-4 h-4 text-[#B99553]" />
            <span>{t({ ar: 'الأسواق المالية والنقد', en: 'Financial Markets & Currency' })}</span>
            <span className="text-[#DDC99B]/50">/</span>
            <span>{t({ ar: 'أسعار الصرف التأشيرية الرسمية', en: 'Official Indicative Exchange Rates' })}</span>
          </div>

          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
            <div className="max-w-4xl">
              <h1 
                className="text-white font-extrabold tracking-normal leading-[1.15] mb-5 text-[34px] sm:text-[46px] lg:text-[56px]"
                style={{ fontFamily: 'var(--font-arabic)' }}
              >
                {t({
                  ar: 'نشرة أسعار الصرف التأشيرية اليومية',
                  en: 'Daily Indicative Sovereign Exchange Rates'
                })}
              </h1>
              <p 
                className="text-[#E2DDD3] font-normal sm:font-medium text-base sm:text-lg lg:text-[18px] leading-[1.85] max-w-[780px]"
                style={{ fontFamily: 'var(--font-arabic)' }}
              >
                {t(officialRatesData.methodologyNote)}
              </p>
            </div>

            <div className="bg-[#0A1813] border border-[#B99553]/40 rounded-xl p-4 text-xs font-mono shrink-0 space-y-2">
              <div className="flex items-center gap-2 text-[#D8D4C8]">
                <Calendar className="w-3.5 h-3.5 text-[#B99553]" />
                <span>{t({ ar: 'تاريخ النشرة:', en: 'Bulletin Date:' })}</span>
                <span dir="ltr" className="text-white font-bold">{officialRatesData.date}</span>
              </div>
              <div className="flex items-center gap-2 text-[#D8D4C8]">
                <Clock className="w-3.5 h-3.5 text-[#B99553]" />
                <span>{t({ ar: 'سريان الأسعار:', en: 'Effective Window:' })}</span>
                <span className="text-emerald-400 font-bold">{t({ ar: 'ساري المفعول حتى التحديث القادم', en: 'Valid until next publish' })}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {/* Converter & Quick Actions Strip */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12">
          
          {/* Sovereign FX Calculator */}
          <div className="lg:col-span-7 bg-white border border-sand-300 rounded-xl p-6 sm:p-8 shadow-sm">
            <div className="flex items-center justify-between pb-4 border-b border-sand-200 mb-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-cbos-green-50 text-cbos-green-900 flex items-center justify-center">
                  <ArrowLeftRight className="w-5 h-5 text-cbos-green-800" />
                </div>
                <div>
                  <h2 className="font-bold text-lg text-cbos-ink">
                    {t({ ar: 'محول العملات التأشيري المباشر', en: 'Indicative Currency Converter' })}
                  </h2>
                  <p className="text-xs text-cbos-ink-muted">
                    {t({ ar: 'حساب دقيق استناداً إلى السعر التأشيري الوسيط لبنك السودان', en: 'Computed using official CBOS mid-market indicative rate' })}
                  </p>
                </div>
              </div>

              <button
                onClick={() => setCalcDirection(calcDirection === 'FX_TO_SDG' ? 'SDG_TO_FX' : 'FX_TO_SDG')}
                className="p-2 rounded-lg bg-sand-100 hover:bg-sand-200 text-cbos-ink transition-colors"
                title={t({ ar: 'عكس اتجاه التحويل', en: 'Swap conversion direction' })}
              >
                <ArrowLeftRight className="w-4 h-4" />
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
              {/* Input side */}
              <div>
                <label className="block text-xs font-mono font-bold text-cbos-ink-muted uppercase mb-1">
                  {calcDirection === 'FX_TO_SDG' 
                    ? t({ ar: 'المبلغ بالعملة الأجنبية', en: 'Foreign Currency Amount' })
                    : t({ ar: 'المبلغ بالجنيه السوداني', en: 'Amount in Sudanese Pounds' })}
                </label>
                <div className="relative">
                  <input
                    type="number"
                    value={calcAmount}
                    onChange={(e) => setCalcAmount(Math.max(0, Number(e.target.value) || 0))}
                    className="w-full bg-sand-50 border border-sand-300 rounded-lg px-4 py-2.5 text-base font-mono font-bold text-cbos-ink focus:outline-none focus:border-[#22446D]"
                  />
                  <span className="absolute end-3 top-2.5 text-xs font-mono font-bold text-cbos-ink-muted">
                    {calcDirection === 'FX_TO_SDG' ? calcCurrency : 'SDG'}
                  </span>
                </div>
              </div>

              {/* Currency Selector */}
              <div>
                <label className="block text-xs font-mono font-bold text-cbos-ink-muted uppercase mb-1">
                  {t({ ar: 'العملة الأجنبية المقابلة', en: 'Target Foreign Currency' })}
                </label>
                <select
                  value={calcCurrency}
                  onChange={(e) => setCalcCurrency(e.target.value)}
                  className="w-full bg-sand-50 border border-sand-300 rounded-lg px-4 py-2.5 text-base font-bold text-cbos-ink focus:outline-none focus:border-[#22446D]"
                >
                  {officialRatesData.rates.map(r => (
                    <option key={r.currency_code} value={r.currency_code}>
                      {r.currency_code} — {t(r.currency_name)}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Result Display Box */}
            <div 
              className="bg-[#0B1A2D] text-white rounded-xl p-5 border border-[#22446D] flex flex-col sm:flex-row sm:items-center justify-between gap-4"
            >
              <div>
                <span className="text-xs text-sand-300 font-mono">
                  {calcDirection === 'FX_TO_SDG' 
                    ? `${calcAmount.toLocaleString()} ${calcCurrency} =`
                    : `${calcAmount.toLocaleString()} SDG =`}
                </span>
                <div className="text-2xl sm:text-3xl font-mono font-bold text-cbos-gold mt-0.5">
                  {conversionResult.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}{' '}
                  <span className="text-base text-white font-sans">{calcDirection === 'FX_TO_SDG' ? 'SDG' : calcCurrency}</span>
                </div>
              </div>

              <div className="text-xs text-sand-300 font-mono border-t sm:border-t-0 sm:border-s border-[#22446D] pt-2 sm:pt-0 sm:ps-4">
                <div>{t({ ar: 'السعر التأشيري المعتمد:', en: 'Applied Rate:' })}</div>
                <div className="text-white font-bold">1 {calcCurrency} = {selectedRateItem.official_middle.toFixed(2)} SDG</div>
              </div>
            </div>
          </div>

          {/* Historical Trend Preview */}
          <div className="lg:col-span-5 bg-white border border-sand-300 rounded-xl p-6 shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-3 border-b border-sand-200 mb-4">
                <div className="flex items-center gap-2">
                  <TrendingUp className="w-5 h-5 text-cbos-green-800" />
                  <h3 className="font-bold text-base text-cbos-ink">
                    {t({ ar: 'المسار الزمني (7 أيام)', en: '7-Day Historical Trend' })}
                  </h3>
                </div>

                <div className="flex gap-1">
                  {['USD', 'EUR', 'SAR', 'AED'].map(c => (
                    <button
                      key={c}
                      onClick={() => setSelectedChartCur(c)}
                      className={`px-2 py-1 text-xs font-mono font-bold rounded ${
                        selectedChartCur === c
                          ? 'bg-cbos-green-900 text-white'
                          : 'bg-sand-100 text-ink-muted hover:bg-sand-200'
                      }`}
                    >
                      {c}
                    </button>
                  ))}
                </div>
              </div>

              <div className="text-xs text-ink-muted mb-4">
                {t({ ar: 'حركة السعر التأشيري لـ', en: 'Indicative rate trajectory for' })} {selectedChartCur} ({t(chartRateItem.currency_name)}):
              </div>

              {/* Simple Responsive SVG Trend Line */}
              <div className="bg-sand-50 border border-sand-200 rounded-lg p-4">
                <div className="flex items-end justify-between h-28 gap-2">
                  {chartRateItem.historical_7d.map((pt, i) => {
                    const min = Math.min(...chartRateItem.historical_7d.map(x => x.rate));
                    const max = Math.max(...chartRateItem.historical_7d.map(x => x.rate));
                    const range = max - min || 1;
                    const heightPercent = Math.max(15, Math.min(100, ((pt.rate - min) / range) * 85 + 15));

                    return (
                      <div key={i} className="flex-1 flex flex-col items-center gap-1 group relative">
                        {/* Tooltip */}
                        <div className="opacity-0 group-hover:opacity-100 transition-opacity absolute -top-8 bg-[#0B1A2D] text-white text-[10px] font-mono px-1.5 py-0.5 rounded border border-[#22446D] shadow pointer-events-none whitespace-nowrap z-20">
                          {pt.rate.toFixed(2)}
                        </div>
                        <div 
                          className="w-full bg-cbos-green-800 group-hover:bg-cbos-gold rounded-t transition-colors"
                          style={{ height: `${heightPercent}%` }}
                        />
                        <span className="text-[9px] font-mono text-ink-muted">
                          {pt.date.slice(8)}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            <div className="mt-4 pt-3 border-t border-sand-200 flex items-center justify-between text-xs font-mono text-ink-muted">
              <span>SOURCE: CBOS MARKETS</span>
              <span className="text-cbos-green-800 font-bold">{chartRateItem.official_middle.toFixed(2)} SDG</span>
            </div>
          </div>

        </div>

        {/* Full Official Rates Table */}
        <div className="bg-white border border-sand-300 rounded-xl shadow-sm overflow-hidden mb-12">
          
          {/* Table Header Controls */}
          <div className="p-6 border-b border-sand-200 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h2 className="font-bold text-xl text-cbos-ink">
                {t({ ar: 'جدول أسعار صرف العملات الأجنبية مقابل الجنيه السوداني', en: 'Indicative Exchange Rates Against Sudanese Pound (SDG)' })}
              </h2>
              <p className="text-xs text-cbos-ink-muted mt-1">
                {t({ ar: 'سارية لكافة المعاملات الرسمية والمحاسبية والمصرفية', en: 'Applicable for official valuations, customs, and bank transactions' })}
              </p>
            </div>

            <div className="flex items-center gap-3">
              {/* Search Bar */}
              <div className="relative">
                <Search className="w-4 h-4 absolute start-3 top-2.5 text-cbos-ink-muted" />
                <input
                  type="text"
                  placeholder={t({ ar: 'بحث بالعملة أو الرمز...', en: 'Search currency...' })}
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="ps-9 pe-4 py-2 text-xs bg-sand-50 border border-sand-300 rounded-lg focus:outline-none focus:border-[#22446D] w-44 sm:w-56 text-cbos-ink"
                />
              </div>

              {/* Export Buttons */}
              <button
                onClick={handleExportCSV}
                className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg bg-cbos-green-900 text-white hover:bg-cbos-green-800 text-xs font-mono font-medium transition-colors"
                title={t({ ar: 'تحميل ملف CSV', en: 'Download CSV' })}
              >
                <FileSpreadsheet className="w-3.5 h-3.5" />
                <span>CSV</span>
              </button>

              <button
                onClick={handleExportJSON}
                className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg bg-sand-100 text-cbos-ink hover:bg-sand-200 text-xs font-mono font-medium transition-colors"
                title={t({ ar: 'تحميل كائن JSON', en: 'Download JSON' })}
              >
                <FileCode2 className="w-3.5 h-3.5" />
                <span>JSON</span>
              </button>
            </div>
          </div>

          {/* Table Container */}
          <div className="overflow-x-auto">
            <table className="w-full text-start border-collapse">
              <thead>
                <tr className="bg-sand-100/70 border-b border-sand-200 text-xs font-mono uppercase text-cbos-ink-muted">
                  <th className="py-3.5 px-4 text-start font-bold">{t({ ar: 'رمز العملة', en: 'Code' })}</th>
                  <th className="py-3.5 px-4 text-start font-bold">{t({ ar: 'اسم العملة', en: 'Currency Name' })}</th>
                  <th className="py-3.5 px-4 text-end font-bold text-cbos-green-950">{t({ ar: 'سعر الشراء (ج.س)', en: 'Official Buy (SDG)' })}</th>
                  <th className="py-3.5 px-4 text-end font-bold text-cbos-green-950">{t({ ar: 'سعر البيع (ج.س)', en: 'Official Sell (SDG)' })}</th>
                  <th className="py-3.5 px-4 text-end font-bold text-cbos-gold">{t({ ar: 'السعر التأشيري الوسيط', en: 'Official Mid Rate' })}</th>
                  <th className="py-3.5 px-4 text-end font-bold text-cbos-ink-muted hidden md:table-cell">{t({ ar: 'متوسط البنوك', en: 'Bank Avg' })}</th>
                  <th className="py-3.5 px-4 text-end font-bold text-cbos-ink-muted hidden lg:table-cell">{t({ ar: 'متوسط الصرافات', en: 'Bureau Avg' })}</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-sand-200 text-sm">
                {filteredRates.map((rate) => (
                  <tr key={rate.currency_code} className="hover:bg-sand-50/80 transition-colors">
                    <td className="py-3.5 px-4 font-mono font-bold text-cbos-green-900">
                      <span className="px-2 py-0.5 bg-cbos-green-50 rounded border border-cbos-green-200">
                        {rate.currency_code}
                      </span>
                    </td>
                    <td className="py-3.5 px-4 font-semibold text-cbos-ink">
                      {t(rate.currency_name)}
                    </td>
                    <td className="py-3.5 px-4 font-mono text-end font-medium text-cbos-ink">
                      {rate.official_buy.toLocaleString('en-US', { minimumFractionDigits: 2 })}
                    </td>
                    <td className="py-3.5 px-4 font-mono text-end font-medium text-cbos-ink">
                      {rate.official_sell.toLocaleString('en-US', { minimumFractionDigits: 2 })}
                    </td>
                    <td className="py-3.5 px-4 font-mono text-end font-bold text-cbos-green-950 bg-sand-50/50">
                      {rate.official_middle.toLocaleString('en-US', { minimumFractionDigits: 2 })}
                    </td>
                    <td className="py-3.5 px-4 font-mono text-end text-cbos-ink-muted hidden md:table-cell">
                      {rate.commercial_bank_avg ? rate.commercial_bank_avg.toLocaleString('en-US', { minimumFractionDigits: 2 }) : '—'}
                    </td>
                    <td className="py-3.5 px-4 font-mono text-end text-cbos-ink-muted hidden lg:table-cell">
                      {rate.exchange_bureau_avg ? rate.exchange_bureau_avg.toLocaleString('en-US', { minimumFractionDigits: 2 }) : '—'}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Table Footer */}
          <div className="p-4 bg-sand-50 border-t border-sand-200 flex flex-col sm:flex-row items-center justify-between text-xs text-cbos-ink-muted gap-2">
            <div className="flex items-center gap-1.5">
              <Info className="w-4 h-4 text-cbos-gold shrink-0" />
              <span>{t({ ar: 'تخضع الأسعار لضوابط منشور إدارة النقد الأجنبي رقم 2026/02.', en: 'Subject to CBOS Foreign Exchange Circular No. 2026/02 regulations.' })}</span>
            </div>
            <div className="font-mono">
              {t({ ar: 'عدد العملات المدرجة:', en: 'Currencies Listed:' })} {filteredRates.length}
            </div>
          </div>
        </div>

        {/* Regulatory Notices Box */}
        <div className="bg-white border border-sand-300 rounded-xl p-8 shadow-sm">
          <div className="flex items-center gap-3 text-cbos-green-900 font-bold text-xl mb-4 border-b border-sand-200 pb-3">
            <ShieldCheck className="w-5 h-5 text-cbos-gold" />
            <h2>{t({ ar: 'ضوابط التعامل بالنقد الأجنبي والمعاملات المصرفية', en: 'Foreign Exchange Regulatory Directives' })}</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs text-cbos-ink-muted leading-[1.7]">
            <div className="p-4 rounded-lg bg-sand-50 border border-sand-200 space-y-2">
              <h3 className="font-bold text-sm text-cbos-ink">{t({ ar: 'تسوية حصائل الصادر', en: 'Export Proceeds Repatriation' })}</h3>
              <p>{t({ ar: 'يلتزم كافة المصدرين باسترداد حصائل الصادرات عبر الجهاز المصرفي وإيداعها في الحسابات المخصصة خلال المدة القانونية المقررة.', en: 'Exporters are legally obligated to repatriate export proceeds through authorized banking channels within statutory limits.' })}</p>
            </div>
            <div className="p-4 rounded-lg bg-sand-50 border border-sand-200 space-y-2">
              <h3 className="font-bold text-sm text-cbos-ink">{t({ ar: 'مخصصات السفر والعلاج', en: 'Travel & Medical Allowances' })}</h3>
              <p>{t({ ar: 'تحدد المصارف التجارية المعتمدة مخصصات العملات الأجنبية للمواطنين لأغراض العلاج والدراسة بالخارج وفقاً للمستندات المعززة.', en: 'Authorized banks disburse FX quotas for medical treatment and overseas education upon verification of statutory documents.' })}</p>
            </div>
            <div className="p-4 rounded-lg bg-sand-50 border border-sand-200 space-y-2">
              <h3 className="font-bold text-sm text-cbos-ink">{t({ ar: 'حظر المضاربات الموازية', en: 'Prohibition of Unlicensed Trading' })}</h3>
              <p>{t({ ar: 'يحظر تماماً تداول النقد الأجنبي خارج القنوات المصرفية والصرافات المرخصة، وتطبق أقصى العقوبات المنصوص عليها في قانون النقد الأجنبي.', en: 'Foreign exchange trading outside licensed banks and exchange bureaus is strictly prohibited under sovereign foreign currency laws.' })}</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
