# Fuevation Design System

> Source of truth: `index.html` + `index.css`

---

## 1. Color Palette

### Core Colors

| Token              | Hex       | Usage                                                   |
| ------------------ | --------- | ------------------------------------------------------- |
| `--color-primary`  | `#2f3567` | Navy - header text, headings, dark backgrounds, footer  |
| `--color-accent`   | `#ff6f3f` | Orange - CTAs, highlights, eyebrow labels, stat numbers |
| `--color-bg-white` | `#ffffff` | Page background, cards                                  |
| `--color-bg-light` | `#f8fafc` | Alternate section backgrounds                           |
| `--color-border`   | `#e2e8f0` | Card borders, dividers, timeline line                   |

### Text Colors

| Token                  | Hex       | Usage                          |
| ---------------------- | --------- | ------------------------------ |
| `--color-text-dark`    | `#0f172a` | Body text, headings            |
| `--color-text-muted`   | `#475569` | Secondary/muted text           |
| `--text-secondary`     | `#475569` | Section descriptions           |
| `--text-muted`         | `#64748b` | Tertiary text                  |
| `--text-on-dark`       | `#f8fafc` | Text on dark backgrounds       |
| `--text-on-dark-muted` | `#94a3b8` | Muted text on dark backgrounds |

### Background Colors

| Token              | Hex       | Usage                                        |
| ------------------ | --------- | -------------------------------------------- |
| `--bg-primary`     | `#ffffff` | White                                        |
| `--bg-secondary`   | `#f8fafc` | Light grey sections                          |
| `--bg-card-light`  | `#ffffff` | Card surfaces                                |
| `--bg-dark`        | `#0f172a` | Dark backgrounds, dark buttons               |
| `--bg-dark-card`   | `#1e293b` | Dark card surfaces                           |
| `--bg-tint-orange` | `#fff5f0` | Light orange tint for check icon backgrounds |

### Button-Specific Colors

| Token                    | Hex                        | Usage                      |
| ------------------------ | -------------------------- | -------------------------- |
| `--primary-orange`       | `#ff6f3f`                  | Primary button fill        |
| `--primary-orange-hover` | `#e55b2b`                  | Primary button hover       |
| `--primary-orange-glow`  | `rgba(255, 111, 63, 0.25)` | Primary button shadow glow |

### Border Colors

| Token            | Hex       | Usage         |
| ---------------- | --------- | ------------- |
| `--border-light` | `#e2e8f0` | Light borders |
| `--border-dark`  | `#334155` | Dark borders  |

### Footer

| Property      | Value              |
| ------------- | ------------------ |
| Background    | `#12173a`          |
| Text color    | `#94a3b8`          |
| Heading color | `#ffffff`          |
| Tagline color | `#ff6f3f` (accent) |

---

## 2. Typography

### Font Families

| Token                    | Value                                                                            | Usage                  |
| ------------------------ | -------------------------------------------------------------------------------- | ---------------------- |
| `--font-family-headings` | `"Poppins", sans-serif`                                                          | Headings               |
| `--font-family-body`     | `"Poppins", sans-serif`                                                          | Body text              |
| `--font-heading`         | `'Poppins', 'Outfit', -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif` | Extended heading stack |
| `--font-body`            | `'Poppins', 'Inter', -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif`  | Extended body stack    |

**Loaded fonts:** Poppins (active), Outfit, Plus Jakarta Sans

### Type Scale

| Class               | Size      | Weight  | Line Height | Color              | Usage                     |
| ------------------- | --------- | ------- | ----------- | ------------------ | ------------------------- |
| `.hero-title`       | `3.2rem`  | 700     | 1.1         | `--color-primary`  | Hero headline             |
| `.section-title`    | `1.8rem`  | 700     | 1.25        | `--color-accent`   | Section headings          |
| `.center-title`     | `1.8rem`  | 700     | -           | `--color-accent`   | Centered section headings |
| `.philosophy-title` | `1.8rem`  | 700–800 | -           | `--color-primary`  | Philosophy section        |
| `.stat-number`      | `3.5rem`  | 800     | 1.1         | `--primary-orange` | Stats/metrics             |
| `.impact-num`       | `2rem`    | 700     | -           | `--color-accent`   | Impact cards              |
| `.leader-name`      | `1.4rem`  | 600     | -           | `--primary-orange` | Leader names              |
| `.leader-role`      | `0.9rem`  | 600     | -           | `#22306b`          | Leader roles (uppercase)  |
| `h1–h4`             | -         | 600–700 | 1.25        | `#2f3567`          | Generic headings          |
| `p`                 | `0.85rem` | 400     | 1.6         | `--text-secondary` | Body text                 |

