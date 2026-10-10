// SECTION 1: Modal Triggers + Lead Capture Forms + Scroll Spy
document.addEventListener("DOMContentLoaded", () => {
  const expertModal = document.getElementById("expert-modal");
  const profileModal = document.getElementById("profile-modal");

  const expertTriggers = document.querySelectorAll(".btn-expert-trigger");
  const profileTriggers = document.querySelectorAll(
    ".btn-profile-trigger",
  );
  const closeButtons = document.querySelectorAll(".modal-close-btn");

  // Open Expert Modal
// Open Expert Modal
document.addEventListener("click", (e) => {
  const trigger = e.target.closest(".btn-expert-trigger");

  if (!trigger) return;

  e.preventDefault();

  if (expertModal) {
    expertModal.classList.add("active");
    document.body.style.overflow = "hidden";
  }
});

  // Open Profile Modal
  profileTriggers.forEach((trigger) => {
    trigger.addEventListener("click", () => {
      profileModal.classList.add("active");
      document.body.style.overflow = "hidden";
    });
  });

  // Close Modals
  function closeAllModals() {
    const overlays = document.querySelectorAll(".modal-overlay");
    overlays.forEach((overlay) => {
      overlay.classList.remove("active");
      const form = overlay.querySelector("form");
      const success = overlay.querySelector(".form-success-state");
      if (form) form.style.display = "flex";
      if (success) success.classList.remove("active");
    });
    document.body.style.overflow = "auto";
  }

  closeButtons.forEach((btn) => {
    btn.addEventListener("click", closeAllModals);
  });

  // Modal Background Click Close
  const overlays = document.querySelectorAll(".modal-overlay");
  overlays.forEach((overlay) => {
    overlay.addEventListener("click", (e) => {
      if (e.target === overlay) {
        closeAllModals();
      }
    });
  });

  // ESC key close
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeAllModals();
  });

  // Lead capture forms logic
  const expertForm = document.getElementById("expert-contact-form");
  const expertSuccess = document.getElementById("form-success-msg");
  if (expertForm) {
    expertForm.addEventListener("submit", (e) => {
      e.preventDefault();
      expertForm.style.display = "none";
      expertSuccess.classList.add("active");
    });
  }

  const profileForm = document.getElementById("profile-download-form");
  const profileSuccess = document.getElementById("profile-success-msg");
  const downloadLink = document.getElementById("direct-download-link");
  if (profileForm) {
    profileForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const email = document.getElementById("profile-email").value;
      const blob = new Blob(
        [`Fuevation Company Profile Deck Requested by ${email}`],
        { type: "text/plain" },
      );
      const downloadUrl = URL.createObjectURL(blob);
      downloadLink.href = downloadUrl;
      downloadLink.download = "Fuevation_Company_Profile.pdf";
      profileForm.style.display = "none";
      profileSuccess.classList.add("active");
    });
  }
});

// SECTION 12: Fetch Insights from API
(function () {
  var grid = document.getElementById("home-insights-grid");
  var loading = document.getElementById("home-insights-loading");
  if (!grid || !loading) return;

  function fmtDate(ts) {
    return new Date(ts * 1000).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  }
  function stripHtml(h) {
    var d = document.createElement("div");
    d.innerHTML = h;
    return d.textContent || "";
  }

  fetch(
    "https://dev.backend.mobigarage.com/v1/mp/globals/blogs?limit=3&source=fuevation",
  )
    .then(function (r) {
      if (!r.ok) throw 0;
      return r.json();
    })
    .then(function (json) {
      var blogs = (json.data || []).filter(function (b) {
        return b.is_active === 1;
      });
      if (!blogs.length) {
        loading.style.display = "none";
        return;
      }
      grid.innerHTML = blogs
        .map(function (b) {
          var excerpt =
            b.short_desc ||
            stripHtml(b.description).substring(0, 160) + "...";
          var dateStr = b.publishing_date
            ? fmtDate(b.publishing_date)
            : "";
          return (
            '<a href="blog-detail.html?id=' +
            b.id +
            '" class="article-card">' +
            '<div class="article-card__header">' +
            '<span class="article-category">' +
            (b.category || "") +
            "</span>" +
            '<div class="article-meta"> ' +
            dateStr +
            "</div>" +
            "</div>" +
            '<div class="article-image-box">' +
            '<img src="' +
            (b.banner_image_url || "") +
            '" alt="' +
            b.title +
            '" class="article-img" loading="lazy" />' +
            "</div>" +
            '<div class="article-details">' +
            "<h3>" +
            b.title +
            "</h3>" +
            "<p>" +
            excerpt +
            "</p>" +
            '<span class="read-more-btn">Read More &rarr;</span>' +
            "</div>" +
            "</a>"
          );
        })
        .join("");
      loading.style.display = "none";
      grid.style.display = "";
    })
    .catch(function () {
      loading.style.display = "none";
    });
})();

