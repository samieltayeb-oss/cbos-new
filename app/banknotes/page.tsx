'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { useLanguage } from '@/lib/languageContext';
import { officialBanknotesData } from '@/data/banknotes';
import { SecurityFeature } from '@/types/banknote';
import { 
  Banknote, 
  ShieldCheck, 
  Eye, 
  Hand, 
  Sparkles, 
  RotateCw, 
  Info,
  CheckCircle2,
  AlertTriangle
} from 'lucide-react';

export default function BanknotesPage() {
  const { t } = useLanguage();
  const [selectedDenomId, setSelectedDenomId] = useState<string>(officialBanknotesData[0].id);
  const [activeFeature, setActiveFeature] = useState<SecurityFeature | null>(
    officialBanknotesData[0].securityFeatures[0] || null
  );

  const currentDenom = officialBanknotesData.find(d => d.id === selectedDenomId) || officialBanknotesData[0];

  const handleSelectDenom = (denomId: string) => {
    setSelectedDenomId(denomId);
    const d = officialBanknotesData.find(item => item.id === denomId);
    if (d && d.securityFeatures.length > 0) {
      setActiveFeature(d.securityFeatures[0]);
    } else {
      setActiveFeature(null);
    }
  };

  return (
    <div className="bg-sand-50 min-h-screen">
      {/* Header Banner */}
      <section 
        className="bg-[#0B1A2D] text-white relative overflow-hidden py-16 lg:py-20 border-b border-[#22446D]"
      >
        <div className="absolute inset-0 bg-guilloche opacity-15 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex items-center gap-3 text-cbos-gold text-xs font-mono uppercase tracking-wider mb-4">
            <Banknote className="w-4 h-4" />
            <span>{t({ ar: 'النقد والمسكوكات السودانية', en: 'Currency & Coinage' })}</span>
            <span>/</span>
            <span>{t({ ar: 'مواصفات الأمان ومكافحة التزييف', en: 'Security Features & Counterfeit Protection' })}</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white max-w-4xl leading-[1.2] mb-4 tracking-normal">
            {t({
              ar: 'المواصفات الأمنية لأوراق النقد السودانية المتداولة',
              en: 'Security Specifications of Sudanese Banknotes in Circulation'
            })}
          </h1>

          <p className="text-[#E2DDD3] text-sm sm:text-base max-w-3xl leading-[1.8] font-normal">
            {t({
              ar: 'يصدر بنك السودان المركزي أوراق النقد الوطنية بأحدث تقنيات التأمين العالمية بما في ذلك العلامات المائية ثلاثية الأبعاد، خيوط الأمان البصرية، والطباعة الغائرة اللمسية لحماية السيادة المالية للبلاد.',
              en: 'The Central Bank of Sudan issues national banknotes engineered with cutting-edge anti-counterfeiting features, including 3D electrotype watermarks, optically variable threads, and tactile intaglio relief.'
            })}
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {/* Denomination Selector Tabs */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
          <div className="flex flex-wrap gap-2">
            {officialBanknotesData.map((d) => (
              <button
                key={d.id}
                onClick={() => handleSelectDenom(d.id)}
                className={`px-5 py-2.5 rounded-xl font-mono font-bold text-sm transition-all ${
                  selectedDenomId === d.id
                    ? 'bg-cbos-green-900 text-white shadow-md border-2 border-cbos-gold'
                    : 'bg-white text-ink-base border border-sand-300 hover:border-cbos-green-700 hover:bg-sand-50'
                }`}
              >
                {d.value.toLocaleString()} {d.currency}
              </button>
            ))}
          </div>

          <div className="text-xs font-mono text-ink-muted">
            {t({ ar: 'سلسلة الإصدار المعتمدة:', en: 'Legal Tender Series:' })} {currentDenom.seriesYear}
          </div>
        </div>

        {/* Interactive Banknote Canvas & Feature Inspector */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">
          
          {/* Banknote Viewer */}
          <div className="lg:col-span-8 bg-white border border-sand-300 rounded-xl p-6 sm:p-8 shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-sand-200 mb-6">
                <div>
                  <h2 className="font-bold text-2xl text-cbos-green-950">
                    {t(currentDenom.title)}
                  </h2>
                  <p className="text-xs text-cbos-ink-muted mt-0.5">
                    {t({ ar: 'انقر على الدوائر التفاعلية لفحص عناصر التأمين', en: 'Click the hotspot pins to examine security details' })}
                  </p>
                </div>
                <span className="font-mono text-xs px-3 py-1 rounded bg-sand-100 text-cbos-ink-muted font-bold">
                  {currentDenom.dimensions}
                </span>
              </div>

              {/* Note Frame with Hotspots */}
              <div className="relative w-full aspect-[16/8] sm:aspect-[16/7.5] rounded-xl overflow-hidden border-2 border-sand-300 shadow-inner bg-slate-900">
                <Image
                  src={currentDenom.frontImage}
                  alt={t(currentDenom.title)}
                  fill
                  className="object-contain"
                  priority
                />

                {/* Hotspot Pins */}
                {currentDenom.securityFeatures.map((feat) => {
                  const isSelected = activeFeature?.id === feat.id;
                  return (
                    <button
                      key={feat.id}
                      onClick={() => setActiveFeature(feat)}
                      style={{ top: `${feat.y_percent}%`, left: `${feat.x_percent}%` }}
                      className={`absolute -translate-x-1/2 -translate-y-1/2 z-20 w-8 h-8 rounded-full flex items-center justify-center transition-all ${
                        isSelected
                          ? 'bg-cbos-gold text-cbos-ink scale-125 ring-4 ring-white shadow-lg'
                          : 'bg-cbos-green-900/90 text-white hover:bg-cbos-gold hover:text-cbos-ink ring-2 ring-white/80'
                      }`}
                      title={t(feat.name)}
                    >
                      <span className="w-2.5 h-2.5 rounded-full bg-current" />
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Note Themes */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6 pt-6 border-t border-sand-200 text-xs">
              <div>
                <span className="font-mono text-cbos-ink-muted uppercase block mb-1">
                  {t({ ar: 'موضوع الوجه الأمامي', en: 'Obverse Theme' })}
                </span>
                <p className="text-cbos-ink font-medium leading-[1.7]">
                  {t(currentDenom.frontTheme)}
                </p>
              </div>
              <div>
                <span className="font-mono text-cbos-ink-muted uppercase block mb-1">
                  {t({ ar: 'موضوع الوجه الخلفي', en: 'Reverse Theme' })}
                </span>
                <p className="text-cbos-ink font-medium leading-[1.7]">
                  {t(currentDenom.backTheme)}
                </p>
              </div>
            </div>
          </div>

          {/* Feature Inspector Panel */}
          <div 
            className="lg:col-span-4 bg-[#0B1A2D] text-white rounded-xl p-6 sm:p-8 border border-[#22446D] flex flex-col justify-between shadow-lg"
          >
            <div>
              <div className="flex items-center gap-2 text-cbos-gold text-xs font-mono uppercase tracking-wider mb-4 border-b border-[#22446D] pb-3">
                <ShieldCheck className="w-4 h-4" />
                <span>{t({ ar: 'فاحص العلامات الأمنية', en: 'Security Feature Inspector' })}</span>
              </div>

              {activeFeature ? (
                <div className="space-y-4">
                  <span className="inline-block px-2.5 py-1 rounded text-xs font-mono font-bold bg-cbos-gold text-cbos-ink">
                    {activeFeature.type.toUpperCase()}
                  </span>

                  <h3 className="font-bold text-xl text-white">
                    {t(activeFeature.name)}
                  </h3>

                  <p className="text-[#E2DDD3] text-sm leading-[1.7] font-normal">
                    {t(activeFeature.description)}
                  </p>

                  {/* Verification Guide Box */}
                  <div className="bg-[#11253E] rounded-xl p-4 border border-[#22446D] mt-4 space-y-2">
                    <div className="text-xs font-mono text-cbos-gold font-bold uppercase">
                      {t({ ar: 'طريقة التحقق السريع', en: 'Authentication Method' })}
                    </div>
                    <div className="flex items-center gap-3 text-xs text-sand-200">
                      {activeFeature.type === 'watermark' && (
                        <>
                          <Eye className="w-5 h-5 text-cbos-gold shrink-0" />
                          <span>{t({ ar: 'انظر عبر الضوء النافذ لرؤية العلامة المائية متعددة الدرجات.', en: 'Hold against light to inspect the multi-tone watermark.' })}</span>
                        </>
                      )}
                      {activeFeature.type === 'thread' && (
                        <>
                          <Sparkles className="w-5 h-5 text-cbos-gold shrink-0" />
                          <span>{t({ ar: 'أمِل الورقة لملاحظة التغير اللوني والحركة الضوئية.', en: 'Tilt the note to observe dynamic color shift and motion.' })}</span>
                        </>
                      )}
                      {activeFeature.type === 'intaglio' && (
                        <>
                          <Hand className="w-5 h-5 text-cbos-gold shrink-0" />
                          <span>{t({ ar: 'المس بأصابعك لتحس بالبروز الخشن للطباعة الغائرة.', en: 'Feel with your fingertips to verify raised intaglio roughness.' })}</span>
                        </>
                      )}
                      {activeFeature.type === 'see-through' && (
                        <>
                          <Eye className="w-5 h-5 text-cbos-gold shrink-0" />
                          <span>{t({ ar: 'انظر أمام الضوء لترى اكتمال الرمز الهندسي بين الوجهين بدقة.', en: 'Hold up to light to see the perfect alignment from both sides.' })}</span>
                        </>
                      )}
                    </div>
                  </div>
                </div>
              ) : (
                <div className="text-center py-12 text-[#E2DDD3]/70 text-sm">
                  {t({ ar: 'اختر علامة أمنية من الورقة لفحصها', en: 'Select a security feature from the note to view details' })}
                </div>
              )}
            </div>

            <div className="pt-6 border-t border-[#22446D] text-xs text-sand-400 font-mono">
              CURRENCY ISSUANCE & RECOVERY DIRECTIVE
            </div>
          </div>

        </div>

        {/* Sovereign "Look, Tilt, Feel" 3-Step Verification Rule */}
        <div className="bg-white border border-sand-300 rounded-xl p-8 shadow-sm mb-12">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <span className="text-xs font-mono uppercase tracking-wider text-cbos-gold font-bold">
              {t({ ar: 'الدليل الإرشادي للمواطنين والمصارف', en: 'PUBLIC VERIFICATION PROTOCOL' })}
            </span>
            <h2 className="text-2xl font-bold text-cbos-ink mt-1">
              {t({ ar: 'القاعدة الثلاثية للتحقق من أصالة العملة (المس، انظر، أمِل)', en: 'The Sovereign Tri-Fold Test: Feel, Look, Tilt' })}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-xl bg-sand-50 border border-sand-200 text-center flex flex-col items-center">
              <div className="w-14 h-14 rounded-full bg-cbos-green-100 text-cbos-green-900 flex items-center justify-center mb-4">
                <Hand className="w-7 h-7 text-cbos-green-800" />
              </div>
              <h3 className="font-bold text-lg text-cbos-ink mb-2">
                1. {t({ ar: 'المس الورقة (Feel)', en: 'Feel the Note' })}
              </h3>
              <p className="text-[13.5px] text-cbos-ink-muted leading-[1.7]">
                {t({
                  ar: 'ورق النقد السوداني مصنوع من القطن الخالص ذو ملمس متماسك ومميز، مع بروز واضح للطباعة الغائرة على اسم البنك والأرقام.',
                  en: 'Sudanese banknotes are printed on pure cotton paper with a crisp feel, featuring raised intaglio ink texture on titles and numbers.'
                })}
              </p>
            </div>

            <div className="p-6 rounded-xl bg-sand-50 border border-sand-200 text-center flex flex-col items-center">
              <div className="w-14 h-14 rounded-full bg-cbos-green-100 text-cbos-green-900 flex items-center justify-center mb-4">
                <Eye className="w-7 h-7 text-cbos-green-800" />
              </div>
              <h3 className="font-bold text-lg text-cbos-ink mb-2">
                2. {t({ ar: 'انظر عبر الضوء (Look)', en: 'Look Against Light' })}
              </h3>
              <p className="text-[13.5px] text-cbos-ink-muted leading-[1.7]">
                {t({
                  ar: 'وجه الورقة لمصدر ضوء لرؤية العلامة المائية لصقر الجديان، وشريط الأمان المتصل، وعلامة التطابق الطباعي المكتملة.',
                  en: 'Hold the banknote up to light to reveal the Secretary Bird watermark, embedded security thread, and see-through register pattern.'
                })}
              </p>
            </div>

            <div className="p-6 rounded-xl bg-sand-50 border border-sand-200 text-center flex flex-col items-center">
              <div className="w-14 h-14 rounded-full bg-cbos-green-100 text-cbos-green-900 flex items-center justify-center mb-4">
                <Sparkles className="w-7 h-7 text-cbos-green-800" />
              </div>
              <h3 className="font-bold text-lg text-cbos-ink mb-2">
                3. {t({ ar: 'أمِل الورقة (Tilt)', en: 'Tilt the Note' })}
              </h3>
              <p className="text-[13.5px] text-cbos-ink-muted leading-[1.7]">
                {t({
                  ar: 'قم بإمالة الورقة بزوايا مختلفة لملاحظة التغير اللوني لشريط الأمان والأحبار المغناطيسية البصرية المتغيرة (SPARK).',
                  en: 'Tilt the note at varying angles to observe dynamic optical color-shifts on the security thread and iridescent SPARK features.'
                })}
              </p>
            </div>
          </div>
        </div>

        {/* Clean Currency & Damaged Note Exchange Policies */}
        <div className="bg-sand-100 border border-sand-300 rounded-xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <AlertTriangle className="w-8 h-8 text-amber-700 shrink-0" />
            <div>
              <h3 className="font-bold text-base text-cbos-ink">
                {t({ ar: 'سياسة النقد النظيف واستبدال العملات التالفة', en: 'Clean Currency Policy & Damaged Note Exchange' })}
              </h3>
              <p className="text-[13.5px] text-cbos-ink-muted mt-1 leading-[1.7] max-w-2xl">
                {t({
                  ar: 'تستبدل كافة فروع بنك السودان المركزي والمصارف التجارية المعتمدة الأوراق النقدية التالفة أو الممزقة مجاناً للمواطنين وفقاً للضوابط المنظمة المعتمدة.',
                  en: 'All CBOS branches and licensed commercial banks accept and exchange mutilated or soiled banknotes free of charge according to central regulatory directives.'
                })}
              </p>
            </div>
          </div>

          <a 
            href="/documents"
            className="px-4 py-2 rounded-lg bg-cbos-green-900 text-white text-xs font-mono font-bold hover:bg-cbos-green-800 transition-colors shrink-0"
          >
            {t({ ar: 'عرض ضوابط الاستبدال', en: 'Exchange Regulations' })}
          </a>
        </div>

      </div>
    </div>
  );
}
