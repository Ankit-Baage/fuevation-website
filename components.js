// // =====================================================
// // COMPONENTS.JS — Loads header, footer & init nav
// // =====================================================
// (async function () {
//   const isIndex =
//     location.pathname.endsWith("index.html") ||
//     location.pathname.endsWith("/") ||
//     location.pathname.endsWith("\\");

//   async function loadComponent(selector, file) {
//     try {
//       const res = await fetch(file);
//       if (!res.ok) throw new Error("Failed to load " + file);
//       let html = await res.text();

//       // Rewrite internal links based on current page
//       if (isIndex) {
//         html = html.replace(/index\.html#/g, "#");
//       } else {
//         html = html.replace(/href="#/g, 'href="index.html#');
//       }

//       const el = document.querySelector(selector);
//       if (el) el.innerHTML = html;
//     } catch (err) {
//       console.warn("Component load error:", err);
//     }
//   }

//   // Load header, footer, and CTA
//   await loadComponent("#site-header", "components/header.html");
//   await loadComponent("#site-footer", "components/footer.html");
//   await loadComponent("#cta-section", "components/cta.html");

//   // =====================================================
//   // HEADER / NAV INIT (runs after components are loaded)
//   // =====================================================
//   const header = document.getElementById("site-header");
//   if (header) {
//     window.addEventListener("scroll", () => {
//       header.classList.toggle("scrolled", window.scrollY > 50);
//     });
//   }

//   const mobileNavToggle = document.getElementById("mobile-nav-toggle");
//   const navMenu = document.querySelector(".nav-menu");
//   if (mobileNavToggle && navMenu) {
//     mobileNavToggle.addEventListener("click", () => {
//       navMenu.classList.toggle("active");
//       mobileNavToggle.classList.toggle("active");
//     });

//     navMenu.querySelectorAll(".nav-link").forEach((link) => {
//       link.addEventListener("click", () => {
//         navMenu.classList.remove("active");
//         mobileNavToggle.classList.remove("active");
//       });
//     });

//     document.addEventListener("click", (e) => {
//       if (
//         !mobileNavToggle.contains(e.target) &&
//         !navMenu.contains(e.target)
//       ) {
//         navMenu.classList.remove("active");
//         mobileNavToggle.classList.remove("active");
//       }
//     });
//   }

//   // Highlight active nav link on non-index pages
//   if (!isIndex) {
//     document.querySelectorAll(".nav-menu .nav-link").forEach((link) => {
//       link.classList.remove("active");
//     });
//   }

//   // Dispatch event so page-specific scripts know components are ready
//   document.dispatchEvent(new Event("components-loaded"));
// })();
// =====================================================
// COMPONENTS.JS — Subfolder-Safe & SEO-Optimized Nav
// =====================================================
(async function () {
  // Site base URL derived from this script's location (components.js lives at site root),
  // so the site works at a domain root or under a subpath like /fuevation-website/
  const scriptSrc = (document.currentScript && document.currentScript.src) ||
    new URL("components.js", window.location.href).href;
  const BASE = new URL("./", scriptSrc).href;
  const basePath = new URL(BASE).pathname;

  // Normalize current path to check for home route
  const currentPath = window.location.pathname;
  const isIndex = currentPath === basePath || currentPath === basePath + "index.html";

  async function loadComponent(selector, file) {
    // Skip the request entirely when the page has no slot for this component
    if (!document.querySelector(selector)) return;
    try {
      // Root-relative path guarantees correct fetch regardless of subfolder depth
      const res = await fetch(file);
      if (!res.ok) throw new Error("Failed to load " + file);
      
      let html = await res.text();

      // Normalize hash anchor targets for root vs inner subfolder pages
      if (isIndex) {
        html = html.replace(/href="\/index\.html#/g, 'href="#');
      }

      // Resolve root-relative links against the site base
      html = html.replace(/(href|src)="\/(?=[A-Za-z])/g, `$1="${BASE}`);

      const el = document.querySelector(selector);
      if (el) {
        el.innerHTML = html;
        setActiveNavLink(el);
      }
    } catch (err) {
      console.warn("Component load error:", err);
    }
  }

  // Highlight the header link matching the current page AND the URL hash.
  // Every nav link points at the same homepage path (/index.html#...), so
  // comparing the path alone marked ALL links active on the homepage - the
  // whole menu flashed orange until the scroll-spy in main.js cleared it.
  function setActiveNavLink(container) {
    const links = container.querySelectorAll(".nav-link");
    const currentHash = window.location.hash;
    links.forEach((link) => {
      const linkUrl = new URL(link.href, window.location.origin);
      const isSamePage =
        linkUrl.pathname === currentPath ||
        (currentPath !== basePath &&
          linkUrl.pathname !== basePath &&
          currentPath.startsWith(linkUrl.pathname));

      // Only the link for the hash in the URL bar is active on load
      // (e.g. /#about). With no hash nothing is active yet and the
      // scroll-spy in main.js owns the highlight from then on.
      if (isSamePage && linkUrl.hash === currentHash) {
        link.classList.add("active");
      } else {
        link.classList.remove("active");
      }
    });
  }

  // Load components relative to the site base
  await Promise.all([
    loadComponent("#site-header", BASE + "components/header.html"),
    loadComponent("#site-footer", BASE + "components/footer.html"),
    loadComponent("#cta-section", BASE + "components/cta.html")
  ]);

  // =====================================================
  // HEADER / NAV INIT (Runs immediately after parallel fetches)
  // =====================================================
  const header = document.getElementById("site-header");
  if (header) {
    window.addEventListener("scroll", () => {
      header.classList.toggle("scrolled", window.scrollY > 50);
    }, { passive: true });
  }

  const mobileNavToggle = document.getElementById("mobile-nav-toggle");
  const navMenu = document.querySelector(".nav-menu");

  if (mobileNavToggle && navMenu) {
    mobileNavToggle.addEventListener("click", () => {
      navMenu.classList.toggle("active");
      mobileNavToggle.classList.toggle("active");
    });

    navMenu.querySelectorAll(".nav-link").forEach((link) => {
      link.addEventListener("click", () => {
        navMenu.classList.remove("active");
        mobileNavToggle.classList.remove("active");
      });
    });

    document.addEventListener("click", (e) => {
      if (!mobileNavToggle.contains(e.target) && !navMenu.contains(e.target)) {
        navMenu.classList.remove("active");
        mobileNavToggle.classList.remove("active");
      }
    });
  }

  // Dispatch completion event for page-level dynamic scripts
  document.dispatchEvent(new Event("components-loaded"));
})();