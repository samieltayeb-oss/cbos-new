'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import { useLanguage } from '@/lib/languageContext';
import { officialRatesData } from '@/data/rates';
import { 
  Download, 
  FileSpreadsheet, 
  TrendingUp, 
  TrendingDown,
  ArrowRight, 
  ArrowLeft,
  Activity,
  Layers,
  Calendar,
  ShieldCheck,
  ExternalLink,
  ChevronDown,
  Info
} from 'lucide-react';

type Timeframe = '7D' | '30D' | '90D' | '1Y';
type DisplayMode = 'middle' | 'spread' | 'banks';

interface ChartPoint {
  date: string;
  rate: number;
  buy?: number;
  sell?: number;
  commercial?: number;
}

export default function DataExperience() {
  const { isRtl } = useLanguage();
  const [selectedCurrency, setSelectedCurrency] = useState('USD');
  const [timeframe, setTimeframe] = useState<Timeframe>('7D');
  const [displayMode, setDisplayMode] = useState<DisplayMode>('middle');
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  // Active currency object from official rates
  const currentRateObj = useMemo(() => {
    return officialRatesData.rates.find(r => r.currency_code === selectedCurrency) || officialRatesData.rates[0];
  }, [selectedCurrency]);

  // Generate synthetic multi-timeframe series anchored to genuine CBOS official data
  const seriesData: ChartPoint[] = useMemo(() => {
    const base7d = currentRateObj.historical_7d || [];
    const middle = currentRateObj.official_middle;
    const buy = currentRateObj.official_buy;
    const sell = currentRateObj.official_sell;
    const comm = currentRateObj.commercial_bank_avg || (middle * 0.998);

    if (timeframe === '7D') {
      return base7d.map((pt, idx) => {
        const factor = pt.rate / middle;
        return {
          date: pt.date,
          rate: pt.rate,
          buy: Math.round(buy * factor * 100) / 100,
          sell: Math.round(sell * factor * 100) / 100,
          commercial: Math.round(comm * factor * 100) / 100,
        };
      });
    }

    if (timeframe === '30D') {
      const points: ChartPoint[] = [];
      const count = 15;
      const startRate = middle * 0.973;
      const startDate = new Date('2026-08-25');
      for (let i = 0; i < count; i++) {
        const d = new Date(startDate);
        d.setDate(startDate.getDate() + i * 2);
        const progress = i / (count - 1);
        const wave = Math.sin(i * 0.8) * (middle * 0.004);
        const rate = Math.round((startRate + (middle - startRate) * progress + wave) * 100) / 100;
        points.push({
          date: d.toISOString().split('T')[0],
          rate: i === count - 1 ? middle : rate,
          buy: Math.round(rate * 0.996 * 100) / 100,
          sell: Math.round(rate * 1.004 * 100) / 100,
          commercial: Math.round(rate * 0.998 * 100) / 100,
        });
      }
      return points;
    }

    if (timeframe === '90D') {
      const points: ChartPoint[] = [];
      const count = 18;
      const startRate = middle * 0.952;
      const startDate = new Date('2026-06-25');
      for (let i = 0; i < count; i++) {
        const d = new Date(startDate);
        d.setDate(startDate.getDate() + i * 5);
        const progress = i / (count - 1);
        const wave = Math.sin(i * 0.7) * (middle * 0.006);
        const rate = Math.round((startRate + (middle - startRate) * progress + wave) * 100) / 100;
        points.push({
          date: d.toISOString().split('T')[0],
          rate: i === count - 1 ? middle : rate,
          buy: Math.round(rate * 0.996 * 100) / 100,
          sell: Math.round(rate * 1.004 * 100) / 100,
          commercial: Math.round(rate * 0.998 * 100) / 100,
        });
      }
      return points;
    }

    // 1Y
    const points: ChartPoint[] = [];
    const count = 24;
    const startRate = middle * 0.885;
    const startDate = new Date('2025-09-24');
    for (let i = 0; i < count; i++) {
      const d = new Date(startDate);
      d.setDate(startDate.getDate() + i * 15);
      const progress = i / (count - 1);
      const wave = Math.sin(i * 0.6) * (middle * 0.012);
      const rate = Math.round((startRate + (middle - startRate) * progress + wave) * 100) / 100;
      points.push({
        date: d.toISOString().split('T')[0],
        rate: i === count - 1 ? middle : rate,
        buy: Math.round(rate * 0.996 * 100) / 100,
        sell: Math.round(rate * 1.004 * 100) / 100,
        commercial: Math.round(rate * 0.998 * 100) / 100,
      });
    }
    return points;
  }, [currentRateObj, timeframe]);

  // Derived metrics
  const firstPoint = seriesData[0] || { rate: 1 };
  const lastPoint = seriesData[seriesData.length - 1] || { rate: 1 };
  const delta = lastPoint.rate - firstPoint.rate;
  const deltaPct = ((delta / firstPoint.rate) * 100).toFixed(2);
  const isPositive = delta >= 0;

  const minVal = Math.min(...seriesData.map(p => p.rate));
  const maxVal = Math.max(...seriesData.map(p => p.rate));
  const rangeSpan = maxVal - minVal || 1;

  // Chart rendering geometry
  const svgWidth = 860;
  const svgHeight = 280;
  const padLeft = 70;
  const padRight = 35;
  const padTop = 30;
  const padBottom = 45;

  const innerW = svgWidth - padLeft - padRight;
  const innerH = svgHeight - padTop - padBottom;

  // Coordinate mapper
  const getY = (val: number) => {
    return padTop + innerH - ((val - minVal) / rangeSpan) * innerH;
  };
  const getX = (idx: number) => {
    return padLeft + (idx / (seriesData.length - 1)) * innerW;
  };

  // Build smooth cubic Bezier path
  const curvePath = useMemo(() => {
    if (seriesData.length < 2) return '';
    const pts = seriesData.map((pt, i) => ({ x: getX(i), y: getY(pt.rate) }));
    let d = `M ${pts[0].x},${pts[0].y}`;

    for (let i = 0; i < pts.length - 1; i++) {
      const p0 = pts[Math.max(i - 1, 0)];
      const p1 = pts[i];
      const p2 = pts[i + 1];
      const p3 = pts[Math.min(i + 2, pts.length - 1)];

      const cp1x = p1.x + (p2.x - p0.x) / 6;
      const cp1y = p1.y + (p2.y - p0.y) / 6;
      const cp2x = p2.x - (p3.x - p1.x) / 6;
      const cp2y = p2.y - (p3.y - p1.y) / 6;

      d += ` C ${cp1x.toFixed(1)},${cp1y.toFixed(1)} ${cp2x.toFixed(1)},${cp2y.toFixed(1)} ${p2.x.toFixed(1)},${p2.y.toFixed(1)}`;
    }
    return d;
  }, [seriesData, minVal, maxVal]);

  // Area polygon path for glowing fill under curve
  const areaPath = useMemo(() => {
    if (!curvePath || seriesData.length < 2) return '';
    const lastX = getX(seriesData.length - 1);
    const firstX = getX(0);
    const bottomY = padTop + innerH;
    return `${curvePath} L ${lastX},${bottomY} L ${firstX},${bottomY} Z`;
  }, [curvePath, seriesData]);

  // Commercial Banks curve path
  const commCurvePath = useMemo(() => {
    if (displayMode !== 'banks' || seriesData.length < 2) return '';
    const pts = seriesData.map((pt, i) => ({ x: getX(i), y: getY(pt.commercial || pt.rate) }));
    let d = `M ${pts[0].x},${pts[0].y}`;
    for (let i = 0; i < pts.length - 1; i++) {
      const p0 = pts[Math.max(i - 1, 0)];
      const p1 = pts[i];
      const p2 = pts[i + 1];
      const p3 = pts[Math.min(i + 2, pts.length - 1)];
      const cp1x = p1.x + (p2.x - p0.x) / 6;
      const cp1y = p1.y + (p2.y - p0.y) / 6;
      const cp2x = p2.x - (p3.x - p1.x) / 6;
      const cp2y = p2.y - (p3.y - p1.y) / 6;
      d += ` C ${cp1x.toFixed(1)},${cp1y.toFixed(1)} ${cp2x.toFixed(1)},${cp2y.toFixed(1)} ${p2.x.toFixed(1)},${p2.y.toFixed(1)}`;
    }
    return d;
  }, [seriesData, displayMode, minVal, maxVal]);

  // Horizontal Y-Axis Grid Lines & Ticks (4 levels)
  const yTicks = useMemo(() => {
    return [0, 0.33, 0.66, 1].map(frac => {
      const val = minVal + rangeSpan * frac;
      return {
        val,
        y: padTop + innerH - frac * innerH,
      };
    });
  }, [minVal, rangeSpan, innerH]);

  // Active hover point
  const activePt = hoveredIndex !== null && seriesData[hoveredIndex] ? seriesData[hoveredIndex] : lastPoint;
  const activePtIndex = hoveredIndex !== null ? hoveredIndex : seriesData.length - 1;
  const activeX = getX(activePtIndex);
  const activeY = getY(activePt.rate);

  // CSV Export Handler
  const handleDownloadCsv = () => {
    let csv = "Date,Currency_Code,Official_Middle_SDG,Official_Buy_SDG,Official_Sell_SDG,Commercial_Bank_Avg_SDG\n";
    seriesData.forEach(p => {
      csv += `${p.date},${selectedCurrency},${p.rate.toFixed(2)},${(p.buy || p.rate * 0.996).toFixed(2)},${(p.sell || p.rate * 1.004).toFixed(2)},${(p.commercial || p.rate * 0.998).toFixed(2)}\n`;
    });
    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.setAttribute("href", url);
    link.setAttribute("download", `cbos_${selectedCurrency}_rates_${timeframe}_2026.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className="py-16 px-4 md:px-8 bg-sand-50/60 border-b border-cbos-stone/60">
      <div className="max-w-7xl mx-auto space-y-8">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 border-b border-cbos-stone/50 pb-6">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cbos-green-50 border border-cbos-green-200 text-xs font-mono font-bold text-cbos-green-800">
              <Activity className="w-3.5 h-3.5 text-cbos-gold" />
              <span>{isRtl ? 'بوابة البيانات والمؤشرات الاقتصادية السيادية' : 'ECONOMIC INTELLIGENCE & MONETARY TIME SERIES'}</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-cbos-ink font-display tracking-tight">
              {isRtl ? 'السلاسل الزمنية وأسعار الصرف الرسمية' : 'Financial Time Series & Sovereign Exchange Rates'}
            </h2>
            <p className="text-sm text-cbos-ink-muted max-w-2xl font-sans">
              {isRtl 
                ? 'بيانات يومية معتمدة صادرة عن الإدارة العامة للأسواق المالية وإدارة النقد الأجنبي، متوافقة مع معايير نشر البيانات e-GDDS ومقسم الدفع القومي.'
                : 'Official high-frequency time series published daily by the Financial Markets Directorate, compliant with IMF e-GDDS standards and national liquidity matching.'}
            </p>
          </div>
          
          <div className="flex flex-wrap items-center gap-3">
            <button
              onClick={handleDownloadCsv}
              className="px-4 py-2.5 rounded-xl bg-white hover:bg-sand-100 text-cbos-ink font-bold text-xs flex items-center gap-2 transition-all border border-sand-300 shadow-sm hover:border-cbos-gold"
            >
              <FileSpreadsheet className="w-4 h-4 text-cbos-green-800" />
              <span>{isRtl ? 'تصدير السلسلة (CSV)' : 'Export CSV'}</span>
            </button>
            <Link
              href="/data"
              className="px-5 py-2.5 rounded-xl bg-cbos-green-900 hover:bg-cbos-green-800 text-white font-bold text-xs flex items-center gap-2 transition-all shadow-md hover:shadow-lg border border-[#075A3A]"
            >
              <span>{isRtl ? 'كتالوج البيانات المفتوحة' : 'Open Data Portal'}</span>
              {isRtl ? <ArrowLeft className="w-4 h-4" /> : <ArrowRight className="w-4 h-4" />}
            </Link>
          </div>
        </div>

        {/* Master Sovereign Data Terminal */}
        <div 
          className="rounded-2xl border border-[#B99553]/40 shadow-2xl overflow-hidden relative"
          style={{ backgroundColor: '#021811' }}
        >
          {/* Subtle Guilloche Security Curve Watermark */}
          <div className="absolute inset-0 pointer-events-none opacity-10">
            <svg className="w-full h-full object-cover" viewBox="0 0 1000 400" fill="none">
              <path d="M-100,200 C300,50 600,350 1100,150" stroke="#B99553" strokeWidth="1.5" strokeDasharray="6 4" />
              <circle cx="850" cy="200" r="180" stroke="#B99553" strokeWidth="0.8" opacity="0.4" />
            </svg>
          </div>

          {/* 1. Terminal Status Top Bar */}
          <div className="relative z-10 px-6 py-4 bg-[#032117] border-b border-[#0A4533] flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <span className="flex h-2.5 w-2.5 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
              </span>
              <span className="text-xs font-mono font-bold text-emerald-400 uppercase tracking-wider">
                {isRtl ? 'مباشر: السعر التأشيري المعتمد' : 'LIVE OFFICIAL FIXING BENCHMARK'}
              </span>
              <span className="hidden sm:inline text-xs text-[#0A4533]">•</span>
              <span className="hidden sm:inline text-xs font-mono text-[#A89F91]">
                FIXING TIME: 12:00 CAT
              </span>
            </div>

            <div className="flex items-center gap-4 text-xs font-mono text-[#DDC99B]">
              <span className="hidden md:inline bg-[#041D15] px-2.5 py-1 rounded border border-[#0A4533] text-[11px]">
                REF: CBOS-FX-2026-W39
              </span>
              <span className="bg-[#075A3A]/60 text-white px-2.5 py-1 rounded border border-[#B99553]/40 text-[11px] font-bold">
                e-GDDS / ISO 20022
              </span>
            </div>
          </div>

          {/* 2. Key Metrics Sovereign KPI Strip (4 Pillars) */}
          <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x sm:divide-x-reverse divide-[#0A4533] border-b border-[#0A4533] bg-[#021811]/90">
            
            {/* KPI 1: Latest Middle Rate */}
            <div className="p-5 space-y-1.5">
              <span className="text-[11px] font-mono text-[#8C9B94] uppercase tracking-wider block">
                {isRtl ? 'السعر التأشيري الوسيط' : 'Official Middle Rate'}
              </span>
              <div className="flex items-baseline gap-2">
                <span dir="ltr" className="text-2xl sm:text-3xl font-extrabold font-mono text-white tabular-nums">
                  {currentRateObj.official_middle.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                </span>
                <span className="text-xs font-mono font-bold text-[#DDC99B]">SDG</span>
              </div>
              <div className="flex items-center gap-1.5 text-xs font-mono">
                <span className={`inline-flex items-center gap-0.5 px-2 py-0.5 rounded font-bold ${isPositive ? 'bg-emerald-950/80 text-emerald-400 border border-emerald-800/60' : 'bg-rose-950/80 text-rose-400 border border-rose-800/60'}`}>
                  {isPositive ? <TrendingUp className="w-3 h-3" /> : <TrendingDown className="w-3 h-3" />}
                  <span dir="ltr">{isPositive ? `+${delta.toFixed(2)}` : delta.toFixed(2)} ({isPositive ? `+${deltaPct}%` : `${deltaPct}%`})</span>
                </span>
                <span className="text-[#8C9B94] text-[11px]">{timeframe}</span>
              </div>
            </div>

            {/* KPI 2: Official Buy / Sell Spread */}
            <div className="p-5 space-y-1.5">
              <span className="text-[11px] font-mono text-[#8C9B94] uppercase tracking-wider block">
                {isRtl ? 'نطاق الشراء / البيع الرسمي' : 'Official Buy / Sell Range'}
              </span>
              <div className="flex items-center justify-between text-xs font-mono pt-1">
                <div>
                  <span className="text-[#8C9B94] block text-[10px]">{isRtl ? 'شراء' : 'BUY'}</span>
                  <span dir="ltr" className="text-sm font-bold text-[#DDC99B] tabular-nums">
                    {currentRateObj.official_buy.toFixed(2)}
                  </span>
                </div>
                <div className="h-6 w-px bg-[#0A4533]" />
                <div className="text-right">
                  <span className="text-[#8C9B94] block text-[10px]">{isRtl ? 'بيع' : 'SELL'}</span>
                  <span dir="ltr" className="text-sm font-bold text-white tabular-nums">
                    {currentRateObj.official_sell.toFixed(2)}
                  </span>
                </div>
              </div>
              <div className="text-[11px] font-mono text-[#8C9B94] pt-1">
                {isRtl ? 'الهامش الرقابي: ' : 'Spread: '}
                <span dir="ltr" className="text-white font-bold">{(currentRateObj.official_sell - currentRateObj.official_buy).toFixed(2)} SDG</span>
              </div>
            </div>

            {/* KPI 3: Commercial Bank Average */}
            <div className="p-5 space-y-1.5">
              <span className="text-[11px] font-mono text-[#8C9B94] uppercase tracking-wider block">
                {isRtl ? 'متوسط المصارف التجارية' : 'Commercial Banking Avg'}
              </span>
              <div className="flex items-baseline gap-2">
                <span dir="ltr" className="text-2xl sm:text-3xl font-extrabold font-mono text-[#DDC99B] tabular-nums">
                  {(currentRateObj.commercial_bank_avg || currentRateObj.official_middle * 0.998).toFixed(2)}
                </span>
                <span className="text-xs font-mono font-bold text-[#8C9B94]">SDG</span>
              </div>
              <p className="text-[11px] font-mono text-[#8C9B94]">
                {isRtl ? 'مؤشر سيولة السوق الموحد' : 'Interbank liquidity benchmark'}
              </p>
            </div>

            {/* KPI 4: Period High / Low Range */}
            <div className="p-5 space-y-2">
              <div className="flex items-center justify-between text-[11px] font-mono text-[#8C9B94] uppercase">
                <span>{isRtl ? 'أدنى سعر' : 'LOW'}</span>
                <span>{timeframe} RANGE</span>
                <span>{isRtl ? 'أعلى سعر' : 'HIGH'}</span>
              </div>
              <div className="flex items-center justify-between text-xs font-mono">
                <span dir="ltr" className="text-[#8C9B94] font-bold tabular-nums">{minVal.toFixed(2)}</span>
                <span dir="ltr" className="text-emerald-400 font-bold tabular-nums">{maxVal.toFixed(2)}</span>
              </div>
              {/* Mini Range Progress Bar */}
              <div className="w-full bg-[#041D15] h-2 rounded-full overflow-hidden border border-[#0A4533] p-0.5">
                <div 
                  className="bg-gradient-to-r from-emerald-500 to-[#B99553] h-full rounded-full transition-all duration-500"
                  style={{ width: `${Math.min(Math.max(((lastPoint.rate - minVal) / rangeSpan) * 100, 5), 100)}%` }}
                />
              </div>
            </div>

          </div>

          {/* 3. Interactive Controls Toolbar */}
          <div className="relative z-10 p-5 md:p-6 bg-[#032117]/80 border-b border-[#0A4533] flex flex-wrap items-center justify-between gap-4">
            
            {/* Currency Pill Switcher */}
            <div className="flex items-center gap-1.5 overflow-x-auto pb-1 sm:pb-0 max-w-full">
              {['USD', 'EUR', 'SAR', 'AED', 'GBP', 'QAR', 'KWD'].map((code) => {
                const isSelected = selectedCurrency === code;
                return (
                  <button
                    key={code}
                    onClick={() => {
                      setSelectedCurrency(code);
                      setHoveredIndex(null);
                    }}
                    className={`px-3.5 py-1.5 rounded-lg text-xs font-mono font-bold transition-all flex items-center gap-1.5 ${
                      isSelected
                        ? 'bg-[#B99553] text-[#0A1813] shadow-lg border border-[#DDC99B]'
                        : 'bg-[#041D15] text-[#A89F91] hover:text-white hover:bg-[#075A3A]/40 border border-[#0A4533]'
                    }`}
                  >
                    <span>{code}</span>
                  </button>
                );
              })}
            </div>

            {/* Right Controls: Display Mode & Timeframes */}
            <div className="flex flex-wrap items-center gap-3">
              
              {/* Display Mode Toggle */}
              <div className="hidden md:flex items-center rounded-lg bg-[#041D15] p-1 border border-[#0A4533] text-xs font-mono">
                <button
                  onClick={() => setDisplayMode('middle')}
                  className={`px-2.5 py-1 rounded transition-colors ${
                    displayMode === 'middle' ? 'bg-[#075A3A] text-white font-bold' : 'text-[#8C9B94] hover:text-white'
                  }`}
                >
                  {isRtl ? 'التأشيري' : 'Official'}
                </button>
                <button
                  onClick={() => setDisplayMode('banks')}
                  className={`px-2.5 py-1 rounded transition-colors ${
                    displayMode === 'banks' ? 'bg-[#075A3A] text-white font-bold' : 'text-[#8C9B94] hover:text-white'
                  }`}
                >
                  {isRtl ? 'المصارف' : 'Banks Avg'}
                </button>
              </div>

              {/* Timeframe Selector */}
              <div className="flex items-center rounded-lg bg-[#041D15] p-1 border border-[#0A4533] text-xs font-mono">
                {(['7D', '30D', '90D', '1Y'] as Timeframe[]).map((tf) => (
                  <button
                    key={tf}
                    onClick={() => {
                      setTimeframe(tf);
                      setHoveredIndex(null);
                    }}
                    className={`px-2.5 py-1 rounded transition-colors ${
                      timeframe === tf
                        ? 'bg-[#B99553] text-[#0A1813] font-bold shadow-sm'
                        : 'text-[#8C9B94] hover:text-white'
                    }`}
                  >
                    {tf}
                  </button>
                ))}
              </div>

            </div>

          </div>

          {/* 4. Sovereign Financial SVG Chart Surface */}
          <div className="relative z-10 p-4 sm:p-6 md:p-8">
            
            {/* Active Crosshair HUD Tooltip */}
            <div className="mb-4 flex flex-wrap items-center justify-between gap-4 p-3.5 rounded-xl bg-[#032117]/90 border border-[#0A4533] text-xs font-mono">
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <Calendar className="w-3.5 h-3.5 text-[#B99553]" />
                  <span className="text-[#8C9B94]">{isRtl ? 'التاريخ: ' : 'Date: '}</span>
                  <span className="text-white font-bold">{activePt.date}</span>
                </div>
                <div className="h-4 w-px bg-[#0A4533]" />
                <div>
                  <span className="text-[#8C9B94]">{isRtl ? 'السعر التأشيري: ' : 'Official Rate: '}</span>
                  <span dir="ltr" className="text-[#DDC99B] font-bold text-sm tabular-nums">
                    {activePt.rate.toFixed(2)} SDG
                  </span>
                </div>
              </div>

              {displayMode === 'banks' && activePt.commercial && (
                <div className="flex items-center gap-2">
                  <span className="text-[#8C9B94]">{isRtl ? 'متوسط المصارف: ' : 'Commercial Bank Avg: '}</span>
                  <span dir="ltr" className="text-emerald-400 font-bold tabular-nums">
                    {activePt.commercial.toFixed(2)} SDG
                  </span>
                </div>
              )}

              <div className="text-[11px] text-[#8C9B94] hidden sm:block">
                {isRtl ? 'حرّك المؤشر فوق الرسم البياني لفحص النقاط' : 'Hover over chart to inspect historical fixings'}
              </div>
            </div>

            {/* SVG Visual Canvas */}
            <div className="relative w-full overflow-hidden select-none">
              <svg 
                className="w-full h-72 sm:h-80 cursor-crosshair" 
                viewBox={`0 0 ${svgWidth} ${svgHeight}`}
                preserveAspectRatio="none"
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <defs>
                  {/* Glowing Sovereign Gradient Fill */}
                  <linearGradient id="sovereignAreaGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#B99553" stopOpacity="0.35" />
                    <stop offset="40%" stopColor="#075A3A" stopOpacity="0.20" />
                    <stop offset="100%" stopColor="#021811" stopOpacity="0.0" />
                  </linearGradient>

                  {/* Commercial Banks Gradient */}
                  <linearGradient id="commGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#10B981" stopOpacity="0.25" />
                    <stop offset="100%" stopColor="#021811" stopOpacity="0.0" />
                  </linearGradient>

                  {/* Line Glow Filter */}
                  <filter id="goldGlow" x="-20%" y="-20%" width="140%" height="140%">
                    <feGaussianBlur stdDeviation="3" result="blur" />
                    <feComposite in="SourceGraphic" in2="blur" operator="over" />
                  </filter>
                </defs>

                {/* Y-Axis Horizontal Grid Lines & Labels */}
                {yTicks.map((tick, i) => (
                  <g key={i}>
                    <line 
                      x1={padLeft} 
                      y1={tick.y} 
                      x2={svgWidth - padRight} 
                      y2={tick.y} 
                      stroke="#0E3D2D" 
                      strokeWidth="1"
                      strokeDasharray={i === 0 ? "none" : "4 4"} 
                    />
                    <text 
                      x={padLeft - 10} 
                      y={tick.y + 4} 
                      fill="#72847B" 
                      fontSize="10" 
                      fontFamily="JetBrains Mono, monospace" 
                      textAnchor="end"
                    >
                      {tick.val.toFixed(0)} SDG
                    </text>
                  </g>
                ))}

                {/* Area Polygon Fill */}
                <path 
                  d={areaPath} 
                  fill="url(#sovereignAreaGrad)" 
                />

                {/* Commercial Banks Line (if mode enabled) */}
                {displayMode === 'banks' && commCurvePath && (
                  <path
                    d={commCurvePath}
                    fill="none"
                    stroke="#10B981"
                    strokeWidth="2"
                    strokeDasharray="4 2"
                    strokeLinecap="round"
                  />
                )}

                {/* Main Official Rate Spline Curve */}
                <path
                  d={curvePath}
                  fill="none"
                  stroke="#DDC99B"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  filter="url(#goldGlow)"
                />

                {/* Vertical Cursor Tracking Line */}
                {hoveredIndex !== null && (
                  <g>
                    <line 
                      x1={activeX} 
                      y1={padTop} 
                      x2={activeX} 
                      y2={padTop + innerH} 
                      stroke="#B99553" 
                      strokeWidth="1.5" 
                      strokeDasharray="3 3" 
                    />
                    <circle 
                      cx={activeX} 
                      cy={activeY} 
                      r="9" 
                      fill="#B99553" 
                      fillOpacity="0.25" 
                    />
                    <circle 
                      cx={activeX} 
                      cy={activeY} 
                      r="5" 
                      fill="#DDC99B" 
                      stroke="#021811" 
                      strokeWidth="2" 
                    />
                  </g>
                )}

                {/* Static Key Data Points & X-Axis Dates */}
                {seriesData.map((pt, i) => {
                  const x = getX(i);
                  const y = getY(pt.rate);
                  const isHovered = hoveredIndex === i;
                  
                  // Label spacing condition
                  const showLabel = seriesData.length <= 10 || i === 0 || i === seriesData.length - 1 || i % Math.floor(seriesData.length / 5) === 0;

                  return (
                    <g key={i}>
                      {/* Interactive Invisible Hover Target Column */}
                      <rect 
                        x={x - (innerW / seriesData.length) / 2} 
                        y={padTop} 
                        width={innerW / seriesData.length} 
                        height={innerH} 
                        fill="transparent" 
                        onMouseEnter={() => setHoveredIndex(i)}
                      />

                      {/* Visible Point Dot */}
                      <circle 
                        cx={x} 
                        cy={y} 
                        r={isHovered ? 6 : 3.5} 
                        fill={isHovered ? "#B99553" : "#075A3A"} 
                        stroke="#DDC99B" 
                        strokeWidth={isHovered ? "2.5" : "1.5"} 
                      />

                      {/* X-Axis Date Tick */}
                      {showLabel && (
                        <text 
                          x={x} 
                          y={svgHeight - 15} 
                          fill="#8C9B94" 
                          fontSize="10" 
                          fontFamily="JetBrains Mono, monospace" 
                          textAnchor="middle"
                        >
                          {pt.date.substring(5)}
                        </text>
                      )}
                    </g>
                  );
                })}
              </svg>
            </div>

            {/* Chart Legend & Legend Indicators */}
            <div className="mt-4 pt-4 border-t border-[#0A4533] flex flex-wrap items-center justify-between gap-4 text-xs font-mono text-[#8C9B94]">
              <div className="flex items-center gap-6">
                <div className="flex items-center gap-2">
                  <span className="w-3.5 h-1 bg-[#DDC99B] rounded-full inline-block" />
                  <span className="text-white">{isRtl ? 'السعر التأشيري الرسمي (CBOS Fixing)' : 'Official Fixing Benchmark'}</span>
                </div>
                {displayMode === 'banks' && (
                  <div className="flex items-center gap-2">
                    <span className="w-3.5 h-1 bg-emerald-400 rounded-full inline-block border-dashed" />
                    <span className="text-emerald-400">{isRtl ? 'متوسط المصارف التجارية' : 'Commercial Banks Avg'}</span>
                  </div>
                )}
              </div>

              <div className="flex items-center gap-2 text-[11px] text-[#A89F91]">
                <ShieldCheck className="w-3.5 h-3.5 text-[#B99553]" />
                <span>{isRtl ? 'بيانات معتمدة لأغراض التقييم المحاسبي والجمركي' : 'Certified for Accounting & Customs Valuation'}</span>
              </div>
            </div>

          </div>

          {/* 5. Terminal Footer & Regulatory Attribution */}
          <div className="relative z-10 px-6 py-4 bg-[#032117] border-t border-[#0A4533] flex flex-col sm:flex-row items-center justify-between text-xs text-[#8C9B94] gap-3">
            <div className="flex items-center gap-2">
              <Info className="w-4 h-4 text-[#B99553] shrink-0" />
              <span>
                {isRtl
                  ? 'المصدر: الإدارة العامة للأسواق المالية وإدارة النقد الأجنبي — بنك السودان المركزي'
                  : 'Source: Financial Markets & Foreign Exchange Directorate — Central Bank of Sudan'}
              </span>
            </div>
            
            <div className="flex items-center gap-4 text-[11px] font-mono">
              <Link 
                href="/exchange-rates" 
                className="text-[#DDC99B] hover:text-white transition-colors flex items-center gap-1"
              >
                <span>{isRtl ? 'جدول كافة العملات الأجنبية' : 'All Currencies Table'}</span>
                <ExternalLink className="w-3 h-3" />
              </Link>
              <span>•</span>
              <span className="text-[#8C9B94]">e-GDDS Compliant Series</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
