import os
import sys
import re
import json
import csv
import urllib.request
import ssl
import urllib.parse
from datetime import datetime

sys.stdout.reconfigure(encoding='utf-8')

BASE_DIR = os.path.abspath("cbos-new")
SOURCE_ASSETS_DIR = os.path.join(BASE_DIR, "cbos-source-assets")
ORIGINAL_DIR = os.path.join(SOURCE_ASSETS_DIR, "original")
INVENTORY_DIR = os.path.join(SOURCE_ASSETS_DIR, "inventory")
REFS_DIR = os.path.join(SOURCE_ASSETS_DIR, "references")
DOCS_DIR = os.path.join(BASE_DIR, "docs")

categories = [
    "homepage", "news", "leadership", "buildings", "currency",
    "publications", "payments", "financial-inclusion", "cybersecurity",
    "events", "other"
]

for cat in categories:
    os.makedirs(os.path.join(ORIGINAL_DIR, cat), exist_ok=True)
os.makedirs(INVENTORY_DIR, exist_ok=True)
os.makedirs(REFS_DIR, exist_ok=True)
os.makedirs(DOCS_DIR, exist_ok=True)

# Read HTML
html_path = "NIPS_Core_Engine/cbos_page.html"
with open(html_path, 'r', encoding='utf-8') as f:
    html = f.read()

# 1. Extract Navigation Structure
nav_links = re.findall(r'<a[^>]+href=[\'"]([^\'"]+)[\'"][^>]*>(.*?)</a>', html, re.S | re.I)
nav_inventory = []
for href, text in nav_links:
    clean_text = re.sub(r'<[^>]+>', '', text).strip()
    if clean_text and not href.startswith('#') and not href.startswith('javascript:'):
        full_href = urllib.parse.urljoin("https://cbos.gov.sd", href)
        nav_inventory.append({"title": clean_text, "href": href, "full_url": full_href})

print(f"Extracted {len(nav_inventory)} navigation links from CBOS homepage.")

# 2. Extract All Images
img_matches = re.finditer(r'<img[^>]+src=[\'"]([^\'"]+)[\'"][^>]*>', html, re.I)
discovered_images = []
seen_urls = set()

for m in img_matches:
    img_tag = m.group(0)
    src = m.group(1)
    alt_m = re.search(r'alt=[\'"]([^\'"]*)[\'"]', img_tag, re.I)
    alt = alt_m.group(1) if alt_m else ""
    full_url = urllib.parse.urljoin("https://cbos.gov.sd", src)
    if full_url not in seen_urls:
        seen_urls.add(full_url)
        discovered_images.append({
            "src": full_url,
            "alt": alt,
            "raw_tag": img_tag
        })

print(f"Extracted {len(discovered_images)} unique images from CBOS HTML.")

# Setup downloader
ctx = ssl.create_default_context()
ctx.check_hostname = False
ctx.verify_mode = ssl.CERT_NONE
headers = {'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)'}

inventory_records = []

