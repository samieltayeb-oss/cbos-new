'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useLanguage } from '@/lib/languageContext';
import { 
  Zap, 
  ShieldCheck, 
  Cpu, 
  CreditCard, 
  Layers, 
  ArrowRight, 
  ArrowLeft,
  CheckCircle,
  FileText,
  Lock,
  Boxes
} from 'lucide-react';

export default function PaymentsPage() {
  const { t, isRtl } = useLanguage();
  const ArrowIcon = isRtl ? ArrowLeft : ArrowRight;

  const paymentPillars = [
    {
      code: 'NIPS',
      title: { ar: 'المقسم القومي للمدفوعات الفورية', en: 'National Instant Payment System (NIPS)' },
      status: { ar: 'مشروع التحول السيادي 2026', en: 'Sovereign Flagship 2026' },
      desc: {
        ar: 'العمود الفقري السيادي الجديد لتحويل الأموال الفوري على مدار الساعة (24/7/365) بين الحسابات المصرفية والمحافظ الرقمية في أقل من 10 ثوانٍ، متوافقاً كلياً مع معيار ISO 20022.',
        en: 'The sovereign national rail enabling 24/7/365 instant funds settlement across all commercial banks and mobile wallets in under 10 seconds, built natively on ISO 20022.'
      },
      features: [
        { ar: 'تسوية لحظية ذرية (Atomic Settlement)', en: 'Atomic real-time settlement' },
        { ar: 'معيار الرسائل المالية ISO 20022', en: 'Full ISO 20022 compliance' },
        { ar: 'دعم المعرف المالي الموحد والهاتف ورقم الحساب', en: 'Alias, phone & IBAN routing' },
        { ar: 'تكامل كامل مع البنوك والمحافظ', en: 'Universal interoperability' }
      ]
    },
    {
      code: 'RTGS',
      title: { ar: 'نظام التسوية الإجمالية اللحظية', en: 'Real-Time Gross Settlement (RTGS)' },
      status: { ar: 'نظام مدفوعات القيم الكبيرة', en: 'High-Value Payment System' },
      desc: {
        ar: 'المنظومة المركزية لتسوية المعاملات المالية الضخمة والتحويلات البينية بين المصارف والبنك المركزي بشكل فوري ونهائي غير قابل للإلغاء.',
        en: 'The central system settling large-value, time-critical interbank funds transfers and government debt operations irrevocably on a gross basis.'
      },
      features: [
        { ar: 'تسوية نهائية غير قابلة للإلغاء', en: 'Irrevocable finality of settlement' },
        { ar: 'ضمانات سيولة مسبقة معتمدة', en: 'Prefunded liquidity guarantees' },
        { ar: 'اتصال مباشر بالسويفت SWIFT', en: 'Direct SWIFT integration' }
      ]
    },
    {
      code: 'EBS',
      title: { ar: 'المقسم القومي لبطاقات الدفع (EBS)', en: 'National Card Switch & Processing (EBS)' },
      status: { ar: 'شبكة الصرافات ونقاط البيع', en: 'ATM & POS Retail Switch' },
      desc: {
        ar: 'ربط وتشغيل شبكة أجهزة الصراف الآلي (ATM) ونقاط البيع الإلكترونية (POS) وبطاقات الدفع الوطنية في كافة ولايات السودان.',
        en: 'Operating the nationwide retail payment switch connecting ATMs, point-of-sale (POS) terminals, and national debit/prepaid cards.'
      },
      features: [
        { ar: 'أكثر من 2,500 صراف آلي و 60,000 نقطة بيع', en: '2,500+ ATMs & 60,000+ POS devices' },
        { ar: 'بطاقة الدفع القومية الموحدة', en: 'Unified national payment cards' },
        { ar: 'بوابات التجارة الإلكترونية المصرفية', en: 'E-commerce payment gateways' }
      ]
    },
    {
      code: 'SANDBOX',
      title: { ar: 'المختبر التنظيمي للتقنية المالية (Sandbox)', en: 'FinTech Regulatory Sandbox' },
      status: { ar: 'بيئة الابتكار المالي الخاضعة للتنظيم', en: 'Controlled Innovation Hub' },
      desc: {
        ar: 'بيئة تجريبية آمنة تتيح لرواد الأعمال وشركات التكنولوجيا المالية اختبار حلول الدفع الرقمي والتمويل الجماعي تحت إشراف مباشر من البنك المركزي.',
        en: 'A controlled regulatory environment enabling fintech startups to test novel digital payment solutions and crowdfunding under CBOS supervision.'
      },
      features: [
        { ar: 'تراخيص تجريبية سريعة وموجهة', en: 'Expedited conditional licensing' },
        { ar: 'حماية متقدمة لحقوق المستهلكين', en: 'Rigorous consumer protection' },
        { ar: 'تسهيل الربط مع البنية المصرفية', en: 'Guided core-banking API access' }
      ]
    }
  ];

  return (
    <div className="bg-sand-50 min-h-screen">
      {/* Header Banner */}
      <section 
        className="bg-[#0B1A2D] text-white relative overflow-hidden py-16 lg:py-20 border-b border-[#22446D]"
      >
        <div className="absolute inset-0 bg-guilloche opacity-15 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex items-center gap-3 text-cbos-gold text-xs font-mono uppercase tracking-wider mb-4">
            <Zap className="w-4 h-4" />
            <span>{t({ ar: 'البنية التحتية والتقنية', en: 'Infrastructure & Technology' })}</span>
            <span>/</span>
            <span>{t({ ar: 'نظم الدفع القومية والتحول الرقمي', en: 'National Payment Systems & FinTech' })}</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white max-w-4xl leading-[1.2] mb-4 tracking-normal">
            {t({
              ar: 'البنية التحتية القومية للمدفوعات الرقمية والتسوية اللحظية',
              en: 'National Payment Infrastructure & Sovereign Instant Rails'
            })}
          </h1>

          <p className="text-[#E2DDD3] text-sm sm:text-base max-w-3xl leading-[1.8] font-normal">
            {t({
              ar: 'يقود بنك السودان المركزي ثورة المدفوعات السيادية عبر نشر المقسم القومي للمدفوعات الفورية (NIPS)، وتحديث نظام التسوية الإجمالية اللحظية (RTGS)، وتمكين بيئة التقنية المالية (FinTech) لتعزيز الشمول المالي.',
              en: 'The Central Bank of Sudan is pioneering national payment modernization through the deployment of the National Instant Payment System (NIPS), RTGS upgrading, and fostering a robust FinTech ecosystem.'
            })}
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {/* Flagship NIPS Architecture Spotlight */}
        <div id="nips" className="bg-white border border-[#22446D]/30 border-t-2 border-t-[#2F88C2] rounded-xl p-6 sm:p-10 shadow-lg mb-16 relative overflow-hidden scroll-mt-28">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 pb-8 border-b border-sand-200">
            <div>
              <div className="flex items-center gap-2 text-cbos-gold text-xs font-mono uppercase tracking-wider mb-2">
                <span className="w-2 h-2 rounded-full bg-emerald-500 ring-2 ring-emerald-500/20" />
                <span>SOVEREIGN DIGITAL HIGHWAY • CDNIPS202601</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-cbos-green-950">
                {t({ ar: 'مشروع المقسم القومي للمدفوعات الفورية (NIPS)', en: 'National Instant Payment System (NIPS) Project' })}
              </h2>
              <p className="text-sm text-cbos-ink-muted mt-2 max-w-2xl leading-[1.7]">
                {t({
                  ar: 'منظومة سيادية فائقة التوافر (High-Availability Tier III/IV) تتيح تسوية المدفوعات الفورية على مدار الساعة بين كافة المصارف والمحافظ الإلكترونية عبر معيار الرسائل العالمي ISO 20022.',
                  en: 'A high-availability Tier III/IV sovereign digital platform enabling instantaneous 24/7 payments settlement across all banks and wallets using global ISO 20022 message standards.'
                })}
              </p>
            </div>

            <div className="flex flex-wrap gap-3 shrink-0">
              <Link
                href="/documents"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-cbos-green-900 text-white hover:bg-cbos-green-800 text-xs font-mono font-bold transition-colors"
              >
                <FileText className="w-4 h-4" />
                <span>{t({ ar: 'منشور ضوابط NIPS (CIRC-2026/04)', en: 'NIPS Circular CIRC-2026/04' })}</span>
              </Link>
            </div>
          </div>

          {/* Architecture Schematic Steps */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 pt-8">
            <div className="p-4 rounded-xl bg-sand-50 border border-sand-200">
              <div className="font-mono text-xs font-bold text-cbos-gold mb-1">STEP 01</div>
              <h4 className="font-bold text-sm text-cbos-ink mb-1">{t({ ar: 'بدء المعاملة اللحظية', en: 'Instant Initiation' })}</h4>
              <p className="text-xs text-cbos-ink-muted leading-[1.6]">
                {t({ ar: 'تطبيق العميل أو المحفظة الإلكترونية باستخدام الهاتف أو المعرف المالي.', en: 'Customer app or wallet using mobile number, alias or account.' })}
              </p>
            </div>

            <div className="p-4 rounded-xl bg-sand-50 border border-sand-200">
              <div className="font-mono text-xs font-bold text-cbos-gold mb-1">STEP 02</div>
              <h4 className="font-bold text-sm text-cbos-ink mb-1">{t({ ar: 'توجيه الرسائل (ISO 20022)', en: 'ISO 20022 Routing' })}</h4>
              <p className="text-xs text-cbos-ink-muted leading-[1.6]">
                {t({ ar: 'المقسم المركزي (NIPS Switch) يتحقق من الرصيد والضمان المسبق.', en: 'NIPS Central Switch verifies prefunded RTGS collateral balance.' })}
              </p>
            </div>

            <div className="p-4 rounded-xl bg-sand-50 border border-sand-200">
              <div className="font-mono text-xs font-bold text-cbos-gold mb-1">STEP 03</div>
              <h4 className="font-bold text-sm text-cbos-ink mb-1">{t({ ar: 'التسوية الذرية الفورية', en: 'Atomic Settlement' })}</h4>
              <p className="text-xs text-cbos-ink-muted leading-[1.6]">
                {t({ ar: 'خصم وقيد لحظي متزامن في حسابات الطرفين دون مخاطر ائتمانية.', en: 'Simultaneous bilateral debit and credit without credit exposure.' })}
              </p>
            </div>

            <div className="p-4 rounded-xl bg-sand-50 border border-sand-200">
              <div className="font-mono text-xs font-bold text-cbos-gold mb-1">STEP 04</div>
              <h4 className="font-bold text-sm text-cbos-ink mb-1">{t({ ar: 'التأكيد النهائي (10 ثوانٍ)', en: 'Final Confirmation (<10s)' })}</h4>
              <p className="text-xs text-cbos-ink-muted leading-[1.6]">
                {t({ ar: 'إشعار فوري لطرفي المعاملة وتحديث قيود التسوية المركزية.', en: 'Instant confirmation receipt to both parties with central ledger logs.' })}
              </p>
            </div>
          </div>
        </div>

        {/* Real-World Digital Payments Editorial Showcase */}
        <div className="bg-white border border-sand-300 rounded-xl overflow-hidden shadow-sm mb-16 grid grid-cols-1 lg:grid-cols-12">
          <div className="relative h-72 sm:h-96 lg:h-auto lg:col-span-6 bg-[#0B1A2D]">
            <Image
              src="/images/cbos/payments/sudan-digital-payments-market.webp"
              alt={t({ ar: 'استخدام الدفع الإلكتروني ونقاط البيع في الأسواق السودانية', en: 'Digital POS terminal and mobile payments in Sudanese marketplace' })}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent lg:hidden" />
            <div className="absolute bottom-3 start-4 text-[11px] font-mono text-white/90 bg-black/50 px-2.5 py-1 rounded backdrop-blur-sm">
              OMDURMAN SOVEREIGN RETAIL RAILS • EBS & NIPS
            </div>
          </div>

          <div className="p-8 sm:p-10 lg:col-span-6 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-cbos-gold text-xs font-mono uppercase tracking-wider mb-2">
                <span className="w-2 h-2 rounded-full bg-cbos-green-600" />
                <span>{t({ ar: 'التحول المالي الميداني', en: 'Field Financial Modernization' })}</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-cbos-green-950 mb-3 leading-snug">
                {t({
                  ar: 'واقع المدفوعات ونقاط البيع الإلكترونية في الأسواق السودانية',
                  en: 'Digital Point-of-Sale & Mobile Payment Ecosystem in Sudan'
                })}
              </h3>
              <p className="text-sm text-cbos-ink-muted leading-[1.8] mb-6">
                {t({
                  ar: 'يشهد السوق السوداني تحولاً متسارعاً نحو المدفوعات غير النقدية عبر التوسع في نشر أجهزة نقاط البيع (POS) وتطبيقات الدفع عبر الهاتف المحمول في الأسواق التجارية والمحال بمدن وولايات السودان، مدعومة بالربط المباشر مع المقسم القومي لبطاقات الدفع (EBS) والمقسم القومي للمدفوعات الفورية (NIPS).',
                  en: 'Sudan is accelerating cashless commerce through the widespread deployment of smart POS devices and mobile QR payments across urban markets and state trading hubs, powered by real-time interbank settlement through EBS and the sovereign NIPS switch.'
                })}
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-4 border-t border-sand-200">
                <div className="p-3 rounded-lg bg-sand-50 border border-sand-200">
                  <div className="font-mono text-base font-bold text-cbos-green-950">60,000+</div>
                  <div className="text-[11px] text-cbos-ink-muted leading-tight mt-0.5">
                    {t({ ar: 'نقطة بيع إلكترونية (POS)', en: 'Active POS Terminals' })}
                  </div>
                </div>
                <div className="p-3 rounded-lg bg-sand-50 border border-sand-200">
                  <div className="font-mono text-base font-bold text-cbos-green-950">18</div>
                  <div className="text-[11px] text-cbos-ink-muted leading-tight mt-0.5">
                    {t({ ar: 'ولاية مغطاة بالكامل', en: 'States Covered' })}
                  </div>
                </div>
                <div className="p-3 rounded-lg bg-sand-50 border border-sand-200 col-span-2 sm:col-span-1">
                  <div className="font-mono text-base font-bold text-cbos-gold">&lt; 10s</div>
                  <div className="text-[11px] text-cbos-ink-muted leading-tight mt-0.5">
                    {t({ ar: 'زمن التسوية اللحظية', en: 'Instant Settlement' })}
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-sand-100 flex items-center justify-between text-xs font-mono text-cbos-ink-muted">
              <span>DOCUMENTARY ARCHIVE • SUDAN RETAIL PAYMENTS</span>
              <span className="text-cbos-green-800 font-bold">CBOS 2026</span>
            </div>
          </div>
        </div>

        {/* Payment Rails Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {paymentPillars.map((p) => (
            <div
              key={p.code}
              id={p.code.toLowerCase()}
              className="bg-white border border-sand-300 rounded-xl p-8 shadow-sm hover:border-cbos-green-700 transition-all flex flex-col justify-between scroll-mt-28"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono text-xs font-bold px-3 py-1 rounded bg-cbos-green-100 text-cbos-green-900 border border-cbos-green-200">
                    {p.code}
                  </span>
                  <span className="text-xs text-cbos-gold font-bold">
                    {t(p.status)}
                  </span>
                </div>

                <h3 className="font-bold text-2xl text-cbos-ink mb-3 leading-snug">
                  {t(p.title)}
                </h3>

                <p className="text-[13.5px] text-cbos-ink-muted leading-[1.7] mb-6">
                  {t(p.desc)}
                </p>

                <div className="space-y-2 pt-4 border-t border-sand-200">
                  {p.features.map((feat, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs text-cbos-ink font-medium">
                      <CheckCircle className="w-4 h-4 text-cbos-green-700 shrink-0" />
                      <span>{t(feat)}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-sand-100 flex items-center justify-between text-xs font-mono text-cbos-ink-muted">
                <span>CBOS NATIONAL RAILS</span>
                <span className="text-cbos-gold font-bold">24/7/365</span>
              </div>
            </div>
          ))}
        </div>

        {/* Regulatory FinTech Sandbox Application Strip */}
        <div 
          className="bg-[#0B1A2D] text-white rounded-xl p-8 sm:p-10 border border-[#22446D] relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-guilloche opacity-10 pointer-events-none" />
          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="space-y-3 max-w-2xl">
              <div className="flex items-center gap-2 text-cbos-gold text-xs font-mono uppercase tracking-wider">
                <Boxes className="w-4 h-4" />
                <span>FINTECH SANDBOX COHORT 2026</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-normal">
                {t({
                  ar: 'هل أنت شركة تقنية مالية ناشئة؟ انضم إلى المختبر التنظيمي',
                  en: 'Are You a FinTech Innovator? Apply to the Regulatory Sandbox'
                })}
              </h2>
              <p className="text-[#E2DDD3] text-xs sm:text-sm leading-[1.8] font-normal">
                {t({
                  ar: 'يوفر بنك السودان المركزي بيئة تشغيلية خاضعة للمراقبة والتوجيه لاختبار منتجات المدفوعات والتمويل الجماعي والتحويلات الرقمية قبل الحصول على الترخيص النهائي.',
                  en: 'CBOS provides a guided, controlled testing framework for innovative payment, microfinance, and remittances solutions before full commercial licensing.'
                })}
              </p>
            </div>

            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-cbos-gold text-cbos-ink hover:bg-cbos-gold-light font-bold text-sm transition-all shadow-md shrink-0"
            >
              <span>{t({ ar: 'تقديم طلب الانضمام للمختبر', en: 'Apply for Sandbox Cohort' })}</span>
              <ArrowIcon className="w-4 h-4" />
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}
