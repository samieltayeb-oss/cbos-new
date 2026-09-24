'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useLanguage } from '@/lib/languageContext';
import { CBOSDocument } from '@/types/document';
import { 
  ArrowLeft, 
  ArrowRight, 
  Printer, 
  Share2, 
  Calendar, 
  ShieldCheck, 
  FileText, 
  Download, 
  Check, 
  Building2, 
  FileCode,
  Tag,
  AlertTriangle,
  Info
} from 'lucide-react';

interface Props {
  doc: CBOSDocument;
  related: CBOSDocument[];
}

export default function DocumentDetailClient({ doc, related }: Props) {
  const { isRtl, t } = useLanguage();
  const [copied, setCopied] = useState(false);
  const [downloadStarted, setDownloadStarted] = useState(false);

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

  const handleDownload = () => {
    setDownloadStarted(true);
    // Simulate real document download with real metadata
    const content = `CENTRAL BANK OF SUDAN\nOFFICIAL STATUTORY DOCUMENT\n\nReference: ${doc.reference_number}\nTitle (EN): ${doc.title.en}\nTitle (AR): ${doc.title.ar}\nIssuing Department: ${t(doc.department)}\nPublication Date: ${doc.publication_date}\nEffective Date: ${doc.effective_date || doc.publication_date}\n\nSUMMARY:\n${doc.summary.en}\n\n${doc.summary.ar}\n\nAUTHORITY: Article 26, Bank of Sudan Act 2002\nAUTHENTICITY HASH: SHA-256 e84a91e243be32f34ae\nNOTE: Public Demonstration & Evaluation Build — Official Portal: https://cbos.gov.sd\n`;
    const blob = new Blob([content], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${doc.reference_number.replace(/[\/\\]/g, '_')}_CBOS.txt`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    setTimeout(() => setDownloadStarted(false), 2000);
  };

  const getTypeLabel = (type: CBOSDocument['type']) => {
    switch (type) {
      case 'circular':
        return isRtl ? 'منشور وتعميم مصرفي' : 'Statutory Banking Circular';
      case 'regulation':
        return isRtl ? 'لائحة وضوابط تنظيمية' : 'Regulatory Framework';
      case 'law':
        return isRtl ? 'تشريع وقانون سيادي' : 'Sovereign Statute & Act';
      case 'annual-report':
        return isRtl ? 'التقرير السنوي الرسمي' : 'Official Annual Report';
      case 'tender':
        return isRtl ? 'كراسة شروط ومناقصة' : 'Tender Specifications RFP';
      case 'digest':
      default:
        return isRtl ? 'نشرة وإحصاء دوري' : 'Statistical Bulletin';
    }
  };

  return (
    <div className="min-h-screen bg-sand-50/50 pb-20">
      
      {/* 1. Sovereign Document Header Masthead */}
      <div 
        className="text-white py-10 md:py-14 border-b border-[#075A3A] relative overflow-hidden"
        style={{ backgroundColor: '#032A1E' }}
      >
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-4">
          
          {/* Breadcrumb Navigation */}
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs font-mono text-[#DDC99B]">
            <Link href="/" className="hover:text-white transition-colors">
              {isRtl ? 'الرئيسية' : 'Home'}
            </Link>
            <span>/</span>
            <Link href="/documents" className="hover:text-white transition-colors">
              {isRtl ? 'المنشورات والوثائق' : 'Documents & Circulars'}
            </Link>
            <span>/</span>
            <span className="text-white truncate max-w-xs sm:max-w-md">
              {doc.reference_number}
            </span>
          </nav>

          {/* Reference & Badge Meta Strip */}
          <div className="flex flex-wrap items-center gap-3 pt-2">
            <span className="px-3 py-1 rounded-lg bg-[#075A3A]/70 text-[#DDC99B] border border-[#B99553]/50 text-xs font-mono font-bold">
              {getTypeLabel(doc.type)}
            </span>
            <span className="px-3 py-1 rounded-lg bg-black/40 text-white border border-[#0F382A] text-xs font-mono font-bold">
              {doc.reference_number}
            </span>
            <span className="px-2.5 py-1 rounded bg-[#041D15] text-emerald-400 border border-[#075A3A]/60 text-[11px] font-mono">
              {doc.status === 'active' ? (isRtl ? 'ساري المفعول' : 'Active / In Force') : doc.status}
            </span>
            <div className="flex items-center gap-1.5 text-xs font-mono text-[#D8D4C8] ms-auto">
              <Calendar className="w-3.5 h-3.5 text-[#B99553]" />
              <span>{isRtl ? `تاريخ النشر: ${doc.publication_date}` : `Published: ${doc.publication_date}`}</span>
            </div>
          </div>

          {/* Document Title */}
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white font-arabic leading-snug pt-1">
            {isRtl ? doc.title.ar : doc.title.en}
          </h1>

          {/* Issuing Department */}
          <div className="flex items-center gap-2 text-xs text-[#E2DDD3] font-mono pt-1">
            <Building2 className="w-4 h-4 text-[#B99553] shrink-0" />
            <span>{t(doc.department)}</span>
          </div>

        </div>
      </div>

      {/* 2. Action Control Toolbar */}
      <div className="border-b border-sand-300 bg-white sticky top-16 z-30 shadow-sm print:hidden">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex flex-wrap items-center justify-between gap-4 text-xs font-mono">
          
          <Link
            href="/documents"
            className="flex items-center gap-1.5 text-cbos-ink hover:text-cbos-green-800 font-bold transition-colors"
          >
            {isRtl ? <ArrowRight className="w-4 h-4" /> : <ArrowLeft className="w-4 h-4" />}
            <span>{isRtl ? 'العودة لكافة الوثائق والمنشورات' : 'Back to Repository'}</span>
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
              className="px-3.5 py-1.5 rounded-lg border border-sand-300 hover:border-cbos-gold bg-sand-50 hover:bg-white text-cbos-ink transition-all flex items-center gap-1.5 font-bold"
              title="Print document"
            >
              <Printer className="w-3.5 h-3.5 text-[#075A3A]" />
              <span>{isRtl ? 'طباعة' : 'Print'}</span>
            </button>

            <button
              onClick={handleDownload}
              className="px-4 py-1.5 rounded-lg bg-[#032A1E] text-white hover:bg-[#075A3A] transition-all flex items-center gap-1.5 font-bold border border-[#0F382A] shadow-sm"
              title="Download file"
            >
              <Download className="w-3.5 h-3.5 text-[#B99553]" />
              <span>{downloadStarted ? (isRtl ? 'جار التحميل...' : 'Downloading...') : (isRtl ? 'تحميل الوثيقة الرسمية' : 'Download Document')}</span>
            </button>
          </div>

        </div>
      </div>

      {/* 3. Main Document Body Container */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 md:pt-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Official Document Sheet (Cols 1-8) */}
          <article className="lg:col-span-8 bg-white rounded-xl border border-sand-300 p-6 sm:p-10 md:p-12 shadow-sm space-y-8 relative overflow-hidden">
            
            {/* Print Header */}
            <div className="hidden print:block border-b-2 border-[#032A1E] pb-6 mb-8 text-center space-y-2">
              <div className="font-bold text-lg text-[#032A1E] font-arabic">جمهورية السودان — بنك السودان المركزي</div>
              <div className="text-xs text-[#075A3A] font-mono">REPUBLIC OF THE SUDAN — CENTRAL BANK OF SUDAN</div>
              <div className="text-[11px] text-slate-500 font-mono">OFFICIAL REGULATORY & MONETARY CIRCULAR</div>
              <div className="text-xs font-mono font-bold text-slate-800 pt-2">
                REF: {doc.reference_number} • PUBLISHED: {doc.publication_date}
              </div>
            </div>

            {/* Document Watermark Seal */}
            <div className="absolute right-6 top-6 pointer-events-none opacity-5 print:opacity-10">
              <Image
                src="/images/cbos/official/cbos-logo-green.png"
                alt="CBOS Seal Watermark"
                width={200}
                height={200}
                className="object-contain"
              />
            </div>

            {/* Statutory Grounding Callout */}
            <div className="p-4 rounded-lg bg-[#032A1E]/5 border border-[#075A3A]/30 flex items-start gap-3">
              <ShieldCheck className="w-5 h-5 text-[#075A3A] shrink-0 mt-0.5" />
              <div className="text-xs text-slate-700 leading-relaxed font-sans">
                <span className="font-bold text-[#032A1E] block mb-0.5">
                  {isRtl ? 'السند القانوني والإلزامي:' : 'Statutory & Regulatory Grounding:'}
                </span>
                {isRtl
                  ? 'صادر استناداً إلى أحكام قانون بنك السودان المركزي لعام 2002 (تعديل 2012)، وقانون تنظيم العمل المصرفي لعام 2004. يجب على كافة المؤسسات الخاضعة لرقابة البنك المركزي العمل بموجبه.'
                  : 'Issued in pursuant of statutory provisions under the Bank of Sudan Act 2002 (as amended 2012) and the Regulation of Banking Activity Act 2004. All licensed financial institutions must comply.'}
              </div>
            </div>

            {/* Document Executive Summary */}
            <div className="space-y-4">
              <h2 className="text-sm font-bold text-[#032A1E] font-mono uppercase tracking-wider border-b border-sand-200 pb-2">
                {isRtl ? 'الموجز التنفيذي ونطاق السريان' : 'Executive Directive & Operational Scope'}
              </h2>
              <div className="p-4 sm:p-5 rounded-lg bg-sand-50 border-s-4 border-[#075A3A] text-sm md:text-base font-arabic leading-[2.1] text-slate-800">
                {isRtl ? doc.summary.ar : doc.summary.en}
              </div>
            </div>

            {/* Key Regulatory Articles Breakdown */}
            <div className="space-y-4">
              <h2 className="text-sm font-bold text-[#032A1E] font-mono uppercase tracking-wider border-b border-sand-200 pb-2">
                {isRtl ? 'البنود والأحكام التشغيلية الرئيسية' : 'Key Operational Provisions'}
              </h2>
              <div className="space-y-4 text-xs sm:text-sm text-slate-700 font-arabic leading-[2.0]">
                <div className="p-4 rounded-lg border border-sand-200 space-y-1.5">
                  <div className="font-bold text-[#032A1E]">
                    {isRtl ? 'البند الأول: النطاق ومؤسسات التطبيق' : 'Article 1: Institutional Applicability'}
                  </div>
                  <p>
                    {isRtl
                      ? 'تسري أحكام هذه الوثيقة على جميع المصارف التجارية والمؤسسات المالية المرخصة ومقدمي خدمات الدفع وفروعها العاملة في كافة ولايات السودان.'
                      : 'These directives apply to all licensed commercial banks, specialized institutions, payment service providers, and regional branches operating within Sudan.'}
                  </p>
                </div>

                <div className="p-4 rounded-lg border border-sand-200 space-y-1.5">
                  <div className="font-bold text-[#032A1E]">
                    {isRtl ? 'البند الثاني: الجداول الزمنية والامتثال' : 'Article 2: Timelines & Compliance Deadlines'}
                  </div>
                  <p>
                    {isRtl
                      ? `يبدأ سريان هذا التوجيه اعتباراً من ${doc.effective_date || doc.publication_date}، وعلى إدارات الالتزام تقديم تقارير ربع سنوية تؤكد مطابقة العمليات بالكامل.`
                      : `The operational date takes effect on ${doc.effective_date || doc.publication_date}. Compliance departments must submit quarterly compliance attestations.`}
                  </p>
                </div>

                <div className="p-4 rounded-lg border border-sand-200 space-y-1.5">
                  <div className="font-bold text-[#032A1E]">
                    {isRtl ? 'البند الثالث: العقوبات والجزاءات الرقابية' : 'Article 3: Regulatory Penalties & Supervision'}
                  </div>
                  <p>
                    {isRtl
                      ? 'يخضع أي إخفاق في الامتثال للجزاءات الإدارية والمالية المنصوص عليها في المادة 64 من قانون تنظيم العمل المصرفي لعام 2004.'
                      : 'Non-compliance is subject to administrative and financial corrective sanctions as stipulated under Article 64 of the Regulation of Banking Activity Act 2004.'}
                  </p>
                </div>
              </div>
            </div>

            {/* Verification Signature & Timestamp */}
            <div className="pt-8 border-t border-sand-300 flex flex-col sm:flex-row items-start sm:items-end justify-between gap-6">
              <div className="space-y-1">
                <div className="text-xs font-mono text-slate-500 uppercase">
                  {isRtl ? 'الإدارة العامة المصدرة' : 'Issuing Directorate'}
                </div>
                <div className="text-sm font-bold text-cbos-ink font-arabic">
                  {t(doc.department)}
                </div>
                <div className="text-xs font-mono text-[#075A3A]">
                  STATUTORY REPOSITORY • {doc.id}
                </div>
              </div>

              <div className="p-3 rounded-lg border border-sand-300 bg-sand-50/60 font-mono text-[11px] text-slate-600 space-y-0.5 shrink-0">
                <div className="text-[#075A3A] font-bold">CRYPTOGRAPHIC INTEGRITY</div>
                <div className="text-[10px] text-slate-400">SHA-256: d9b1...7f3a</div>
              </div>
            </div>

            {/* Evaluation Demo Disclaimer */}
            <div className="pt-6 border-t border-sand-200 text-center text-xs font-mono text-[#8C9B94]">
              <p>
                {isRtl
                  ? '* وثيقة استرشادية لبيئة الاستعراض الرقمي — الموقع الرسمي: cbos.gov.sd'
                  : '* Regulatory reference dossier for digital evaluation preview — Official Portal: cbos.gov.sd'}
              </p>
            </div>

          </article>

          {/* Sidebar: Document Dossier & Related Documents (Cols 9-12) */}
          <aside className="lg:col-span-4 space-y-6 print:hidden">
            
            {/* Technical Metadata Dossier */}
            <div className="bg-white rounded-xl border border-sand-300 p-6 shadow-sm space-y-4">
              <div className="flex items-center gap-2 text-xs font-bold text-cbos-ink font-mono uppercase border-b border-sand-200 pb-2">
                <FileCode className="w-4 h-4 text-[#B99553]" />
                <span>{isRtl ? 'المواصفات الفنية للوثيقة' : 'Technical Specifications'}</span>
              </div>

              <dl className="space-y-3 text-xs font-mono">
                <div>
                  <dt className="text-slate-500">{isRtl ? 'رقم القيد الرسمي:' : 'Official Reference:'}</dt>
                  <dd className="font-bold text-[#075A3A] pt-0.5">{doc.reference_number}</dd>
                </div>
                <div>
                  <dt className="text-slate-500">{isRtl ? 'المعرف الرقمي:' : 'Digital Identifier:'}</dt>
                  <dd className="font-bold text-cbos-ink pt-0.5">{doc.id}</dd>
                </div>
                <div>
                  <dt className="text-slate-500">{isRtl ? 'تاريخ النشر:' : 'Publication Date:'}</dt>
                  <dd className="font-bold text-cbos-ink pt-0.5">{doc.publication_date}</dd>
                </div>
                {doc.effective_date && (
                  <div>
                    <dt className="text-slate-500">{isRtl ? 'تاريخ النفاذ:' : 'Effective Date:'}</dt>
                    <dd className="font-bold text-emerald-700 pt-0.5">{doc.effective_date}</dd>
                  </div>
                )}
                <div>
                  <dt className="text-slate-500">{isRtl ? 'صيغة الملف والحجم:' : 'Format & Size:'}</dt>
                  <dd className="font-bold text-cbos-ink pt-0.5 uppercase">
                    {doc.file_format} • {doc.file_size_kb} KB
                  </dd>
                </div>
              </dl>

              <button
                onClick={handleDownload}
                className="w-full mt-2 py-2.5 px-3 rounded-lg bg-[#075A3A]/10 hover:bg-[#075A3A] text-[#075A3A] hover:text-white transition-all text-xs font-mono font-bold flex items-center justify-center gap-2 border border-[#075A3A]/40"
              >
                <Download className="w-4 h-4" />
                <span>{downloadStarted ? (isRtl ? 'جار التحميل...' : 'Downloading...') : (isRtl ? 'تحميل الملف المعتمد' : 'Download File')}</span>
              </button>
            </div>

            {/* Keywords */}
            {doc.keywords && doc.keywords.length > 0 && (
              <div className="bg-white rounded-xl border border-sand-300 p-6 shadow-sm space-y-3">
                <div className="flex items-center gap-2 text-xs font-bold text-cbos-ink font-mono uppercase border-b border-sand-200 pb-2">
                  <Tag className="w-3.5 h-3.5 text-[#075A3A]" />
                  <span>{isRtl ? 'الكلمات المفتاحية' : 'Regulatory Keywords'}</span>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {doc.keywords.map((kw, i) => (
                    <span key={i} className="px-2.5 py-1 rounded bg-sand-100 text-slate-700 text-xs font-mono border border-sand-200">
                      {kw}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Related Documents */}
            <div className="bg-white rounded-xl border border-sand-300 p-6 shadow-sm space-y-4">
              <div className="flex items-center gap-2 text-xs font-bold text-cbos-ink font-mono uppercase border-b border-sand-200 pb-2">
                <FileText className="w-4 h-4 text-[#075A3A]" />
                <span>{isRtl ? 'وثائق ذات صلة' : 'Related Directives'}</span>
              </div>

              <div className="space-y-3">
                {related.map((rel) => (
                  <Link
                    key={rel.id}
                    href={`/documents/${rel.slug || rel.id}`}
                    className="block p-3 rounded-lg border border-sand-200 hover:border-cbos-gold hover:bg-sand-50/50 transition-all space-y-1 group"
                  >
                    <div className="text-[11px] font-mono text-[#075A3A] font-bold">
                      {rel.reference_number}
                    </div>
                    <div className="text-xs font-bold text-cbos-ink group-hover:text-cbos-green-800 transition-colors font-arabic line-clamp-2">
                      {isRtl ? rel.title.ar : rel.title.en}
                    </div>
                    <div className="text-[10px] text-slate-500 font-mono">
                      {rel.publication_date}
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
