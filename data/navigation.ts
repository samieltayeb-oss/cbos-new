import { NavGroup } from '@/types';

export const primaryNavigation: NavGroup[] = [
  {
    id: 'about',
    title: { ar: 'عن البنك', en: 'About CBOS' },
    href: '/about',
    featuredDocument: {
      title: { ar: 'قانون بنك السودان المركزي وتعديلاته', en: 'Central Bank of Sudan Act & Amendments' },
      refNumber: 'LAW-1960-ACT',
      href: '/documents?type=law',
      date: '2026'
    },
    categories: [
      {
        title: { ar: 'المؤسسة والمهام', en: 'Institution & Mandate' },
        items: [
          { id: 'about-overview', title: { ar: 'نبذة تعريفية ورؤية البنك', en: 'Overview & Strategic Vision' }, href: '/about' },
          { id: 'about-history', title: { ar: 'المحطات التاريخية للتأسيس', en: 'Historical Milestones' }, href: '/about#history' },
          { id: 'about-mandate', title: { ar: 'الأهداف والمهام السيادية', en: 'Core Objectives & Powers' }, href: '/about#mandate' },
          { id: 'about-branches', title: { ar: 'الفروع ومراكز النقد', en: 'Branches & Currency Centers' }, href: '/about' },
        ]
      },
      {
        title: { ar: 'الحوكمة والقيادة', en: 'Governance & Leadership' },
        items: [
          { id: 'gov-governor', title: { ar: 'كلمة محافظ البنك المركزي', en: 'Governor of the Central Bank' }, href: '/leadership' },
          { id: 'gov-board', title: { ar: 'مجلس الإدارة واللجان', en: 'Board of Directors & Committees' }, href: '/leadership#board' },
          { id: 'gov-structure', title: { ar: 'الهيكل التنظيمي والإدارات', en: 'Organizational Structure' }, href: '/about' },
          { id: 'gov-sharia', title: { ar: 'الهيئة العليا للرقابة الشرعية', en: 'Higher Sharia Supervisory Board' }, href: '/about' },
          { id: 'about-correspondents', title: { ar: 'مراسلو بنك السودان المركزي', en: 'Correspondent Banks' }, href: '/correspondents' },
          { id: 'about-gallery', title: { ar: 'معرض الصور والتوثيق', en: 'Photo Gallery' }, href: '/gallery' },
        ]
      }
    ]
  },
  {
    id: 'policy',
    title: { ar: 'السياسة النقدية والمصرفية', en: 'Monetary Policy' },
    href: '/monetary-policy',
    featuredDocument: {
      title: { ar: 'سياسات بنك السودان المركزي واستقرار الأسعار', en: 'CBOS Monetary & Banking Policy Directives' },
      refNumber: 'POL-2026-DIR',
      href: '/monetary-policy',
      date: '2026'
    },
    categories: [
      {
        title: { ar: 'الإطار التشغيلي', en: 'Operational Framework' },
        items: [
          { id: 'pol-framework', title: { ar: 'أهداف السياسة النقدية والائتمانية', en: 'Monetary Policy Framework' }, href: '/monetary-policy' },
          { id: 'pol-instruments', title: { ar: 'أدوات إدارة السيولة المتوافقة مع الشريعة', en: 'Islamic Liquidity Management' }, href: '/monetary-policy#instruments' },
          { id: 'pol-reserves', title: { ar: 'متطلبات الاحتياطي النقدي القانوني', en: 'Statutory Reserve Requirements' }, href: '/monetary-policy#reserves' },
        ]
      },
      {
        title: { ar: 'التقارير الدورية للسياسة', en: 'Policy Publications' },
        items: [
          { id: 'pol-statements', title: { ar: 'بيانات لجنة السياسة النقدية', en: 'Monetary Policy Statements' }, href: '/monetary-policy' },
          { id: 'pol-briefs', title: { ar: 'التحليل الاقتصادي الدوري للسيولة', en: 'Periodic Liquidity Reviews' }, href: '/publications?type=policy-brief' },
        ]
      }
    ]
  },
  {
    id: 'financial-system',
    title: { ar: 'الجهاز المصرفي', en: 'Financial System' },
    href: '/financial-system',
    featuredDocument: {
      title: { ar: 'دليل المؤسسات المالية والمصارف المرخصة', en: 'Directory of Licensed Banking Institutions' },
      refNumber: 'REG-DIR-2026',
      href: '/financial-system',
      date: '2026'
    },
    categories: [
      {
        title: { ar: 'المؤسسات الخاضعة للرقابة', en: 'Regulated Entities' },
        items: [
          { id: 'fs-banks', title: { ar: 'المصارف التجارية والإسلامية العاملة', en: 'Licensed Commercial & Islamic Banks' }, href: '/financial-system?type=commercial_bank' },
          { id: 'fs-exchange', title: { ar: 'شركات الصرافة والتحويلات المالية', en: 'Foreign Exchange Bureaus' }, href: '/financial-system?type=exchange_bureau' },
          { id: 'fs-microfinance', title: { ar: 'مؤسسات التمويل الأصغر والتنمية', en: 'Microfinance Institutions' }, href: '/financial-system?type=microfinance' },
          { id: 'fs-switches', title: { ar: 'مشغلو أنظمة الدفع الرقمي', en: 'Payment System Operators' }, href: '/financial-system?type=payment_switch' },
        ]
      },
      {
        title: { ar: 'الرقابة والإشراف المصرفي', en: 'Banking Supervision' },
        items: [
          { id: 'fs-prudential', title: { ar: 'معايير كفاية رأس المال ومقررات بازل', en: 'Capital Adequacy & Basel Standards' }, href: '/financial-system' },
          { id: 'fs-consumer', title: { ar: 'حماية عملاء المؤسسات المالية والمصرفية', en: 'Protection of Financial & Banking Clients' }, href: '/consumer-protection' },
          { id: 'fs-aml', title: { ar: 'مكافحة غسل الأموال وتمويل الإرهاب', en: 'AML / CFT Regulatory Framework' }, href: '/financial-system' },
        ]
      }
    ]
  },
  {
    id: 'exchange-rates',
    title: { ar: 'أسعار الصرف والأسواق', en: 'Exchange Rates' },
    href: '/exchange-rates',
    featuredDocument: {
      title: { ar: 'النشرة اليومية لأسعار العملات الأجنبية', en: 'Daily Foreign Exchange Indicative Bulletin' },
      refNumber: 'FX-DAILY-2026',
      href: '/exchange-rates',
      date: 'اليوم / Today'
    },
    categories: [
      {
        title: { ar: 'نشرات الصرف الرسمية', en: 'Official FX Bulletins' },
        items: [
          { id: 'fx-indicative', title: { ar: 'الأسعار التأشيرية الرسمية للبنك المركزي', en: 'Official Indicative Rates' }, href: '/exchange-rates' },
          { id: 'fx-commercial', title: { ar: 'أسعار صرف المصارف والصرافات', en: 'Commercial Banks FX Board' }, href: '/exchange-rates#commercial' },
          { id: 'fx-historical', title: { ar: 'السجل التاريخي وحاسبة التحويل', en: 'Historical Rates & Converter' }, href: '/exchange-rates#history' },
        ]
      },
      {
        title: { ar: 'أسواق النقد والذهب', en: 'Foreign Exchange & Gold' },
        items: [
          { id: 'fx-regulations', title: { ar: 'ضوابط وتنظيم النقد الأجنبي والتصدير', en: 'Foreign Exchange Directives' }, href: '/documents?type=regulation&category=fx' },
          { id: 'fx-gold', title: { ar: 'سياسات شراء وتصدير الذهب الحر', en: 'Gold Purchase & Export Policies' }, href: '/documents?type=regulation&category=gold' },
        ]
      }
    ]
  },
  {
    id: 'laws-regulations',
    title: { ar: 'القوانين والمنشورات', en: 'Laws & Circulars' },
    href: '/documents',
    featuredDocument: {
      title: { ar: 'قانون تنظيم العمل المصرفي لسنة 2004 وتعديلاته', en: 'Regulation of Banking Business Act' },
      refNumber: 'LAW-2004-REV',
      href: '/documents?type=law',
      date: '2026'
    },
    categories: [
      {
        title: { ar: 'المنظومة التشريعية', en: 'Primary Legislation' },
        items: [
          { id: 'leg-acts', title: { ar: 'قوانين البنك المركزي والقطاع المالي', en: 'Central Bank & Financial Laws' }, href: '/documents?type=law' },
          { id: 'leg-regulations', title: { ar: 'اللوائح والضوابط الرقابية المنظمة', en: 'Executive Regulations' }, href: '/documents?type=regulation' },
        ]
      },
      {
        title: { ar: 'التعاميم والمنشورات الرقابية', en: 'Circulars & Directives' },
        items: [
          { id: 'leg-circulars-2026', title: { ar: 'منشورات وتعاميم العام الحالي 2026', en: 'Circulars Year 2026' }, href: '/documents?type=circular&year=2026' },
          { id: 'leg-circulars-archive', title: { ar: 'أرشيف المنشورات الرقابية المصنفة', en: 'Historical Circulars Archive' }, href: '/documents?type=circular' },
        ]
      }
    ]
  },
  {
    id: 'data-statistics',
    title: { ar: 'البيانات والإحصاء', en: 'Data & Statistics' },
    href: '/data',
    featuredDocument: {
      title: { ar: 'المؤشرات الاقتصادية والمالية الشاملة للسودان', en: 'Sudan Comprehensive Economic Indicators' },
      refNumber: 'DS-2026-STAT',
      href: '/data',
      date: '2026'
    },
    categories: [
      {
        title: { ar: 'المجاميع الإحصائية', en: 'Statistical Aggregates' },
        items: [
          { id: 'data-monetary', title: { ar: 'المجاميع النقدية وعرض النقود (M1, M2)', en: 'Monetary Aggregates (M1, M2)' }, href: '/data#monetary' },
          { id: 'data-trade', title: { ar: 'إحصاءات التجارة الخارجية وميزان المدفوعات', en: 'Foreign Trade & Balance of Payments' }, href: '/data#trade' },
          { id: 'data-inflation', title: { ar: 'مؤشرات الأسعار والتضخم الاقتصادي', en: 'Inflation & Price Indices' }, href: '/data#inflation' },
          { id: 'data-gdds', title: { ar: 'النظام العام لنشر البيانات (e-GDDS IMF)', en: 'IMF e-GDDS National Summary' }, href: '/data#gdds' },
        ]
      },
      {
        title: { ar: 'التنزيل والواجهات البرمجية', en: 'Exports & Datasets' },
        items: [
          { id: 'data-download', title: { ar: 'كتالوج البيانات المفتوحة (CSV / XLSX)', en: 'Open Data Catalog (CSV/XLSX)' }, href: '/data' },
        ]
      }
    ]
  },
  {
    id: 'publications',
    title: { ar: 'الإصدارات والبحوث', en: 'Publications' },
    href: '/publications',
    featuredDocument: {
      title: { ar: 'التقرير السنوي لبنك السودان المركزي', en: 'CBOS Annual Report' },
      refNumber: 'AR-CBOS-2025',
      href: '/publications?type=annual-report',
      date: 'Annual'
    },
    categories: [
      {
        title: { ar: 'التقارير السنوية والدورية', en: 'Periodic Reports' },
        items: [
          { id: 'pub-annual', title: { ar: 'التقارير السنوية (الأرشيف الكامل)', en: 'Annual Reports (1960–2026)' }, href: '/publications?type=annual-report' },
          { id: 'pub-bulletin', title: { ar: 'النشرة الاقتصادية والمالية الربع سنوية', en: 'Economic & Financial Bulletin' }, href: '/publications?type=bulletin' },
          { id: 'pub-trade', title: { ar: 'موجز إحصاءات التجارة الخارجية', en: 'Foreign Trade Statistical Digest' }, href: '/publications?type=digest' },
        ]
      },
      {
        title: { ar: 'الدوريات والأبحاث المتخصصة', en: 'Journals & Research' },
        items: [
          { id: 'pub-masrafi', title: { ar: 'مجلة المصرفي الدورية', en: 'Al-Masrafi Banking Journal' }, href: '/publications?type=journal' },
          { id: 'pub-studies', title: { ar: 'أوراق العمل والدراسات المصرفية والشرعية', en: 'Economic & Sharia Working Papers' }, href: '/publications?type=research' },
        ]
      }
    ]
  },
  {
    id: 'payments',
    title: { ar: 'نظم الدفع والتقنية المالية', en: 'Payments & FinTech' },
    href: '/payments',
    featuredDocument: {
      title: { ar: 'المحوّل القومي للمدفوعات الإلكترونية (NIPS)', en: 'National Electronic Payment Switch (NIPS)' },
      refNumber: 'NIPS-SOV-2026',
      href: '/payments#nips',
      date: 'Live'
    },
    categories: [
      {
        title: { ar: 'البنية التحتية القومية للمدفوعات', en: 'National Infrastructure' },
        items: [
          { id: 'pay-nips', title: { ar: 'المحوّل القومي للمدفوعات الإلكترونية (NIPS)', en: 'National Electronic Payment Switch (NIPS)' }, href: '/payments#nips' },
          { id: 'pay-rtgs', title: { ar: 'نظام التسوية اللحظية الشاملة (RTGS)', en: 'Real-Time Gross Settlement (RTGS)' }, href: '/payments#rtgs' },
          { id: 'pay-ecc', title: { ar: 'المقاصة الإلكترونية للشيكات (ECC)', en: 'Electronic Cheque Clearing (ECC)' }, href: '/payments' },
          { id: 'pay-pos', title: { ar: 'شبكة نقاط البيع والصرافات الآلية', en: 'National POS & ATM Switch' }, href: '/payments#ebs' },
        ]
      },
      {
        title: { ar: 'الابتكار والشمول المالي', en: 'FinTech & Inclusion' },
        items: [
          { id: 'pay-sandbox', title: { ar: 'البيئة الرقابية التجريبية للتقنية المالية', en: 'Regulatory Sandbox for FinTech' }, href: '/payments#sandbox' },
          { id: 'pay-inclusion', title: { ar: 'استراتيجية الشمول المالي والتحول الرقمي', en: 'Financial Inclusion Strategy' }, href: '/financial-inclusion' },
          { id: 'pay-cyber', title: { ar: 'إطار الأمن السيبراني للقطاع المالي', en: 'Cybersecurity Financial Framework' }, href: '/cybersecurity' },
        ]
      }
    ]
  },
  {
    id: 'currency',
    title: { ar: 'العملة والبنكنوت', en: 'Currency & Banknotes' },
    href: '/banknotes',
    featuredDocument: {
      title: { ar: 'دليل العلامات التأمينية للعملة الوطنية السودانية', en: 'Official Sudanese Banknote Security Guide' },
      refNumber: 'CUR-SEC-2026',
      href: '/banknotes',
      date: '2026'
    },
    categories: [
      {
        title: { ar: 'الفئات النقدية المتداولة', en: 'Circulating Denominations' },
        items: [
          { id: 'cur-2000', title: { ar: 'الفئة النقدية: 2000 جنيه سوداني', en: '2,000 Sudanese Pounds Note' }, href: '/banknotes#note-2000' },
          { id: 'cur-1000', title: { ar: 'الفئة النقدية: 1000 جنيه سوداني', en: '1,000 Sudanese Pounds Note' }, href: '/banknotes#note-1000' },
          { id: 'cur-500', title: { ar: 'الفئة النقدية: 500 جنيه سوداني', en: '500 Sudanese Pounds Note' }, href: '/banknotes#note-500' },
          { id: 'cur-all', title: { ar: 'جميع الفئات المتداولة والمواصفات', en: 'All Denominations & Dimensions' }, href: '/banknotes' },
        ]
      },
      {
        title: { ar: 'التوعية ومكافحة التزييف', en: 'Security Features' },
        items: [
          { id: 'cur-security', title: { ar: 'العلامات التأمينية والفحص البصري', en: 'Security Features & Verification' }, href: '/banknotes#security' },
          { id: 'cur-exchange', title: { ar: 'ضوابط استبدال العملة التالفة والمسحوبة', en: 'Mutilated Currency Replacement' }, href: '/banknotes' },
        ]
      }
    ]
  }
];
