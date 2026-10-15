# Fuevation Website

Marketing website for Fuevation — electronics lifecycle, value recovery, and sustainability solutions.

**Live site:** https://ankit-baage.github.io/fuevation-website/

## Recent changes

**2026-10-15 — Clean URLs, footer links, nav fix** (re-applied after the rollback)
- Clean URLs with no `.html`: home is `/`, Solutions overview moved to [`/solutions/`](https://ankit-baage.github.io/fuevation-website/solutions/) (old `solutions.html` redirects)
- Footer links go to the Solutions overview and each solution page: [view footer](https://ankit-baage.github.io/fuevation-website/#site-footer)
- Fixed nav links flashing orange before turning blue on the home page

**2026-10-15** ([#7](https://github.com/Ankit-Baage/fuevation-website/pull/7))
- SEO keywords added to the `<meta name="keywords">` tag of all 10 solution pages (no page content changed)

**2026-10-15 18:38 IST — Rollback**
- Code restored to its state at `8c6b2ef`, before the SEO keyword changes
- Cause: commit `1b9e86e` by **manisha-mobi** (2026-10-14 18:43 IST), "Add SEO keywords from Keyword Master to solution pages", added templated keyword-stuffing sentences and `meta keywords` tags to all 10 solution pages
- Also reverted the commit that followed it, `109df57` by Ankit Baage (2026-10-15 13:52 IST), the last commit before the rollback: clean URLs, footer solution links, nav color flash fix

**2026-10-14** ([#4](https://github.com/Ankit-Baage/fuevation-website/pull/4))
- Parts Harvesting hero now WebP (209 KB, was 2.4 MB PNG): [view page](https://ankit-baage.github.io/fuevation-website/solutions/parts-harvesting/)

**2026-10-12** ([#1](https://github.com/Ankit-Baage/fuevation-website/pull/1), [#2](https://github.com/Ankit-Baage/fuevation-website/pull/2), [#3](https://github.com/Ankit-Baage/fuevation-website/pull/3))
- Asset files renamed to URL-safe kebab-case; fixed icons that did not load on GitHub Pages
- Home page heading order fixed for accessibility
- Responsive, compressed WebP for the home hero and map images: [view home](https://ankit-baage.github.io/fuevation-website/)
- Fonts and analytics no longer block page rendering
- Smoother nav scroll highlighting (no forced reflow)
- Header/footer preloaded so they appear sooner

## Pages

- **Home** — [`index.html`](index.html)
- **Solutions overview** — [`solutions/index.html`](solutions/index.html) → `/solutions/`
- **Solution pages** — [`solutions/`](solutions/)
  - Battery Recycling
  - E-Waste Management
  - Electronics Refurbishment
  - Electronics Value Recovery
  - EOL Inventory Management
  - EPR Compliance
  - Excess Inventory Management
  - Inventory Liquidation
  - Parts Harvesting
  - Reverse Logistics

## Structure

```
index.html            Home page
solutions/index.html  Solutions overview (/solutions/)
solutions/<name>/     Individual solution pages
components/           Shared header, footer, CTA (loaded by components.js)
expert-contact/       "Talk to Our Experts" contact modal
assets/               Images, icons, logos
index.css, main.js    Home page styles and scripts
analytics.js          Analytics
```

## Run locally

Static site — no build step. Serve the folder with any static server:

```bash
python -m http.server 8000
```

Then open http://localhost:8000.

## Deployment

Hosted on GitHub Pages from the `main` branch (root). Every push to `main` redeploys automatically in about a minute.

Use relative paths for assets and links (e.g. `assets/logo.png`, `../../assets/logo.png` in solution pages), not root-absolute ones (`/assets/logo.png`) — the site is served under the `/fuevation-website/` subpath. File names are case-sensitive on GitHub Pages.
testing new branch.