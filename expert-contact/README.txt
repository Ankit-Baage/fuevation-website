# Fuevation Expert Contact Component

## Folder

Keep these 3 files together:

components/
└── expert-contact/
    ├── expert-contact.html
    ├── expert-contact.css
    └── expert-contact.js

## Add CSS + JS to any page

```html
<link rel="stylesheet" href="components/expert-contact/expert-contact.css">
<script src="components/expert-contact/expert-contact.js" defer></script>
```

## Add the button wherever you want

```html
<button type="button" class="expert-contact-btn">
  Talk to Our Experts
</button>
```

You can use the button multiple times on the same page.

## If the page is inside a subfolder

For example, on `solutions/example.html`, change the paths to:

```html
<link rel="stylesheet" href="../components/expert-contact/expert-contact.css">
<script src="../components/expert-contact/expert-contact.js" defer></script>
```

The JavaScript automatically finds `expert-contact.html` relative to `expert-contact.js`, so no extra path change is needed inside the JS.

## Important

This component uses `fetch()` to load the modal HTML. It should be run through a web server/hosting environment, not by opening the HTML directly with `file://`.
