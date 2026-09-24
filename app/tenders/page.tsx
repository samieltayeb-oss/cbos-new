'use client';

import React, { useState } from 'react';
import { useLanguage } from '@/lib/languageContext';
import { 
  FileText, 
  Search, 
  Calendar, 
  Clock, 
  Download, 
  Building2, 
  AlertCircle, 
  CheckCircle2, 
  ShieldCheck,
  HelpCircle,
  Mail,
  Phone
} from 'lucide-react';

interface Tender {
  id: string;
  refNumber: string;
  title: { ar: string; en: string };
  category: { ar: string; en: string };
  status: 'active' | 'evaluating' | 'awarded';
  publishDate: string;
  closingDate: string;
  depositAmount: string;
  bookletFee: string;
  description: { ar: string; en: string };
  targetDepartment: { ar: string; en: string };
  documentUrl: string;
}

const tendersData: Tender[] = [
  {
    id: 'tnd-2026-001',
    refNumber: 'CBOS/TND/2026/01',
    title: {
      ar: 'عطاء توريد وتحديث خوادم مركز البيانات الاحتياطي للمقسم القومي (NIPS Disaster Recovery)',
      en: 'Tender for Supply & Deployment of NIPS Disaster Recovery High-Availability Servers'
    },
    category: { ar: 'التقنية والأنظمة المصرفية', en: 'Banking IT & Infrastructure' },
    status: 'active',
    publishDate: '2026-09-10',
    closingDate: '2026-10-15',
    depositAmount: '5,000,000 SDG',
    bookletFee: '150,000 SDG',
    description: {
      ar: 'توريد وتركيب خوادم ومصفوفات تخزين سحابية فائقة الاعتمادية لتأمين استمرارية أعمال المقسم القومي للمدفوعات الفورية 24/7/365.',
      en: 'Procurement and commissioning of high-availability enterprise servers and SAN storage arrays for 24/7/365 disaster recovery operations.'
    },
    targetDepartment: { ar: 'الإدارة العامة لتقنية المعلومات ونظم الدفع', en: 'IT & Payment Systems Directorate' },
    documentUrl: '/documents/tender-nips-dr-2026.pdf'
  },
  {
    id: 'tnd-2026-002',
    refNumber: 'CBOS/TND/2026/02',
    title: {
      ar: 'مناقصة صيانة وتأهيل أنظمة المراقبة الرقمية ومكافحة الحريق بفروع البنك المركزي',
      en: 'Tender for Upgrading Digital Security Surveillance & Fire Systems Across Regional Branches'
    },
    category: { ar: 'الأمن والسلامة المؤسسية', en: 'Security & Safety Systems' },
    status: 'active',
    publishDate: '2026-09-15',
    closingDate: '2026-10-22',
    depositAmount: '3,500,000 SDG',
    bookletFee: '100,000 SDG',
    description: {
      ar: 'توريد وتركيب أجهزة مراقبة تأمينية ذكية وأنظمة إطفاء تلقائية لحماية خزائن النقد والمقار الإدارية لولايات البحر الأحمر، نهر النيل، والقضارف.',
      en: 'Procurement and integration of smart CCTV, biometric vaults, and automated suppression systems for vault facilities in Port Sudan, River Nile, and Gedaref.'
    },
    targetDepartment: { ar: 'الإدارة العامة للخدمات الهندسية والأمن', en: 'Engineering Services & Physical Security' },
    documentUrl: '/documents/tender-security-branches-2026.pdf'
  },
  {
    id: 'tnd-2026-003',
    refNumber: 'CBOS/TND/2026/03',
    title: {
      ar: 'عطاء تقديم خدمات التدقيق الاستشاري لنظم الأمان السيبراني المصرفي (ISO 27001)',
      en: 'Consultancy Tender for Cybersecurity Audit & ISO 27001 Re-Certification'
    },
    category: { ar: 'الاستشارات والتدقيق', en: 'Consulting & Cybersecurity Audit' },
    status: 'evaluating',
    publishDate: '2026-08-20',
    closingDate: '2026-09-20',
    depositAmount: '4,000,000 SDG',
    bookletFee: '120,000 SDG',
    description: {
      ar: 'اختيار بيت خبرة متخصص لإجراء تقييم شامل للثغرات واختبارات الاختراق للمنصات المصرفية السيادية وفق أعلى المعايير الدولية.',
      en: 'Selection of a certified consultancy firm to conduct institutional penetration testing and compliance verification for national switches.'
    },
    targetDepartment: { ar: 'إدارة الأمن السيبراني والمخاطر', en: 'Cybersecurity & Operational Risk Department' },
    documentUrl: '/documents/tender-cyber-audit-2026.pdf'
  },
  {
    id: 'tnd-2026-004',
    refNumber: 'CBOS/TND/2026/04',
    title: {
      ar: 'توريد أوراق بنكنوت ومواد تأمينية خاصة بمطبعة العملة السودانية',
      en: 'Supply of Specialized High-Security Substrates for Sudan Currency Printing Press'
    },
    category: { ar: 'طباعة العملة والنقد', en: 'Banknote Printing Materials' },
    status: 'awarded',
    publishDate: '2026-07-01',
    closingDate: '2026-08-01',
    depositAmount: '15,000,000 SDG',
    bookletFee: '300,000 SDG',
    description: {
      ar: 'عطاء دولي محدود للشركات العالمية المعتمدة لتوريد أحبار مغناطيسية وأشرطة هولوغرام تأمينية متقدمة للفئات النقدية الجديدة.',
      en: 'Restricted international tender for accredited security paper manufacturers supplying holographic security threads and intaglio inks.'
    },
    targetDepartment: { ar: 'الإدارة العامة للإصدار والعملة', en: 'Currency & Note Issue Directorate' },
    documentUrl: '/documents/tender-banknote-materials-2026.pdf'
  }
];