for idx, img in enumerate(discovered_images, 1):
    url = img["src"]
    parsed = urllib.parse.urlparse(url)
    filename = os.path.basename(parsed.path)
    if not filename or '.' not in filename:
        continue
    
    fname_lower = filename.lower()
    alt_lower = img["alt"].lower()
    
    # Classify
    if any(k in fname_lower or k in alt_lower for k in ["logo", "emblem", "crest", "شعار", "ختم"]):
        cat = "other"
        classification = "CATEGORY 1 — OFFICIAL / DOCUMENTARY ASSET"
        strategy = "PRESERVE"
    elif any(k in fname_lower or k in alt_lower for k in ["governor", "board", "director", "محافظ", "مجلس", "إدارة"]):
        cat = "leadership"
        classification = "CATEGORY 1 — OFFICIAL / DOCUMENTARY ASSET"
        strategy = "PRESERVE"
    elif any(k in fname_lower or k in alt_lower for k in ["banknote", "currency", "500", "1000", "2000", "100", "front", "resized", "عملة", "فئات", "جنيه"]):
        cat = "currency"
        classification = "CATEGORY 1 — OFFICIAL / DOCUMENTARY ASSET"
        strategy = "PRESERVE"
    elif any(k in fname_lower or k in alt_lower for k in ["headquarter", "building", "branch", "مبنى", "رئاسة", "فرع"]):
        cat = "buildings"
        classification = "CATEGORY 1 — OFFICIAL / DOCUMENTARY ASSET"
        strategy = "PRESERVE"
    elif any(k in fname_lower or k in alt_lower for k in ["bulletin", "digest", "annual", "study", "masrafi", "nashra", "studies", "cover", "تقرير", "نشرة", "مجلة"]):
        cat = "publications"
        classification = "CATEGORY 1 — OFFICIAL / DOCUMENTARY ASSET"
        strategy = "PRESERVE"
    elif any(k in fname_lower or k in alt_lower for k in ["slider", "stratigic", "anniversary", "home"]):
        cat = "homepage"
        classification = "CATEGORY 1 — OFFICIAL / DOCUMENTARY ASSET"
        strategy = "PRESERVE"
    elif any(k in fname_lower or k in alt_lower for k in ["payment", "nips", "rtgs", "pos", "atm"]):
        cat = "payments"
        classification = "CATEGORY 2 — EDITORIAL / ATMOSPHERIC"
        strategy = "REGENERATE"
    elif any(k in fname_lower or k in alt_lower for k in ["inclusion", "microfinance"]):
        cat = "financial-inclusion"
        classification = "CATEGORY 2 — EDITORIAL / ATMOSPHERIC"
        strategy = "REGENERATE"
    else:
        cat = "other"
        classification = "CATEGORY 2 — EDITORIAL / ATMOSPHERIC"
        strategy = "REVIEW"

    clean_filename = f"{cat}_{idx:03d}_{filename}"
    target_path = os.path.join(ORIGINAL_DIR, cat, clean_filename)
    rel_path = f"cbos-source-assets/original/{cat}/{clean_filename}"
    
    # Download
    size = 0
    try:
        req = urllib.request.Request(url, headers=headers)
        with urllib.request.urlopen(req, context=ctx, timeout=8) as resp:
            data = resp.read()
        with open(target_path, 'wb') as f_out:
            f_out.write(data)
        size = len(data)
        print(f"Downloaded [{idx}/{len(discovered_images)}] {filename} -> {cat} ({size:,} B)")
    except Exception as e:
        print(f"Could not download {url}: {e}")

    ext = os.path.splitext(filename)[1].replace('.', '').lower()
    
    rec = {
        "id": f"CBOS-AST-{idx:04d}",
        "original_url": url,
        "source_page": "https://cbos.gov.sd/ar",
        "original_filename": filename,
        "local_path": rel_path,
        "width": 0,
        "height": 0,
        "size_bytes": size,
        "format": ext,
        "category": cat,
        "classification": classification,
        "language_context": "ar",
        "alt_text": img["alt"],
        "visual_subject": filename.replace('_', ' ').replace('-', ' '),
        "current_usage": "Homepage Section",
        "rights_or_provenance_note": "Central Bank of Sudan Official Website Public Asset",
        "replacement_strategy": strategy,
        "replacement_asset": "",
        "status": "PRESERVE" if strategy == "PRESERVE" else "REVIEW"
    }
    inventory_records.append(rec)

# Save JSON
json_file = os.path.join(INVENTORY_DIR, "assets.json")
with open(json_file, 'w', encoding='utf-8') as f:
    json.dump(inventory_records, f, ensure_ascii=False, indent=2)

# Save CSV
csv_file = os.path.join(INVENTORY_DIR, "assets.csv")
if inventory_records:
    with open(csv_file, 'w', encoding='utf-8', newline='') as f:
        writer = csv.DictWriter(f, fieldnames=inventory_records[0].keys())
        writer.writeheader()
        writer.writerows(inventory_records)

# Save IMAGE-INVENTORY.md
md_file = os.path.join(INVENTORY_DIR, "IMAGE-INVENTORY.md")
with open(md_file, 'w', encoding='utf-8') as f:
    f.write("# Central Bank of Sudan (CBOS) — Visual Asset Archive & Inventory\n\n")
    f.write(f"**Archive Date:** {datetime.now().strftime('%Y-%m-%d %H:%M:%S')}\n")
    f.write(f"**Total Visual Assets Discovered:** {len(inventory_records)}\n\n")
    f.write("## Asset Classification & Governance Rule\n\n")
    f.write("- **CATEGORY 1 — OFFICIAL / DOCUMENTARY ASSET (PRESERVE ONLY):** CBOS logo, national seals, official banknotes, governor & leadership portraits, real headquarters.\n")
    f.write("- **CATEGORY 2 — EDITORIAL / ATMOSPHERIC (REGENERATE):** Sudanese financial environments, markets, agricultural trade, mobile payment adoption, microfinance.\n")
    f.write("- **CATEGORY 3 — DECORATIVE / ABSTRACT (REDESIGN):** Banknote guilloche vectors, Nile hydrographic curves, monetary policy data grids.\n\n")
    f.write("| ID | Category | Original Filename | Classification | Strategy | Local Path | Size |\n")
    f.write("| :--- | :--- | :--- | :--- | :--- | :--- | :--- |\n")
    for r in inventory_records:
        cls_name = r['classification'].split('—')[1].strip() if '—' in r['classification'] else r['classification']
        f.write(f"| {r['id']} | `{r['category']}` | `{r['original_filename']}` | {cls_name} | **{r['replacement_strategy']}** | `{r['local_path']}` | {r['size_bytes']:,} B |\n")

print("Finished asset scraping and inventory generation successfully!")
