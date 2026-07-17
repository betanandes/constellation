const planet = document.querySelector(".planet");
const glow = document.querySelector(".glow");
const nebula = document.querySelector(".nebula");
const stars = document.querySelector(".stars");
const centerScene = document.querySelector(".centerScene");

let mouseX = 0;
let mouseY = 0;

let currentX = 0;
let currentY = 0;

document.addEventListener("mousemove", (e) => {
  mouseX = (e.clientX / window.innerWidth - 0.5) * 2;

  mouseY = (e.clientY / window.innerHeight - 0.5) * 2;
});

function animateParallax() {
  currentX += (mouseX - currentX) * 0.06;
  currentY += (mouseY - currentY) * 0.06;

  if (nebula) {
    nebula.style.transform = `translate(${currentX * 35}px, ${currentY * 35}px) scale(1.08)`;
  }

  if (stars) {
    stars.style.transform = `translate(${currentX * 12}px, ${currentY * 12}px)`;
  }

  if (glow) {
    glow.style.transform = `translate(calc(-50% + ${currentX * 20}px), calc(-50% + ${currentY * 20}px))`;
  }

  if (planet) {
    planet.style.transform = `translate(calc(-50% + ${currentX * 10}px), calc(-50% + ${currentY * 10}px))`;
  }

  if (centerScene) {
    centerScene.style.transform = `translate(calc(-50% + ${currentX * 4}px), calc(-50% + ${currentY * 4}px))`;
  }

  requestAnimationFrame(animateParallax);
}

animateParallax();