export default function TendersPage() {
  const { isRtl, t } = useLanguage();
  const [selectedFilter, setSelectedFilter] = useState<'all' | 'active' | 'evaluating' | 'awarded'>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredTenders = tendersData.filter((tnd) => {
    const matchesFilter = selectedFilter === 'all' || tnd.status === selectedFilter;
    const q = searchQuery.toLowerCase();
    const matchesSearch = 
      t(tnd.title).toLowerCase().includes(q) ||
      tnd.refNumber.toLowerCase().includes(q) ||
      t(tnd.category).toLowerCase().includes(q);
    return matchesFilter && matchesSearch;
  });

  return (
    <div className="bg-sand-50 min-h-screen">
      {/* Header Banner */}
      <section 
        className="text-white relative overflow-hidden py-16 lg:py-20 border-b border-[#075A3A]"
        style={{ backgroundColor: '#032A1E' }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex items-center gap-3 text-[#DDC99B] text-xs font-mono uppercase tracking-wider mb-4">
            <Building2 className="w-4 h-4 text-[#B99553]" />
            <span>{isRtl ? 'المشتريات والعقود السيادية' : 'Procurement & Sovereign Contracts'}</span>
            <span>/</span>
            <span>{isRtl ? 'بوابة العطاءات والمناقصات الرسمية' : 'Official Tenders & RFP Portal'}</span>
          </div>

          <h1 className="text-3xl lg:text-4xl font-extrabold text-white mb-4 font-display">
            {isRtl ? 'المناقصات والعطاءات العامة لبنك السودان المركزي' : 'CBOS Official Procurement & Tenders Portal'}
          </h1>
          <p className="text-base text-[#E2DDD3] max-w-3xl leading-relaxed font-sans">
            {isRtl
              ? 'تعلن لجنة الشراء والتعاقد والتخلص من الفائض ببنك السودان المركزي عن طرح العطاءات والمناقصات العامة لجميع الشركات والموردين المؤهلين، وفقاً لمبادئ الشفافية والعدالة وتكافؤ الفرص والقوانين المنظمة للشراء الحكومي.'
              : 'The CBOS Procurement and Contracting Committee announces public tenders and RFPs for qualified vendors, following strict principles of transparency, equal opportunity, and national procurement laws.'}
          </p>

          <div className="mt-8 flex flex-wrap gap-4 text-xs font-mono">
            <div className="px-3.5 py-1.5 rounded-lg bg-[#075A3A]/60 border border-[#B99553]/40 flex items-center gap-2">
              <span className="text-[#DDC99B]">{isRtl ? 'المقر المعتمد للتقديم:' : 'Submission Location:'}</span>
              <span className="font-bold text-white">{isRtl ? 'مكتب لجنة العطاءات — بورتسودان' : 'Procurement Board — Port Sudan'}</span>
            </div>
            <div className="px-3.5 py-1.5 rounded-lg bg-[#075A3A]/60 border border-[#B99553]/40 flex items-center gap-2">
              <span className="text-[#DDC99B]">{isRtl ? 'صندوق الشكاوى والاعتراضات:' : 'Dispute Desk:'}</span>
              <span className="font-bold text-white">tenders@cbos.gov.sd</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        
        {/* Controls */}
        <div className="bg-white rounded-2xl p-5 border border-sand-300 shadow-sm mb-8 space-y-4">
          <div className="flex flex-col md:flex-row gap-4 justify-between items-center">
            
            {/* Search Input */}
            <div className="relative w-full md:w-96">
              <Search className="w-4 h-4 text-cbos-ink-muted absolute top-1/2 -translate-y-1/2 left-3 rtl:left-auto rtl:right-3" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder={isRtl ? 'ابحث برقم العطاء أو المجال أو الكلمات المفتاحية...' : 'Search tender number, domain or keyword...'}
                className="w-full bg-sand-50 border border-sand-300 rounded-xl py-2.5 px-9 text-xs focus:outline-none focus:border-cbos-green-700 font-sans"
              />
            </div>

            {/* Filter Tabs */}
            <div className="flex items-center gap-2">
              {[
                { id: 'all', label: { ar: 'كافة المناقصات', en: 'All Tenders' } },
                { id: 'active', label: { ar: 'العطاءات المفتوحة', en: 'Open Tenders' } },
                { id: 'evaluating', label: { ar: 'قيد الفرز والتقييم', en: 'Under Evaluation' } },
                { id: 'awarded', label: { ar: 'تمت الترسية', en: 'Awarded' } }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setSelectedFilter(tab.id as any)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                    selectedFilter === tab.id
                      ? 'bg-cbos-green-900 text-white font-bold'
                      : 'bg-sand-100 text-cbos-ink-muted hover:bg-sand-200'
                  }`}
                >
                  {t(tab.label)}
                </button>
              ))}
            </div>

          </div>
        </div>

        {/* Tenders Grid */}
        <div className="space-y-6">
          {filteredTenders.map((tender) => {
            const statusConfig = {
              active: {
                badge: { ar: 'عطاء مفتوح للتقديم', en: 'Open for Submission' },
                color: 'bg-emerald-50 text-emerald-800 border-emerald-200',
                indicator: 'bg-emerald-500'
              },
              evaluating: {
                badge: { ar: 'قيد الفرز الفني والمالي', en: 'Technical & Financial Evaluation' },
                color: 'bg-amber-50 text-amber-800 border-amber-200',
                indicator: 'bg-amber-500'
              },
              awarded: {
                badge: { ar: 'تمت الترسية الرسمية', en: 'Officially Awarded' },
                color: 'bg-blue-50 text-blue-800 border-blue-200',
                indicator: 'bg-blue-500'
              }
            }[tender.status];

            return (
              <div 
                key={tender.id}
                className="bg-white rounded-2xl p-6 md:p-8 border border-sand-300 shadow-sm hover:border-[#B99553] transition-all space-y-6"
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-sand-200 pb-4">
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-xs font-bold px-3 py-1 rounded bg-[#075A3A]/10 text-cbos-green-900 border border-cbos-green-200">
                      {tender.refNumber}
                    </span>
                    <span className="text-xs text-cbos-ink-muted font-mono">
                      {t(tender.category)}
                    </span>
                  </div>

                  <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold border ${statusConfig.color}`}>
                    <span className={`w-2 h-2 rounded-full ${statusConfig.indicator}`} />
                    <span>{t(statusConfig.badge)}</span>
                  </div>
                </div>

                <div className="space-y-3">
                  <h3 className="text-lg md:text-xl font-bold text-cbos-ink font-display">
                    {t(tender.title)}
                  </h3>
                  <p className="text-xs text-cbos-ink-muted leading-relaxed font-sans max-w-4xl">
                    {t(tender.description)}
                  </p>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-4 rounded-xl bg-sand-50 border border-sand-200 text-xs font-mono">
                  <div>
                    <div className="text-cbos-ink-muted text-[11px] mb-1">{isRtl ? 'تاريخ الطرح:' : 'Release Date:'}</div>
                    <div className="font-bold text-cbos-ink">{tender.publishDate}</div>
                  </div>
                  <div>
                    <div className="text-cbos-ink-muted text-[11px] mb-1">{isRtl ? 'آخر موعد للتقديم:' : 'Submission Deadline:'}</div>
                    <div className="font-bold text-red-600">{tender.closingDate}</div>
                  </div>
                  <div>
                    <div className="text-cbos-ink-muted text-[11px] mb-1">{isRtl ? 'التأمين المبدئي:' : 'Bid Bond:'}</div>
                    <div className="font-bold text-cbos-ink">{tender.depositAmount}</div>
                  </div>
                  <div>
                    <div className="text-cbos-ink-muted text-[11px] mb-1">{isRtl ? 'قيمة كراسة الشروط:' : 'Booklet Fee:'}</div>
                    <div className="font-bold text-cbos-gold">{tender.bookletFee}</div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
                  <div className="text-xs text-cbos-ink-muted flex items-center gap-2">
                    <Building2 className="w-4 h-4 text-cbos-green-700 shrink-0" />
                    <span>{t(tender.targetDepartment)}</span>
                  </div>

                  <a
                    href={tender.documentUrl}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-cbos-green-900 text-white hover:bg-cbos-green-800 transition-colors font-bold text-xs shadow-sm"
                  >
                    <Download className="w-3.5 h-3.5 text-[#DDC99B]" />
                    <span>{isRtl ? 'تحميل كراسة الشروط والمواصفات (PDF)' : 'Download RFP & Specs (PDF)'}</span>
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Guidelines & Terms of Submission */}
        <div className="mt-12 bg-[#032A1E] text-white rounded-2xl p-8 border border-cbos-green-800 space-y-6">
          <div className="flex items-center gap-3 border-b border-cbos-green-800 pb-4">
            <ShieldCheck className="w-6 h-6 text-[#B99553]" />
            <h2 className="text-lg font-bold font-display text-white">
              {isRtl ? 'الضوابط العامة للتقديم وشروط التأهيل' : 'Procurement Rules & Vendor Eligibility Guidelines'}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs text-[#E2DDD3] leading-relaxed">
            <div className="space-y-2">
              <h4 className="font-bold text-[#DDC99B] text-sm font-sans">{isRtl ? '1. المستندات الإلزامية' : '1. Mandatory Documentation'}</h4>
              <p>{isRtl ? 'إرفاق شهادة تسجيل تجاري سارية، وشهادة إبراء ذمة ضريبية، وخلو طرف من الزكاة، والرقم الضريبي GST/TIN المعتمد.' : 'Valid commercial registration certificate, tax clearance, Zakat certificate, and verified GST/TIN compliance certificate.'}</p>
            </div>
            <div className="space-y-2">
              <h4 className="font-bold text-[#DDC99B] text-sm font-sans">{isRtl ? '2. الضمان والتأمين الابتدائي' : '2. Bid Security'}</h4>
              <p>{isRtl ? 'يقدم التأمين الابتدائي بخطاب ضمان مصرفي معتمد أو شيك مصرفي معتمد باسم محافظ بنك السودان المركزي ساري المفعول لمدة 90 يوماً.' : 'Bid bond must be submitted via bank guarantee or certified cashier cheque issued in the name of the Governor of CBOS valid for 90 days.'}</p>
            </div>
            <div className="space-y-2">
              <h4 className="font-bold text-[#DDC99B] text-sm font-sans">{isRtl ? '3. تسليم المظاريف' : '3. Envelope Submission'}</h4>
              <p>{isRtl ? 'تسلّم العروض في مظروفين منفصلين ومغلقين بالشمع الأحمر (مظروف فني ومظروف مالي) بمكتب سكرتير لجنة العطاءات قبل موعد الإغلاق.' : 'Bids must be submitted in two separate wax-sealed envelopes (Technical and Financial) to the Procurement Secretary before deadline.'}</p>
            </div>
          </div>
        </div>

      </section>
    </div>
  );
}
