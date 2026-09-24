'use client';

import React from 'react';
import Image from 'next/image';
import { useLanguage } from '@/lib/languageContext';
import { 
  ShieldCheck, 
  Lock, 
  AlertTriangle, 
  CheckCircle2, 
  FileText, 
  PhoneCall, 
  Mail, 
  Server, 
  Cpu, 
  ExternalLink,
  Download
} from 'lucide-react';

export default function CybersecurityPage() {
  const { isRtl, t } = useLanguage();

  const standards = [
    {
      code: 'ISO 27001:2022',
      title: { ar: 'نظام إدارة أمن المعلومات المصرفية', en: 'Banking Information Security Management System' },
      desc: {
        ar: 'إلزام كافة المصارف المرخصة بتطبيق الضوابط المحدثة لحماية سرية وسلامة وتوافر البيانات المالية.',
        en: 'Mandatory controls for all licensed financial entities safeguarding financial data confidentiality and integrity.'
      }
    },
    {
      code: 'SWIFT CSP v2026',
      title: { ar: 'برنامج أمن عملاء السويفت المصرفي', en: 'SWIFT Customer Security Programme (CSP)' },
      desc: {
        ar: 'التحقق السنوي المستقل من سلامة بوابات السويفت ومعاملات التسوية الدولية ضد الهجمات السيبرانية المتقدمة.',
        en: 'Annual mandatory independent assessment verifying international SWIFT messaging gateways against cyber threats.'
      }
    },
    {
      code: 'PCI-DSS v4.0.1',
      title: { ar: 'معيار أمان بيانات بطاقات الدفع الرقمي', en: 'Payment Card Industry Data Security Standard' },
      desc: {
        ar: 'حماية وتشفير بيانات حاملي البطاقات الوطنية والدولية عبر نقاط البيع (POS) والصرافات ومقاسم الدفع.',
        en: 'Protection and end-to-end tokenization of cardholder data across POS terminals, ATMs, and payment processors.'
      }
    },
    {
      code: 'CBOS-CERT DRI-26',
      title: { ar: 'إطار الاستجابة للحوادث والإنقاذ السيبراني', en: 'Financial Incident Response & Cyber Recovery Framework' },
      desc: {
        ar: 'بروتوكول موحد للإبلاغ عن الهجمات خلال ساعتين والربط اللحظي مع المركز القومي للاستجابة لطوارئ الحاسوب.',
        en: 'Unified protocol mandating 2-hour incident reporting and real-time telemetry sharing with CBOS-CERT.'
      }
    }
  ];

  return (
    <div className="bg-sand-50 min-h-screen">
      {/* Header Banner */}
      <section 
        className="text-white relative overflow-hidden py-16 lg:py-20 border-b border-[#22446D]"
        style={{ backgroundColor: '#0B1A2D' }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex items-center gap-3 text-[#DDC99B] text-xs font-mono uppercase tracking-wider mb-4">
            <ShieldCheck className="w-4 h-4 text-[#B99553]" />
            <span>{isRtl ? 'الأمن السيبراني والرقابة التقنية' : 'Cybersecurity & Tech Supervision'}</span>
            <span>/</span>
            <span>{isRtl ? 'إطار الأمن المالي السيادي (CBOS-CERT)' : 'Sovereign Financial Cyber Framework'}</span>
          </div>

          <h1 className="text-3xl lg:text-4xl font-extrabold text-white mb-4 font-display">
            {isRtl ? 'الأمن السيبراني للقطاع المالي والمصرفي' : 'Financial Sector Cybersecurity Framework'}
          </h1>
          <p className="text-base text-[#E2DDD3] max-w-3xl leading-relaxed font-sans">
            {isRtl
              ? 'تأسيس بيئة مصرفية رقمية حصينة تحمي أصول الاقتصاد السوداني والمدخرات الوطنية من التهديدات السيبرانية، وتضمن استمرارية خدمات الدفع والتسويات البينية على مدار الساعة وفق أحدث المعايير الدولية.'
              : 'Establishing a resilient, sovereign financial cyberspace that defends Sudanese economic assets, safeguards citizen deposits, and guarantees high-availability interbank clearing 24/7/365.'}
          </p>

          <div className="mt-8 flex flex-wrap gap-4 text-xs font-mono">
            <div className="px-3.5 py-1.5 rounded-lg bg-[#2F88C2]/60 border border-[#B99553]/40 flex items-center gap-2">
              <span className="text-[#DDC99B]">{isRtl ? 'حالة التأهب السيبراني:' : 'Threat Posture:'}</span>
              <span className="font-bold text-emerald-400">DEFENSE LEVEL 1 (MONITORED)</span>
            </div>
            <div className="px-3.5 py-1.5 rounded-lg bg-[#2F88C2]/60 border border-[#B99553]/40 flex items-center gap-2">
              <span className="text-[#DDC99B]">{isRtl ? 'غرفة طوارئ CERT:' : 'CERT Operations:'}</span>
              <span className="font-bold text-white">24/7/365 SOC Active</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12">
        
        {/* Core Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-xl p-6 border border-sand-300 shadow-sm space-y-3">
            <div className="w-10 h-10 rounded-xl bg-[#2F88C2]/10 text-cbos-green-900 flex items-center justify-center">
              <Lock className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-base text-cbos-ink font-display">
              {isRtl ? 'حماية البنية التحتية الحرجة' : 'Critical Infrastructure Protection'}
            </h3>
            <p className="text-xs text-cbos-ink-muted leading-relaxed font-sans">
              {isRtl 
                ? 'تأمين أنظمة الدفع الفوري (NIPS) ومقسم البطاقات (EBS) وخوادم المقاصة الإلكترونية بأنظمة تشفير عسكرية غير قابلة للاختراق.'
                : 'Defending NIPS instant switch, EBS national switch, and RTGS servers with sovereign zero-trust encryption.'}
            </p>
          </div>

          <div className="bg-white rounded-xl p-6 border border-sand-300 shadow-sm space-y-3">
            <div className="w-10 h-10 rounded-xl bg-[#B99553]/15 text-[#B99553] flex items-center justify-center">
              <Cpu className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-base text-cbos-ink font-display">
              {isRtl ? 'الرصد الاستباقي ومكافحة الاحتيال' : 'Proactive Threat Hunting & Anti-Fraud'}
            </h3>
            <p className="text-xs text-cbos-ink-muted leading-relaxed font-sans">
              {isRtl 
                ? 'مراقبة تدفقات المعاملات الشاذة باستخدام الذكاء الاصطناعي لكشف عمليات غسل الأموال والاحتيال على عملاء التطبيقات البنكية.'
                : 'AI-driven telemetry monitoring and anomaly detection to neutralize fraudulent retail banking attacks and account takeovers.'}
            </p>
          </div>

          <div className="bg-white rounded-xl p-6 border border-sand-300 shadow-sm space-y-3">
            <div className="w-10 h-10 rounded-xl bg-[#2F88C2]/10 text-cbos-green-900 flex items-center justify-center">
              <Server className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-base text-cbos-ink font-display">
              {isRtl ? 'استمرارية الأعمال والتعافي من الكوارث' : 'Disaster Recovery & Business Continuity'}
            </h3>
            <p className="text-xs text-cbos-ink-muted leading-relaxed font-sans">
              {isRtl 
                ? 'مراكز بيانات موزعة جغرافياً تعمل بنظام Active-Active تضمن عدم انقطاع التسويات المالية حتى في أسوأ السيناريوهات الطارئة.'
                : 'Geographically dispersed Active-Active data centers ensuring zero transaction loss and sub-second failover.'}
            </p>
          </div>
        </div>

        {/* SOC Operations Documentary Feature */}
        <div className="bg-white rounded-xl border border-sand-300 overflow-hidden shadow-sm grid grid-cols-1 lg:grid-cols-12">
          <div className="relative h-72 sm:h-96 lg:h-auto lg:col-span-6 bg-[#0B1A2D]">
            <Image
              src="/images/cbos/cybersecurity/cbos-cybersecurity-operations.webp"
              alt={t({ ar: 'مركز العمليات السيبرانية وغرفة التحكم الأمنية لبنك السودان المركزي', en: 'CBOS Security Operations Center (SOC) and cyber defense command' })}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent lg:hidden" />
            <div className="absolute bottom-3 start-4 text-[11px] font-mono text-white/90 bg-black/50 px-2.5 py-1 rounded backdrop-blur-sm">
              CBOS-CERT CENTRAL SOC • 24/7/365 REAL-TIME TELEMETRY
            </div>
          </div>

          <div className="p-8 sm:p-10 lg:col-span-6 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-cbos-green-900 text-xs font-mono uppercase tracking-wider mb-2">
                <span className="w-2 h-2 rounded-full bg-emerald-500 ring-2 ring-emerald-500/20" />
                <span>{t({ ar: 'غرفة المراقبة والتحكم السيادية', en: 'Sovereign Operations & Defense' })}</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-cbos-ink font-display mb-3 leading-snug">
                {isRtl
                  ? 'مركز العمليات السيبرانية لبنك السودان المركزي (CBOS-CERT SOC)'
                  : 'CBOS-CERT Security Operations Center & Sovereign Defense'}
              </h3>
              <p className="text-xs sm:text-sm text-cbos-ink-muted leading-[1.8] font-sans mb-6">
                {isRtl
                  ? 'تعمل كوادر وطنية متخصصة على مدار الساعة (24/7/365) في غرفة العمليات السيبرانية لرصد تدفقات المعاملات المالية البينية، واكتشاف الأنماط المشبوهة، وتحييد التهديدات المتقدمة لحماية استمرارية مقسمات الدفع القومية وشبكة السويفت الدولية.'
                  : 'Operating 24/7/365, specialized Sudanese cybersecurity engineers staff the national financial SOC, monitoring real-time transaction telemetry, detecting threat anomalies, and shielding sovereign interbank settlement rails and SWIFT gateways.'}
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-4 border-t border-sand-200">
                <div className="p-3 rounded-lg bg-sand-50 border border-sand-200">
                  <div className="font-mono text-base font-bold text-cbos-green-950">24/7/365</div>
                  <div className="text-[11px] text-cbos-ink-muted leading-tight mt-0.5">
                    {isRtl ? 'جاهزية الرصد والتحكم' : 'Continuous Monitoring'}
                  </div>
                </div>
                <div className="p-3 rounded-lg bg-sand-50 border border-sand-200">
                  <div className="font-mono text-base font-bold text-cbos-green-950">&lt; 120m</div>
                  <div className="text-[11px] text-cbos-ink-muted leading-tight mt-0.5">
                    {isRtl ? 'الاستجابة للحوادث' : 'Incident SLA'}
                  </div>
                </div>
                <div className="p-3 rounded-lg bg-sand-50 border border-sand-200 col-span-2 sm:col-span-1">
                  <div className="font-mono text-base font-bold text-[#B99553]">ISO 27001</div>
                  <div className="text-[11px] text-cbos-ink-muted leading-tight mt-0.5">
                    {isRtl ? 'معيار الحوكمة والأمن' : 'Security Baseline'}
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-sand-100 flex items-center justify-between text-xs font-mono text-cbos-ink-muted">
              <span>DOCUMENTARY ARCHIVE • FINANCIAL CYBERSECURITY</span>
              <span className="text-cbos-green-800 font-bold">CBOS 2026</span>
            </div>
          </div>
        </div>

        {/* Regulatory Standards */}
        <div className="bg-white rounded-xl p-6 md:p-8 border border-sand-300 shadow-sm space-y-6">
          <div className="flex items-center justify-between border-b border-sand-200 pb-4">
            <div>
              <span className="text-xs font-bold text-cbos-green-900 uppercase tracking-widest font-mono">
                {isRtl ? 'المعايير والضوابط الإلزامية' : 'Mandatory Regulations'}
              </span>
              <h2 className="text-xl font-bold text-cbos-ink font-display mt-0.5">
                {isRtl ? 'الأطر والمعايير الدولية المعتمدة للجهاز المصرفي' : 'Accredited Cyber Directives for Licensed Banks'}
              </h2>
            </div>
            <a
              href="/documents?type=circular"
              className="text-xs font-bold text-cbos-green-900 hover:underline flex items-center gap-1"
            >
              <span>{isRtl ? 'استعراض تعاميم الأمن السيبراني' : 'View Cyber Circulars'}</span>
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {standards.map((std, i) => (
              <div key={i} className="p-5 rounded-xl bg-sand-50 border border-sand-200 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="px-2 py-0.5 rounded bg-cbos-green-900 text-white font-mono text-[11px] font-bold">
                    {std.code}
                  </span>
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                </div>
                <h4 className="font-bold text-sm text-cbos-ink font-sans">{t(std.title)}</h4>
                <p className="text-xs text-cbos-ink-muted leading-relaxed font-sans">{t(std.desc)}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Incident Reporting Hotline */}
        <div className="bg-[#0B1A2D] text-white rounded-xl p-8 border border-[#22446D] flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/20 text-red-300 border border-red-500/40 text-xs font-mono font-bold">
              <AlertTriangle className="w-3.5 h-3.5" />
              <span>{isRtl ? 'خط الإبلاغ الطارئ عن الحوادث السيبرانية' : 'Financial Cyber Incident Reporting Desk'}</span>
            </div>
            <h3 className="text-xl font-bold font-display text-white">
              {isRtl ? 'فريق طوارئ الحاسب الآلي للقطاع المالي (CBOS-CERT)' : 'CBOS Financial CERT Emergency Command'}
            </h3>
            <p className="text-xs text-[#E2DDD3] leading-relaxed font-sans">
              {isRtl
                ? 'يلتزم مسؤولو أمن المعلومات (CISO) بكافة المصارف والمؤسسات المالية بالإبلاغ الفوري عن أي اختراق أو هجوم حجب خدمة خلال ساعتين كحد أقصى.'
                : 'Licensed institutions CISOs are legally obligated to report cybersecurity breaches or DDoS incidents within 2 hours maximum.'}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0">
            <a
              href="tel:+249187056000"
              className="px-5 py-3 rounded-xl bg-[#B99553] text-cbos-ink hover:bg-[#D4AF37] font-bold text-xs flex items-center gap-2 shadow-lg transition-all"
            >
              <PhoneCall className="w-4 h-4" />
              <span>+249 187 056000 (Ext 404)</span>
            </a>
            <a
              href="mailto:cert@cbos.gov.sd"
              className="px-5 py-3 rounded-xl bg-[#2F88C2] hover:bg-[#096E47] text-white font-bold text-xs flex items-center gap-2 border border-[#B99553]/40 transition-all"
            >
              <Mail className="w-4 h-4 text-[#DDC99B]" />
              <span>cert@cbos.gov.sd</span>
            </a>
          </div>
        </div>

      </section>
    </div>
  );
}