### Eyebrow / Label

```css
.eyebrow {
  font-size: 0.85rem;
  font-weight: 800;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: var(--color-accent);
  text-align: center;
  margin-bottom: 0.8rem;
}
```

### Section Description

```css
.section-desc {
  font-size: 0.85rem;
  color: var(--text-secondary);
  max-width: 720px;
  margin-bottom: 3.5rem;
}
```

---

## 3. Spacing

### Container

```css
.section-container {
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 2rem;
}
```

Responsive padding:
| Breakpoint | Padding |
|---|---|
| Default | `0 2rem` |
| 1024px | `0 24px` |
| 767px | `0 16px` |
| 480px | `0 12px` |

### Section Padding

| Breakpoint | Padding  |
| ---------- | -------- |
| Default    | `1rem 0` |
| 768px      | `4rem 0` |
| 480px      | `3rem 0` |

### Common Spacing Values

| Context                     | Value             |
| --------------------------- | ----------------- |
| Eyebrow margin-bottom       | `0.8rem`          |
| Section title margin-bottom | `1.5rem`          |
| Section desc margin-bottom  | `3.5rem`          |
| Card padding (general)      | `1rem` – `2.5rem` |
| Capability card padding     | `1rem`            |
| Feature card padding        | `35px`            |
| Leader card padding         | `3rem`            |
| Philosophy card padding     | `55px`            |
| Stat card padding           | `3rem 2.5rem`     |
| Footer padding              | `6rem 0 3rem`     |

### Grid Gaps

| Grid                 | Gap      |
| -------------------- | -------- |
| `.grid-2` (hero)     | `70px`   |
| `.hero-layout`       | `4rem`   |
| `.capabilities-grid` | `1rem`   |
| `.tech-cards-grid`   | `1.5rem` |
| `.industry-grid`     | `1.5rem` |
| `.cap-grid`          | `2rem`   |
| `.impact-grid`       | `2rem`   |
| `.stat-grid`         | `2.5rem` |
| `.challenges-grid`   | `2rem`   |
| `.feature-grid`      | `28px`   |
| `.leaders-container` | `3rem`   |
| `.footer-grid`       | `3rem`   |

---

## 4. Border Radii

| Token                | Value  | Usage                                       |
| -------------------- | ------ | ------------------------------------------- |
| `--border-radius-sm` | `8px`  | Buttons, capability cards, logo items       |
| `--border-radius-md` | `16px` | Stat cards, impact cards, leader profiles   |
| `--border-radius-lg` | `24px` | Philosophy cards, feature cards             |
| Inline `12px`        | `12px` | Tech cards, challenge cards, industry cards |
| Inline `18px`        | `18px` | Highlight cards                             |
| Inline `20px`        | `20px` | Leader cards, investors box                 |
| Inline `22px`        | `22px` | Feature cards (top bar pseudo)              |

---

## 5. Shadows

### Token-Based

| Token                 | Value                                                                            |
| --------------------- | -------------------------------------------------------------------------------- |
| `--box-shadow-subtle` | `0 4px 20px rgba(0, 0, 0, 0.02)`                                                 |
| `--box-shadow-card`   | `0 10px 30px rgba(47, 53, 103, 0.05)`                                            |
| `--box-shadow-hover`  | `0 15px 35px rgba(47, 53, 103, 0.1)`                                             |
| `--shadow-sm`         | `0 1px 3px 0 rgba(0, 0, 0, 0.05)`                                                |
| `--shadow-md`         | `0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -2px rgba(0, 0, 0, 0.05)`         |
| `--shadow-lg`         | `0 10px 15px -3px rgba(15, 23, 42, 0.08), 0 4px 6px -4px rgba(15, 23, 42, 0.08)` |
| `--shadow-glow`       | `0 0 20px rgba(255, 111, 63, 0.15)`                                              |

