'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { useLanguage } from '@/lib/languageContext';
import { 
  Building2, 
  ShieldCheck, 
  Radio, 
  Layers, 
  CheckCircle2, 
  Server, 
  RefreshCw,
  Search,
  Wifi,
  ExternalLink,
  ChevronRight,
  ArrowDown
} from 'lucide-react';

interface CityHotspot {
  id: string;
  name: { ar: string; en: string };
  role: { ar: string; en: string };
  topPct: number;
  leftPct: number;
  type: 'cbos_core' | 'cbos_exec' | 'regional_hub' | 'major_branch';
  connectedBanks: { ar: string; en: string }[];
  status: 'online' | 'standby';
  latency: string;
  branches: number;
}

const cityHotspots: CityHotspot[] = [
  {
    id: 'khartoum',
    name: { ar: 'الخرطوم', en: 'Khartoum' },
    role: { ar: 'المقر السيادي التاريخي والمستودع النقدي المركزي', en: 'Historic Sovereign HQ & Central Cash Repository' },
    topPct: 44.5,
    leftPct: 58.2,
    type: 'cbos_core',
    connectedBanks: [
      { ar: 'بنك الخرطوم (BOK)', en: 'Bank of Khartoum' },
      { ar: 'بنك فيصل الإسلامي', en: 'Faisal Islamic Bank' },
      { ar: 'بنك أم درمان الوطني', en: 'Omdurman National Bank' },
      { ar: 'البنك السوداني الفرنسي', en: 'Sudanese French Bank' },
      { ar: 'بنك البركة السوداني', en: 'Al Baraka Bank Sudan' },
      { ar: 'مقسم الخدمات المصرفية (EBS)', en: 'EBS National Switch' }
    ],
    status: 'online',
    latency: '8ms',
    branches: 280
  },
  {
    id: 'portsudan',
    name: { ar: 'بورتسودان', en: 'Port Sudan' },
    role: { ar: 'مركز العمليات التنفيذية والمقسم القومي اللحظي (NIPS Core)', en: 'Executive Operations & NIPS Instant Switch Core' },
    topPct: 39.5,
    leftPct: 82.5,
    type: 'cbos_exec',
    connectedBanks: [
      { ar: 'إدارة العمليات المصرفية الخارجية CBOS', en: 'CBOS Foreign Operations Hub' },
      { ar: 'شركة EBS — عقدة المقسم البديل', en: 'EBS Disaster Recovery Node' },
      { ar: 'بنك النيل الأزرق المشرق', en: 'Blue Nile Mashreq Bank' },
      { ar: 'شركة اليمامة للصرافة', en: 'Al-Yamama Exchange' }
    ],
    status: 'online',
    latency: '11ms',
    branches: 94
  },
  {
    id: 'atbara',
    name: { ar: 'عطبرة', en: 'Atbara' },
    role: { ar: 'مركز قطاع نهر النيل والتعدين والصناعة', en: 'River Nile Industrial & Mining Financial Hub' },
    topPct: 37.0,
    leftPct: 70.8,
    type: 'regional_hub',
    connectedBanks: [
      { ar: 'فرع بنك السودان المركزي — عطبرة', en: 'CBOS State Regional Branch' },
      { ar: 'بنك العمال الوطني', en: 'Workers National Bank' },
      { ar: 'بنك أم درمان الوطني', en: 'Omdurman National Bank' }
    ],
    status: 'online',
    latency: '14ms',
    branches: 45
  },
  {
    id: 'kassala',
    name: { ar: 'كسلا', en: 'Kassala' },
    role: { ar: 'بوابة التجارة البينية الشرقية والتمويل التجاري', en: 'Eastern Cross-Border Trade & Commercial Finance' },
    topPct: 54.0,
    leftPct: 72.5,
    type: 'regional_hub',
    connectedBanks: [
      { ar: 'فرع بنك السودان المركزي — كسلا', en: 'CBOS Regional Branch Kassala' },
      { ar: 'بنك التضامن الإسلامي', en: 'Tadamon Islamic Bank' },
      { ar: 'بنك الشمال الإسلامي', en: 'Al Shamal Islamic Bank' }
    ],
    status: 'online',
    latency: '15ms',
    branches: 42
  },
  {
    id: 'gedaref',
    name: { ar: 'القضارف', en: 'Gedaref' },
    role: { ar: 'عاصمة التمويل الزراعي ومحفظة الصادرات الحقلية', en: 'Agricultural Finance & Crop Export Hub' },
    topPct: 56.5,
    leftPct: 65.0,
    type: 'regional_hub',
    connectedBanks: [
      { ar: 'البنك الزراعي السوداني (القطاع الرئيسي)', en: 'Agricultural Bank of Sudan' },
      { ar: 'مصرف الإبداع للتمويل الأصغر', en: 'Ebdaa Microfinance Bank' },
      { ar: 'بنك فيصل الإسلامي', en: 'Faisal Islamic Bank' }
    ],
    status: 'online',
    latency: '16ms',
    branches: 58
  },
  {
    id: 'wadmadani',
    name: { ar: 'ود مدني', en: 'Wad Madani' },
    role: { ar: 'مركز قطاع الجزيرة الزراعي والصناعات الغذائية', en: 'Gezira Agri-Industrial Financial Corridor' },
    topPct: 52.0,
    leftPct: 62.0,
    type: 'regional_hub',
    connectedBanks: [
      { ar: 'بنك الجزيرة السوداني الأردني', en: 'Sudanese Jordanian Bank' },
      { ar: 'بنك الخرطوم', en: 'Bank of Khartoum' },
      { ar: 'البنك الزراعي السوداني', en: 'Agricultural Bank' }
    ],
    status: 'online',
    latency: '12ms',
    branches: 68
  },
  {
    id: 'elobeid',
    name: { ar: 'الأبيض', en: 'El Obeid' },
    role: { ar: 'سوق المحاصيل القومي والبورصة النقدية لكردفان', en: 'Kordofan Commodity Exchange & Central Cash Depot' },
    topPct: 49.5,
    leftPct: 46.5,
    type: 'regional_hub',
    connectedBanks: [
      { ar: 'فرع بنك السودان المركزي — الأبيض', en: 'CBOS Regional Branch El Obeid' },
      { ar: 'بنك أم درمان الوطني', en: 'Omdurman National Bank' }
    ],
    status: 'online',
    latency: '22ms',
    branches: 52
  },
  {
    id: 'alfashir',
    name: { ar: 'الفاشر', en: 'Al Fashir' },
    role: { ar: 'مركز التجارة الإقليمية لشمال دارفور', en: 'North Darfur Regional Trade Hub' },
    topPct: 36.5,
    leftPct: 28.5,
    type: 'regional_hub',
    connectedBanks: [
      { ar: 'فرع بنك السودان المركزي — الفاشر', en: 'CBOS Regional Branch Al Fashir' },
      { ar: 'بنك فيصل الإسلامي', en: 'Faisal Islamic Bank' }
    ],
    status: 'online',
    latency: '26ms',
    branches: 24
  },
  {
    id: 'nyala',
    name: { ar: 'نيالا', en: 'Nyala' },
    role: { ar: 'مركز قطاع دارفور للمقاصة النقدية والخدمات المصرفية', en: 'Darfur Sector Clearing & Regional Banking Center' },
    topPct: 42.5,
    leftPct: 25.0,
    type: 'major_branch',
    connectedBanks: [
      { ar: 'فرع بنك السودان المركزي — نيالا', en: 'CBOS Regional Branch Nyala' },
      { ar: 'البنك الزراعي السوداني', en: 'Agricultural Bank' }
    ],
    status: 'online',
    latency: '29ms',
    branches: 34
  }
];

