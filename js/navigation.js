document.addEventListener("DOMContentLoaded", () => {
  /* === HIDE HEADER ON SCROLL === */
  const header = document.getElementById("site-header");
  let lastScroll = 0;

  window.addEventListener("scroll", () => {
    const currentScroll = window.pageYOffset;

    if (currentScroll > lastScroll && currentScroll > 120) {
      header.classList.add("hide-header"); // scrolling down
    } else {
      header.classList.remove("hide-header"); // scrolling up
    }

    lastScroll = currentScroll;
  });

  /* === MOBILE MENU AUTOCLOSE === */
  const navToggle = document.getElementById("nav-toggle");
  const navLinks = document.querySelectorAll(".nav-wrapper a");

  navLinks.forEach(link => {
    link.addEventListener("click", () => {
      if (navToggle.checked) {
        navToggle.checked = false;
      }
    });
  });

  /* === SMOOTH SCROLL TO ANCHORS === */
  if (window.location.hash) {
    const target = document.querySelector(window.location.hash);
    if (target) {
      setTimeout(() => {
        target.scrollIntoView({ behavior: "smooth" });
      }, 200);
    }
  }
});