import { FinancialInstitution } from '@/types/institution';

export const licensedInstitutionsData: FinancialInstitution[] = [
  {
    id: 'BOK-001',
    licenseNumber: 'CBOS-LIC-BK-1913',
    name: { ar: 'بنك الخرطوم', en: 'Bank of Khartoum' },
    type: 'commercial_bank',
    typeLabel: { ar: 'مصرف تجاري إسلامي', en: 'Commercial Islamic Bank' },
    status: 'active',
    headquarters: { ar: 'الخرطوم / بورتسودان', en: 'Khartoum / Port Sudan' },
    establishedYear: 1913,
    swiftBic: 'BOKHSDMX',
    website: 'https://bankofkhartoum.com',
    branchesCount: 140
  },
  {
    id: 'FIB-002',
    licenseNumber: 'CBOS-LIC-BK-1977',
    name: { ar: 'بنك فيصل الإسلامي السوداني', en: 'Faisal Islamic Bank (Sudan)' },
    type: 'commercial_bank',
    typeLabel: { ar: 'مصرف تجاري إسلامي', en: 'Commercial Islamic Bank' },
    status: 'active',
    headquarters: { ar: 'الخرطوم / بورتسودان', en: 'Khartoum / Port Sudan' },
    establishedYear: 1977,
    swiftBic: 'FIBSDSKX',
    website: 'https://fib-sd.com',
    branchesCount: 95
  },
  {
    id: 'ONB-003',
    licenseNumber: 'CBOS-LIC-BK-1993',
    name: { ar: 'بنك أم درمان الوطني', en: 'Omdurman National Bank' },
    type: 'commercial_bank',
    typeLabel: { ar: 'مصرف تجاري وطني', en: 'National Commercial Bank' },
    status: 'active',
    headquarters: { ar: 'أم درمان / بورتسودان', en: 'Omdurman / Port Sudan' },
    establishedYear: 1993,
    swiftBic: 'ONBSSD2X',
    website: 'https://onb-sd.com',
    branchesCount: 88
  },
  {
    id: 'ABS-004',
    licenseNumber: 'CBOS-LIC-BK-1957',
    name: { ar: 'البنك الزراعي السوداني', en: 'Agricultural Bank of Sudan' },
    type: 'specialized_bank',
    typeLabel: { ar: 'مصرف تنموي متخصص', en: 'Specialized Development Bank' },
    status: 'active',
    headquarters: { ar: 'الخرطوم / القضارف', en: 'Khartoum / Gedaref' },
    establishedYear: 1957,
    swiftBic: 'AGBKSDXX',
    branchesCount: 110
  },
  {
    id: 'IDB-005',
    licenseNumber: 'CBOS-LIC-BK-1961',
    name: { ar: 'بنك التنمية الصناعية', en: 'Industrial Development Bank' },
    type: 'specialized_bank',
    typeLabel: { ar: 'مصرف تنموي صناعي', en: 'Industrial Development Bank' },
    status: 'active',
    headquarters: { ar: 'الخرطوم / بورتسودان', en: 'Khartoum / Port Sudan' },
    establishedYear: 1961,
    branchesCount: 30
  },
  {
    id: 'SFB-006',
    licenseNumber: 'CBOS-LIC-BK-1978',
    name: { ar: 'البنك السوداني الفرنسي', en: 'Sudanese French Bank' },
    type: 'commercial_bank',
    typeLabel: { ar: 'مصرف تجاري', en: 'Commercial Bank' },
    status: 'active',
    headquarters: { ar: 'الخرطوم / بورتسودان', en: 'Khartoum / Port Sudan' },
    establishedYear: 1978,
    swiftBic: 'SFBKSDXX',
    branchesCount: 42
  },
  {
    id: 'ABK-007',
    licenseNumber: 'CBOS-LIC-BK-1984',
    name: { ar: 'بنك البركة السوداني', en: 'Al Baraka Bank Sudan' },
    type: 'commercial_bank',
    typeLabel: { ar: 'مصرف تجاري إسلامي إقليمي', en: 'Regional Islamic Bank' },
    status: 'active',
    headquarters: { ar: 'الخرطوم / بورتسودان', en: 'Khartoum / Port Sudan' },
    establishedYear: 1984,
    swiftBic: 'BARKSDXX',
    branchesCount: 36
  },
  {
    id: 'BNM-008',
    licenseNumber: 'CBOS-LIC-BK-1983',
    name: { ar: 'بنك النيل الأزرق المشرق', en: 'Blue Nile Mashreq Bank' },
    type: 'commercial_bank',
    typeLabel: { ar: 'مصرف تجاري استثماري', en: 'Investment & Commercial Bank' },
    status: 'active',
    headquarters: { ar: 'الخرطوم / بورتسودان', en: 'Khartoum / Port Sudan' },
    establishedYear: 1983,
    swiftBic: 'BNMASDXX',
    branchesCount: 22
  },
  {
    id: 'TDB-009',
    licenseNumber: 'CBOS-LIC-BK-1983',
    name: { ar: 'بنك التضامن الإسلامي', en: 'Tadamon Islamic Bank' },
    type: 'commercial_bank',
    typeLabel: { ar: 'مصرف تجاري إسلامي', en: 'Commercial Islamic Bank' },
    status: 'active',
    headquarters: { ar: 'الخرطوم / كسلا', en: 'Khartoum / Kassala' },
    establishedYear: 1983,
    swiftBic: 'TDMNSDXX',
    branchesCount: 38
  },
  {
    id: 'EBS-010',
    licenseNumber: 'CBOS-LIC-SW-2005',
    name: { ar: 'شركة الخدمات المصرفية الإلكترونية (EBS)', en: 'Electronic Banking Services (EBS)' },
    type: 'payment_switch',
    typeLabel: { ar: 'مشغل المقسم القومي للدفع', en: 'National Payment Switch Operator' },
    status: 'active',
    headquarters: { ar: 'بورتسودان / الخرطوم', en: 'Port Sudan / Khartoum' },
    establishedYear: 2005,
    website: 'https://ebs-sd.com'
  },
  {
    id: 'EXC-011',
    licenseNumber: 'CBOS-LIC-EX-2010',
    name: { ar: 'شركة اليمامة للصرافة والتحويلات', en: 'Al-Yamama Exchange & Remittance' },
    type: 'exchange_bureau',
    typeLabel: { ar: 'شركة صرافة معتمدة', en: 'Licensed Exchange Bureau' },
    status: 'active',
    headquarters: { ar: 'بورتسودان', en: 'Port Sudan' },
    establishedYear: 2010
  },
  {
    id: 'MF-012',
    licenseNumber: 'CBOS-LIC-MF-2012',
    name: { ar: 'مصرف الإبداع للتمويل الأصغر', en: 'Ebdaa Microfinance Bank' },
    type: 'microfinance',
    typeLabel: { ar: 'مؤسسة تمويل أصغر اجتماعي', en: 'Microfinance Institution' },
    status: 'active',
    headquarters: { ar: 'الخرطوم / القضارف', en: 'Khartoum / Gedaref' },
    establishedYear: 2012,
    branchesCount: 28
  }
];
