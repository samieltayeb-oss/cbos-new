'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useLanguage } from '@/lib/languageContext';
import { NewsItem } from '@/data/news';
import { 
  ArrowLeft, 
  ArrowRight, 
  Printer, 
  Share2, 
  Calendar, 
  ShieldCheck, 
  FileText, 
  Check, 
  AlertCircle,
  Building2,
  ExternalLink,
  Info
} from 'lucide-react';

interface Props {
  item: NewsItem;
  related: NewsItem[];
}

export default function NewsDetailClient({ item, related }: Props) {
  const { isRtl } = useLanguage();
  const [copied, setCopied] = useState(false);

  const handlePrint = () => {
    if (typeof window !== 'undefined') {
      window.print();
    }
  };

  const handleCopyLink = () => {
    if (typeof window !== 'undefined') {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const getCategoryLabel = (cat: NewsItem['category']) => {
    switch (cat) {
      case 'official_notice':
        return isRtl ? 'إشعار رقابي رسمي' : 'Official Regulatory Notice';
      case 'circular':
        return isRtl ? 'منشور وتعميم مصرفي' : 'Statutory Banking Circular';
      case 'tender':
        return isRtl ? 'مناقصة وعطاء عام' : 'Public Procurement Tender';
      case 'press_release':
      default:
        return isRtl ? 'بيان صحفي وإعلامي' : 'Press & Institutional Release';
    }
  };

  return (
    <div className="min-h-screen bg-sand-50/50 pb-20">
      
      {/* 1. Institutional Breadcrumb & Header Masthead */}
      <div 
        className="text-white py-10 md:py-14 border-b border-[#22446D] relative overflow-hidden"
        style={{ backgroundColor: '#0B1A2D' }}
      >
        {/* Subtle Watermark Guilloche */}
        <div className="absolute inset-0 pointer-events-none opacity-10">
          <svg className="w-full h-full object-cover" viewBox="0 0 1000 300" fill="none">
            <path d="M-50,150 C200,50 500,250 1050,100" stroke="#B99553" strokeWidth="1.5" strokeDasharray="6 4" />
          </svg>
        </div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-4">
          
          {/* Breadcrumb Navigation */}
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs font-mono text-[#DDC99B]">
            <Link href="/" className="hover:text-white transition-colors">
              {isRtl ? 'الرئيسية' : 'Home'}
            </Link>
            <span>/</span>
            <Link href="/news" className="hover:text-white transition-colors">
              {isRtl ? 'الأخبار والمنشورات' : 'News & Directives'}
            </Link>
            <span>/</span>
            <span className="text-white truncate max-w-xs sm:max-w-md">
              {item.referenceNumber || item.id}
            </span>
          </nav>

          {/* Reference & Category Meta Row */}
          <div className="flex flex-wrap items-center gap-3 pt-2">
            <span className="px-3 py-1 rounded-lg bg-[#2F88C2]/70 text-[#DDC99B] border border-[#B99553]/50 text-xs font-mono font-bold">
              {getCategoryLabel(item.category)}
            </span>
            {item.referenceNumber && (
              <span className="px-3 py-1 rounded-lg bg-black/40 text-white border border-[#22446D] text-xs font-mono">
                REF: {item.referenceNumber}
              </span>
            )}
            <div className="flex items-center gap-1.5 text-xs font-mono text-[#D8D4C8] ms-auto">
              <Calendar className="w-3.5 h-3.5 text-[#B99553]" />
              <span>{item.date}</span>
            </div>
          </div>

          {/* Document Title */}
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white font-arabic leading-snug pt-1">
            {isRtl ? item.title.ar : item.title.en}
          </h1>

          {/* Statutory Anchor Statement */}
          <div className="flex items-center gap-2 text-xs text-[#A89F91] font-mono pt-1">
            <ShieldCheck className="w-4 h-4 text-[#B99553] shrink-0" />
            <span>
              {isRtl 
                ? 'وثيقة رسمية صادرة بموجب الصلاحيات المخولة بقانون بنك السودان 2002'
                : 'Official directive issued under statutory powers of the Bank of Sudan Act 2002'}
            </span>
          </div>

        </div>
      </div>

      {/* 2. Action Control Toolbar (Print, Copy, Download) */}
      <div className="border-b border-sand-300 bg-white sticky top-16 z-30 shadow-sm print:hidden">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex flex-wrap items-center justify-between gap-4 text-xs font-mono">
          
          <Link
            href="/news"
            className="flex items-center gap-1.5 text-cbos-ink hover:text-cbos-green-800 font-bold transition-colors"
          >
            {isRtl ? <ArrowRight className="w-4 h-4" /> : <ArrowLeft className="w-4 h-4" />}
            <span>{isRtl ? 'العودة لكافة الأخبار والمنشورات' : 'Back to News & Circulars'}</span>
          </Link>

          <div className="flex items-center gap-2.5">
            <button
              onClick={handleCopyLink}
              className="px-3 py-1.5 rounded-lg border border-sand-300 hover:border-cbos-gold bg-sand-50 hover:bg-white text-cbos-ink transition-all flex items-center gap-1.5 font-bold"
              title="Copy permalink"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Share2 className="w-3.5 h-3.5 text-[#B99553]" />}
              <span>{copied ? (isRtl ? 'تم النسخ' : 'Copied') : (isRtl ? 'مشاركة الرابط' : 'Share Link')}</span>
            </button>

            <button
              onClick={handlePrint}
              className="px-4 py-1.5 rounded-lg bg-[#0B1A2D] text-white hover:bg-[#2F88C2] transition-all flex items-center gap-1.5 font-bold border border-[#22446D] shadow-sm"
              title="Print official document"
            >
              <Printer className="w-3.5 h-3.5 text-[#B99553]" />
              <span>{isRtl ? 'طباعة الوثيقة' : 'Print Document'}</span>
            </button>
          </div>

        </div>
      </div>

      {/* 3. Main Document Body Container */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 md:pt-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Official Document Sheet (Cols 1-8) */}
          <article className="lg:col-span-8 bg-white rounded-xl border border-sand-300 p-6 sm:p-10 md:p-12 shadow-sm space-y-8 relative overflow-hidden">
            
            {/* Print-Only Official Sovereign Letterhead */}
            <div className="hidden print:block border-b-2 border-[#22446D] pb-6 mb-8 text-center space-y-2">
              <div className="font-bold text-lg text-[#0B1A2D] font-arabic">جمهورية السودان — بنك السودان المركزي</div>
              <div className="text-xs text-[#2F88C2] font-mono">REPUBLIC OF THE SUDAN — CENTRAL BANK OF SUDAN</div>
              <div className="text-[11px] text-slate-500 font-mono">STATUTORY MONETARY & REGULATORY DIRECTIVE</div>
              <div className="text-xs font-mono font-bold text-slate-800 pt-2">
                REF: {item.referenceNumber || item.id} • DATE: {item.date}
              </div>
            </div>

            {/* Document Watermark */}
            <div className="absolute right-6 top-6 pointer-events-none opacity-5 print:opacity-10">
              <Image
                src="/images/cbos/official/cbos-logo-green.png"
                alt="CBOS Seal Watermark"
                width={200}
                height={200}
                className="object-contain"
              />
            </div>

            {/* Lead Excerpt Summary */}
            <div className="p-4 sm:p-5 rounded-lg bg-sand-50/80 border-s-4 border-[#22446D] text-sm md:text-base font-medium text-cbos-ink leading-relaxed font-arabic">
              {isRtl ? item.excerpt.ar : item.excerpt.en}
            </div>

            {/* Complete Document Content */}
            <div className="space-y-6 text-sm sm:text-base text-slate-700 font-arabic leading-[2.1] font-normal">
              <p>
                {isRtl ? item.content.ar : item.content.en}
              </p>
              
              <div className="pt-4 space-y-3 border-t border-sand-200 text-xs sm:text-sm font-sans text-slate-600">
                <p className="font-bold text-cbos-ink">
                  {isRtl ? 'التوجيهات الرقابية والإلزامية:' : 'Regulatory Scope & Compliance Instructions:'}
                </p>
                <ul className="list-disc list-inside space-y-2 ps-2 text-slate-700">
                  <li>
                    {isRtl 
                      ? 'يسري هذا التوجيه على كافة المصارف التجارية العاملة، فروع المصارف الأجنبية، والمؤسسات المالية المرخصة في السودان.'
                      : 'Applicable across all licensed commercial banking institutions, foreign bank branches, and regulated payment entities in Sudan.'}
                  </li>
                  <li>
                    {isRtl
                      ? 'يقع واجب الامتثال على عاتق الإدارات التنفيذية وأقسام الالتزام المصرفي وتكنولوجيا المعلومات ذات الصلة.'
                      : 'Executive oversight and institutional compliance are mandated under the supervision of the respective Board and Directorate.'}
                  </li>
                  <li>
                    {isRtl
                      ? 'تُرفع تقارير دورية تثبت تمام الجاهزية والامتثال إلى الإدارة العامة المعنية بالبنك المركزي.'
                      : 'Periodic compliance attestations must be filed with the designated Central Bank supervisory directorate.'}
                  </li>
                </ul>
              </div>
            </div>

            {/* Official Sovereign Signature Block */}
            <div className="pt-10 border-t border-sand-300 flex flex-col sm:flex-row items-start sm:items-end justify-between gap-6">
              <div className="space-y-1">
                <div className="text-xs font-mono text-slate-500 uppercase tracking-wider">
                  {isRtl ? 'جهة الإصدار المعتمدة' : 'Issuing Authority'}
                </div>
                <div className="text-sm font-bold text-cbos-ink font-arabic">
                  {isRtl ? 'بنك السودان المركزي — المقر المؤقت، بورتسودان' : 'Central Bank of Sudan — Interim HQ, Port Sudan'}
                </div>
                <div className="text-xs font-mono text-[#2F88C2]">
                  STATUTORY SERIES • {item.id}
                </div>
              </div>

              <div className="p-3 rounded-lg border border-sand-300 bg-sand-50/60 text-center font-mono text-[11px] text-slate-600 space-y-1 shrink-0">
                <div className="text-[#2F88C2] font-bold">DIGITALLY VERIFIED</div>
                <div className="text-[10px] text-slate-400">SHA-256: 48e9...c01f</div>
              </div>
            </div>

            {/* Evaluation Demo Disclaimer */}
            <div className="pt-6 border-t border-sand-200 text-center text-xs font-mono text-[#8C9B94]">
              <p>
                {isRtl
                  ? '* هذه الوثيقة منشورة لأغراض استعراض وتدقيق النموذج الرقمي — الموقع الرسمي: cbos.gov.sd'
                  : '* This publication is provided for digital platform evaluation preview — Official Portal: cbos.gov.sd'}
              </p>
            </div>

          </article>

          {/* Sidebar: Metadata & Related Circulars (Cols 9-12) */}
          <aside className="lg:col-span-4 space-y-6 print:hidden">
            
            {/* Quick Metadata Dossier Card */}
            <div className="bg-white rounded-xl border border-sand-300 p-6 shadow-sm space-y-4">
              <div className="flex items-center gap-2 text-xs font-bold text-cbos-ink font-mono uppercase border-b border-sand-200 pb-2">
                <Building2 className="w-4 h-4 text-[#B99553]" />
                <span>{isRtl ? 'ملف الوثيقة المؤسسي' : 'Document Dossier'}</span>
              </div>

              <dl className="space-y-3 text-xs font-mono">
                <div>
                  <dt className="text-slate-500">{isRtl ? 'المعرف الرقمي:' : 'Identifier:'}</dt>
                  <dd className="font-bold text-cbos-ink pt-0.5">{item.id}</dd>
                </div>
                {item.referenceNumber && (
                  <div>
                    <dt className="text-slate-500">{isRtl ? 'رقم القيد الرسمي:' : 'Official Reference:'}</dt>
                    <dd className="font-bold text-[#2F88C2] pt-0.5">{item.referenceNumber}</dd>
                  </div>
                )}
                <div>
                  <dt className="text-slate-500">{isRtl ? 'تاريخ الصدور:' : 'Publishing Date:'}</dt>
                  <dd className="font-bold text-cbos-ink pt-0.5">{item.date}</dd>
                </div>
                <div>
                  <dt className="text-slate-500">{isRtl ? 'التصنيف الرقابي:' : 'Regulatory Class:'}</dt>
                  <dd className="font-bold text-cbos-ink pt-0.5">{getCategoryLabel(item.category)}</dd>
                </div>
                <div>
                  <dt className="text-slate-500">{isRtl ? 'المستهدفون:' : 'Target Audience:'}</dt>
                  <dd className="font-sans text-slate-700 pt-0.5">
                    {isRtl ? 'كافة المصارف والمؤسسات المالية والجمهور' : 'Commercial Banks, Financial Institutions & Public'}
                  </dd>
                </div>
              </dl>
            </div>

            {/* Related Announcements */}
            <div className="bg-white rounded-xl border border-sand-300 p-6 shadow-sm space-y-4">
              <div className="flex items-center gap-2 text-xs font-bold text-cbos-ink font-mono uppercase border-b border-sand-200 pb-2">
                <FileText className="w-4 h-4 text-[#2F88C2]" />
                <span>{isRtl ? 'منشورات ذات صلة' : 'Related Publications'}</span>
              </div>

              <div className="space-y-3">
                {related.map((rel) => (
                  <Link
                    key={rel.id}
                    href={`/news/${rel.slug || rel.id}`}
                    className="block p-3 rounded-lg border border-sand-200 hover:border-cbos-gold hover:bg-sand-50/50 transition-all space-y-1 group"
                  >
                    <div className="text-[11px] font-mono text-[#2F88C2] font-bold">
                      {rel.referenceNumber || rel.id}
                    </div>
                    <div className="text-xs font-bold text-cbos-ink group-hover:text-cbos-green-800 transition-colors font-arabic line-clamp-2">
                      {isRtl ? rel.title.ar : rel.title.en}
                    </div>
                    <div className="text-[10px] text-slate-500 font-mono">
                      {rel.date}
                    </div>
                  </Link>
                ))}
              </div>
            </div>

          </aside>

        </div>
      </div>

    </div>
  );
}
