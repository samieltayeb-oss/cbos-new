'use client';

import React, { useState } from 'react';
import { useLanguage } from '@/lib/languageContext';
import { licensedInstitutionsData } from '@/data/institutions';
import { InstitutionType, FinancialInstitution } from '@/types/institution';
import { 
  Building2, 
  Search, 
  ShieldCheck, 
  Globe, 
  MapPin, 
  Calendar, 
  CreditCard, 
  ExternalLink,
  Award,
  Layers
} from 'lucide-react';

export default function FinancialSystemPage() {
  const { t } = useLanguage();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedType, setSelectedType] = useState<string>('all');

  const filteredInstitutions = licensedInstitutionsData.filter((inst) => {
    const matchesType = selectedType === 'all' || inst.type === selectedType;
    const q = searchQuery.toLowerCase();
    const matchesQuery = 
      t(inst.name).toLowerCase().includes(q) ||
      inst.licenseNumber.toLowerCase().includes(q) ||
      (inst.swiftBic && inst.swiftBic.toLowerCase().includes(q)) ||
      t(inst.headquarters).toLowerCase().includes(q);

    return matchesType && matchesQuery;
  });

  const filterTabs = [
    { id: 'all', label: { ar: 'كافة المؤسسات المرخصة', en: 'All Licensed Entities' } },
    { id: 'commercial_bank', label: { ar: 'المصارف التجارية', en: 'Commercial Banks' } },
    { id: 'specialized_bank', label: { ar: 'المصارف المتخصصة', en: 'Specialized Banks' } },
    { id: 'payment_switch', label: { ar: 'مشغلو نظم الدفع', en: 'Payment Switches' } },
    { id: 'exchange_bureau', label: { ar: 'شركات الصرافة', en: 'Exchange Bureaus' } },
    { id: 'microfinance', label: { ar: 'التمويل الأصغر', en: 'Microfinance' } }
  ];

  return (
    <div className="bg-sand-50 min-h-screen">
      {/* Header Banner */}
      <section className="bg-cbos-green-950 text-white relative overflow-hidden py-16 lg:py-20 border-b border-cbos-gold/30">
        <div className="absolute inset-0 bg-guilloche opacity-15 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex items-center gap-3 text-cbos-gold text-xs font-mono uppercase tracking-wider mb-4">
            <Building2 className="w-4 h-4" />
            <span>{t({ ar: 'الرقابة المصرفية والسلامة المالية', en: 'Banking Supervision & Soundness' })}</span>
            <span>/</span>
            <span>{t({ ar: 'دليل المؤسسات المالية المرخصة', en: 'Licensed Financial Institutions Directory' })}</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white max-w-4xl leading-tight mb-4">
            {t({
              ar: 'سجل المؤسسات المالية والمصارف المرخصة رسمياً',
              en: 'Official Register of Licensed Financial Institutions & Banks'
            })}
          </h1>

          <p className="text-sand-300 text-sm sm:text-base max-w-3xl leading-relaxed">
            {t({
              ar: 'السجل السيادي المعتمد لكافة المصارف التجارية، البنوك المتخصصة، شركات الصرافة، ومشغلي شبكات الدفع الإلكتروني الخاضعة للإشراف المباشر والرقابة الاحترازية لبنك السودان المركزي.',
              en: 'The sovereign directory of all commercial banks, specialized development banks, exchange bureaus, and payment switches operating under CBOS regulatory supervision and prudential standards.'
            })}
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {/* Search & Filter Bar */}
        <div className="bg-white border border-sand-300 rounded-xl p-6 shadow-sm mb-8 space-y-4">
          <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
            
            {/* Search Input */}
            <div className="relative flex-1">
              <Search className="w-5 h-5 absolute start-4 top-3 text-ink-muted" />
              <input
                type="text"
                placeholder={t({
                  ar: 'ابحث باسم المصرف، رقم الترخيص، رمز السويفت (SWIFT)، أو المدينة...',
                  en: 'Search by institution name, license, SWIFT BIC, or location...'
                })}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full ps-12 pe-4 py-2.5 bg-sand-50 border border-sand-300 rounded-lg text-sm focus:outline-none focus:border-cbos-green-800 text-ink-base"
              />
            </div>

            <div className="text-xs font-mono text-ink-muted shrink-0 text-end">
              <span>{t({ ar: 'المؤسسات المطابقة:', en: 'Matching Entities:' })} </span>
              <span className="font-bold text-cbos-green-950 text-sm">{filteredInstitutions.length}</span>
            </div>
          </div>

          {/* Filter Categories */}
          <div className="flex flex-wrap gap-2 pt-2 border-t border-sand-200">
            {filterTabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setSelectedType(tab.id)}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                  selectedType === tab.id
                    ? 'bg-cbos-green-900 text-white shadow-sm'
                    : 'bg-sand-100 text-ink-muted hover:text-ink-base hover:bg-sand-200'
                }`}
              >
                {t(tab.label)}
              </button>
            ))}
          </div>
        </div>

        {/* Institutions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {filteredInstitutions.map((inst) => (
            <div
              key={inst.id}
              className="bg-white border border-sand-300 rounded-xl p-6 shadow-sm hover:border-cbos-green-700 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[11px] font-mono font-bold px-2.5 py-1 rounded bg-sand-100 text-ink-base">
                    {inst.licenseNumber}
                  </span>
                  <span className="inline-flex items-center gap-1 text-[11px] font-mono text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full font-bold">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-600" />
                    {t({ ar: 'مرخص نشط', en: 'ACTIVE' })}
                  </span>
                </div>

                <h3 className="font-serif font-bold text-xl text-cbos-green-950 mb-1">
                  {t(inst.name)}
                </h3>
                <p className="text-xs font-medium text-cbos-gold mb-4 pb-3 border-b border-sand-200">
                  {t(inst.typeLabel)}
                </p>

                <dl className="space-y-2 text-xs text-ink-muted">
                  <div className="flex items-center justify-between">
                    <dt className="flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-cbos-green-800" />
                      <span>{t({ ar: 'المقر الرئيسي:', en: 'Headquarters:' })}</span>
                    </dt>
                    <dd className="font-medium text-ink-base">{t(inst.headquarters)}</dd>
                  </div>

                  <div className="flex items-center justify-between">
                    <dt className="flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-cbos-green-800" />
                      <span>{t({ ar: 'سنة التأسيس:', en: 'Established:' })}</span>
                    </dt>
                    <dd className="font-mono text-ink-base font-bold">{inst.establishedYear}</dd>
                  </div>

                  {inst.swiftBic && (
                    <div className="flex items-center justify-between">
                      <dt className="flex items-center gap-1.5">
                        <CreditCard className="w-3.5 h-3.5 text-cbos-green-800" />
                        <span>SWIFT / BIC:</span>
                      </dt>
                      <dd className="font-mono font-bold text-cbos-green-900 bg-cbos-green-50 px-1.5 py-0.5 rounded">
                        {inst.swiftBic}
                      </dd>
                    </div>
                  )}

                  {inst.branchesCount && (
                    <div className="flex items-center justify-between">
                      <dt className="flex items-center gap-1.5">
                        <Building2 className="w-3.5 h-3.5 text-cbos-green-800" />
                        <span>{t({ ar: 'عدد الفروع:', en: 'Branches:' })}</span>
                      </dt>
                      <dd className="font-mono text-ink-base">{inst.branchesCount} {t({ ar: 'فرعاً', en: 'branches' })}</dd>
                    </div>
                  )}
                </dl>
              </div>

              <div className="mt-6 pt-3 border-t border-sand-100 flex items-center justify-between text-xs">
                {inst.website ? (
                  <a
                    href={inst.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-cbos-green-800 hover:text-cbos-gold font-medium transition-colors"
                  >
                    <span>{t({ ar: 'الموقع الإلكتروني', en: 'Visit Portal' })}</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                ) : (
                  <span className="text-ink-muted">{t({ ar: 'معتمد رسمياً', en: 'Officially Regulated' })}</span>
                )}
                <span className="font-mono text-[10px] text-ink-muted">CBOS REGULATED</span>
              </div>
            </div>
          ))}
        </div>

        {/* Prudential Standards Strip */}
        <div className="bg-cbos-green-950 text-white rounded-2xl p-8 sm:p-10 border border-cbos-gold/40 relative overflow-hidden">
          <div className="absolute inset-0 bg-guilloche opacity-10 pointer-events-none" />
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-8 space-y-4">
              <div className="flex items-center gap-2 text-cbos-gold text-xs font-mono uppercase tracking-wider">
                <ShieldCheck className="w-4 h-4" />
                <span>{t({ ar: 'معايير الملاءة والرقابة الاحترازية', en: 'Prudential Supervision & Capital Norms' })}</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-white">
                {t({
                  ar: 'المعايير الرقابية ومحددات بازل والهيئة الإسلامية للخدمات المالية (IFSB)',
                  en: 'Supervisory Norms Aligned with Basel & IFSB Standards'
                })}
              </h2>
              <p className="text-sand-300 text-sm leading-relaxed">
                {t({
                  ar: 'يلتزم الجهاز المصرفي السوداني بنسبة كفاية رأس مال لا تقل عن 12%، وضوابط إدارة السيولة الصارمة، والتطبيق الكامل لمعايير المحاسبة للمؤسسات المالية الإسلامية (AAOIFI).',
                  en: 'All regulated banks maintain a minimum Capital Adequacy Ratio (CAR) of 12%, robust liquidity buffers, and full adherence to AAOIFI Islamic accounting standards.'
                })}
              </p>
            </div>

            <div className="lg:col-span-4 bg-cbos-green-900/80 border border-cbos-gold/30 rounded-xl p-6 text-center space-y-2">
              <div className="text-3xl font-mono font-bold text-cbos-gold">12.0%</div>
              <div className="font-serif font-bold text-white text-sm">
                {t({ ar: 'الحد الأدنى لكفاية رأس المال (CAR)', en: 'Minimum Capital Adequacy Ratio' })}
              </div>
              <div className="text-xs text-sand-300 font-mono">
                RISK-WEIGHTED ASSETS BENCHMARK
              </div>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}
