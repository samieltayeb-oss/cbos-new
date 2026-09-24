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

## 5. Primary Hero Image System (Homepage Redesign Standard)
**Implementation Date: 2026-09-24**  
**Generation Engine:** Nano Banana  
**Subject Reference:** Authentic CBOS Headquarters Architecture, Khartoum (`/public/images/cbos/official/cbos-headquarters.png`)

### 5.1 Three Creative Routes Explored

#### Route A — Architectural Authority (SELECTED AS OFFICIAL PRIMARY HERO)
* **Concept:** Dignified, prestigious architectural editorial photography of the Central Bank of Sudan building in Khartoum. Shot on a Hasselblad H6D-100c with a 35mm tilt-shift architectural lens during early morning golden hour. Symmetrical perspective with the iconic white stone facade, vertical geometric blue glass curtain spine, and Sudanese national flag on the rooftop. In the foreground, a paved stone plaza with manicured date palm planters and soft elongated shadows.
* **Negative Space:** Composed with generous open sky and plaza area weighted opposite to the building, enabling clean, high-contrast integration of the signature headline and CTAs.
* **Aspect Ratios Generated:** 16:9 (Desktop Wide), 9:16 (Mobile Portrait).
* **Production Files:**
  - `/public/images/cbos/hero/cbos-hero-building-khartoum-premium.webp` (1920x1080)
  - `/public/images/cbos/hero/cbos-hero-building-khartoum-premium-mobile.webp` (1080x1920)
* **Prompt Used:**
  > "A prestigious, world-class architectural editorial photograph of the Central Bank of Sudan headquarters building in Khartoum. Shot on Hasselblad H6D-100c with a 35mm tilt-shift lens during early morning golden hour. The majestic sovereign central bank building stands with commanding dignity, inspired by its symmetrical white stone facade, elegant geometric vertical tinted glass central atrium with subtle traditional geometric motifs, and the national flag on the rooftop. In the foreground, a dignified paved plaza with manicured date palm trees in soft natural morning light and gentle shadows. Atmospheric depth with Khartoum urban skyline in the distant background. Composed with generous negative space on one side with a deep institutional green atmosphere and soft morning sky gradient, designed for central banking website hero typography. Editorial Financial Times and architectural monograph quality, strictly photorealistic, zero CGI, zero artificial glare, restrained institutional authority."
* **Alt Text:**
  > "Premium architectural editorial photograph of the Central Bank of Sudan headquarters building in Khartoum, featuring the iconic symmetrical white stone facade, central geometric blue glass spine, national flag, and landscaped plaza under soft morning golden hour light."

#### Route B — Sovereign Landscape (Khartoum & Nile Context)
* **Concept:** Broad panoramic editorial composition capturing the Central Bank of Sudan building situated in the Khartoum urban landscape along the banks of the Blue Nile at early dawn.
* **Visual Mood:** Atmospheric morning mist, calm water reflections of the building and golden morning light, stately palm-lined riverbank promenade.
* **Production File:** `/public/images/cbos/hero/cbos-hero-nile-landscape.webp`
* **Prompt Used:**
  > "A wide panoramic architectural editorial photograph capturing the sovereign Central Bank of Sudan building situated in the Khartoum urban landscape along the banks of the Blue Nile at early dawn. Shot on a Sony A1 with a 24-70mm f/2.8 lens. The historic central banking institution rises with sovereign stature against the gentle morning light, with the tranquil waters of the Nile in the foreground reflecting soft golden and emerald hues. Native Sudanese palm trees and paved embankments frame the stately riverfront promenade. Atmospheric morning mist gently softens the city horizon in the distance. Professional architectural framing with generous negative space in the sky and river foreground, deep institutional green atmospheric tone harmonizing with the CBOS brand palette. World Bank and Financial Times annual report visual standard, serene, authoritative, timeless, strictly photorealistic."

#### Route C — Monetary Identity & Twilight Prestige
* **Concept:** Editorial dusk-twilight architectural view of the CBOS headquarters illuminated with warm bronze and gold accent lighting against an emerald twilight blue hour sky.
* **Visual Mood:** Majestic glow through the glass curtain spine symbolizing 24/7 financial systems and digital transformation, warm reflections on paved stone.
* **Production File:** `/public/images/cbos/hero/cbos-hero-twilight-prestige.webp`
* **Prompt Used:**
  > "A prestigious dusk-twilight architectural editorial photograph of the Central Bank of Sudan headquarters in Khartoum, illuminated by warm bronze and institutional gold architectural lighting. Shot on a Canon EOS R5 II with a 50mm f/1.4 lens during blue hour. The building's majestic geometric facade and glass curtain spine glow with sovereign elegance, symbolizing 24/7 digital financial connectivity and national economic stability. Deep emerald twilight sky above with a soft gradient into night, conveying quiet power. Refined paved stone plaza in the foreground with subtle reflections of warm facade lighting and neat landscaped date palms. World-class sovereign financial institution aesthetic, deep forest green and gold harmony matching CBOS identity, cinematic, authoritative, strictly photorealistic."

---

### 5.2 Rationale for Selecting Route A
1. **Unmistakable Sovereign Authenticity:** Route A accurately honors the real, physical geometry of the Central Bank of Sudan building in Khartoum (as preserved in official records) without any synthetic or exaggerated fantasy structures.
2. **Compositional Symmetry & Typography Negative Space:** By placing the primary architectural massing on one side and providing open plaza and sky gradient on the opposite side, it allows the Arabic and English headlines to sit with zero visual competition.
3. **Harmonious Palette:** The natural sandstone white, subtle gold morning light, and deep foliage greens blend seamlessly with the CBOS institutional brand colors (`#032A1E`, `#B99553`, `#F6F4EE`).
4. **Photorealistic Credibility:** Zero AI glare, zero unnatural reflections; feels authentically captured by an architectural master photographer using a medium-format camera.

---

### 5.3 Responsive Integration & Contrast Governance
* **Desktop (≥ 640px):** Renders `cbos-hero-building-khartoum-premium.webp` with `object-[left_center]` in RTL and `object-[right_center]` in LTR.
* **Mobile (< 640px):** Switches to dedicated portrait crop `cbos-hero-building-khartoum-premium-mobile.webp` with `object-top` positioning.
* **Direction-Aware Scrims:** A custom CSS gradient (`from-[#032A1E] via-[#032A1E]/90 to-[#032A1E]/40`) is layered on top of the image to ensure 100% WCAG AAA readability for white and gold text while letting the building shine through on the opposite side.
* **Guilloche Vector Integration:** Subtle banknote security curves (`opacity-20`) float seamlessly over the architecture, uniting monetary security with physical permanence.

