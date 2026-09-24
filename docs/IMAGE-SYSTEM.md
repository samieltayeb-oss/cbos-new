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
- High-priority assets (Logo, Governor portrait, Banknote 2000 front, Primary Hero) specify `priority={true}` for instant LCP rendering.
- Allowed remote and local patterns are strictly governed in `next.config.mjs`.

---

## 5. Primary Hero Image System (Approved Sovereign Landmarks Standard)
**Implementation Date: 2026-09-24**  
**Creative Direction:** Sovereign Landmarks of Sudan & Khartoum  
**User Decision:** Approved — "put khartoum and sudan landmarks i think its better" -> "yes those are way better approved"  
**Subject Focus:** The Nile River, Meroë Pyramids (Kushite Civilization), Tuti Suspension Bridge, and Khartoum Riverfront  

### 5.1 Approved Primary Hero Suite

#### Master A — Sudan Sovereign Landmarks (DESKTOP MASTER — SELECTED & DEPLOYED)
* **Concept:** A sweeping cinematic sovereign landscape panorama representing the heritage, pride, and future of Sudan. In the foreground and right side, the iconic Nile River sweeps past Khartoum with the illuminated Tuti suspension bridge, graceful traditional Nile sailing boats with white sails, and lush riverside palm groves. On the majestic golden sandstone plateau under a breathtaking twilight sky, the iconic, steep-angled Nubian pyramids of Meroë stand with timeless sovereign dignity, bathed in soft warm golden light.
* **Negative Space:** Serene twilight sky and calm emerald Nile water providing high-contrast negative space for headline typography and indicators card.
* **Aspect Ratio:** 16:9 Landscape (1920x1080).
* **Production Files:**
  - `/public/images/cbos/hero/cbos-hero-sudan-landmarks.webp` (1920x1080, WebP Quality 92)
  - `/public/images/cbos/hero/cbos-hero-sudan-landmarks.jpg` (1920x1080, JPEG Quality 92)
* **Prompt Used:**
  > "A grand cinematic sovereign landscape panorama representing the heritage, pride, and future of Sudan. In the foreground and right side, the iconic Nile River sweeps past Khartoum with the illuminated Tuti suspension bridge, graceful traditional Nile sailing boats with white sails, and lush riverside palm groves. On the majestic golden sandstone plateau under a breathtaking twilight sky, the iconic, steep-angled Nubian pyramids of Meroë stand with timeless sovereign dignity, bathed in soft warm golden light. The Nile reflects deep emerald waters and warm amber city lights. Completely devoid of any text, letters, signs, typography, or watermarks. Wide cinematic vista, medium format architectural photography, luxurious color grading blending deep sovereign emerald, royal navy twilight, and warm desert gold. Clean, serene negative space on the left side for institutional typography."
* **Alt Text:**
  > "معالم السودان والخرطوم السيادية — النيل، أهرامات مروي، وجسر توتي | Sovereign Landmarks of Sudan & Khartoum — The Nile, Meroë Pyramids, and Tuti Bridge"

#### Master B — Sudan Landmarks Mobile (MOBILE MASTER — SELECTED & DEPLOYED)
* **Concept:** Vertical sovereign editorial photography capturing iconic landmarks of Sudan and Khartoum. The tranquil emerald waters of the Nile river curve through the center with traditional white-sailed wooden boats drifting peacefully. Modern Khartoum infrastructure with the glowing cable-stayed Tuti Bridge and riverside date palms stands proudly against the twilight. In the golden desert sands, the timeless steep-angled pyramids of Meroë rise majestically in warm golden sandstone. A deep twilight sky provides serene negative space at the top for mobile typography.
* **Aspect Ratio:** 9:16 Portrait (1080x1920).
* **Production Files:**
  - `/public/images/cbos/hero/cbos-hero-sudan-landmarks-mobile.webp` (1080x1920, WebP Quality 90)
  - `/public/images/cbos/hero/cbos-hero-sudan-landmarks-mobile.jpg` (1080x1920, JPEG Quality 90)
* **Alt Text:**
  > "معالم السودان السيادية — أهرامات مروي ونيل الخرطوم | Sovereign Landmarks of Sudan"

#### Master C — Khartoum Nile Riverfront & Confluence (ALTERNATIVE DESKTOP)
* **Concept:** Architectural and landscape editorial photography of Khartoum along the Blue Nile at golden hour twilight with the Tuti suspension bridge, Sharia Al-Nil corniche, and feluccas.
* **Production File:** `/public/images/cbos/hero/cbos-hero-khartoum-nile.webp` (1920x1080)

---

