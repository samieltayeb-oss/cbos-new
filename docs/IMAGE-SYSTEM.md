# CBOS Digital Platform — Visual Asset & Image System Standard
**Central Bank of Sudan — Sovereign Design Architecture**
**Document Reference: CBOS-SYS-IMG-2026-V1**

---

## 1. Institutional Asset Philosophy
As the sovereign monetary authority of the Republic of Sudan, the visual assets of the Central Bank of Sudan (CBOS) must convey unwavering credibility, security, and statutory authority. All imagery across `cbos-new` strictly adheres to this multi-tiered asset standard.

---

## 2. Three-Category Asset Classification

### Category 1: Official & Documentary Sovereign Assets (STRICT RULE)
* **Definition:** Official institutional marks, legal tender, statutory leadership, and sovereign headquarters.
* **Authenticity Mandate:** **STRICTLY FORBIDDEN FROM AI GENERATION OR SYNTHESIS.** Must only originate from authentic, verified CBOS source files preserved during the migration crawl.
* **Designated Directory:** `/public/images/cbos/official/`
* **Verified Assets:**
  1. `cbos-logo-white.png` — Official Arabic/English white wordmark and emblem for sovereign headers and footers.
  2. `cbos-emblem-blue.jpg` — Official Secretary Bird sovereign emblem with dual bilingual arc.
  3. `banknote-2000-front.jpg` — Official 2000 SDG high-security banknote series scan.
  4. `banknote-500-front.jpg` — Official 500 SDG high-security banknote series scan.
  5. `governor-portrait.png` — Official portrait of the Governor of the Central Bank of Sudan.
  6. `cbos-headquarters.png` — Official architectural photograph of the Central Bank of Sudan Headquarters.
  7. `publication-bulletin.jpg` — Authentic cover of the CBOS Economic & Financial Statistics Bulletin.
  8. `publication-trade-digest.jpg` — Authentic cover of the Foreign Trade Statistical Digest.
  9. `publication-masrafi-journal.jpg` — Authentic cover of Al-Masrafi (Sudanese Banking) Journal.
  10. `publication-statistical-bulletin.jpg` — Authentic cover of the Monthly Monetary Aggregates.
  11. `publication-economic-studies.jpg` — Authentic cover of CBOS Research & Economic Policy Studies.
  12. `favicon.ico` — Authentic CBOS crest browser icon.

### Category 2: Institutional Vector & Security Graphics
* **Definition:** Algorithmic guilloche security patterns, geometric Islamic linework, Nile-inspired curves, and interactive SVG charts.
* **Standard:** Lightweight vector definitions (`bg-guilloche`), CSS pattern fills, and Framer Motion vector rendering with `<svg>` elements. Never rasterized unless needed for performance fallbacks.

### Category 3: Editorial & Real Economic Assets
* **Definition:** Photographs representing Sudan's productive sectors (agriculture, gold mining, cotton, gum arabic harvesting, port logistics, energy infrastructure).
* **Usage:** Supporting editorial backgrounds and sector highlights, always displayed with institutional overlays (`bg-cbos-green-950/80` or `sand-900/60`).

---

## 3. Storage Hierarchy
```
cbos-new/
├── cbos-source-assets/
│   ├── original/              # Raw preserved files from legacy crawl
│   │   ├── buildings/
│   │   ├── currency/
│   │   ├── homepage/
│   │   ├── leadership/
│   │   ├── news/
│   │   ├── payments/
│   │   └── publications/
│   └── inventory/             # Comprehensive JSON/CSV inventories
│       ├── assets.json
│       ├── assets.csv
│       └── IMAGE-INVENTORY.md
└── public/
    └── images/
        └── cbos/
            ├── official/      # Production-optimized Category 1 assets
            └── patterns/      # Guilloche and watermarks
```

---

## 4. Responsive Delivery & Next.js Image Optimization
- All images are rendered using `next/image` with explicit `width`, `height`, and `sizes` attributes for cumulative layout shift (CLS) prevention.
- High-priority assets (Logo, Governor portrait, Banknote 2000 front) specify `priority={true}` for instant LCP rendering.
- Allowed remote and local patterns are strictly governed in `next.config.mjs`.
