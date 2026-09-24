# Central Bank of Sudan (CBOS) — Sovereign Digital Platform
### بنك السودان المركزي — المنظومة الرقمية السيادية الحديثة

[![Next.js 15](https://img.shields.io/badge/Next.js-15.1.7-black?style=flat-square&logo=next.js)](https://nextjs.org/)
[![React 19](https://img.shields.io/badge/React-19.0.0-blue?style=flat-square&logo=react)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.7-blue?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4.17-38bdf8?style=flat-square&logo=tailwind-css)](https://tailwindcss.com/)
[![Sovereign Design](https://img.shields.io/badge/Design-Swiss_Financial_+_FT_Editorial-075A3A?style=flat-square)]()
[![Bilingual](https://img.shields.io/badge/Bilingual-Arabic_(RTL)_|_English_(LTR)-B99553?style=flat-square)]()

---

## 🏛️ Executive Summary

This repository represents the flagship sovereign digital transformation for the **Central Bank of Sudan (CBOS — بنك السودان المركزي)**, migrating the institution from legacy Drupal infrastructure (`cbos.gov.sd`) into a world-class, institutional-grade web platform.

Engineered with the institutional polish, data density, and calm authority of premier sovereign institutions (Swiss National Bank, Bank of England, Bloomberg, Financial Times), this platform balances international financial discipline with authentic Sudanese heritage.

---

## 💎 Design System & Visual Identity

### Sovereign Color Palette
* **Deep Sudan Green:** `#075A3A` (Primary Institutional Brand)
* **Dark Institutional Green:** `#033E2D` (Sovereign Hero & Shell Backgrounds)
* **Ink / Near Black:** `#101713` (Authoritative High-Contrast Typography)
* **Muted Sudan Gold:** `#B99553` / `#C58F2B` (Prestige Accents, Seals, Highlights)
* **Warm Ivory:** `#F6F4EE` (Card & Section Contrast)
* **Soft Sage:** `#DCE7DF` (Subtle Dividers & Badges)
* **Semantic Alert:** `#E95B4D` (Strictly reserved for regulatory warnings)

### Typography
* **Arabic Primary:** *Cairo* & *IBM Plex Sans Arabic* (Clear, institutional geometric readability)
* **Arabic Classical:** *Amiri* / *Tajawal* (Editorial statements & legal treatises)
* **English Primary:** *Inter* & *Geist* (Modern financial clarity)
* **Tabular Figures:** *JetBrains Mono* (Exchange rates, statutory ratios, financial balances)

### Guilloche & Sovereign Vector System
Custom algorithmic guilloche linework (`bg-guilloche`), geometric banknote rosettes, and Islamic star tiling motifs rendered natively with CSS and SVGs without heavy raster overhead.

---

## 📂 Architecture & Sitemap

```
app/
├── layout.tsx                   # Master HTML shell, fonts, language context
├── globals.css                  # Custom tokens, guilloche patterns, typography
├── page.tsx                     # Flagship 9-tier Sovereign Homepage
├── about/                       # Statutory mandate, 1959–2026 history, legal basis
├── leadership/                  # Governor statement, Board of Directors, High Sharia Board
├── monetary-policy/             # Islamic tools (SHAHAMAH, SHIHAB), statutory reserve calc
├── exchange-rates/              # Daily indicative rates, live converter, CSV/JSON export
├── data/                        # Sovereign e-GDDS data portal, statistics catalog
├── documents/                   # Unified legal repository, circulars, banking acts, RFPs
├── banknotes/                   # 2000, 1000, 500 SDG catalog & interactive security inspector
├── financial-system/            # Supervised commercial banks, specialized banks directory
├── payments/                    # National Instant Payment System (NIPS), RTGS, EBS switch
├── news/                        # Press releases, tender announcements (CDNIPS202601)
└── contact/                     # Port Sudan Operational HQ, Khartoum HQ, 8 state branches
```

---

## 🛡️ Asset Integrity & Authenticity Standard

All official assets follow a strict 3-tier classification:
- **Category 1 (Official / Documentary Assets):** The CBOS white logo, sovereign Secretary Bird emblem, authentic banknote scans (2000 & 500 SDG), Governor portrait, and official headquarters are **never AI-generated** and are forensically preserved directly from `cbos.gov.sd`.
- **Preserved Archive:** Located under `cbos-source-assets/original/` and documented in `docs/IMAGE-INVENTORY.md` and `docs/IMAGE-MIGRATION.md`.

---

## 🚀 Quickstart & Production Build

### Prerequisites
- Node.js >= 20.0.0 LTS (Node v24.16.0 verified)
- npm >= 10.0.0

### Run Locally
```powershell
# Install packages
npm install

# Run static typecheck
npm run typecheck

# Launch development server
npm run dev
```

### Production Build
```powershell
npm run build
```

---

## ⚡ Deployment & Production Rails

- **Canonical Repository:** `https://github.com/samieltayeb-oss/cbos-new`
- **Canonical Edge Deployment:** `https://cbos-new.vercel.app`
- **Security Hardening:** Enforces HTTP Strict Transport Security (HSTS), frame protection, and content security headers.

---

## 📜 Legal & Mandate

© 2026 Central Bank of Sudan (بنك السودان المركزي). All rights reserved.
Operating under the Bank of Sudan Act 2002 (as amended) and the Regulation of Banking Business Act 2004.
All monetary instruments certified by the High Sharia Supervisory Board for Banking & Financial Institutions.