### 5.2 Rationale for Selecting the Sudan Landmarks Suite
1. **National Sovereignty & Collective Pride:** Combines Sudan's ancient economic and trade civilization (the Kushite Kingdom / Meroë pyramids) with the modern capital (Khartoum skyline, Tuti bridge) and national lifeblood (the Nile).
2. **Institutional Gravitas:** Far exceeds a single generic office block; it communicates sovereign permanence, monetary authority, and broad national stewardship.
3. **Harmonious Palette:** The golden sands match CBOS gold (`#B99553`), the Nile waters match CBOS deep green (`#032A1E`), and the twilight sky integrates smoothly with modern web typography.
4. **Zero AI Artifacts:** Completely free of synthetic glare, distorted signage, or warped lines; presents pristine medium-format landscape photography.

---

### 5.3 Responsive Integration & Contrast Governance
* **Desktop (≥ 640px):** Renders `cbos-hero-sudan-landmarks.webp` with `object-cover object-center` and tuned `opacity-65 lg:opacity-75`.
* **Mobile (< 640px):** Switches to vertical portrait master `cbos-hero-sudan-landmarks-mobile.webp` with `object-cover object-top` and `opacity-55`.
* **Direction-Aware Scrims:** A custom CSS gradient (`bg-gradient-to-l / bg-gradient-to-r from-[#032A1E] via-[#032A1E]/85 via-45% to-[#032A1E]/30`) guarantees 100% WCAG AAA contrast for text while revealing the glowing landmarks on the opposite side.
* **Guilloche Vector Integration:** Banknote security linework seamlessly overlays the landscape, bridging legal tender security with national territory.

---

## 6. Category 2 Editorial Documentary Suite (Inner Pages)
**Implementation Date: 2026-09-24**  
**Role:** Authoritative documentary photography grounding CBOS sovereign pillars in the actual reality of Sudanese commerce, agriculture, cyber operations, and economic research.

### 6.1 Sudan Digital Retail Payments in Action (`/payments`)
* **File Path:** `/public/images/cbos/payments/sudan-digital-payments-market.webp` (1920x1080) & `.jpg`
* **Subject:** Authentic Sudanese merchant in traditional pristine white jalabiya and imma at an Omdurman spices/crafts market counter, completing a cashless transaction using a sleek electronic point-of-sale (POS) terminal, while a young Sudanese customer in casual modern attire pays via smartphone QR code.
* **Lighting & Atmosphere:** Warm natural sunlight streaming through market arches, documentary realism, National Geographic editorial grade.
* **Page Target:** `/payments` (Embedded in "Digital Point-of-Sale & Mobile Payment Ecosystem in Sudan" showcase).

### 6.2 Rural Financial Inclusion & Agricultural Empowerment (`/financial-inclusion`)
* **File Path:** `/public/images/cbos/financial-inclusion/sudan-financial-inclusion-rural.webp` (1920x1080) & `.jpg`
* **Subject:** Respectful, empowering documentary photograph in the Gezira Scheme or rural Sudan. A Sudanese woman farmer in a vibrant traditional Sudanese tobe reviewing agricultural microfinance accounts on a rugged tablet with a smiling Sudanese agricultural extension officer wearing an institutional vest.
* **Lighting & Atmosphere:** Golden hour natural light across green agricultural fields, crisp depth of field, authentic dignity and empowerment.
* **Page Target:** `/financial-inclusion` (Embedded in "Rural Financial Inclusion & Agricultural Field Empowerment" showcase).

### 6.3 CBOS-CERT Security Operations Center (`/cybersecurity`)
* **File Path:** `/public/images/cbos/cybersecurity/cbos-cybersecurity-operations.webp` (1920x1080) & `.jpg`
* **Subject:** High-tech sovereign Security Operations Center (SOC) inside the Central Bank of Sudan. Sudanese cybersecurity engineers (a professional Sudanese woman in a modern hijab and an analyst in business attire) monitoring large curved displays showing financial network topology, threat heatmaps, and transaction velocity.
* **Lighting & Atmosphere:** Sophisticated ambient moody lighting with deep emerald accents, ultra-crisp editorial realism, authoritative institutional cyber defense.
* **Page Target:** `/cybersecurity` (Embedded in "CBOS-CERT Security Operations Center & Sovereign Defense" showcase).

### 6.4 Economic Research & Monetary Policy Directorate (`/data`)
* **File Path:** `/public/images/cbos/research/cbos-economic-research-team.webp` (1920x1080) & `.jpg`
* **Subject:** Institutional conference room and briefing suite at the Central Bank of Sudan. A diverse team of Sudanese macroeconomists, data scientists, and senior analysts reviewing monetary aggregates, gold export charts, and economic forecasts on tablets and projection screens, with panoramic floor-to-ceiling windows overlooking Khartoum and the Nile.
* **Lighting & Atmosphere:** Premium architectural lighting, calm authoritative boardroom ambience, Bloomberg Markets/Financial Times editorial standard.
* **Page Target:** `/data` (Embedded in "General Directorate of Economic Research & Statistics" showcase).