// Scroll Spy for Navigation (waits for components to load)
document.addEventListener("components-loaded", function () {
  var sections = document.querySelectorAll(".scroll-section[id]");
  var navLinks = document.querySelectorAll(".nav-menu .nav-link");
  var headerHeight = 100;
  var isClickNav = false;
  var clickTimeout;

  function setActive(id) {
    navLinks.forEach(function (link) {
      link.classList.remove("active");
      var href = link.getAttribute("href");
      if (href) {
        var hashIndex = href.indexOf("#");
        var linkId = hashIndex !== -1 ? href.substring(hashIndex + 1) : "";
        if (linkId === id) {
          link.classList.add("active");
        }
      }
    });
  }

  function onScroll() {
    if (isClickNav) return;
    var scrollPos = window.scrollY + headerHeight + 100;
    var current = "";
    sections.forEach(function (section) {
      var top = section.offsetTop;
      var height = section.offsetHeight;
      if (scrollPos >= top && scrollPos < top + height) {
        current = section.getAttribute("id");
      }
    });
    if (current) setActive(current);
  }

  navLinks.forEach(function (link) {
    link.addEventListener("click", function (e) {
      var href = this.getAttribute("href");
      if (href) {
        var hashIndex = href.indexOf("#");
        if (hashIndex !== -1) {
          var id = href.substring(hashIndex + 1);
          if (id) {
            e.preventDefault();
            setActive(id);
            isClickNav = true;
            clearTimeout(clickTimeout);
            var target = document.getElementById(id);
            if (target) {
              target.scrollIntoView({ behavior: "smooth" });
            }
            clickTimeout = setTimeout(function () {
              isClickNav = false;
              onScroll();
            }, 800);
          }
        }
      }
    });
  });

  window.addEventListener("scroll", onScroll);
  onScroll();
});
// SECTION 1: Modal Triggers + Lead Capture Forms + Scroll Spy
document.addEventListener("DOMContentLoaded", () => {
  const contactModal = document.getElementById("contact-modal-overlay");
  const profileModal = document.getElementById("profile-modal");

  const contactTriggers = document.querySelectorAll(".talk-to-experts-btn");
  const profileTriggers = document.querySelectorAll(
    ".btn-profile-trigger",
  );

  const closeButtons = document.querySelectorAll(
    ".modal-close-btn, .contact-modal-close",
  );

  // Open Contact Modal
  contactTriggers.forEach((trigger) => {
    trigger.addEventListener("click", (e) => {
      e.preventDefault();

      if (contactModal) {
        contactModal.classList.add("show");
        contactModal.setAttribute("aria-hidden", "false");
        document.body.style.overflow = "hidden";
      }
    });
  });

  // Open Profile Modal
  profileTriggers.forEach((trigger) => {
    trigger.addEventListener("click", () => {
      if (profileModal) {
        profileModal.classList.add("active");
        document.body.style.overflow = "hidden";
      }
    });
  });

  // Close Modals
  function closeAllModals() {
    const overlays = document.querySelectorAll(".modal-overlay");

    overlays.forEach((overlay) => {
      overlay.classList.remove("active");

      const form = overlay.querySelector("form");
      const success = overlay.querySelector(".form-success-state");

      if (form) form.style.display = "flex";
      if (success) success.classList.remove("active");
    });

    // Close Contact Modal
    if (contactModal) {
      contactModal.classList.remove("show");
      contactModal.setAttribute("aria-hidden", "true");
    }

    document.body.style.overflow = "";
  }

  closeButtons.forEach((btn) => {
    btn.addEventListener("click", closeAllModals);
  });

  // Modal Background Click Close
  const overlays = document.querySelectorAll(".modal-overlay");

  overlays.forEach((overlay) => {
    overlay.addEventListener("click", (e) => {
      if (e.target === overlay) {
        closeAllModals();
      }
    });
  });

  // Contact Modal Background Click Close
  if (contactModal) {
    contactModal.addEventListener("click", (e) => {
      if (e.target === contactModal) {
        closeAllModals();
      }
    });
  }

  // ESC key close
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      closeAllModals();
    }
  });

  // Lead capture forms logic
  const expertForm = document.getElementById("expert-contact-form");
  const expertSuccess = document.getElementById("form-success-msg");

  if (expertForm) {
    expertForm.addEventListener("submit", (e) => {
      e.preventDefault();
      expertForm.style.display = "none";
      expertSuccess.classList.add("active");
    });
  }

  const profileForm = document.getElementById("profile-download-form");
  const profileSuccess = document.getElementById("profile-success-msg");
  const downloadLink = document.getElementById("direct-download-link");

  if (profileForm) {
    profileForm.addEventListener("submit", (e) => {
      e.preventDefault();

      const email = document.getElementById("profile-email").value;

      const blob = new Blob(
        [`Fuevation Company Profile Deck Requested by ${email}`],
        { type: "text/plain" },
      );

      const downloadUrl = URL.createObjectURL(blob);

      downloadLink.href = downloadUrl;
      downloadLink.download = "Fuevation_Company_Profile.pdf";

      profileForm.style.display = "none";
      profileSuccess.classList.add("active");
    });
  }
});