# Solutions Pages – Implementation Audit

**Date:** 2026-10-09
**Checked against:** `Solutions Page - Content.docx` (10 pages + SEO handoff checklist) and `Addition 7 FAQ.docx` (7 extra FAQs per page)
**Analytics reference:** `fuevation-website-updated (28)` (`analytics.js` + `GTM-GA4-IMPLEMENTATION.md`)
**Method:** Scripted comparison of every doc field against the live HTML (title, meta, OG/Twitter, canonical, H1, hero, every section, FAQ text + FAQPage schema, CTA, related links, images, JSON-LD validity), plus a tag-balance check on all HTML files. Script flags were then checked by hand.

Legend: 🔴 = error / must fix · 🟠 = mismatch vs doc · 🟡 = minor / cosmetic · ✅ = OK · 🔧 = fixed in this pass

---

## 1. Analytics (GTM + GA4)

### 1.1 Status

Analytics was **already installed** in this project, so nothing needed to be added. It matches the reference:

| Check | Result |
|---|---|
| `analytics.js` vs reference | ✅ Byte-identical (`GTM-XXXXXXX`, `G-XXXXXXXXXX` dummy IDs, `XXXX` safety switch) |
| `<script src="/analytics.js">` right after `<head>` (line 5) | ✅ On all 12 reference pages |
| GTM `<noscript>` iframe right after `<body>` | ✅ On all 12 reference pages |
| Duplicate snippets | ✅ None (1 of each per page) |
| Stray `gtag`/GTM code anywhere else | ✅ None |
| `components.js`, `expert-contact/*` (the listener depends on their classes) | ✅ Identical to reference |
| Events: `solution_page_view`, `cta_click`, `contact_form_start`, `contact_form_submit`, `lead_generated` | ✅ Match the doc's Analytics checklist row |

### 1.2 Discrepancies vs reference

| # | Item | This project | Reference (28) | Impact |
|---|---|---|---|---|
| A1 | 🟠 `solutions-updated-content.html` (draft) | **Has** GTM head + noscript | Deliberately **excluded** ("draft, not in sitemap") | Draft page visits will be tracked with `page_type: other` and add noise to GA4. The draft is also `index, follow` with canonical → `solutions.html`. **Decision needed:** keep tracking it or remove it. |
| A2 | 🟡 Noscript comment text | `<!-- Google Tag Manager (GTM) - NOSCRIPT SNIPPET [PLACEHOLDER ID] - replace GTM-XXXXXXX ... -->` | `<!-- Google Tag Manager (noscript) -->` | Cosmetic. The reference doc's rollback step ("delete the 3-line `(noscript)` block") won't match by text search. |
| A3 | 🟡 Indentation | Snippets at column 0 | Indented 4 spaces | Cosmetic only. |
| A4 | 🟡 No implementation doc | — | `GTM-GA4-IMPLEMENTATION.md` exists | The go-live checklist (GTM variables, triggers, GA4 tags, custom dimensions) isn't in this project. Copy it over if needed. |

### 1.3 Still to do at go-live (same as reference)
- Replace `GTM-XXXXXXX` / `G-XXXXXXXXXX` in `analytics.js`, then find-and-replace `GTM-XXXXXXX` in the noscript blocks of all pages.
- There is no real contact form, so `contact_form_start/submit` and `lead_generated` track **modal open / tel / mailto clicks** (intent), not submitted leads.

---

## 2. Tag / markup errors — 🔧 FIXED in this pass

All HTML files pass a tag-balance check after these fixes, and every JSON-LD block now parses as valid JSON.

