'use client';

import React, { useState } from 'react';
import { useLanguage } from '@/lib/languageContext';
import { 
  Building2, 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  ShieldAlert, 
  Send, 
  CheckCircle2, 
  HelpCircle,
  Building,
  UserCheck
} from 'lucide-react';

export default function ContactPage() {
  const { t } = useLanguage();
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [selectedBranchFilter, setSelectedBranchFilter] = useState<string>('all');

  const branches = [
    {
      city: { ar: 'بورتسودان', en: 'Port Sudan' },
      state: { ar: 'ولاية البحر الأحمر', en: 'Red Sea State' },
      role: { ar: 'مركز العمليات والإدارة التنفيذية الرئيسي', en: 'Primary Operations & Executive Center' },
      address: { ar: 'شارع الميناء الرئيسي، قرب الميناء الشمالي', en: 'Port Main Avenue, Port Sudan' },
      phone: '+249 311 822 411',
      email: 'portsudan@cbos.gov.sd'
    },
    {
      city: { ar: 'الخرطوم', en: 'Khartoum' },
      state: { ar: 'ولاية الخرطوم', en: 'Khartoum State' },
      role: { ar: 'المقر السيادي التاريخي', en: 'Historic Sovereign Headquarters' },
      address: { ar: 'تقاطع شارع الجامعة مع شارع القصر', en: 'Gamaa Ave & El Qasr St Intersection' },
      phone: '+249 187 055 000',
      email: 'inquiries@cbos.gov.sd'
    },
    {
      city: { ar: 'عطبرة', en: 'Atbara' },
      state: { ar: 'ولاية نهر النيل', en: 'River Nile State' },
      role: { ar: 'فرع ولائي معتمد', en: 'State Regional Branch' },
      address: { ar: 'السوق الكبير، مجمع المصارف', en: 'Main Market, Banking Complex' },
      phone: '+249 211 823 100',
      email: 'atbara@cbos.gov.sd'
    },
    {
      city: { ar: 'القضارف', en: 'Gedaref' },
      state: { ar: 'ولاية القضارف', en: 'Gedaref State' },
      role: { ar: 'فرع ولائي معتمد (القطاع الزراعي)', en: 'State Regional Branch (Agri Sector)' },
      address: { ar: 'شارع المحطة، حي الميدان', en: 'Station Road, El Meidan' },
      phone: '+249 441 842 500',
      email: 'gedaref@cbos.gov.sd'
    },
    {
      city: { ar: 'كسلا', en: 'Kassala' },
      state: { ar: 'ولاية كسلا', en: 'Kassala State' },
      role: { ar: 'فرع ولائي معتمد', en: 'State Regional Branch' },
      address: { ar: 'شارع الجمهورية، جوار وزارة المالية الولائية', en: 'Gomhoria St, near State Finance' },
      phone: '+249 411 822 300',
      email: 'kassala@cbos.gov.sd'
    },
    {
      city: { ar: 'دنقلا', en: 'Dongola' },
      state: { ar: 'الولاية الشمالية', en: 'Northern State' },
      role: { ar: 'فرع ولائي معتمد', en: 'State Regional Branch' },
      address: { ar: 'شارع النيل، وسط المدينة', en: 'Nile St, City Center' },
      phone: '+249 241 821 700',
      email: 'dongola@cbos.gov.sd'
    },
    {
      city: { ar: 'كوستي', en: 'Kosti' },
      state: { ar: 'ولاية النيل الأبيض', en: 'White Nile State' },
      role: { ar: 'فرع ولائي معتمد', en: 'State Regional Branch' },
      address: { ar: 'شارع الحرية، مجمع الدوائر الحكومية', en: 'Horreya St, Government Complex' },
      phone: '+249 571 822 800',
      email: 'kosti@cbos.gov.sd'
    },
    {
      city: { ar: 'ودمدني', en: 'Wad Madani' },
      state: { ar: 'ولاية الجزيرة', en: 'Gezira State' },
      role: { ar: 'فرع ولائي معتمد', en: 'State Regional Branch' },
      address: { ar: 'شارع النيل، مجمع البنوك', en: 'Nile St, Banking District' },
      phone: '+249 511 843 200',
      email: 'wadmadani@cbos.gov.sd'
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <div className="bg-sand-50 min-h-screen">
      {/* Header Banner */}
      <section className="bg-cbos-green-950 text-white relative overflow-hidden py-16 lg:py-20 border-b border-cbos-gold/30">
        <div className="absolute inset-0 bg-guilloche opacity-15 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex items-center gap-3 text-cbos-gold text-xs font-mono uppercase tracking-wider mb-4">
            <Building2 className="w-4 h-4" />
            <span>{t({ ar: 'الاتصال والمواقع السيادية', en: 'Contact & Sovereign Offices' })}</span>
            <span>/</span>
            <span>{t({ ar: 'المقر وشبكة الفروع وحماية المستهلك', en: 'HQ, Branches & Consumer Channel' })}</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white max-w-4xl leading-tight mb-4">
            {t({
              ar: 'المقرات السيادية وشبكة الفروع في ولايات السودان',
              en: 'Sovereign Headquarters & Nationwide Branch Network'
            })}
          </h1>

          <p className="text-sand-300 text-sm sm:text-base max-w-3xl leading-relaxed">
            {t({
              ar: 'قنوات الاتصال الرسمية ببنك السودان المركزي، وفروعه المنتشرة في ولايات السودان، وبوابة حماية عملاء الجهاز المصرفي واستقبال الشكاوى.',
              en: 'Official contact channels for the Central Bank of Sudan, its state branch network across Sudan, and the dedicated banking consumer protection portal.'
            })}
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {/* Sovereign Primary Centers Dual Card */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          
          {/* Port Sudan Primary Ops Center */}
          <div className="bg-white border-2 border-cbos-green-800 rounded-2xl p-6 sm:p-8 shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="px-3 py-1 rounded text-xs font-mono font-bold bg-cbos-green-100 text-cbos-green-900 border border-cbos-green-300">
                  {t({ ar: 'مركز العمليات والإدارة التنفيذية الرئيسي', en: 'Primary Operations & Executive Center' })}
                </span>
                <span className="text-xs font-mono text-emerald-600 font-bold">OPERATIONAL HQ</span>
              </div>

              <h2 className="font-serif font-bold text-2xl text-cbos-green-950 mb-2">
                {t({ ar: 'بورتسودان — ولاية البحر الأحمر', en: 'Port Sudan — Red Sea State' })}
              </h2>
              <p className="text-xs text-ink-muted leading-relaxed mb-6">
                {t({
                  ar: 'مقر إدارة العمليات المصرفية السيادية، مقسم المدفوعات الفورية (NIPS)، إدارة الأسواق المالية والنقد الأجنبي، ومكتب السيد المحافظ.',
                  en: 'Executing sovereign banking operations, NIPS switch oversight, foreign exchange markets, and Governor executive offices.'
                })}
              </p>

              <dl className="space-y-3 text-xs text-ink-base border-t border-sand-200 pt-4">
                <div className="flex items-start gap-2.5">
                  <MapPin className="w-4 h-4 text-cbos-gold shrink-0 mt-0.5" />
                  <span>{t({ ar: 'شارع الميناء الرئيسي، قرب الميناء الشمالي، بورتسودان', en: 'Port Main Avenue, North Port Area, Port Sudan' })}</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Phone className="w-4 h-4 text-cbos-gold shrink-0" />
                  <span className="font-mono font-bold" dir="ltr">+249 311 822 411</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Mail className="w-4 h-4 text-cbos-gold shrink-0" />
                  <span className="font-mono">portsudan@cbos.gov.sd</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Clock className="w-4 h-4 text-cbos-gold shrink-0" />
                  <span>{t({ ar: 'الأحد – الخميس: 8:00 ص – 3:30 م', en: 'Sunday – Thursday: 8:00 AM – 3:30 PM' })}</span>
                </div>
              </dl>
            </div>

            <div className="mt-6 pt-4 border-t border-sand-100 flex items-center justify-between text-xs font-mono text-ink-muted">
              <span>PRIMARY SOVEREIGN SITE</span>
              <span className="text-cbos-gold font-bold">ACTIVE</span>
            </div>
          </div>

          {/* Historic Khartoum Headquarters */}
          <div className="bg-white border border-sand-300 rounded-2xl p-6 sm:p-8 shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="px-3 py-1 rounded text-xs font-mono font-bold bg-sand-100 text-ink-base border border-sand-300">
                  {t({ ar: 'المقر السيادي التاريخي والمستودع القانوني', en: 'Historic Sovereign HQ & Legal Archive' })}
                </span>
                <span className="text-xs font-mono text-ink-muted">EST. 1960</span>
              </div>

              <h2 className="font-serif font-bold text-2xl text-ink-base mb-2">
                {t({ ar: 'الخرطوم — ولاية الخرطوم', en: 'Khartoum — Khartoum State' })}
              </h2>
              <p className="text-xs text-ink-muted leading-relaxed mb-6">
                {t({
                  ar: 'المبنى التاريخي العريق لبنك السودان المركزي الحاضن للأرشيف السيادي والمعلم المؤسسي البارز في العاصمة الوطنية.',
                  en: 'The historic flagship edifice of the Central Bank of Sudan holding sovereign legislative archives in the national capital.'
                })}
              </p>

              <dl className="space-y-3 text-xs text-ink-base border-t border-sand-200 pt-4">
                <div className="flex items-start gap-2.5">
                  <MapPin className="w-4 h-4 text-cbos-gold shrink-0 mt-0.5" />
                  <span>{t({ ar: 'تقاطع شارع الجامعة مع شارع القصر، ص.ب 313 الخرطوم', en: 'Gamaa Avenue & El Qasr Street Intersection, P.O. Box 313' })}</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Phone className="w-4 h-4 text-cbos-gold shrink-0" />
                  <span className="font-mono font-bold" dir="ltr">+249 187 055 000</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Mail className="w-4 h-4 text-cbos-gold shrink-0" />
                  <span className="font-mono">inquiries@cbos.gov.sd</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Clock className="w-4 h-4 text-cbos-gold shrink-0" />
                  <span>{t({ ar: 'المستودع الرقمي والأرشيف القانوني', en: 'Digital Archive & Legal Depositories' })}</span>
                </div>
              </dl>
            </div>

            <div className="mt-6 pt-4 border-t border-sand-100 flex items-center justify-between text-xs font-mono text-ink-muted">
              <span>HISTORIC SOVEREIGN ARCHIVE</span>
              <span className="text-cbos-green-800 font-bold">SOVEREIGN SYMBOL</span>
            </div>
          </div>

        </div>

        {/* State Branches Directory */}
        <div className="mb-16">
          <div className="flex items-center justify-between mb-8">
            <div>
              <span className="text-xs font-mono uppercase tracking-wider text-cbos-gold font-bold">
                {t({ ar: 'الانتشار الجغرافي القومي', en: 'NATIONWIDE PRESENCE' })}
              </span>
              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-ink-base mt-1">
                {t({ ar: 'فروع بنك السودان المركزي في الولايات', en: 'State Regional Branch Network' })}
              </h2>
            </div>
            <span className="text-xs font-mono text-ink-muted">
              {t({ ar: 'إجمالي الفروع المدرجة:', en: 'Listed Branches:' })} {branches.length}
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {branches.map((b, idx) => (
              <div 
                key={idx}
                className="bg-white border border-sand-300 rounded-xl p-5 shadow-sm hover:border-cbos-green-700 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-serif font-bold text-lg text-cbos-green-950">
                      {t(b.city)}
                    </span>
                    <span className="text-[11px] font-mono text-ink-muted bg-sand-100 px-2 py-0.5 rounded">
                      {t(b.state)}
                    </span>
                  </div>

                  <p className="text-xs text-cbos-gold font-medium mb-3">
                    {t(b.role)}
                  </p>

                  <div className="space-y-2 text-xs text-ink-muted border-t border-sand-200 pt-3">
                    <div className="flex items-start gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-cbos-green-800 shrink-0 mt-0.5" />
                      <span>{t(b.address)}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Phone className="w-3.5 h-3.5 text-cbos-green-800 shrink-0" />
                      <span className="font-mono" dir="ltr">{b.phone}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Mail className="w-3.5 h-3.5 text-cbos-green-800 shrink-0" />
                      <span className="font-mono text-[11px]">{b.email}</span>
                    </div>
                  </div>
                </div>

                <div className="mt-4 pt-2 border-t border-sand-100 text-[10px] font-mono text-ink-muted text-end">
                  CBOS REGIONAL
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Consumer Protection & Inquiries Dual Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Official Inquiries Form */}
          <div className="lg:col-span-7 bg-white border border-sand-300 rounded-2xl p-6 sm:p-8 shadow-sm">
            <div className="flex items-center gap-3 text-cbos-green-900 font-serif font-bold text-xl mb-4 border-b border-sand-200 pb-3">
              <Mail className="w-5 h-5 text-cbos-gold" />
              <h2>{t({ ar: 'نموذج الاستفسارات والمراسلات الرسمية', en: 'Official Inquiries & Public Correspondence' })}</h2>
            </div>

            <p className="text-xs text-ink-muted leading-relaxed mb-6">
              {t({
                ar: 'يتم توجيه كافة المراسلات إلكترونياً إلى الإدارة العامة المختصة ببنك السودان المركزي، وتخضع لسجلات القيد الرسمية.',
                en: 'All correspondence is electronically routed to the competent CBOS directorate under official institutional registry logs.'
              })}
            </p>

            {formSubmitted ? (
              <div className="p-8 rounded-xl bg-emerald-50 border border-emerald-200 text-center space-y-3">
                <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto" />
                <h3 className="font-serif font-bold text-lg text-emerald-950">
                  {t({ ar: 'تم استلام مراسلتكم بنجاح', en: 'Correspondence Received Successfully' })}
                </h3>
                <p className="text-xs text-emerald-800 max-w-md mx-auto">
                  {t({
                    ar: 'تم قيد طلبكم برقم تتبع رسمي وسيتم الرد عبر البريد الإلكتروني المسجل خلال أيام العمل الرسمية.',
                    en: 'Your inquiry has been logged with an official tracking code and will be responded to via registered email.'
                  })}
                </p>
                <div className="font-mono text-xs font-bold text-emerald-900 pt-2">
                  TICKET: CBOS-2026-{Math.floor(100000 + Math.random() * 900000)}
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono font-bold text-ink-muted uppercase mb-1">
                      {t({ ar: 'الاسم الكامل أو اسم المؤسسة', en: 'Full Name / Institution' })} *
                    </label>
                    <input 
                      type="text" 
                      required
                      placeholder={t({ ar: 'محمد أحمد / شركة...', en: 'Name or Entity...' })}
                      className="w-full bg-sand-50 border border-sand-300 rounded-lg px-4 py-2.5 text-xs text-ink-base focus:outline-none focus:border-cbos-green-800"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono font-bold text-ink-muted uppercase mb-1">
                      {t({ ar: 'البريد الإلكتروني المعتمد', en: 'Email Address' })} *
                    </label>
                    <input 
                      type="email" 
                      required
                      placeholder="name@domain.sd"
                      className="w-full bg-sand-50 border border-sand-300 rounded-lg px-4 py-2.5 text-xs text-ink-base focus:outline-none focus:border-cbos-green-800"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono font-bold text-ink-muted uppercase mb-1">
                      {t({ ar: 'رقم الهاتف للتواصل', en: 'Contact Phone Number' })}
                    </label>
                    <input 
                      type="tel" 
                      placeholder="+249 ..."
                      className="w-full bg-sand-50 border border-sand-300 rounded-lg px-4 py-2.5 text-xs text-ink-base focus:outline-none focus:border-cbos-green-800"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono font-bold text-ink-muted uppercase mb-1">
                      {t({ ar: 'الإدارة المعنية بالمراسلة', en: 'Target Directorate' })} *
                    </label>
                    <select className="w-full bg-sand-50 border border-sand-300 rounded-lg px-3 py-2.5 text-xs text-ink-base focus:outline-none focus:border-cbos-green-800 font-serif">
                      <option>{t({ ar: 'الإدارة العامة للرقابة المصرفية', en: 'Banking Supervision' })}</option>
                      <option>{t({ ar: 'إدارة النقد الأجنبي والأسواق المالية', en: 'FX & Financial Markets' })}</option>
                      <option>{t({ ar: 'نظم المدفوعات القومية والمقسم (NIPS)', en: 'Payment Systems (NIPS)' })}</option>
                      <option>{t({ ar: 'الإدارة العامة لإصدار النقد والخزائن', en: 'Currency Issuance' })}</option>
                      <option>{t({ ar: 'الإدارة العامة للبحوث والإحصاء', en: 'Research & Statistics' })}</option>
                      <option>{t({ ar: 'العلاقات العامة والإعلام', en: 'Public Relations' })}</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono font-bold text-ink-muted uppercase mb-1">
                    {t({ ar: 'موضوع المراسلة أو الاستفسار', en: 'Subject' })} *
                  </label>
                  <input 
                    type="text" 
                    required
                    className="w-full bg-sand-50 border border-sand-300 rounded-lg px-4 py-2.5 text-xs text-ink-base focus:outline-none focus:border-cbos-green-800"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono font-bold text-ink-muted uppercase mb-1">
                    {t({ ar: 'نص الرسالة أو الاستفسار بالتفصيل', en: 'Detailed Inquiry Message' })} *
                  </label>
                  <textarea 
                    rows={4}
                    required
                    className="w-full bg-sand-50 border border-sand-300 rounded-lg p-3 text-xs text-ink-base focus:outline-none focus:border-cbos-green-800"
                  />
                </div>

                <button
                  type="submit"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-cbos-green-900 text-white font-mono font-bold text-xs hover:bg-cbos-green-800 transition-colors shadow-sm"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>{t({ ar: 'إرسال المراسلة الرسمية', en: 'Submit Official Inquiry' })}</span>
                </button>
              </form>
            )}
          </div>

          {/* Consumer Protection & Whistleblower Portals */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Banking Consumer Protection Card */}
            <div className="bg-white border border-sand-300 rounded-2xl p-6 shadow-sm">
              <div className="flex items-center gap-3 text-cbos-green-900 font-serif font-bold text-lg mb-3">
                <UserCheck className="w-5 h-5 text-cbos-gold" />
                <h3>{t({ ar: 'بوابة حماية عملاء الجهاز المصرفي', en: 'Banking Consumer Protection' })}</h3>
              </div>
              <p className="text-xs text-ink-muted leading-relaxed mb-4">
                {t({
                  ar: 'في حال واجهت نزاعاً مالياً أو تعسفاً مع أي من المصارف التجارية المرخصة ولم يتم حله داخلياً، يمكنك تقديم شكوى رسمية للبنك المركزي.',
                  en: 'If you encounter unresolved disputes with any licensed bank or exchange bureau, you are entitled to file a formal grievance with CBOS.'
                })}
              </p>
              <div className="bg-sand-50 rounded-xl p-4 border border-sand-200 text-xs space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-ink-muted">{t({ ar: 'الخط الساخن للشكاوى:', en: 'Consumer Hotline:' })}</span>
                  <span className="font-mono font-bold text-cbos-green-900">1959 ({t({ ar: 'مجاني', en: 'Toll-free' })})</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-ink-muted">{t({ ar: 'البريد المخصص للشكاوى:', en: 'Grievance Email:' })}</span>
                  <span className="font-mono text-[11px]">complaints@cbos.gov.sd</span>
                </div>
              </div>
            </div>

            {/* Whistleblower Channel Card */}
            <div className="bg-cbos-green-950 text-white rounded-2xl p-6 border border-cbos-gold/30 space-y-3">
              <div className="flex items-center gap-2 text-cbos-gold text-xs font-mono uppercase tracking-wider">
                <ShieldAlert className="w-4 h-4" />
                <span>CONFIDENTIAL WHISTLEBLOWER</span>
              </div>
              <h3 className="font-serif font-bold text-lg text-white">
                {t({ ar: 'قناة الإبلاغ السري عن التجاوزات المالية', en: 'Confidential Whistleblower Portal' })}
              </h3>
              <p className="text-xs text-sand-300 leading-relaxed">
                {t({
                  ar: 'قناة مشفرة تتيح للعاملين في الجهاز المصرفي والجمهور الإبلاغ عن مخالفات غسل الأموال أو التجاوزات الرقابية بهوية محمية وسرية مطلقة.',
                  en: 'An encrypted channel allowing banking personnel and citizens to report money laundering or regulatory misconduct with strict whistleblower protection.'
                })}
              </p>
              <div className="pt-2 text-xs font-mono text-cbos-gold">
                whistleblower@cbos.gov.sd
              </div>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}
