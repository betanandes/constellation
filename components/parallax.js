const scene = document.querySelector(".centerScene");

const planet = document.querySelector(".planet");
const glow = document.querySelector(".glow");
const nebula = document.querySelector(".nebula");
const stars = document.querySelector(".stars");

document.addEventListener("mousemove", (event) => {
  const x = event.clientX / window.innerWidth - 0.5;

  const y = event.clientY / window.innerHeight - 0.5;

  if (planet) {
    planet.style.transform = `
translate(-50%, -50%)
translate(${x * 18}px, ${y * 18}px)
`;
  }

  if (glow) {
    glow.style.transform = `
translate(-50%, -50%)
translate(${x * 8}px, ${y * 8}px)
`;
  }

  if (nebula) {
    nebula.style.transform = `
translate(${x * 20}px, ${y * 20}px)
scale(1.08)
`;
  }

  if (stars) {
    stars.style.transform = `
translate(${x * 35}px, ${y * 35}px)
`;
  }
});