interface Props {
  onSelectCity?: (city: { ar: string; en: string }) => void;
}

export default function DigitalBankingMapHero({ onSelectCity }: Props) {
  const { t, isRtl } = useLanguage();
  const [selectedNode, setSelectedNode] = useState<CityHotspot>(cityHotspots[0]); // Default Khartoum
  const [hoveredNode, setHoveredNode] = useState<CityHotspot | null>(null);
  const [activeFilter, setActiveFilter] = useState<'all' | 'cbos' | 'banks'>('all');
  const [isNavigating, setIsNavigating] = useState(false);

  const activeNode = hoveredNode || selectedNode;

  return (
    <section 
      className="relative bg-[#071321] text-white border-b border-[#22446D] overflow-hidden"
      style={{
        backgroundImage: `
          radial-gradient(circle at 50% 15%, rgba(47, 136, 194, 0.18) 0%, transparent 65%),
          radial-gradient(circle at 85% 75%, rgba(197, 143, 43, 0.12) 0%, transparent 50%)
        `
      }}
    >
      {/* Background Matrix Grid */}
      <div 
        className="absolute inset-0 opacity-20 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(34, 68, 109, 0.35) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(34, 68, 109, 0.35) 1px, transparent 1px)
          `,
          backgroundSize: '48px 48px'
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-14 relative z-10">
        
        {/* Header Masthead */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 mb-8">
          <div>
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1 rounded-full bg-[#11253E] border border-[#22446D] text-xs font-mono text-[#DDC99B] mb-3 shadow-inner">
              <span className="w-2 h-2 rounded-full bg-[#3DA66E] animate-pulse" />
              <span>{isRtl ? 'المقسم القومي وشبكة المقاصة اللحظية (RTGS & NIPS TOPOLOGY)' : 'NATIONAL SETTLEMENT & RTGS TOPOLOGY MESH'}</span>
            </div>
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-arabic text-white tracking-tight">
              {t({
                ar: 'الخارطة الرقمية للجهاز المصرفي وشبكة الربط القومي',
                en: 'Digital Sudanese Banking Topology & National Settlement Grid'
              })}
            </h1>
            <p className="text-xs sm:text-sm text-[#8F9CAE] font-sans mt-1.5 max-w-2xl leading-relaxed">
              {t({
                ar: 'رصد تفاعلي ثلاثي الأبعاد لربط كافة المصارف التجارية والمتخصصة ومزودي نظم الدفع مع بنك السودان المركزي عبر شبكة المقاصة والتسويات اللحظية.',
                en: 'Live 3D interactive telemetry connecting all licensed commercial, specialized, and clearing institutions to CBOS via RTGS & ISO 20022 messaging.'
              })}
            </p>
          </div>

          {/* Quick Metrics Bar */}
          <div className="flex items-center gap-3 shrink-0">
            <div className="bg-[#0B1A2D]/90 border border-[#22446D] rounded-xl px-4 py-2.5 text-center shadow-lg">
              <div className="text-[10px] text-[#8F9CAE] font-mono uppercase">{isRtl ? 'المصارف المتصلة' : 'Connected Banks'}</div>
              <div className="text-xl font-bold font-mono text-[#3DA66E]">37 / 37</div>
            </div>
            <div className="bg-[#0B1A2D]/90 border border-[#22446D] rounded-xl px-4 py-2.5 text-center shadow-lg">
              <div className="text-[10px] text-[#8F9CAE] font-mono uppercase">{isRtl ? 'زمن الاستجابة' : 'Avg Latency'}</div>
              <div className="text-xl font-bold font-mono text-[#C58F2B]">14.2 ms</div>
            </div>
            <div className="bg-[#0B1A2D]/90 border border-[#22446D] rounded-xl px-4 py-2.5 text-center shadow-lg">
              <div className="text-[10px] text-[#8F9CAE] font-mono uppercase">{isRtl ? 'جاهزية المقسم' : 'Grid Uptime'}</div>
              <div className="text-xl font-bold font-mono text-white">99.98%</div>
            </div>
          </div>
        </div>

        {/* City Filter Pills */}
        <div className="flex flex-wrap items-center gap-2 mb-6">
          <span className="text-xs font-mono text-[#8F9CAE] me-2 hidden sm:inline">
            {isRtl ? 'اختر العقدة المصرفية:' : 'Select Node:'}
          </span>
          {cityHotspots.map((node) => {
            const isSelected = selectedNode.id === node.id;
            return (
              <button
                key={node.id}
                onClick={() => {
                  setSelectedNode(node);
                }}
                className={`px-3 py-1.5 rounded-lg text-xs font-arabic transition-all flex items-center gap-1.5 border ${
                  isSelected 
                    ? 'bg-[#C58F2B] text-black font-bold border-[#C58F2B] shadow-md shadow-[#C58F2B]/20' 
                    : 'bg-[#0B1A2D]/80 hover:bg-[#11253E] text-[#E2DDD3] border-[#22446D]'
                }`}
              >
                <span className={`w-1.5 h-1.5 rounded-full ${isSelected ? 'bg-black' : 'bg-[#3DA66E]'}`} />
                <span>{isRtl ? node.name.ar : node.name.en}</span>
              </button>
            );
          })}
        </div>

        {/* Main Grid: 8K 3D Holographic Map + Interactive HUD Overlay */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          
          {/* Visual 8K 3D Holographic Map with Motion Hotspots */}
          <div className="lg:col-span-8 bg-[#0B1A2D] rounded-2xl border border-[#22446D] overflow-hidden shadow-2xl relative flex flex-col justify-between group">
            
            {/* Top Bar inside Map Frame */}
            <div className="absolute top-4 start-4 z-20 flex items-center gap-2 bg-[#071321]/90 backdrop-blur-md px-3.5 py-1.5 rounded-xl border border-[#22446D] text-xs font-mono text-[#DDC99B] shadow-lg">
              <span className="w-2 h-2 rounded-full bg-[#3DA66E] animate-pulse" />
              <span>SUDAN NATIONAL BANKING GRID • ISO 20022</span>
            </div>

            <div className="absolute top-4 end-4 z-20 flex items-center gap-2 bg-[#071321]/90 backdrop-blur-md px-3.5 py-1.5 rounded-xl border border-[#22446D] text-xs font-mono text-[#2F88C2] shadow-lg">
              <Radio className="w-3.5 h-3.5 animate-pulse text-[#2F88C2]" />
              <span>TELEMETRY: LIVE</span>
            </div>

            {/* 3D Holographic Image Canvas with Hotspot Overlay */}
            <div className="relative w-full aspect-[16/9] overflow-hidden select-none bg-black">
              <Image
                src="/images/sudan-banking-map.jpg"
                alt="Digital Sudan Banking Topology Map"
                fill
                priority
                className="object-cover object-center transform transition-transform duration-1000 group-hover:scale-[1.02]"
                sizes="(max-width: 1024px) 100vw, 66vw"
              />

              {/* Holographic Scanline Overlay */}
              <div 
                className="absolute inset-0 pointer-events-none opacity-20"
                style={{
                  backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(47, 136, 194, 0.15) 2px, rgba(47, 136, 194, 0.15) 4px)'
                }}
              />

              {/* Radial Vignette */}
              <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-[#0B1A2D] via-transparent to-transparent opacity-80" />

              {/* Interactive Hotspot Beacons */}
              {cityHotspots.map((node) => {
                const isSelected = selectedNode.id === node.id;
                const isCore = node.type === 'cbos_core';
                const isExec = node.type === 'cbos_exec';

                return (
                  <div
                    key={node.id}
                    style={{
                      top: `${node.topPct}%`,
                      left: `${node.leftPct}%`,
                      transform: 'translate(-50%, -50%)'
                    }}
                    className="absolute z-20 cursor-pointer"
                    onClick={() => {
                      setSelectedNode(node);
                    }}
                    onMouseEnter={() => setHoveredNode(node)}
                    onMouseLeave={() => setHoveredNode(null)}
                  >
                    {/* Outer Radar Ping Ring */}
                    <span 
                      className={`absolute -inset-3 rounded-full opacity-60 animate-ping ${
                        isCore ? 'bg-[#C58F2B]' : isExec ? 'bg-[#2F88C2]' : 'bg-[#3DA66E]'
                      }`}
                      style={{ animationDuration: isCore ? '2s' : '3s' }}
                    />

                    {/* Outer Glowing Border */}
                    <div 
                      className={`relative w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
                        isSelected 
                          ? 'ring-4 ring-white shadow-2xl scale-125' 
                          : 'ring-2 ring-white/60 hover:scale-110'
                      } ${
                        isCore 
                          ? 'bg-[#C58F2B] text-black shadow-lg shadow-[#C58F2B]/50' 
                          : isExec 
                          ? 'bg-[#2F88C2] text-white shadow-lg shadow-[#2F88C2]/50' 
                          : 'bg-[#0B1A2D] text-[#3DA66E] border border-[#3DA66E]'
                      }`}
                    >
                      <Building2 className="w-3.5 h-3.5" />
                    </div>

                    {/* Floating City Label Tag */}
                    <div 
                      className={`absolute top-9 left-1/2 -translate-x-1/2 px-2.5 py-0.5 rounded-md text-[10px] font-bold font-arabic whitespace-nowrap shadow-xl transition-all duration-200 pointer-events-none ${
                        isSelected 
                          ? 'bg-white text-black ring-1 ring-black/20' 
                          : 'bg-[#071321]/90 text-white/90 border border-[#22446D]'
                      }`}
                    >
                      {isRtl ? node.name.ar : node.name.en}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Bottom Legend inside Frame */}
            <div className="p-4 bg-[#0B1A2D] border-t border-[#22446D] flex flex-wrap items-center justify-between gap-4 text-xs font-mono text-[#8F9CAE]">
              <div className="flex flex-wrap items-center gap-4">
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#C58F2B]" />
                  <span className="text-[#DDC99B] font-medium">{isRtl ? 'المقر السيادي (الخرطوم)' : 'Khartoum HQ Core'}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#2F88C2]" />
                  <span className="text-[#2F88C2] font-medium">{isRtl ? 'مركز العمليات والمقسم (بورتسودان)' : 'Port Sudan Executive Node'}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#3DA66E]" />
                  <span className="text-white font-medium">{isRtl ? 'العقد المصرفية الولائية' : 'State Regional Hubs'}</span>
                </div>
              </div>
              <div className="text-[#3DA66E] font-bold flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-[#3DA66E] animate-pulse" />
                <span>ATOMIC RTGS SETTLEMENT SYNCHRONIZED</span>
              </div>
            </div>

          </div>

          {/* Right Column: Interactive Node Inspector HUD */}
          <div className="lg:col-span-4 flex flex-col justify-between space-y-4">
            
            {/* Selected Node Details Card */}
            <div className="bg-[#0B1A2D] rounded-2xl border border-[#B99553]/40 p-5 shadow-xl relative overflow-hidden flex-1 flex flex-col justify-between">
              
              <div>
                <div className="flex items-center justify-between mb-3 border-b border-[#22446D] pb-3">
                  <div className="flex items-center gap-2 text-xs font-mono font-bold text-[#C58F2B] uppercase">
                    <Server className="w-4 h-4 text-[#C58F2B]" />
                    <span>{activeNode.type === 'cbos_core' ? 'CENTRAL HUB' : activeNode.type === 'cbos_exec' ? 'EXEC SWITCH' : 'REGIONAL NODE'}</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-[11px] font-mono text-[#3DA66E]">
                    <span className="w-2 h-2 rounded-full bg-[#3DA66E]" />
                    <span>ONLINE</span>
                  </div>
                </div>

                <div className="flex items-center gap-3 mb-2">
                  <div className={`w-11 h-11 rounded-xl flex items-center justify-center font-bold text-lg shadow-inner ${
                    activeNode.type === 'cbos_core' 
                      ? 'bg-[#C58F2B]/20 text-[#C58F2B] border border-[#C58F2B]' 
                      : activeNode.type === 'cbos_exec'
                      ? 'bg-[#2F88C2]/20 text-[#2F88C2] border border-[#2F88C2]'
                      : 'bg-[#3DA66E]/20 text-[#3DA66E] border border-[#3DA66E]'
                  }`}>
                    <Building2 className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold font-arabic text-white">
                      {isRtl ? activeNode.name.ar : activeNode.name.en}
                    </h3>
                    <div className="text-xs font-mono text-[#8F9CAE]">
                      {activeNode.branches} {isRtl ? 'فرعاً مصرفياً معتمداً' : 'Authorized Branches'}
                    </div>
                  </div>
                </div>

                <p className="text-xs text-[#E2DDD3] leading-relaxed my-3 font-sans pb-3 border-b border-[#22446D]">
                  {isRtl ? activeNode.role.ar : activeNode.role.en}
                </p>

                {/* Telemetry Metrics Grid */}
                <div className="grid grid-cols-2 gap-2 mb-4 text-xs font-mono">
                  <div className="bg-[#11253E] p-2.5 rounded-lg border border-[#22446D]">
                    <div className="text-[10px] text-[#8F9CAE]">{isRtl ? 'زمن الاستجابة' : 'Ping Latency'}</div>
                    <div className="text-sm font-bold text-[#C58F2B]">{activeNode.latency}</div>
                  </div>
                  <div className="bg-[#11253E] p-2.5 rounded-lg border border-[#22446D]">
                    <div className="text-[10px] text-[#8F9CAE]">{isRtl ? 'البروتوكول' : 'Protocol'}</div>
                    <div className="text-sm font-bold text-white">ISO 20022</div>
                  </div>
                </div>

                {/* Connected Banks List */}
                <div>
                  <div className="text-xs font-mono font-bold text-[#DDC99B] mb-2 uppercase flex items-center justify-between">
                    <span>{isRtl ? 'المصارف والشبكات المتصلة:' : 'Connected Entities:'}</span>
                    <span className="text-[10px] text-[#8F9CAE]">({activeNode.connectedBanks.length})</span>
                  </div>
                  <div className="space-y-1.5 max-h-48 overflow-y-auto pe-1">
                    {activeNode.connectedBanks.map((bank, idx) => (
                      <div 
                        key={idx}
                        className="flex items-center gap-2 px-3 py-2 rounded-lg bg-[#11253E]/70 border border-[#22446D] text-xs text-white"
                      >
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#3DA66E] shrink-0" />
                        <span className="font-arabic font-medium">{isRtl ? bank.ar : bank.en}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Button */}
              {onSelectCity && (
                <button
                  onClick={() => {
                    setIsNavigating(true);
                    onSelectCity({ ar: activeNode.name.ar, en: activeNode.name.en });
                    setTimeout(() => setIsNavigating(false), 1200);
                  }}
                  className="mt-4 w-full py-3 rounded-xl bg-[#2F88C2] hover:bg-[#2574A8] text-white text-xs font-bold transition-all flex items-center justify-center gap-2 shadow-lg shadow-[#2F88C2]/30 active:scale-95 group cursor-pointer"
                >
                  <Search className="w-4 h-4 group-hover:rotate-12 transition-transform" />
                  <span className="font-arabic font-bold text-sm">
                    {isNavigating
                      ? (isRtl ? 'جارِ الانتقال لسجل المؤسسات...' : 'Scrolling to Directory...')
                      : (isRtl ? `عرض مصارف ${activeNode.name.ar} في السجل` : `Filter ${activeNode.name.en} in Directory`)}
                  </span>
                  <ArrowDown className="w-4 h-4 animate-bounce" />
                </button>
              )}

            </div>

            {/* Sovereign Supervision Note */}
            <div className="bg-[#11253E] rounded-xl border border-[#22446D] p-4 text-xs space-y-2">
              <div className="flex items-center gap-2 text-cbos-gold font-mono font-bold uppercase">
                <ShieldCheck className="w-4 h-4 text-[#C58F2B]" />
                <span>{isRtl ? 'حوكمة الرقابة المصرفية المشتركة' : 'Centralized Grid Oversight'}</span>
              </div>
              <p className="text-[#8F9CAE] leading-relaxed text-[11px] font-sans">
                {isRtl 
                  ? 'تخضع كافة التحويلات النقدية اللحظية والتسويات بين البنوك للرقابة المباشرة والامتثال لقانون بنك السودان المركزي لسنة 2002.'
                  : 'All real-time gross settlements and interbank clearing operate under statutory oversight pursuant to the Bank of Sudan Act 2002.'}
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
