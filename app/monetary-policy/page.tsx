'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useLanguage } from '@/lib/languageContext';
import { 
  TrendingUp, 
  Coins, 
  Scale, 
  ShieldAlert, 
  Calculator, 
  FileText, 
  ArrowRight, 
  ArrowLeft,
  CheckCircle,
  HelpCircle
} from 'lucide-react';

export default function MonetaryPolicyPage() {
  const { t, isRtl } = useLanguage();
  const ArrowIcon = isRtl ? ArrowLeft : ArrowRight;

  const [depositAmount, setDepositAmount] = useState<number>(10000000);
  const reserveRatio = 18.0; // 18% statutory reserve ratio
  const calculatedReserve = (depositAmount * reserveRatio) / 100;
  const loanableFunds = depositAmount - calculatedReserve;

  const instruments = [
    {
      code: 'SRR',
      name: { ar: 'الاحتياطي النقدي القانوني الإلزامي', en: 'Statutory Reserve Requirement' },
      currentValue: '18.0%',
      type: { ar: 'أداة كمية إلزامية', en: 'Mandatory Quantitative Tool' },
      desc: {
        ar: 'نسبة السيولة النقدية التي يتعين على المصارف التجارية إيداعها لدى بنك السودان المركزي دون عائد كضمان للملاءة واحتواء التوسع الائتماني المفرط.',
        en: 'The mandatory portion of customer deposits that commercial banks must maintain interest-free with the Central Bank to ensure solvency and curtail inflation.'
      }
    },
    {
      code: 'SHAHAMAH',
      name: { ar: 'شهادات إجارة البنك المركزي (شهامة)', en: 'Central Bank Ijarah Certificates (SHAHAMAH)' },
      currentValue: { ar: 'إصدار دوري وفق العائد المتوقع', en: 'Periodic issuance by target yield' },
      type: { ar: 'أداة عمليات سوق مفتوحة إسلامية', en: 'Islamic Open Market Operation' },
      desc: {
        ar: 'صكوك سيادية قائمة على عقود الإجارة المنتهية بالتمليك، تستخدم لامتصاص السيولة الفائضة أو ضخها في النظام المصرفي لتحقيق التوازن النقدي.',
        en: 'Sovereign sukuk backed by lease-to-own assets, utilized by the Central Bank to absorb or inject systemic liquidity for monetary balance.'
      }
    },
    {
      code: 'SHIHAB',
      name: { ar: 'شهادات المشاركة الحكومية (شهاب)', en: 'Government Musharaka Certificates (SHIHAB)' },
      currentValue: { ar: 'متاح للمصارف والمؤسسات', en: 'Available for banks & institutions' },
      type: { ar: 'أداة شراكة سيادية إسلامية', en: 'Sovereign Islamic Partnership Sukuk' },
      desc: {
        ar: 'أداة مالية قائمة على عقد المشاركة في أصول حكومية منتجة تتيح للمصارف توظيف السيولة متوسطة وطويلة الأجل وفق عوائد تشغيلية حقيقية.',
        en: 'Asset-backed partnership securities representing equity in productive public utilities, providing medium-term Islamic liquidity deployment.'
      }
    },
    {
      code: 'LMF',
      name: { ar: 'نافذة إدارة السيولة الإسلامية الطارئة', en: 'Islamic Liquidity Management Facility' },
      currentValue: { ar: 'صيغة المضاربة المقيدة', en: 'Restricted Mudaraba Mode' },
      type: { ar: 'مقرض الملاذ الأخير الإسلامي', en: 'Islamic Lender of Last Resort' },
      desc: {
        ar: 'توفير التمويل المصرفي المؤقت للبنوك التي تواجه نقصاً مؤقتاً في السيولة وفق صيغ المضاربة أو المرابحة الشرعية المعتمدة من الهيئة العليا.',
        en: 'Temporary liquidity assistance facility extended to solvent banks facing short-term liquidity squeezes via vetted Mudaraba contracts.'
      }
    },
    {
      code: 'CREDIT-CAP',
      name: { ar: 'السقوف والموجهات الائتمانية القطاعية', en: 'Sectoral Credit Ceilings & Directives' },
      currentValue: { ar: '70% للقطاعات التنموية', en: '70% priority allocation' },
      type: { ar: 'أداة توجيه نوعي', en: 'Qualitative Allocation Tool' },
      desc: {
        ar: 'توجيه النسبة الأكبر من التمويل المصرفي نحو القطاعات الإنتاجية ذات الأولوية (الزراعة، الصناعة، الصادر، التعدين) وحظر التمويل غير الإنتاجي.',
        en: 'Directing majority credit facilities toward productive real sectors (agriculture, export, manufacturing) while prohibiting speculative lending.'
      }
    },
    {
      code: 'FX-WINDOW',
      name: { ar: 'مزادات ومصفوفة تنظيم النقد الأجنبي', en: 'FX Auction Window & Indicative Bands' },
      currentValue: { ar: 'نطاق تسعير يومي موحد', en: 'Unified daily indicative band' },
      type: { ar: 'أداة استقرار سعر الصرف', en: 'Exchange Rate Stabilization' },
      desc: {
        ar: 'إدارة تدفقات العملات الأجنبية وتوفير النقد للاحتياجات الاستراتيجية الحيوية (الأدوية، القمح، الطاقة) والحد من المضاربات الموازية.',
        en: 'Managing foreign currency flows to prioritize vital strategic imports (medicines, wheat, energy) while curbing parallel market volatility.'
      }
    }
  ];

  return (
    <div className="bg-sand-50 min-h-screen">
      {/* Header Banner */}
      <section 
        className="bg-cbos-green-950 text-white relative overflow-hidden py-16 lg:py-24 border-b border-cbos-gold/30"
        style={{ backgroundColor: '#0B1A2D' }}
      >
        <div className="absolute inset-0 bg-guilloche opacity-15 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex items-center gap-3 text-cbos-gold text-xs font-mono uppercase tracking-wider mb-4">
            <Coins className="w-4 h-4" />
            <span>{t({ ar: 'السياسات والبحوث', en: 'Policy & Research' })}</span>
            <span>/</span>
            <span>{t({ ar: 'السياسة النقدية والأدوات الإسلامية', en: 'Monetary Policy & Islamic Tools' })}</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white max-w-4xl leading-[1.2] mb-6 tracking-normal">
            {t({
              ar: 'إطار السياسة النقدية المتوافقة مع الشريعة الإسلامية',
              en: 'Comprehensive Sharia-Compliant Monetary Policy Framework'
            })}
          </h1>

          <p className="text-[#E2DDD3] text-base sm:text-lg max-w-3xl leading-[1.8] font-normal">
            {t({
              ar: 'يعتمد بنك السودان المركزي إطاراً نقدياً فريداً خالياً تماماً من الفائدة الربوية، مستخدماً أدوات كمية ونوعية مبتكرة كشهادات الصكوك السيادية ونسب الاحتياطي الإلزامي للحفاظ على الاستقرار السعري ودعم النمو الاقتصادي المتوازن.',
              en: 'The Central Bank of Sudan operates a distinct interest-free monetary regime, deploying non-interest tools such as sovereign asset sukuk, reserve ratios, and sectoral credit allocation to foster price stability and sustainable growth.'
            })}
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        
        {/* Core Policy Matrix */}
        <div className="mb-16">
          <div className="flex items-center justify-between mb-8">
            <div>
              <span className="text-xs font-mono uppercase tracking-wider text-cbos-gold font-bold">
                {t({ ar: 'حزمة الأدوات التشغيلية', en: 'OPERATIONAL INSTRUMENTS' })}
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-cbos-ink mt-1 tracking-normal">
                {t({ ar: 'أدوات إدارة السيولة النقدية والمصرفية', en: 'Monetary Liquidity Management Tools' })}
              </h2>
            </div>
            <Link 
              href="/documents"
              className="inline-flex items-center gap-2 text-xs font-mono font-bold text-cbos-green-800 hover:text-cbos-gold transition-colors"
            >
              <span>{t({ ar: 'منشورات السياسة النقدية السنوية', en: 'Annual Policy Circulars' })}</span>
              <ArrowIcon className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {instruments.map((inst) => (
              <div 
                key={inst.code}
                className="bg-white border border-sand-300 rounded-xl p-6 shadow-sm hover:border-cbos-green-700 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-mono font-bold bg-cbos-green-100 text-cbos-green-900 px-2.5 py-1 rounded">
                      {inst.code}
                    </span>
                    <span className="text-xs text-cbos-ink-muted font-medium">
                      {t(inst.type)}
                    </span>
                  </div>

                  <h3 className="font-bold text-lg text-cbos-ink mb-2 leading-snug">
                    {t(inst.name)}
                  </h3>

                  <div className="bg-sand-50 border border-sand-200 rounded-lg p-3 my-3">
                    <div className="text-[11px] font-mono text-cbos-ink-muted uppercase">
                      {t({ ar: 'المحدد التشغيلي الحالي', en: 'Current Operational Rate/Setting' })}
                    </div>
                    <div className="text-lg font-bold text-cbos-green-950 mt-0.5">
                      {typeof inst.currentValue === 'string' ? inst.currentValue : t(inst.currentValue)}
                    </div>
                  </div>

                  <p className="text-[13.5px] text-cbos-ink-muted leading-[1.7]">
                    {t(inst.desc)}
                  </p>
                </div>

                <div className="mt-6 pt-3 border-t border-sand-100 flex items-center justify-between text-xs font-mono text-cbos-ink-muted">
                  <span>SHARIA COMPLIANT</span>
                  <span className="text-cbos-gold font-bold">AAOIFI ALIGNED</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Interactive Reserve Calculator & Policy Targets Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">
          
          {/* Statutory Reserve Calculator */}
          <div className="lg:col-span-6 bg-white border border-sand-300 rounded-xl p-6 sm:p-8 shadow-sm">
            <div className="flex items-center gap-3 text-cbos-green-900 font-bold text-xl mb-4 border-b border-sand-200 pb-3">
              <Calculator className="w-5 h-5 text-cbos-gold" />
              <h2>{t({ ar: 'حاسبة الاحتياطي النقدي الإلزامي للمصارف', en: 'Statutory Reserve Requirement Calculator' })}</h2>
            </div>

            <p className="text-xs text-cbos-ink-muted leading-[1.7] mb-6">
              {t({
                ar: 'أداة تقديرية لحساب الاحتياطي النقدي القانوني (18%) والسيولة المتاحة للإقراض التنموي استناداً لحجم الودائع المصرفية الإجمالية.',
                en: 'Estimator tool to compute statutory reserve requirements (18%) and loanable liquidity based on bank customer deposit base.'
              })}
            </p>

            <div className="space-y-4">
              <div>
                <label className="block text-xs font-mono font-bold text-cbos-ink uppercase mb-1">
                  {t({ ar: 'إجمالي ودائع العملاء الخاضعة للاحتياطي (جنيه سوداني)', en: 'Total Subject Deposit Base (SDG)' })}
                </label>
                <div className="relative">
                  <input 
                    type="number"
                    value={depositAmount}
                    onChange={(e) => setDepositAmount(Number(e.target.value) || 0)}
                    className="w-full bg-sand-50 border border-sand-300 rounded-lg px-4 py-2.5 text-base font-mono font-bold text-cbos-ink focus:outline-none focus:border-[#22446D]"
                  />
                  <span className="absolute end-3 top-2.5 text-xs font-mono font-bold text-cbos-ink-muted">
                    SDG
                  </span>
                </div>
              </div>

              {/* Sliders for quick estimation */}
              <div className="flex flex-wrap gap-2 pt-1">
                {[1000000, 10000000, 50000000, 100000000].map((val) => (
                  <button
                    key={val}
                    onClick={() => setDepositAmount(val)}
                    className="text-xs font-mono px-2.5 py-1 rounded bg-sand-100 hover:bg-sand-200 text-cbos-ink transition-colors font-semibold"
                  >
                    {(val / 1000000).toLocaleString()}M SDG
                  </button>
                ))}
              </div>

              {/* Calculation Output Card */}
              <div 
                className="bg-cbos-green-950 text-white rounded-xl p-5 space-y-4 mt-6"
                style={{ backgroundColor: '#0B1A2D' }}
              >
                <div className="flex items-center justify-between border-b border-[#22446D] pb-3">
                  <span className="text-xs text-sand-300">
                    {t({ ar: 'نسبة الاحتياطي القانوني المطبقة', en: 'Statutory Reserve Ratio' })}
                  </span>
                  <span className="text-base font-mono font-bold text-cbos-gold">18.00%</span>
                </div>

                <div className="flex items-center justify-between border-b border-[#22446D] pb-3">
                  <div>
                    <div className="text-xs text-sand-300">
                      {t({ ar: 'الاحتياطي الواجب إيداعه بالمركزي', en: 'Mandatory Central Bank Reserve' })}
                    </div>
                    <div className="text-[10px] text-sand-400 font-mono">NON-INTEREST BEARING</div>
                  </div>
                  <span className="text-lg font-mono font-bold text-white">
                    {calculatedReserve.toLocaleString('en-US', { maximumFractionDigits: 2 })} SDG
                  </span>
                </div>

                <div className="flex items-center justify-between pt-1">
                  <div>
                    <div className="text-xs text-sand-300">
                      {t({ ar: 'السيولة المتبقية المتاحة للتمويل', en: 'Remaining Loanable Liquidity' })}
                    </div>
                    <div className="text-[10px] text-cbos-gold font-mono">MAX 82.00% DEPLOYABLE</div>
                  </div>
                  <span className="text-lg font-mono font-bold text-emerald-400">
                    {loanableFunds.toLocaleString('en-US', { maximumFractionDigits: 2 })} SDG
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Core Objectives & Strategic Goals */}
          <div className="lg:col-span-6 bg-white border border-sand-300 rounded-xl p-6 sm:p-8 shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 text-cbos-green-900 font-bold text-xl mb-4 border-b border-sand-200 pb-3">
                <Scale className="w-5 h-5 text-cbos-gold" />
                <h2>{t({ ar: 'أهداف السياسة النقدية للعام المالي الجاري', en: 'Current Fiscal Year Monetary Objectives' })}</h2>
              </div>

              <div className="space-y-4">
                {[
                  {
                    title: { ar: 'كبح جماح التضخم واستقرار المستوى العام للأسعار', en: 'Inflation Containment & Price Stabilization' },
                    desc: { ar: 'ضبط معدلات نمو الكتلة النقدية (عرض النقود M2) لتتوافق مع النمو الاقتصادي الحقيقي المستهدف دون توليد ضغوط تضخمية.', en: 'Moderating broad money growth (M2) to align with targeted real GDP growth without generating inflationary overhang.' }
                  },
                  {
                    title: { ar: 'استقرار سوق النقد الأجنبي ومحاصرة الفجوة السعرية', en: 'FX Market Stability & Exchange Gap Reduction' },
                    desc: { ar: 'توفير التدفقات النقدية اللازمة لتمويل الواردات الاستراتيجية وتنظيم المزادات وتحفيز تحويلات المغتربين عبر القنوات المصرفية الرسمية.', en: 'Channeling foreign exchange for vital commodities, managing structured auctions, and incentivizing diaspora remittances via official banks.' }
                  },
                  {
                    title: { ar: 'توجيه الائتمان نحو التنمية والإنتاج الحقيقي', en: 'Channeling Credit to Real Productive Sectors' },
                    desc: { ar: 'إلزام المصارف بتوجيه ما لا يقل عن 70% من إجمالي محافظها التمويلية لقطاعات الزراعة، الصناعة التحويلية، والتعدين المنظم.', en: 'Mandating commercial banks to allocate at least 70% of credit portfolios to agriculture, manufacturing, and organized mining.' }
                  }
                ].map((goal, idx) => (
                  <div key={idx} className="p-4 rounded-lg bg-sand-50 border border-sand-200">
                    <div className="font-bold text-sm text-cbos-green-950 mb-1 flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-cbos-gold shrink-0" />
                      <span>{t(goal.title)}</span>
                    </div>
                    <p className="text-[13.5px] text-cbos-ink-muted leading-[1.7] ps-6">
                      {t(goal.desc)}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-sand-200 flex items-center justify-between">
              <span className="text-xs font-mono text-cbos-ink-muted">CBOS MONETARY BULLETIN 2026</span>
              <Link 
                href="/documents" 
                className="text-xs font-bold text-cbos-green-800 hover:text-cbos-gold inline-flex items-center gap-1"
              >
                <span>{t({ ar: 'تحميل المنشور الكامل للسياسة', en: 'Download Full Policy Circular' })}</span>
                <ArrowIcon className="w-3 h-3" />
              </Link>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
