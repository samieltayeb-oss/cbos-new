import { BilingualString } from '@/types';

export interface LeaderProfile {
  id: string;
  name: BilingualString;
  role: BilingualString;
  bio: BilingualString;
  image?: string;
  category: 'governor' | 'deputy' | 'board_member' | 'sharia_board';
}

export const leadershipData: LeaderProfile[] = [
  {
    id: 'lead-gov',
    name: { ar: 'السيد / محافظ بنك السودان المركزي', en: 'The Governor of the Central Bank of Sudan' },
    role: { ar: 'محافظ بنك السودان المركزي ورئيس مجلس الإدارة', en: 'Governor of CBOS & Chairman of the Board of Directors' },
    bio: {
      ar: 'يقود البنك المركزي نحو تحقيق الاستقرار النقدي، وتعزيز صلابة الجهاز المصرفي، والتحول الرقمي الشامل لأنظمة الدفع القومية بما يدعم التعافي الاقتصادي والشمول المالي في السودان.',
      en: 'Leading the Central Bank towards price stability, financial system resilience, and sovereign digital payment transformation supporting national recovery and financial inclusion.'
    },
    image: '/images/cbos/official/governor-portrait.png',
    category: 'governor'
  },
  {
    id: 'lead-deputy-1',
    name: { ar: 'نائب أول محافظ بنك السودان المركزي', en: 'First Deputy Governor' },
    role: { ar: 'قطاع السياسات النقدية والبحوث والأسواق المالية', en: 'Monetary Policy, Research & Financial Markets Sector' },
    bio: {
      ar: 'الإشراف على صياغة وتنفيذ أدوات السياسة النقدية والائتمانية وإدارة أسواق الصرف الأجنبي والاحتياطيات الدولية والتنسيق مع المؤسسات المالية الدولية.',
      en: 'Supervising monetary policy formulation, credit directives, foreign exchange markets, international reserve custody, and multilateral relations.'
    },
    category: 'deputy'
  },
  {
    id: 'lead-deputy-2',
    name: { ar: 'نائب محافظ بنك السودان المركزي', en: 'Deputy Governor' },
    role: { ar: 'قطاع الرقابة المصرفية ونظم الدفع وتقنية المعلومات', en: 'Banking Supervision, Payment Systems & IT Sector' },
    bio: {
      ar: 'الإشراف على سلامة الجهاز المصرفي وتطبيق المعايير الاحترازية وتشغيل البنية التحتية القومية للمدفوعات الفورية (NIPS) ومكافحة غسل الأموال.',
      en: 'Oversight of banking system soundness, prudential regulation, AML/CFT compliance, and sovereign national payment infrastructure (NIPS).'
    },
    category: 'deputy'
  },
  {
    id: 'lead-sharia-1',
    name: { ar: 'رئيس الهيئة العليا للرقابة الشرعية', en: 'Chairman of High Sharia Supervisory Board' },
    role: { ar: 'الهيئة العليا للرقابة الشرعية للجهاز المصرفي والمؤسسات المالية', en: 'High Sharia Supervisory Board for Banking & Financial Institutions' },
    bio: {
      ar: 'إصدار الفتاوى والمعايير الشرعية الملزمة لكافة المصارف السودانية وتدقيق منتجات الصكوك والسياسات النقدية المتوافقة مع الشريعة.',
      en: 'Issuing authoritative Sharia rulings, auditing sovereign Sukuk structures, and overseeing compliance across all financial institutions.'
    },
    category: 'sharia_board'
  },
  {
    id: 'lead-sharia-2',
    name: { ar: 'أمين عام الهيئة العليا للرقابة الشرعية', en: 'Secretary General of High Sharia Supervisory Board' },
    role: { ar: 'أمانة الفتوى والبحوث الشرعية والمطابقة المالية', en: 'Sharia Rulings, Research & Financial Compliance Secretariat' },
    bio: {
      ar: 'إدارة الدراسات الفقهية المقارنة والتحقق من التزام المصارف التجارية بالمعايير الصادرة عن الهيئة ومطابقة العقود التمويلية.',
      en: 'Directing comparative jurisprudential studies, compliance verification, and institutional adherence to approved Islamic contracts.'
    },
    category: 'sharia_board'
  },
  {
    id: 'lead-board-1',
    name: { ar: 'عضو مجلس الإدارة المستقل - خبير مالي واقتصادي', en: 'Independent Board Member - Macroeconomics Expert' },
    role: { ar: 'مجلس إدارة بنك السودان المركزي', en: 'Board of Directors, Central Bank of Sudan' },
    bio: {
      ar: 'المساهمة في تقييم السياسات النقدية ومراجعة الموازنات التقديرية واستراتيجيات الاستثمار السيادي وإدارة المخاطر النظامية.',
      en: 'Contributing to monetary policy evaluation, sovereign investment oversight, and systemic macroprudential risk management.'
    },
    category: 'board_member'
  },
  {
    id: 'lead-board-2',
    name: { ar: 'عضو مجلس الإدارة - وكيل وزارة المالية والتخطيط الاقتصادي', en: 'Board Member - Undersecretary of Ministry of Finance' },
    role: { ar: 'التنسيق بين السياسة المالية والسياسة النقدية', en: 'Fiscal & Monetary Policy Coordination' },
    bio: {
      ar: 'تمثيل وزارة المالية لضمان التناغم التام بين موازنة الدولة وأهداف الاستقرار النقدي وكفاءة التمويل الحكومي عبر الصكوك.',
      en: 'Ensuring seamless coordination between the national budget, sovereign Sukuk debt operations, and monetary stability objectives.'
    },
    category: 'board_member'
  }
];
