document.addEventListener("DOMContentLoaded", () => {
  const navLogo = document.querySelector(".nav-logo");

  if (document.body.classList.contains("home-page")) {
    // Only run hide/show on homepage
    const hero = document.querySelector("#hero");

    if (navLogo && hero) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              navLogo.style.opacity = "0"; // hide when hero is visible
            } else {
              navLogo.style.opacity = "1"; // show after hero
            }
          });
        },
        { threshold: 0.5 }
      );

      observer.observe(hero);
    }
  } else {
    // On all other pages, just show the logo
    if (navLogo) {
      navLogo.style.opacity = "1";
    }
  }
});

const serviceCards = document.querySelectorAll('.service-card');

serviceCards.forEach(card => {
  card.addEventListener('click', () => {
    card.classList.toggle('tapped');
  });
});

