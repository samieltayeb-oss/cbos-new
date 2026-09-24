'use client';

import React, { useState, useEffect } from 'react';
import { useLanguage } from '@/lib/languageContext';
import { 
  Building2, 
  ShieldCheck, 
  Activity, 
  Zap, 
  Radio, 
  Layers, 
  CheckCircle2, 
  Server, 
  RefreshCw,
  Globe2,
  Search
} from 'lucide-react';

interface CityNode {
  id: string;
  name: { ar: string; en: string };
  role: { ar: string; en: string };
  x: number;
  y: number;
  type: 'cbos_core' | 'cbos_exec' | 'regional_hub' | 'major_branch';
  connectedBanks: { ar: string; en: string }[];
  status: 'online' | 'standby';
  latency: string;
  branches: number;
}

const cityNodes: CityNode[] = [
  {
    id: 'khartoum',
    name: { ar: 'الخرطوم', en: 'Khartoum' },
    role: { ar: 'المقر السيادي التاريخي والمستودع النقدي المركزي', en: 'Historic Sovereign HQ & Central Cash Repository' },
    x: 490,
    y: 310,
    type: 'cbos_core',
    connectedBanks: [
      { ar: 'بنك الخرطوم (BOK)', en: 'Bank of Khartoum (BOK)' },
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
    x: 670,
    y: 190,
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
    x: 520,
    y: 210,
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
    id: 'gedaref',
    name: { ar: 'القضارف', en: 'Gedaref' },
    role: { ar: 'عاصمة التمويل الزراعي ومحفظة الصادرات الحقلية', en: 'Agricultural Finance & Crop Export Hub' },
    x: 580,
    y: 375,
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
    id: 'kassala',
    name: { ar: 'كسلا', en: 'Kassala' },
    role: { ar: 'بوابة التجارة البينية الشرقية والتمويل التجاري', en: 'Eastern Cross-Border Trade & Commercial Finance' },
    x: 630,
    y: 310,
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
    id: 'wadmadani',
    name: { ar: 'ود مدني', en: 'Wad Madani' },
    role: { ar: 'مركز قطاع الجزيرة الزراعي والصناعات الغذائية', en: 'Gezira Agri-Industrial Financial Corridor' },
    x: 515,
    y: 360,
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
    id: 'kosti',
    name: { ar: 'كوستي / ربك', en: 'Kosti / Rabak' },
    role: { ar: 'ملتقى الموانئ النهرية وطرق التجارة الجنوبية', en: 'White Nile Inland Port & Trade Node' },
    x: 470,
    y: 400,
    type: 'regional_hub',
    connectedBanks: [
      { ar: 'فرع بنك السودان المركزي — كوستي', en: 'CBOS Regional Branch Kosti' },
      { ar: 'بنك الثروة الحيوانية', en: 'Animal Resources Bank' }
    ],
    status: 'online',
    latency: '18ms',
    branches: 36
  },
  {
    id: 'elobeid',
    name: { ar: 'الأبيض', en: 'El Obeid' },
    role: { ar: 'سوق المحاصيل القومي والبورصة النقدية لكردفان', en: 'Kordofan Commodity Exchange & Central Cash Depot' },
    x: 380,
    y: 390,
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
    id: 'dongola',
    name: { ar: 'دنقلا', en: 'Dongola' },
    role: { ar: 'القطاع الشمالي والطاقة والتبادل مع مصر', en: 'Northern Sector, Border Trade & Clean Energy' },
    x: 400,
    y: 130,
    type: 'major_branch',
    connectedBanks: [
      { ar: 'فرع بنك السودان المركزي — دنقلا', en: 'CBOS Regional Branch Dongola' },
      { ar: 'بنك النيلين', en: 'Al Neelain Bank' }
    ],
    status: 'online',
    latency: '19ms',
    branches: 28
  },
  {
    id: 'nyala',
    name: { ar: 'نيالا', en: 'Nyala' },
    role: { ar: 'مركز قطاع دارفور للمقاصة النقدية والخدمات المصرفية', en: 'Darfur Sector Clearing & Regional Banking Center' },
    x: 220,
    y: 430,
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
  onSelectCity?: (cityName: string) => void;
}

export default function DigitalBankingMapHero({ onSelectCity }: Props) {
  const { t, isRtl } = useLanguage();
  const [selectedNode, setSelectedNode] = useState<CityNode>(cityNodes[1]); // Default Port Sudan / Khartoum
  const [activeLayer, setActiveLayer] = useState<'all' | 'cbos' | 'commercial' | 'nips'>('all');
  const [packetTick, setPacketTick] = useState<number>(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setPacketTick((prev) => (prev + 1) % 100);
    }, 100);
    return () => clearInterval(timer);
  }, []);

  const totalBranches = cityNodes.reduce((acc, curr) => acc + curr.branches, 0);

  return (
    <section 
      className="relative bg-[#071321] text-white border-b border-[#22446D] overflow-hidden"
      style={{
        backgroundImage: `
          radial-gradient(circle at 50% 20%, rgba(47, 136, 194, 0.15) 0%, transparent 60%),
          radial-gradient(circle at 80% 80%, rgba(197, 143, 43, 0.08) 0%, transparent 50%)
        `
      }}
    >
      {/* Background Matrix Mesh & Scanning Grid */}
      <div 
        className="absolute inset-0 opacity-20 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(34, 68, 109, 0.3) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(34, 68, 109, 0.3) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px'
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-16 relative z-10">
        
        {/* Top Header Badge & Live Ticker */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 mb-8">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#11253E] border border-[#22446D] text-xs font-mono text-[#DDC99B] mb-3">
              <span className="w-2 h-2 rounded-full bg-[#3DA66E] animate-pulse" />
              <span>{isRtl ? 'المقسم القومي وشبكة المقاصة اللحظية (RTGS & NIPS MESH)' : 'NATIONAL SETTLEMENT & RTGS TOPOLOGY MESH'}</span>
            </div>
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-arabic text-white tracking-tight">
              {t({
                ar: 'الخارطة الرقمية للجهاز المصرفي السوداني وشبكة المقاصة القومية',
                en: 'Digital Sudanese Banking Topology & National Settlement Grid'
              })}
            </h1>
            <p className="text-xs sm:text-sm text-[#8F9CAE] font-sans mt-1 max-w-2xl">
              {t({
                ar: 'رصد تفاعلي حي لربط كافة المصارف التجارية والمتخصصة ومزودي نظم الدفع مع بنك السودان المركزي عبر بروتوكولات RTGS و ISO 20022.',
                en: 'Live interactive telemetry connecting all licensed commercial, specialized, and clearing institutions to CBOS via RTGS & ISO 20022 messaging.'
              })}
            </p>
          </div>

          {/* Quick Sovereign Stats Cards */}
          <div className="flex items-center gap-3 shrink-0">
            <div className="bg-[#0B1A2D]/90 border border-[#22446D] rounded-xl px-4 py-2.5 text-center">
              <div className="text-[10px] text-[#8F9CAE] font-mono uppercase">{isRtl ? 'المصارف والجهات المتصلة' : 'Connected Entities'}</div>
              <div className="text-xl font-bold font-mono text-[#3DA66E]">37 / 37</div>
            </div>
            <div className="bg-[#0B1A2D]/90 border border-[#22446D] rounded-xl px-4 py-2.5 text-center">
              <div className="text-[10px] text-[#8F9CAE] font-mono uppercase">{isRtl ? 'زمن الاستجابة اللحظي' : 'Avg Settlement Latency'}</div>
              <div className="text-xl font-bold font-mono text-[#C58F2B]">14.2 ms</div>
            </div>
            <div className="bg-[#0B1A2D]/90 border border-[#22446D] rounded-xl px-4 py-2.5 text-center">
              <div className="text-[10px] text-[#8F9CAE] font-mono uppercase">{isRtl ? 'جاهزية الشبكة' : 'Grid Uptime'}</div>
              <div className="text-xl font-bold font-mono text-white">99.98%</div>
            </div>
          </div>
        </div>

        {/* Main Grid: Interactive Map (Left/Center) + Telemetry Terminal (Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
          
          {/* Interactive SVG Motion Graphic Map Container */}
          <div className="lg:col-span-8 bg-[#0B1A2D]/80 rounded-2xl border border-[#22446D] p-3 sm:p-6 relative overflow-hidden shadow-2xl backdrop-blur-sm">
            
            {/* Map Filter Layer Controls */}
            <div className="absolute top-4 start-4 z-20 flex flex-wrap items-center gap-1.5 bg-[#071321]/90 p-1.5 rounded-lg border border-[#22446D] text-[11px] font-mono">
              <button
                onClick={() => setActiveLayer('all')}
                className={`px-2.5 py-1 rounded transition-colors ${activeLayer === 'all' ? 'bg-[#2F88C2] text-white font-bold' : 'text-[#8F9CAE] hover:text-white'}`}
              >
                {isRtl ? 'كامل الشبكة' : 'All Links'}
              </button>
              <button
                onClick={() => setActiveLayer('cbos')}
                className={`px-2.5 py-1 rounded transition-colors ${activeLayer === 'cbos' ? 'bg-[#C58F2B] text-black font-bold' : 'text-[#8F9CAE] hover:text-white'}`}
              >
                {isRtl ? 'المقر السيادي' : 'Sovereign Dual-Core'}
              </button>
              <button
                onClick={() => setActiveLayer('nips')}
                className={`px-2.5 py-1 rounded transition-colors ${activeLayer === 'nips' ? 'bg-[#3DA66E] text-white font-bold' : 'text-[#8F9CAE] hover:text-white'}`}
              >
                {isRtl ? 'المقسم NIPS' : 'NIPS Clearing'}
              </button>
            </div>

            {/* Live Telemetry Ping Counter in Corner */}
            <div className="absolute top-4 end-4 z-20 flex items-center gap-2 bg-[#071321]/90 px-3 py-1.5 rounded-lg border border-[#22446D] text-[11px] font-mono text-[#3DA66E]">
              <Radio className="w-3.5 h-3.5 animate-pulse text-[#3DA66E]" />
              <span>SYNC PULSE: ACTIVE</span>
            </div>

            {/* SVG Visual Map Canvas */}
            <div className="w-full relative aspect-[4/3] sm:aspect-[16/11] max-h-[520px]">
              <svg 
                viewBox="50 30 720 520" 
                className="w-full h-full select-none"
                style={{ filter: 'drop-shadow(0 0 15px rgba(47, 136, 194, 0.1))' }}
              >
                <defs>
                  {/* Glowing Filters */}
                  <filter id="glow-gold" x="-20%" y="-20%" width="140%" height="140%">
                    <feGaussianBlur stdDeviation="4" result="blur" />
                    <feComposite in="SourceGraphic" in2="blur" operator="over" />
                  </filter>
                  <filter id="glow-blue" x="-20%" y="-20%" width="140%" height="140%">
                    <feGaussianBlur stdDeviation="3" result="blur" />
                    <feComposite in="SourceGraphic" in2="blur" operator="over" />
                  </filter>
                  <linearGradient id="nileGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#2F88C2" stopOpacity="0.8" />
                    <stop offset="100%" stopColor="#1B4D7E" stopOpacity="0.4" />
                  </linearGradient>
                  <linearGradient id="sovereignBeam" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#C58F2B" stopOpacity="0.9" />
                    <stop offset="100%" stopColor="#2F88C2" stopOpacity="0.9" />
                  </linearGradient>
                </defs>

                {/* 1. Sudan Sovereign Geographic Boundary (Stylized Digital Vector) */}
                <path
                  d="M 310,55 L 390,55 L 530,55 L 610,120 L 670,190 L 690,240 L 640,310 L 590,375 L 560,470 L 500,510 L 450,510 L 390,500 L 330,470 L 210,470 L 140,440 L 120,380 L 130,320 L 220,240 L 290,140 Z"
                  fill="rgba(17, 37, 62, 0.4)"
                  stroke="#22446D"
                  strokeWidth="2"
                  strokeDasharray="6 4"
                  className="transition-all duration-700"
                />

                {/* Red Sea Coastline Indicator */}
                <path
                  d="M 610,120 Q 640,150 670,190 Q 685,220 705,250"
                  fill="none"
                  stroke="#2F88C2"
                  strokeWidth="2.5"
                  strokeOpacity="0.5"
                />
                <text x="690" y="160" fill="#2F88C2" fontSize="9" fontFamily="monospace" opacity="0.6">
                  RED SEA (البحر الأحمر)
                </text>

                {/* 2. River Nile Network (Blue Nile + White Nile Confluence at Khartoum) */}
                {/* Main Nile flowing North */}
                <path
                  d="M 490,310 Q 510,260 520,210 Q 535,160 450,170 Q 400,150 395,55"
                  fill="none"
                  stroke="url(#nileGradient)"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
                {/* White Nile from South */}
                <path
                  d="M 470,510 Q 470,440 470,400 Q 475,350 490,310"
                  fill="none"
                  stroke="url(#nileGradient)"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeDasharray="5 2"
                />
                {/* Blue Nile from Southeast */}
                <path
                  d="M 580,480 Q 550,430 515,360 Q 500,335 490,310"
                  fill="none"
                  stroke="url(#nileGradient)"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                />

                {/* 3. Primary Sovereign Trunk Line: Khartoum HQ <-> Port Sudan Ops Hub */}
                <line
                  x1="490"
                  y1="310"
                  x2="670"
                  y2="190"
                  stroke="url(#sovereignBeam)"
                  strokeWidth="3.5"
                  strokeDasharray="10 5"
                  className="animate-pulse"
                />
                {/* Sovereign Data Flow Packet */}
                <circle
                  cx={490 + (670 - 490) * ((packetTick % 50) / 50)}
                  cy={310 + (190 - 310) * ((packetTick % 50) / 50)}
                  r="4"
                  fill="#C58F2B"
                  filter="url(#glow-gold)"
                />

                {/* 4. Secondary Mesh Circuit Lines from CBOS Hub to Regional Nodes */}
                {cityNodes.map((node) => {
                  if (node.id === 'khartoum' || node.id === 'portsudan') return null;
                  
                  // Center node connects to Khartoum
                  const isSelected = selectedNode.id === node.id;
                  return (
                    <g key={`link-${node.id}`}>
                      {/* Connection to Khartoum */}
                      <line
                        x1="490"
                        y1="310"
                        x2={node.x}
                        y2={node.y}
                        stroke={isSelected ? '#C58F2B' : '#22446D'}
                        strokeWidth={isSelected ? '2.5' : '1.2'}
                        strokeDasharray={isSelected ? '6 3' : '3 3'}
                        strokeOpacity={isSelected ? 1 : 0.6}
                      />
                      {/* Secondary connection to Port Sudan for redundancy */}
                      <line
                        x1="670"
                        y1="190"
                        x2={node.x}
                        y2={node.y}
                        stroke="#162D4C"
                        strokeWidth="1"
                        strokeDasharray="2 4"
                        strokeOpacity="0.4"
                      />
                      {/* Animated Data Packets */}
                      {isSelected && (
                        <circle
                          cx={490 + (node.x - 490) * ((packetTick % 40) / 40)}
                          cy={310 + (node.y - 310) * ((packetTick % 40) / 40)}
                          r="3"
                          fill="#3DA66E"
                          filter="url(#glow-blue)"
                        />
                      )}
                    </g>
                  );
                })}

                {/* 5. City Banking Nodes & Radar Beacons */}
                {cityNodes.map((node) => {
                  const isCore = node.type === 'cbos_core';
                  const isExec = node.type === 'cbos_exec';
                  const isSelected = selectedNode.id === node.id;

                  return (
                    <g 
                      key={node.id} 
                      className="cursor-pointer group"
                      onClick={() => {
                        setSelectedNode(node);
                        if (onSelectCity) onSelectCity(node.name.ar);
                      }}
                    >
                      {/* Pulsing Outer Radar Ring */}
                      {(isCore || isExec || isSelected) && (
                        <circle
                          cx={node.x}
                          cy={node.y}
                          r={isCore || isExec ? '20' : '14'}
                          fill="none"
                          stroke={isCore ? '#C58F2B' : isExec ? '#2F88C2' : '#3DA66E'}
                          strokeWidth="1.5"
                          opacity="0.4"
                          className="animate-ping origin-center"
                          style={{ transformOrigin: `${node.x}px ${node.y}px`, animationDuration: '2.5s' }}
                        />
                      )}

                      {/* Node Outer Halo */}
                      <circle
                        cx={node.x}
                        cy={node.y}
                        r={isCore || isExec ? '12' : '8'}
                        fill={isCore ? 'rgba(197, 143, 43, 0.25)' : isExec ? 'rgba(47, 136, 194, 0.25)' : 'rgba(17, 37, 62, 0.7)'}
                        stroke={isSelected ? '#FFFFFF' : isCore ? '#C58F2B' : isExec ? '#2F88C2' : '#3DA66E'}
                        strokeWidth={isSelected ? '2.5' : '1.5'}
                      />

                      {/* Node Core Center Dot */}
                      <circle
                        cx={node.x}
                        cy={node.y}
                        r={isCore || isExec ? '6' : '4'}
                        fill={isCore ? '#C58F2B' : isExec ? '#2F88C2' : '#3DA66E'}
                        filter={isCore ? 'url(#glow-gold)' : 'url(#glow-blue)'}
                      />

                      {/* Node City Label */}
                      <text
                        x={node.x}
                        y={node.y - (isCore || isExec ? 16 : 12)}
                        textAnchor="middle"
                        fill={isSelected ? '#FFFFFF' : isCore ? '#DDC99B' : '#8F9CAE'}
                        fontSize={isCore || isExec ? '11' : '9.5'}
                        fontWeight={isCore || isExec || isSelected ? '700' : '500'}
                        fontFamily="sans-serif"
                        className="transition-colors group-hover:fill-white select-none pointer-events-none"
                      >
                        {isRtl ? node.name.ar : node.name.en}
                      </text>

                      {/* Latency Tag for Core Nodes */}
                      {(isCore || isExec) && (
                        <rect
                          x={node.x - 22}
                          y={node.y + 14}
                          width="44"
                          height="14"
                          rx="3"
                          fill="#071321"
                          stroke={isCore ? '#C58F2B' : '#2F88C2'}
                          strokeWidth="0.8"
                        />
                      )}
                      {(isCore || isExec) && (
                        <text
                          x={node.x}
                          y={node.y + 24}
                          textAnchor="middle"
                          fill={isCore ? '#DDC99B' : '#2F88C2'}
                          fontSize="8"
                          fontFamily="monospace"
                          fontWeight="700"
                        >
                          {isCore ? 'HQ CORE' : 'NIPS HUB'}
                        </text>
                      )}
                    </g>
                  );
                })}
              </svg>
            </div>

            {/* Bottom Legend */}
            <div className="flex flex-wrap items-center justify-between gap-4 pt-3 border-t border-[#22446D] text-[11px] font-mono text-[#8F9CAE]">
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#C58F2B]" />
                  <span>{isRtl ? 'المقر السيادي (الخرطوم)' : 'Sovereign HQ Core'}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#2F88C2]" />
                  <span>{isRtl ? 'مركز العمليات والمقسم (بورتسودان)' : 'Executive Ops & NIPS Core'}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#3DA66E]" />
                  <span>{isRtl ? 'العقد المصرفية الولائية' : 'State Regional Hubs'}</span>
                </div>
              </div>
              <span className="text-[#3DA66E] font-bold">● ISO 20022 / RTGS ATOMIC CLEARED</span>
            </div>
          </div>

          {/* Right Column: Node Telemetry Inspector HUD */}
          <div className="lg:col-span-4 space-y-4">
            
            {/* Selected Node Card */}
            <div className="bg-[#0B1A2D] rounded-2xl border border-[#B99553]/40 p-5 shadow-xl relative overflow-hidden">
              <div className="absolute top-0 end-0 px-3 py-1 bg-[#11253E] border-b border-s border-[#22446D] rounded-es-xl text-[10px] font-mono text-[#C58F2B]">
                {selectedNode.type === 'cbos_core' ? 'CENTRAL HUB' : selectedNode.type === 'cbos_exec' ? 'EXEC SWITCH' : 'REGIONAL NODE'}
              </div>

              <div className="flex items-center gap-3 mb-3">
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center font-bold text-lg ${
                  selectedNode.type === 'cbos_core' 
                    ? 'bg-[#C58F2B]/20 text-[#C58F2B] border border-[#C58F2B]' 
                    : selectedNode.type === 'cbos_exec'
                    ? 'bg-[#2F88C2]/20 text-[#2F88C2] border border-[#2F88C2]'
                    : 'bg-[#3DA66E]/20 text-[#3DA66E] border border-[#3DA66E]'
                }`}>
                  <Building2 className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xl font-bold font-arabic text-white">
                    {isRtl ? selectedNode.name.ar : selectedNode.name.en}
                  </h3>
                  <div className="flex items-center gap-2 text-xs font-mono text-[#8F9CAE]">
                    <span className="w-2 h-2 rounded-full bg-[#3DA66E]" />
                    <span>{isRtl ? 'حالة الاتصال: نشط لحظياً' : 'STATUS: ONLINE'}</span>
                  </div>
                </div>
              </div>

              <p className="text-xs text-[#E2DDD3] leading-relaxed mb-4 pb-3 border-b border-[#22446D] font-sans">
                {isRtl ? selectedNode.role.ar : selectedNode.role.en}
              </p>

              {/* Node Telemetry Metrics */}
              <div className="grid grid-cols-2 gap-2 mb-4 text-xs font-mono">
                <div className="bg-[#11253E] p-2.5 rounded-lg border border-[#22446D]">
                  <div className="text-[10px] text-[#8F9CAE]">{isRtl ? 'زمن الوصول (Latency)' : 'Ping Latency'}</div>
                  <div className="text-sm font-bold text-[#C58F2B]">{selectedNode.latency}</div>
                </div>
                <div className="bg-[#11253E] p-2.5 rounded-lg border border-[#22446D]">
                  <div className="text-[10px] text-[#8F9CAE]">{isRtl ? 'الفروع التابعة' : 'Branch Count'}</div>
                  <div className="text-sm font-bold text-white">{selectedNode.branches} {isRtl ? 'فرع' : 'Units'}</div>
                </div>
              </div>

              {/* Connected Banks List */}
              <div>
                <div className="text-xs font-mono font-bold text-[#DDC99B] mb-2 uppercase flex items-center justify-between">
                  <span>{isRtl ? 'المصارف والشبكات المتصلة بالعقدة:' : 'Connected Entities on Node:'}</span>
                  <span className="text-[10px] text-[#8F9CAE]">({selectedNode.connectedBanks.length})</span>
                </div>
                <div className="space-y-1.5 max-h-48 overflow-y-auto pe-1">
                  {selectedNode.connectedBanks.map((bank, idx) => (
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

              {/* Quick Action Button */}
              {onSelectCity && (
                <button
                  onClick={() => onSelectCity(selectedNode.name.ar)}
                  className="mt-4 w-full py-2.5 rounded-lg bg-[#2F88C2] hover:bg-[#2574A8] text-white text-xs font-bold transition-all flex items-center justify-center gap-2 shadow-md"
                >
                  <Search className="w-3.5 h-3.5" />
                  <span>{isRtl ? `عرض مصارف ${selectedNode.name.ar} في السجل` : `Filter ${selectedNode.name.en} in Directory`}</span>
                </button>
              )}
            </div>

            {/* Sovereign Assurance Badge */}
            <div className="bg-[#11253E] rounded-xl border border-[#22446D] p-4 text-xs space-y-2">
              <div className="flex items-center gap-2 text-cbos-gold font-mono font-bold uppercase">
                <ShieldCheck className="w-4 h-4 text-[#C58F2B]" />
                <span>{isRtl ? 'حوكمة الرقابة المصرفية المشتركة' : 'Centralized Grid Oversight'}</span>
              </div>
              <p className="text-[#8F9CAE] leading-relaxed text-[11px] font-sans">
                {isRtl 
                  ? 'تخضع كافة التحويلات النقدية اللحظية والتسويات بين البنوك للرقابة المباشرة والامتثال لمعايير مكافحة غسل الأموال (AML/CFT) وقانون بنك السودان المركزي لسنة 2002.'
                  : 'All real-time gross settlements and interbank clearing operate under statutory oversight pursuant to the Bank of Sudan Act 2002 and international AML/CFT standards.'}
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
