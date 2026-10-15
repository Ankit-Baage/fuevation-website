# Fuevation Website

Marketing website for Fuevation — electronics lifecycle, value recovery, and sustainability solutions.

**Live site:** https://ankit-baage.github.io/fuevation-website/

## Recent changes

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
- **Solutions overview** — [`solutions.html`](solutions.html)
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
solutions.html        Solutions overview
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