'use client';

import React from 'react';
import { useLanguage } from '@/lib/languageContext';
import { 
  Users, 
  Smartphone, 
  Sprout, 
  CreditCard, 
  CheckCircle2, 
  ArrowRight, 
  ArrowLeft,
  Building2,
  TrendingUp
} from 'lucide-react';

export default function FinancialInclusionPage() {
  const { isRtl, t } = useLanguage();

  const inclusionPillars = [
    {
      icon: Smartphone,
      title: { ar: 'المدفوعات والمحافظ الإلكترونية عبر الهاتف', en: 'Mobile Money & Digital Wallets' },
      desc: {
        ar: 'توسيع نطاق الحسابات المالية غير المصرفية عبر ربط المحافظ الإلكترونية بالمقسم القومي (NIPS) للوصول لكافة فئات المجتمع.',
        en: 'Scaling non-bank financial accounts by linking mobile wallets with NIPS instant switches for universal accessibility.'
      }
    },
    {
      icon: Sprout,
      title: { ar: 'تمويل القطاعات الإنتاجية والزراعية', en: 'Agricultural & Micro-Enterprise Financing' },
      desc: {
        ar: 'تخصيص نسب إلزامية من التمويل المصرفي لصغار المزارعين والمنتجين عبر صيغ التمويل الأصغر الإسلامية (السلم والمرابحة).',
        en: 'Mandating dedicated credit quotas for smallholder farmers and MSMEs utilizing Sharia-compliant microfinance instruments.'
      }
    },
    {
      icon: Users,
      title: { ar: 'التمكين الاقتصادي للمرأة والشباب', en: 'Women & Youth Economic Empowerment' },
      desc: {
        ar: 'تيسير ضمانات التمويل وتقديم برامج التثقيف المالي الرقمي لدعم ريادة الأعمال والمشاريع الناشئة في جميع الولايات.',
        en: 'Streamlining collateral requirements and rolling out nationwide digital financial literacy programs for youth and women.'
      }
    },
    {
      icon: CreditCard,
      title: { ar: 'شبكة الوكلاء المصرفيين ونقاط الخدمة', en: 'Agent Banking & Rural Access Points' },
      desc: {
        ar: 'نشر شبكات الوكلاء المصرفيين المعتمدين ونقاط البيع في المناطق الريفية التي تفتقر لفروع مصرفية تقليدية.',
        en: 'Deploying accredited agent banking networks and biometric POS devices in remote rural areas devoid of physical branches.'
      }
    }
  ];

  return (
    <div className="bg-sand-50 min-h-screen">
      {/* Header Banner */}
      <section 
        className="text-white relative overflow-hidden py-16 lg:py-20 border-b border-[#075A3A]"
        style={{ backgroundColor: '#032A1E' }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex items-center gap-3 text-[#DDC99B] text-xs font-mono uppercase tracking-wider mb-4">
            <Users className="w-4 h-4 text-[#B99553]" />
            <span>{isRtl ? 'التنمية الاقتصادية والرقابة' : 'Economic Development & Supervision'}</span>
            <span>/</span>
            <span>{isRtl ? 'الاستراتيجية القومية للشمول المالي' : 'National Financial Inclusion Strategy'}</span>
          </div>

          <h1 className="text-3xl lg:text-4xl font-extrabold text-white mb-4 font-display">
            {isRtl ? 'الاستراتيجية القومية للشمول المالي والتحول الرقمي' : 'National Financial Inclusion & Digital Access Strategy'}
          </h1>
          <p className="text-base text-[#E2DDD3] max-w-3xl leading-relaxed font-sans">
            {isRtl
              ? 'مبادرة سيادية يقودها بنك السودان المركزي لدمج كافة المواطنين في المنظومة المالية الرسمية، وتسهيل الوصول للخدمات المصرفية والمدفوعات الإلكترونية بتكلفة عادلة لتعزيز النمو الاقتصادي المستدام.'
              : 'A sovereign national initiative spearheaded by CBOS to integrate all segments of society into the formal financial ecosystem, democratizing access to credit, savings, and instant digital payments.'}
          </p>

          <div className="mt-8 flex flex-wrap gap-4 text-xs font-mono">
            <div className="px-3.5 py-1.5 rounded-lg bg-[#075A3A]/60 border border-[#B99553]/40 flex items-center gap-2">
              <span className="text-[#DDC99B]">{isRtl ? 'مستهدف الشمول 2028:' : 'Inclusion Target 2028:'}</span>
              <span className="font-bold text-white">65% of Adult Population</span>
            </div>
            <div className="px-3.5 py-1.5 rounded-lg bg-[#075A3A]/60 border border-[#B99553]/40 flex items-center gap-2">
              <span className="text-[#DDC99B]">{isRtl ? 'الركيزة التقنية:' : 'Digital Backbone:'}</span>
              <span className="font-bold text-white">NIPS & Agent Banking</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12">
        
        {/* Core Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {inclusionPillars.map((p, i) => {
            const Icon = p.icon;
            return (
              <div key={i} className="bg-white rounded-2xl p-6 md:p-8 border border-sand-300 shadow-sm space-y-4">
                <div className="w-12 h-12 rounded-xl bg-[#075A3A]/10 text-cbos-green-900 flex items-center justify-center">
                  <Icon className="w-6 h-6 text-cbos-green-900" />
                </div>
                <h3 className="font-bold text-lg text-cbos-ink font-display">
                  {t(p.title)}
                </h3>
                <p className="text-xs text-cbos-ink-muted leading-relaxed font-sans">
                  {t(p.desc)}
                </p>
              </div>
            );
          })}
        </div>

        {/* CTA Banner */}
        <div className="bg-[#032A1E] text-white rounded-2xl p-8 border border-cbos-green-800 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 max-w-2xl">
            <h3 className="text-xl font-bold font-display text-white">
              {isRtl ? 'المقسم القومي للمدفوعات الفورية (NIPS)' : 'National Instant Payment System (NIPS)'}
            </h3>
            <p className="text-xs text-[#E2DDD3] leading-relaxed font-sans">
              {isRtl
                ? 'استكشف البنية التحتية السيادية التي تمكّن كافة المصارف ومحافظ الهاتف من التحويل اللحظي المجاني في جميع أنحاء السودان.'
                : 'Explore the sovereign infrastructure enabling cross-bank and mobile wallet instant clearing across all states of Sudan.'}
            </p>
          </div>

          <a
            href="/payments"
            className="px-6 py-3 rounded-xl bg-[#B99553] text-cbos-ink hover:bg-[#D4AF37] font-bold text-xs flex items-center gap-2 shadow-lg transition-all shrink-0"
          >
            <span>{isRtl ? 'استعراض بوابة المدفوعات' : 'Explore Payments Rail'}</span>
            {isRtl ? <ArrowLeft className="w-4 h-4" /> : <ArrowRight className="w-4 h-4" />}
          </a>
        </div>

      </section>
    </div>
  );
}