| # | File | Problem | Fix |
|---|---|---|---|
| T1 | `solutions/electronics-refurbishment.html` (FAQ schema, ~line 83) | 🔴 A `<script type="application/ld+json">` was opened **inside another** `<script>` block: `<script>{ "@context": …, <script>{ … }}</script>`. The FAQPage JSON-LD was **invalid**, so Google ignored the whole FAQ schema. There was also an extra `}` (`}}`) at the end. | Removed the outer orphan `<script>{ "@context"` lines and the extra `}`. JSON-LD now valid (10 Qs). |
| T2 | `solutions/battery-recycling.html` (lines 96 & 186) | 🔴 Markdown fences ```` ```html ```` and ```` ``` ```` pasted into `<head>`. Bare text in `<head>` makes the browser **close `<head>` early**, so the BreadcrumbList schema, stylesheets and other tags after it were parsed into `<body>`. The ``` text could also show on the page. | Removed both fences. |
| T3 | `components/header.html` (line 32) | 🔴 Stray quote: `class="btn btn-primary expert-contact-btn" "` followed by `style=…`. Malformed attribute on the header "Talk to Our Experts" button, which is on every page. | Removed the stray `"`. |
| T4 | `solutions/parts-harvesting.html` (line 247) | 🟡 Missing space between attributes: `class="pr-hero-img-box-img"src="…"` (HTML parse error). | Added the space. |

Not changed (valid HTML, cosmetic only): `<div class ="pr-faq-answer">` (parts-harvesting) and `<div class= "ewaste-faq-answer">` (e-waste) have a space around `=`.

Reference project note: reference `index.html` had a stray `</section>` after `</main>`. In this project that's already corrected and `index.html` is balanced. ✅

---

## 3. Content vs `Solutions Page - Content.docx` + `Addition 7 FAQ.docx`

### 3.1 What is correct on all 10 pages ✅
- **Meta title** matches the doc exactly (10/10)
- **Meta description** (`<meta name="description">`) matches the doc exactly (10/10)
- **Exactly one H1**, matching the doc's H1 (10/10)
- Hero subtext, business-problem text and value-proposition text are present (wording issues below)
- Solution scope, business outcomes, "Who this is for" and related-solutions items: **all present** with the right count (wording/case issues below)
- **FAQ:** all 3 base + 7 added FAQs (10 per page) are visible in HTML **and** in the FAQPage schema, with matching answers (10/10 pages after fix T1)
- Related cards are clickable `<a>` links, every link resolves, and none point to the page itself
- Self-referencing canonical (10/10); all 10 URLs are in `sitemap.xml`; the hub `solutions.html` links all 10
- Service + BreadcrumbList JSON-LD present on every page
- Visible breadcrumb Home / Solutions / Current on every page
- No proprietary-process / MOAT content found

### 3.2 Per-page discrepancies

#### 01. Electronics Value Recovery — `solutions/electronics-value-recovery/` (`solutions/electronics-value-recovery/index.html`)
| # | Sev | Field | Doc | Site |
|---|---|---|---|---|
| 1.1 | 🟠 | twitter:description | "…end-of-life electronics **through refurbishment, liquidation, parts recovery and recycling.**" | Truncated: "Recover maximum value from excess, returned, damaged and end-of-life electronics." |
| 1.2 | 🟡 | Business outcome | "Reduced inventory **and** disposal pressure" | "Reduced Inventory **&** Disposal Pressure" |
| 1.3 | 🟡 | Scope / outcomes / industries | Sentence case | Title Case (13 items) |
| 1.4 | 🔴 | og:image / twitter:image | — | `assets/image-without-bg-6.png` **does not exist** |
| 1.5 | 🔧 | BreadcrumbList schema | — | Last item had no `item` URL. **Fixed (URL pass).** |

#### 02. Electronics Inventory Liquidation — `solutions/inventory-liquidation/` (`solutions/inventory-liquidation/index.html`)
| # | Sev | Field | Doc | Site |
|---|---|---|---|---|
| 2.1 | 🔧 | og:url | `…/solutions/inventory-liquidation/` (= canonical) | Was `…/electronics-inventory-liquidation.html` (old slug). **Fixed (URL pass).** |
| 2.2 | 🟠 | twitter:title | "Electronics Inventory Liquidation \| Fuevation" | "Inventory Liquidation \| Fuevation" |
| 2.3 | 🔴 | twitter:image | — | `assets/liquidation.png` **does not exist** (file on disk is `liquedation.png`) |
| 2.4 | 🟡 | Text | "value-recovery challenge**—**not simply…" (em dash) | "challenge**-**not" (hyphen, reads as one hyphenated word) |
| 2.5 | 🟡 | Scope / outcomes / industries | Sentence case | Title Case (15 items) |

#### 03. Electronics Refurbishment — `solutions/electronics-refurbishment/` (`solutions/electronics-refurbishment/index.html`)
| # | Sev | Field | Doc | Site |
|---|---|---|---|---|
| 3.1 | 🔧 | FAQPage schema | — | Was invalid JSON (nested `<script>`). **Fixed (T1).** |
| 3.2 | 🔧 | BreadcrumbList schema | Home → **Solutions** → Current | Position 2 pointed to `/#capabilities`. **Fixed (URL pass)** → `/solutions.html`. |
| 3.3 | 🔴 | og:image / twitter:image | — | `assets/refurbishment.png` **does not exist** |

