// Reveal animations
const revealEls = document.querySelectorAll(
  ".reveal, .reveal-stagger"
);

const io = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("in");
        io.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.18,
  }
);

revealEls.forEach((el) => io.observe(el));


// Magnetic buttons
document.querySelectorAll("[data-magnetic]").forEach((btn) => {
  btn.addEventListener("mousemove", (e) => {
    const rect = btn.getBoundingClientRect();

    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    btn.style.transform = `translate(${x * 0.25}px, ${y * 0.35}px)`;
  });

  btn.addEventListener("mouseleave", () => {
    btn.style.transform = "translate(0, 0)";
  });
});


// Count-up statistics
const statVals = document.querySelectorAll(".stat .value");

const statIo = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const el = entry.target;
        const target = parseInt(el.getAttribute("data-count"), 10);

        const span = el.querySelector("span");
        let current = 0;

        const step = Math.max(
          1,
          Math.round(target / 30)
        );

        const tick = () => {
          current = Math.min(target, current + step);
          span.textContent = current;

          if (current < target) {
            requestAnimationFrame(tick);
          }
        };

        tick();
        statIo.unobserve(el);
      }
    });
  },
  {
    threshold: 0.5,
  }
);

statVals.forEach((el) => statIo.observe(el));


// Hero image parallax effect
window.addEventListener("scroll", () => {
  const y = window.scrollY;
  const photo = document.querySelector(".hero-photo");

  if (photo && y < window.innerHeight) {
    photo.style.transform = `scale(1.06) translateY(${y * 0.06}px)`;
  }
});