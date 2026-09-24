'use client';

import React from 'react';
import Link from 'next/link';
import { useLanguage } from '@/lib/languageContext';
import { 
  Compass, 
  Building2, 
  Coins, 
  LineChart, 
  Scale, 
  BookOpen, 
  CreditCard, 
  ShieldAlert, 
  Newspaper, 
  FileText, 
  Globe2, 
  ExternalLink,
  Camera,
  FolderTree
} from 'lucide-react';

export default function SitemapPage() {
  const { t, isRtl } = useLanguage();

  const sections = [
    {
      title: { ar: 'عن بنك السودان المركزي', en: 'About Central Bank of Sudan' },
      icon: Building2,
      links: [
        { title: { ar: 'نبذة تعريفية ورؤية البنك', en: 'Overview & Vision' }, href: '/about' },
        { title: { ar: 'المحطات التاريخية للتأسيس', en: 'Historical Milestones' }, href: '/about#history' },
        { title: { ar: 'الأهداف والمهام السيادية', en: 'Core Mandate & Objectives' }, href: '/about#mandate' },
        { title: { ar: 'الهيكل الإداري والتنظيمي', en: 'Organizational Structure' }, href: '/about#structure' },
        { title: { ar: 'كلمة محافظ البنك المركزي والقيادة', en: 'Governor & Board of Directors' }, href: '/leadership' },
        { title: { ar: 'محافظو بنك السودان المركزي السابقون', en: 'Former Governors of CBOS' }, href: '/leadership#governors' },
        { title: { ar: 'فروع بنك السودان المركزي', en: 'Branch Network Across Sudan' }, href: '/contact#branches' },
        { title: { ar: 'مراسلو بنك السودان المركزي (السجل الكامل)', en: 'Correspondent Banks Directory' }, href: '/correspondents' },
        { title: { ar: 'معرض الصور والتوثيق الإعلامي', en: 'Official Photo & Media Gallery' }, href: '/gallery' },
      ]
    },
    {
      title: { ar: 'السياسة النقدية والمصرفية', en: 'Monetary & Banking Policy' },
      icon: Scale,
      links: [
        { title: { ar: 'الإطار التشغيلي للسياسة النقدية', en: 'Monetary Policy Framework' }, href: '/monetary-policy' },
        { title: { ar: 'أدوات إدارة السيولة المتوافقة مع الشريعة', en: 'Islamic Liquidity Instruments' }, href: '/monetary-policy#instruments' },
        { title: { ar: 'متطلبات الاحتياطي النقدي القانوني (18%)', en: 'Statutory Cash Reserves' }, href: '/monetary-policy#reserves' },
        { title: { ar: 'سياسات بنك السودان المركزي الرسمية', en: 'Official Policy Directives' }, href: '/monetary-policy' },
      ]
    },
    {
      title: { ar: 'أسعار الصرف والأسواق المالية', en: 'Exchange Rates & Markets' },
      icon: Coins,
      links: [
        { title: { ar: 'النشرة التأشيرية اليومية لأسعار الصرف', en: 'Daily Indicative FX Fixing' }, href: '/exchange-rates' },
        { title: { ar: 'لوحة أسعار المصارف التجارية والصرافات', en: 'Commercial Banks FX Board' }, href: '/exchange-rates#commercial' },
        { title: { ar: 'السجل التاريخي وحاسبة تحويل العملات', en: 'Historical Rates & Currency Calculator' }, href: '/exchange-rates#history' },
        { title: { ar: 'قائمة المصارف المراسلة الدولية', en: 'Authorized Correspondent Banks' }, href: '/correspondents' },
      ]
    },
    {
      title: { ar: 'الجهاز المصرفي والمؤسسات المالية', en: 'Banking & Financial System' },
      icon: Building2,
      links: [
        { title: { ar: 'دليل المصارف التجارية المرخصة', en: 'Licensed Commercial Banks' }, href: '/financial-system?type=commercial_bank' },
        { title: { ar: 'شركات الصرافة والتحويلات المالية', en: 'Foreign Exchange Bureaus' }, href: '/financial-system?type=exchange_bureau' },
        { title: { ar: 'المؤسسات المالية المتخصصة', en: 'Specialized Financial Institutions' }, href: '/financial-system?type=specialized_bank' },
        { title: { ar: 'مشغلو نظم الدفع الإلكتروني', en: 'Payment Switch Operators' }, href: '/financial-system?type=payment_switch' },
        { title: { ar: 'حماية المستهلك المالي وحقوق العملاء', en: 'Financial Consumer Protection' }, href: '/consumer-protection' },
        { title: { ar: 'استراتيجية الشمول المالي', en: 'Financial Inclusion Strategy' }, href: '/financial-inclusion' },
      ]
    },
    {
      title: { ar: 'القوانين واللوائح والمنشورات الرقابية', en: 'Laws, Regulations & Directives' },
      icon: FileText,
      links: [
        { title: { ar: 'قوانين البنك المركزي والقطاع المصرفي', en: 'Central Bank & Banking Acts' }, href: '/documents?type=law' },
        { title: { ar: 'اللوائح التنظيمية المنفذة', en: 'Executive Regulations' }, href: '/documents?type=regulation' },
        { title: { ar: 'المنشورات والتعاميم الرقابية', en: 'Supervisory Circulars' }, href: '/documents?type=circular' },
        { title: { ar: 'منشورات ما بعد 15 أبريل 2023', en: 'Post-April 15 Directives' }, href: '/documents?type=circular&year=2023' },
        { title: { ar: 'مكافحة غسل الأموال وتمويل الإرهاب', en: 'AML / CFT Regulatory Directives' }, href: '/documents?category=aml' },
      ]
    },
    {
      title: { ar: 'البيانات والإحصاءات الاقتصادية', en: 'Economic Intelligence & Data' },
      icon: LineChart,
      links: [
        { title: { ar: 'بوابة المؤشرات الاقتصادية والمالية', en: 'Economic Indicators Portal' }, href: '/data' },
        { title: { ar: 'المجاميع النقدية وعرض النقود (M1, M2)', en: 'Monetary Aggregates' }, href: '/data#monetary' },
        { title: { ar: 'إحصاءات التجارة الخارجية وميزان المدفوعات', en: 'Foreign Trade & Balance of Payments' }, href: '/data#trade' },
        { title: { ar: 'مؤشرات الأسعار والتضخم الاقتصادي', en: 'Inflation & CPI Indices' }, href: '/data#inflation' },
        { title: { ar: 'النظام العام لنشر البيانات (e-GDDS IMF)', en: 'IMF e-GDDS National Summary' }, href: '/data#gdds' },
      ]
    },
    {
      title: { ar: 'الإصدارات والبحوث والتقارير', en: 'Publications & Research Library' },
      icon: BookOpen,
      links: [
        { title: { ar: 'التقارير السنوية لبنك السودان المركزي', en: 'CBOS Annual Reports' }, href: '/publications?type=annual-report' },
        { title: { ar: 'النشرة الاقتصادية والمالية الدورية', en: 'Economic & Financial Bulletin' }, href: '/publications?type=bulletin' },
        { title: { ar: 'موجز إحصاءات التجارة الخارجية', en: 'Foreign Trade Statistical Digest' }, href: '/publications?type=digest' },
        { title: { ar: 'مجلة المصرفي الدورية المحكمة', en: 'Al-Masrafi Banking Journal' }, href: '/publications?type=journal' },
        { title: { ar: 'أوراق العمل والدراسات المصرفية والشرعية', en: 'Economic & Sharia Working Papers' }, href: '/publications?type=research' },
      ]
    },
    {
      title: { ar: 'العملة الوطنية والبنكنوت', en: 'National Currency & Banknotes' },
      icon: Coins,
      links: [
        { title: { ar: 'دليل الفئات النقدية المتداولة', en: 'Circulating Banknotes Catalog' }, href: '/banknotes' },
        { title: { ar: 'فئة 2,000 جنيه سوداني', en: '2,000 SDG Banknote' }, href: '/banknotes#note-2000' },
        { title: { ar: 'فئة 1,000 جنيه سوداني', en: '1,000 SDG Banknote' }, href: '/banknotes#note-1000' },
        { title: { ar: 'فئة 500 جنيه سوداني', en: '500 SDG Banknote' }, href: '/banknotes#note-500' },
        { title: { ar: 'العلامات التأمينية ومكافحة التزييف', en: 'Anti-Counterfeiting Security Architecture' }, href: '/banknotes#security' },
      ]
    },
    {
      title: { ar: 'نظم المدفوعات والتقنية والأمن السيبراني', en: 'Payments, FinTech & Security' },
      icon: CreditCard,
      links: [
        { title: { ar: 'المقسم القومي للمدفوعات الفورية (NIPS)', en: 'National Instant Payment Switch (NIPS)' }, href: '/payments#nips' },
        { title: { ar: 'نظام التسوية اللحظية الشاملة (RTGS)', en: 'Real-Time Gross Settlement (RTGS)' }, href: '/payments#rtgs' },
        { title: { ar: 'المقاصة الإلكترونية للشيكات (ECC)', en: 'Electronic Cheque Clearing (ECC)' }, href: '/payments' },
        { title: { ar: 'البيئة الرقابية التجريبية (Sandbox)', en: 'Regulatory FinTech Sandbox' }, href: '/payments#sandbox' },
        { title: { ar: 'إطار الأمن السيبراني للقطاع المالي', en: 'Cybersecurity Regulatory Framework' }, href: '/cybersecurity' },
      ]
    },
    {
      title: { ar: 'المركز الإعلامي والمناقصات والتواصل', en: 'Media, Tenders & Contact' },
      icon: Newspaper,
      links: [
        { title: { ar: 'الأخبار والبيانات الصحفية الرسمية', en: 'Official Press Releases' }, href: '/news' },
        { title: { ar: 'العطاءات والمناقصات القومية', en: 'Procurement & National Tenders' }, href: '/tenders' },
        { title: { ar: 'معرض الصور والتوثيق', en: 'Photo Gallery' }, href: '/gallery' },
        { title: { ar: 'اتصل بنا ومراكز خدمة العملاء', en: 'Contact Us & Branches' }, href: '/contact' },
        { title: { ar: 'سياسة الخصوصية وحماية البيانات', en: 'Privacy Policy' }, href: '/privacy' },
        { title: { ar: 'حقوق النشر وإخلاء المسؤولية', en: 'Disclaimer & Terms' }, href: '/disclaimer' },
      ]
    }
  ];

  return (
    <div className="bg-sand-50 min-h-screen">
      {/* Sovereign Header Banner */}
      <section 
        className="bg-cbos-navyDark text-white relative overflow-hidden py-14 lg:py-20 border-b border-[#22446D]"
        style={{ backgroundColor: '#0B1A2D' }}
      >
        <div className="absolute inset-0 bg-guilloche opacity-15 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="flex items-center gap-2 text-cbos-blue text-xs font-mono uppercase tracking-wider mb-4">
            <Link href="/" className="hover:underline">
              {isRtl ? 'الرئيسية' : 'Home'}
            </Link>
            <span>/</span>
            <span className="text-[#8F9CAE]">
              {isRtl ? 'خارطة الموقع' : 'Sitemap'}
            </span>
          </div>

          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#162D4C] border border-[#22446D] text-xs font-mono font-bold text-cbos-blue mb-3">
              <FolderTree className="w-3.5 h-3.5 text-cbos-gold" />
              <span>{isRtl ? 'الفهرس الشامل لمنظومة بنك السودان المركزي' : 'COMPREHENSIVE INSTITUTIONAL DIRECTORY'}</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-normal font-display">
              {isRtl ? 'خارطة الموقع الشاملة' : 'Sovereign Site Directory'}
            </h1>
            <p className="text-[#8F9CAE] text-sm sm:text-base max-w-3xl leading-relaxed mt-2">
              {isRtl
                ? 'فهرس متكامل لكافة بوابات، أقسام، تشريعات، تقارير، وقواعد بيانات بنك السودان المركزي لتيسير وصول المواطنين، المصارف، والباحثين.'
                : 'Comprehensive structural index of all portals, directories, regulations, publications, and time series across the Central Bank of Sudan.'}
            </p>
          </div>

        </div>
      </section>

      {/* Main Sitemap Content */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sections.map((sec, idx) => {
            const IconComp = sec.icon;
            return (
              <div 
                key={idx}
                className="bg-white rounded-xl p-6 border border-sand-300 shadow-cbos-card hover:border-cbos-blue transition-all space-y-4"
              >
                <div className="flex items-center gap-3 pb-3 border-b border-sand-200">
                  <div className="w-9 h-9 rounded-lg bg-[#2F88C2]/15 text-cbos-blue flex items-center justify-center shrink-0">
                    <IconComp className="w-5 h-5" />
                  </div>
                  <h3 className="font-bold text-base text-cbos-ink font-display">
                    {t(sec.title)}
                  </h3>
                </div>

                <ul className="space-y-2 text-xs font-sans">
                  {sec.links.map((link, lIdx) => (
                    <li key={lIdx}>
                      <Link 
                        href={link.href}
                        className="text-slate-600 hover:text-cbos-blue flex items-center gap-2 group transition-colors py-0.5"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-sand-300 group-hover:bg-cbos-blue transition-colors shrink-0" />
                        <span className="group-hover:translate-x-0.5 rtl:group-hover:-translate-x-0.5 transition-transform">
                          {t(link.title)}
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
