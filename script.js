// =====================================================
// MENU MOBILE
// =====================================================

const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

if (menuToggle && navLinks) {
  menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
  });
}

// =====================================================
// ROLAGEM SUAVE
// =====================================================

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (event) {
    event.preventDefault();

    const targetId = this.getAttribute("href");

    const targetElement = document.querySelector(targetId);

    if (targetElement) {
      const navbar = document.querySelector(".navbar");

      const navbarHeight = navbar ? navbar.offsetHeight : 0;

      window.scrollTo({
        top: targetElement.offsetTop - navbarHeight,

        behavior: "smooth",
      });
    }

    // Fecha menu no celular

    if (navLinks) {
      navLinks.classList.remove("active");
    }
  });
});

// =====================================================
// ANIMAÇÃO AO ROLAR A PÁGINA
// =====================================================

const revealElements = document.querySelectorAll(".reveal");

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");

        revealObserver.unobserve(entry.target);
      }
    });
  },

  {
    threshold: 0.12,
  },
);

// Ativa observação

revealElements.forEach((element) => {
  revealObserver.observe(element);
});

// =====================================================
// ANIMAÇÃO DOS CARDS
// =====================================================

const cards = document.querySelectorAll(
  ".card, .gallery-item, .student-card, .testimonial-card",
);

cards.forEach((card, index) => {
  card.style.transitionDelay = `${index * 0.05}s`;
});
