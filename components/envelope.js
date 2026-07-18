const overlay = document.querySelector(".overlay");
const container = document.getElementById("envelopeScene");
const beam = document.getElementById("lightBeam");
const planet = document.querySelector(".planet");

/* ==========================
   FEIXE DE LUZ
========================== */

export function desenharFeixe(member) {
  const rect = member.getBoundingClientRect();

  // Posiciona o brilho no centro do nome clicado
  beam.style.left = `${rect.left + rect.width / 2 - 75}px`;
  beam.style.top = `${rect.top + rect.height / 2 - 75}px`;

  beam.classList.add("active");

  setTimeout(() => {
    beam.classList.remove("active");
  }, 600);
}

/* ==========================
   ENVELOPE
========================== */

import { tocarSom } from "./audio.js";

export function mostrarEnvelope(pessoa) {
  overlay.classList.add("active");

  container.innerHTML = `
<div class="cosmicEnvelope active">

    <div class="envelopeGlow"></div>

    <div class="envelopeBody">

        <div class="envelopeBack"></div>

        <!-- PAPEL -->
        <div class="envelopeLetter">
            <div class="shimmer"></div>
            
            <div class="letterTrail"></div>

            <div class="letterGlow"></div>

            <button class="closeLetter">✕</button>

            <h2 class="letterTitle">${pessoa.titulo}</h2>

            <div class="typedText">${pessoa.texto}</div>

        </div>

        <!-- FRENTE -->
        <div class="envelopeFront"></div>

        <!-- TAMPA -->
        <div class="envelopeFlap"></div>

    </div>

</div>
`;

  const envelope = document.querySelector(".cosmicEnvelope");

  // Dentro de mostrarEnvelope:
  setTimeout(() => {
    envelope.classList.add("openFlap");
  }, 300); // Começa mais cedo

  setTimeout(() => {
    envelope.classList.add("showLetter");
    criarParticulas();
  }, 1000); // Sincronizado com a abertura da tampa

  setTimeout(() => {
    escreverTexto(pessoa.texto);
  }, 2000); // Começa a digitar após a carta chegar na posição

  tocarSom("open"); // Som da tampa abrindo

  setTimeout(() => {
    tocarSom("slide"); // Som da carta subindo
  }, 1300);

  document.querySelector(".closeLetter").addEventListener("click", fecharCarta);
}

/* ==========================
   FECHAR
========================== */

export function fecharCarta() {
  overlay.classList.remove("active");
  container.innerHTML = "";
}

/* ==========================
   DIGITAÇÃO
========================== */

function escreverTexto(texto) {
  const destino = document.querySelector(".typedText");
  destino.innerHTML = "";

  // Adicionamos a classe para o cursor existir
  destino.classList.add("typing");

  let i = 0;
  function escrever() {
    if (i >= texto.length) {
      // Opcional: remover o cursor após terminar se desejar
      // destino.classList.remove("typing");
      return;
    }
    destino.innerHTML += texto.charAt(i);
    i++;
    setTimeout(escrever, 35); // Ajustei para 35ms, um pouco mais natural
  }
  escrever();
}

function criarParticulas() {
  const carta = document.querySelector(".envelopeLetter");
  if (!carta) return;

  for (let i = 0; i < 30; i++) {
    const p = document.createElement("span");
    p.className = "magicParticle";

    p.style.left = `${Math.random() * 100}%`;
    p.style.bottom = "0px";

    const xDist = (Math.random() - 0.5) * 150; // Maior espalhamento horizontal
    p.style.setProperty("--x", xDist + "px");

    // Animação mais lenta para um efeito cinematográfico
    p.style.animationDuration = `${3 + Math.random() * 2}s`;
    p.style.animationDelay = `${Math.random() * 0.5}s`;

    carta.appendChild(p);

    // Aumentamos o tempo de vida para coincidir com a nova animação
    setTimeout(() => p.remove(), 5000);
  }
}
