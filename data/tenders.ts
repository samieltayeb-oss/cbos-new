export interface Tender {
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
  eligibility?: { ar: string[]; en: string[] };
  submissionLocation?: { ar: string; en: string };
}

export const tendersData: Tender[] = [
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
    documentUrl: '/documents/tender-nips-dr-2026.pdf',
    eligibility: {
      ar: [
        'شهادة تسجيل سارية المفعول من مسجل عام الشركات',
        'شهادة مقدرة مالية وبنكية من أحد المصارف السودانية المرخصة',
        'شهادة خلو طرف من الضرائب والزكاة سارية المفعول',
        'خبرة سابقة لا تقل عن 5 سنوات في توريد أنظمة البنية التحتية المصرفية الحرجة'
      ],
      en: [
        'Valid commercial registration certificate from the Registrar General',
        'Bank financial standing letter from a licensed Sudanese bank',
        'Valid tax and zakat clearance certificates',
        'Minimum 5 years demonstrated track record in mission-critical banking deployments'
      ]
    },
    submissionLocation: {
      ar: 'مقر بنك السودان المركزي — سكرتارية لجنة الشراء والتعاقد — بورتسودان',
      en: 'CBOS Interim Headquarters — Procurement Committee Secretariat — Port Sudan'
    }
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
    documentUrl: '/documents/tender-security-branches-2026.pdf',
    eligibility: {
      ar: [
        'ترخيص أمني ساري للعمل في مجالات أنظمة الحماية والمراقبة',
        'سجل تجاري وشهادات ضريبية سارية',
        'وكالة معتمدة أو شراكة مع مصنعي أنظمة المراقبة العالمية'
      ],
      en: [
        'Valid security authorization license for surveillance and physical defense systems',
        'Valid commercial and tax clearance certificates',
        'Authorized dealership or certified partnership with global security equipment manufacturers'
      ]
    },
    submissionLocation: {
      ar: 'إدارة الشؤون الهندسية — فرع بنك السودان المركزي ببورتسودان',
      en: 'Engineering Affairs Directorate — CBOS Port Sudan Branch'
    }
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
    documentUrl: '/documents/tender-cyber-audit-2026.pdf',
    eligibility: {
      ar: [
        'شهادات اعتماد دولية (CREST, ISO Lead Auditor, CISA)',
        'سابقة أعمال في تدقيق البنوك المركزية أو المصارف الكبرى'
      ],
      en: [
        'Global cyber certifications (CREST, ISO Lead Auditor, CISA)',
        'Proven reference audits with central banks or tier-1 financial institutions'
      ]
    },
    submissionLocation: {
      ar: 'لجنة تقييم العروض الفنية — بنك السودان المركزي',
      en: 'Technical Bids Evaluation Committee — Central Bank of Sudan'
    }
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
    documentUrl: '/documents/tender-banknote-materials-2026.pdf',
    eligibility: {
      ar: [
        'عضوية الجمعية الدولية لمصنعي أوراق النقد عالية التأمين',
        'شهادات فحص واعتماد كيميائي وفيزيائي معتمدة'
      ],
      en: [
        'Active accreditation with International Banknote Security Manufacturers',
        'Certified chemical and physical quality compliance documentation'
      ]
    },
    submissionLocation: {
      ar: 'الإدارة العامة للإصدار والعملة — بنك السودان المركزي',
      en: 'Currency & Note Issue Directorate — Central Bank of Sudan'
    }
  }
];
