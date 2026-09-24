'use client';

import React, { useState } from 'react';
import { useLanguage } from '@/lib/languageContext';
import { 
  ShieldAlert, 
  CheckCircle2, 
  HelpCircle, 
  FileText, 
  Send, 
  Phone, 
  Mail, 
  Building, 
  Scale, 
  UserCheck,
  AlertCircle
} from 'lucide-react';

export default function ConsumerProtectionPage() {
  const { isRtl, t } = useLanguage();
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    bankName: '',
    accountNumber: '',
    complaintType: 'overcharge',
    details: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const consumerRights = [
    {
      title: { ar: 'الشفافية والإفصاح العادل', en: 'Transparency & Fair Disclosure' },
      desc: {
        ar: 'حق العميل في معرفة كافة الرسوم والعمولات المصرفية وأسعار الصرف الرسمية قبل إتمام أي معاملة دون بنود مخفية.',
        en: 'Right to clear, upfront disclosure of all banking fees, commissions, and official FX rates prior to transaction execution.'
      }
    },
    {
      title: { ar: 'سرية وأمان البيانات المصرفية', en: 'Data Privacy & Banking Secrecy' },
      desc: {
        ar: 'حماية قانونية كاملة لبيانات الحسابات والأرصدة والمعاملات بموجب قانون العمل المصرفي لعام 2004.',
        en: 'Legal protection of banking account details and balances pursuant to the Regulation of Banking Business Act.'
      }
    },
    {
      title: { ar: 'الحماية من الممارسات غير العادلة', en: 'Protection from Unfair Practices' },
      desc: {
        ar: 'حظر فرض غرامات أو استقطاعات غير مرخصة من البنك المركزي، وحظر المعاملات التمييزية بين العملاء.',
        en: 'Strict prohibition of unauthorized deductions, abusive fee structures, or discriminatory banking practices.'
      }
    },
    {
      title: { ar: 'آلية سريعة لفض النزاعات والشكاوى', en: 'Speedy Dispute Resolution' },
      desc: {
        ar: 'إلزام المصارف بالرد على شكاوى العملاء خلال 7 أيام عمل، وتصعيد الشكوى تلقائياً للبنك المركزي حال عدم الحل.',
        en: 'Mandatory 7-day bank resolution window, with automatic escalation to the CBOS Ombudsman if unresolved.'
      }
    }
  ];

  return (
    <div className="bg-sand-50 min-h-screen">
      {/* Header Banner */}
      <section 
        className="text-white relative overflow-hidden py-16 lg:py-20 border-b border-[#22446D]"
        style={{ backgroundColor: '#0B1A2D' }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex items-center gap-3 text-[#DDC99B] text-xs font-mono uppercase tracking-wider mb-4">
            <Scale className="w-4 h-4 text-[#B99553]" />
            <span>{isRtl ? 'الرقابة المصرفية والحوكمة' : 'Banking Supervision & Governance'}</span>
            <span>/</span>
            <span>{isRtl ? 'إدارة حماية عملاء المؤسسات المالية والمصرفية' : 'Financial & Banking Client Protection Directorate'}</span>
          </div>

          <h1 className="text-3xl lg:text-4xl font-extrabold text-white mb-4 font-display">
            {isRtl ? 'حماية عملاء المؤسسات المالية والمصرفية وميثاق حقوق المودعين' : 'Protection of Financial & Banking Clients & Depositor Rights'}
          </h1>
          <p className="text-base text-[#E2DDD3] max-w-3xl leading-relaxed font-sans">
            {isRtl
              ? 'يضمن بنك السودان المركزي المعاملة العادلة لكافة المتعاملين مع الجهاز المصرفي والمؤسسات المالية، وحماية الودائع والمدخرات، واستقبال والتحقيق في الشكاوى والنزاعات المصرفية عبر قنوات رسمية ميسرة.'
              : 'The Central Bank of Sudan guarantees fair treatment for all bank customers, safeguards public deposits, and provides a direct, independent ombudsman portal for filing and investigating financial grievances.'}
          </p>

          <div className="mt-8 flex flex-wrap gap-4 text-xs font-mono">
            <div className="px-3.5 py-1.5 rounded-lg bg-[#2F88C2]/60 border border-[#B99553]/40 flex items-center gap-2">
              <span className="text-[#DDC99B]">{isRtl ? 'المهلة القانونية للرد:' : 'Bank Response SLA:'}</span>
              <span className="font-bold text-white">{isRtl ? '7 أيام عمل' : '7 Business Days'}</span>
            </div>
            <div className="px-3.5 py-1.5 rounded-lg bg-[#2F88C2]/60 border border-[#B99553]/40 flex items-center gap-2">
              <span className="text-[#DDC99B]">{isRtl ? 'الرقم المجاني الموحد:' : 'Ombudsman Hotline:'}</span>
              <span className="font-bold text-white">1959 / +249 187 056000</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12">
        
        {/* Core Consumer Rights */}
        <div>
          <div className="text-center max-w-2xl mx-auto mb-8">
            <h2 className="text-2xl font-bold text-cbos-ink font-display">
              {isRtl ? 'الحقوق الأساسية لعملاء المؤسسات المالية والمصرفية بالسودان' : 'Fundamental Rights of Financial & Banking Clients'}
            </h2>
            <p className="text-xs text-cbos-ink-muted mt-1 font-sans">
              {isRtl ? 'مستمدة من أحكام قانون تنظيم العمل المصرفي وتعليمات الحوكمة الرقابية' : 'Established under the Regulation of Banking Business Act and CBOS Conduct Codes'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {consumerRights.map((right, idx) => (
              <div key={idx} className="bg-white rounded-xl p-6 border border-sand-300 shadow-sm space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#2F88C2]/10 text-cbos-green-900 flex items-center justify-center font-mono font-bold text-xs">
                    0{idx + 1}
                  </div>
                  <h3 className="font-bold text-base text-cbos-ink font-sans">
                    {t(right.title)}
                  </h3>
                </div>
                <p className="text-xs text-cbos-ink-muted leading-relaxed font-sans pr-11 rtl:pr-11 rtl:pl-0 ltr:pl-11 ltr:pr-0">
                  {t(right.desc)}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Complaint Submission Form & Procedure */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Procedure Steps */}
          <div className="lg:col-span-5 bg-white rounded-xl p-6 md:p-8 border border-sand-300 shadow-sm space-y-6">
            <h3 className="text-lg font-bold text-cbos-ink font-display border-b border-sand-200 pb-3">
              {isRtl ? 'خطوات تقديم ومتابعة الشكوى' : 'Grievance Redressal Procedure'}
            </h3>

            <div className="space-y-4 text-xs font-sans">
              <div className="flex items-start gap-3">
                <span className="w-6 h-6 rounded-full bg-cbos-green-900 text-white flex items-center justify-center text-[11px] font-bold shrink-0 mt-0.5">
                  1
                </span>
                <div>
                  <h4 className="font-bold text-cbos-ink text-sm">{isRtl ? 'التقديم للمصرف المعني أولاً' : 'File with the Bank First'}</h4>
                  <p className="text-cbos-ink-muted mt-0.5">{isRtl ? 'يجب التقدم بالشكوى رسمياً لوحدة الشكاوى بالمصرف المعني والحصول على رقم تتبع مرجعي.' : 'Lodge your complaint with the offending bank and secure a formal reference tracking number.'}</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="w-6 h-6 rounded-full bg-cbos-green-900 text-white flex items-center justify-center text-[11px] font-bold shrink-0 mt-0.5">
                  2
                </span>
                <div>
                  <h4 className="font-bold text-cbos-ink text-sm">{isRtl ? 'انتظار مهلة المعالجة (7 أيام)' : 'Allow 7 Days for Bank Resolution'}</h4>
                  <p className="text-cbos-ink-muted mt-0.5">{isRtl ? 'يلتزم المصرف بالتحقيق في الشكوى وإفادة العميل كتابياً أو معالجة الخلل المالي.' : 'The bank is required by CBOS regulations to investigate and reply formally within 7 days.'}</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="w-6 h-6 rounded-full bg-[#B99553] text-cbos-ink flex items-center justify-center text-[11px] font-bold shrink-0 mt-0.5">
                  3
                </span>
                <div>
                  <h4 className="font-bold text-cbos-ink text-sm">{isRtl ? 'التصعيد للبنك المركزي' : 'Escalate to CBOS Ombudsman'}</h4>
                  <p className="text-cbos-ink-muted mt-0.5">{isRtl ? 'إذا لم يستجب المصرف أو كان الرد غير منصف، يحق للعميل تصعيد الشكوى مباشرة لبنك السودان المركزي.' : 'If the bank fails to respond or the response is unsatisfactory, escalate directly via this portal.'}</p>
                </div>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-sand-50 border border-sand-200 text-xs text-cbos-ink-muted space-y-2">
              <div className="font-bold text-cbos-ink flex items-center gap-1.5">
                <AlertCircle className="w-4 h-4 text-cbos-gold" />
                <span>{isRtl ? 'الحالات التي لا يقبلها البنك المركزي:' : 'Matters Outside Jurisdiction:'}</span>
              </div>
              <ul className="list-disc list-inside space-y-1 text-[11px]">
                <li>{isRtl ? 'النزاعات المعروضة أمام المحاكم القضائية.' : 'Cases currently pending before judicial courts.'}</li>
                <li>{isRtl ? 'الشكاوى التي مضى عليها أكثر من عام دون سبب قاهر.' : 'Disputes exceeding one year without reasonable cause.'}</li>
              </ul>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-7 bg-white rounded-xl p-6 md:p-8 border border-sand-300 shadow-sm space-y-6">
            <h3 className="text-lg font-bold text-cbos-ink font-display border-b border-sand-200 pb-3">
              {isRtl ? 'نموذج تسجيل شكوى مصرفية رسمية' : 'Submit Formal Banking Grievance Form'}
            </h3>

            {submitted ? (
              <div className="p-8 text-center bg-emerald-50 rounded-xl border border-emerald-200 space-y-3">
                <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto" />
                <h4 className="text-base font-bold text-emerald-900 font-sans">
                  {isRtl ? 'تم استلام شكواك بنجاح' : 'Grievance Submitted Successfully'}
                </h4>
                <p className="text-xs text-emerald-700 max-w-md mx-auto font-sans leading-relaxed">
                  {isRtl 
                    ? 'رقم المتابعة السيادي: CBOS-GRV-2026-8941. ستقوم إدارة حماية المستهلك المالي بمراجعة ملف الشكوى ومخاطبة المصرف المعني والتواصل معك خلال 48 ساعة.'
                    : 'Reference Number: CBOS-GRV-2026-8941. The Consumer Protection Directorate will review your case with the bank and contact you within 48 hours.'}
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 text-xs font-sans">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="font-bold text-cbos-ink">{isRtl ? 'الاسم الكامل للعميل *' : 'Full Name *'}</label>
                    <input
                      type="text"
                      required
                      placeholder={isRtl ? 'الاسم رباعي' : 'Full legal name'}
                      className="w-full bg-sand-50 border border-sand-300 rounded-xl p-2.5 text-xs focus:outline-none focus:border-cbos-green-700"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="font-bold text-cbos-ink">{isRtl ? 'رقم الهاتف للتواصل *' : 'Phone Number *'}</label>
                    <input
                      type="tel"
                      required
                      placeholder="+249 ..."
                      className="w-full bg-sand-50 border border-sand-300 rounded-xl p-2.5 text-xs focus:outline-none focus:border-cbos-green-700"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="font-bold text-cbos-ink">{isRtl ? 'المصرف أو المؤسسة المشكو ضدها *' : 'Bank or Financial Institution *'}</label>
                    <input
                      type="text"
                      required
                      placeholder={isRtl ? 'مثال: بنك الخرطوم، بنك فيصل...' : 'e.g. Bank of Khartoum, Faisal Islamic...'}
                      className="w-full bg-sand-50 border border-sand-300 rounded-xl p-2.5 text-xs focus:outline-none focus:border-cbos-green-700"
                      value={formData.bankName}
                      onChange={(e) => setFormData({ ...formData, bankName: e.target.value })}
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="font-bold text-cbos-ink">{isRtl ? 'نوع الشكوى *' : 'Grievance Type *'}</label>
                    <select
                      className="w-full bg-sand-50 border border-sand-300 rounded-xl p-2.5 text-xs focus:outline-none focus:border-cbos-green-700"
                      value={formData.complaintType}
                      onChange={(e) => setFormData({ ...formData, complaintType: e.target.value })}
                    >
                      <option value="overcharge">{isRtl ? 'رسوم أو استقطاعات غير مبررة' : 'Unauthorized Fees / Deductions'}</option>
                      <option value="transfer">{isRtl ? 'تعثر تحويل مالي أو دفع رقمي' : 'Failed Transfer or Digital Payment'}</option>
                      <option value="atm">{isRtl ? 'خصم صراف آلي دون استلام نقد' : 'ATM Debit without Cash Dispense'}</option>
                      <option value="delay">{isRtl ? 'تأخير غير مبرر في تقديم الخدمة' : 'Unreasonable Service Delay'}</option>
                      <option value="other">{isRtl ? 'أخرى' : 'Other'}</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="font-bold text-cbos-ink">{isRtl ? 'تفاصيل الشكوى ورقم مرجع المصرف *' : 'Grievance Details & Bank Reference Number *'}</label>
                  <textarea
                    rows={4}
                    required
                    placeholder={isRtl ? 'اشرح وقائع النزاع وتواريخ المحاولات مع المصرف بالتفصيل...' : 'Describe the dispute facts, dates, and previous steps taken with the bank...'}
                    className="w-full bg-sand-50 border border-sand-300 rounded-xl p-3 text-xs focus:outline-none focus:border-cbos-green-700 leading-relaxed"
                    value={formData.details}
                    onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 rounded-xl bg-cbos-green-900 text-white hover:bg-cbos-green-800 transition-colors font-bold text-xs flex items-center justify-center gap-2 shadow-sm"
                >
                  <Send className="w-3.5 h-3.5 text-[#DDC99B]" />
                  <span>{isRtl ? 'إرسال الشكوى رسمياً لإدارة حماية المستهلك' : 'Submit Official Grievance to CBOS'}</span>
                </button>
              </form>
            )}

          </div>

        </div>

      </section>
    </div>
  );
}
