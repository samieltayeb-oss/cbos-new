import React from 'react';
import Hero from '@/components/home/Hero';
import EconomicStrip from '@/components/home/EconomicStrip';
import PriorityActions from '@/components/home/PriorityActions';
import MonetaryEditorial from '@/components/home/MonetaryEditorial';
import DataExperience from '@/components/home/DataExperience';
import NoticesAndNews from '@/components/home/NoticesAndNews';
import BanknotesShowcase from '@/components/home/BanknotesShowcase';
import FinancialSystemEcosystem from '@/components/home/FinancialSystemEcosystem';
import PublicationsPreview from '@/components/home/PublicationsPreview';

export default function HomePage() {
  return (
    <div className="w-full">
      {/* 1. Signature Hero */}
      <Hero />

      {/* 2. Live Market & Economic Strip */}
      <EconomicStrip />

      {/* 3. Priority Actions (4 Institutional Gateways) */}
      <PriorityActions />

      {/* 4. Monetary Policy & Governor Editorial Split */}
      <MonetaryEditorial />

      {/* 5. Economic Data Experience & Interactive Time Series */}
      <DataExperience />

      {/* 6. Segregated Notices & Press Announcements */}
      <NoticesAndNews />

      {/* 7. Banknotes & Currency Security Architecture */}
      <BanknotesShowcase />

      {/* 8. Regulated Financial System Ecosystem */}
      <FinancialSystemEcosystem />

      {/* 9. Publications & Research Library */}
      <PublicationsPreview />
    </div>
  );
}
