import os
import shutil

BASE_DIR = os.path.abspath("cbos-new")
PUBLIC_CBOS = os.path.join(BASE_DIR, "public", "images", "cbos")
OFFICIAL_DIR = os.path.join(PUBLIC_CBOS, "official")

subdirs = [
    "official", "hero", "economy", "banking", "payments",
    "financial-inclusion", "cybersecurity", "trade", "agriculture",
    "research", "abstract"
]

for sd in subdirs:
    os.makedirs(os.path.join(PUBLIC_CBOS, sd), exist_ok=True)

# Copy authentic official assets from cbos-source-assets/original to public/images/cbos/official
SRC_DIR = os.path.join(BASE_DIR, "cbos-source-assets", "original")

assets_to_copy = [
    ("other/other_001_logo.png", "cbos-logo-white.png"),
    ("other/other_012_%D8%A7%D9%84%D8%B4%D8%B9%D8%A7%D8%B1%20%D8%A7%D8%B2%D8%B1%D9%82_3.jpg", "cbos-emblem-blue.jpg"),
    ("currency/currency_004_2000front.jpg", "banknote-2000-front.jpg"),
    ("currency/currency_005_500-front1_resized.jpg", "banknote-500-front.jpg"),
    ("leadership/leadership_006_governor_home_page_final.png", "governor-portrait.png"),
    ("buildings/buildings_007_headquarter.png", "cbos-headquarters.png"),
    ("publications/publications_020_bulitin%20cover_1.jpg", "publication-bulletin.jpg"),
    ("publications/publications_021_digest%20cover_1_0.jpg", "publication-trade-digest.jpg"),
    ("publications/publications_022_MASRAFI01_0.jpg", "publication-masrafi-journal.jpg"),
    ("publications/publications_024_nashra_a_e_0.jpg", "publication-statistical-bulletin.jpg"),
    ("publications/publications_025_STUDIES_ar_0.jpg", "publication-economic-studies.jpg")
]

copied = 0
for src_rel, dest_name in assets_to_copy:
    src_full = os.path.join(SRC_DIR, src_rel)
    if os.path.exists(src_full):
        dest_full = os.path.join(OFFICIAL_DIR, dest_name)
        shutil.copyfile(src_full, dest_full)
        copied += 1
        print(f"Copied {src_rel} -> {dest_name} ({os.path.getsize(dest_full):,} bytes)")

# Also copy favicon
fav_src = "NIPS_Core_Engine/cbos_favicon.ico"
if os.path.exists(fav_src):
    shutil.copyfile(fav_src, os.path.join(BASE_DIR, "public", "favicon.ico"))
    print("Copied favicon.ico to public/favicon.ico")

print(f"Total authentic official assets copied: {copied}")
