import { CBOSDocument } from '@/types/document';

export const officialDocumentsData: CBOSDocument[] = [
  {
    id: 'DOC-2026-001',
    reference_number: 'CIRC-2026/04',
    title: {
      ar: 'منشور ضوابط وتشغيل المقسم القومي للمدفوعات الفورية (NIPS)',
      en: 'Regulatory Directives for National Instant Payment System (NIPS)'
    },
    slug: 'nips-operational-circular-2026',
    type: 'circular',
    department: { ar: 'الإدارة العامة لنظم وتكنولوجيا المعلومات والمدفوعات', en: 'General Directorate of IT & Payment Systems' },
    publication_date: '2026-02-15',
    effective_date: '2026-03-01',
    year: 2026,
    summary: {
      ar: 'إلزام كافة المصارف والمحافظ الإلكترونية المشاركة بربط وتكامل أنظمتها مع المقسم القومي للمدفوعات الفورية والالتزام بمعايير ISO 20022 وقواعد التسوية الذرية للضمان المسبق.',
      en: 'Mandating all licensed commercial banks and mobile wallets to integrate with NIPS, adopting ISO 20022 standards and prefunded RTGS collateral rules.'
    },
    file_url: '/documents/circ-2026-04.pdf',
    file_size_kb: 480,
    file_format: 'pdf',
    status: 'active',
    keywords: ['NIPS', 'ISO 20022', 'RTGS', 'المدفوعات الفورية']
  },
  {
    id: 'DOC-2026-002',
    reference_number: 'CIRC-2026/02',
    title: {
      ar: 'منشور تنظيم وضوابط النقد الأجنبي وحصائل الصادرات',
      en: 'Foreign Exchange Regulation & Export Proceeds Repatriation Directive'
    },
    slug: 'fx-export-proceeds-directive-2026',
    type: 'circular',
    department: { ar: 'الإدارة العامة للأسواق المالية وإدارة النقد الأجنبي', en: 'Financial Markets & Foreign Exchange Directorate' },
    publication_date: '2026-01-20',
    effective_date: '2026-02-01',
    year: 2026,
    summary: {
      ar: 'تعديل سياسات وإجراءات استرداد حصائل الصادرات عبر القنوات المصرفية الرسمية وتسهيل عمليات تمويل استيراد السلع الاستراتيجية.',
      en: 'Regulatory procedures for repatriating export proceeds through official banking channels and financing strategic imports.'
    },
    file_url: '/documents/circ-2026-02.pdf',
    file_size_kb: 390,
    file_format: 'pdf',
    status: 'active',
    keywords: ['النقد الأجنبي', 'الصادرات', 'العملات']
  },
  {
    id: 'DOC-2026-006',
    reference_number: 'TEND-CDNIPS202601',
    title: {
      ar: 'عطاء توريد وتطوير البنية السحابية للمقسم القومي للمدفوعات (RFP)',
      en: 'Public Tender: Sovereign Cloud Infrastructure for NIPS (RFP CDNIPS202601)'
    },
    slug: 'tender-nips-cloud-infra-2026',
    type: 'tender',
    department: { ar: 'لجنة الشراء والتعاقد — قطاع نظم الدفع', en: 'Procurement Committee — Payment Systems' },
    publication_date: '2026-02-10',
    effective_date: '2026-03-31',
    year: 2026,
    summary: {
      ar: 'كراسة الشروط والمواصفات الفنية لتطوير البنية السحابية السيادية فائقة التوافر (Tier III/IV) لنظام المقسم القومي للمدفوعات الفورية والتسوية اللحظية.',
      en: 'Request for Proposals for mission-critical, high-availability sovereign cloud infrastructure supporting the National Instant Payment System.'
    },
    file_url: '/documents/tender-cdnips202601.pdf',
    file_size_kb: 1250,
    file_format: 'pdf',
    status: 'active',
    keywords: ['عطاء', 'NIPS', 'CDNIPS202601', 'توريد', 'مناقصة']
  },
  {
    id: 'DOC-2025-003',
    reference_number: 'REP-2025-ANNUAL',
    title: {
      ar: 'التقرير السنوي لبنك السودان المركزي للعام 2025',
      en: 'Central Bank of Sudan Annual Report 2025'
    },
    slug: 'cbos-annual-report-2025',
    type: 'annual-report',
    department: { ar: 'الإدارة العامة للبحوث والإحصاء', en: 'General Directorate of Research & Statistics' },
    publication_date: '2025-12-31',
    year: 2025,
    summary: {
      ar: 'التقرير السنوي الشامل متضمناً الأداء الاقتصادي الكلي، التطورات النقدية والمصرفية، الميزانية العمومية للبنك المركزي، وحسابات الأرباح والخسائر المدققة.',
      en: 'Comprehensive annual report reviewing macroeconomic performance, monetary aggregates, banking sector health, and audited financial statements.'
    },
    file_url: '/documents/cbos-annual-report-2025.pdf',
    file_size_kb: 8450,
    file_format: 'pdf',
    status: 'active',
    keywords: ['التقرير السنوي', 'الميزانية العمومية', 'الإحصاءات']
  },
  {
    id: 'DOC-2025-004',
    reference_number: 'STAT-DIGEST-Q3',
    title: {
      ar: 'موجز إحصاءات التجارة الخارجية وميزان المدفوعات',
      en: 'Foreign Trade Statistical Digest & Balance of Payments'
    },
    slug: 'foreign-trade-digest-q3-2025',
    type: 'digest',
    department: { ar: 'إدارة الإحصاء الاقتصادي والتجاري', en: 'Economic & Trade Statistics Department' },
    publication_date: '2025-11-15',
    year: 2025,
    summary: {
      ar: 'بيانات تفصيلية لصادرات السلع الزراعية والمعدنية (الذهب والسمسم والقطن والصمغ العربي) والواردات السلعية والشركاء التجاريين الدوليين.',
      en: 'Granular statistics covering agricultural & mineral exports (gold, sesame, cotton, gum arabic), commodity imports, and trade partners.'
    },
    file_url: '/documents/trade-digest-q3-2025.pdf',
    file_size_kb: 2150,
    file_format: 'pdf',
    status: 'active',
    keywords: ['التجارة الخارجية', 'الصادرات', 'الذهب', 'ميزان المدفوعات']
  },
  {
    id: 'DOC-2024-005',
    reference_number: 'LAW-2004-REV',
    title: {
      ar: 'قانون تنظيم العمل المصرفي لسنة 2004 وتعديلاته',
      en: 'Regulation of Banking Business Act 2004 & Amendments'
    },
    slug: 'regulation-of-banking-business-act',
    type: 'law',
    department: { ar: 'الإدارة العامة للشؤون القانونية', en: 'General Directorate of Legal Affairs' },
    publication_date: '2004-06-10',
    year: 2004,
    summary: {
      ar: 'القانون الأساسي الحاكم لإنشاء وترخيص المصارف والمؤسسات المالية، ومراقبة الائتمان، ومعايير الحوكمة والتحوط المصرفي في جمهورية السودان.',
      en: 'Principal legislation governing the licensing, regulation, credit supervision, and prudential oversight of banks in Sudan.'
    },
    file_url: '/documents/banking-business-act-2004.pdf',
    file_size_kb: 1420,
    file_format: 'pdf',
    status: 'active',
    keywords: ['القانون المصرفي', 'التشريعات', 'الترخيص']
  },
  {
    id: 'DOC-2002-001',
    reference_number: 'LAW-2002-CBOS',
    title: {
      ar: 'قانون بنك السودان لسنة 2002 وتعديلاته اللاحقة',
      en: 'Bank of Sudan Act 2002 & Subsequent Amendments'
    },
    slug: 'bank-of-sudan-act-2002',
    type: 'law',
    department: { ar: 'الإدارة العامة للشؤون القانونية', en: 'General Directorate of Legal Affairs' },
    publication_date: '2002-04-18',
    year: 2002,
    summary: {
      ar: 'التشريع التأسيسي المنظم للمصرف المركزي، اختصاصات المحافظ ومجلس الإدارة، استقلالية البنك، إصدار العملة والسياسة النقدية.',
      en: 'Foundational legislation establishing CBOS autonomy, Governor powers, Board mandate, banknote issuance rights, and monetary policy.'
    },
    file_url: '/documents/cbos-act-2002.pdf',
    file_size_kb: 1680,
    file_format: 'pdf',
    status: 'active',
    keywords: ['قانون بنك السودان', 'المؤسسة', 'الاستقلالية']
  },
  {
    id: 'DOC-2024-007',
    reference_number: 'CIRC-2024/18',
    title: {
      ar: 'لائحة وضوابط مكافحة غسل الأموال وتمويل الإرهاب (AML/CFT)',
      en: 'Anti-Money Laundering & Counter-Terrorism Financing Regulations'
    },
    slug: 'aml-cft-regulations-2024',
    type: 'regulation',
    department: { ar: 'وحدة التحريات المالية والرقابة المصرفية', en: 'Financial Intelligence & Banking Supervision Unit' },
    publication_date: '2024-08-12',
    year: 2024,
    summary: {
      ar: 'إجراءات العناية الواجبة المشددة بمعرفة العميل (CDD/KYC)، الإبلاغ عن المعاملات المشبوهة والالتزام بمعايير مجموعة العمل المالي الدولية (FATF).',
      en: 'Customer Due Diligence (KYC), suspicious transaction reporting, and compliance with FATF international anti-financial crime recommendations.'
    },
    file_url: '/documents/aml-cft-2024.pdf',
    file_size_kb: 920,
    file_format: 'pdf',
    status: 'active',
    keywords: ['مكافحة غسل الأموال', 'AML', 'FATF', 'الامتثال']
  }
];
