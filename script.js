// Footer year
document.getElementById("year").textContent = new Date().getFullYear();

// Smooth scroll navigation
document.querySelectorAll(".nav-center a, .btn").forEach(link => {
  if (link.getAttribute("href")?.startsWith("#")) {
    link.addEventListener("click", e => {
      e.preventDefault();
      const target = document.querySelector(link.getAttribute("href"));
      if (target) target.scrollIntoView({ behavior: "smooth" });
    });
  }
});

// Fade-out hero background saat scroll
const viewport = document.querySelector(".viewport");
const heroBg = document.querySelector(".hero-bg");

viewport.addEventListener("scroll", () => {
  let scrollPercent = viewport.scrollTop / viewport.clientHeight;
  heroBg.style.opacity = Math.max(0, 0.25 - scrollPercent * 0.4);
});

// Intersection Observer untuk animasi fade-in-up
const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) entry.target.classList.add("show");
    });
  },
  { threshold: 0.2 }
);

// Daftarkan semua elemen dengan kelas fade-in-up
document.querySelectorAll(".fade-in-up").forEach(el => observer.observe(el));