### Component-Specific

| Component            | Shadow                                        |
| -------------------- | --------------------------------------------- |
| `header`             | `0 4px 12px rgba(0, 0, 0, 0.15)`              |
| `header.scrolled`    | `0 4px 30px rgba(0, 0, 0, 0.02)`              |
| `.capability-card`   | `0 4px 12px rgba(0, 0, 0, 0.15)`              |
| `.feature-card`      | `0 10px 30px rgba(0, 0, 0, .05)`              |
| `.philosophy-card`   | `0 15px 40px rgba(0, 0, 0, .05)`              |
| `.btn-primary`       | `0 8px 24px rgba(255, 111, 63, 0.25)`         |
| `.btn-secondary`     | `0 8px 24px rgba(15, 23, 42, 0.08)`           |
| `.hero-donut-img`    | `drop-shadow(0 20px 35px rgba(0, 0, 0, .12))` |
| `.nav-menu` (mobile) | `-10px 0 30px rgba(47, 53, 103, 0.1)`         |

---

## 6. Transitions

| Token                 | Value                                    | Usage                                          |
| --------------------- | ---------------------------------------- | ---------------------------------------------- |
| `--transition-smooth` | `all 0.3s cubic-bezier(0.16, 1, 0.3, 1)` | General transitions                            |
| `--transition-fast`   | `0.2s cubic-bezier(0.4, 0, 0.2, 1)`      | Buttons, links, nav                            |
| `--transition-medium` | `0.4s cubic-bezier(0.4, 0, 0.2, 1)`      | Cards (stat, cap, industry, challenge, impact) |
| `--transition-slow`   | `0.6s cubic-bezier(0.4, 0, 0.2, 1)`      | Scroll reveal                                  |
| `.feature-card`       | `.35s`                                   | Feature card hover                             |
| `.highlight-icon img` | `transform .35s ease`                    | Icon hover                                     |

---

## 7. Layout System

### Max Width

```css
--max-width: 1280px;
```

### Header

```css
header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 60px;
  background: rgba(255, 255, 255);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid rgba(47, 53, 103, 0.08);
  z-index: 1000;
}
header.scrolled {
  height: 70px;
}
```

### Grid Layouts

| Grid                   | Template                      | Breakpoints               |
| ---------------------- | ----------------------------- | ------------------------- |
| `.grid-2`              | `1fr 1fr`                     | 1fr on tablet/mobile      |
| `.hero-layout`         | `1fr 1fr`                     | 1fr on tablet/mobile      |
| `.intro-grid`          | `1fr 1fr 1fr`                 | 1fr on mobile             |
| `.capabilities-grid`   | `repeat(6, 1fr)`              | 3 → 2 → 1 col             |
| `.tech-layout`         | `25% 75%`                     | -                         |
| `.tech-cards-grid`     | `repeat(3, 1fr)`              | 2 → 1 col                 |
| `.industry-grid`       | `repeat(3, 1fr)`              | 2 → 1 col                 |
| `.cap-grid`            | `repeat(3, 1fr)`              | 2 → 1 col                 |
| `.impact-grid`         | `repeat(4, 1fr)`              | 2 → 1 col                 |
| `.stat-grid`           | `repeat(3, 1fr)`              | 2 → 1 col                 |
| `.challenges-grid`     | `repeat(3, 1fr)`              | 2 → 1 col                 |
| `.feature-grid`        | `repeat(2, 1fr)`              | 1 col                     |
| `.leaders-container`   | `repeat(2, 1fr)`              | 1 col                     |
| `.footer-grid`         | `1.2fr 0.8fr 0.8fr 1fr 1.2fr` | `1fr 1fr` on mobile       |
| `.impact-metrics-grid` | `repeat(4, 1fr)`              | `repeat(2, 1fr)` on small |
| `.industries-grid`     | `flex-wrap` (5 per row)       | 2 per row on mobile       |
| `.logo-wall`           | `flex-wrap` (6 per row)       | 3 → 2 col                 |

