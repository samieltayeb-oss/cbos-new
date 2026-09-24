'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useLanguage } from '@/lib/languageContext';
import { 
  Building2, 
  ShieldCheck, 
  Scale, 
  Landmark, 
  History, 
  Award, 
  FileText, 
  ArrowRight, 
  ArrowLeft,
  CheckCircle2,
  Globe2
} from 'lucide-react';

export default function AboutPage() {
  const { t, isRtl } = useLanguage();
  const ArrowIcon = isRtl ? ArrowLeft : ArrowRight;

  const milestones = [
    {
      year: '1959',
      title: { ar: 'صدور قانون بنك السودان', en: 'Enactment of the Bank of Sudan Act' },
      desc: { 
        ar: 'أجاز المجلس التشريعي في ديسمبر 1959 قانون تأسيس بنك السودان ليكون المصرف المركزي المستقل المنظم للنقد والائتمان.',
        en: 'In December 1959, legislation was enacted establishing the Bank of Sudan as an autonomous central bank to regulate currency and credit.'
      }
    },
    {
      year: '1960',
      title: { ar: 'انطلاق العمليات الرسمية', en: 'Inauguration of Official Operations' },
      desc: { 
        ar: 'في 22 فبراير 1960 افتتح المصرف أعماله رسمياً وتولى إصدار الجنيه السوداني وإدارة الاحتياطيات النقدية خلفاً للجنة العملة السودانية.',
        en: 'On February 22, 1960, the Bank commenced official operations, issuing the Sudanese Pound and managing sovereign reserves.'
      }
    },
    {
      year: '1984',
      title: { ar: 'أسلمة النظام المصرفي', en: 'Transition to Islamic Banking' },
      desc: { 
        ar: 'تحول كامل النظام المصرفي السوداني للعمل وفق صيغ التمويل الإسلامي، وتأسيس الهيئة العليا للرقابة الشرعية للجهاز المصرفي.',
        en: 'Full transition of the national banking sector to Islamic financial principles and establishment of the High Sharia Supervisory Board.'
      }
    },
    {
      year: '2002',
      title: { ar: 'تحديث قانون بنك السودان', en: 'Bank of Sudan Act Modernization' },
      desc: { 
        ar: 'إصدار قانون بنك السودان لسنة 2002 وتعديلاته اللاحقة، محدداً أهداف الاستقرار السعري، سلامة الجهاز المصرفي واستقلالية البنك.',
        en: 'Enactment of the Bank of Sudan Act 2002 and amendments, codifying price stability, banking soundness, and central bank autonomy.'
      }
    },
    {
      year: '2026',
      title: { ar: 'التحول الرقمي القومي والتعافي', en: 'National Digital Transformation & Recovery' },
      desc: { 
        ar: 'إطلاق المنظومة الرقمية السيادية الحديثة وتدشين النظام القومي للمدفوعات الفورية (NIPS) وترقية البنية التحتية المصرفية.',
        en: 'Rollout of the sovereign modern digital platform, launch of the National Instant Payment System (NIPS), and banking infrastructure renewal.'
      }
    }
  ];

  const strategicPillars = [
    {
      icon: Scale,
      title: { ar: 'الاستقرار النقدي والأسعار', en: 'Monetary & Price Stability' },
      desc: {
        ar: 'صياغة وتنفيذ السياسة النقدية الرامية لاحتواء التضخم والحفاظ على القوة الشرائية للعملة الوطنية وإدارة السيولة بكفاءة.',
        en: 'Formulating and executing monetary policy to contain inflation, preserve the purchasing power of the national currency, and optimize liquidity.'
      }
    },
    {
      icon: ShieldCheck,
      title: { ar: 'سلامة واستقرار الجهاز المصرفي', en: 'Financial System Soundness' },
      desc: {
        ar: 'تطبيق المعايير الاحترازية والرقابة الفعالة على المصارف والمؤسسات المالية وفق أحدث معايير بازل والهيئات الرقابية الإسلامية (AAOIFI/IFSB).',
        en: 'Enforcing prudential regulations and comprehensive supervision over banks and financial institutions in line with Basel, AAOIFI, and IFSB standards.'
      }
    },
    {
      icon: Landmark,
      title: { ar: 'إدارة النقد والسيادة المالية', en: 'Currency & Sovereign Reserves' },
      desc: {
        ar: 'إصدار وإدارة أوراق النقد والمسكوكات السودانية بأعلى درجات الأمان، وحماية الاحتياطيات القومية من الذهب والعملات الأجنبية.',
        en: 'Issuance and custody of high-security Sudanese banknotes and coins, and safeguarding sovereign reserves of gold and foreign exchange.'
      }
    },
    {
      icon: Globe2,
      title: { ar: 'المدفوعات القومية والتقنية المالية', en: 'National Payments & FinTech' },
      desc: {
        ar: 'تطوير وتشغيل شبكات المدفوعات الفورية الوطنية، وتأمين التسويات اللحظية (RTGS)، ودعم الابتكار المالي الخاضع للتنظيم الرقابي.',
        en: 'Operating sovereign instant payment systems, securing real-time gross settlements (RTGS), and fostering regulated financial innovation.'
      }
    }
  ];

  return (
    <div className="bg-sand-50 min-h-screen">
      {/* Sovereign Header Banner */}
      <section 
        className="bg-cbos-green-950 text-white relative overflow-hidden py-16 lg:py-24 border-b border-cbos-gold/30"
        style={{ backgroundColor: '#032A1E' }}
      >
        <div className="absolute inset-0 bg-guilloche opacity-15 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex items-center gap-3 text-cbos-gold text-xs font-mono uppercase tracking-wider mb-4">
            <Building2 className="w-4 h-4" />
            <span>{t({ ar: 'عن بنك السودان المركزي', en: 'About Central Bank of Sudan' })}</span>
            <span>/</span>
            <span>{t({ ar: 'الميثاق والمؤسسة', en: 'Mandate & Institution' })}</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white max-w-4xl leading-[1.2] mb-6 tracking-normal">
            {t({
              ar: 'المؤسسة النقدية السيادية لجمهورية السودان منذ عام 1960',
              en: 'The Sovereign Monetary Authority of the Republic of Sudan Since 1960'
            })}
          </h1>

          <p className="text-[#E2DDD3] text-base sm:text-lg max-w-3xl leading-[1.8] font-normal">
            {t({
              ar: 'يضطلع بنك السودان المركزي بمسؤولية صيانة الاستقرار النقدي والمالي، وإصدار العملة الوطنية، وإدارة احتياطيات الدولة، والإشراف الصارم على القطاع المصرفي وفق المبادئ التمويلية المتوافقة مع الشريعة الإسلامية.',
              en: 'The Central Bank of Sudan is entrusted with safeguarding monetary and financial stability, issuing the national currency, managing sovereign reserves, and supervising the banking sector under Sharia-compliant financial frameworks.'
            })}
          </p>
        </div>
      </section>

      {/* Main Content Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Main Column */}
          <div className="lg:col-span-8 space-y-12">
            
            {/* Legal Mandate Card */}
            <div id="mandate" className="bg-white border border-sand-300 rounded-xl p-8 shadow-sm scroll-mt-28">
              <div className="flex items-center gap-3 text-cbos-green-800 font-bold text-2xl mb-4 border-b border-sand-200 pb-4">
                <Scale className="w-6 h-6 text-cbos-gold" />
                <h2>{t({ ar: 'التكليف القانوني والأهداف الاستراتيجية', en: 'Legal Mandate & Statutory Objectives' })}</h2>
              </div>
              <p className="text-cbos-ink-muted leading-[1.7] mb-6">
                {t({
                  ar: 'بموجب قانون بنك السودان لسنة 2002 (المعدل)، يتمتع البنك بالشخصية الاعتبارية المستقلة والاستقلال المالي والإداري التام في ممارسة صلاحياته لتحقيق الغايات الوطنية التالية:',
                  en: 'Under the Bank of Sudan Act 2002 (as amended), the Bank operates as an autonomous legal entity with financial and administrative independence to achieve the following statutory objectives:'
                })}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  {
                    ar: 'تحقيق استقرار المستوى العام للأسعار والمحافظة على استقرار سعر صرف العملة الوطنية.',
                    en: 'Achieving price stability and maintaining the stability of the national currency exchange rate.'
                  },
                  {
                    ar: 'صيانة سلامة وقوة وملاءة الجهاز المصرفي وتنظيم العمل المصرفي وفق الشريعة الإسلامية.',
                    en: 'Safeguarding the soundness, solvency, and integrity of the Sharia-compliant banking system.'
                  },
                  {
                    ar: 'إدارة وتنمية الاحتياطيات الرسمية للدولة من الذهب والعملات الأجنبية.',
                    en: 'Managing and preserving sovereign official reserves of gold and foreign exchange.'
                  },
                  {
                    ar: 'تطوير وتشغيل ومراقبة نظم الدفع والتسوية الوطنية بكفاءة وأمان تامين.',
                    en: 'Developing, operating, and overseeing national payment and settlement systems securely.'
                  },
                  {
                    ar: 'العمل كمستشار ومستودع مالي ووكيل لحكومة جمهورية السودان في المعاملات المالية.',
                    en: 'Acting as financial advisor, fiscal agent, and depository for the Government of Sudan.'
                  },
                  {
                    ar: 'تعزيز الشمول المالي وتوسيع نطاق الخدمات المصرفية لكافة فئات المجتمع السوداني.',
                    en: 'Promoting financial inclusion and expanding access to banking services nationwide.'
                  }
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3 p-3 rounded-lg bg-sand-50 border border-sand-200">
                    <CheckCircle2 className="w-5 h-5 text-cbos-green-700 shrink-0 mt-0.5" />
                    <span className="text-sm text-cbos-ink leading-[1.7] font-medium">{t(item)}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Strategic Pillars */}
            <div>
              <div className="flex items-center justify-between mb-6">
                <div>
                  <span className="text-xs font-mono uppercase tracking-wider text-cbos-gold font-bold">
                    {t({ ar: 'الركائز المؤسسية', en: 'INSTITUTIONAL PILLARS' })}
                  </span>
                  <h2 className="text-2xl font-bold text-cbos-ink mt-1">
                    {t({ ar: 'أركان العمل المصرفي المركزي', en: 'Core Pillars of Central Banking' })}
                  </h2>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {strategicPillars.map((pillar, idx) => {
                  const Icon = pillar.icon;
                  return (
                    <div key={idx} className="bg-white border border-sand-300 rounded-xl p-6 shadow-sm hover:border-cbos-green-700 transition-colors">
                      <div className="w-12 h-12 rounded-lg bg-cbos-green-50 text-cbos-green-900 flex items-center justify-center mb-4">
                        <Icon className="w-6 h-6 text-cbos-green-800" />
                      </div>
                      <h3 className="font-bold text-lg text-cbos-ink mb-2 leading-snug">{t(pillar.title)}</h3>
                      <p className="text-[13.5px] text-cbos-ink-muted leading-[1.7]">{t(pillar.desc)}</p>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Chronological Timeline */}
            <div id="history" className="bg-white border border-sand-300 rounded-xl p-8 shadow-sm scroll-mt-28">
              <div className="flex items-center gap-3 text-cbos-green-800 font-bold text-2xl mb-8 border-b border-sand-200 pb-4">
                <History className="w-6 h-6 text-cbos-gold" />
                <h2>{t({ ar: 'مسيرة البنك عبر التاريخ (1959 - 2026)', en: 'Historical Journey (1959 - 2026)' })}</h2>
              </div>

              <div className="relative border-s-2 border-cbos-green-200 ms-4 space-y-8">
                {milestones.map((m, idx) => (
                  <div key={idx} className="relative ps-6">
                    <span className="absolute -start-[9px] top-1 w-4 h-4 rounded-full bg-cbos-gold border-2 border-white shadow-sm" />
                    <span className="inline-block px-2.5 py-0.5 rounded text-xs font-mono font-bold bg-cbos-green-900 text-white mb-1">
                      {m.year}
                    </span>
                    <h3 className="font-bold text-lg text-cbos-ink mb-1 leading-snug">{t(m.title)}</h3>
                    <p className="text-[13.5px] text-cbos-ink-muted leading-[1.7]">{t(m.desc)}</p>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Sidebar / Quick Links & Facts */}
          <div className="lg:col-span-4 space-y-6">
            
            {/* Headquarters Card */}
            <div className="bg-white border border-sand-300 rounded-xl overflow-hidden shadow-sm">
              <div className="relative h-48 w-full bg-cbos-green-950">
                <Image 
                  src="/images/cbos/official/cbos-headquarters.png" 
                  alt="Central Bank of Sudan HQ"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-cbos-green-950 via-transparent to-transparent opacity-80" />
                <span className="absolute bottom-3 start-4 text-xs font-mono bg-cbos-gold text-cbos-ink font-bold px-2 py-0.5 rounded">
                  {t({ ar: 'المقر السيادي', en: 'SOVEREIGN HEADQUARTERS' })}
                </span>
              </div>
              <div className="p-6">
                <h3 className="font-bold text-lg text-cbos-ink mb-2">
                  {t({ ar: 'المقر والمراكز التشغيلية', en: 'Headquarters & Operational Centers' })}
                </h3>
                <p className="text-xs text-cbos-ink-muted leading-[1.7] mb-4">
                  {t({
                    ar: 'يباشر البنك عملياته السيادية والتنظيمية من مركز العمليات الرئيسي في بورتسودان ومقره التاريخي في الخرطوم وفروعه المنتشرة في كافة ولايات البلاد.',
                    en: 'The Bank executes sovereign and regulatory operations from Port Sudan Primary Operations Center, historic Khartoum HQ, and state branches.'
                  })}
                </p>
                <Link 
                  href="/contact"
                  className="inline-flex items-center gap-2 text-xs font-bold text-cbos-green-800 hover:text-cbos-gold transition-colors"
                >
                  <span>{t({ ar: 'عرض شبكة الفروع ومعلومات الاتصال', en: 'View State Branches & Contacts' })}</span>
                  <ArrowIcon className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            {/* Quick Fast Facts Card */}
            <div 
              className="bg-cbos-green-950 text-white rounded-xl p-6 border border-cbos-gold/30"
              style={{ backgroundColor: '#032A1E' }}
            >
              <h3 className="font-bold text-lg text-cbos-gold mb-4 border-b border-cbos-green-800 pb-3 flex items-center gap-2">
                <Award className="w-5 h-5 text-cbos-gold" />
                <span>{t({ ar: 'حقائق رئيسية', en: 'Institutional Facts' })}</span>
              </h3>
              <dl className="space-y-4 text-sm">
                <div>
                  <dt className="text-sand-400 text-xs">{t({ ar: 'سنة التأسيس', en: 'Established' })}</dt>
                  <dd className="font-mono font-bold text-white text-base">1959 ({t({ ar: 'بدء العمليات 1960', en: 'Ops 1960' })})</dd>
                </div>
                <div>
                  <dt className="text-sand-400 text-xs">{t({ ar: 'القانون المنظم', en: 'Governing Legislation' })}</dt>
                  <dd className="font-bold text-white">{t({ ar: 'قانون بنك السودان 2002 وتعديلاته', en: 'Bank of Sudan Act 2002 & Amendments' })}</dd>
                </div>
                <div>
                  <dt className="text-sand-400 text-xs">{t({ ar: 'النظام المصرفي المطبق', en: 'Banking Framework' })}</dt>
                  <dd className="font-bold text-white">{t({ ar: 'صيرفة إسلامية كاملة 100% (AAOIFI)', en: '100% Comprehensive Islamic Banking' })}</dd>
                </div>
                <div>
                  <dt className="text-sand-400 text-xs">{t({ ar: 'الهيئة الرقابية الشرعية', en: 'Sharia Governance' })}</dt>
                  <dd className="font-bold text-white">{t({ ar: 'الهيئة العليا للرقابة الشرعية', en: 'High Sharia Supervisory Board' })}</dd>
                </div>
                <div>
                  <dt className="text-sand-400 text-xs">{t({ ar: 'العملة الوطنية', en: 'National Currency' })}</dt>
                  <dd className="font-mono text-white">Sudanese Pound (SDG / ج.س)</dd>
                </div>
              </dl>
            </div>

            {/* Legal Documents Direct Links */}
            <div className="bg-white border border-sand-300 rounded-xl p-6 shadow-sm">
              <h3 className="font-bold text-base text-cbos-ink mb-4 flex items-center gap-2">
                <FileText className="w-4 h-4 text-cbos-green-800" />
                <span>{t({ ar: 'التشريعات الأساسية', en: 'Primary Legislation' })}</span>
              </h3>
              <div className="space-y-3">
                <Link
                  href="/documents"
                  className="block p-3 rounded-lg border border-sand-200 hover:border-cbos-gold hover:bg-sand-50 transition-colors"
                >
                  <div className="font-bold text-sm text-cbos-ink">
                    {t({ ar: 'قانون بنك السودان 2002', en: 'Bank of Sudan Act 2002' })}
                  </div>
                  <div className="text-xs text-cbos-ink-muted mt-0.5">PDF • 1.2 MB</div>
                </Link>
                <Link
                  href="/documents"
                  className="block p-3 rounded-lg border border-sand-200 hover:border-cbos-gold hover:bg-sand-50 transition-colors"
                >
                  <div className="font-bold text-sm text-cbos-ink">
                    {t({ ar: 'قانون تنظيم العمل المصرفي 2004', en: 'Banking Business Act 2004' })}
                  </div>
                  <div className="text-xs text-cbos-ink-muted mt-0.5">PDF • 950 KB</div>
                </Link>
                <Link
                  href="/documents"
                  className="block p-3 rounded-lg border border-sand-200 hover:border-cbos-gold hover:bg-sand-50 transition-colors"
                >
                  <div className="font-bold text-sm text-cbos-ink">
                    {t({ ar: 'لائحة مكافحة غسل الأموال وتمويل الإرهاب', en: 'AML / CFT Regulations' })}
                  </div>
                  <div className="text-xs text-cbos-ink-muted mt-0.5">PDF • 780 KB</div>
                </Link>
              </div>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
}
