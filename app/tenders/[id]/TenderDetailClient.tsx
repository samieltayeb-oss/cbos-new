'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useLanguage } from '@/lib/languageContext';
import { Tender } from '@/data/tenders';
import { 
  ArrowLeft, 
  ArrowRight, 
  Printer, 
  Share2, 
  Calendar, 
  Clock, 
  FileText, 
  Download, 
  Check, 
  Building2, 
  CheckCircle2,
  MapPin,
  Coins,
  ShieldAlert,
  Info
} from 'lucide-react';

interface Props {
  tender: Tender;
  related: Tender[];
}

export default function TenderDetailClient({ tender, related }: Props) {
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

  const handleDownloadDossier = () => {
    setDownloadStarted(true);
    const content = `CENTRAL BANK OF SUDAN\nPROCUREMENT & CONTRACTS COMMITTEE\nOFFICIAL TENDER DOSSIER\n\nTender Reference: ${tender.refNumber}\nTitle (EN): ${tender.title.en}\nTitle (AR): ${tender.title.ar}\nCategory: ${t(tender.category)}\nPublish Date: ${tender.publishDate}\nClosing Date: ${tender.closingDate}\n\nFINANCIAL TERMS:\n- Initial Deposit / Bid Bond: ${tender.depositAmount}\n- Tender Booklet Fee: ${tender.bookletFee}\n\nDESCRIPTION & SCOPE:\n${tender.description.en}\n\n${tender.description.ar}\n\nSUBMISSION INSTRUCTIONS:\n${t(tender.submissionLocation || { ar: 'مقر بنك السودان المركزي — بورتسودان', en: 'CBOS Interim Headquarters — Port Sudan' })}\n\nAUTHORITY: General Procurement & Contracting Regulations, Bank of Sudan Act 2002\nNOTE: Public Demonstration & Evaluation Build — Official Portal: https://cbos.gov.sd\n`;
    const blob = new Blob([content], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${tender.refNumber.replace(/[\/\\]/g, '_')}_CBOS_RFP.txt`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    setTimeout(() => setDownloadStarted(false), 2000);
  };

  const getStatusBadge = (status: Tender['status']) => {
    switch (status) {
      case 'active':
        return (
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-emerald-950/80 text-emerald-300 border border-emerald-700/60 text-xs font-mono font-bold">
            <span className="w-2 h-2 rounded-full bg-emerald-400 ring-2 ring-emerald-500/20" />
            <span>{isRtl ? 'عطاء نشط ومفتوح لتقديم العروض' : 'Active — Accepting Bids'}</span>
          </span>
        );
      case 'evaluating':
        return (
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-amber-950/80 text-amber-300 border border-amber-700/60 text-xs font-mono font-bold">
            <span className="w-2 h-2 rounded-full bg-amber-400" />
            <span>{isRtl ? 'قيد الفرز والتقييم الفني' : 'Under Technical Evaluation'}</span>
          </span>
        );
      case 'awarded':
      default:
        return (
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-slate-900 text-slate-300 border border-slate-700 text-xs font-mono font-bold">
            <span>{isRtl ? 'تمت الترسية وإغلاق العطاء' : 'Tender Awarded'}</span>
          </span>
        );
    }
  };

  return (
    <div className="min-h-screen bg-sand-50/50 pb-20">
      
      {/* 1. Procurement Masthead */}
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
            <Link href="/tenders" className="hover:text-white transition-colors">
              {isRtl ? 'المناقصات والعطاءات' : 'Procurement & Tenders'}
            </Link>
            <span>/</span>
            <span className="text-white truncate max-w-xs sm:max-w-md">
              {tender.refNumber}
            </span>
          </nav>

          {/* Reference & Status Meta Row */}
          <div className="flex flex-wrap items-center gap-3 pt-2">
            {getStatusBadge(tender.status)}
            <span className="px-3 py-1 rounded-lg bg-black/40 text-white border border-[#0F382A] text-xs font-mono font-bold">
              {tender.refNumber}
            </span>
            <span className="px-3 py-1 rounded-lg bg-[#075A3A]/70 text-[#DDC99B] border border-[#B99553]/50 text-xs font-mono">
              {t(tender.category)}
            </span>
          </div>

          {/* Title */}
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white font-arabic leading-snug pt-1">
            {isRtl ? tender.title.ar : tender.title.en}
          </h1>

          {/* Issuing Committee & Key Dates */}
          <div className="flex flex-wrap items-center gap-6 text-xs text-[#E2DDD3] font-mono pt-1">
            <div className="flex items-center gap-1.5">
              <Building2 className="w-4 h-4 text-[#B99553]" />
              <span>{t(tender.targetDepartment)}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Calendar className="w-4 h-4 text-[#B99553]" />
              <span>{isRtl ? `تاريخ الطرح: ${tender.publishDate}` : `Published: ${tender.publishDate}`}</span>
            </div>
            <div className="flex items-center gap-1.5 text-rose-300 font-bold">
              <Clock className="w-4 h-4 text-rose-400" />
              <span>{isRtl ? `آخر موعد لتقديم العروض: ${tender.closingDate}` : `Closing Deadline: ${tender.closingDate}`}</span>
            </div>
          </div>

        </div>
      </div>

      {/* 2. Action Control Toolbar */}
      <div className="border-b border-sand-300 bg-white sticky top-16 z-30 shadow-sm print:hidden">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex flex-wrap items-center justify-between gap-4 text-xs font-mono">
          
          <Link
            href="/tenders"
            className="flex items-center gap-1.5 text-cbos-ink hover:text-cbos-green-800 font-bold transition-colors"
          >
            {isRtl ? <ArrowRight className="w-4 h-4" /> : <ArrowLeft className="w-4 h-4" />}
            <span>{isRtl ? 'العودة لكافة العطاءات والمناقصات' : 'Back to Tenders'}</span>
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
              title="Print tender specifications"
            >
              <Printer className="w-3.5 h-3.5 text-[#075A3A]" />
              <span>{isRtl ? 'طباعة الكراسة' : 'Print RFP'}</span>
            </button>

            <button
              onClick={handleDownloadDossier}
              className="px-4 py-1.5 rounded-lg bg-[#032A1E] text-white hover:bg-[#075A3A] transition-all flex items-center gap-1.5 font-bold border border-[#0F382A] shadow-sm"
              title="Download tender dossier"
            >
              <Download className="w-3.5 h-3.5 text-[#B99553]" />
              <span>{downloadStarted ? (isRtl ? 'جار التحميل...' : 'Downloading...') : (isRtl ? 'تحميل كراسة الشروط' : 'Download RFP Dossier')}</span>
            </button>
          </div>

        </div>
      </div>

      {/* 3. Main Tender Details Sheet */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 md:pt-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Main Tender Dossier Sheet (Cols 1-8) */}
          <article className="lg:col-span-8 bg-white rounded-xl border border-sand-300 p-6 sm:p-10 md:p-12 shadow-sm space-y-8 relative overflow-hidden">
            
            {/* Print Header */}
            <div className="hidden print:block border-b-2 border-[#032A1E] pb-6 mb-8 text-center space-y-2">
              <div className="font-bold text-lg text-[#032A1E] font-arabic">جمهورية السودان — بنك السودان المركزي</div>
              <div className="text-xs text-[#075A3A] font-mono">REPUBLIC OF THE SUDAN — CENTRAL BANK OF SUDAN</div>
              <div className="text-[11px] text-slate-500 font-mono">PROCUREMENT & CONTRACTS COMMITTEE • TENDER DOSSIER</div>
              <div className="text-xs font-mono font-bold text-slate-800 pt-2">
                REF: {tender.refNumber} • DEADLINE: {tender.closingDate}
              </div>
            </div>

            {/* Financial Requirements Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-sand-50 border border-sand-300 space-y-1">
                <span className="text-[11px] font-mono text-slate-500 uppercase flex items-center gap-1.5">
                  <Coins className="w-4 h-4 text-[#B99553]" />
                  <span>{isRtl ? 'قيمة التأمين المبدئي (خطاب الضمان)' : 'Initial Deposit / Bid Bond'}</span>
                </span>
                <div className="text-lg font-bold font-mono text-[#032A1E]">
                  {tender.depositAmount}
                </div>
                <div className="text-[10px] text-slate-500">
                  {isRtl ? 'شيك مصرفي معتمد أو خطاب ضمان بنكي ساري' : 'Certified cashier cheque or unconditional bank guarantee'}
                </div>
              </div>

              <div className="p-4 rounded-xl bg-sand-50 border border-sand-300 space-y-1">
                <span className="text-[11px] font-mono text-slate-500 uppercase flex items-center gap-1.5">
                  <FileText className="w-4 h-4 text-[#075A3A]" />
                  <span>{isRtl ? 'رسوم كراسة الشروط والمواصفات' : 'Tender Booklet Fee'}</span>
                </span>
                <div className="text-lg font-bold font-mono text-[#075A3A]">
                  {tender.bookletFee}
                </div>
                <div className="text-[10px] text-slate-500">
                  {isRtl ? 'غير قابلة للاسترداد وتُدفع بخزينة البنك' : 'Non-refundable fee payable at central cashiers'}
                </div>
              </div>
            </div>

            {/* Scope of Work & Description */}
            <div className="space-y-4">
              <h2 className="text-sm font-bold text-[#032A1E] font-mono uppercase tracking-wider border-b border-sand-200 pb-2">
                {isRtl ? 'نطاق الأعمال والمواصفات الفنية' : 'Scope of Work & Technical Requirements'}
              </h2>
              <p className="text-sm sm:text-base text-slate-700 font-arabic leading-[2.1]">
                {t(tender.description)}
              </p>
            </div>

            {/* Mandatory Eligibility Checklist */}
            {tender.eligibility && (
              <div className="space-y-4">
                <h2 className="text-sm font-bold text-[#032A1E] font-mono uppercase tracking-wider border-b border-sand-200 pb-2">
                  {isRtl ? 'شروط ومعايير التأهيل الإلزامية' : 'Mandatory Eligibility & Qualification Criteria'}
                </h2>
                <ul className="space-y-2.5">
                  {(isRtl ? tender.eligibility.ar : tender.eligibility.en).map((req, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 font-sans">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{req}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Submission Instructions & Secretariat Location */}
            <div className="p-4 sm:p-5 rounded-xl bg-sand-50 border border-sand-300 space-y-3">
              <div className="flex items-center gap-2 text-xs font-bold text-[#032A1E] font-mono uppercase">
                <MapPin className="w-4 h-4 text-[#B99553]" />
                <span>{isRtl ? 'مقر تقديم العطاءات وسكرتارية اللجنة' : 'Submission Location & Secretariat'}</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-700 font-sans leading-relaxed">
                {t(tender.submissionLocation || {
                  ar: 'تُسلّم العطاءات في مظاريف مغلقة بالشمع الأحمر ومختومة باسم السيد/ رئيس لجنة الشراء والتعاقد — بنك السودان المركزي، المقر المؤقت — بورتسودان.',
                  en: 'Bids must be delivered in wax-sealed envelopes addressed to the Chairman of the Procurement & Contracting Committee — Central Bank of Sudan, Interim HQ — Port Sudan.'
                })}
              </p>
              <div className="text-[11px] font-mono text-rose-700 font-bold">
                {isRtl ? `* تغلق الصناديق بدقة في تمام الساعة 12:00 ظهراً بتاريخ ${tender.closingDate}` : `* Submissions close promptly at 12:00 CAT on ${tender.closingDate}`}
              </div>
            </div>

            {/* Evaluation Demo Disclaimer */}
            <div className="pt-6 border-t border-sand-200 text-center text-xs font-mono text-[#8C9B94]">
              <p>
                {isRtl
                  ? '* إعلان استرشادي لبيئة الاستعراض الرقمي — الموقع الرسمي: cbos.gov.sd'
                  : '* Procurement reference notice for digital evaluation preview — Official Portal: cbos.gov.sd'}
              </p>
            </div>

          </article>

          {/* Sidebar: Summary & Related Tenders (Cols 9-12) */}
          <aside className="lg:col-span-4 space-y-6 print:hidden">
            
            {/* Quick Factsheet */}
            <div className="bg-white rounded-xl border border-sand-300 p-6 shadow-sm space-y-4">
              <div className="flex items-center gap-2 text-xs font-bold text-cbos-ink font-mono uppercase border-b border-sand-200 pb-2">
                <FileText className="w-4 h-4 text-[#B99553]" />
                <span>{isRtl ? 'بطاقة العطاء السريعة' : 'Tender Factsheet'}</span>
              </div>

              <dl className="space-y-3 text-xs font-mono">
                <div>
                  <dt className="text-slate-500">{isRtl ? 'رقم العطاء:' : 'Reference:'}</dt>
                  <dd className="font-bold text-[#075A3A] pt-0.5">{tender.refNumber}</dd>
                </div>
                <div>
                  <dt className="text-slate-500">{isRtl ? 'القطاع:' : 'Category:'}</dt>
                  <dd className="font-bold text-cbos-ink pt-0.5">{t(tender.category)}</dd>
                </div>
                <div>
                  <dt className="text-slate-500">{isRtl ? 'تاريخ النشر:' : 'Published:'}</dt>
                  <dd className="font-bold text-cbos-ink pt-0.5">{tender.publishDate}</dd>
                </div>
                <div>
                  <dt className="text-slate-500">{isRtl ? 'الموعد النهائي:' : 'Closing Date:'}</dt>
                  <dd className="font-bold text-rose-600 pt-0.5">{tender.closingDate}</dd>
                </div>
                <div>
                  <dt className="text-slate-500">{isRtl ? 'جهة الطلب:' : 'Target Directorate:'}</dt>
                  <dd className="font-sans text-slate-700 pt-0.5">{t(tender.targetDepartment)}</dd>
                </div>
              </dl>

              <button
                onClick={handleDownloadDossier}
                className="w-full mt-2 py-2.5 px-3 rounded-lg bg-[#075A3A] hover:bg-[#032A1E] text-white transition-all text-xs font-mono font-bold flex items-center justify-center gap-2 shadow-sm"
              >
                <Download className="w-4 h-4 text-[#B99553]" />
                <span>{downloadStarted ? (isRtl ? 'جار التحميل...' : 'Downloading...') : (isRtl ? 'سحب كراسة الشروط' : 'Acquire RFP Booklet')}</span>
              </button>
            </div>

            {/* Related Tenders */}
            <div className="bg-white rounded-xl border border-sand-300 p-6 shadow-sm space-y-4">
              <div className="flex items-center gap-2 text-xs font-bold text-cbos-ink font-mono uppercase border-b border-sand-200 pb-2">
                <FileText className="w-4 h-4 text-[#075A3A]" />
                <span>{isRtl ? 'عطاءات ومناقصات أخرى' : 'Other Active Tenders'}</span>
              </div>

              <div className="space-y-3">
                {related.map((rel) => (
                  <Link
                    key={rel.id}
                    href={`/tenders/${rel.id}`}
                    className="block p-3 rounded-lg border border-sand-200 hover:border-cbos-gold hover:bg-sand-50/50 transition-all space-y-1 group"
                  >
                    <div className="text-[11px] font-mono text-[#075A3A] font-bold">
                      {rel.refNumber}
                    </div>
                    <div className="text-xs font-bold text-cbos-ink group-hover:text-cbos-green-800 transition-colors font-arabic line-clamp-2">
                      {isRtl ? rel.title.ar : rel.title.en}
                    </div>
                    <div className="text-[10px] text-slate-500 font-mono">
                      {isRtl ? `الإغلاق: ${rel.closingDate}` : `Closing: ${rel.closingDate}`}
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
