'use client';

import React, { useState, useMemo, useCallback } from 'react';
import Link from 'next/link';
import { useLanguage } from '@/lib/languageContext';
import { officialRatesData } from '@/data/rates';
import { officialHistoricalRates, HistoricalRateRecord } from '@/data/historicalRates';
import { 
  FileSpreadsheet, 
  TrendingUp, 
  TrendingDown,
  ArrowRight, 
  ArrowLeft,
  Activity,
  Calendar,
  ShieldCheck,
  ExternalLink,
  Info,
  CheckCircle2
} from 'lucide-react';

type Timeframe = '7D' | '30D' | '90D' | '1Y';
type DisplayMode = 'middle' | 'banks';

type ChartPoint = HistoricalRateRecord;

export default function DataExperience() {
  const { t, isRtl } = useLanguage();
  const [selectedCurrency, setSelectedCurrency] = useState('USD');
  const [timeframe, setTimeframe] = useState<Timeframe>('7D');
  const [displayMode, setDisplayMode] = useState<DisplayMode>('middle');
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Active currency object from official rates
  const currentRateObj = useMemo(() => {
    return officialRatesData.rates.find(r => r.currency_code === selectedCurrency) || officialRatesData.rates[0];
  }, [selectedCurrency]);

  // Active historical series metadata from official CBOS records
  const currentSeriesMeta = useMemo(() => {
    return officialHistoricalRates[selectedCurrency] || officialHistoricalRates.USD;
  }, [selectedCurrency]);

  // Certified CBOS monetary historical time series (Zero synthetic math)
  const seriesData: ChartPoint[] = useMemo(() => {
    const currencySeries = officialHistoricalRates[selectedCurrency] || officialHistoricalRates.USD;
    return currencySeries[timeframe] || currencySeries['7D'];
  }, [selectedCurrency, timeframe]);

  // Derived metrics
  const firstPoint = seriesData[0] || { rate: 1, buy: 1, sell: 1, commercial: 1, date: '' };
  const lastPoint = seriesData[seriesData.length - 1] || { rate: 1, buy: 1, sell: 1, commercial: 1, date: '' };

  const minVal = Math.min(...seriesData.map(p => p.rate));
  const maxVal = Math.max(...seriesData.map(p => p.rate));
  const rangeSpan = maxVal - minVal || 1;

  // Active hover/inspection point (defaults to the latest fixing)
  const isInspecting = hoveredIndex !== null && seriesData[hoveredIndex] !== undefined;
  const activePt = isInspecting ? seriesData[hoveredIndex!] : lastPoint;
  const activePtIndex = isInspecting ? hoveredIndex! : seriesData.length - 1;

  // Real-time dynamic KPI numbers
  const displayMiddle = activePt.rate;
  const displayBuy = activePt.buy;
  const displaySell = activePt.sell;
  const displayComm = activePt.commercial;
  const displaySpread = displaySell - displayBuy;

  // Delta calculation relative to period inception
  const pointDelta = activePt.rate - firstPoint.rate;
  const pointDeltaPct = ((pointDelta / firstPoint.rate) * 100).toFixed(2);
  const isPointPositive = pointDelta >= 0;

  // Overall period delta
  const periodDelta = lastPoint.rate - firstPoint.rate;
  const periodDeltaPct = ((periodDelta / firstPoint.rate) * 100).toFixed(2);
  const isPeriodPositive = periodDelta >= 0;

  // Decimal precision formatted according to currency magnitude and spread
  const precision = rangeSpan < 5 ? 2 : 2;
  const tickDecimals = rangeSpan < 5 ? 2 : rangeSpan < 50 ? 1 : 0;

  // Chart rendering geometry
  const svgWidth = 860;
  const svgHeight = 280;
  const padLeft = 75;
  const padRight = 35;
  const padTop = 30;
  const padBottom = 45;

  const innerW = svgWidth - padLeft - padRight;
  const innerH = svgHeight - padTop - padBottom;

  // Coordinate mappers
  const getY = useCallback((val: number) => {
    return padTop + innerH - ((val - minVal) / rangeSpan) * innerH;
  }, [padTop, innerH, minVal, rangeSpan]);

  const getX = useCallback((idx: number) => {
    return padLeft + (idx / Math.max(seriesData.length - 1, 1)) * innerW;
  }, [padLeft, innerW, seriesData.length]);

  const activeX = getX(activePtIndex);
  const activeY = getY(activePt.rate);

  // Build smooth cubic Bezier spline path
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
  }, [seriesData, getX, getY]);

  // Area polygon path for glowing fill under curve
  const areaPath = useMemo(() => {
    if (!curvePath || seriesData.length < 2) return '';
    const lastX = getX(seriesData.length - 1);
    const firstX = getX(0);
    const bottomY = padTop + innerH;
    return `${curvePath} L ${lastX},${bottomY} L ${firstX},${bottomY} Z`;
  }, [curvePath, seriesData, getX, padTop, innerH]);

  // Commercial Banks curve path
  const commCurvePath = useMemo(() => {
    if (displayMode !== 'banks' || seriesData.length < 2) return '';
    const pts = seriesData.map((pt, i) => ({ x: getX(i), y: getY(pt.commercial) }));
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
  }, [seriesData, displayMode, getX, getY]);

  // Horizontal Y-Axis Grid Lines & Ticks (4 levels)
  const yTicks = useMemo(() => {
    return [0, 0.33, 0.66, 1].map(frac => {
      const val = minVal + rangeSpan * frac;
      return {
        val,
        y: padTop + innerH - frac * innerH,
      };
    });
  }, [minVal, rangeSpan, innerH, padTop]);

  // High-performance pointer movement handler across entire canvas width
  const handlePointerMove = (e: React.MouseEvent<SVGSVGElement> | React.TouchEvent<SVGSVGElement>) => {
    const svg = e.currentTarget;
    const rect = svg.getBoundingClientRect();
    const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
    const offsetX = clientX - rect.left;
    const pct = Math.max(0, Math.min(1, offsetX / rect.width));
    const svgX = pct * svgWidth;

    let closestIdx = 0;
    let minDiff = Infinity;
    seriesData.forEach((_, i) => {
      const px = getX(i);
      const diff = Math.abs(px - svgX);
      if (diff < minDiff) {
        minDiff = diff;
        closestIdx = i;
      }
    });

    setHoveredIndex(closestIdx);
  };

  // Currency selection handler with visual feedback
  const handleCurrencySelect = (code: string) => {
    if (selectedCurrency === code) return;
    setIsTransitioning(true);
    setSelectedCurrency(code);
    setHoveredIndex(null);
    setTimeout(() => setIsTransitioning(false), 280);
  };

  // Timeframe selection handler with visual feedback
  const handleTimeframeSelect = (tf: Timeframe) => {
    if (timeframe === tf) return;
    setIsTransitioning(true);
    setTimeframe(tf);
    setHoveredIndex(null);
    setTimeout(() => setIsTransitioning(false), 280);
  };

  // CSV Export Handler
  const handleDownloadCsv = () => {
    let csv = "Date,Currency_Code,Official_Middle_SDG,Official_Buy_SDG,Official_Sell_SDG,Commercial_Bank_Avg_SDG\n";
    seriesData.forEach(p => {
      csv += `${p.date},${selectedCurrency},${p.rate.toFixed(2)},${p.buy.toFixed(2)},${p.sell.toFixed(2)},${p.commercial.toFixed(2)}\n`;
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
          className="rounded-xl border border-[#0F382A] border-t-2 border-t-[#B99553]/70 shadow-xl overflow-hidden relative"
          style={{ backgroundColor: '#051E17' }}
        >
          {/* Subtle Guilloche Security Curve Watermark */}
          <div className="absolute inset-0 pointer-events-none opacity-10">
            <svg className="w-full h-full object-cover" viewBox="0 0 1000 400" fill="none">
              <path d="M-100,200 C300,50 600,350 1100,150" stroke="#B99553" strokeWidth="1.5" strokeDasharray="6 4" />
              <circle cx="850" cy="200" r="180" stroke="#B99553" strokeWidth="0.8" opacity="0.4" />
            </svg>
          </div>

          {/* 1. Terminal Status Top Bar */}
          <div className="relative z-10 px-6 py-3.5 bg-[#031912] border-b border-[#0F382A] flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 ring-2 ring-emerald-500/20" />
              <span className="text-xs font-mono font-bold text-sand-100 uppercase tracking-wider">
                {isRtl ? 'النشرة الرسمية: السعر التأشيري المعتمد' : 'OFFICIAL FIXING BULLETIN • DAILY BENCHMARK'}
              </span>
              <span className="hidden sm:inline text-xs text-[#0F382A]">•</span>
              <span className="hidden sm:inline text-xs font-mono text-[#A89F91]">
                FIXING TIME: 12:00 CAT
              </span>
            </div>

            <div className="flex items-center gap-3 text-xs font-mono text-[#DDC99B]">
              <span className="hidden md:inline bg-[#041912] px-2.5 py-1 rounded border border-[#0F382A] text-[11px] text-[#A89F91]">
                SERIES: {currentSeriesMeta.series_id}
              </span>
              <span className="bg-[#075A3A]/40 text-emerald-200 px-2.5 py-1 rounded border border-[#0F5A3F]/50 text-[11px] font-bold">
                e-GDDS • ART 26 ACT 2002
              </span>
            </div>
          </div>

          {/* 2. Key Metrics Sovereign KPI Strip (4 Pillars) — FULLY DYNAMIC WITH INSTANT SCRUBBING */}
          <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x sm:divide-x-reverse divide-[#0F382A] border-b border-[#0F382A] bg-[#051E17] transition-all duration-200">
            
            {/* KPI 1: Inspected / Latest Middle Rate */}
            <div className={`p-5 space-y-1.5 transition-colors duration-200 ${isInspecting ? 'bg-[#08291E]' : ''}`}>
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-mono text-[#8C9B94] uppercase tracking-wider block">
                  {isInspecting 
                    ? (isRtl ? 'السعر التأشيري المحدد' : 'Inspected Rate')
                    : (isRtl ? 'السعر التأشيري الوسيط' : 'Official Middle Rate')}
                </span>
                <span className={`text-[10px] font-mono px-2 py-0.5 rounded font-bold ${isInspecting ? 'bg-[#B99553]/25 text-[#DDC99B] border border-[#B99553]/50' : 'bg-[#075A3A]/40 text-emerald-300'}`}>
                  {isInspecting ? activePt.date : (isRtl ? 'أحدث إقفال' : 'Latest')}
                </span>
              </div>
              
              <div className="flex items-baseline gap-2">
                <span dir="ltr" className="text-2xl sm:text-3xl font-extrabold font-mono text-white tabular-nums transition-all">
                  {displayMiddle.toLocaleString('en-US', { minimumFractionDigits: precision, maximumFractionDigits: precision })}
                </span>
                <span className="text-xs font-mono font-bold text-[#DDC99B]">SDG</span>
              </div>

              <div className="flex items-center gap-1.5 text-xs font-mono">
                <span className={`inline-flex items-center gap-0.5 px-2 py-0.5 rounded font-bold transition-colors ${
                  isPointPositive 
                    ? 'bg-[#042A1D] text-emerald-300 border border-[#0F5A3F]' 
                    : 'bg-[#2E0F16] text-rose-300 border border-[#5E1E2C]'
                }`}>
                  {isPointPositive ? <TrendingUp className="w-3 h-3" /> : <TrendingDown className="w-3 h-3" />}
                  <span dir="ltr">
                    {isPointPositive ? `+${pointDelta.toFixed(2)}` : pointDelta.toFixed(2)} ({isPointPositive ? `+${pointDeltaPct}%` : `${pointDeltaPct}%`})
                  </span>
                </span>
                <span className="text-[#8C9B94] text-[11px]">
                  {isInspecting ? (isRtl ? 'من بداية السلسلة' : 'From start') : timeframe}
                </span>
              </div>
            </div>

            {/* KPI 2: Inspected Official Buy / Sell Spread */}
            <div className={`p-5 space-y-1.5 transition-colors duration-200 ${isInspecting ? 'bg-[#08291E]' : ''}`}>
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-mono text-[#8C9B94] uppercase tracking-wider block">
                  {isRtl ? 'نطاق الشراء / البيع' : 'Buy / Sell Range'}
                </span>
                <span className="text-[10px] font-mono text-[#8C9B94]">
                  {selectedCurrency} / SDG
                </span>
              </div>

              <div className="flex items-center justify-between text-xs font-mono pt-1">
                <div>
                  <span className="text-[#8C9B94] block text-[10px]">{isRtl ? 'شراء رسمي' : 'OFFICIAL BUY'}</span>
                  <span dir="ltr" className="text-sm font-bold text-[#DDC99B] tabular-nums">
                    {displayBuy.toFixed(2)}
                  </span>
                </div>
                <div className="h-6 w-px bg-[#0F382A]" />
                <div className="text-right">
                  <span className="text-[#8C9B94] block text-[10px]">{isRtl ? 'بيع رسمي' : 'OFFICIAL SELL'}</span>
                  <span dir="ltr" className="text-sm font-bold text-white tabular-nums">
                    {displaySell.toFixed(2)}
                  </span>
                </div>
              </div>

              <div className="text-[11px] font-mono text-[#8C9B94] pt-1 flex items-center justify-between">
                <span>{isRtl ? 'الهامش الرقابي:' : 'Regulatory Spread:'}</span>
                <span dir="ltr" className="text-white font-bold">{displaySpread.toFixed(2)} SDG</span>
              </div>
            </div>

            {/* KPI 3: Commercial Bank Average */}
            <div className={`p-5 space-y-1.5 transition-colors duration-200 ${isInspecting ? 'bg-[#08291E]' : ''}`}>
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-mono text-[#8C9B94] uppercase tracking-wider block">
                  {isRtl ? 'متوسط المصارف التجارية' : 'Commercial Banking Avg'}
                </span>
                <span className="w-2 h-2 rounded-full bg-emerald-400" />
              </div>

              <div className="flex items-baseline gap-2">
                <span dir="ltr" className="text-2xl sm:text-3xl font-extrabold font-mono text-[#DDC99B] tabular-nums">
                  {displayComm.toFixed(2)}
                </span>
                <span className="text-xs font-mono font-bold text-[#8C9B94]">SDG</span>
              </div>

              <p className="text-[11px] font-mono text-[#8C9B94] truncate">
                {isInspecting 
                  ? (isRtl ? `تداول يوم ${activePt.date}` : `Interbank on ${activePt.date}`)
                  : (isRtl ? 'مؤشر سيولة السوق الموحد' : 'Interbank liquidity benchmark')}
              </p>
            </div>

            {/* KPI 4: Period High / Low Range with Dynamic Pointer */}
            <div className="p-5 space-y-2">
              <div className="flex items-center justify-between text-[11px] font-mono text-[#8C9B94] uppercase">
                <span>{isRtl ? 'أدنى' : 'LOW'}</span>
                <span className="text-white font-bold">{timeframe} RANGE</span>
                <span>{isRtl ? 'أعلى' : 'HIGH'}</span>
              </div>
              <div className="flex items-center justify-between text-xs font-mono">
                <span dir="ltr" className="text-[#8C9B94] font-bold tabular-nums">{minVal.toFixed(tickDecimals)}</span>
                <span dir="ltr" className="text-emerald-400 font-bold tabular-nums">{maxVal.toFixed(tickDecimals)}</span>
              </div>
              {/* Dynamic Interactive Range Bar */}
              <div className="relative w-full bg-[#031912] h-2 rounded-full overflow-hidden border border-[#0F382A] p-0.5">
                <div 
                  className="bg-gradient-to-r from-[#075A3A] to-[#B99553] h-full rounded-full transition-all duration-150"
                  style={{ width: `${Math.min(Math.max(((displayMiddle - minVal) / rangeSpan) * 100, 4), 100)}%` }}
                />
              </div>
              <div className="flex items-center justify-between text-[10px] font-mono text-[#8C9B94]">
                <span>{selectedCurrency} SPREAD</span>
                <span dir="ltr" className="text-white font-bold">{rangeSpan.toFixed(tickDecimals)} SDG</span>
              </div>
            </div>

          </div>

          {/* 3. Interactive Controls Toolbar */}
          <div className="relative z-10 p-4 sm:p-5 md:p-6 bg-[#031912] border-b border-[#0F382A] flex flex-wrap items-center justify-between gap-4">
            
            {/* Currency Pill Switcher */}
            <div className="flex items-center gap-1.5 overflow-x-auto pb-1 sm:pb-0 max-w-full">
              {['USD', 'EUR', 'SAR', 'AED', 'GBP', 'QAR', 'KWD', 'EGP'].map((code) => {
                const isSelected = selectedCurrency === code;
                return (
                  <button
                    key={code}
                    onClick={() => handleCurrencySelect(code)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-mono font-bold transition-all flex items-center gap-1 shrink-0 ${
                      isSelected
                        ? 'bg-[#B99553] text-[#031912] border border-[#DDC99B]'
                        : 'bg-[#051E17] text-[#A89F91] hover:text-white hover:bg-[#075A3A]/40 border border-[#0F382A]'
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
              <div className="flex items-center rounded-lg bg-[#051E17] p-1 border border-[#0F382A] text-xs font-mono">
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
              <div className="flex items-center rounded-lg bg-[#051E17] p-1 border border-[#0F382A] text-xs font-mono">
                {(['7D', '30D', '90D', '1Y'] as Timeframe[]).map((tf) => (
                  <button
                    key={tf}
                    onClick={() => handleTimeframeSelect(tf)}
                    className={`px-2.5 py-1 rounded transition-colors ${
                      timeframe === tf
                        ? 'bg-[#B99553] text-[#031912] font-bold'
                        : 'text-[#8C9B94] hover:text-white'
                    }`}
                  >
                    {tf}
                  </button>
                ))}
              </div>

              {/* Reset to Latest Button (visible when inspecting) */}
              {isInspecting && (
                <button
                  onClick={() => setHoveredIndex(null)}
                  className="px-2.5 py-1 rounded-lg bg-[#051E17] border border-[#B99553]/60 text-[#DDC99B] text-xs font-mono hover:bg-[#075A3A]/40 transition-colors"
                >
                  {isRtl ? 'العودة للمباشر ↺' : 'Reset to Latest ↺'}
                </button>
              )}

            </div>

          </div>

          {/* 4. Sovereign Financial SVG Chart Surface */}
          <div className="relative z-10 p-4 sm:p-6 md:p-8">
            
            {/* Active Crosshair HUD Tooltip */}
            <div className={`mb-4 flex flex-wrap items-center justify-between gap-4 p-3.5 rounded-xl border text-xs font-mono transition-all duration-150 ${
              isInspecting 
                ? 'bg-[#08291E] border-[#B99553]/60 shadow-md' 
                : 'bg-[#031912] border-[#0F382A]'
            }`}>
              <div className="flex flex-wrap items-center gap-4">
                <div className="flex items-center gap-2">
                  <Calendar className="w-3.5 h-3.5 text-[#B99553]" />
                  <span className="text-[#8C9B94]">{isRtl ? 'التاريخ:' : 'Date:'}</span>
                  <span className="text-white font-bold">{activePt.date}</span>
                </div>
                <div className="h-4 w-px bg-[#0F382A]" />
                <div className="flex items-center gap-2">
                  <span className="text-[#8C9B94]">{isRtl ? 'السعر التأشيري:' : 'Official Rate:'}</span>
                  <span dir="ltr" className="text-[#DDC99B] font-bold text-sm tabular-nums">
                    {activePt.rate.toFixed(2)} SDG
                  </span>
                </div>
                <div className="h-4 w-px bg-[#0F382A]" />
                <div className="flex items-center gap-2">
                  <span className="text-[#8C9B94]">{isRtl ? 'التغير:' : 'Change:'}</span>
                  <span dir="ltr" className={`font-bold ${isPointPositive ? 'text-emerald-400' : 'text-rose-400'}`}>
                    {isPointPositive ? `+${pointDelta.toFixed(2)}` : pointDelta.toFixed(2)} ({isPointPositive ? `+${pointDeltaPct}%` : `${pointDeltaPct}%`})
                  </span>
                </div>
              </div>

              {displayMode === 'banks' && (
                <div className="flex items-center gap-2">
                  <span className="text-[#8C9B94]">{isRtl ? 'متوسط المصارف:' : 'Commercial Bank Avg:'}</span>
                  <span dir="ltr" className="text-[#4ECCA3] font-bold tabular-nums">
                    {activePt.commercial.toFixed(2)} SDG
                  </span>
                </div>
              )}

              <div className="text-[11px] text-[#8C9B94] hidden sm:flex items-center gap-1.5">
                <Info className="w-3.5 h-3.5 text-[#B99553]" />
                <span>{isRtl ? 'حرك المؤشر عبر الرسم البياني لفحص أسعار التثبيت اليومية' : 'Hover or scrub across chart to inspect daily official fixings'}</span>
              </div>
            </div>

            {/* SVG Visual Canvas with Full-Width Pointer Tracking */}
            <div className="relative w-full overflow-hidden select-none">
              <svg 
                className={`w-full h-72 sm:h-80 cursor-crosshair transition-opacity duration-200 ${isTransitioning ? 'opacity-40' : 'opacity-100'}`} 
                viewBox={`0 0 ${svgWidth} ${svgHeight}`}
                preserveAspectRatio="none"
                onMouseMove={handlePointerMove}
                onTouchMove={handlePointerMove}
                onTouchStart={handlePointerMove}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <defs>
                  {/* Subtle Sovereign Tonal Gradient Fill */}
                  <linearGradient id="sovereignAreaGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#B99553" stopOpacity="0.12" />
                    <stop offset="60%" stopColor="#075A3A" stopOpacity="0.04" />
                    <stop offset="100%" stopColor="#051E17" stopOpacity="0.0" />
                  </linearGradient>

                  {/* Commercial Banks Gradient */}
                  <linearGradient id="commGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#4ECCA3" stopOpacity="0.08" />
                    <stop offset="100%" stopColor="#051E17" stopOpacity="0.0" />
                  </linearGradient>
                </defs>

                {/* Y-Axis Horizontal Grid Lines & Ticks */}
                {yTicks.map((tick, i) => (
                  <g key={i}>
                    <line 
                      x1={padLeft} 
                      y1={tick.y} 
                      x2={svgWidth - padRight} 
                      y2={tick.y} 
                      stroke="#0D3528" 
                      strokeWidth="1" 
                      strokeDasharray={i === 0 ? "none" : "4 4"} 
                    />
                    <text 
                      x={padLeft - 10} 
                      y={tick.y + 4} 
                      fill="#8C9B94" 
                      fontSize="10" 
                      fontFamily="JetBrains Mono, monospace" 
                      textAnchor="end"
                    >
                      {tick.val.toFixed(tickDecimals)} SDG
                    </text>
                  </g>
                ))}

                {/* Area Polygon Fill */}
                <path 
                  d={areaPath} 
                  fill="url(#sovereignAreaGrad)" 
                  className="transition-all duration-300"
                />

                {/* Commercial Banks Line (if mode enabled) */}
                {displayMode === 'banks' && commCurvePath && (
                  <path
                    d={commCurvePath}
                    fill="none"
                    stroke="#4ECCA3"
                    strokeWidth="1.5"
                    strokeDasharray="4 3"
                    strokeLinecap="round"
                    className="transition-all duration-300"
                  />
                )}

                {/* Main Official Rate Spline Curve */}
                <path
                  d={curvePath}
                  fill="none"
                  stroke="#DDC99B"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="transition-all duration-200"
                />

                {/* Vertical Cursor Tracking Line & Highlight Marker */}
                {isInspecting && (
                  <g className="transition-all duration-75">
                    <line 
                      x1={activeX} 
                      y1={padTop} 
                      x2={activeX} 
                      y2={padTop + innerH} 
                      stroke="#B99553" 
                      strokeWidth="1" 
                      strokeDasharray="3 3" 
                    />
                    <circle 
                      cx={activeX} 
                      cy={activeY} 
                      r="8" 
                      fill="none" 
                      stroke="#B99553" 
                      strokeWidth="1" 
                      strokeOpacity="0.5" 
                    />
                    <circle 
                      cx={activeX} 
                      cy={activeY} 
                      r="4" 
                      fill="#DDC99B" 
                      stroke="#051E17" 
                      strokeWidth="2" 
                    />
                  </g>
                )}

                {/* Static Key Data Points & X-Axis Dates */}
                {seriesData.map((pt, i) => {
                  const x = getX(i);
                  const y = getY(pt.rate);
                  const isHovered = activePtIndex === i;
                  
                  // Label spacing condition
                  const showLabel = 
                    seriesData.length <= 10 || 
                    i === 0 || 
                    i === seriesData.length - 1 || 
                    i % Math.floor(seriesData.length / 5) === 0;

                  return (
                    <g key={i}>
                      {/* Visible Point Dot */}
                      <circle 
                        cx={x} 
                        cy={y} 
                        r={isHovered ? 4.5 : 2.5} 
                        fill={isHovered ? "#B99553" : "#051E17"} 
                        stroke={isHovered ? "#051E17" : "#B99553"} 
                        strokeWidth={isHovered ? "2" : "1.5"} 
                      />

                      {/* X-Axis Date Tick */}
                      {showLabel && (
                        <text 
                          x={x} 
                          y={svgHeight - 15} 
                          fill={isHovered ? "#DDC99B" : "#8C9B94"} 
                          fontSize="10" 
                          fontFamily="JetBrains Mono, monospace" 
                          fontWeight={isHovered ? "bold" : "normal"}
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
            <div className="mt-4 pt-4 border-t border-[#0F382A] flex flex-wrap items-center justify-between gap-4 text-xs font-mono text-[#8C9B94]">
              <div className="flex items-center gap-6">
                <div className="flex items-center gap-2">
                  <span className="w-3.5 h-1 bg-[#DDC99B] rounded-full inline-block" />
                  <span className="text-white">{isRtl ? 'السعر التأشيري الرسمي (CBOS Fixing)' : 'Official Fixing Benchmark'}</span>
                </div>
                {displayMode === 'banks' && (
                  <div className="flex items-center gap-2">
                    <span className="w-3.5 h-1 bg-[#4ECCA3] rounded-full inline-block border-dashed" />
                    <span className="text-[#4ECCA3]">{isRtl ? 'متوسط المصارف التجارية' : 'Commercial Banks Avg'}</span>
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
          <div className="relative z-10 px-6 py-4 bg-[#031912] border-t border-[#0F382A] flex flex-col sm:flex-row items-center justify-between text-xs text-[#8C9B94] gap-3">
            <div className="flex flex-col gap-1 max-w-xl">
              <div className="flex items-center gap-2">
                <Info className="w-4 h-4 text-[#B99553] shrink-0" />
                <span className="font-bold text-white">
                  {isRtl
                    ? 'المصدر: الإدارة العامة للأسواق المالية وإدارة النقد الأجنبي — بنك السودان المركزي'
                    : 'Source: Financial Markets & Foreign Exchange Directorate — Central Bank of Sudan'}
                </span>
              </div>
              <p className="text-[11px] text-[#A89F91] leading-relaxed ps-6">
                {t(currentSeriesMeta.methodology)}
              </p>
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
