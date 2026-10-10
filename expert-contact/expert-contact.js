
(function () {
  "use strict";


  var PHONE_NUMBER = "+919311094510";
  var PHONE_DISPLAY = "+91 93110 94510";
  var EMAIL_ADDRESS = "Contact@fuevation.com";


  /* =========================================================
     FIND THIS JS FILE LOCATION
     This makes assets work from:
     
     index.html
     solutions/*.html
     
     and also after deployment.
  ========================================================= */

  var currentScript = document.currentScript;

  /*
   * Fallback in case document.currentScript is not available.
   */
  if (!currentScript) {
    currentScript = document.querySelector(
      'script[src*="expert-contact.js"]'
    );
  }

  if (!currentScript) {
    console.error(
      "expert-contact.js: Could not find the script element."
    );
    return;
  }




  var SCRIPT_URL = new URL(
    currentScript.src,
    document.baseURI
  );

  var WEBSITE_ROOT = new URL(
    "../",
    SCRIPT_URL
  );




  var PHONE_ICON = new URL(
    "assets/phone.svg",
    WEBSITE_ROOT
  ).href;

  var MAIL_ICON = new URL(
    "assets/mail icon.svg",
    WEBSITE_ROOT
  ).href;


  

  function createModal() {

    if (
      document.getElementById(
        "expert-contact-overlay"
      )
    ) {
      return;
    }


    var modalHTML = `
      <div
        id="expert-contact-overlay"
        class="expert-contact-overlay"
        aria-hidden="true"
      >

        <div
          class="expert-contact-modal"
          role="dialog"
          aria-modal="true"
          aria-labelledby="expert-contact-title"
        >

          <!-- CLOSE BUTTON -->

          <button
            type="button"
            class="expert-contact-close"
            aria-label="Close contact modal"
          >
            &times;
          </button>


          <!-- CONTENT -->

          <div class="expert-contact-content">

            <h2 id="expert-contact-title">
              Let’s Transform Your Electronics Lifecycle
            </h2>

            <p>
              Connect with our experts to discuss your electronics
              assets, recovery opportunities, and strategies to
              unlock greater value across the lifecycle.
            </p>


            <!-- CONTACT OPTIONS -->

            <div class="expert-contact-options">


          

              <a
                href="tel:${PHONE_NUMBER}"
                class="expert-contact-option"
              >

                <span
                  class="expert-contact-icon"
                  aria-hidden="true"
                >

                  <img
                    src="${PHONE_ICON}"
                    alt="phone icon"
                  />

                </span>


                <span class="expert-contact-text">

                  <strong>
                   Call Us
                  </strong>

                  <span class="expert-contact-value">
                    ${PHONE_DISPLAY}
                  </span>

                </span>

              </a>




              <a
                href="mailto:${EMAIL_ADDRESS}"
                class="expert-contact-option"
              >

                <span
                  class="expert-contact-icon"
                  aria-hidden="true"
                >

                  <img
                    src="${MAIL_ICON}"
                    alt="mail icon"
                  />

                </span>


                <span class="expert-contact-text">

                  <strong>
                    Email Us
                  </strong>

                  <span class="expert-contact-value">
                    ${EMAIL_ADDRESS}
                  </span>

                </span>

              </a>


            </div>

          </div>

        </div>

      </div>
    `;


    document.body.insertAdjacentHTML(
      "beforeend",
      modalHTML
    );
  }


  function openModal() {

    var overlay =
      document.getElementById(
        "expert-contact-overlay"
      );

    if (!overlay) {
      return;
    }


    overlay.classList.add("show");

    overlay.setAttribute(
      "aria-hidden",
      "false"
    );


    document.body.classList.add(
      "expert-contact-open"
    );


    /* Focus close button */

    var closeButton =
      overlay.querySelector(
        ".expert-contact-close"
      );

    if (closeButton) {

      setTimeout(function () {

        closeButton.focus();

      }, 50);

    }

  }


  function closeModal() {

    var overlay =
      document.getElementById(
        "expert-contact-overlay"
      );

    if (!overlay) {
      return;
    }


    overlay.classList.remove("show");

    overlay.setAttribute(
      "aria-hidden",
      "true"
    );


    document.body.classList.remove(
      "expert-contact-open"
    );

  }
  function setupEvents() {
    document.addEventListener(
      "click",
      function (event) {



        var trigger =
          event.target.closest(
            ".expert-contact-btn"
          );


        if (trigger) {

          event.preventDefault();

          createModal();

          openModal();

          return;
        }

        var overlay =
          document.getElementById(
            "expert-contact-overlay"
          );


        if (!overlay) {
          return;
        }

        var closeButton =
          event.target.closest(
            ".expert-contact-close"
          );


        if (closeButton) {

          closeModal();

          return;
        }

        if (
          event.target === overlay
        ) {

          closeModal();

        }

      }
    );

    document.addEventListener(
      "keydown",
      function (event) {


        if (
          event.key === "Escape"
        ) {

          var overlay =
            document.getElementById(
              "expert-contact-overlay"
            );


          if (
            overlay &&
            overlay.classList.contains("show")
          ) {

            closeModal();

          }

        }

      }
    );

  }
  function init() {

    setupEvents();

  }

  if (
    document.readyState === "loading"
  ) {

    document.addEventListener(
      "DOMContentLoaded",
      init
    );

  } else {

    init();

  }

})();