#### 04. Excess Electronics Inventory Management — `solutions/excess-inventory-management/` (`solutions/excess-inventory-management/index.html`)
| # | Sev | Field | Doc | Site |
|---|---|---|---|---|
| 4.1 | 🟠 | og:description + twitter:description | "Recover working capital from excess electronics inventory through assessment, refurbishment, remarketing, liquidation and responsible recovery." | "Manage excess electronics inventory through assessment, refurbishment, remarketing, liquidation and value recovery with Fuevation." |
| 4.2 | 🟡 | Service schema description | Same as meta description | Old text (same as 4.1) |
| 4.3 | 🔴 | og:image, twitter:image, ImageObject schema | — | `assets/hero-excess.jpeg` **does not exist** |

#### 05. EOL Electronics Inventory Management — `solutions/eol-inventory-management/` (`solutions/eol-inventory-management/index.html`)
| # | Sev | Field | Doc | Site |
|---|---|---|---|---|
| 5.1 | 🟠 | twitter:description | "Manage EOL electronics through a reuse-first recovery process covering refurbishment, liquidation, parts harvesting and recycling." | "Manage end-of-life electronics through reuse-first recovery, refurbishment, liquidation, parts recovery and responsible recycling." |
| 5.2 | 🟡 | Service schema description | Doc meta description | Different text |
| 5.3 | 🔴 | og:image / twitter:image | — | `assets/End-of-life-electronics-inventory-recovery.jpeg` **does not exist** |

#### 06. Corporate E-Waste Management — `solutions/e-waste-management/` (`solutions/e-waste-management/index.html`)
| # | Sev | Field | Doc | Site |
|---|---|---|---|---|
| 6.1 | 🟠 | twitter:description | "End-to-end e-waste management covering collection, reverse logistics, recovery, recycling and traceability." | "Corporate e-waste management for electronics collection, recovery, reverse logistics, responsible recycling and traceable end-of-life asset programs." |
| 6.2 | 🔴 | og:image / twitter:image | — | `assets/E-Waste%20management.png` **does not exist** (on disk: `E-Waste management.webp`) |

#### 07. EPR Compliance — `solutions/epr-compliance/` (`solutions/epr-compliance/index.html`)
| # | Sev | Field | Doc | Site |
|---|---|---|---|---|
| 7.1 | 🟠 | og:description | "EPR support across e-waste, battery and circularity requirements, reporting, traceability and responsible recovery." | "EPR compliance services for electronics covering e-waste, battery EPR, reporting, traceability, recovery and circularity support." |
| 7.2 | 🟡 | Hero subtext | "…business process**—**not just a compliance task." | "process**-**not" |
| 7.3 | 🔴 | og:image / twitter:image | — | `assets/Epr.png` **does not exist** (on disk: `Epr compliance for electronics.png`) |

#### 08. Electronics Reverse Logistics — `solutions/reverse-logistics/` (`solutions/reverse-logistics/index.html`)
| # | Sev | Field | Doc | Site |
|---|---|---|---|---|
| 8.1 | 🟠 | twitter:description | "Electronics reverse logistics covering collection, returns, movement, traceability and value recovery." | "…covering returns, excess inventory, asset movement, recovery visibility, traceability and value recovery." |
| 8.2 | 🟡 | Hero subtext | "…value chain**—**not simply…" | "chain**-**not" |
| 8.3 | ✅ | Outcome icon "Structured reverse movement" | — | **False alarm.** `src` already has the same double space as the file; it resolves. (Optional: rename asset without spaces.) |