---

## 8. Components

### Buttons

**Base `.btn`:**

```css
display: inline-flex;
align-items: center;
justify-content: center;
padding: 0.75rem 1.5rem;
font-family: var(--font-body);
font-weight: 600;
font-size: 0.95rem;
border-radius: 8px;
border: none;
cursor: pointer;
transition: var(--transition-fast);
```

**Variants:**

| Class            | BG                 | Text              | Border                       | Shadow                             |
| ---------------- | ------------------ | ----------------- | ---------------------------- | ---------------------------------- |
| `.btn-primary`   | `--primary-orange` | white             | `1px solid --primary-orange` | `0 8px 24px rgba(255,111,63,0.25)` |
| `.btn-secondary` | white              | `--color-primary` | `1px solid --border-light`   | `0 8px 24px rgba(15,23,42,0.08)`   |
| `.btn-dark`      | `--bg-dark`        | white             | `1px solid --bg-dark`        | -                                  |

**Hero actions override:**

```css
.hero-actions .btn {
  padding: 14px 28px;
  border-radius: 8px;
  font-size: 15px;
  font-weight: 600;
}
```

**Button icon:**

```css
.btn-icon {
  margin-left: 0.5rem;
  transition: transform var(--transition-fast);
}
```

### Cards

**Capability Card:**

```css
.capability-card {
  background: var(--color-bg-white);
  border: 1px solid var(--color-border);
  border-radius: 8px;
  padding: 1rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  flex-direction: column;
  text-align: left;
}
```

**Technology Card:**

```css
.tech-card {
  background: #fff;
  border: 1px solid #e8e8e8;
  border-radius: 12px;
  padding: 1.5rem;
  text-align: left;
}
```

**Industry Card:**

```css
.industry-card {
  background: white;
  border: 1px solid var(--border-light);
  border-radius: 12px;
  padding: 2rem;
  transition: var(--transition-medium);
  display: flex;
  align-items: center;
  gap: 1.25rem;
}
```

**Feature Card:**

```css
.feature-card {
  background: #fff;
  border: 1px solid #ececec;
  border-radius: 22px;
  padding: 35px;
  transition: 0.35s;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
  position: relative;
  overflow: hidden;
}
/* ::before top orange bar, scaleX(0) → scaleX(1) on hover */
```

**Stat Card:**

```css
.stat-card {
  background: var(--bg-secondary);
  border: 1px solid var(--border-light);
  border-radius: 16px;
  padding: 3rem 2.5rem;
  transition: var(--transition-medium);
}
/* ::before left orange bar, scaleY(0) → scaleY(1) on hover */
```

**Impact Card:**

```css
.impact-card {
  background: white;
  border: 1px solid var(--border-light);
  border-radius: 16px;
  padding: 2rem 1.5rem;
  text-align: center;
  transition: var(--transition-medium);
}
```

**Philosophy Card:**

```css
.philosophy-card {
  background: linear-gradient(135deg, #fff, #fff8f4);
  border: 1px solid rgba(255, 111, 63, 0.1);
  border-radius: 24px;
  padding: 55px;
  text-align: center;
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.05);
}
```

**Highlight Card:**

```css
.highlight-card {
  border: 1.5px solid var(--color-border);
  border-radius: 18px;
  overflow: hidden;
  background: #fff;
  box-shadow: 0 10px 30px rgba(15, 23, 42, 0.08);
}
```

**Leader Card:**

```css
.leader-card {
  background: white;
  border: 1px solid var(--border-light);
  border-radius: 20px;
  padding: 3rem;
  display: flex;
  gap: 2rem;
  align-items: flex-start;
  transition: var(--transition-medium);
}
```

### Section Eyebrow

```css
.section-eyebrow {
  font-family: var(--font-body);
  font-size: 0.85rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.15em;
  color: var(--primary-orange);
  margin-bottom: 1rem;
  display: block;
}
```

### Highlight / Accent Text

```css
.highlight {
  color: var(--color-accent);
}
.banner-highlight {
  color: var(--color-accent);
  font-weight: 700;
}
```

