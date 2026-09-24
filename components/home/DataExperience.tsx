'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useLanguage } from '@/lib/languageContext';
import { officialRatesData } from '@/data/rates';
import { Download, FileSpreadsheet, Info, TrendingUp, ArrowRight, ArrowLeft } from 'lucide-react';

export default function DataExperience() {
  const { isRtl } = useLanguage();
  const [selectedCurrency, setSelectedCurrency] = useState('USD');
  
  const currentRateObj = officialRatesData.rates.find(r => r.currency_code === selectedCurrency) || officialRatesData.rates[0];
  const chartPoints = currentRateObj.historical_7d;

  // Compute SVG chart coordinates
  const minRate = Math.min(...chartPoints.map(p => p.rate)) * 0.995;
  const maxRate = Math.max(...chartPoints.map(p => p.rate)) * 1.005;
  const svgWidth = 600;
  const svgHeight = 220;
  const padding = 30;

  const points = chartPoints.map((pt, i) => {
    const x = padding + (i / (chartPoints.length - 1)) * (svgWidth - 2 * padding);
    const y = svgHeight - padding - ((pt.rate - minRate) / (maxRate - minRate)) * (svgHeight - 2 * padding);
    return `${x},${y}`;
  }).join(' ');

  const handleDownloadCsv = () => {
    let csv = "Date,Currency,Rate_SDG\n";
    chartPoints.forEach(p => {
      csv += `${p.date},${selectedCurrency},${p.rate}\n`;
    });
    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.setAttribute("href", url);
    link.setAttribute("download", `cbos_rates_${selectedCurrency}_2026.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className="py-14 px-4 md:px-8 bg-white border-b border-cbos-stone/60">
      <div className="max-w-7xl mx-auto space-y-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-cbos-stone/50 pb-4">
          <div>
            <span className="text-xs font-bold text-cbos-green uppercase tracking-widest font-mono">
              {isRtl ? 'بوابة البيانات والمؤشرات الاقتصادية' : 'Economic Intelligence & Data Portal'}
            </span>
            <h2 className="text-2xl md:text-3xl font-black text-cbos-ink font-display mt-1">
              {isRtl ? 'السلاسل الزمنية والمؤشرات المالية اليومية' : 'Financial Time Series & Monetary Indicators'}
            </h2>
          </div>
          
          <div className="flex items-center gap-3">
            <button
              onClick={handleDownloadCsv}
              className="px-3.5 py-2 rounded-xl bg-cbos-ivory hover:bg-cbos-stone/60 text-cbos-ink font-bold text-xs flex items-center gap-1.5 transition-colors border border-cbos-stone"
            >
              <FileSpreadsheet className="w-4 h-4 text-cbos-green" />
              <span>{isRtl ? 'تصدير البيانات (CSV)' : 'Export CSV'}</span>
            </button>
            <Link
              href="/data"
              className="px-4 py-2 rounded-xl bg-cbos-green hover:bg-cbos-green-dark text-white font-bold text-xs flex items-center gap-1.5 transition-colors shadow"
            >
              <span>{isRtl ? 'كتالوج البيانات المفتوحة' : 'Open Data Portal'}</span>
              {isRtl ? <ArrowLeft className="w-3.5 h-3.5" /> : <ArrowRight className="w-3.5 h-3.5" />}
            </Link>
          </div>
        </div>

        {/* Interactive Chart Container */}
        <div className="bg-cbos-ink rounded-2xl p-6 md:p-8 text-cbos-ivory border border-cbos-gold/40 shadow-2xl space-y-6">
          
          {/* Controls: Currency selector */}
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-cbos-ink-border pb-4">
            <div className="flex items-center gap-2">
              {['USD', 'EUR', 'SAR', 'AED', 'GBP'].map((code) => (
                <button
                  key={code}
                  onClick={() => setSelectedCurrency(code)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-mono font-bold transition-all ${
                    selectedCurrency === code
                      ? 'bg-cbos-gold text-cbos-ink shadow'
                      : 'bg-cbos-ink-surface text-cbos-stone hover:text-white border border-cbos-ink-border'
                  }`}
                >
                  {code}
                </button>
              ))}
            </div>

            <div className="text-right text-xs font-mono">
              <span className="text-cbos-stone">{isRtl ? 'السعر الحالي: ' : 'Latest Official Rate: '}</span>
              <span className="text-cbos-gold font-bold text-base">{currentRateObj.official_middle.toFixed(2)} SDG</span>
            </div>
          </div>

          {/* SVG Chart Render */}
          <div className="relative w-full overflow-x-auto">
            <svg 
              className="w-full h-56 min-w-[550px]" 
              viewBox={`0 0 ${svgWidth} ${svgHeight}`}
              preserveAspectRatio="none"
            >
              {/* Grid Lines */}
              <line x1={padding} y1={padding} x2={svgWidth - padding} y2={padding} stroke="#273830" strokeDasharray="3 3" />
              <line x1={padding} y1={svgHeight / 2} x2={svgWidth - padding} y2={svgHeight / 2} stroke="#273830" strokeDasharray="3 3" />
              <line x1={padding} y1={svgHeight - padding} x2={svgWidth - padding} y2={svgHeight - padding} stroke="#273830" />

              {/* Sparkline Polyline */}
              <polyline
                fill="none"
                stroke="#B99553"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                points={points}
              />

              {/* Data Dots with values */}
              {chartPoints.map((pt, i) => {
                const x = padding + (i / (chartPoints.length - 1)) * (svgWidth - 2 * padding);
                const y = svgHeight - padding - ((pt.rate - minRate) / (maxRate - minRate)) * (svgHeight - 2 * padding);
                return (
                  <g key={i}>
                    <circle cx={x} cy={y} r="4.5" fill="#075A3A" stroke="#B99553" strokeWidth="2" />
                    <text x={x} y={y - 10} fill="#D8D4C8" fontSize="10" fontFamily="JetBrains Mono" textAnchor="middle">
                      {pt.rate.toFixed(0)}
                    </text>
                    <text x={x} y={svgHeight - 10} fill="#8F9CAE" fontSize="9" fontFamily="JetBrains Mono" textAnchor="middle">
                      {pt.date.substring(5)}
                    </text>
                  </g>
                );
              })}
            </svg>
          </div>

          {/* Source Attribution & Methodology Footer */}
          <div className="pt-4 border-t border-cbos-ink-border flex flex-col sm:flex-row items-center justify-between text-xs text-cbos-stone gap-3">
            <div className="flex items-center gap-2">
              <Info className="w-3.5 h-3.5 text-cbos-gold shrink-0" />
              <span>
                {isRtl
                  ? 'المصدر: الإدارة العامة للأسواق المالية وإدارة النقد الأجنبي — بنك السودان المركزي'
                  : 'Source: Financial Markets & Foreign Exchange Directorate — Central Bank of Sudan'}
              </span>
            </div>
            <span className="font-mono text-[11px] text-cbos-gold">e-GDDS Compliant Series</span>
          </div>

        </div>

      </div>
    </section>
  );
}