#### 09. Electronics Parts Harvesting — `solutions/parts-harvesting/` (`solutions/parts-harvesting/index.html`)
| # | Sev | Field | Doc | Site |
|---|---|---|---|---|
| 9.1 | 🟠 | twitter:description | "Recover usable components through structured assessment, harvesting, grading and reuse pathways." | "Electronics parts harvesting and component recovery through assessment, grading, reuse and value recovery pathways for electronics assets." |
| 9.2 | 🟡 | Service schema description | Doc meta description | Different text (same as 9.1) |
| 9.3 | 🔧 | Hero `<img>` | — | Missing attribute space. **Fixed (T4).** |

#### 10. Battery Recycling & Recovery — `solutions/battery-recycling/` (`solutions/battery-recycling/index.html`)
| # | Sev | Field | Doc | Site |
|---|---|---|---|---|
| 10.1 | 🔴 | Business problem text | "Batteries require responsible end-of-life management because…" | **Duplicated phrase**: "Batteries require responsible end-of-life management Batteries require responsible end-of-life management because…" |
| 10.2 | 🔧 | Service + WebPage schema `@id` / `url` | `…/solutions/battery-recycling/` | Was `…/battery-recycling-recovery.html` (old slug, 5 places). **Fixed (URL pass).** |
| 10.3 | 🟠 | twitter:description | "Battery recovery and recycling solutions with traceability, compliance and responsible processing." | "Battery recycling and recovery solutions for electronics assets, supporting responsible end-of-life management, material recovery and applicable compliance requirements." |
| 10.4 | 🟡 | Service schema description | Doc meta description | Old text (same as 10.3) |
| 10.5 | ✅ | Scope icon "Consumer electronics batteries" | — | **False alarm.** `src` already has the same double space as the file; it resolves. (Optional: rename asset without spaces.) |
| 10.6 | 🔴 | og:image / twitter:image | — | `assets/battery-recycling.png` **does not exist** |
| 10.7 | 🔧 | `<head>` | — | Stray ```` ``` ```` fences. **Fixed (T2).** |

---

## 4. Site-wide / SEO-checklist discrepancies

| # | Sev | Checklist item | Finding |
|---|---|---|---|
| G1 | 🔴 | **Open Graph:** "Unique OG title, description **and image** per solution page" | **9 of 10** pages point og:image/twitter:image to files that don't exist in `/assets` (only `parts-harvesting` resolves). Social previews will show no image. Each page already has a matching hero `.webp`/`.png` that could be used. |
| G2 | 🟠 | **Descriptions:** "Use the supplied unique meta descriptions" | `<meta name="description">` is correct everywhere, but og:/twitter:description still have **old copy** on 8 pages (01, 04, 05, 06, 07, 08, 09, 10). |
| G3 | 🔧 | **URL** | **Fixed (URL pass).** Pages moved to `solutions/<slug>/index.html` and served as `/solutions/<slug>/`, matching the doc. Canonical, og:url, schema, sitemap and internal links updated. |
| G4 | 🔧 | **Breadcrumb schema** | **Fixed (URL pass).** Position 2 "Solutions" now `https://fuevation.com/solutions.html` on all 10 pages. |
| G5 | 🟠 | **Schema:** "retain sitewide Organization/WebSite schema" | `index.html` (homepage) has **no JSON-LD at all**. Organization/WebSite schema exists only on `solutions.html` (and inline on a few solution pages). |
| G6 | 🟡 | **CTA label** | Doc: primary CTA "Talk to Fuevation", final CTA "TALK TO FUEVATION". Site: "Talk to Our Experts" on all pages (hero + final CTA + header). Probably an intentional brand choice. **Decision needed.** |
| G7 | 🟡 | **Em dashes** | The doc's "—" is replaced by a bare hyphen with no spaces ("assets-without", "process-not") in the value-proposition text on 9 pages and in 3 hero/problem lines. Reads as a hyphenated word. Suggest `—` or ` – `. |
| G8 | 🟡 | **Case** | Scope/outcome/industry labels are sentence case on 8 pages but Title Case on 01 and 02. Inconsistent across pages. |
| G9 | 🟡 | **Heading hierarchy** | Card titles use `<h4>` directly under `<h2>` (skipping `<h3>`) on 5 pages (battery, refurbishment, liquidation, parts, reverse-logistics). The other 5 use `<h3>`. Minor accessibility/SEO point. |
| G10 | 🟡 | **Service schema** | `url` added on 01, 02, 03, 06, 07, 08 (🔧 URL pass). Description ≠ doc meta description on 04, 05, 09, 10. |
| G11 | 🟡 | **Images:** "WebP/AVIF where possible" | Hero images are mostly `.webp` ✅. Exception: parts-harvesting hero is `.png` (`electronics-part-harvesting.png`). |

