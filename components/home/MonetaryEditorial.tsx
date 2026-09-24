'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useLanguage } from '@/lib/languageContext';
import { FileText, ArrowRight, ArrowLeft, Download, Shield, CheckCircle2 } from 'lucide-react';

export default function MonetaryEditorial() {
  const { isRtl } = useLanguage();

  return (
    <section className="py-14 px-4 md:px-8 bg-cbos-ivory-dark/40 border-y border-cbos-stone/40">
      <div className="max-w-7xl mx-auto space-y-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-cbos-stone/60 pb-4">
          <div>
            <span className="text-xs font-bold text-cbos-blue uppercase tracking-widest font-mono">
              {isRtl ? 'السياسة النقدية والمصرفية' : 'Monetary Policy & Executive Oversight'}
            </span>
            <h2 className="text-2xl md:text-3xl font-black text-cbos-ink font-display mt-1">
              {isRtl ? 'الاستقرار النقدي ودعم الإنتاج الوطني' : 'Price Stability & National Economic Resilience'}
            </h2>
          </div>
          <Link
            href="/monetary-policy"
            className="text-xs font-bold text-cbos-blue hover:text-cbos-blue-hover flex items-center gap-1.5 transition-colors"
          >
            <span>{isRtl ? 'الإطار التشغيلي الكامل للسياسة النقدية' : 'Full Monetary Policy Framework'}</span>
            {isRtl ? <ArrowLeft className="w-3.5 h-3.5" /> : <ArrowRight className="w-3.5 h-3.5" />}
          </Link>
        </div>

        {/* Editorial Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left: Governor Message & Sovereign Policy Statement (Cols 1-7) */}
          <div className="lg:col-span-7 bg-white rounded-xl p-6 md:p-8 border border-cbos-stone shadow-cbos-card flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="relative w-16 h-16 rounded-lg overflow-hidden border-2 border-cbos-gold shrink-0">
                  <Image
                    src="/images/cbos/official/governor-portrait.png"
                    alt="Governor Portrait"
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-base font-bold text-cbos-ink font-display">
                    {isRtl ? 'بيان محافظ بنك السودان المركزي' : 'Statement of the Governor of CBOS'}
                  </h3>
                  <div className="text-xs text-cbos-gold font-mono">
                    {isRtl ? 'رئيس مجلس الإدارة | الإدارة العليا' : 'Chairman of the Board | Executive Leadership'}
                  </div>
                </div>
              </div>

              <blockquote className="border-r-4 rtl:border-r-4 rtl:border-l-0 ltr:border-l-4 ltr:border-r-0 border-cbos-blue pl-4 rtl:pr-4 rtl:pl-0 text-sm md:text-base text-slate-700 italic leading-relaxed font-sans">
                {isRtl
                  ? '«إن التزامنا الأسمى يرتكز على ضبط السيولة النقدية، واستدامة عمل الجهاز المصرفي بكفاءة وسلامة عالية، وتوسيع الشمول المالي عبر المقسم القومي الرقمي، لضمان وصول الخدمات المصرفية لكافة ربوع السودان ودعم عجلة الإنتاج الزراعي والصناعي.»'
                  : '"Our highest institutional commitment remains anchoring monetary stability, sustaining banking sector resilience, and deploying sovereign digital payment infrastructure to ensure financial access and support national productive sectors across Sudan."'}
              </blockquote>

              <p className="text-xs text-slate-600 leading-relaxed font-sans">
                {isRtl
                  ? 'تتبنى السياسة النقدية أدوات إدارة سيولة متوافقة مع الصيرفة الإسلامية تشمل شهادات المشاركة الحكومية (شهامة) وشهادات الإجارة (شامة)، بجانب تثبيت الاحتياطي النقدي القانوني عند 18% لحماية الودائع والسيطرة على التضخم.'
                  : 'The operational monetary framework utilizes Sharia-compliant liquidity instruments including Government Musharaka Certificates (Shahama) and Ijarah Certificates (Shama), supported by an 18% statutory reserve ratio to safeguard deposits and mitigate inflation.'}
              </p>
            </div>

            <div className="pt-4 border-t border-slate-100 flex flex-wrap items-center justify-between gap-3 text-xs">
              <span className="text-cbos-stone-dark font-mono">
                {isRtl ? 'تاريخ التحديث: الربع الأول 2026' : 'Status: Q1 2026 Operational Directives'}
              </span>
              <Link
                href="/leadership"
                className="font-bold text-cbos-blue hover:underline flex items-center gap-1"
              >
                <span>{isRtl ? 'الاطلاع على الهيكل والقيادة' : 'View Leadership Profile'}</span>
                {isRtl ? <ArrowLeft className="w-3.5 h-3.5" /> : <ArrowRight className="w-3.5 h-3.5" />}
              </Link>
            </div>
          </div>

          {/* Right: Policy Instruments & Featured Release Module (Cols 8-12) */}
          <div className="lg:col-span-5 bg-[#0B1A2D] text-cbos-ivory rounded-xl p-6 md:p-8 border border-[#22446D] shadow-xl flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between border-b border-[#22446D] pb-3">
                <span className="text-xs font-bold text-cbos-gold font-mono uppercase tracking-wider">
                  {isRtl ? 'الأدوات التشغيلية المعتمدة' : 'Monetary Instruments'}
                </span>
                <span className="text-[10px] bg-cbos-blue px-2 py-0.5 rounded text-white font-mono">
                  ACTIVE 2026
                </span>
              </div>

              <div className="space-y-3 text-xs">
                <div className="p-3 rounded-xl bg-[#11253E] border border-[#22446D] flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-cbos-gold shrink-0 mt-0.5" />
                  <div>
                    <div className="font-bold text-white text-sm">
                      {isRtl ? 'نسبة الاحتياطي النقدي القانوني (18%)' : 'Statutory Cash Reserve Ratio (18%)'}
                    </div>
                    <div className="text-[11px] text-[#8F9CAE] mt-0.5">
                      {isRtl ? 'تودع لدى البنك المركزي بالعملة المحلية والأجنبية لتأمين السيولة.' : 'Mandatory reserve lodged with CBOS to absorb excess liquidity.'}
                    </div>
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-[#11253E] border border-[#22446D] flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-cbos-gold shrink-0 mt-0.5" />
                  <div>
                    <div className="font-bold text-white text-sm">
                      {isRtl ? 'عمليات السوق المفتوحة والأوراق المالية' : 'Open Market Operations (Sukuk)'}
                    </div>
                    <div className="text-[11px] text-[#8F9CAE] mt-0.5">
                      {isRtl ? 'إدارة السيولة اليومية عبر الصكوك الحكومية وأسواق ما بين البنوك.' : 'Liquidity regulation via sovereign Sukuk and interbank financing rails.'}
                    </div>
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-[#11253E] border border-[#22446D] flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-cbos-gold shrink-0 mt-0.5" />
                  <div>
                    <div className="font-bold text-white text-sm">
                      {isRtl ? 'المقسم القومي للمدفوعات الفورية (NIPS)' : 'National Instant Payments (NIPS)'}
                    </div>
                    <div className="text-[11px] text-[#8F9CAE] mt-0.5">
                      {isRtl ? 'تسوية لحظية 24/7/365 لكافة المعاملات المصرفية ومحافظ الهاتف.' : '24/7/365 atomic gross settlement for interbank transactions.'}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-[#22446D] flex items-center justify-between">
              <Link
                href="/documents/monetary-policy-2026.pdf"
                className="w-full py-2.5 px-4 rounded-xl bg-cbos-gold hover:bg-cbos-gold-hover text-cbos-ink font-bold text-xs flex items-center justify-center gap-2 transition-all shadow"
              >
                <Download className="w-4 h-4" />
                <span>{isRtl ? 'تنزيل وثيقة السياسة النقدية الرسمية (PDF)' : 'Download Policy Document (PDF)'}</span>
              </Link>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
