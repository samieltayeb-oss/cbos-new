'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useLanguage } from '@/lib/languageContext';
import { officialGalleryData, GalleryAlbum } from '@/data/gallery';
import { 
  Camera, 
  Calendar, 
  MapPin, 
  Images, 
  X, 
  ChevronLeft, 
  ChevronRight,
  Maximize2,
  ExternalLink,
  ShieldCheck
} from 'lucide-react';

export default function GalleryPage() {
  const { t, isRtl } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [activeAlbum, setActiveAlbum] = useState<GalleryAlbum | null>(null);
  const [activePhotoIndex, setActivePhotoIndex] = useState<number>(0);

  const categories = [
    { id: 'all', title: { ar: 'كافة الألبومات', en: 'All Albums' } },
    { id: 'official', title: { ar: 'الفعاليات الرسمية', en: 'Official Events' } },
    { id: 'heritage', title: { ar: 'التراث والصروح المعمارية', en: 'Heritage & Landmarks' } },
    { id: 'international', title: { ar: 'المؤتمرات الدولية', en: 'International Summits' } },
    { id: 'community', title: { ar: 'القيم المؤسسية والمتقاعدين', en: 'Institutional Values' } },
  ];

  const filteredAlbums = selectedCategory === 'all' 
    ? officialGalleryData 
    : officialGalleryData.filter(a => a.category === selectedCategory);

  const openLightbox = (album: GalleryAlbum, index = 0) => {
    setActiveAlbum(album);
    setActivePhotoIndex(index);
  };

  const closeLightbox = () => {
    setActiveAlbum(null);
    setActivePhotoIndex(0);
  };

  const nextPhoto = () => {
    if (!activeAlbum) return;
    setActivePhotoIndex((prev) => (prev + 1) % activeAlbum.images.length);
  };

  const prevPhoto = () => {
    if (!activeAlbum) return;
    setActivePhotoIndex((prev) => (prev - 1 + activeAlbum.images.length) % activeAlbum.images.length);
  };

  return (
    <div className="bg-sand-50 min-h-screen">
      {/* Sovereign Header Banner */}
      <section 
        className="bg-cbos-navyDark text-white relative overflow-hidden py-14 lg:py-20 border-b border-[#22446D]"
        style={{ backgroundColor: '#0B1A2D' }}
      >
        <div className="absolute inset-0 bg-guilloche opacity-15 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Breadcrumb matching cbos.gov.sd screenshot 2 */}
          <div className="flex items-center gap-2 text-cbos-blue text-xs font-mono uppercase tracking-wider mb-4">
            <Link href="/" className="hover:underline">
              {isRtl ? 'الرئيسية' : 'Home'}
            </Link>
            <span>/</span>
            <span className="text-[#8F9CAE]">
              {isRtl ? 'معرض الصور' : 'Photo Gallery'}
            </span>
          </div>

          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#162D4C] border border-[#22446D] text-xs font-mono font-bold text-cbos-blue mb-3">
                <Camera className="w-3.5 h-3.5 text-cbos-gold" />
                <span>{isRtl ? 'الأرشيف والتوثيق الإعلامي السيادي' : 'SOVEREIGN MEDIA & PHOTO ARCHIVE'}</span>
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-normal font-display">
                {isRtl ? 'معرض الصور' : 'Official Photo Gallery'}
              </h1>
              <p className="text-[#8F9CAE] text-sm sm:text-base max-w-3xl leading-relaxed mt-2">
                {isRtl
                  ? 'التوثيق المصور للأنشطة والفعاليات الرسمية، والزيارات الميدانية، والمؤتمرات الدولية، والصروح المعمارية لبنك السودان المركزي عبر مسيرته الوطنية.'
                  : 'Visual documentation of executive events, international summits, institutional milestones, and architectural heritage across six decades of central banking history.'}
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* Main Content Area */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
        
        {/* Category Filter Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 border-b border-sand-200 text-xs font-semibold">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 py-2 rounded-xl transition-all font-mono shrink-0 ${
                selectedCategory === cat.id
                  ? 'bg-cbos-blue text-white shadow-sm'
                  : 'bg-white hover:bg-sand-100 text-cbos-ink border border-sand-200'
              }`}
            >
              {t(cat.title)}
            </button>
          ))}
        </div>

        {/* Gallery Albums Grid — styled exactly as cbos.gov.sd screenshot 2 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredAlbums.map((album) => (
            <div
              key={album.id}
              onClick={() => openLightbox(album)}
              className="group bg-white rounded-xl overflow-hidden border border-sand-300 shadow-cbos-card hover:shadow-xl hover:border-cbos-blue transition-all duration-300 flex flex-col cursor-pointer"
            >
              {/* Photo Thumbnail Container */}
              <div className="relative aspect-[16/11] w-full overflow-hidden bg-slate-900">
                <Image
                  src={album.coverImage}
                  alt={t(album.title)}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />

                {/* Photo Count Pill */}
                <div className="absolute top-3 right-3 rtl:right-auto rtl:left-3 bg-[#0B1A2D]/85 backdrop-blur-sm text-white px-2.5 py-1 rounded-lg text-[11px] font-mono font-bold flex items-center gap-1.5 shadow">
                  <Images className="w-3.5 h-3.5 text-cbos-gold" />
                  <span>{album.images.length} {isRtl ? 'صور' : 'Photos'}</span>
                </div>

                {/* Dark Vignette Overlay on Bottom matching cbos.gov.sd */}
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent p-4 text-white space-y-1">
                  <div className="flex items-center gap-3 text-[11px] font-mono text-[#DDC99B]">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      <span>{album.date}</span>
                    </span>
                    {album.location && (
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3 h-3" />
                        <span>{t(album.location)}</span>
                      </span>
                    )}
                  </div>
                  <h3 className="font-bold text-sm sm:text-base leading-snug line-clamp-2 font-display text-white group-hover:text-cbos-gold transition-colors">
                    {t(album.title)}
                  </h3>
                </div>
              </div>

              {/* Bottom Card Info */}
              {album.description && (
                <div className="p-4 bg-sand-50/60 border-t border-sand-200 flex-1 flex flex-col justify-between">
                  <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed">
                    {t(album.description)}
                  </p>
                  <div className="pt-3 mt-3 border-t border-sand-200/60 flex items-center justify-between text-xs font-mono text-cbos-blue font-bold">
                    <span>{isRtl ? 'عرض الألبوم بالكامل' : 'View Full Album'}</span>
                    <Maximize2 className="w-3.5 h-3.5" />
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

      </section>

      {/* Lightbox Modal */}
      {activeAlbum && (
        <div 
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex flex-col justify-between p-4 sm:p-6 animate-fadeIn"
          onClick={closeLightbox}
        >
          {/* Top Bar */}
          <div className="flex items-center justify-between text-white max-w-7xl mx-auto w-full pb-3 border-b border-white/10" onClick={e => e.stopPropagation()}>
            <div className="space-y-0.5">
              <h3 className="text-base sm:text-lg font-bold font-display">
                {t(activeAlbum.title)}
              </h3>
              <div className="flex items-center gap-3 text-xs font-mono text-[#DDC99B]">
                <span>{activeAlbum.date}</span>
                {activeAlbum.location && <span>• {t(activeAlbum.location)}</span>}
                <span>• {activePhotoIndex + 1} / {activeAlbum.images.length}</span>
              </div>
            </div>

            <button
              onClick={closeLightbox}
              className="p-2 rounded-xl bg-white/10 hover:bg-white/20 text-white transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Main Photo Center */}
          <div className="relative flex-1 flex items-center justify-center my-4 max-w-6xl mx-auto w-full" onClick={e => e.stopPropagation()}>
            <div className="relative w-full h-[65vh] rounded-xl overflow-hidden shadow-2xl">
              <Image
                src={activeAlbum.images[activePhotoIndex]}
                alt={t(activeAlbum.title)}
                fill
                className="object-contain"
                priority
              />
            </div>

            {/* Prev / Next Controls */}
            {activeAlbum.images.length > 1 && (
              <>
                <button
                  onClick={prevPhoto}
                  className="absolute left-2 sm:left-4 p-3 rounded-full bg-black/60 hover:bg-black/90 text-white border border-white/20 transition-all"
                  aria-label="Previous photo"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                <button
                  onClick={nextPhoto}
                  className="absolute right-2 sm:right-4 p-3 rounded-full bg-black/60 hover:bg-black/90 text-white border border-white/20 transition-all"
                  aria-label="Next photo"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              </>
            )}
          </div>

          {/* Bottom Thumbnails Strip */}
          {activeAlbum.images.length > 1 && (
            <div className="flex items-center justify-center gap-2 overflow-x-auto max-w-4xl mx-auto w-full py-2" onClick={e => e.stopPropagation()}>
              {activeAlbum.images.map((img, i) => (
                <button
                  key={i}
                  onClick={() => setActivePhotoIndex(i)}
                  className={`relative w-16 h-12 rounded-lg overflow-hidden shrink-0 border-2 transition-all ${
                    activePhotoIndex === i ? 'border-cbos-gold scale-105' : 'border-transparent opacity-60 hover:opacity-100'
                  }`}
                >
                  <Image src={img} alt={`thumb-${i}`} fill className="object-cover" />
                </button>
              ))}
            </div>
          )}

        </div>
      )}

    </div>
  );
}