---

## 5. Decisions for you

> URL items (2.1, 10.2, G3, G4, 8.3, 10.5) resolved in the URL pass, see section 7.

1. **A1:** Keep GTM on the draft `solutions-updated-content.html`, or remove it as the reference did?
2. **G1:** OK to point each page's og:image/twitter:image (and the ImageObject on 04) to the existing hero image in `/assets`?
3. **G2 / 1.1 / 2.2:** Sync og:/twitter: title + description (and Service schema description) to the doc's meta copy?
4. **2.1, 10.2, G4:** Fix og:url (liquidation), the battery schema URLs, and breadcrumb position 2 → `https://fuevation.com/solutions.html`?
5. **8.3, 10.5:** Fix the two broken icons by renaming the double-space asset files, or by updating the `src`?
6. **10.1:** Remove the duplicated phrase in the battery problem text?
7. **G3:** Keep `.html` URLs or move to the doc's trailing-slash URLs?
8. **G6:** Keep "Talk to Our Experts" or change it to the doc's "Talk to Fuevation"?
9. **G5, G7, G8, G9, G10:** Apply the cosmetic/SEO consistency fixes?

---

## 6. Files changed in this pass

| File | Change |
|---|---|
| `solutions/electronics-refurbishment.html` | T1: removed nested `<script>` wrapper and extra `}` in FAQ JSON-LD |
| `solutions/battery-recycling.html` | T2: removed two stray ```` ``` ```` lines in `<head>` |
| `components/header.html` | T3: removed stray `"` in header CTA button |
| `solutions/parts-harvesting.html` | T4: added missing space between `class` and `src` |
| `IMPLEMENTATION-AUDIT.md` | This report (new) |

No analytics, content, meta or styling changes were made. Everything in sections 3–4 is waiting for your decision.

---

## 7. URL pass (2026-10-10)

Page URLs now follow `Solutions Page - Content.docx` (`/solutions/<slug>/`). Site is not live yet, so no redirects were added.

| File | Change |
|---|---|
| `solutions/<slug>.html` → `solutions/<slug>/index.html` (all 10) | Moved. Relative paths adjusted one level (`../` → `../../`); CSS files stay in `solutions/`, linked as `../x.css`. Links between solution pages → `../<slug>/`. |
| All 10 solution pages | canonical, og:url, schema `url`/`@id` → `https://fuevation.com/solutions/<slug>/`. Old slugs fixed: `electronics-inventory-liquidation.html` (og:url), `battery-recycling-recovery.html` (5× schema), `electronics-parts-harvesting.html` + `parts-recovery.html` (parts-harvesting schema `@id`, not in original audit). |
| All 10 solution pages | Breadcrumb position 2 → `https://fuevation.com/solutions.html`. |
| 6 pages (01, 02, 03, 06, 07, 08) | Service schema `url` added. |
| `solutions/electronics-value-recovery/index.html` | Breadcrumb position 3 `item` URL added. |
| `solutions.html`, `sitemap.xml` | Links and `<loc>` → trailing-slash URLs. |
| `components.js` | `isIndex` was `endsWith("/index.html")`, which would match `/solutions/<slug>/index.html`; now `=== "/" \|\| === "/index.html"`. |

Verified: every relative `href`/`src`/`url()` on the 10 pages + `solutions.html` resolves to a file; all JSON-LD parses; canonical = new URL on all 10.

Not changed: `solutions-updated-content.html` (draft) still links old slugs that never existed (`corporate-e-waste-management.html`, etc.). `analytics.js` already matches `/solutions/<slug>/`.

Local preview needs a server (e.g. VS Code Live Server); opening files directly won't resolve `/solutions/<slug>/`.

---

