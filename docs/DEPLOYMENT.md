# CBOS Digital Platform — Production Deployment Guide
**Central Bank of Sudan — Sovereign Digital Infrastructure**
**Canonical Project ID: `cbos-new`**

---

## 1. Architecture & Deployment Stack
- **Framework:** Next.js 15.1.7 (App Router, Server & Client Components)
- **Runtime:** React 19.0.0 & Node.js >= 20 LTS (v24.16.0 verified)
- **Styling:** Tailwind CSS 3.4.17 with custom sovereign design tokens
- **Vector Linework:** Sovereign Guilloche CSS linework + Framer Motion 12
- **Source Control:** GitHub (`samieltayeb-oss/cbos-new`)
- **Hosting & Edge Delivery:** Vercel Global Edge Network (`cbos-new.vercel.app`)

---

## 2. Local Development & Verification Workflow

### Installation
```powershell
cd "c:\Users\mcreg\Desktop\CENTRAL BANK OF SUDAN\cbos-new"
npm install
```

### Static Type Checking
```powershell
npm run typecheck
```

### Local Development Server
```powershell
npm run dev
# Server accessible at http://localhost:3000
```

### Production Build
```powershell
npm run build
```

---

## 3. GitHub Source Control Integration

1. **Repository Setup:**
   ```powershell
   git init
   git branch -M main
   git add .
   git commit -m "feat: complete sovereign digital platform for Central Bank of Sudan"
   ```

2. **Publish to GitHub:**
   ```powershell
   gh repo create cbos-new --public --source=. --push
   ```

---

## 4. Vercel Production Deployment Workflow

Both GitHub CLI (`gh`) and Vercel CLI (`vercel`) are pre-authenticated under the owner `samieltayeb-oss`.

### Deploy to Production Edge
```powershell
vercel --prod --yes
```

### Environment Variables
Production variables are defined in `.env.example`:
- `NEXT_PUBLIC_SITE_URL=https://cbos-new.vercel.app`
- `NEXT_PUBLIC_DEFAULT_LOCALE=ar`

---

## 5. Security Headers & Sovereign Hardening
Configured in `next.config.mjs`:
- `Strict-Transport-Security: max-age=63072000; includeSubDomains; preload`
- `X-Content-Type-Options: nosniff`
- `X-Frame-Options: SAMEORIGIN`
- `Referrer-Policy: strict-origin-when-cross-origin`
- `Permissions-Policy: camera=(), microphone=(), geolocation=()`

---

## 6. Production Health Check Checklist
- [x] Arabic RTL layout is default with seamless LTR English toggle.
- [x] All 11 inner page routes respond with HTTP 200.
- [x] Category 1 authentic CBOS assets render with zero broken links.
- [x] Global Command Search (`/` key) indexes all pages, circulars, and entities.
- [x] Exchange rates calculator and time series charts render interactively.
- [x] Banknote interactive hotspot inspector functions across all denominations.
