let integrantes = {};

const overlay = document.querySelector(".overlay");

const letterContainer = document.querySelector(".letterContainer");

const letterTitle = document.querySelector(".letterTitle");

const letterText = document.querySelector(".letterText");

const closeLetter = document.querySelector(".closeLetter");

async function carregarMensagens() {
  const resposta = await fetch("assets/data/integrantes.json");

  integrantes = await resposta.json();

  iniciarConstellation();
}

carregarMensagens();

closeLetter.addEventListener("click", () => {
  overlay.classList.remove("active");

  letterContainer.classList.remove("active");
});
