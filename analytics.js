// =====================================================
// ANALYTICS.JS — Google Tag Manager + GA4 event tracking
// =====================================================
// Load synchronously, as high in <head> as possible:
//   <script src="/analytics.js"></script>
//
// GA4 is configured INSIDE GTM (Google tag), not loaded here.
// GA4_MEASUREMENT_ID is pushed to the dataLayer so the GTM
// Google tag can read it via a Data Layer Variable.
//
// TODO: replace both placeholder IDs before go-live.
// Also replace GTM-XXXXXXX in the <noscript> iframe on every page.
// =====================================================
(function () {
  "use strict";

  var GTM_ID = "GTM-XXXXXXX";
  var GA4_MEASUREMENT_ID = "G-XXXXXXXXXX";

  window.dataLayer = window.dataLayer || [];

  function push(obj) {
    window.dataLayer.push(obj);
  }

  // =====================================================
  // GTM LOADER (skipped while ID is still a placeholder)
  // =====================================================
  push({ ga4_measurement_id: GA4_MEASUREMENT_ID });

  if (GTM_ID.indexOf("XXXX") === -1) {
    push({ "gtm.start": new Date().getTime(), event: "gtm.js" });
    var first = document.getElementsByTagName("script")[0];
    var gtm = document.createElement("script");
    gtm.async = true;
    gtm.src = "https://www.googletagmanager.com/gtm.js?id=" + GTM_ID;
    first.parentNode.insertBefore(gtm, first);
  }

  // =====================================================
  // PAGE CONTEXT
  // =====================================================
  var path = location.pathname;
  var solutionMatch = path.match(/\/solutions\/([^\/]+?)(?:\.html)?\/?$/);
  var solutionSlug = solutionMatch ? solutionMatch[1] : null;

  function pageType() {
    if (solutionSlug) return "solution";
    if (/solutions(\.html)?\/?$/.test(path)) return "solutions_hub";
    if (/(^\/$|index\.html$)/.test(path)) return "home";
    return "other";
  }

  function solutionName() {
    var crumb = document.querySelector(".breadcrumb .current");
    if (crumb) return crumb.textContent.trim();
    var h1 = document.querySelector("h1");
    return h1 ? h1.textContent.trim() : solutionSlug;
  }

  function cleanText(el) {
    return (el.textContent || "").replace(/\s+/g, " ").trim();
  }

  // Where on the page a click happened: header | footer | hero | final_cta | related | modal | <section class>
  function ctaLocation(el) {
    if (el.closest("#site-header")) return "header";
    if (el.closest("#site-footer")) return "footer";
    if (el.closest("#expert-contact-overlay")) return "modal";
    var section = el.closest("section");
    if (!section) return "other";
    var cls = section.className || "";
    if (/hero/.test(cls)) return "hero";
    if (/cta-section/.test(cls)) return "final_cta";
    if (/related/.test(cls)) return "related";
    return section.id || cls.split(" ")[0] || "other";
  }

  function base() {
    return {
      page_type: pageType(),
      solution_slug: solutionSlug || undefined,
    };
  }

  function track(eventName, params) {
    var payload = base();
    payload.event = eventName;
    for (var k in params) payload[k] = params[k];
    push(payload);
  }

  // =====================================================
  // SOLUTION PAGE VIEW
  // =====================================================
  function onReady() {
    if (solutionSlug) {
      track("solution_page_view", { solution_name: solutionName() });
    }
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", onReady);
  } else {
    onReady();
  }

  // =====================================================
  // CLICK TRACKING (delegated — works for components
  // loaded later by components.js and the contact modal)
  // =====================================================
  var CTA_SELECTOR = [
    ".expert-contact-btn",
    ".btn",
    ".sol-btn-outline",
    "[class*='related-card']",
  ].join(",");

  document.addEventListener(
    "click",
    function (event) {
      var target = event.target;
      if (!target || !target.closest) return;

      // Contact options: tel: / mailto:
      var contactLink = target.closest("a[href^='tel:'], a[href^='mailto:']");
      if (contactLink) {
        var method = contactLink.getAttribute("href").indexOf("tel:") === 0 ? "phone" : "email";
        var location_ = ctaLocation(contactLink);
        if (location_ === "modal") {
          // No real form exists yet: a call/email click from the
          // "Talk to Our Experts" modal is treated as the submit.
          track("contact_form_submit", { contact_method: method });
        }
        track("lead_generated", { contact_method: method, cta_location: location_ });
        return;
      }

      // CTA buttons / links
      var cta = target.closest(CTA_SELECTOR);
      if (cta) {
        track("cta_click", {
          cta_text: cleanText(cta),
          cta_location: ctaLocation(cta),
          cta_url: cta.getAttribute("href") || undefined,
        });

        // "Talk to Our Experts" opens the contact modal = form start
        if (cta.classList.contains("expert-contact-btn")) {
          track("contact_form_start", { cta_location: ctaLocation(cta) });
        }
      }
    },
    true
  );
})();
