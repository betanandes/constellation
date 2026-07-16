let integrantes = {};

const overlay = document.querySelector(".overlay");
const letterContainer = document.querySelector(".letterContainer");
const letterTitle = document.querySelector(".letterTitle");
const letterText = document.querySelector(".letterText");
const closeLetter = document.querySelector(".closeLetter");

const audio = new Audio("assets/audio/music.mp3");
audio.loop = true;

async function carregarMensagens() {
  const resposta = await fetch("assets/data/integrantes.json");

  integrantes = await resposta.json();
}

carregarMensagens();

document.querySelectorAll(".member").forEach((member) => {
  member.addEventListener("click", () => {
    abrirCarta(member);
  });
});

function abrirCarta(member) {
  const id = member.classList[1];

  if (id === "s4m") return;

  const pessoa = integrantes[id];

  letterTitle.textContent = pessoa.nome;

  overlay.classList.add("active");
  letterContainer.classList.add("active");

  if (audio.paused) {
    audio.play().catch(() => {});
  }

  escreverTexto(pessoa.mensagem);
}

function escreverTexto(texto) {
  letterText.textContent = "";

  let indice = 0;

  const velocidade = 35;

  const maquina = setInterval(() => {
    letterText.textContent += texto.charAt(indice);

    indice++;

    if (indice >= texto.length) {
      clearInterval(maquina);
    }
  }, velocidade);
}

closeLetter.addEventListener("click", () => {
  overlay.classList.remove("active");

  letterContainer.classList.remove("active");
});
