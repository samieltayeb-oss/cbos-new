'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useLanguage } from '@/lib/languageContext';
import { ShieldCheck, Mail, Phone, MapPin, ExternalLink, Globe, Landmark, Camera, Globe2 } from 'lucide-react';

export default function Footer() {
  const { isRtl, t } = useLanguage();

  return (
    <footer className="bg-[#0B1A2D] text-slate-100 border-t-2 border-[#2F88C2] pt-14 pb-8 px-4 md:px-8">
      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* Top Section: Brand, Address & Mandate */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 pb-10 border-b border-[#22446D]">
          
          {/* Col 1 & 2: Institutional Brand & Mandate */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 flex items-center justify-center shrink-0">
                <Image
                  src="/images/cbos/official/cbos-logo-white.png"
                  alt="CBOS"
                  width={48}
                  height={48}
                  className="object-contain w-full h-full drop-shadow"
                />
              </div>
              <div>
                <div className="text-base font-black text-white font-display">
                  {isRtl ? 'بنك السودان المركزي' : 'Central Bank of Sudan'}
                </div>
                <div className="text-xs text-[#2F88C2] font-mono">
                  Sovereign Central Monetary Authority
                </div>
              </div>
            </div>

            <p className="text-xs text-[#8F9CAE] leading-relaxed">
              {isRtl
                ? 'المؤسسة النقدية السيادية لجمهورية السودان المنوط بها قانوناً إصدار العملة الوطنية، وتحقيق الاستقرار النقدي، ومراقبة الجهاز المصرفي وتنظيم أنظمة المدفوعات القومية.'
                : 'The sovereign monetary authority of the Republic of the Sudan, legally mandated to issue the national currency, ensure monetary stability, supervise the banking system, and operate national payment switches.'}
            </p>

            <div className="text-xs text-[#8F9CAE] space-y-1.5 font-sans">
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#2F88C2] shrink-0" />
                <span>{isRtl ? 'الخرطوم — ص. ب. 313 — جمهورية السودان (المقر الإداري الحالي: بورتسودان)' : 'Khartoum — P.O. Box 313 — Republic of the Sudan (Interim Admin HQ: Port Sudan)'}</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-[#2F88C2] shrink-0" />
                <span>info@cbos.gov.sd</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-[#2F88C2] shrink-0" />
                <span dir="ltr">00249 187 056000 / +249 187 05000</span>
              </div>
              <div className="pt-2">
                <a
                  href="https://www.linkedin.com/company/central-bank-of-sudan/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#11253E] hover:bg-[#0077B5] text-[#8F9CAE] hover:text-white border border-[#22446D] hover:border-[#0077B5] transition-all text-xs font-mono font-medium group"
                  title="Central Bank of Sudan on LinkedIn"
                  aria-label="Central Bank of Sudan on LinkedIn"
                >
                  <svg 
                    className="w-4 h-4 fill-[#0077B5] group-hover:fill-white transition-colors shrink-0" 
                    viewBox="0 0 24 24" 
                    aria-hidden="true"
                  >
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451c.979 0 1.778-.773 1.778-1.729V1.73C24 .774 23.205 0 22.222 0h.003z"/>
                  </svg>
                  <span>{isRtl ? 'صفحة البنك الرسمية على LinkedIn' : 'Official LinkedIn Page'}</span>
                  <ExternalLink className="w-3 h-3 opacity-60 group-hover:opacity-100" />
                </a>
              </div>
            </div>
          </div>

          {/* Col 3: عن بنك السودان (Matching cbos.gov.sd) */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#2F88C2] font-mono border-b border-[#22446D] pb-1.5">
              {isRtl ? 'عن بنك السودان' : 'About CBOS'}
            </h4>
            <ul className="space-y-2 text-xs text-[#8F9CAE]">
              <li><Link href="/about" className="hover:text-white transition-colors">{isRtl ? 'الهيكل الإداري والتنظيمي' : 'Administrative Structure'}</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors">{isRtl ? 'فروع بنك السودان المركزي' : 'CBOS Branch Network'}</Link></li>
              <li><Link href="/leadership" className="hover:text-white transition-colors">{isRtl ? 'محافظو بنك السودان المركزي' : 'Former Governors'}</Link></li>
              <li><Link href="/documents?type=regulation" className="hover:text-white transition-colors">{isRtl ? 'لائحة تنظيم عمل المراجعة الداخلية' : 'Internal Audit Regulations'}</Link></li>
              <li><Link href="/gallery" className="hover:text-[#DFAC46] text-white/90 font-medium transition-colors flex items-center gap-1"><span>{isRtl ? 'معرض صور' : 'Photo Gallery'}</span></Link></li>
              <li><Link href="/publications" className="hover:text-white transition-colors">{isRtl ? 'مكتبة بنك السودان المركزي' : 'CBOS Research Library'}</Link></li>
              <li><Link href="/correspondents" className="hover:text-[#DFAC46] text-white/90 font-medium transition-colors flex items-center gap-1"><span>{isRtl ? 'المراسلين' : 'Correspondent Banks'}</span></Link></li>
            </ul>
          </div>

          {/* Col 4: الجهاز المصرفي والمالي (Matching cbos.gov.sd) */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#2F88C2] font-mono border-b border-[#22446D] pb-1.5">
              {isRtl ? 'الجهاز المصرفي والمالي' : 'Banking & Financial System'}
            </h4>
            <ul className="space-y-2 text-xs text-[#8F9CAE]">
              <li><Link href="/financial-system" className="hover:text-white transition-colors">{isRtl ? 'هيكل الجهاز المصرفي بالسودان' : 'Banking Sector Structure'}</Link></li>
              <li><Link href="/financial-system?type=commercial_bank" className="hover:text-white transition-colors">{isRtl ? 'البنوك العاملة بالسودان' : 'Operating Commercial Banks'}</Link></li>
              <li><Link href="/financial-system" className="hover:text-white transition-colors">{isRtl ? 'التوزيع الجغرافي للجهاز المصرفي' : 'Geographic Distribution'}</Link></li>
              <li><Link href="/financial-system?type=exchange_bureau" className="hover:text-white transition-colors">{isRtl ? 'شركات الصرافة العاملة بالسودان' : 'Foreign Exchange Bureaus'}</Link></li>
              <li><Link href="/financial-system?type=specialized_bank" className="hover:text-white transition-colors">{isRtl ? 'المؤسسات المالية المتخصصة' : 'Specialized Financial Institutions'}</Link></li>
              <li><Link href="/payments" className="hover:text-white transition-colors">{isRtl ? 'المقسم القومي NIPS' : 'National Payment Switch'}</Link></li>
              <li><Link href="/consumer-protection" className="hover:text-white transition-colors">{isRtl ? 'حماية المستهلك المالي' : 'Consumer Protection'}</Link></li>
            </ul>
          </div>

          {/* Col 5: روابط مهمة (Matching cbos.gov.sd) */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#2F88C2] font-mono border-b border-[#22446D] pb-1.5">
              {isRtl ? 'روابط مهمة' : 'Important Links'}
            </h4>
            <ul className="space-y-2 text-xs text-[#8F9CAE]">
              <li>
                <a href="https://mfu.gov.sd/ar" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors flex items-center gap-1">
                  <span>{isRtl ? 'موقع التمويل الأصغر' : 'Microfinance Unit'}</span>
                  <ExternalLink className="w-3 h-3 text-[#2F88C2]" />
                </a>
              </li>
              <li>
                <a href="http://www.hssb.gov.sd/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors flex items-center gap-1">
                  <span>{isRtl ? 'موقع الرقابة الشرعية' : 'High Sharia Supervisory Board'}</span>
                  <ExternalLink className="w-3 h-3 text-[#2F88C2]" />
                </a>
              </li>
              <li>
                <Link href="/financial-inclusion" className="hover:text-white transition-colors">
                  {isRtl ? 'وكالة ضمان التمويل الأصغر (تيسير)' : 'Microfinance Guarantee Agency'}
                </Link>
              </li>
              <li>
                <a href="http://www.imf.org/external/country/SDN/index.htm" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors flex items-center gap-1">
                  <span>{isRtl ? 'السودان وصندوق النقد الدولي' : 'Sudan & IMF Relations'}</span>
                  <ExternalLink className="w-3 h-3 text-[#2F88C2]" />
                </a>
              </li>
              <li>
                <Link href="/data" className="hover:text-white transition-colors">
                  {isRtl ? 'النظام العام لنشر البيانات (e-GDDS)' : 'IMF e-GDDS Data System'}
                </Link>
              </li>
              <li>
                <Link href="/exchange-rates" className="hover:text-white transition-colors">
                  {isRtl ? 'أسعار الصرف اليومية الرسمية' : 'Daily FX Benchmark'}
                </Link>
              </li>
              <li>
                <Link href="/banknotes" className="hover:text-white transition-colors">
                  {isRtl ? 'العلامات التأمينية للبنكنوت' : 'Banknote Architecture'}
                </Link>
              </li>
            </ul>
          </div>

        </div>

        {/* Subfooter Horizontal Bar matching cbos.gov.sd bottom line */}
        <div className="flex flex-wrap items-center justify-between gap-4 py-4 px-5 rounded-xl bg-[#11253E] border border-[#22446D] text-xs font-mono text-[#8F9CAE]">
          <div className="flex flex-wrap items-center gap-4 sm:gap-6">
            <Link href="/sitemap" className="text-white hover:text-[#2F88C2] transition-colors font-bold">
              {isRtl ? 'خارطة الموقع' : 'Sitemap'}
            </Link>
            <span>•</span>
            <Link href="/disclaimer" className="hover:text-white transition-colors">
              {isRtl ? 'حقوق النشر وحدود المسؤولية' : 'Copyright & Disclaimer'}
            </Link>
            <span>•</span>
            <Link href="/tenders" className="hover:text-white transition-colors">
              {isRtl ? 'عطاءات ومناقصات' : 'Tenders & Procurement'}
            </Link>
            <span>•</span>
            <Link href="/financial-system" className="hover:text-white transition-colors">
              {isRtl ? 'مواقع مهمة' : 'Key Portals'}
            </Link>
            <span>•</span>
            <Link href="/about" className="hover:text-white transition-colors">
              {isRtl ? 'علاقات دولية' : 'International Relations'}
            </Link>
          </div>

          <div className="text-[11px] text-[#2F88C2] font-mono">
            {isRtl ? 'بوابة جمهورية السودان النقدية' : 'Republic of Sudan Monetary Portal'}
          </div>
        </div>

        {/* Bottom Legal & Demo Notice */}
        <div className="flex flex-col md:flex-row items-center justify-between text-xs text-[#8F9CAE] gap-4">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-3">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-[#2F88C2] shrink-0" />
              <span>
                {isRtl 
                  ? 'جميع الحقوق محفوظة © 2026 — بنك السودان المركزي | جمهورية السودان' 
                  : 'All Rights Reserved © 2026 — Central Bank of Sudan | Republic of the Sudan'}
              </span>
            </div>
            <span className="hidden sm:inline text-white/20">•</span>
            <span className="text-[11px] text-[#8F9CAE] font-mono bg-[#11253E] px-2.5 py-0.5 rounded border border-[#22446D]">
              {isRtl 
                ? 'نسخة استعراض وتطوير تجريبية (Demo Preview) — الموقع الرسمي: cbos.gov.sd'
                : 'Demo Evaluation Build — Official Portal: cbos.gov.sd'}
            </span>
          </div>

          <div className="flex items-center space-x-4 rtl:space-x-reverse text-[11px]">
            <a 
              href="https://www.linkedin.com/company/central-bank-of-sudan/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-[#8F9CAE] hover:text-[#0077B5] transition-colors inline-flex items-center gap-1.5"
              title="Central Bank of Sudan on LinkedIn"
              aria-label="Central Bank of Sudan on LinkedIn"
            >
              <svg className="w-3.5 h-3.5 fill-current text-[#0077B5]" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451c.979 0 1.778-.773 1.778-1.729V1.73C24 .774 23.205 0 22.222 0h.003z"/>
              </svg>
              <span className="text-white/80 hover:text-white font-medium">LinkedIn</span>
            </a>
            <span>•</span>
            <Link href="/privacy" className="hover:text-white transition-colors">{isRtl ? 'سياسة الخصوصية' : 'Privacy Policy'}</Link>
            <span>•</span>
            <Link href="/disclaimer" className="hover:text-white transition-colors">{isRtl ? 'إخلاء المسؤولية' : 'Disclaimer'}</Link>
            <span>•</span>
            <a 
              href="https://nexorayyc.io" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-[#DFAC46] hover:text-white font-medium transition-colors inline-flex items-center gap-1"
            >
              <span>{isRtl ? 'تم التطوير بواسطة' : 'Built by'}</span>
              <span className="font-bold text-white hover:text-white">NEXORA</span>
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}
