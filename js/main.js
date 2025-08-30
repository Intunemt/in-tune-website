document.addEventListener("DOMContentLoaded", () => {
  const logo = document.querySelector(".nav-logo"); // your logo element
  const hero = document.querySelector("#hero");      // your hero section

  if (logo && hero) {
    // Set initial state
    logo.classList.remove("visible");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            // Hero is in view → hide logo
            logo.classList.remove("visible");
          } else {
            // Hero is out of view → show logo
            logo.classList.add("visible");
          }
        });
      },
      { threshold: 0 } // triggers as soon as any part of hero leaves viewport
    );

    observer.observe(hero);
  }
});