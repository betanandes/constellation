const universe = document.querySelector(".universe");

const planet = document.querySelector(".planet");

const glow = document.querySelector(".glow");

function iniciarUniverso() {
  if (universe) {
    universe.classList.add("universeReady");
  }

  if (planet) {
    planet.style.opacity = "1";
  }
}

function universoCartaAberta() {
  if (glow) {
    glow.style.animationDuration = "3s";
  }

  if (planet) {
    planet.style.filter = "brightness(1.25)";
  }
}

function universoCartaFechada() {
  if (glow) {
    glow.style.animationDuration = "8s";
  }

  if (planet) {
    planet.style.filter = "brightness(1)";
  }
}

window.addEventListener("load", () => {
  iniciarUniverso();
});
