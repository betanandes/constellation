import "./components/universe.js";
import "./components/particles.js";
import "./components/parallax.js";
import "./components/audio.js";

import { tocarSom, iniciarMusica } from "./components/audio.js";
import { mostrarEnvelope, desenharFeixe } from "./components/envelope.js";

let integrantes = {};
const startMessage = document.querySelector(".startMessage");

async function carregarDados() {
  try {
    const response = await fetch("assets/data/integrantes.json");
    integrantes = await response.json();
  } catch (e) {
    console.error("Erro ao carregar integrantes.json", e);
  }
}

// Função para reexibir a mensagem e os membros ao fechar o envelope
function configurarFechamento() {
  const closeBtn = document.querySelector(".closeLetter");
  if (closeBtn) {
    closeBtn.addEventListener("click", () => {
      // Reexibe a mensagem inicial
      startMessage.classList.remove("hidden");

      // Reexibe todos os membros (incluindo os extras)
      document.querySelectorAll(".member").forEach((m) => {
        m.classList.remove("hidden");
      });
    });
  }
}

carregarDados().then(() => {
  document.querySelectorAll(".member").forEach((member) => {
    member.addEventListener("click", () => {
      tocarSom("click");

      // Esconde a mensagem ao clicar no membro
      startMessage.classList.add("hidden");

      // Esconde TODOS os membros (incluindo os extras) ao clicar em um deles
      document
        .querySelectorAll(".member")
        .forEach((m) => m.classList.add("hidden"));

      const nome = member.textContent.replace("✦", "").trim().toLowerCase();
      const pessoa = integrantes[nome];

      if (pessoa) {
        desenharFeixe(member);

        setTimeout(() => {
          mostrarEnvelope(pessoa);
          configurarFechamento(); // Garante que o botão de fechar está escutando
        }, 900);
      }
    });
  });
});

document.body.addEventListener(
  "click",
  () => {
    iniciarMusica();
  },
  { once: true },
);
