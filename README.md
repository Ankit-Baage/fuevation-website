# Fuevation Website

Marketing website for Fuevation — electronics lifecycle, value recovery, and sustainability solutions.

**Live site:** https://ankit-baage.github.io/fuevation-website/

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
