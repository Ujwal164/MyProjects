// Set current year in footer
document.getElementById("year").textContent =
  new Date().getFullYear();


// Cursor-tracked spotlight (dynamic hero lighting)
const heroBg = document.getElementById("heroBg");
const spotlight = document.getElementById("spotlight");

function moveSpot(x, y) {
  const rect = heroBg.getBoundingClientRect();

  const px = ((x - rect.left) / rect.width) * 100;
  const py = ((y - rect.top) / rect.height) * 100;

  spotlight.style.setProperty("--mx", `${px}%`);
  spotlight.style.setProperty("--my", `${py}%`);
}

heroBg.addEventListener("mousemove", (e) => {
  moveSpot(e.clientX, e.clientY);
});

heroBg.addEventListener("mouseleave", () => {
  spotlight.style.setProperty("--mx", "70%");
  spotlight.style.setProperty("--my", "20%");
});


// Floating dust particles
const dustField = document.getElementById("dustField");
const DUST_COUNT = 26;

for (let i = 0; i < DUST_COUNT; i++) {
  const particle = document.createElement("span");

  particle.style.left = `${Math.random() * 100}%`;
  particle.style.bottom = `${Math.random() * 40}%`;
  particle.style.animationDelay = `${Math.random() * 14}s`;
  particle.style.animationDuration = `${10 + Math.random() * 10}s`;
  particle.style.opacity = (
    0.3 + Math.random() * 0.5
  ).toFixed(2);

  dustField.appendChild(particle);
}