### Number Badge

```css
.cap-num {
  width: 32px;
  height: 32px;
  border-radius: 50%;
  font-size: 0.85rem;
  font-weight: 800;
  color: var(--color-accent);
  background-color: rgba(255, 111, 63, 0.08);
}
```

### Vertical Divider

```css
.vertical-divider {
  width: 1px;
  border: none;
  background: var(--color-border);
  margin: 1rem 0;
  align-self: stretch;
  flex-shrink: 0;
}
```

### Step Circle (Timeline)

```css
.step-circle {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: 3px solid var(--color-border);
  font-family: var(--font-family-headings);
  font-weight: 800;
  font-size: 1rem;
}
```

### Feature Icon

```css
.feature-icon {
  width: 65px;
  height: 65px;
  border-radius: 18px;
  background: var(--bg-secondary);
  color: #ff6b35;
  font-size: 28px;
}
```

### Leader Avatar

```css
.leader-avatar {
  width: 110px;
  height: 110px;
  border-radius: 50%;
  border: 3px solid var(--primary-orange);
}
```

### Logo Wall Item

```css
.logo-wall-item {
  background: var(--color-bg-white);
  border: 1px solid var(--color-border);
  border-radius: 8px;
  padding: 0.8rem 1rem;
  width: calc(16.66% - 1rem);
  aspect-ratio: 16 / 9;
  box-shadow: var(--box-shadow-subtle);
}
```

### Partner/Investor Logos

```css
.partner-logo {
  max-width: 130px;
  max-height: 45px;
  filter: grayscale(1) opacity(0.65);
}
.investor-logo {
  height: 60px;
  min-width: 80px;
  max-width: 140px;
  filter: grayscale(30%) opacity(0.75);
  border-radius: 8px;
}
```

---

## 9. Repeated HTML Patterns

### Section Container

```html
<section id="{id}" class="scroll-section">
  <div class="section-container">
    <div class="eyebrow">LABEL</div>
    <!-- content -->
  </div>
</section>
```

### Centered Section Header

```html
<div class="{section}-header">
  <div class="eyebrow">LABEL</div>
  <h2 class="center-title">Title</h2>
  <p>Description</p>
</div>
```

### Card Grid

```html
<div class="{section}-grid">
  <div class="{section}-card"><!-- content --></div>
  <div class="{section}-card"><!-- content --></div>
</div>
```

### Numbered Step/Capability

```html
<span class="cap-num">01</span>
<h3>Title</h3>
<h4 class="capability-subtitle">Subtitle</h4>
<p>Description</p>
<div class="cap-icon"><img class="cap-icon-img" src="..." /></div>
```

### Bullet/Check Item

```html
<div class="why-bullet-item">
  <div class="why-check">
    <img class="why-check-icon" src="./assets/simplify-compliance.svg" />
  </div>
  <div class="why-bullet-content">
    <h4>Title</h4>
    <p>Description</p>
  </div>
</div>
```

### Difference Item

```html
<div class="diff-item">
  <div class="diff-icon"><img src="..." /></div>
  <div class="diff-content">
    <h4 class="title">Title</h4>
    <p>Description</p>
  </div>
</div>
```

### Bottom Banner

```html
<div class="{section}-bottom-banner">
  <p class="intro-footer-text">
    Statement with <span class="highlight">Reuse</span> First.
    <span class="highlight">Recovery</span> Always.
  </p>
</div>
```

### CTA Button

```html
<a href="tel:+91 9311094510" class="btn btn-primary">Talk to Our Experts</a>
```

---

## 10. Responsive Breakpoints

