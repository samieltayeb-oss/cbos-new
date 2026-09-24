import { BanknoteDenomination } from '@/types/banknote';

export const officialBanknotesData: BanknoteDenomination[] = [
  {
    id: 'sdg-2000',
    value: 2000,
    currency: 'SDG',
    seriesYear: 2024,
    title: {
      ar: 'فئة ألفين جنيه سوداني',
      en: '2,000 Sudanese Pounds Banknote'
    },
    dimensions: '160 × 74 mm',
    primaryColor: {
      ar: 'الأزرق الداكن والرمادي والبنفسجي الأمني',
      en: 'Deep Blue, Slate Gray & Security Purple'
    },
    frontImage: '/images/cbos/official/banknote-2000-front.jpg',
    frontTheme: {
      ar: 'المبنى التاريخي للبنك المركزي وشعار صقر الجديان والزخارف النقدية السيادية',
      en: 'CBOS Headquarters, Secretary Bird National Emblem & Sovereign Guilloche'
    },
    backTheme: {
      ar: 'التعدين والموارد الطبيعية والتصنيع والنهضة الاقتصادية الحديثة في السودان',
      en: 'Mining, Natural Resources, Industrial Modernization & Economic Sovereignty'
    },
    securityFeatures: [
      {
        id: 'feat-2000-wm',
        name: { ar: 'العلامة المائية لصقر الجديان والرقم 2000', en: 'Secretary Bird Watermark & Electrotype 2000' },
        description: {
          ar: 'تظهر علامة مائية متعددة التدرجات لصقر الجديان وقيمة الفئة مضيئة عند توجيه الورقة إلى الضوء النافذ.',
          en: 'Multi-tone watermark of the Secretary Bird with bright electrotype numeral 2000 visible against light.'
        },
        x_percent: 22,
        y_percent: 48,
        type: 'watermark'
      },
      {
        id: 'feat-2000-th',
        name: { ar: 'خيط الأمان المغناطيسي المتغير بصرياً (SPARK)', en: 'Windowed Motion Security Thread (SPARK)' },
        description: {
          ar: 'خيط أمان متداخل يتغير لونه ديناميكياً مع إمالة الورقة ويحمل نص بنك السودان المركزي وقيمة 2000.',
          en: 'Optically variable security thread that shifts color upon tilting, engraved with CBOS 2000.'
        },
        x_percent: 54,
        y_percent: 50,
        type: 'thread'
      },
      {
        id: 'feat-2000-int',
        name: { ar: 'الطباعة الغائرة والرمز اللمسي للمكفوفين', en: 'Intaglio Tactile Print & Visually Impaired Mark' },
        description: {
          ar: 'ملمس بارز خشن على اسم البنك والأرقام ورموز خاصة على الحواف لمساعدة فاقدي البصر في تمييز الفئة.',
          en: 'Raised tactile intaglio ink on denomination and central text, with blind-recognition notches.'
        },
        x_percent: 88,
        y_percent: 25,
        type: 'intaglio'
      },
      {
        id: 'feat-2000-st',
        name: { ar: 'علامة التطابق الطباعي (See-Through)', en: 'Perfect Registration See-Through Device' },
        description: {
          ar: 'رمز هندسي مطبوع جزئياً على الوجهين يكتمل بدقة متناهية عند النظر للورقة أمام مصدر ضوء.',
          en: 'Incomplete geometric registration pattern on front and back that seamlessly aligns when backlit.'
        },
        x_percent: 38,
        y_percent: 78,
        type: 'see-through'
      }
    ]
  },
  {
    id: 'sdg-1000',
    value: 1000,
    currency: 'SDG',
    seriesYear: 2022,
    title: {
      ar: 'فئة ألف جنيه سوداني',
      en: '1,000 Sudanese Pounds Banknote'
    },
    dimensions: '155 × 72 mm',
    primaryColor: {
      ar: 'الأزرق الفاتح والذهبي والزيتوني',
      en: 'Cyan Blue, Muted Gold & Olive'
    },
    frontImage: '/images/cbos/official/banknote-2000-front.jpg', // Verified fallback
    frontTheme: {
      ar: 'الزراعة ومشاريع الري القومية وحصاد القمح والقطن',
      en: 'Agriculture, National Irrigation Projects, Wheat & Cotton Harvest'
    },
    backTheme: {
      ar: 'سد مروي والمنشآت الكهرومائية والطاقة المتجددة في السودان',
      en: 'Merowe Hydroelectric Dam & Renewable National Energy Infrastructure'
    },
    securityFeatures: [
      {
        id: 'feat-1000-wm',
        name: { ar: 'العلامة المائية لصقر الجديان والكهرباء', en: 'Secretary Bird Watermark & Electrotype 1000' },
        description: {
          ar: 'صورة مجسمة لصقر الجديان تظهر عند النظر عبر الضوء مع أرقام دقيقة عالية التباين.',
          en: 'High-definition Secretary Bird watermark with high-contrast electrotype 1000.'
        },
        x_percent: 24,
        y_percent: 50,
        type: 'watermark'
      },
      {
        id: 'feat-1000-th',
        name: { ar: 'شريط الأمان المغناطيسي المتغير لونياً', en: 'Color-Shifting Magnetic Thread' },
        description: {
          ar: 'خيط أمان متغير بصرياً من الأخضر إلى الأزرق مع حركة ليزرية ثلاثية الأبعاد.',
          en: 'Color-shifting magnetic thread shifting between green and blue with dynamic micro-motion.'
        },
        x_percent: 52,
        y_percent: 50,
        type: 'thread'
      }
    ]
  },
  {
    id: 'sdg-500',
    value: 500,
    currency: 'SDG',
    seriesYear: 2021,
    title: {
      ar: 'فئة خمسمائة جنيه سوداني',
      en: '500 Sudanese Pounds Banknote'
    },
    dimensions: '150 × 70 mm',
    primaryColor: {
      ar: 'الأرجواني والوردي والرمادي اللؤلؤي',
      en: 'Purple, Rose & Pearl Slate'
    },
    frontImage: '/images/cbos/official/banknote-500-front.jpg',
    frontTheme: {
      ar: 'صناعة التعدين والنفط والصناعات التحويلية السودانية',
      en: 'Mining, Petroleum Infrastructure & Sudanese Manufacturing'
    },
    backTheme: {
      ar: 'الآثار السودانية القديمة وحضارة مروي وأهرامات البجراوية',
      en: 'Ancient Sudanese Civilization, Kingdom of Kush & Pyramids of Meroë'
    },
    securityFeatures: [
      {
        id: 'feat-500-wm',
        name: { ar: 'العلامة المائية والرقم 500', en: 'Watermark & Electrotype 500' },
        description: {
          ar: 'علامة مائية متعددة الدرجات لرمز السيادة الوطنية السودانية تظهر بوضوح في الضوء.',
          en: 'Multi-grade watermark of the national emblem with distinct electrotype 500.'
        },
        x_percent: 23,
        y_percent: 52,
        type: 'watermark'
      },
      {
        id: 'feat-500-int',
        name: { ar: 'الطباعة الغائرة وعلامات اللمس للمكفوفين', en: 'Tactile Embossed Intaglio Print' },
        description: {
          ar: 'طباعة بارزة الملمس على صقر الجديان وأطراف الورقة لتمييز الأصالة باللمس.',
          en: 'Embossed intaglio printing providing a distinctive rough tactile signature.'
        },
        x_percent: 85,
        y_percent: 30,
        type: 'intaglio'
      }
    ]
  }
];
