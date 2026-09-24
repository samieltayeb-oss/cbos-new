'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useLanguage } from '@/lib/languageContext';
import { ShieldCheck, Mail, Phone, MapPin, ExternalLink, Globe } from 'lucide-react';

export default function Footer() {
  const { isRtl, t } = useLanguage();

  return (
    <footer className="bg-cbos-ink text-cbos-ivory border-t-4 border-cbos-gold pt-14 pb-8 px-4 md:px-8">
      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* Top Section: Brand, Address & Mandate */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 pb-10 border-b border-cbos-ink-border">
          
          {/* Col 1 & 2: Institutional Brand & Mandate */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-cbos-green-dark border border-cbos-gold/50 p-1 flex items-center justify-center">
                <Image
                  src="/images/cbos/official/cbos-logo-white.png"
                  alt="CBOS"
                  width={48}
                  height={48}
                  className="object-contain"
                />
              </div>
              <div>
                <div className="text-base font-black text-white font-display">
                  {isRtl ? 'بنك السودان المركزي' : 'Central Bank of Sudan'}
                </div>
                <div className="text-xs text-cbos-gold font-mono">
                  Sovereign Central Monetary Authority
                </div>
              </div>
            </div>

            <p className="text-xs text-cbos-stone leading-relaxed">
              {isRtl
                ? 'المؤسسة النقدية السيادية لجمهورية السودان المنوط بها قانوناً إصدار العملة الوطنية، وتحقيق الاستقرار النقدي، ومراقبة الجهاز المصرفي وتنظيم أنظمة المدفوعات القومية.'
                : 'The sovereign monetary authority of the Republic of the Sudan, legally mandated to issue the national currency, ensure monetary stability, supervise the banking system, and operate national payment switches.'}
            </p>

            <div className="text-xs text-cbos-stone space-y-1.5 font-sans">
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-cbos-gold shrink-0" />
                <span>{isRtl ? 'المقر الإداري المؤقت: بورتسودان — المقر التاريخي: الخرطوم، شارع الجامعة' : 'Interim HQ: Port Sudan — Historical HQ: Gama\'a Avenue, Khartoum'}</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-cbos-gold shrink-0" />
                <span>info@cbos.gov.sd</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-cbos-gold shrink-0" />
                <span>+249 187 05000</span>
              </div>
            </div>
          </div>

          {/* Col 3: Policy & Regulation */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-cbos-gold border-b border-cbos-ink-border pb-1.5">
              {isRtl ? 'السياسات والتشريعات' : 'Policy & Laws'}
            </h4>
            <ul className="space-y-2 text-xs text-cbos-ivory/80">
              <li><Link href="/monetary-policy" className="hover:text-cbos-gold transition-colors">{isRtl ? 'السياسة النقدية والمصرفية' : 'Monetary Policy'}</Link></li>
              <li><Link href="/documents?type=law" className="hover:text-cbos-gold transition-colors">{isRtl ? 'قوانين البنك المركزي' : 'Primary Banking Acts'}</Link></li>
              <li><Link href="/documents?type=circular" className="hover:text-cbos-gold transition-colors">{isRtl ? 'المنشورات والتعاميم الرقابية' : 'Regulatory Circulars'}</Link></li>
              <li><Link href="/exchange-rates" className="hover:text-cbos-gold transition-colors">{isRtl ? 'أسعار الصرف الرسمية' : 'Official Exchange Rates'}</Link></li>
              <li><Link href="/financial-system" className="hover:text-cbos-gold transition-colors">{isRtl ? 'المصارف والمؤسسات المرخصة' : 'Licensed Institutions'}</Link></li>
            </ul>
          </div>

          {/* Col 4: Data & Publications */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-cbos-gold border-b border-cbos-ink-border pb-1.5">
              {isRtl ? 'البيانات والإصدارات' : 'Data & Research'}
            </h4>
            <ul className="space-y-2 text-xs text-cbos-ivory/80">
              <li><Link href="/publications?type=annual-report" className="hover:text-cbos-gold transition-colors">{isRtl ? 'التقارير السنوية' : 'Annual Reports Archive'}</Link></li>
              <li><Link href="/publications?type=bulletin" className="hover:text-cbos-gold transition-colors">{isRtl ? 'النشرة الاقتصادية والمالية' : 'Economic Bulletins'}</Link></li>
              <li><Link href="/publications?type=digest" className="hover:text-cbos-gold transition-colors">{isRtl ? 'إحصاءات التجارة الخارجية' : 'Foreign Trade Digest'}</Link></li>
              <li><Link href="/data" className="hover:text-cbos-gold transition-colors">{isRtl ? 'بوابة البيانات المفتوحة (e-GDDS)' : 'Open Data Portal (GDDS)'}</Link></li>
              <li><Link href="/banknotes" className="hover:text-cbos-gold transition-colors">{isRtl ? 'العلامات التأمينية للعملة' : 'Banknote Security Guide'}</Link></li>
            </ul>
          </div>

          {/* Col 5: Strategic Systems & Tenders */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-cbos-gold border-b border-cbos-ink-border pb-1.5">
              {isRtl ? 'المدفوعات والمناقصات' : 'Payments & Tenders'}
            </h4>
            <ul className="space-y-2 text-xs text-cbos-ivory/80">
              <li><Link href="/payments" className="hover:text-cbos-gold transition-colors">{isRtl ? 'المقسم القومي NIPS' : 'National Instant Payments (NIPS)'}</Link></li>
              <li><Link href="/payments#rtgs" className="hover:text-cbos-gold transition-colors">{isRtl ? 'نظام التسوية اللحظية RTGS' : 'RTGS Settlement System'}</Link></li>
              <li><Link href="/tenders" className="hover:text-cbos-gold transition-colors">{isRtl ? 'المناقصات والعطاءات' : 'Procurement & Tenders'}</Link></li>
              <li><Link href="/cybersecurity" className="hover:text-cbos-gold transition-colors">{isRtl ? 'الأمن السيبراني المالي' : 'Financial Cybersecurity'}</Link></li>
              <li><Link href="/consumer-protection" className="hover:text-cbos-gold transition-colors">{isRtl ? 'حماية المستهلك المالي' : 'Consumer Protection'}</Link></li>
            </ul>
          </div>

        </div>

        {/* Bottom Section: Legal, Security & Copyright */}
        <div className="flex flex-col md:flex-row items-center justify-between text-xs text-cbos-stone gap-4">
          <div className="flex items-center gap-3">
            <ShieldCheck className="w-4 h-4 text-cbos-gold" />
            <span>
              {isRtl 
                ? 'جميع الحقوق محفوظة © 2026 — بنك السودان المركزي | جمهورية السودان' 
                : 'All Rights Reserved © 2026 — Central Bank of Sudan | Republic of the Sudan'}
            </span>
          </div>

          <div className="flex items-center space-x-4 rtl:space-x-reverse text-[11px]">
            <Link href="/privacy" className="hover:text-white transition-colors">{isRtl ? 'سياسة الخصوصية' : 'Privacy Policy'}</Link>
            <span>•</span>
            <Link href="/disclaimer" className="hover:text-white transition-colors">{isRtl ? 'إخلاء المسؤولية' : 'Disclaimer'}</Link>
            <span>•</span>
            <Link href="/accessibility" className="hover:text-white transition-colors">{isRtl ? 'إمكانية الوصول (WCAG 2.2)' : 'Accessibility (WCAG 2.2)'}</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
