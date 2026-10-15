# Hero & Banner Image Audit

Audit of hero and banner images across all 12 pages of the Fuevation website.

- Every page has **1 hero image**. Only the Home page has extra banner/section images (5 more).
- The solution pages' "Ready to recover more value…" CTA sections have no image.
- **8 of the 17 hero/banner images are PNG.**
- Images inside HTML comments are not included. No CSS background images are used.

## Hero images (one per page)

| # | Page | Hero heading | Image (`assets/`) | Format | Size | Dimensions |
|---|---|---|---|---|---|---|
| 1 | Home `index.html` | Maximizing Value Across the Electronics Lifecycle | `Maximizing Value Across the Electronics.webp` | WebP | 288 KB | 850×850 |
| 2 | Solutions `solutions/index.html` | Solve Every Electronics Lifecycle Challenge… | `Solve Every Electronics Lifecycle Challenge with the Right Recovery Solution.webp` | WebP | 191 KB | 850×850 |
| 3 | Battery Recycling | Battery Recovery & Responsible Recycling | `Battery Recovery & Responsible Recycling.webp` | WebP | 190 KB | 850×850 |
| 4 | E-Waste Management | Corporate E-Waste Management & Responsible Recycling | `Corporate E-Waste Management & Responsible Recycling.webp` | WebP | 538 KB | 1273×1236 |
| 5 | Electronics Refurbishment | Electronics Refurbishment & Repair | `Electronics Refurbishment & Repair.webp` | WebP | 230 KB | 800×800 |
| 6 | Electronics Value Recovery | Maximize Value From Every Electronics Asset | `Maximizing Value Across the Electronics.webp` ⚠ same as Home | WebP | 288 KB | 850×850 |
| 7 | EOL Inventory Management | End-of-Life Electronics Inventory Recovery | `end of life electronics inventory recovery.webp` | WebP | 381 KB | 1685×933 |
| 8 | EPR Compliance | End-to-End EPR Compliance for Electronics | `End-to-End EPR Compliance for Electronics.webp` | WebP | 163 KB | 800×800 |
| 9 | Excess Inventory Management | Turn Excess Electronics Inventory Into Recoverable Value | `Turn Excess Electronics Inventory Into Recoverable Value.webp` | WebP | 202 KB | 800×800 |
| 10 | **Inventory Liquidation** | Recover Value From Excess & Obsolete Electronics Inventory | `liquedation.png` | **PNG** | **2.04 MB** | 1536×1024 |
| 11 | **Parts Harvesting** | Recover Value From Every Usable Component | `electronics-part-harvesting.png` | **PNG** | **2.41 MB** | 1536×1024 |
| 12 | Reverse Logistics | Reverse Logistics Built for Electronics Recovery | `Reverse Logistics Built for Electronics Recovery.webp` | WebP | 113 KB | 800×800 |

Solution pages live at `solutions/<name>/index.html`.

## Extra banner & section images (Home page only)

| Section | Image (`assets/`) | Format | Size | Dimensions |
|---|---|---|---|---|
| **Future**: "The Future of Electronics Isn't Just Manufacturing…" | `image for section 2 (3).png` | **PNG** | 925 KB | 1254×712 |
| **Technology**: "Technology That Powers Smarter Recovery Decisions" | `dashboard_mockup1.png` | **PNG** | 1.37 MB | 1802×872 |
| **Why Choose**: "Why Organizations Choose Fuevation" | `plant-seelding.png` | **PNG** | 1.77 MB | 1254×1245 |
| **CTA banner**: "Let's Build the Future of Electronics Together" (left) | `footer-left.png` | **PNG** | 2.21 MB | 1536×1024 |
| **CTA banner**: "Let's Build the Future of Electronics Together" (right) | `right side.png` | **PNG** | 2.07 MB | 1530×1028 |

## Findings

- **7 PNGs to convert to WebP:** 2 heroes (Inventory Liquidation, Parts Harvesting) and 5 Home page sections. Together they're about **12.8 MB**. The WebP heroes are 113–538 KB each, so these PNGs are 4–20 times heavier.
- **Inventory Liquidation and Parts Harvesting** are the only two heroes not in WebP. Their PNGs are also the social-share (og/twitter) images in each page's `<head>`. Keep a PNG/JPG for social sharing, since some platforms don't show WebP previews.
- **Duplicate hero:** Electronics Value Recovery uses the same image as the Home hero.
- **Inconsistent sizes:** most heroes are 800–850px squares, but E-Waste (1273×1236) and EOL (1685×933) are bigger and a different shape.
- The 6 small logos (header, footer, investor logos) are 2–36 KB PNGs and are fine as they are.
