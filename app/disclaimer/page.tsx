'use client';

import React from 'react';
import { useLanguage } from '@/lib/languageContext';
import { AlertCircle, Scale, ShieldAlert, FileText, CheckCircle2 } from 'lucide-react';

export default function DisclaimerPage() {
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
            <Scale className="w-4 h-4 text-[#B99553]" />
            <span>{isRtl ? 'الأطر القانونية والسيادية' : 'Legal & Sovereign Framework'}</span>
            <span>/</span>
            <span>{isRtl ? 'إخلاء المسؤولية والشروط القانونية' : 'Disclaimer & Terms of Use'}</span>
          </div>

          <h1 className="text-3xl lg:text-4xl font-extrabold text-white mb-4 font-display">
            {isRtl ? 'إخلاء المسؤولية والشروط القانونية للاستخدام' : 'Legal Disclaimer & Conditions of Use'}
          </h1>
          <p className="text-base text-[#E2DDD3] max-w-3xl leading-relaxed font-sans">
            {isRtl
              ? 'الشروط والأحكام المنظمة لاستخدام البيانات والمعلومات والمنشورات الرسمية المنشورة على البوابة الرقمية لبنك السودان المركزي.'
              : 'Terms and conditions governing the informational use, reproduction, and referencing of data and official circulars published on the CBOS portal.'}
          </p>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-2xl p-8 md:p-12 border border-sand-300 shadow-sm space-y-8 text-xs text-cbos-ink leading-relaxed font-sans">
          
          <div className="space-y-3">
            <h2 className="text-lg font-bold text-cbos-green-900 font-display flex items-center gap-2">
              <AlertCircle className="w-5 h-5 text-[#B99553]" />
              <span>{isRtl ? '1. طبيعة أسعار الصرف التأشيرية' : '1. Nature of Indicative FX Rates'}</span>
            </h2>
            <p className="text-cbos-ink-muted leading-[1.8]">
              {isRtl
                ? 'تُعد أسعار صرف العملات الأجنبية المنشورة على هذه البوابة أسعاراً تأشيرية وإحصائية صادرة عن بنك السودان المركزي تعكس متوسطات التداول اليومية لدى المصارف والصرافات المرخصة. لا يتحمل البنك المركزي أي التزام بالبيع أو الشراء بناءً على هذه الأسعار للجمهور، حيث تتم المعاملات عبر القنوات المصرفية المعتمدة وفق آليات السوق والضوابط السارية.'
                : 'Exchange rates displayed on this portal represent daily indicative and statistical averages calculated from licensed bank transactions. They do not constitute an open bid/ask offer from CBOS to individual retail counterparties.'}
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-lg font-bold text-cbos-green-900 font-display flex items-center gap-2">
              <FileText className="w-5 h-5 text-[#B99553]" />
              <span>{isRtl ? '2. حجية المنشورات والتشريعات' : '2. Legal Authority of Published Circulars'}</span>
            </h2>
            <p className="text-cbos-ink-muted leading-[1.8]">
              {isRtl
                ? 'النصوص القانونية والمنشورات الرقابية والتعاميم المنشورة على الموقع هي نسخ رقمية رسمية معتمدة. وفي حال نشوء أي خلاف تفسيري، فإن النسخة الورقية الأصلية الموقعة والمختومة والمودعة بإدارة الشؤون القانونية بالبنك المركزي هي المرجع القانوني النهائي الملزم.'
                : 'All circulars and regulatory directives published are official reproductions. In case of textual discrepancy, the certified original signed copy deposited at the CBOS Legal Directorate remains the sole definitive authority.'}
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-lg font-bold text-cbos-green-900 font-display flex items-center gap-2">
              <Scale className="w-5 h-5 text-[#B99553]" />
              <span>{isRtl ? '3. حقوق الملكية الفكرية وإعادة النشر' : '3. Intellectual Property & Citation'}</span>
            </h2>
            <p className="text-cbos-ink-muted leading-[1.8]">
              {isRtl
                ? 'جميع حقوق الملكية الفكرية، بما في ذلك شعار البنك، والتصميم، والبيانات الإحصائية، والبحوث والدراسات، مملوكة لبنك السودان المركزي وجمهورية السودان. يُسمح باستخدام البيانات والإحصاءات للأغراض الأكاديمية والبحثية والإعلامية بشرط الإشارة الصريحة إلى مصدرها: (بنك السودان المركزي).'
                : 'All intellectual property rights, crests, layouts, datasets, and publications are the sovereign property of CBOS and the Republic of the Sudan. Academic and informational citations are permitted provided CBOS is credited as the official source.'}
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-lg font-bold text-cbos-green-900 font-display flex items-center gap-2">
              <ShieldAlert className="w-5 h-5 text-[#B99553]" />
              <span>{isRtl ? '4. حدود المسؤولية عن الروابط الخارجية' : '4. Third-Party Links Limitation'}</span>
            </h2>
            <p className="text-cbos-ink-muted leading-[1.8]">
              {isRtl
                ? 'قد تتضمن البوابة روابط لمواقع ومؤسسات حكومية أو دولية أخرى (مثل صندوق النقد الدولي أو البنوك التجارية). لا يتحمل البنك المركزي أي مسؤولية عن محتوى تلك المواقع أو سياسات الخصوصية المطبقة لديها.'
                : 'Links to external institutions or international agencies (such as IMF or BIS) are provided for reference only; CBOS holds no responsibility for third-party platform contents.'}
            </p>
          </div>

          <div className="pt-6 border-t border-sand-200 flex items-center justify-between text-xs text-cbos-ink-muted font-mono">
            <span>OFFICIAL SOVEREIGN DISCLAIMER</span>
            <span>legal@cbos.gov.sd</span>
          </div>

        </div>
      </section>
    </div>
  );
}
