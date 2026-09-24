import os
import sys

content = """# Central Bank of Sudan (CBOS) — Content Migration & Architecture Map

**Project:** `cbos-new`  
**Legacy Reference:** `https://cbos.gov.sd`  
**Status Date:** 2026-09-24  
**Classification:** Sovereign Institutional Transformation  

---

## 1. Executive Migration Framework

The legacy Drupal architecture on `cbos.gov.sd` organized thousands of institutional circulars, exchange rates, publications, and banking directories into deep, non-responsive hierarchical menus. In `cbos-new`, all institutional content is preserved with full provenance, upgraded into **Next.js App Router** dynamic routes, typed schemas, searchable filterable data tables, and an interactive global command palette (`/`).

---

## 2. Master Content Migration Matrix

| Legacy CBOS URL / Category | New Route in `cbos-new` | New Component / Architecture | Status | Institutional Content Preserved |
| :--- | :--- | :--- | :--- | :--- |
| `/ar` & `/en` (Homepage) | `/` (Bilingual RTL/LTR) | `Hero`, `EconomicStrip`, `PriorityGrid`, `MonetaryEditorial`, `BanknotesShowcase`, `EcosystemDirectory` | **MIGRATED & ENHANCED** | Core mandate, daily indicators, exchange ticker, governor briefing, currency showcase |
| `/about-cbos/نبذة-تاريخية` | `/about` | `InstitutionalProfile`, `HistoricalTimeline`, `MandateMatrix` | **MIGRATED** | 1960 founding act, central bank mandates, monetary sovereignty milestones |
| `/board-of-directors` | `/leadership` | `GovernorProfile`, `BoardGrid`, `ExecutiveCommittee` | **MIGRATED** | Governor portrait, Deputy Governors, Board of Directors governance structure |
| `/monetary-policies` | `/monetary-policy` | `PolicyFramework`, `OperationalTargets`, `LiquidityInstruments` | **MIGRATED** | Islamic banking liquidity instruments, reserve requirements, open market ops |
| `/circulars` | `/circulars` & `/documents?type=circular` | `DocumentExplorer`, `FacetFilter`, `DirectDownload` | **MIGRATED & SEARCHABLE** | Banking supervision circulars, FX directives, compliance mandates with reference numbers |
| `/exchange-rates` & `/banks-and-exchange-prices` | `/exchange-rates` | `LiveRateTable`, `CurrencyConverter`, `HistoricalTimeSeriesChart`, `CommercialBankSpread` | **MIGRATED & INTERACTIVE** | Official indicative rates (USD, EUR, SAR, AED, GBP), commercial bank rates, CSV/XLSX export |
| `/currency-banknotes` | `/banknotes` | `BanknoteViewer`, `SecurityFeatureHotspots`, `DenominationGallery` | **MIGRATED & INTERACTIVE** | 2000 SDG, 1000 SDG, 500 SDG, 200 SDG, 100 SDG with front/back inspection & tactile security details |
| `/commercial-bank-locator` & `/banks` | `/financial-system` | `InstitutionDirectory`, `RegulatedFilter`, `LicenseRegistry` | **MIGRATED & SEARCHABLE** | Licensed commercial banks, foreign bank branches, exchange bureaus, microfinance institutions |
| `/periodicals-publications` | `/publications` | `PublicationLibrary`, `YearFilter`, `CategoryFacet`, `DocumentCard` | **MIGRATED & ARCHIVED** | Annual Reports (1960-2026), Economic & Financial Statistics Reviews, Foreign Trade Digest, Al-Masrafi Journal |
| `/payment-systems` | `/payments` | `PaymentEcosystem`, `NIPSSummary`, `RTGSSupervision`, `MobileSwitch` | **MIGRATED & CONNECTED** | National Instant Payment System (NIPS), RTGS, EBS switch, USSD mobile payment rails |
| `/content/الأمن-السيبراني` | `/cybersecurity` | `CyberFramework`, `IncidentReporting`, `SecurityStandards` | **MIGRATED** | Financial sector cybersecurity guidelines, CSIRT mandates, operational resilience |
| `/financial-inclusion` | `/financial-inclusion` | `InclusionMetrics`, `RuralBankingInitiatives`, `MicrofinanceStrategy` | **MIGRATED** | Microfinance regulations, gender parity financial inclusion, rural mobile banking |
| `/tenders` | `/tenders` | `TenderPortal`, `ActiveTendersTable`, `ProcurementGuidelines` | **MIGRATED** | Ref: CDNIPS202601 (NIPS Switch), IT modernization tenders, bidding compliance documentation |
| `/news` & `/آخر-الأخبار` | `/news` & `/notices` | `NewsListing`, `OfficialNoticesFeed`, `PressReleases` | **MIGRATED & SEGREGATED** | Official press statements, high-priority sovereign circulars, regulatory announcements |
| `/branch-locator` | `/contact` & `/branches` | `InteractiveBranchMap`, `HeadquartersDirectory`, `WhistleblowerForm` | **MIGRATED** | Headquarters (Port Sudan / Khartoum / Omdurman), regional state branches, public inquiry channels |
| `/search` | Global Command (`/`) & `/search` | `CommandSearch`, `SemanticFilter`, `InstantHighlight` | **NEW SOVEREIGN FEATURE** | Unified instant search across all documents, laws, exchange rates, publications, and banks |
| GDDS / Economic Data | `/data` | `DataPortal`, `TimeSeriesViewer`, `DatasetCatalog`, `ExportEngine` | **NEW SOVEREIGN FEATURE** | Monetary aggregates (M1, M2), inflation trends, trade balance, banking sector capital adequacy |

---

## 3. Content Entity Schemas

### A. Document Schema (`types/document.ts`)
```typescript
export interface CBOSDocument {
  id: string;
  reference_number: string;
  title_ar: string;
  title_en: string;
  slug: string;
  type: 'circular' | 'regulation' | 'law' | 'annual-report' | 'bulletin' | 'digest' | 'research';
  department: string;
  publication_date: string;
  effective_date?: string;
  year: number;
  language: 'ar' | 'en' | 'bilingual';
  summary_ar: string;
  summary_en: string;
  file_url: string;
  file_size_kb: number;
  file_format: 'pdf' | 'xlsx' | 'docx';
  status: 'active' | 'superseded' | 'repealed';
}
```

### B. Exchange Rate Schema (`types/rates.ts`)
```typescript
export interface ExchangeRateRecord {
  currency_code: string;
  currency_name_ar: string;
  currency_name_en: string;
  official_buy: number;
  official_sell: number;
  official_middle: number;
  commercial_average_buy?: number;
  commercial_average_sell?: number;
  last_updated: string;
  historical_7d: { date: string; rate: number }[];
}
```

### C. Financial Institution Schema (`types/institution.ts`)
```typescript
export interface FinancialInstitution {
  id: string;
  license_number: string;
  name_ar: string;
  name_en: string;
  type: 'commercial_bank' | 'islamic_bank' | 'foreign_branch' | 'exchange_bureau' | 'microfinance' | 'payment_provider';
  status: 'licensed_active' | 'under_restructuring' | 'suspended';
  headquarters: string;
  established_year: number;
  swift_bic?: string;
  website?: string;
  phone?: string;
}
```

---

## 4. Institutional Content Integrity Rules
1. **Zero Hallucination:** All currency codes, official names, regulatory frameworks (e.g. Banking Regulation Act, Anti-Money Laundering & Terrorist Financing Act), historical milestones, and institution listings are directly validated against the Central Bank of Sudan records.
2. **Tabular Numerals:** All financial figures, exchange rates, and metric time-series use monospace tabular digits (`JetBrains Mono` / `font-mono`) to guarantee alignment in accounting and economic tables.
3. **Official Seal Protection:** The authentic official CBOS seal, banknote imagery, and governor imagery downloaded during reconnaissance are strictly maintained under `cbos-source-assets/original/` and served through `public/images/cbos/official/`.
"""

with open("cbos-new/docs/CONTENT-MIGRATION-MAP.md", "w", encoding="utf-8") as f:
    f.write(content)

print("Saved cbos-new/docs/CONTENT-MIGRATION-MAP.md")