## 8. Content / meta / consistency pass (2026-10-10)

Resolves 1.1–1.4, 2.2–2.5, 3.3, 4.1–4.3, 5.1–5.3, 6.1–6.2, 7.1–7.3, 8.1–8.2, 9.1–9.2, 10.1, 10.3–10.4, 10.6, and G1, G2, G5, G7, G8, G9, G10.

| Area | Change |
|---|---|
| **og:image / twitter:image** (G1) | All 10 solution pages + homepage now use the page's hero image (`https://fuevation.com/assets/<hero>`, URL-encoded). `og:image:alt` / `twitter:image:alt` added from the hero `alt`. ImageObject schema on 04 and 05 → hero. All referenced images verified to exist. |
| **og/twitter text** (G2) | `og:title`/`twitter:title` = `<title>`, `og:description`/`twitter:description` = meta description (both already match the doc) on all 10 pages. |
| **Service schema description** (G10) | = doc meta description on all pages (changed on 04, 05, 09, 10). |
| **Body text vs doc** | 40 text nodes synced to the doc: em dashes restored (value proposition on all 10 pages + liquidation problem text, EPR and reverse-logistics hero), sentence case on 01 and 02 (G8), "Reduced inventory and disposal pressure" (1.2). |
| **Battery problem text** (10.1) | Duplicated opening phrase removed. |
| **Heading hierarchy** (G9) | Scope / outcome / related card titles `<h4>` → `<h3>` on battery, refurbishment, liquidation, parts, reverse-logistics; matching CSS selectors updated. No visual change (global `* { margin: 0 }`, each rule sets its own font-size). |
| **Homepage** (G5) | Added Organization + WebSite JSON-LD. Removed duplicate second `<title>Fuevation</title>` and second meta description. og:image was `assets/images/og-image.jpg` (missing) → hero. |
| **Domain consistency** | `solutions.html` schema (14×) and `robots.txt` used `https://www.fuevation.com`; changed to `https://fuevation.com` to match canonical + sitemap. |
| **Excess page Organization logo** | Was `assets/logo.png` (missing) → `assets/fuev__logo__blue.png` (header logo). |
| Cosmetic | `class ="…"` / `class= "…"` spacing fixed (parts, e-waste). |

Verified after the pass: all 10 solution pages, `index.html`, `solutions.html`: every JSON-LD block parses, every `fuevation.com/assets/...` URL exists, every relative link resolves, h1–h4/section/p/a balanced, one `<title>` per page.

**Still open**
- G6: decided, keep "Talk to Our Experts".
- G11: parts-harvesting and liquidation heroes are `.png`, not `.webp` (needs image conversion).
- Hero images used for og:image are `.webp` with spaces in names. WebP previews work on Facebook/X/Slack; LinkedIn and some WhatsApp versions may not show WebP. For best results, export 1200×630 JPGs later.
- A1–A4 analytics items (draft page GTM etc.).
- `index.html`: pre-existing `<div>` imbalance (223 open / 225 close); homepage og/twitter description differs from its meta description (homepage not in the doc).
- `solutions-updated-content.html` (draft) untouched.

---

## 9. Full re-audit vs both docs (2026-10-10)

Scripted check of every field in `Solutions Page - Content.docx` and `Addition 7 FAQ.docx` against the live pages (exact text match, then a loose match to classify differences). The checker was negative-tested: a single changed word in an FAQ answer or scope item is flagged.

**Checked and passing on all 10 pages:** URL folder + canonical + og:url = doc URL · meta title · meta description · og/twitter title + description · og/twitter image exists · exactly one H1 = doc H1 · hero heading + subtext · business problem · value proposition · every scope / outcome / "who this is for" item · related solutions (all linked, resolve, not self, 3–5 per page) · all 10 FAQs (3 base + 7 added) visible in HTML **and** in FAQPage schema with identical answers · final CTA heading + text · Service + BreadcrumbList + FAQPage schema valid · breadcrumb Home → Solutions (`/solutions.html`) → page · Service/WebPage description = meta description · every `<img>` has alt and resolves.
**Sitewide passing:** all 10 URLs in sitemap · hub links all 10 · homepage Organization/WebSite schema · no `noindex`.

