'use client';

import React, { useState, useMemo, useCallback } from 'react';
import Link from 'next/link';
import { useLanguage } from '@/lib/languageContext';
import { officialRatesData } from '@/data/rates';
import { 
  officialHistoricalRates, 
  officialMacroSeries, 
  HistoricalRateRecord,
  MacroDataPoint 
} from '@/data/historicalRates';
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
  CheckCircle2,
  BarChart3,
  Coins,
  Percent,
  Layers
} from 'lucide-react';

type TerminalMode = 'fx' | 'macro';
type Timeframe = '7D' | '30D' | '90D' | '1Y' | 'ALL';
type DisplayMode = 'middle' | 'banks';
type MacroIndicatorKey = 'inflation' | 'm2' | 'gold';

type ChartPoint = HistoricalRateRecord;

export default function DataExperience() {
  const { t, isRtl } = useLanguage();
  
  // Terminal Mode State: Foreign Exchange vs Macro Indicators
  const [terminalMode, setTerminalMode] = useState<TerminalMode>('fx');

  // FX Mode States
  const [selectedCurrency, setSelectedCurrency] = useState('USD');
  const [timeframe, setTimeframe] = useState<Timeframe>('7D');
  const [displayMode, setDisplayMode] = useState<DisplayMode>('middle');
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  // Macro Mode States
  const [selectedMacroKey, setSelectedMacroKey] = useState<MacroIndicatorKey>('inflation');
  const [hoveredMacroIndex, setHoveredMacroIndex] = useState<number | null>(null);

  const [isTransitioning, setIsTransitioning] = useState(false);

  // -------------------------------------------------------------
  // FX DATA CALCULATIONS
  // -------------------------------------------------------------
  const currentRateObj = useMemo(() => {
    return officialRatesData.rates.find(r => r.currency_code === selectedCurrency) || officialRatesData.rates[0];
  }, [selectedCurrency]);

  const currentSeriesMeta = useMemo(() => {
    return officialHistoricalRates[selectedCurrency] || officialHistoricalRates.USD;
  }, [selectedCurrency]);

  const seriesData: ChartPoint[] = useMemo(() => {
    const currencySeries = officialHistoricalRates[selectedCurrency] || officialHistoricalRates.USD;
    return currencySeries[timeframe] || currencySeries['7D'];
  }, [selectedCurrency, timeframe]);

  const firstPoint = seriesData[0] || { rate: 1, buy: 1, sell: 1, commercial: 1, date: '' };
  const lastPoint = seriesData[seriesData.length - 1] || { rate: 1, buy: 1, sell: 1, commercial: 1, date: '' };

  const minVal = Math.min(...seriesData.map(p => p.rate));
  const maxVal = Math.max(...seriesData.map(p => p.rate));
  const rangeSpan = maxVal - minVal || 1;

  // Dynamically calculated Period Average
  const periodAvg = useMemo(() => {
    if (!seriesData.length) return 0;
    const sum = seriesData.reduce((acc, p) => acc + p.rate, 0);
    return sum / seriesData.length;
  }, [seriesData]);

  const periodCommAvg = useMemo(() => {
    if (!seriesData.length) return 0;
    const sum = seriesData.reduce((acc, p) => acc + p.commercial, 0);
    return sum / seriesData.length;
  }, [seriesData]);

  // Active FX inspection point
  const isInspecting = hoveredIndex !== null && seriesData[hoveredIndex] !== undefined;
  const activePt = isInspecting ? seriesData[hoveredIndex!] : lastPoint;
  const activePtIndex = isInspecting ? hoveredIndex! : seriesData.length - 1;

  // Dynamic KPI numbers
  const displayMiddle = activePt.rate;
  const displayBuy = activePt.buy;
  const displaySell = activePt.sell;
  const displayComm = activePt.commercial;
  const displaySpread = displaySell - displayBuy;

  // Period delta (start of period to latest closing)
  const periodDelta = lastPoint.rate - firstPoint.rate;
  const periodDeltaPct = ((periodDelta / firstPoint.rate) * 100).toFixed(2);
  const isPeriodPositive = periodDelta >= 0;

  // Inspected point delta (relative to period inception)
  const pointDelta = activePt.rate - firstPoint.rate;
  const pointDeltaPct = ((pointDelta / firstPoint.rate) * 100).toFixed(2);
  const isPointPositive = pointDelta >= 0;

  const precision = rangeSpan < 5 ? 2 : 2;
  const tickDecimals = rangeSpan < 5 ? 2 : rangeSpan < 50 ? 1 : 0;

  // -------------------------------------------------------------
  // MACRO DATA CALCULATIONS
  // -------------------------------------------------------------
  const activeMacroSeries = useMemo(() => {
    return officialMacroSeries[selectedMacroKey] || officialMacroSeries.inflation;
  }, [selectedMacroKey]);

  const macroPoints = activeMacroSeries.data;
  const macroFirst = macroPoints[0] || { date: '', value: 0, changePct: 0, note: { ar: '', en: '' } };
  const macroLast = macroPoints[macroPoints.length - 1] || { date: '', value: 0, changePct: 0, note: { ar: '', en: '' } };

  const isInspectingMacro = hoveredMacroIndex !== null && macroPoints[hoveredMacroIndex] !== undefined;
  const activeMacroPt = isInspectingMacro ? macroPoints[hoveredMacroIndex!] : macroLast;
  const activeMacroPtIndex = isInspectingMacro ? hoveredMacroIndex! : macroPoints.length - 1;

  const macroMin = Math.min(...macroPoints.map(p => p.value));
  const macroMax = Math.max(...macroPoints.map(p => p.value));
  const macroRange = macroMax - macroMin || 1;

  const macroAvg = useMemo(() => {
    if (!macroPoints.length) return 0;
    return macroPoints.reduce((acc, p) => acc + p.value, 0) / macroPoints.length;
  }, [macroPoints]);

  const macroPeriodDelta = macroLast.value - macroFirst.value;
  const macroPeriodDeltaPct = ((macroPeriodDelta / (macroFirst.value || 1)) * 100).toFixed(1);

  // -------------------------------------------------------------
  // SVG GEOMETRY
  // -------------------------------------------------------------
  const svgWidth = 860;
  const svgHeight = 280;
  const padLeft = 75;
  const padRight = 35;
  const padTop = 30;
  const padBottom = 45;

  const innerW = svgWidth - padLeft - padRight;
  const innerH = svgHeight - padTop - padBottom;

  // FX Coordinate mappers
  const getY = useCallback((val: number) => {
    return padTop + innerH - ((val - minVal) / rangeSpan) * innerH;
  }, [padTop, innerH, minVal, rangeSpan]);

  const getX = useCallback((idx: number) => {
    return padLeft + (idx / Math.max(seriesData.length - 1, 1)) * innerW;
  }, [padLeft, innerW, seriesData.length]);

  const activeX = getX(activePtIndex);
  const activeY = getY(activePt.rate);

  // Macro Coordinate mappers
  const getMacroY = useCallback((val: number) => {
    return padTop + innerH - ((val - macroMin) / macroRange) * innerH;
  }, [padTop, innerH, macroMin, macroRange]);

  const getMacroX = useCallback((idx: number) => {
    return padLeft + (idx / Math.max(macroPoints.length - 1, 1)) * innerW;
  }, [padLeft, innerW, macroPoints.length]);

  const activeMacroX = getMacroX(activeMacroPtIndex);
  const activeMacroY = getMacroY(activeMacroPt.value);

  // FX Bezier spline path
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

  // Macro Bezier curve path
  const macroCurvePath = useMemo(() => {
    if (macroPoints.length < 2) return '';
    const pts = macroPoints.map((pt, i) => ({ x: getMacroX(i), y: getMacroY(pt.value) }));
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
  }, [macroPoints, getMacroX, getMacroY]);

  const macroAreaPath = useMemo(() => {
    if (!macroCurvePath || macroPoints.length < 2) return '';
    const lastX = getMacroX(macroPoints.length - 1);
    const firstX = getMacroX(0);
    const bottomY = padTop + innerH;
    return `${macroCurvePath} L ${lastX},${bottomY} L ${firstX},${bottomY} Z`;
  }, [macroCurvePath, macroPoints, getMacroX, padTop, innerH]);

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

  const macroYTicks = useMemo(() => {
    return [0, 0.33, 0.66, 1].map(frac => {
      const val = macroMin + macroRange * frac;
      return {
        val,
        y: padTop + innerH - frac * innerH,
      };
    });
  }, [macroMin, macroRange, innerH, padTop]);

  // Pointer movement handlers with full touch scrubbing support
  const handlePointerMove = (e: React.MouseEvent<SVGSVGElement> | React.TouchEvent<SVGSVGElement>) => {
    const svg = e.currentTarget;
    const rect = svg.getBoundingClientRect();
    const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
    const offsetX = clientX - rect.left;
    const pct = Math.max(0, Math.min(1, offsetX / rect.width));
    const svgX = pct * svgWidth;

    if (terminalMode === 'fx') {
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
    } else {
      let closestIdx = 0;
      let minDiff = Infinity;
      macroPoints.forEach((_, i) => {
        const px = getMacroX(i);
        const diff = Math.abs(px - svgX);
        if (diff < minDiff) {
          minDiff = diff;
          closestIdx = i;
        }
      });
      setHoveredMacroIndex(closestIdx);
    }
  };

  const handleCurrencySelect = (code: string) => {
    if (selectedCurrency === code) return;
    setIsTransitioning(true);
    setSelectedCurrency(code);
    setHoveredIndex(null);
    setTimeout(() => setIsTransitioning(false), 240);
  };

  const handleTimeframeSelect = (tf: Timeframe) => {
    if (timeframe === tf) return;
    setIsTransitioning(true);
    setTimeframe(tf);
    setHoveredIndex(null);
    setTimeout(() => setIsTransitioning(false), 240);
  };

  const handleMacroSelect = (key: MacroIndicatorKey) => {
    if (selectedMacroKey === key) return;
    setIsTransitioning(true);
    setSelectedMacroKey(key);
    setHoveredMacroIndex(null);
    setTimeout(() => setIsTransitioning(false), 240);
  };

  // CSV Export Handler
  const handleDownloadCsv = () => {
    if (terminalMode === 'fx') {
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
    } else {
      let csv = "Period,Indicator_Code,Value,Unit,Note_AR,Note_EN\n";
      macroPoints.forEach(p => {
        csv += `${p.date},${activeMacroSeries.code},${p.value},${t(activeMacroSeries.unit)},"${p.note.ar}","${p.note.en}"\n`;
      });
      const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
      const url = URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.setAttribute("href", url);
      link.setAttribute("download", `cbos_${selectedMacroKey}_timeseries_2026.csv`);
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
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
              className="min-h-[42px] px-4 py-2.5 rounded-xl bg-white hover:bg-sand-100 text-cbos-ink font-bold text-xs flex items-center gap-2 transition-all border border-sand-300 shadow-sm hover:border-cbos-gold"
            >
              <FileSpreadsheet className="w-4 h-4 text-cbos-green-800" />
              <span>{isRtl ? 'تصدير السلسلة (CSV)' : 'Export CSV'}</span>
            </button>
            <Link
              href="/data"
              className="min-h-[42px] px-5 py-2.5 rounded-xl bg-cbos-blue hover:bg-cbos-blue-hover text-white font-bold text-xs flex items-center gap-2 transition-all shadow-md hover:shadow-lg border border-[#22446D]"
            >
              <span>{isRtl ? 'كتالوج البيانات المفتوحة' : 'Open Data Portal'}</span>
              {isRtl ? <ArrowLeft className="w-4 h-4" /> : <ArrowRight className="w-4 h-4" />}
            </Link>
          </div>
        </div>

        {/* Master Sovereign Data Terminal */}
        <div 
          className="rounded-xl border border-[#22446D] border-t-2 border-t-[#2F88C2] shadow-xl overflow-hidden relative"
          style={{ backgroundColor: '#0B1A2D' }}
        >
          {/* Subtle Guilloche Security Curve Watermark */}
          <div className="absolute inset-0 pointer-events-none opacity-10">
            <svg className="w-full h-full object-cover" viewBox="0 0 1000 400" fill="none">
              <path d="M-100,200 C300,50 600,350 1100,150" stroke="#2F88C2" strokeWidth="1.5" strokeDasharray="6 4" />
              <circle cx="850" cy="200" r="180" stroke="#C58F2B" strokeWidth="0.8" opacity="0.4" />
            </svg>
          </div>

          {/* 1. Terminal Top Mode Switcher Bar */}
          <div className="relative z-10 px-4 sm:px-6 py-3 bg-[#11253E] border-b border-[#22446D] flex flex-wrap items-center justify-between gap-4">
            
            {/* Mode Switcher Tabs */}
            <div className="flex items-center gap-2 bg-[#0B1A2D] p-1 rounded-lg border border-[#22446D]">
              <button
                onClick={() => {
                  setTerminalMode('fx');
                  setHoveredIndex(null);
                }}
                className={`min-h-[36px] px-3.5 py-1.5 rounded-md text-xs font-mono font-bold transition-all flex items-center gap-2 ${
                  terminalMode === 'fx'
                    ? 'bg-[#2F88C2] text-white shadow-sm'
                    : 'text-[#8F9CAE] hover:text-white hover:bg-[#162D4C]'
                }`}
              >
                <Coins className="w-3.5 h-3.5" />
                <span>{isRtl ? 'أسعار الصرف التأشيرية' : 'FX Fixing Benchmark'}</span>
              </button>

              <button
                onClick={() => {
                  setTerminalMode('macro');
                  setHoveredMacroIndex(null);
                }}
                className={`min-h-[36px] px-3.5 py-1.5 rounded-md text-xs font-mono font-bold transition-all flex items-center gap-2 ${
                  terminalMode === 'macro'
                    ? 'bg-[#C58F2B] text-white shadow-sm'
                    : 'text-[#8F9CAE] hover:text-white hover:bg-[#162D4C]'
                }`}
              >
                <BarChart3 className="w-3.5 h-3.5" />
                <span>{isRtl ? 'المؤشرات الكلية والتضخم' : 'Macro & Inflation Trends'}</span>
              </button>
            </div>

            {/* Live Indicator Status */}
            <div className="flex items-center gap-3 text-xs font-mono">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#3DA66E] ring-2 ring-[#3DA66E]/20 animate-pulse" />
                <span className="text-white font-bold hidden sm:inline uppercase tracking-wider text-[11px]">
                  {terminalMode === 'fx' 
                    ? (isRtl ? 'النشرة الرسمية اليومية' : 'OFFICIAL FIXING BULLETIN') 
                    : (isRtl ? 'مؤشرات الاستقرار النقدي' : 'MONETARY POLICY AGGREGATES')}
                </span>
              </div>
              <span className="bg-[#162D4C] text-[#2F88C2] px-2.5 py-1 rounded border border-[#22446D] text-[11px] font-bold">
                e-GDDS • ART 26 ACT 2002
              </span>
            </div>
          </div>

          {/* ========================================================= */}
          {/* FX MODE CONTENT */}
          {/* ========================================================= */}
          {terminalMode === 'fx' && (
            <>
              {/* 2. Key Metrics Sovereign KPI Strip (4 Pillars) — DYNAMIC ON TIMEFRAME & SCRUBBING */}
              <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x sm:divide-x-reverse divide-[#22446D] border-b border-[#22446D] bg-[#0B1A2D] transition-all duration-200">
                
                {/* KPI 1: Middle Rate & Net Movement */}
                <div className={`p-5 space-y-1.5 transition-colors duration-200 ${isInspecting ? 'bg-[#162D4C]' : ''}`}>
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-mono text-[#8F9CAE] uppercase tracking-wider block">
                      {isInspecting 
                        ? (isRtl ? 'السعر المحدد بالفحص' : 'Inspected Rate')
                        : (isRtl ? 'السعر التأشيري الوسيط' : 'Official Middle Benchmark')}
                    </span>
                    <span className={`text-[10px] font-mono px-2 py-0.5 rounded font-bold ${
                      isInspecting 
                        ? 'bg-[#C58F2B]/20 text-[#DFAC46] border border-[#C58F2B]/50' 
                        : 'bg-[#2F88C2]/20 text-[#2F88C2] border border-[#2F88C2]/40'
                    }`}>
                      {isInspecting ? activePt.date : (isRtl ? `أحدث إقفال • ${timeframe}` : `Latest • ${timeframe}`)}
                    </span>
                  </div>
                  
                  <div className="flex items-baseline gap-2">
                    <span dir="ltr" className="text-2xl sm:text-3xl font-extrabold font-mono text-white tabular-nums transition-all">
                      {displayMiddle.toLocaleString('en-US', { minimumFractionDigits: precision, maximumFractionDigits: precision })}
                    </span>
                    <span className="text-xs font-mono font-bold text-[#2F88C2]">SDG</span>
                  </div>

                  <div className="flex items-center gap-1.5 text-xs font-mono pt-0.5">
                    <span className={`inline-flex items-center gap-0.5 px-2 py-0.5 rounded font-bold transition-colors ${
                      (isInspecting ? isPointPositive : isPeriodPositive)
                        ? 'bg-[#162D4C] text-[#3DA66E] border border-[#22446D]' 
                        : 'bg-[#2E1619] text-[#E95B4D] border border-[#5A2229]'
                    }`}>
                      {(isInspecting ? isPointPositive : isPeriodPositive) ? <TrendingUp className="w-3 h-3" /> : <TrendingDown className="w-3 h-3" />}
                      <span dir="ltr">
                        {isInspecting 
                          ? `${isPointPositive ? '+' : ''}${pointDelta.toFixed(2)} (${pointDeltaPct}%)`
                          : `${isPeriodPositive ? '+' : ''}${periodDelta.toFixed(2)} (${periodDeltaPct}%)`}
                      </span>
                    </span>
                    <span className="text-[#8F9CAE] text-[11px]">
                      {isInspecting ? (isRtl ? 'من بداية السلسلة' : 'From start') : (isRtl ? `صافي حركة ${timeframe}` : `${timeframe} Net Trend`)}
                    </span>
                  </div>
                </div>

                {/* KPI 2: Period Inception ➔ Latest OR Buy/Sell Spread */}
                <div className={`p-5 space-y-1.5 transition-colors duration-200 ${isInspecting ? 'bg-[#162D4C]' : ''}`}>
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-mono text-[#8F9CAE] uppercase tracking-wider block">
                      {isInspecting ? (isRtl ? 'نطاق الشراء / البيع' : 'Buy / Sell Range') : (isRtl ? 'بداية الفترة ➔ الإقفال' : 'Period Inception ➔ Latest')}
                    </span>
                    <span className="text-[10px] font-mono text-[#8F9CAE]">
                      {selectedCurrency} / SDG
                    </span>
                  </div>

                  <div className="flex items-center justify-between text-xs font-mono pt-1">
                    <div>
                      <span className="text-[#8F9CAE] block text-[10px]">{isRtl ? 'شراء رسمي' : 'OFFICIAL BUY'}</span>
                      <span dir="ltr" className="text-sm font-bold text-[#2F88C2] tabular-nums">
                        {displayBuy.toFixed(2)}
                      </span>
                    </div>
                    <div className="h-6 w-px bg-[#22446D]" />
                    <div className="text-right">
                      <span className="text-[#8F9CAE] block text-[10px]">{isRtl ? 'بيع رسمي' : 'OFFICIAL SELL'}</span>
                      <span dir="ltr" className="text-sm font-bold text-white tabular-nums">
                        {displaySell.toFixed(2)}
                      </span>
                    </div>
                  </div>

                  <div className="text-[11px] font-mono text-[#8F9CAE] pt-1 flex items-center justify-between">
                    <span>{isRtl ? 'الهامش الرقابي المعتمد:' : 'Regulatory Spread:'}</span>
                    <span dir="ltr" className="text-white font-bold">{displaySpread.toFixed(2)} SDG</span>
                  </div>
                </div>

                {/* KPI 3: Period Benchmark Average — DYNAMICALLY RECALCULATES ON TIMEFRAME */}
                <div className={`p-5 space-y-1.5 transition-colors duration-200 ${isInspecting ? 'bg-[#162D4C]' : ''}`}>
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-mono text-[#8F9CAE] uppercase tracking-wider block">
                      {isInspecting 
                        ? (isRtl ? 'متوسط المصارف في اليوم' : 'Interbank Avg on Day') 
                        : (isRtl ? `متوسط السعر لفترة (${timeframe})` : `${timeframe} Period Average`)}
                    </span>
                    <span className="w-2 h-2 rounded-full bg-[#3DA66E]" />
                  </div>

                  <div className="flex items-baseline gap-2">
                    <span dir="ltr" className="text-2xl sm:text-3xl font-extrabold font-mono text-[#3DA66E] tabular-nums">
                      {(isInspecting ? displayComm : periodAvg).toFixed(2)}
                    </span>
                    <span className="text-xs font-mono font-bold text-[#8F9CAE]">SDG</span>
                  </div>

                  <p className="text-[11px] font-mono text-[#8F9CAE] truncate">
                    {isInspecting 
                      ? (isRtl ? `تداول معتمد يوم ${activePt.date}` : `Interbank on ${activePt.date}`)
                      : (isRtl ? `متوسط المصارف: ${periodCommAvg.toFixed(2)} SDG` : `Interbank Avg: ${periodCommAvg.toFixed(2)} SDG`)}
                  </p>
                </div>

                {/* KPI 4: Period High / Low Range with Dynamic Pointer */}
                <div className="p-5 space-y-2">
                  <div className="flex items-center justify-between text-[11px] font-mono text-[#8F9CAE] uppercase">
                    <span>{isRtl ? 'أدنى' : 'LOW'}</span>
                    <span className="text-white font-bold">{timeframe} RANGE</span>
                    <span>{isRtl ? 'أعلى' : 'HIGH'}</span>
                  </div>
                  <div className="flex items-center justify-between text-xs font-mono">
                    <span dir="ltr" className="text-[#8F9CAE] font-bold tabular-nums">{minVal.toFixed(tickDecimals)}</span>
                    <span dir="ltr" className="text-[#3DA66E] font-bold tabular-nums">{maxVal.toFixed(tickDecimals)}</span>
                  </div>
                  {/* Dynamic Interactive Range Bar */}
                  <div className="relative w-full bg-[#11253E] h-2 rounded-full overflow-hidden border border-[#22446D] p-0.5">
                    <div 
                      className="bg-gradient-to-r from-[#2F88C2] to-[#C58F2B] h-full rounded-full transition-all duration-200"
                      style={{ width: `${Math.min(Math.max(((displayMiddle - minVal) / rangeSpan) * 100, 5), 100)}%` }}
                    />
                  </div>
                  <div className="flex items-center justify-between text-[10px] font-mono text-[#8F9CAE]">
                    <span>{selectedCurrency} SPREAD</span>
                    <span dir="ltr" className="text-white font-bold">{rangeSpan.toFixed(tickDecimals)} SDG</span>
                  </div>
                </div>

              </div>

              {/* 3. Interactive Controls Toolbar */}
              <div className="relative z-10 p-4 sm:p-5 md:p-6 bg-[#11253E] border-b border-[#22446D] flex flex-wrap items-center justify-between gap-4">
                
                {/* Currency Switcher */}
                <div className="flex items-center gap-1.5 overflow-x-auto pb-1 sm:pb-0 max-w-full">
                  {['USD', 'EUR', 'SAR', 'AED', 'GBP', 'QAR', 'KWD', 'EGP'].map((code) => {
                    const isSelected = selectedCurrency === code;
                    return (
                      <button
                        key={code}
                        onClick={() => handleCurrencySelect(code)}
                        className={`min-h-[38px] px-3.5 py-1.5 rounded-lg text-xs font-mono font-bold transition-all flex items-center gap-1 shrink-0 ${
                          isSelected
                            ? 'bg-[#2F88C2] text-white border border-[#2F88C2] shadow-sm'
                            : 'bg-[#162D4C] text-[#8F9CAE] hover:text-white hover:bg-[#1B375C] border border-[#22446D]'
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
                  <div className="flex items-center rounded-lg bg-[#162D4C] p-1 border border-[#22446D] text-xs font-mono">
                    <button
                      onClick={() => setDisplayMode('middle')}
                      className={`min-h-[32px] px-3 py-1 rounded transition-colors ${
                        displayMode === 'middle' ? 'bg-[#2F88C2] text-white font-bold' : 'text-[#8F9CAE] hover:text-white'
                      }`}
                    >
                      {isRtl ? 'التأشيري' : 'Official'}
                    </button>
                    <button
                      onClick={() => setDisplayMode('banks')}
                      className={`min-h-[32px] px-3 py-1 rounded transition-colors ${
                        displayMode === 'banks' ? 'bg-[#3DA66E] text-white font-bold' : 'text-[#8F9CAE] hover:text-white'
                      }`}
                    >
                      {isRtl ? 'المصارف' : 'Banks Avg'}
                    </button>
                  </div>

                  {/* Timeframe Selector (7D, 30D, 90D, 1Y, ALL) */}
                  <div className="flex items-center rounded-lg bg-[#162D4C] p-1 border border-[#22446D] text-xs font-mono">
                    {(['7D', '30D', '90D', '1Y', 'ALL'] as Timeframe[]).map((tf) => (
                      <button
                        key={tf}
                        onClick={() => handleTimeframeSelect(tf)}
                        className={`min-h-[32px] px-2.5 sm:px-3 py-1 rounded transition-colors font-bold ${
                          timeframe === tf
                            ? 'bg-[#C58F2B] text-white shadow-sm'
                            : 'text-[#8F9CAE] hover:text-white'
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
                      className="min-h-[32px] px-3 py-1 rounded-lg bg-[#162D4C] border border-[#C58F2B]/60 text-[#DFAC46] text-xs font-mono hover:bg-[#1B375C] transition-colors"
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
                    ? 'bg-[#162D4C] border-[#2F88C2] shadow-md' 
                    : 'bg-[#11253E] border-[#22446D]'
                }`}>
                  <div className="flex flex-wrap items-center gap-4">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-3.5 h-3.5 text-[#2F88C2]" />
                      <span className="text-[#8F9CAE]">{isRtl ? 'التاريخ:' : 'Date:'}</span>
                      <span className="text-white font-bold">{activePt.date}</span>
                    </div>
                    <div className="h-4 w-px bg-[#22446D]" />
                    <div className="flex items-center gap-2">
                      <span className="text-[#8F9CAE]">{isRtl ? 'السعر التأشيري:' : 'Official Rate:'}</span>
                      <span dir="ltr" className="text-[#2F88C2] font-bold text-sm tabular-nums">
                        {activePt.rate.toFixed(2)} SDG
                      </span>
                    </div>
                    <div className="h-4 w-px bg-[#22446D]" />
                    <div className="flex items-center gap-2">
                      <span className="text-[#8F9CAE]">{isRtl ? 'التغير:' : 'Change:'}</span>
                      <span dir="ltr" className={`font-bold ${isPointPositive ? 'text-[#3DA66E]' : 'text-[#E95B4D]'}`}>
                        {isPointPositive ? `+${pointDelta.toFixed(2)}` : pointDelta.toFixed(2)} ({isPointPositive ? `+${pointDeltaPct}%` : `${pointDeltaPct}%`})
                      </span>
                    </div>
                  </div>

                  {displayMode === 'banks' && (
                    <div className="flex items-center gap-2">
                      <span className="text-[#8F9CAE]">{isRtl ? 'متوسط المصارف:' : 'Commercial Bank Avg:'}</span>
                      <span dir="ltr" className="text-[#3DA66E] font-bold tabular-nums">
                        {activePt.commercial.toFixed(2)} SDG
                      </span>
                    </div>
                  )}

                  <div className="text-[11px] text-[#8F9CAE] hidden sm:flex items-center gap-1.5">
                    <Info className="w-3.5 h-3.5 text-[#C58F2B]" />
                    <span>{isRtl ? 'حرك المؤشر أو المس الرسم البياني لفحص أسعار التثبيت اليومية' : 'Hover or scrub across chart to inspect daily official fixings'}</span>
                  </div>
                </div>

                {/* SVG Visual Canvas with Full-Width Pointer Tracking */}
                <div className="relative w-full overflow-hidden select-none touch-pan-y">
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
                      <linearGradient id="sovereignAreaGrad" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#2F88C2" stopOpacity="0.22" />
                        <stop offset="60%" stopColor="#2F88C2" stopOpacity="0.05" />
                        <stop offset="100%" stopColor="#0B1A2D" stopOpacity="0.0" />
                      </linearGradient>

                      <linearGradient id="commGrad" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#3DA66E" stopOpacity="0.12" />
                        <stop offset="100%" stopColor="#0B1A2D" stopOpacity="0.0" />
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
                          stroke="#22446D" 
                          strokeWidth="1" 
                          strokeDasharray={i === 0 ? "none" : "4 4"} 
                        />
                        <text 
                          x={padLeft - 10} 
                          y={tick.y + 4} 
                          fill="#8F9CAE" 
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
                        stroke="#3DA66E"
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
                      stroke="#2F88C2"
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
                          stroke="#C58F2B" 
                          strokeWidth="1" 
                          strokeDasharray="3 3" 
                        />
                        <circle 
                          cx={activeX} 
                          cy={activeY} 
                          r="8" 
                          fill="none" 
                          stroke="#C58F2B" 
                          strokeWidth="1" 
                          strokeOpacity="0.5" 
                        />
                        <circle 
                          cx={activeX} 
                          cy={activeY} 
                          r="4" 
                          fill="#C58F2B" 
                          stroke="#0B1A2D" 
                          strokeWidth="2" 
                        />
                      </g>
                    )}

                    {/* Static Key Data Points & X-Axis Dates */}
                    {seriesData.map((pt, i) => {
                      const x = getX(i);
                      const y = getY(pt.rate);
                      const isHovered = activePtIndex === i;
                      
                      const showLabel = 
                        seriesData.length <= 10 || 
                        i === 0 || 
                        i === seriesData.length - 1 || 
                        i % Math.floor(seriesData.length / 5) === 0;

                      return (
                        <g key={i}>
                          <circle 
                            cx={x} 
                            cy={y} 
                            r={isHovered ? 4.5 : 2.5} 
                            fill={isHovered ? "#C58F2B" : "#0B1A2D"} 
                            stroke={isHovered ? "#0B1A2D" : "#2F88C2"} 
                            strokeWidth={isHovered ? "2" : "1.5"} 
                          />

                          {showLabel && (
                            <text 
                              x={x} 
                              y={svgHeight - 15} 
                              fill={isHovered ? "#2F88C2" : "#8F9CAE"} 
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

                {/* Chart Legend */}
                <div className="mt-4 pt-4 border-t border-[#22446D] flex flex-wrap items-center justify-between gap-4 text-xs font-mono text-[#8F9CAE]">
                  <div className="flex items-center gap-6">
                    <div className="flex items-center gap-2">
                      <span className="w-3.5 h-1 bg-[#2F88C2] rounded-full inline-block" />
                      <span className="text-white">{isRtl ? 'السعر التأشيري الرسمي (CBOS Fixing)' : 'Official Fixing Benchmark'}</span>
                    </div>
                    {displayMode === 'banks' && (
                      <div className="flex items-center gap-2">
                        <span className="w-3.5 h-1 bg-[#3DA66E] rounded-full inline-block border-dashed" />
                        <span className="text-[#3DA66E]">{isRtl ? 'متوسط المصارف التجارية' : 'Commercial Banks Avg'}</span>
                      </div>
                    )}
                  </div>

                  <div className="flex items-center gap-2 text-[11px] text-[#8F9CAE]">
                    <ShieldCheck className="w-3.5 h-3.5 text-[#C58F2B]" />
                    <span>{isRtl ? 'بيانات معتمدة لأغراض التقييم المحاسبي والجمركي' : 'Certified for Accounting & Customs Valuation'}</span>
                  </div>
                </div>

              </div>
            </>
          )}

          {/* ========================================================= */}
          {/* MACROECONOMIC & INFLATION MODE CONTENT */}
          {/* ========================================================= */}
          {terminalMode === 'macro' && (
            <>
              {/* Macro Indicators KPI Strip */}
              <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x sm:divide-x-reverse divide-[#22446D] border-b border-[#22446D] bg-[#0B1A2D] transition-all duration-200">
                
                {/* Macro KPI 1: Active Value */}
                <div className={`p-5 space-y-1.5 transition-colors duration-200 ${isInspectingMacro ? 'bg-[#162D4C]' : ''}`}>
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-mono text-[#8F9CAE] uppercase tracking-wider block">
                      {isInspectingMacro ? (isRtl ? 'القراءة المحددة بالفحص' : 'Inspected Reading') : (isRtl ? 'أحدث قراءة رسمية' : 'Latest Reading')}
                    </span>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded font-bold bg-[#C58F2B]/20 text-[#DFAC46] border border-[#C58F2B]/50">
                      {isInspectingMacro ? activeMacroPt.date : activeMacroPt.date}
                    </span>
                  </div>

                  <div className="flex items-baseline gap-2">
                    <span dir="ltr" className="text-2xl sm:text-3xl font-extrabold font-mono text-white tabular-nums">
                      {activeMacroPt.value.toLocaleString('en-US', { minimumFractionDigits: 1, maximumFractionDigits: 1 })}
                    </span>
                    <span className="text-xs font-mono font-bold text-[#C58F2B]">
                      {t(activeMacroSeries.unit)}
                    </span>
                  </div>

                  <p className="text-[11px] font-mono text-[#8F9CAE] truncate">
                    {t(activeMacroPt.note)}
                  </p>
                </div>

                {/* Macro KPI 2: Overall Period Net Change */}
                <div className="p-5 space-y-1.5">
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-mono text-[#8F9CAE] uppercase tracking-wider block">
                      {isRtl ? 'صافي المسار الزمني' : 'Series Net Change'}
                    </span>
                    <span className="text-[10px] font-mono text-[#8F9CAE]">
                      {macroFirst.date} ➔ {macroLast.date}
                    </span>
                  </div>

                  <div className="flex items-baseline gap-2">
                    <span dir="ltr" className={`text-2xl sm:text-3xl font-extrabold font-mono tabular-nums ${
                      selectedMacroKey === 'inflation' ? 'text-[#3DA66E]' : 'text-[#2F88C2]'
                    }`}>
                      {macroPeriodDelta > 0 ? `+${macroPeriodDelta.toFixed(1)}` : macroPeriodDelta.toFixed(1)}
                    </span>
                    <span className="text-xs font-mono font-bold text-[#8F9CAE]">
                      ({macroPeriodDeltaPct}%)
                    </span>
                  </div>

                  <p className="text-[11px] font-mono text-[#8F9CAE]">
                    {selectedMacroKey === 'inflation' 
                      ? (isRtl ? 'تباطؤ ملحوظ في وتيرة التضخم السنوي' : 'Substantial deceleration in annual CPI') 
                      : (isRtl ? 'نمو منضبط ومستقر للكتلة النقدية' : 'Sustained expansion of monetary depth')}
                  </p>
                </div>

                {/* Macro KPI 3: Series Benchmark Average */}
                <div className="p-5 space-y-1.5">
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-mono text-[#8F9CAE] uppercase tracking-wider block">
                      {isRtl ? 'متوسط السلسلة التاريخية' : 'Historical Series Mean'}
                    </span>
                    <span className="w-2 h-2 rounded-full bg-[#2F88C2]" />
                  </div>

                  <div className="flex items-baseline gap-2">
                    <span dir="ltr" className="text-2xl sm:text-3xl font-extrabold font-mono text-[#2F88C2] tabular-nums">
                      {macroAvg.toFixed(1)}
                    </span>
                    <span className="text-xs font-mono font-bold text-[#8F9CAE]">
                      {t(activeMacroSeries.unit)}
                    </span>
                  </div>

                  <p className="text-[11px] font-mono text-[#8F9CAE]">
                    {isRtl ? 'الرصيد الموزون عبر 10 أرباع معتمدة' : 'Weighted mean across 10 official quarters'}
                  </p>
                </div>

                {/* Macro KPI 4: Extreme High / Low Range */}
                <div className="p-5 space-y-2">
                  <div className="flex items-center justify-between text-[11px] font-mono text-[#8F9CAE] uppercase">
                    <span>{isRtl ? 'أدنى' : 'LOW'}</span>
                    <span className="text-white font-bold">{t(activeMacroSeries.unit)}</span>
                    <span>{isRtl ? 'أعلى' : 'HIGH'}</span>
                  </div>
                  <div className="flex items-center justify-between text-xs font-mono">
                    <span dir="ltr" className="text-[#8F9CAE] font-bold tabular-nums">{macroMin.toFixed(1)}</span>
                    <span dir="ltr" className="text-[#C58F2B] font-bold tabular-nums">{macroMax.toFixed(1)}</span>
                  </div>
                  <div className="relative w-full bg-[#11253E] h-2 rounded-full overflow-hidden border border-[#22446D] p-0.5">
                    <div 
                      className="bg-gradient-to-r from-[#3DA66E] to-[#C58F2B] h-full rounded-full transition-all duration-200"
                      style={{ width: `${Math.min(Math.max(((activeMacroPt.value - macroMin) / macroRange) * 100, 5), 100)}%` }}
                    />
                  </div>
                  <div className="flex items-center justify-between text-[10px] font-mono text-[#8F9CAE]">
                    <span>RANGE SPAN</span>
                    <span dir="ltr" className="text-white font-bold">{macroRange.toFixed(1)} {t(activeMacroSeries.unit)}</span>
                  </div>
                </div>

              </div>

              {/* Macro Indicators Selection Toolbar */}
              <div className="relative z-10 p-4 sm:p-5 md:p-6 bg-[#11253E] border-b border-[#22446D] flex flex-wrap items-center justify-between gap-4">
                <div className="flex flex-wrap items-center gap-2">
                  <button
                    onClick={() => handleMacroSelect('inflation')}
                    className={`min-h-[38px] px-4 py-2 rounded-lg text-xs font-mono font-bold transition-all flex items-center gap-2 ${
                      selectedMacroKey === 'inflation'
                        ? 'bg-[#C58F2B] text-white shadow-sm'
                        : 'bg-[#162D4C] text-[#8F9CAE] hover:text-white border border-[#22446D]'
                    }`}
                  >
                    <Percent className="w-3.5 h-3.5" />
                    <span>{isRtl ? 'معدل التضخم السنوي (CPI)' : 'Headline CPI Inflation (%)'}</span>
                  </button>

                  <button
                    onClick={() => handleMacroSelect('m2')}
                    className={`min-h-[38px] px-4 py-2 rounded-lg text-xs font-mono font-bold transition-all flex items-center gap-2 ${
                      selectedMacroKey === 'm2'
                        ? 'bg-[#2F88C2] text-white shadow-sm'
                        : 'bg-[#162D4C] text-[#8F9CAE] hover:text-white border border-[#22446D]'
                    }`}
                  >
                    <Layers className="w-3.5 h-3.5" />
                    <span>{isRtl ? 'عرض النقود والسيولة (M2)' : 'Broad Money Supply M2 (Billion SDG)'}</span>
                  </button>

                  <button
                    onClick={() => handleMacroSelect('gold')}
                    className={`min-h-[38px] px-4 py-2 rounded-lg text-xs font-mono font-bold transition-all flex items-center gap-2 ${
                      selectedMacroKey === 'gold'
                        ? 'bg-[#DFAC46] text-[#0B1A2D] font-extrabold shadow-sm'
                        : 'bg-[#162D4C] text-[#8F9CAE] hover:text-white border border-[#22446D]'
                    }`}
                  >
                    <ShieldCheck className="w-3.5 h-3.5" />
                    <span>{isRtl ? 'احتياطيات الذهب النقدي السيادي' : 'Monetary Gold Reserves (Tons)'}</span>
                  </button>
                </div>

                {isInspectingMacro && (
                  <button
                    onClick={() => setHoveredMacroIndex(null)}
                    className="min-h-[34px] px-3 py-1 rounded-lg bg-[#162D4C] border border-[#C58F2B]/60 text-[#DFAC46] text-xs font-mono hover:bg-[#1B375C] transition-colors"
                  >
                    {isRtl ? 'العودة للمباشر ↺' : 'Reset to Latest ↺'}
                  </button>
                )}
              </div>

              {/* Macro SVG Chart Surface */}
              <div className="relative z-10 p-4 sm:p-6 md:p-8">
                
                {/* Active HUD Tooltip */}
                <div className={`mb-4 flex flex-wrap items-center justify-between gap-4 p-3.5 rounded-xl border text-xs font-mono transition-all duration-150 ${
                  isInspectingMacro ? 'bg-[#162D4C] border-[#C58F2B] shadow-md' : 'bg-[#11253E] border-[#22446D]'
                }`}>
                  <div className="flex flex-wrap items-center gap-4">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-3.5 h-3.5 text-[#C58F2B]" />
                      <span className="text-[#8F9CAE]">{isRtl ? 'الفترة:' : 'Period:'}</span>
                      <span className="text-white font-bold">{activeMacroPt.date}</span>
                    </div>
                    <div className="h-4 w-px bg-[#22446D]" />
                    <div className="flex items-center gap-2">
                      <span className="text-[#8F9CAE]">{t(activeMacroSeries.title)}:</span>
                      <span dir="ltr" className="text-[#C58F2B] font-bold text-sm tabular-nums">
                        {activeMacroPt.value.toLocaleString()} {t(activeMacroSeries.unit)}
                      </span>
                    </div>
                    <div className="h-4 w-px bg-[#22446D]" />
                    <div className="flex items-center gap-2">
                      <span className="text-[#8F9CAE]">{isRtl ? 'الإيضاح:' : 'Context:'}</span>
                      <span className="text-white font-medium">{t(activeMacroPt.note)}</span>
                    </div>
                  </div>

                  <div className="text-[11px] text-[#8F9CAE] hidden sm:flex items-center gap-1.5">
                    <Info className="w-3.5 h-3.5 text-[#2F88C2]" />
                    <span>{isRtl ? 'حرك المؤشر عبر أرباع السنة لفحص المؤشرات النقدية' : 'Hover or scrub across quarters to inspect monetary indicators'}</span>
                  </div>
                </div>

                {/* SVG Visual Canvas */}
                <div className="relative w-full overflow-hidden select-none touch-pan-y">
                  <svg 
                    className={`w-full h-72 sm:h-80 cursor-crosshair transition-opacity duration-200 ${isTransitioning ? 'opacity-40' : 'opacity-100'}`} 
                    viewBox={`0 0 ${svgWidth} ${svgHeight}`}
                    preserveAspectRatio="none"
                    onMouseMove={handlePointerMove}
                    onTouchMove={handlePointerMove}
                    onTouchStart={handlePointerMove}
                    onMouseLeave={() => setHoveredMacroIndex(null)}
                  >
                    <defs>
                      <linearGradient id="macroAreaGrad" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#C58F2B" stopOpacity="0.25" />
                        <stop offset="60%" stopColor="#C58F2B" stopOpacity="0.05" />
                        <stop offset="100%" stopColor="#0B1A2D" stopOpacity="0.0" />
                      </linearGradient>
                    </defs>

                    {/* Y-Axis Horizontal Grid Lines & Ticks */}
                    {macroYTicks.map((tick, i) => (
                      <g key={i}>
                        <line 
                          x1={padLeft} 
                          y1={tick.y} 
                          x2={svgWidth - padRight} 
                          y2={tick.y} 
                          stroke="#22446D" 
                          strokeWidth="1" 
                          strokeDasharray={i === 0 ? "none" : "4 4"} 
                        />
                        <text 
                          x={padLeft - 10} 
                          y={tick.y + 4} 
                          fill="#8F9CAE" 
                          fontSize="10" 
                          fontFamily="JetBrains Mono, monospace" 
                          textAnchor="end"
                        >
                          {tick.val.toFixed(1)} {t(activeMacroSeries.unit)}
                        </text>
                      </g>
                    ))}

                    {/* Macro Area Fill */}
                    <path 
                      d={macroAreaPath} 
                      fill="url(#macroAreaGrad)" 
                      className="transition-all duration-300"
                    />

                    {/* Macro Spline Curve */}
                    <path
                      d={macroCurvePath}
                      fill="none"
                      stroke="#C58F2B"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="transition-all duration-200"
                    />

                    {/* Tracking Cursor */}
                    {isInspectingMacro && (
                      <g className="transition-all duration-75">
                        <line 
                          x1={activeMacroX} 
                          y1={padTop} 
                          x2={activeMacroX} 
                          y2={padTop + innerH} 
                          stroke="#2F88C2" 
                          strokeWidth="1" 
                          strokeDasharray="3 3" 
                        />
                        <circle 
                          cx={activeMacroX} 
                          cy={activeMacroY} 
                          r="8" 
                          fill="none" 
                          stroke="#2F88C2" 
                          strokeWidth="1" 
                          strokeOpacity="0.5" 
                        />
                        <circle 
                          cx={activeMacroX} 
                          cy={activeMacroY} 
                          r="4" 
                          fill="#2F88C2" 
                          stroke="#0B1A2D" 
                          strokeWidth="2" 
                        />
                      </g>
                    )}

                    {/* Data Points */}
                    {macroPoints.map((pt, i) => {
                      const x = getMacroX(i);
                      const y = getMacroY(pt.value);
                      const isHovered = activeMacroPtIndex === i;

                      return (
                        <g key={i}>
                          <circle 
                            cx={x} 
                            cy={y} 
                            r={isHovered ? 5 : 3} 
                            fill={isHovered ? "#2F88C2" : "#0B1A2D"} 
                            stroke={isHovered ? "#0B1A2D" : "#C58F2B"} 
                            strokeWidth={isHovered ? "2" : "1.5"} 
                          />
                          <text 
                            x={x} 
                            y={svgHeight - 15} 
                            fill={isHovered ? "#C58F2B" : "#8F9CAE"} 
                            fontSize="10" 
                            fontFamily="JetBrains Mono, monospace" 
                            fontWeight={isHovered ? "bold" : "normal"}
                            textAnchor="middle"
                          >
                            {pt.date}
                          </text>
                        </g>
                      );
                    })}
                  </svg>
                </div>

                <div className="mt-4 pt-4 border-t border-[#22446D] flex flex-wrap items-center justify-between gap-4 text-xs font-mono text-[#8F9CAE]">
                  <div className="flex items-center gap-2">
                    <span className="w-3.5 h-1 bg-[#C58F2B] rounded-full inline-block" />
                    <span className="text-white">{t(activeMacroSeries.title)}</span>
                  </div>

                  <div className="flex items-center gap-2 text-[11px] text-[#8F9CAE]">
                    <ShieldCheck className="w-3.5 h-3.5 text-[#2F88C2]" />
                    <span>{t(activeMacroSeries.source)}</span>
                  </div>
                </div>

              </div>
            </>
          )}

          {/* 5. Terminal Footer & Regulatory Attribution */}
          <div className="relative z-10 px-6 py-4 bg-[#11253E] border-t border-[#22446D] flex flex-col sm:flex-row items-center justify-between text-xs text-[#8F9CAE] gap-3">
            <div className="flex flex-col gap-1 max-w-xl">
              <div className="flex items-center gap-2">
                <Info className="w-4 h-4 text-[#2F88C2] shrink-0" />
                <span className="font-bold text-white">
                  {terminalMode === 'fx'
                    ? (isRtl ? 'المصدر: الإدارة العامة للأسواق المالية وإدارة النقد الأجنبي — بنك السودان المركزي' : 'Source: Financial Markets & Foreign Exchange Directorate — Central Bank of Sudan')
                    : (isRtl ? 'المصدر: الإدارة العامة للسياسات والبحوث والإحصاء — بنك السودان المركزي' : 'Source: Directorate General of Policies, Research & Statistics — Central Bank of Sudan')}
                </span>
              </div>
              <p className="text-[11px] text-[#8F9CAE] leading-relaxed ps-6">
                {terminalMode === 'fx' ? t(currentSeriesMeta.methodology) : t(activeMacroSeries.description)}
              </p>
            </div>
            
            <div className="flex items-center gap-4 text-[11px] font-mono">
              <Link 
                href="/exchange-rates" 
                className="text-[#2F88C2] hover:text-white transition-colors flex items-center gap-1"
              >
                <span>{isRtl ? 'جدول كافة العملات الأجنبية' : 'All Currencies Table'}</span>
                <ExternalLink className="w-3 h-3" />
              </Link>
              <span>•</span>
              <span className="text-[#8F9CAE]">e-GDDS Compliant Series</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
