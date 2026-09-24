'use client';

import React from 'react';
import { useLanguage } from '@/lib/languageContext';
import { ShieldCheck, Lock, Eye, FileText, CheckCircle2, Building, Scale } from 'lucide-react';

export default function PrivacyPage() {
  const { isRtl, t } = useLanguage();

  return (
    <div className="bg-sand-50 min-h-screen">
      {/* Header Banner */}
      <section 
        className="text-white relative overflow-hidden py-16 lg:py-20 border-b border-[#075A3A]"
        style={{ backgroundColor: '#032A1E' }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex items-center gap-3 text-[#DDC99B] text-xs font-mono uppercase tracking-wider mb-4">
            <Lock className="w-4 h-4 text-[#B99553]" />
            <span>{isRtl ? 'الأطر القانونية والسيادية' : 'Legal & Sovereign Framework'}</span>
            <span>/</span>
            <span>{isRtl ? 'سياسة الخصوصية وحماية البيانات' : 'Privacy & Data Protection Policy'}</span>
          </div>

          <h1 className="text-3xl lg:text-4xl font-extrabold text-white mb-4 font-display">
            {isRtl ? 'سياسة الخصوصية وحماية البيانات السيادية' : 'Sovereign Privacy & Data Protection Policy'}
          </h1>
          <p className="text-base text-[#E2DDD3] max-w-3xl leading-relaxed font-sans">
            {isRtl
              ? 'يلتزم بنك السودان المركزي بأقصى معايير حماية البيانات وسرية المعاملات المصرفية والمعلومات الشخصية للمتعاملين مع البوابة الرقمية وأنظمة الدفع القومية، وفقاً لأحكام القوانين الوطنية والمواثيق الدولية.'
              : 'The Central Bank of Sudan is committed to the highest standards of data security, banking confidentiality, and personal information safeguarding across its digital platforms and payment rails.'}
          </p>

          <div className="mt-8 flex flex-wrap gap-4 text-xs font-mono">
            <div className="px-3.5 py-1.5 rounded-lg bg-[#075A3A]/60 border border-[#B99553]/40 flex items-center gap-2">
              <span className="text-[#DDC99B]">{isRtl ? 'تاريخ التحديث:' : 'Last Updated:'}</span>
              <span className="font-bold text-white">2026-09-01</span>
            </div>
            <div className="px-3.5 py-1.5 rounded-lg bg-[#075A3A]/60 border border-[#B99553]/40 flex items-center gap-2">
              <span className="text-[#DDC99B]">{isRtl ? 'المرجعية القانونية:' : 'Governing Law:'}</span>
              <span className="font-bold text-white">{isRtl ? 'قانون العمل المصرفي 2004' : 'Banking Act 2004'}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-2xl p-8 md:p-12 border border-sand-300 shadow-sm space-y-8 text-xs text-cbos-ink leading-relaxed font-sans">
          
          <div className="space-y-3">
            <h2 className="text-lg font-bold text-cbos-green-900 font-display flex items-center gap-2">
              <Scale className="w-5 h-5 text-[#B99553]" />
              <span>{isRtl ? '1. المبادئ الأساسية والسرية المصرفية' : '1. Core Principles & Banking Secrecy'}</span>
            </h2>
            <p className="text-cbos-ink-muted leading-[1.8]">
              {isRtl
                ? 'تخضع كافة البيانات المتبادلة عبر البوابة الرقمية لبنك السودان المركزي لمبدأ السرية المهنية والمصرفية الصارمة المنصوص عليها في المادة (64) من قانون بنك السودان المركزي وقانون تنظيم العمل المصرفي لسنة 2004. لا يجوز إفشاء أي معلومات إلا بموجب أمر قضائي صادر من محكمة مختصة أو وفق نصوص القانون الصريحة.'
                : 'All data transmitted through the CBOS digital platform is strictly governed by institutional banking confidentiality under Section 64 of the CBOS Act and the Regulation of Banking Business Act. No disclosures are permitted except pursuant to an enforceable judicial order.'}
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-lg font-bold text-cbos-green-900 font-display flex items-center gap-2">
              <Eye className="w-5 h-5 text-[#B99553]" />
              <span>{isRtl ? '2. البيانات التي يتم جمعها والغرض منها' : '2. Information Collected & Purpose'}</span>
            </h2>
            <p className="text-cbos-ink-muted leading-[1.8]">
              {isRtl
                ? 'يقتصر جمع البيانات على الحد الأدنى اللازم لتقديم الخدمات السيادية، ويشمل ذلك: السجلات الفنية لتسجيل الدخول وأمن الخوادم، واستفسارات وشكاوى المستهلكين، وطلبات التقدم للعطاءات والتراخيص المصرفية. لا يتم استخدام أي بيانات لأغراض تجارية أو إعلانية على الإطلاق.'
                : 'Data collection is limited strictly to minimum technical telemetries for cyber protection, formal ombudsman complaints, and vendor procurement bidding. No data is ever monetized or used for commercial marketing.'}
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-lg font-bold text-cbos-green-900 font-display flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-[#B99553]" />
              <span>{isRtl ? '3. التدابير الأمنية والتشفير' : '3. Technical Security & Encryption'}</span>
            </h2>
            <p className="text-cbos-ink-muted leading-[1.8]">
              {isRtl
                ? 'تُطبّق البوابة تشفيراً عسكرياً شاملاً بنظام TLS 1.3 لكافة قنوات الاتصال، مع تخزين البيانات في مراكز بيانات سيادية مشفرة داخل الأراضي السودانية ومحمية بجدران نارية متقدمة تابعة للمركز القومي للمعلومات وفريق CBOS-CERT.'
                : 'The platform employs full TLS 1.3 in-transit encryption and AES-256 at-rest protection housed in sovereign domestic data centers audited by CBOS-CERT.'}
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-lg font-bold text-cbos-green-900 font-display flex items-center gap-2">
              <Lock className="w-5 h-5 text-[#B99553]" />
              <span>{isRtl ? '4. ملفات تعريف الارتباط (Cookies)' : '4. Cookie Policy'}</span>
            </h2>
            <p className="text-cbos-ink-muted leading-[1.8]">
              {isRtl
                ? 'تستخدم البوابة ملفات تعريف ارتباط فنية فقط لضمان حفظ تفضيلات المستخدم (مثل اللغة العربية/الإنجليزية وحجم الخط وحالة التصفح)، ولا تحتوي هذه الملفات على أي معلومات تعريفية شخصية قابلة للتتبع خارج الموقع.'
                : 'Only essential operational cookies are utilized for language preferences and accessibility states. No third-party behavioral trackers are loaded.'}
            </p>
          </div>

          <div className="pt-6 border-t border-sand-200 flex items-center justify-between text-xs text-cbos-ink-muted font-mono">
            <span>CBOS LEGAL COMPLIANCE</span>
            <span>privacy@cbos.gov.sd</span>
          </div>

        </div>
      </section>
    </div>
  );
}
