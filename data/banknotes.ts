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
    seriesYear: 2024,
    title: {
      ar: 'فئة ألف جنيه سوداني',
      en: '1,000 Sudanese Pounds Banknote'
    },
    dimensions: '158 × 70 mm',
    primaryColor: {
      ar: 'تدرجات الأصفر والأخضر والذهبي',
      en: 'Gold, Olive Green & Yellow'
    },
    frontImage: '/images/cbos/official/banknote-1000-front.jpg',
    frontTheme: {
      ar: 'الموانئ البحرية وصوامع الغلال القومية وسبائك الذهب الوطنية',
      en: 'Port Sudan Seaport, National Grain Silos & Sovereign Gold Bullion'
    },
    backTheme: {
      ar: 'مقر بنك السودان المركزي بالخرطوم والسيادة النقدية',
      en: 'Central Bank of Sudan Headquarters & Monetary Sovereignty'
    },
    securityFeatures: [
      {
        id: 'feat-1000-wm',
        name: { ar: 'العلامة المائية لصقر الجديان والرقم 1000', en: 'Secretary Bird Watermark & Electrotype 1000' },
        description: {
          ar: 'صورة مجسمة لصقر الجديان تظهر عند النظر عبر الضوء مع أرقام دقيقة عالية التباين.',
          en: 'High-definition Secretary Bird watermark with high-contrast electrotype 1000.'
        },
        x_percent: 14,
        y_percent: 50,
        type: 'watermark'
      },
      {
        id: 'feat-1000-th',
        name: { ar: 'خيط الأمان اللامع والمتحرك بصرياً', en: 'Dynamic Windowed Holographic Security Thread' },
        description: {
          ar: 'شريط تأميني لامع ومتحرك بصرياً على الواجهة الأمامية يحمل رقم الفئة (1000) وعبارة (CBOS).',
          en: 'Optically dynamic security thread on the front face featuring denomination 1000 and text CBOS.'
        },
        x_percent: 31,
        y_percent: 45,
        type: 'thread'
      },
      {
        id: 'feat-1000-gold',
        name: { ar: 'سبائك الذهب والنظائر المتطابقة', en: 'Gold Bullion Intaglio & See-Through Device' },
        description: {
          ar: 'طباعة بارزة الملمس على سبائك الذهب تكتمل بدقة متناهية عند النظر للورقة أمام مصدر ضوء.',
          en: 'Raised intaglio gold bars aligning with complementary reverse print when backlit.'
        },
        x_percent: 68,
        y_percent: 28,
        type: 'intaglio'
      },
      {
        id: 'feat-1000-silos',
        name: { ar: 'صوامع الغلال والباخرة بالطباعة البارزة', en: 'Grain Silos & Port Sudan Maritime Vessels' },
        description: {
          ar: 'طباعة غائرة خشنة الملمس على صومعة الغلال والباخرة وعبارة بنك السودان المركزي وألف جنيه سوداني.',
          en: 'Heavily tactile intaglio print on the silos, maritime transport vessel, and central typography.'
        },
        x_percent: 48,
        y_percent: 55,
        type: 'intaglio'
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
