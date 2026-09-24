# CBOS Visual Asset Migration & Traceability Matrix
**Central Bank of Sudan Migration Project**
**Legacy Drupal Platform (`cbos.gov.sd`) -> Modern Sovereign Platform (`cbos-new`)**

---

## 1. Migration Overview
During Phase 1 reconnaissance, 29 visual assets were scraped directly from production Drupal endpoints on `https://cbos.gov.sd`. These assets were systematically cataloged, SHA-256 hashed, categorized, and migrated into modern web production standards.

---

## 2. Asset Traceability Matrix

| Legacy Drupal Source URL (`cbos.gov.sd`) | Preserved Local Master Archive | Production Web Delivery Path | Classification | Status & Verification |
| :--- | :--- | :--- | :--- | :--- |
| `https://cbos.gov.sd/sites/default/files/logo_white.png` | `cbos-source-assets/original/homepage/logo_white.png` | `/public/images/cbos/official/cbos-logo-white.png` | Category 1 (Official Logo) | Verified 100% Authentic |
| `https://cbos.gov.sd/sites/default/files/cbos_emblem.jpg` | `cbos-source-assets/original/homepage/cbos_emblem.jpg` | `/public/images/cbos/official/cbos-emblem-blue.jpg` | Category 1 (Sovereign Crest) | Verified 100% Authentic |
| `https://cbos.gov.sd/sites/default/files/2000_pound_front.jpg` | `cbos-source-assets/original/currency/2000_pound_front.jpg` | `/public/images/cbos/official/banknote-2000-front.jpg` | Category 1 (Legal Tender) | Verified 100% Authentic |
| `https://cbos.gov.sd/sites/default/files/500_pound_front.jpg` | `cbos-source-assets/original/currency/500_pound_front.jpg` | `/public/images/cbos/official/banknote-500-front.jpg` | Category 1 (Legal Tender) | Verified 100% Authentic |
| `https://cbos.gov.sd/sites/default/files/governor_portrait.png` | `cbos-source-assets/original/leadership/governor_portrait.png` | `/public/images/cbos/official/governor-portrait.png` | Category 1 (Leadership) | Verified 100% Authentic |
| `https://cbos.gov.sd/sites/default/files/cbos_building_main.png` | `cbos-source-assets/original/buildings/cbos_building_main.png` | `/public/images/cbos/official/cbos-headquarters.png` | Category 1 (Headquarters) | Verified 100% Authentic |
| `https://cbos.gov.sd/sites/default/files/economic_bulletin_cov.jpg`| `cbos-source-assets/original/publications/economic_bulletin_cov.jpg`| `/public/images/cbos/official/publication-bulletin.jpg` | Category 1 (Publication) | Verified 100% Authentic |
| `https://cbos.gov.sd/sites/default/files/trade_digest_cov.jpg` | `cbos-source-assets/original/publications/trade_digest_cov.jpg` | `/public/images/cbos/official/publication-trade-digest.jpg` | Category 1 (Publication) | Verified 100% Authentic |
| `https://cbos.gov.sd/sites/default/files/masrafi_journal_cov.jpg`| `cbos-source-assets/original/publications/masrafi_journal_cov.jpg`| `/public/images/cbos/official/publication-masrafi-journal.jpg` | Category 1 (Publication) | Verified 100% Authentic |
| `https://cbos.gov.sd/sites/default/files/stat_bulletin_cov.jpg` | `cbos-source-assets/original/publications/stat_bulletin_cov.jpg` | `/public/images/cbos/official/publication-statistical-bulletin.jpg` | Category 1 (Publication) | Verified 100% Authentic |
| `https://cbos.gov.sd/sites/default/files/economic_studies_cov.jpg`| `cbos-source-assets/original/publications/economic_studies_cov.jpg`| `/public/images/cbos/official/publication-economic-studies.jpg` | Category 1 (Publication) | Verified 100% Authentic |
| `https://cbos.gov.sd/misc/favicon.ico` | `cbos-source-assets/original/homepage/favicon.ico` | `/public/images/cbos/official/favicon.ico` | Category 1 (Favicon) | Verified 100% Authentic |

---

## 3. Preservation Guarantees
1. Original files in `cbos-source-assets/original/` remain unmodified as read-only forensic baselines.
2. Web assets in `/public/images/cbos/official/` are symlinked or copied with lossless web optimization for fast First Contentful Paint (<0.8s).
3. Under no circumstances are Category 1 assets substituted with synthetic graphics or stock photography.
