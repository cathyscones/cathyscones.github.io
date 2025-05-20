/* script.js */
document.addEventListener("DOMContentLoaded", () => {
    // HOME PAGE: Learn More button & case selection buttons
    const learnMoreBtn = document.getElementById("learnMore");
    const caseButtons = document.getElementById("caseButtons");
  
    if (learnMoreBtn && caseButtons) {
      learnMoreBtn.addEventListener("click", () => {
        learnMoreBtn.style.display = "none";
        caseButtons.classList.remove("hidden");
        setTimeout(() => caseButtons.classList.add("visible"), 10);
      });
  
      const caseButtonsMap = {
        "case1-button": "case1a.html",
        "case2-button": "case2a.html",
        "case3-button": "case3a.html",
        "case4-button": "case4a.html",
      };
  
      Object.entries(caseButtonsMap).forEach(([btnId, targetUrl]) => {
        const btn = document.getElementById(btnId);
        if (btn) {
          btn.addEventListener("click", () => {
            window.location.href = targetUrl;
          });
        }
      });
    }
  
    // KIOSK: Inactivity timer (runs on all pages)
    let timeout;
    function resetTimer() {
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        window.location.href = "kiosk_index.html";
      }, 60000); // 60 seconds
    }
  
    document.addEventListener("mousemove", resetTimer);
    document.addEventListener("touchstart", resetTimer);
    document.addEventListener("keydown", resetTimer);
    resetTimer();
  
    // CASE PAGES: Fade in/out transitions for navigation
    const transitionLinks = document.querySelectorAll(".next-button, .back-button");
  
    transitionLinks.forEach((link) => {
      link.addEventListener("click", function (event) {
        event.preventDefault();
  
        const container = document.querySelector(".map");
        if (!container) return;
  
        container.classList.add("fade-out");
  
        const href = this.getAttribute("href");
  
        setTimeout(() => {
          window.location.href = href;
        }, 500); // Match CSS transition
      });
    });
  
    const mapContainer = document.querySelector(".map");
    if (mapContainer) {
      mapContainer.classList.add("fade-in");
    }
  });
  