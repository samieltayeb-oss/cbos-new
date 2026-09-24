'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { useLanguage } from '@/lib/languageContext';
import { leadershipData, LeaderProfile } from '@/data/leadership';
import { 
  Users, 
  Award, 
  Scale, 
  ShieldCheck, 
  Landmark, 
  FileCheck2,
  Building,
  ChevronRight
} from 'lucide-react';

export default function LeadershipPage() {
  const { t } = useLanguage();
  const [activeTab, setActiveTab] = useState<'all' | 'governor' | 'deputy' | 'board_member' | 'sharia_board'>('all');

  const governor = leadershipData.find(l => l.category === 'governor');
  const filteredProfiles = activeTab === 'all' 
    ? leadershipData.filter(l => l.category !== 'governor') 
    : leadershipData.filter(l => l.category === activeTab);

  return (
    <div className="bg-sand-50 min-h-screen">
      {/* Header Banner */}
      <section className="bg-cbos-green-950 text-white relative overflow-hidden py-16 lg:py-24 border-b border-cbos-gold/30">
        <div className="absolute inset-0 bg-guilloche opacity-15 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex items-center gap-3 text-cbos-gold text-xs font-mono uppercase tracking-wider mb-4">
            <Users className="w-4 h-4" />
            <span>{t({ ar: 'عن البنك المركزي', en: 'About Central Bank' })}</span>
            <span>/</span>
            <span>{t({ ar: 'القيادة والحوكمة المؤسسية', en: 'Leadership & Corporate Governance' })}</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white max-w-4xl leading-tight mb-6">
            {t({
              ar: 'القيادة السيادية والحوكمة الرقابية لبنك السودان المركزي',
              en: 'Sovereign Leadership & Institutional Governance of CBOS'
            })}
          </h1>

          <p className="text-sand-200 text-base sm:text-lg max-w-3xl leading-relaxed">
            {t({
              ar: 'يتولى إدارة البنك المركزي مجلس إدارة يضم نخبة من الكفاءات المالية والاقتصادية، بإشراف الهيئة العليا للرقابة الشرعية للجهاز المصرفي لضمان الامتثال التام لأحكام الشريعة الإسلامية وأعلى معايير الحوكمة الدولية.',
              en: 'The Central Bank is governed by a Board of Directors comprising eminent financial and macroeconomic leaders, guided by the High Sharia Supervisory Board to ensure strict Islamic compliance and global governance standards.'
            })}
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        
        {/* Governor's Signature Card */}
        {governor && (
          <div className="bg-white border-2 border-cbos-gold/40 rounded-2xl p-6 sm:p-10 shadow-lg mb-16 relative overflow-hidden">
            <div className="absolute -top-12 -right-12 w-48 h-48 bg-cbos-gold/10 rounded-full blur-2xl pointer-events-none" />
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              {/* Portrait */}
              <div className="lg:col-span-4 flex flex-col items-center text-center">
                <div className="relative w-48 h-56 sm:w-56 sm:h-64 rounded-xl overflow-hidden shadow-md border-4 border-sand-200 bg-cbos-green-900">
                  <Image 
                    src={governor.image || '/images/cbos/official/governor-portrait.png'}
                    alt="Governor of CBOS"
                    fill
                    className="object-cover object-top"
                  />
                </div>
                <div className="mt-4">
                  <span className="inline-block px-3 py-1 rounded-full text-xs font-mono font-bold bg-cbos-green-100 text-cbos-green-900 mb-1">
                    {t({ ar: 'رئيس مجلس الإدارة والمحافظ', en: 'Governor & Board Chairman' })}
                  </span>
                </div>
              </div>

              {/* Bio & Vision */}
              <div className="lg:col-span-8 space-y-4">
                <div className="border-b border-sand-200 pb-4">
                  <span className="text-xs font-mono uppercase tracking-wider text-cbos-gold font-bold">
                    {t({ ar: 'البيان المؤسسي لمحافظ البنك', en: 'GOVERNOR\'S STATEMENT' })}
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-serif font-bold text-cbos-green-950 mt-1">
                    {t(governor.name)}
                  </h2>
                  <p className="text-cbos-green-800 font-medium text-sm mt-1">{t(governor.role)}</p>
                </div>

                <blockquote className="text-ink-base leading-relaxed text-base italic border-s-4 border-cbos-gold ps-4 my-4">
                  &ldquo;{t(governor.bio)}&rdquo;
                </blockquote>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-sand-200">
                  <div className="flex items-center gap-3">
                    <Scale className="w-5 h-5 text-cbos-green-800 shrink-0" />
                    <div>
                      <div className="text-xs font-bold text-ink-base">{t({ ar: 'استقرار الأسعار', en: 'Price Stability' })}</div>
                      <div className="text-xs text-ink-muted">{t({ ar: 'الهدف الأسمى', en: 'Statutory Core' })}</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <ShieldCheck className="w-5 h-5 text-cbos-green-800 shrink-0" />
                    <div>
                      <div className="text-xs font-bold text-ink-base">{t({ ar: 'الصلابة المصرفية', en: 'Systemic Resilience' })}</div>
                      <div className="text-xs text-ink-muted">{t({ ar: 'إشراف احترازي', en: 'Prudential Supervision' })}</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Landmark className="w-5 h-5 text-cbos-green-800 shrink-0" />
                    <div>
                      <div className="text-xs font-bold text-ink-base">{t({ ar: 'التحول الرقمي (NIPS)', en: 'Digital Rails (NIPS)' })}</div>
                      <div className="text-xs text-ink-muted">{t({ ar: 'بنية وطنية سيادية', en: 'Sovereign Infrastructure' })}</div>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        )}

        {/* Filter Navigation Tabs */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8 border-b border-sand-300 pb-4">
          <div className="flex flex-wrap gap-2">
            {[
              { id: 'all', label: { ar: 'كافة القيادات والمجالس', en: 'All Governance Bodies' } },
              { id: 'deputy', label: { ar: 'الإدارة التنفيذية ونواب المحافظ', en: 'Executive Deputies' } },
              { id: 'board_member', label: { ar: 'مجلس الإدارة', en: 'Board of Directors' } },
              { id: 'sharia_board', label: { ar: 'الهيئة العليا للرقابة الشرعية', en: 'High Sharia Board' } }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                  activeTab === tab.id
                    ? 'bg-cbos-green-900 text-white shadow-sm'
                    : 'bg-white text-ink-muted hover:text-ink-base border border-sand-300 hover:border-sand-400'
                }`}
              >
                {t(tab.label)}
              </button>
            ))}
          </div>

          <span className="text-xs font-mono text-ink-muted">
            {t({ ar: 'إجمالي الأعضاء', en: 'Total Governance Members' })}: {filteredProfiles.length + (activeTab === 'all' ? 1 : 0)}
          </span>
        </div>

        {/* Profiles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {filteredProfiles.map((member) => (
            <div 
              key={member.id} 
              className="bg-white border border-sand-300 rounded-xl p-6 shadow-sm hover:border-cbos-green-700 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className={`text-[11px] font-mono font-bold px-2.5 py-1 rounded-md ${
                    member.category === 'sharia_board' 
                      ? 'bg-amber-100 text-amber-900' 
                      : member.category === 'deputy'
                      ? 'bg-cbos-green-100 text-cbos-green-900'
                      : 'bg-blue-100 text-blue-900'
                  }`}>
                    {member.category === 'sharia_board' && t({ ar: 'هيئة الرقابة الشرعية', en: 'Sharia Supervisory' })}
                    {member.category === 'deputy' && t({ ar: 'إدارة تنفيذية سيادية', en: 'Executive Leadership' })}
                    {member.category === 'board_member' && t({ ar: 'مجلس الإدارة', en: 'Board of Directors' })}
                  </span>
                  
                  {member.category === 'sharia_board' ? (
                    <Award className="w-5 h-5 text-cbos-gold" />
                  ) : (
                    <Building className="w-5 h-5 text-cbos-green-800" />
                  )}
                </div>

                <h3 className="font-serif font-bold text-lg text-ink-base mb-1">
                  {t(member.name)}
                </h3>
                <p className="text-xs font-semibold text-cbos-green-800 mb-4 pb-3 border-b border-sand-200">
                  {t(member.role)}
                </p>
                <p className="text-xs text-ink-muted leading-relaxed">
                  {t(member.bio)}
                </p>
              </div>

              <div className="mt-6 pt-3 border-t border-sand-100 flex items-center justify-between text-xs text-ink-muted font-mono">
                <span>CBOS GOVERNANCE</span>
                <span className="text-cbos-gold font-bold">ACT 2002</span>
              </div>
            </div>
          ))}
        </div>

        {/* High Sharia Supervisory Board Spotlight */}
        <div className="bg-cbos-green-950 text-white rounded-2xl p-8 sm:p-10 border border-cbos-gold/40 relative overflow-hidden">
          <div className="absolute inset-0 bg-guilloche opacity-10 pointer-events-none" />
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <div className="flex items-center gap-2 text-cbos-gold text-xs font-mono uppercase tracking-wider">
                <FileCheck2 className="w-4 h-4" />
                <span>{t({ ar: 'المرجعية الفقهية والرقابة الشرعية', en: 'Islamic Jurisprudential Authority' })}</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-white">
                {t({
                  ar: 'الهيئة العليا للرقابة الشرعية للجهاز المصرفي والمؤسسات المالية',
                  en: 'High Sharia Supervisory Board for Banking & Financial Institutions'
                })}
              </h2>
              <p className="text-sand-300 text-sm leading-relaxed">
                {t({
                  ar: 'تعد الهيئة المرجع السيادي والنهائي في بيان الأحكام الشرعية المتصلة بالعمليات المصرفية والمالية في السودان. وتتمتع فتاواها وقراراتها بالصفة الإلزامية لكافة المصارف والمؤسسات المالية العاملة بالبلاد وفقاً لأحكام القانون.',
                  en: 'The High Board serves as the supreme sovereign authority on Islamic jurisprudence governing banking and financial transactions in Sudan. Its rulings are legally binding on all licensed banks and institutions.'
                })}
              </p>
            </div>

            <div className="lg:col-span-4 bg-cbos-green-900/80 border border-cbos-gold/30 rounded-xl p-5 space-y-3">
              <h3 className="font-serif font-bold text-cbos-gold text-sm border-b border-cbos-green-800 pb-2">
                {t({ ar: 'اختصاصات الهيئة الشرعية', en: 'Statutory Jurisdictions' })}
              </h3>
              <ul className="text-xs text-sand-200 space-y-2">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-cbos-gold" />
                  <span>{t({ ar: 'إقرار العقود والصيغ التمويلية المعتمدة', en: 'Approving Islamic financing contracts' })}</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-cbos-gold" />
                  <span>{t({ ar: 'تدقيق وإصدار صكوك التمويل الحكومي (شهامة وشهاب)', en: 'Auditing sovereign Sukuk (SHAHAMAH & SHIHAB)' })}</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-cbos-gold" />
                  <span>{t({ ar: 'التفتيش الشرعي الميداني على المصارف', en: 'Field Sharia audits of commercial banks' })}</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-cbos-gold" />
                  <span>{t({ ar: 'مطابقة نظم الدفع الرقمية والبطاقات', en: 'Certifying digital payment systems & cards' })}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
