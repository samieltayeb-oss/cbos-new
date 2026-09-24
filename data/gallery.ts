export interface GalleryAlbum {
  id: string;
  title: {
    ar: string;
    en: string;
  };
  date: string;
  location?: {
    ar: string;
    en: string;
  };
  coverImage: string;
  images: string[];
  category: 'official' | 'heritage' | 'international' | 'community';
  description?: {
    ar: string;
    en: string;
  };
}

export const officialGalleryData: GalleryAlbum[] = [
  {
    id: 'album-eid-greetings-2026',
    title: {
      ar: 'محافظ البنك المركزي ونائبها الأول يتبادلان تهاني عيد الأضحى مع العاملين بالبنك وقيادات العمل المصرفي',
      en: 'CBOS Governor & First Deputy Exchange Eid Al-Adha Greetings with Staff & Banking Executives'
    },
    date: '31/05/2026 - 23:45',
    location: {
      ar: 'المقر الرئيسي لبنك السودان المركزي',
      en: 'CBOS Executive Hall'
    },
    coverImage: '/images/cbos/gallery/enhanced_eid_1_02.jpg',
    images: [
      '/images/cbos/gallery/enhanced_eid_1_02.jpg',
      '/images/cbos/gallery/enhanced_eid_2_03.jpg',
      '/images/cbos/gallery/enhanced_eid_3_04.jpg',
      '/images/cbos/gallery/enhanced_eid_4_05.jpg',
      '/images/cbos/gallery/enhanced_eid_6_07.jpg',
      '/images/cbos/gallery/enhanced_eid_7_08.jpg',
      '/images/cbos/gallery/enhanced_eid_8_09.jpg',
      '/images/cbos/gallery/enhanced_eid_9_10.jpg',
      '/images/cbos/gallery/enhanced_eid_10_11.jpg',
      '/images/cbos/gallery/enhanced_eid_12_13.jpg',
      '/images/cbos/gallery/enhanced_eid_13_14.jpg',
      '/images/cbos/gallery/enhanced_eid_16_17.jpg',
      '/images/cbos/gallery/enhanced_eid_17_18.jpg'
    ],
    category: 'official',
    description: {
      ar: 'تبادلت الإدارة العليا لبنك السودان المركزي التهاني المباركة بمناسبة عيد الأضحى مع أسرة العاملين بالجهاز المصرفي وممثلي البنوك التجارية العاملة، تأكيداً على أواصر التلاحم المؤسسي ودعم المسيرة الاقتصادية.',
      en: 'Executive management convened with bank staff and leaders across commercial banking institutions on the joyous occasion of Eid Al-Adha, reaffirming solidarity and commitment to national financial resilience.'
    }
  },
  {
    id: 'album-retirees-2026',
    title: {
      ar: 'وفاءٌ يُجسّد القيم المؤسسية: النائب الأول لمحافظ بنك السودان المركزي يزور متقاعدي البنك',
      en: 'Institutional Loyalty: First Deputy Governor Visits Bank Retirees'
    },
    date: '18/03/2026 - 15:00',
    location: {
      ar: 'بورتسودان — ولاية البحر الأحمر',
      en: 'Port Sudan — Red Sea State'
    },
    coverImage: '/images/cbos/gallery/enhanced_retirees_1_18032026001.jpg',
    images: [
      '/images/cbos/gallery/enhanced_retirees_1_18032026001.jpg',
      '/images/cbos/gallery/enhanced_retirees_2_18032026002.jpg',
      '/images/cbos/gallery/enhanced_retirees_3_18032026003.jpg',
      '/images/cbos/gallery/enhanced_retirees_4_18032026004.jpg'
    ],
    category: 'community',
    description: {
      ar: 'في إطار تعزيز الروابط الإنسانية وتثمين عطاء الكوادر المصرفية التي خدمت البنك المركزي، قام النائب الأول للمحافظ بزيارة تفقدية لعدد من المتقاعدين تقديراً لمسيرتهم المهنية الوطنية.',
      en: 'As part of fostering institutional values and honoring dedicated banking personnel who served the central bank, the First Deputy Governor conducted a visitation program to retired staff.'
    }
  },
  {
    id: 'album-headquarters-heritage',
    title: {
      ar: 'صور لمبنى بنك السودان المركزي والتراث المعماري',
      en: 'Central Bank of Sudan Historic Headquarters & Architectural Heritage'
    },
    date: '19/09/2016 - 10:45',
    location: {
      ar: 'الخرطوم — السودان',
      en: 'Khartoum — Sudan'
    },
    coverImage: '/images/cbos/hero/cbos-hero-twilight-prestige.jpg',
    images: [
      '/images/cbos/hero/cbos-hero-twilight-prestige.jpg',
      '/images/cbos/official/cbos-headquarters.png',
      '/images/cbos/gallery/enhanced_building_1_dsc_3597.jpg',
      '/images/cbos/gallery/enhanced_building_3_dsc_3606.jpg',
      '/images/cbos/gallery/enhanced_building_4_dsc_4472.jpg',
      '/images/cbos/gallery/enhanced_building_5_dsc_4473.jpg',
      '/images/cbos/gallery/enhanced_building_6_dsc_5647.jpg',
      '/images/cbos/gallery/enhanced_building_7_dsc_7493.jpg',
      '/images/cbos/gallery/enhanced_building_8_cbos_old_building_web-new.jpg'
    ],
    category: 'heritage',
    description: {
      ar: 'توثيق معماري وتاريخي للصرح السيادي لبنك السودان المركزي في قلب العاصمة الخرطوم، شاهداً على أكثر من ستة عقود من حماية السيادة النقدية والاستقرار المالي.',
      en: 'Architectural and archival photographic documentation celebrating the sovereign headquarters of the Central Bank of Sudan in Khartoum across six decades of monetary stewardship.'
    }
  },
  {
    id: 'album-golden-jubilee',
    title: {
      ar: 'الحفل الختامي لليوبيل الذهبي لبنك السودان المركزي',
      en: 'Golden Jubilee Concluding Ceremonies of the Central Bank of Sudan'
    },
    date: '19/09/2016 - 10:30',
    location: {
      ar: 'الخرطوم — السودان',
      en: 'Khartoum — Sudan'
    },
    coverImage: '/images/cbos/gallery/enhanced_jubilee_22_DSC06119.jpg',
    images: [
      '/images/cbos/gallery/enhanced_jubilee_22_DSC06119.jpg',
      '/images/cbos/gallery/enhanced_jubilee_16_DSC06012.jpg',
      '/images/cbos/gallery/enhanced_jubilee_5_DSC05939.jpg',
      '/images/cbos/gallery/enhanced_jubilee_14_DSC06007.jpg',
      '/images/cbos/gallery/enhanced_jubilee_2_DSC05893.jpg',
      '/images/cbos/gallery/enhanced_jubilee_21_DSC06109.jpg',
      '/images/cbos/gallery/enhanced_jubilee_20_DSC06075.jpg',
      '/images/cbos/gallery/enhanced_jubilee_13_DSC05988_0.jpg',
      '/images/cbos/gallery/enhanced_jubilee_17_DSC06027.jpg',
      '/images/cbos/gallery/enhanced_jubilee_1_DSC05884.jpg',
      '/images/cbos/gallery/enhanced_jubilee_18_DSC06039.jpg',
      '/images/cbos/gallery/enhanced_jubilee_15_DSC06009.jpg',
      '/images/cbos/gallery/enhanced_jubilee_6_DSC05941.jpg',
      '/images/cbos/gallery/enhanced_jubilee_23_DSC06142.jpg'
    ],
    category: 'heritage',
    description: {
      ar: 'مراسم الاحتفال بمرور خمسين عاماً على تأسيس بنك السودان المركزي وتكريم الرواد والمؤسسين الذين أرسوا دعائم السيادة المالية الوطنية والاستقلال النقدي.',
      en: 'Ceremonial commemoration marking fifty years since the founding of CBOS, honoring institutional pioneers of national monetary independence and central banking resilience.'
    }
  },
  {
    id: 'album-comesa-governors',
    title: {
      ar: 'اجتماع محافظي البنوك المركزية لدول الكوميسا - الخرطوم - السودان',
      en: 'Meeting of Governors of Central Banks of COMESA Member States — Khartoum, Sudan'
    },
    date: '19/09/2016 - 10:30',
    location: {
      ar: 'الخرطوم — السودان',
      en: 'Khartoum — Sudan'
    },
    coverImage: '/images/cbos/gallery/enhanced_comesa_1_dsc08480.jpg',
    images: [
      '/images/cbos/gallery/enhanced_comesa_1_dsc08480.jpg'
    ],
    category: 'international',
    description: {
      ar: 'استضافة جمهورية السودان لأعمال الدورة الـ 20 لاجتماعات محافظي البنوك المركزية لدول الكوميسا، لبحث التكامل المالي الإقليمي ونظم المقاصة والتسوية البينية (REPSS).',
      en: 'Sudan hosted the 20th Ordinary Meeting of COMESA Central Bank Governors, discussing regional financial integration, payments interconnectivity, and interbank settlement mechanisms.'
    }
  }
];
