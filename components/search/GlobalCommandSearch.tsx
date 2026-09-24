'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useLanguage } from '@/lib/languageContext';
import { officialDocumentsData } from '@/data/documents';
import { licensedInstitutionsData } from '@/data/institutions';
import { officialNewsData } from '@/data/news';
import { Search, X, FileText, Landmark, Newspaper, Coins, ArrowRight, ArrowLeft } from 'lucide-react';

interface SearchResultItem {
  id: string;
  title: string;
  category: string;
  href: string;
  meta?: string;
  icon: any;
}

export default function GlobalCommandSearch({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const { language, isRtl, t } = useLanguage();
  const [query, setQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState<'all' | 'documents' | 'banks' | 'news'>('all');
  const inputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  // Handle keyboard shortcut '/' and 'Escape'
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === '/' && !isOpen && document.activeElement?.tagName !== 'INPUT' && document.activeElement?.tagName !== 'TEXTAREA') {
        e.preventDefault();
        onClose(); // toggle
      } else if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
    } else {
      setQuery('');
    }
  }, [isOpen]);

  if (!isOpen) return null;

  // Filter items across databases
  const results: SearchResultItem[] = [];
  const q = query.trim().toLowerCase();

  if (q.length > 1) {
    // 1. Documents
    if (activeCategory === 'all' || activeCategory === 'documents') {
      officialDocumentsData.forEach(doc => {
        const titleAr = doc.title.ar.toLowerCase();
        const titleEn = doc.title.en.toLowerCase();
        const ref = doc.reference_number.toLowerCase();
        if (titleAr.includes(q) || titleEn.includes(q) || ref.includes(q)) {
          results.push({
            id: doc.id,
            title: t(doc.title),
            category: isRtl ? 'منشور / وثيقة' : 'Document / Circular',
            href: `/documents?ref=${doc.reference_number}`,
            meta: `${doc.reference_number} • ${doc.year}`,
            icon: FileText
          });
        }
      });
    }

    // 2. Institutions
    if (activeCategory === 'all' || activeCategory === 'banks') {
      licensedInstitutionsData.forEach(inst => {
        const nameAr = inst.name.ar.toLowerCase();
        const nameEn = inst.name.en.toLowerCase();
        const bic = (inst.swiftBic || '').toLowerCase();
        if (nameAr.includes(q) || nameEn.includes(q) || bic.includes(q)) {
          results.push({
            id: inst.id,
            title: t(inst.name),
            category: isRtl ? 'مؤسسة مصرفية' : 'Banking Institution',
            href: `/financial-system?search=${encodeURIComponent(t(inst.name))}`,
            meta: `${t(inst.typeLabel)} • ${inst.swiftBic || ''}`,
            icon: Landmark
          });
        }
      });
    }

    // 3. News & Notices
    if (activeCategory === 'all' || activeCategory === 'news') {
      officialNewsData.forEach(item => {
        const titleAr = item.title.ar.toLowerCase();
        const titleEn = item.title.en.toLowerCase();
        if (titleAr.includes(q) || titleEn.includes(q)) {
          results.push({
            id: item.id,
            title: t(item.title),
            category: isRtl ? 'خبر / إعلان رسمي' : 'Official Notice',
            href: `/news#${item.slug}`,
            meta: item.date,
            icon: Newspaper
          });
        }
      });
    }
  }

  return (
    <div className="fixed inset-0 z-50 bg-black/75 backdrop-blur-sm flex items-start justify-center pt-16 md:pt-24 px-4 animate-fadeIn">
      <div 
        className="w-full max-w-2xl bg-cbos-ink border border-cbos-gold rounded-2xl shadow-2xl overflow-hidden flex flex-col"
        onClick={e => e.stopPropagation()}
      >
        
        {/* Search Input Bar */}
        <div className="flex items-center px-4 py-3.5 border-b border-cbos-ink-border bg-cbos-ink-card gap-3">
          <Search className="w-5 h-5 text-cbos-gold shrink-0" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={e => setQuery(e.target.value)}
            placeholder={isRtl ? 'ابحث في القوانين، المنشورات، أسعار الصرف، والمصارف...' : 'Search laws, circulars, exchange rates, and institutions...'}
            className="w-full bg-transparent text-white placeholder-cbos-stone/60 text-sm md:text-base outline-none font-sans"
          />
          {query && (
            <button onClick={() => setQuery('')} className="p-1 hover:text-white text-cbos-stone">
              <X className="w-4 h-4" />
            </button>
          )}
          <button
            onClick={onClose}
            className="px-2 py-1 rounded bg-cbos-ink-border text-xs text-cbos-stone hover:text-white font-mono"
          >
            ESC
          </button>
        </div>

        {/* Filter Pills */}
        <div className="flex items-center gap-2 px-4 py-2 bg-cbos-ink border-b border-cbos-ink-border text-xs overflow-x-auto">
          <button
            onClick={() => setActiveCategory('all')}
            className={`px-2.5 py-1 rounded-full font-semibold transition-all ${activeCategory === 'all' ? 'bg-cbos-gold text-cbos-ink' : 'text-cbos-stone hover:text-white'}`}
          >
            {isRtl ? 'الكل' : 'All'}
          </button>
          <button
            onClick={() => setActiveCategory('documents')}
            className={`px-2.5 py-1 rounded-full font-semibold transition-all ${activeCategory === 'documents' ? 'bg-cbos-gold text-cbos-ink' : 'text-cbos-stone hover:text-white'}`}
          >
            {isRtl ? 'المنشورات واللوائح' : 'Documents & Circulars'}
          </button>
          <button
            onClick={() => setActiveCategory('banks')}
            className={`px-2.5 py-1 rounded-full font-semibold transition-all ${activeCategory === 'banks' ? 'bg-cbos-gold text-cbos-ink' : 'text-cbos-stone hover:text-white'}`}
          >
            {isRtl ? 'المصارف المرخصة' : 'Licensed Banks'}
          </button>
          <button
            onClick={() => setActiveCategory('news')}
            className={`px-2.5 py-1 rounded-full font-semibold transition-all ${activeCategory === 'news' ? 'bg-cbos-gold text-cbos-ink' : 'text-cbos-stone hover:text-white'}`}
          >
            {isRtl ? 'الأخبار والإعلانات' : 'Notices & News'}
          </button>
        </div>

        {/* Search Results Area */}
        <div className="max-h-[60vh] overflow-y-auto p-4 space-y-2">
          {query.trim().length <= 1 ? (
            <div className="text-center py-8 text-xs text-cbos-stone space-y-2">
              <p>{isRtl ? 'اكتب كلمة للبحث الفوري في كافة قواعد بيانات البنك المركزي' : 'Type a query to search across all Central Bank records'}</p>
              <div className="flex justify-center gap-2 text-[11px] font-mono text-cbos-gold">
                <span>CIRC-2026</span> • <span>NIPS</span> • <span>الذهب</span> • <span>USD</span>
              </div>
            </div>
          ) : results.length === 0 ? (
            <div className="text-center py-8 text-xs text-cbos-stone">
              {isRtl ? 'لم يتم العثور على نتائج مطابقة.' : 'No matching institutional records found.'}
            </div>
          ) : (
            results.map((item) => {
              const IconComp = item.icon;
              return (
                <Link
                  key={item.id}
                  href={item.href}
                  onClick={onClose}
                  className="group flex items-center justify-between p-3 rounded-xl bg-cbos-ink-surface hover:bg-cbos-green-dark/40 border border-cbos-ink-border hover:border-cbos-gold transition-all"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-cbos-gold/15 text-cbos-gold flex items-center justify-center shrink-0">
                      <IconComp className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-sm font-bold text-white group-hover:text-cbos-gold transition-colors">
                        {item.title}
                      </div>
                      <div className="text-[11px] text-cbos-stone flex items-center gap-2 mt-0.5">
                        <span className="text-cbos-gold font-mono">{item.category}</span>
                        {item.meta && <span>• {item.meta}</span>}
                      </div>
                    </div>
                  </div>
                  <span className="text-cbos-stone group-hover:text-cbos-gold transition-colors">
                    {isRtl ? <ArrowLeft className="w-4 h-4" /> : <ArrowRight className="w-4 h-4" />}
                  </span>
                </Link>
              );
            })
          )}
        </div>

        {/* Footer Shortcut Helper */}
        <div className="px-4 py-2.5 bg-cbos-ink border-t border-cbos-ink-border text-[11px] text-cbos-stone flex items-center justify-between font-mono">
          <span>{isRtl ? 'البحث السيادي الموحد' : 'Sovereign Unified Search'}</span>
          <span>{results.length} {isRtl ? 'نتيجة' : 'results'}</span>
        </div>

      </div>
    </div>
  );
}
