import "./components/universe.js";
import "./components/particles.js";
import "./components/parallax.js";
import "./components/audio.js";
import { mostrarEnvelope, desenharFeixe } from "./components/envelope.js";

let integrantes = {};

async function carregarDados() {
  try {
    const response = await fetch("assets/data/integrantes.json");
    integrantes = await response.json();
  } catch (e) {
    console.error("Erro ao carregar integrantes.json", e);
  }
}

carregarDados().then(() => {
  document.querySelectorAll(".member").forEach((member) => {
    member.addEventListener("click", () => {
      const nome = member.textContent.replace("✦", "").trim().toLowerCase();
      const pessoa = integrantes[nome];

      if (pessoa) {
        // 1. Executa o efeito visual do feixe
        desenharFeixe(member);

        // 2. Aguarda um pouco para o feixe "chegar" antes de abrir o envelope
        setTimeout(() => {
          mostrarEnvelope(pessoa);
        }, 900);
      }
    });
  });
});
