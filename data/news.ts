import { BilingualString } from '@/types';

export interface NewsItem {
  id: string;
  slug: string;
  title: BilingualString;
  excerpt: BilingualString;
  content: BilingualString;
  date: string;
  category: 'official_notice' | 'press_release' | 'tender' | 'circular';
  isImportant?: boolean;
  referenceNumber?: string;
  attachmentUrl?: string;
}

export const officialNewsData: NewsItem[] = [
  {
    id: 'NEWS-2026-001',
    slug: 'cbos-strategic-plan-2026-2030',
    title: {
      ar: 'إطلاق الخطة الاستراتيجية لبنك السودان المركزي (2026–2030)',
      en: 'Launch of CBOS Strategic Plan (2026–2030)'
    },
    excerpt: {
      ar: 'أعلن بنك السودان المركزي عن تدشين خطته الاستراتيجية الخمسية الجديدة المرتكزة على الاستقرار النقدي، الرقمنة الشاملة للمدفوعات، وتوسيع الشمول المالي.',
      en: 'The Central Bank of Sudan officially launched its 5-year strategic plan focusing on monetary stability, payment digitization, and financial inclusion.'
    },
    content: {
      ar: 'تتضمن الخطة الاستراتيجية 2026-2030 محاور رئيسية تشمل تحديث البنية التحتية لنظم المدفوعات القومية وتفعيل المقسم اللحظي NIPS، وتطوير أدوات السياسة النقدية المتوافقة مع الصيرفة الإسلامية، وإعادة بناء الاحتياطيات الدولية.',
      en: 'The 2026–2030 Strategic Plan encompasses core pillars including national payment modernization via NIPS, advanced Islamic liquidity tools, and rebuilding international reserves.'
    },
    date: '2026-02-28',
    category: 'press_release',
    isImportant: true
  },
  {
    id: 'NOTICE-2026-002',
    slug: 'tender-nips-national-switch',
    title: {
      ar: 'عطاء تصميم وتوريد وتشغيل المقسم القومي للمدفوعات الفورية (NIPS) — مرجع CDNIPS202601',
      en: 'Tender: National Instant Payment System (NIPS) — Ref: CDNIPS202601'
    },
    excerpt: {
      ar: 'إعلان طرح مناقصة عامة دولية ومحلية لإنشاء المقسم القومي للمدفوعات الفورية لربط المصارف والمحافظ الرقمية في السودان وفق معايير ISO 20022.',
      en: 'Procurement tender for implementing the National Instant Payment System (NIPS) switch connecting all banks and digital wallets under ISO 20022 standards.'
    },
    content: {
      ar: 'يدعو بنك السودان المركزي الشركات المؤهلة لتقديم عروضها الفنية والمالية لتنفيذ نظام NIPS بقدرة استيعابية 10,000 TPS وزمن تسوية ذري يقل عن 2 ثانية.',
      en: 'CBOS invites qualified prime contractors to submit technical and commercial bids for NIPS switch with 10,000 TPS capacity and sub-2-second atomic settlement.'
    },
    date: '2026-01-15',
    category: 'tender',
    isImportant: true,
    referenceNumber: 'CDNIPS202601'
  },
  {
    id: 'CIRCULAR-2026-003',
    slug: 'circular-electronic-cheques-ecc',
    title: {
      ar: 'تعميم بشأن تطبيق نظام المقاصة الإلكترونية للشيكات المحدثة (ECC)',
      en: 'Directive on Upgraded Electronic Cheque Clearing (ECC) Protocols'
    },
    excerpt: {
      ar: 'توجيه كافة المصارف التجارية العاملة بتطبيق المعايير الفنية الجديدة لصور الشيكات المقروءة بصرياً لتقليص دورة المقاصة إلى نفس يوم العمل (T+0).',
      en: 'Directing all commercial banks to implement new image truncation standards reducing cheque clearing cycles to same-day settlement (T+0).'
    },
    content: {
      ar: 'يهدف النظام المحدث إلى تسريع وتيرة المعاملات التجارية وتفادي مخاطر الشيكات المرتجعة وتعزيز كفاءة إدارة السيولة في الجهاز المصرفي.',
      en: 'The upgraded ECC framework aims to accelerate commercial transactions, minimize bounce risks, and optimize liquidity management.'
    },
    date: '2026-02-10',
    category: 'official_notice',
    isImportant: false,
    referenceNumber: 'CIRC-2026/03'
  },
  {
    id: 'NOTICE-2026-004',
    slug: 'sovereign-gold-auction-results',
    title: {
      ar: 'نتائج مزاد بيع الذهب السيادي الخامس لتمويل السلع الاستراتيجية',
      en: 'Results of the 5th Sovereign Gold Auction for Strategic Commodities'
    },
    excerpt: {
      ar: 'أعلنت إدارة الأسواق المالية عن تخصيص حصائل بيع 1.5 طن متري من الذهب المصفى لصالح تمويل مدخلات الإنتاج الزراعي والأدوية المنقذة للحياة.',
      en: 'The Financial Markets Directorate announced the allocation of proceeds from 1.5 metric tons of refined gold auction for agricultural and medical imports.'
    },
    content: {
      ar: 'شارك في المزاد 18 مصرفاً معتمداً، وتمت عمليات الترسية بمتوسط سعر متوافق مع مؤشرات الذهب العالمية، بما عزز التدفقات النقدية الرسمية واستقرار العملة الوطنية.',
      en: 'Eighteen authorized banks participated in the auction, settling at international parity prices and boosting foreign exchange stability.'
    },
    date: '2026-02-05',
    category: 'official_notice',
    isImportant: false
  }
];
