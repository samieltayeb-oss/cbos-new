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
    coverImage: '/images/cbos/gallery/retiree_visit_1.jpg',
    images: [
      '/images/cbos/gallery/retiree_visit_1.jpg',
      '/images/cbos/gallery/retiree_visit_2.jpg',
      '/images/cbos/gallery/retiree_visit_3.jpg',
      '/images/cbos/gallery/retiree_visit_4.jpg'
    ],
    category: 'community',
    description: {
      ar: 'في إطار تعزيز الروابط الإنسانية وتثمين عطاء الكوادر المصرفية التي خدمت البنك المركزي، قام النائب الأول للمحافظ بزيارة تفقدية لعدد من المتقاعدين تقديراً لمسيرتهم المهنية.',
      en: 'As part of fostering institutional values and honoring dedicated banking personnel, the First Deputy Governor conducted a visitation program to retired staff.'
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
    coverImage: '/images/cbos/gallery/cbos_historic_headquarters.jpg',
    images: [
      '/images/cbos/gallery/cbos_historic_headquarters.jpg',
      '/images/cbos/hero/cbos-hero-building-khartoum-premium.jpg',
      '/images/cbos/hero/cbos-hero-sovereign-bastion.jpg'
    ],
    category: 'heritage',
    description: {
      ar: 'معرض يوثق الصرح المعماري السيادي لبنك السودان المركزي في قلب العاصمة الخرطوم، شاهداً على أكثر من ستة عقود من حماية السيادة النقدية.',
      en: 'Photo documentation celebrating the architectural heritage of the Central Bank of Sudan sovereign headquarters in Khartoum.'
    }
  },
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
    coverImage: '/images/cbos/gallery/eid_greetings_2026.jpg',
    images: [
      '/images/cbos/gallery/eid_greetings_2026.jpg'
    ],
    category: 'official',
    description: {
      ar: 'تبادلت الإدارة العليا لبنك السودان المركزي التهاني المباركة بمناسبة عيد الأضحى مع أسرة العاملين بالجهاز المصرفي وممثلي البنوك التجارية العاملة.',
      en: 'Executive management convened with bank staff and leaders across commercial banking institutions on the joyous occasion of Eid Al-Adha.'
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
    coverImage: '/images/cbos/gallery/comesa_governors_meeting.jpg',
    images: [
      '/images/cbos/gallery/comesa_governors_meeting.jpg'
    ],
    category: 'international',
    description: {
      ar: 'استضافة جمهورية السودان لأعمال الدورة الـ 20 لاجتماعات محافظي البنوك المركزية لدول الكوميسا، لبحث التكامل المالي الإقليمي ونظم المقاصة والتسوية.',
      en: 'Sudan hosted the 20th Ordinary Meeting of COMESA Central Bank Governors, discussing regional financial integration and interbank settlement mechanisms.'
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
    coverImage: '/images/cbos/gallery/golden_jubilee_celebration.jpg',
    images: [
      '/images/cbos/gallery/golden_jubilee_celebration.jpg'
    ],
    category: 'heritage',
    description: {
      ar: 'مراسم الاحتفال بمرور خمسين عاماً على تأسيس بنك السودان المركزي وتكريم الرواد والمؤسسين الذين أرسوا دعائم السيادة المالية الوطنية.',
      en: 'Ceremonial commemoration marking fifty years since the founding of CBOS, honoring institutional pioneers of national monetary independence.'
    }
  }
];