**Fixed in this pass**
- value-recovery: scope card "Inventory Liquidation" → "Inventory liquidation" (doc case).
- WebPage schema `description` synced to meta description on battery, eol, excess, parts, reverse-logistics (was old copy).

**Remaining (not fixed)**
- G6 ✅ CTA labels: **decided 2026-10-10: keep "Talk to Our Experts"** (intentional deviation from doc "Talk to Fuevation").
- G11 🟡 Hero not WebP: inventory-liquidation (`liquedation.png`), parts-harvesting (`electronics-part-harvesting.png`). Needs image conversion.
- Not script-checkable: UI layout instructions (card counts per row, outcome band, accordion behaviour) and MOAT content: review visually.

---

## 10. Asset, accessibility and performance pass (2026-10-12)

Merged via PRs #1, #2 and #3. Driven by a Lighthouse run on the home page and solution pages.

### 10.1 Asset filenames (PR #1, PR #2)

| Commit | Change |
|---|---|
| `b8b0bb9` | 🔧 Fixed icon casing (EPR, retailers) so icons load on case-sensitive hosts; value-recovery page points at exact asset names. |
| `7ff0d28` | 🔧 Renamed all 230 assets with spaces / `&` / brackets / non-ASCII to lowercase kebab-case (e.g. `1 75 million.svg` → `1-75-million.svg`, `&` → `and`). Every reference rewritten (raw, %-encoded, absolute og:image URLs) in HTML, CSS, JS and docs. Name collisions get an `-alt` suffix. Fixed electronics-refurbishment icon that referenced a non-existent capitalised file. |

This resolves the §8 open item "og:image `.webp` files with spaces in names" (names are now URL-safe; the WebP vs JPG preview note still applies).

### 10.2 Accessibility (PR #2)

| Commit | Change |
|---|---|
| `af21c8e` | 🔧 Home page heading order: three sections jumped h2 → h4 (What Makes Fuevation Different, technology cards, Why Organizations Choose Fuevation). Promoted to h3; CSS retargeted in `index.css` so visuals are unchanged. |

### 10.3 Performance (PR #2, PR #3)

| Commit | Change |
|---|---|
| `428671f` | 🔧 Responsive WebP for home hero donut (was 288 KiB) and section-2 map (was 250 KiB) with `srcset`/`sizes`, `width`/`height` (no CLS), `fetchpriority="high"` on donut (LCP), `loading="lazy"` on map. Originals kept for og:image. Also applied on electronics-value-recovery. |
| `512730b` | 🔧 Tuned `sizes` to measured rendered widths per breakpoint; more variants (donut 300/400/500/600/760/850w, map 380/480/700/940/1254w); stronger compression (donut q62, map q68); dropped unused map 800w. |
| `ce66c02` | 🔧 Removed ~1.5 s of render-blocking requests on all 14 pages: Google Fonts trimmed to Poppins 400–800 only (Outfit, Plus Jakarta Sans and 300 were unused) and loaded non-blocking (preload + `media="print"` swap + `<noscript>`); `analytics.js` loaded `async`; removed duplicate `main.js` in `index.html` `<head>` (it ran twice). `expert-contact.css` stays blocking (styles above-the-fold button). |
| `cb08668` | 🔧 `main.js` nav scroll spy now uses `IntersectionObserver` instead of reading `offsetTop`/`offsetHeight` on every scroll (Lighthouse forced reflow). Rebuilt on debounced resize; nav classes only change when active section changes. |
| `7b7cb7b` | 🔧 Shortened critical request chain (was 690 ms, 3 levels): `components/header.html` and `footer.html` preloaded from each page `<head>` (`as="fetch" crossorigin`, verified reused by `fetch()`); `components.js` skips components with no slot on the page, so the unused `cta.html` request is gone. |

**Still open after this pass**
- G11 🔧 (2026-10-14): parts-harvesting hero now `electronics-part-harvesting.webp` (209 KB, was 2.4 MB PNG). inventory-liquidation hero was already `liquedation.webp`. og:image on both still PNG (kept for LinkedIn/WhatsApp support).
- og:image still WebP; export 1200×630 JPGs for LinkedIn/WhatsApp.
- A1–A4 analytics items unchanged.
