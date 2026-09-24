export interface CorrespondentBankRecord {
  id: string;
  swift_bic: string;
  bank_name: {
    ar: string;
    en: string;
  };
  city_country: {
    ar: string;
    en: string;
  };
  currency: string;
  country_code: string;
}

export const officialCorrespondentsData: CorrespondentBankRecord[] = [
  {
    id: 'cb-01',
    swift_bic: 'ABDI AE AD',
    bank_name: {
      ar: 'مصرف أبوظبي الإسلامي',
      en: 'Abu Dhabi Islamic Bank'
    },
    city_country: {
      ar: 'أبوظبي، الإمارات العربية المتحدة',
      en: 'Abu Dhabi, UAE'
    },
    currency: 'AED',
    country_code: 'AE'
  },
  {
    id: 'cb-02',
    swift_bic: 'ALSA BH BM',
    bank_name: {
      ar: 'بنك السلام - البحرين ش.م.ب',
      en: 'Al Salam Bank-Bahrain B.S.C'
    },
    city_country: {
      ar: 'المنامة، مملكة البحرين',
      en: 'Manama, Bahrain'
    },
    currency: 'AED',
    country_code: 'BH'
  },
  {
    id: 'cb-03',
    swift_bic: 'BOKM AE AD',
    bank_name: {
      ar: 'بنك الخرطوم',
      en: 'Bank of Khartoum'
    },
    city_country: {
      ar: 'أبوظبي، الإمارات العربية المتحدة',
      en: 'Abu Dhabi, UAE'
    },
    currency: 'AED',
    country_code: 'AE'
  },
  {
    id: 'cb-04',
    swift_bic: 'NILB AE AA',
    bank_name: {
      ar: 'بنك النيلين',
      en: 'El Nilein Bank'
    },
    city_country: {
      ar: 'أبوظبي، الإمارات العربية المتحدة',
      en: 'Abu Dhabi, UAE'
    },
    currency: 'AED',
    country_code: 'AE'
  },
  {
    id: 'cb-05',
    swift_bic: 'ALUBBHBM',
    bank_name: {
      ar: 'بنك ألوباف العربي الدولي',
      en: 'Alubaf Arab International Bank'
    },
    city_country: {
      ar: 'المنامة، مملكة البحرين',
      en: 'Manama, Bahrain'
    },
    currency: 'AED',
    country_code: 'BH'
  },
  {
    id: 'cb-06',
    swift_bic: 'CAYT TR IS',
    bank_name: {
      ar: 'أكتيف ياتيريم بنكاسي',
      en: 'Aktif Yatirim Bankasi AS'
    },
    city_country: {
      ar: 'إسطنبول، تركيا',
      en: 'Istanbul, Turkey'
    },
    currency: 'AED',
    country_code: 'TR'
  },
  {
    id: 'cb-07',
    swift_bic: 'UBSI JO AX',
    bank_name: {
      ar: 'بنك الاتحاد',
      en: 'Bank Al Etihad'
    },
    city_country: {
      ar: 'عَمّان، المملكة الأردنية الهاشمية',
      en: 'Amman, Jordan'
    },
    currency: 'AED',
    country_code: 'JO'
  },
  {
    id: 'cb-08',
    swift_bic: 'BABE LB BE',
    bank_name: {
      ar: 'بنك بيروت ش.م.ل',
      en: 'Bank of Beirut SAL'
    },
    city_country: {
      ar: 'بيروت، الجمهورية اللبنانية',
      en: 'Beirut, Lebanon'
    },
    currency: 'AED',
    country_code: 'LB'
  },
  {
    id: 'cb-09',
    swift_bic: 'NILB AE AA',
    bank_name: {
      ar: 'بنك النيلين',
      en: 'El Nilein Bank'
    },
    city_country: {
      ar: 'أبوظبي، الإمارات العربية المتحدة',
      en: 'Abu Dhabi, UAE'
    },
    currency: 'EUR',
    country_code: 'AE'
  },
  {
    id: 'cb-10',
    swift_bic: 'CAYT TR IS',
    bank_name: {
      ar: 'أكتيف ياتيريم بنكاسي',
      en: 'Aktif Yatirim Bankasi AS'
    },
    city_country: {
      ar: 'إسطنبول، تركيا',
      en: 'Istanbul, Turkey'
    },
    currency: 'EUR',
    country_code: 'TR'
  },
  {
    id: 'cb-11',
    swift_bic: 'ALSA BH BM',
    bank_name: {
      ar: 'بنك السلام - البحرين ش.م.ب',
      en: 'Al Salam Bank-Bahrain B.S.C'
    },
    city_country: {
      ar: 'المنامة، مملكة البحرين',
      en: 'Manama, Bahrain'
    },
    currency: 'EUR',
    country_code: 'BH'
  },
  {
    id: 'cb-12',
    swift_bic: 'UBSI JO AX',
    bank_name: {
      ar: 'بنك الاتحاد',
      en: 'Bank Al Etihad'
    },
    city_country: {
      ar: 'عَمّان، المملكة الأردنية الهاشمية',
      en: 'Amman, Jordan'
    },
    currency: 'EUR',
    country_code: 'JO'
  },
  {
    id: 'cb-13',
    swift_bic: 'BABE LB BE',
    bank_name: {
      ar: 'بنك بيروت ش.م.ل',
      en: 'Bank of Beirut SAL'
    },
    city_country: {
      ar: 'بيروت، الجمهورية اللبنانية',
      en: 'Beirut, Lebanon'
    },
    currency: 'EUR',
    country_code: 'LB'
  },
  {
    id: 'cb-14',
    swift_bic: 'BACM GB 2L',
    bank_name: {
      ar: 'المصرف التجاري العربي البريطاني',
      en: 'British Arab Commercial Bank plc'
    },
    city_country: {
      ar: 'لندن، المملكة المتحدة',
      en: 'London, UK'
    },
    currency: 'EUR',
    country_code: 'GB'
  },
  {
    id: 'cb-15',
    swift_bic: 'ALUBBHBM',
    bank_name: {
      ar: 'بنك ألوباف العربي الدولي',
      en: 'Alubaf Arab International Bank'
    },
    city_country: {
      ar: 'المنامة، مملكة البحرين',
      en: 'Manama, Bahrain'
    },
    currency: 'EUR',
    country_code: 'BH'
  },
  {
    id: 'cb-16',
    swift_bic: 'UBSI JO AX',
    bank_name: {
      ar: 'بنك الاتحاد',
      en: 'Bank Al Etihad'
    },
    city_country: {
      ar: 'عَمّان، المملكة الأردنية الهاشمية',
      en: 'Amman, Jordan'
    },
    currency: 'GBP',
    country_code: 'JO'
  },
  {
    id: 'cb-17',
    swift_bic: 'ALSA BH BM',
    bank_name: {
      ar: 'بنك السلام - البحرين ش.م.ب',
      en: 'Al Salam Bank-Bahrain B.S.C'
    },
    city_country: {
      ar: 'المنامة، مملكة البحرين',
      en: 'Manama, Bahrain'
    },
    currency: 'GBP',
    country_code: 'BH'
  },
  {
    id: 'cb-18',
    swift_bic: 'BABE LB BE',
    bank_name: {
      ar: 'بنك بيروت ش.م.ل',
      en: 'Bank of Beirut SAL'
    },
    city_country: {
      ar: 'بيروت، الجمهورية اللبنانية',
      en: 'Beirut, Lebanon'
    },
    currency: 'GBP',
    country_code: 'LB'
  },
  {
    id: 'cb-19',
    swift_bic: 'ALUBBHBM',
    bank_name: {
      ar: 'بنك ألوباف العربي الدولي',
      en: 'Alubaf Arab International Bank'
    },
    city_country: {
      ar: 'المنامة، مملكة البحرين',
      en: 'Manama, Bahrain'
    },
    currency: 'GBP',
    country_code: 'BH'
  },
  {
    id: 'cb-20',
    swift_bic: 'BABE LB BE',
    bank_name: {
      ar: 'بنك بيروت ش.م.ل',
      en: 'Bank of Beirut SAL'
    },
    city_country: {
      ar: 'بيروت، الجمهورية اللبنانية',
      en: 'Beirut, Lebanon'
    },
    currency: 'SAR',
    country_code: 'LB'
  },
  {
    id: 'cb-21',
    swift_bic: 'CAYT TR IS',
    bank_name: {
      ar: 'أكتيف ياتيريم بنكاسي',
      en: 'Aktif Yatirim Bankasi AS'
    },
    city_country: {
      ar: 'إسطنبول، تركيا',
      en: 'Istanbul, Turkey'
    },
    currency: 'TRY',
    country_code: 'TR'
  },
  {
    id: 'cb-22',
    swift_bic: 'BACM GB 2L',
    bank_name: {
      ar: 'المصرف التجاري العربي البريطاني',
      en: 'British Arab Commercial Bank plc'
    },
    city_country: {
      ar: 'لندن، المملكة المتحدة',
      en: 'London, UK'
    },
    currency: 'USD',
    country_code: 'GB'
  },
  {
    id: 'cb-23',
    swift_bic: 'NILB AE AA',
    bank_name: {
      ar: 'بنك النيلين',
      en: 'El Nilein Bank'
    },
    city_country: {
      ar: 'أبوظبي، الإمارات العربية المتحدة',
      en: 'Abu Dhabi, UAE'
    },
    currency: 'USD',
    country_code: 'AE'
  },
  {
    id: 'cb-24',
    swift_bic: 'ALSA BH BM',
    bank_name: {
      ar: 'بنك السلام - البحرين ش.م.ب',
      en: 'Al Salam Bank-Bahrain B.S.C'
    },
    city_country: {
      ar: 'المنامة، مملكة البحرين',
      en: 'Manama, Bahrain'
    },
    currency: 'USD',
    country_code: 'BH'
  },
  {
    id: 'cb-25',
    swift_bic: 'ALUBBHBM',
    bank_name: {
      ar: 'بنك ألوباف العربي الدولي',
      en: 'Alubaf Arab International Bank'
    },
    city_country: {
      ar: 'المنامة، مملكة البحرين',
      en: 'Manama, Bahrain'
    },
    currency: 'USD',
    country_code: 'BH'
  }
];