| Breakpoint | Target            | Key Changes                                                                                                                         |
| ---------- | ----------------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| **1200px** | Large tablets     | `font-size: 15px`; title `1.8rem`; hero title `2.75rem`                                                                             |
| **1024px** | Tablets landscape | Container `0 24px`; hero gap `2rem`; stat/cap/impact grids 2-col; timeline vertical; mobile nav toggle visible                      |
| **992px**  | Tablets           | Feature grid 1-col; mobile nav toggle; header CTA hidden                                                                            |
| **900px**  | Tablets portrait  | Industry grid 2-col; why grid vertical                                                                                              |
| **768px**  | Mobile landscape  | `font-size: 15px`; section padding `4rem 0`; hero 1-col; capabilities 2-col; tech-cards 1-col; industry 1-col; leader-card vertical |
| **767px**  | Mobile            | Container `0 16px`; hero title `2rem`; highlight-card vertical; industry 50% width                                                  |
| **600px**  | Small mobile      | Logo wall 2-col; hero-actions vertical                                                                                              |
| **480px**  | Small phones      | `font-size: 14px`; container `0 12px`; section padding `3rem 0`; capabilities 1-col; stat-number `2rem`; hero title `1.75rem`       |

---

## 11. Animations

### Float (Hero Donut)

```css
@keyframes donutFloat {
  0%,
  100% {
    transform: translate3d(0, 0, 0) rotate(0deg);
  }
  50% {
    transform: translate3d(0, -8px, 0) rotate(4deg);
  }
}
animation: donutFloat 6s ease-in-out infinite;
```

### Ring Pulse (Hero)

```css
@keyframes ringPulse {
  0% {
    transform: scale(1);
    opacity: 1;
  }
  100% {
    transform: scale(1.5);
    opacity: 0;
  }
}
animation: ringPulse 4s ease-out infinite;
/* Staggered: 0s, 1.2s, 2.4s */
```

### Bounce (Scroll Cue)

```css
animation: bounce 2s infinite;
```

### Scroll Reveal

```css
.reveal {
  opacity: 0;
  transform: translateY(30px);
}
.reveal.active {
  opacity: 1;
  transform: translateY(0);
  transition:
    opacity 0.8s cubic-bezier(0.2, 0.8, 0.2, 1),
    transform 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
}
```

### Card Hover Bars

```css
/* Feature card: top orange bar */
.feature-card::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 4px;
  background: #ff6b35;
  transform: scaleX(0);
  transition: transform 0.35s;
}
.feature-card:hover::before {
  transform: scaleX(1);
}

/* Stat card: left orange bar */
.stat-card::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  width: 4px;
  background: var(--primary-orange);
  transform: scaleY(0);
  transition: transform var(--transition-medium);
}
.stat-card:hover::before {
  transform: scaleY(1);
}
```

---

## 12. Section Backgrounds

| Section                                                        | Background                   |
| -------------------------------------------------------------- | ---------------------------- |
| Hero                                                           | White                        |
| Future / Capabilities / Technology / Why Choose / Partners     | `#f8fafc`                    |
| About / Framework / Industries / Impact / Leadership / Contact | White                        |
| Challenges / Why Us / Tech Platform                            | `--bg-secondary` (`#f8fafc`) |
| Footer                                                         | `#12173a`                    |

---

## 13. Footer Structure

```html
<footer>
  <div class="footer-container">
    <div class="footer-grid"><!-- 5 columns --></div>
    <div class="footer-bottom-bar"><!-- copyright --></div>
  </div>
</footer>
```

**Grid:** `1.2fr 0.8fr 0.8fr 1fr 1.2fr` → `1fr 1fr` on mobile

**Columns:**

1. Logo + about text + tagline
2. Quick Links
3. Solutions
4. Contact details

---

## 14. Key Design Principles

1. **Navy + Orange** - Two-color identity: `#2f3567` (trust) + `#ff6f3f` (energy)
2. **Poppins everywhere** - Single font family for consistency
3. **Section-based scrolling** - Each section is a `scroll-section` with snap behavior
4. **Cards over text** - Content delivered via cards with consistent borders and shadows
5. **Eyebrow → Title → Description** - Standard section header pattern
6. **Bottom banners** - Every major section ends with a philosophy statement
7. **Logo wall** - Partner/investor logos with grayscale filter, opacity reduced
8. **Mobile-first responsive** - Grids collapse from 6 → 3 → 2 → 1 columns
9. **No hover effects on cards** - Cards are static (removed in updates)
10. **Footer sticky** - `min-height: 100vh; display: flex; flex-direction: column;` with `footer { margin-top: auto; }`
