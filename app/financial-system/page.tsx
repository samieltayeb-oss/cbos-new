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
  Layers,
  X,
  CheckCircle2
} from 'lucide-react';
import DigitalBankingMapHero from '@/components/financial-system/DigitalBankingMapHero';

export default function FinancialSystemPage() {
  const { t, isRtl } = useLanguage();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedType, setSelectedType] = useState<string>('all');
  const [activeCityFilter, setActiveCityFilter] = useState<{ ar: string; en: string } | null>(null);

  const normalize = (str: string) => {
    return str
      .toLowerCase()
      .replace(/[أإآ]/g, 'ا')
      .replace(/ة/g, 'ه')
      .replace(/ى/g, 'ي')
      .trim();
  };

  const filteredInstitutions = licensedInstitutionsData.filter((inst) => {
    const matchesType = selectedType === 'all' || inst.type === selectedType;
    if (!matchesType) return false;

    if (!searchQuery.trim()) return true;

    const q = normalize(searchQuery);

    const nameAr = normalize(inst.name.ar);
    const nameEn = normalize(inst.name.en);
    const hqAr = normalize(inst.headquarters.ar);
    const hqEn = normalize(inst.headquarters.en);
    const lic = normalize(inst.licenseNumber);
    const swift = inst.swiftBic ? normalize(inst.swiftBic) : '';

    const matchesDirect = 
      nameAr.includes(q) ||
      nameEn.includes(q) ||
      hqAr.includes(q) ||
      hqEn.includes(q) ||
      lic.includes(q) ||
      swift.includes(q);

    if (matchesDirect) return true;

    // Check regional presence in cities and states
    if (inst.regionalPresence && inst.regionalPresence.length > 0) {
      return inst.regionalPresence.some((city) =>
        normalize(city.ar).includes(q) || normalize(city.en).includes(q)
      );
    }

    return false;
  });

  const handleCitySelect = (city: { ar: string; en: string }) => {
    setActiveCityFilter(city);
    setSearchQuery(isRtl ? city.ar : city.en);
    setSelectedType('all');
    setTimeout(() => {
      const el = document.getElementById('directory-section');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 50);
  };

  const handleClearFilter = () => {
    setActiveCityFilter(null);
    setSearchQuery('');
  };

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
      {/* Interactive Digital Sudan Banking Topology Map Hero */}
      <DigitalBankingMapHero onSelectCity={handleCitySelect} />

      <div id="directory-section" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 scroll-mt-6">
        
        {/* Search & Filter Bar */}
        <div className="bg-white border border-sand-300 rounded-xl p-6 shadow-sm mb-8 space-y-4">
          <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
            
            {/* Search Input */}
            <div className="relative flex-1">
              <Search className="w-5 h-5 absolute start-4 top-3 text-ink-muted" />
              <input
                type="text"
                placeholder={t({
                  ar: 'ابحث باسم المصرف، المدينة، الولاية، رقم الترخيص، أو السويفت (SWIFT)...',
                  en: 'Search by institution name, city, state, license, or SWIFT BIC...'
                })}
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  if (!e.target.value) setActiveCityFilter(null);
                }}
                className="w-full ps-12 pe-10 py-2.5 bg-sand-50 border border-sand-300 rounded-lg text-sm focus:outline-none focus:border-[#22446D] text-ink-base"
              />
              {searchQuery && (
                <button
                  onClick={handleClearFilter}
                  className="absolute end-3 top-3 text-cbos-ink-muted hover:text-cbos-ink"
                  title="Clear search"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>

            <div className="text-xs font-mono text-ink-muted shrink-0 text-end">
              <span>{t({ ar: 'المؤسسات المطابقة:', en: 'Matching Entities:' })} </span>
              <span className="font-bold text-cbos-green-950 text-sm">{filteredInstitutions.length}</span>
            </div>
          </div>

          {/* Active City Filter Badge if selected */}
          {activeCityFilter && (
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#2F88C2]/10 border border-[#2F88C2]/30 text-xs text-[#2F88C2] font-arabic">
              <span className="font-bold">
                {isRtl ? `عقدة الشبكة المصرفية: ${activeCityFilter.ar}` : `Active Banking Node: ${activeCityFilter.en}`}
              </span>
              <span className="text-cbos-ink-muted">({filteredInstitutions.length} {isRtl ? 'مؤسسات متصلة' : 'entities online'})</span>
              <button
                onClick={handleClearFilter}
                className="ms-auto flex items-center gap-1 text-cbos-ink hover:text-red-600 transition-colors font-bold cursor-pointer"
                title="Clear filter"
              >
                <X className="w-3.5 h-3.5" />
                <span>{isRtl ? 'إلغاء التصفية' : 'Clear'}</span>
              </button>
            </div>
          )}

          {/* Filter Categories */}
          <div className="flex flex-wrap gap-2 pt-2 border-t border-sand-200">
            {filterTabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setSelectedType(tab.id)}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                  selectedType === tab.id
                    ? 'bg-cbos-green-900 text-white shadow-sm'
                    : 'bg-sand-100 text-cbos-ink-muted hover:text-cbos-ink hover:bg-sand-200'
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
                  <span className="text-[11px] font-mono font-bold px-2.5 py-1 rounded bg-sand-100 text-cbos-ink">
                    {inst.licenseNumber}
                  </span>
                  <span className="inline-flex items-center gap-1 text-[11px] font-mono text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full font-bold">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-600" />
                    {t({ ar: 'مرخص نشط', en: 'ACTIVE' })}
                  </span>
                </div>

                <h3 className="font-bold text-xl text-cbos-green-950 mb-1 leading-snug">
                  {t(inst.name)}
                </h3>
                <p className="text-xs font-semibold text-cbos-gold mb-4 pb-3 border-b border-sand-200">
                  {t(inst.typeLabel)}
                </p>

                <dl className="space-y-2 text-xs text-cbos-ink-muted">
                  <div className="flex items-center justify-between">
                    <dt className="flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-cbos-green-800" />
                      <span>{t({ ar: 'المقر الرئيسي:', en: 'Headquarters:' })}</span>
                    </dt>
                    <dd className="font-medium text-cbos-ink">{t(inst.headquarters)}</dd>
                  </div>

                  <div className="flex items-center justify-between">
                    <dt className="flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-cbos-green-800" />
                      <span>{t({ ar: 'سنة التأسيس:', en: 'Established:' })}</span>
                    </dt>
                    <dd className="font-mono text-cbos-ink font-bold">{inst.establishedYear}</dd>
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
                      <dd className="font-mono text-cbos-ink">{inst.branchesCount} {t({ ar: 'فرعاً', en: 'branches' })}</dd>
                    </div>
                  )}
                </dl>

                {inst.regionalPresence && inst.regionalPresence.length > 0 && (
                  <div className="mt-3 pt-2.5 border-t border-sand-100 flex flex-wrap items-center gap-1 text-[11px] text-cbos-ink-muted">
                    <span className="font-semibold text-cbos-ink">{isRtl ? 'التغطية الولائية:' : 'Regional Hubs:'}</span>
                    <span className="text-[#2F88C2] font-medium">
                      {inst.regionalPresence.slice(0, 5).map(p => isRtl ? p.ar : p.en).join(' • ')}
                      {inst.regionalPresence.length > 5 ? ` +${inst.regionalPresence.length - 5}` : ''}
                    </span>
                  </div>
                )}
              </div>

              <div className="mt-6 pt-3 border-t border-sand-100 flex items-center justify-between text-xs">
                {inst.website ? (
                  <a
                    href={inst.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-cbos-green-800 hover:text-cbos-gold font-semibold transition-colors"
                  >
                    <span>{t({ ar: 'الموقع الإلكتروني', en: 'Visit Portal' })}</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                ) : (
                  <span className="text-cbos-ink-muted">{t({ ar: 'معتمد رسمياً', en: 'Officially Regulated' })}</span>
                )}
                <span className="font-mono text-[10px] text-cbos-ink-muted">CBOS REGULATED</span>
              </div>
            </div>
          ))}
        </div>

        {/* Prudential Standards Strip */}
        <div 
          className="bg-[#0B1A2D] text-white rounded-xl p-8 sm:p-10 border border-[#22446D] relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-guilloche opacity-10 pointer-events-none" />
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-8 space-y-4">
              <div className="flex items-center gap-2 text-cbos-gold text-xs font-mono uppercase tracking-wider">
                <ShieldCheck className="w-4 h-4" />
                <span>{t({ ar: 'معايير الملاءة والرقابة الاحترازية', en: 'Prudential Supervision & Capital Norms' })}</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-normal">
                {t({
                  ar: 'المعايير الرقابية ومحددات بازل والهيئة الإسلامية للخدمات المالية (IFSB)',
                  en: 'Supervisory Norms Aligned with Basel & IFSB Standards'
                })}
              </h2>
              <p className="text-[#E2DDD3] text-sm leading-[1.8] font-normal">
                {t({
                  ar: 'يلتزم الجهاز المصرفي السوداني بنسبة كفاية رأس مال لا تقل عن 12%، وضوابط إدارة السيولة الصارمة، والتطبيق الكامل لمعايير المحاسبة للمؤسسات المالية الإسلامية (AAOIFI).',
                  en: 'All regulated banks maintain a minimum Capital Adequacy Ratio (CAR) of 12%, robust liquidity buffers, and full adherence to AAOIFI Islamic accounting standards.'
                })}
              </p>
            </div>

            <div className="lg:col-span-4 bg-[#11253E] border border-[#22446D] rounded-xl p-6 text-center space-y-2">
              <div className="text-3xl font-mono font-bold text-cbos-gold">12.0%</div>
              <div className="font-bold text-white text-sm">
                {t({ ar: 'الحد الأدنى لكفاية رأس المال (CAR)', en: 'Minimum Capital Adequacy Ratio' })}
              </div>
              <div className="text-xs text-[#E2DDD3]/70 font-mono">
                RISK-WEIGHTED ASSETS BENCHMARK
              </div>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}
