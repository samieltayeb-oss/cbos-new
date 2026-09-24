'use client';

import React, { useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import GlobalCommandSearch from '../search/GlobalCommandSearch';
import { useLanguage } from '@/lib/languageContext';

export default function ShellWrapper({ children }: { children: React.ReactNode }) {
  const [searchOpen, setSearchOpen] = useState(false);
  const { dir } = useLanguage();

  return (
    <div className="min-h-screen flex flex-col font-sans" dir={dir}>
      <Header onOpenSearch={() => setSearchOpen(true)} />
      <GlobalCommandSearch isOpen={searchOpen} onClose={() => setSearchOpen(false)} />
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  );
}
