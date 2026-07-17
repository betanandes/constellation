const overlay = document.querySelector(".overlay");
const container = document.getElementById("envelopeScene");
const beam = document.getElementById("lightBeam");
const planet = document.querySelector(".planet");

/* ==========================
   FEIXE DE LUZ
========================== */

export function desenharFeixe(member) {
  const origem = member.getBoundingClientRect();
  const destino = planet.getBoundingClientRect();

  const x1 = origem.left + origem.width / 2;
  const y1 = origem.top + origem.height / 2;

  const x2 = destino.left + destino.width / 2;
  const y2 = destino.top + destino.height / 2;

  const dx = x2 - x1;
  const dy = y2 - y1;

  const distancia = Math.sqrt(dx * dx + dy * dy);

  const angulo = Math.atan2(dy, dx) * (180 / Math.PI) - 90;

  beam.style.left = `${x1}px`;
  beam.style.top = `${y1}px`;
  beam.style.height = `${distancia}px`;
  beam.style.transform = `rotate(${angulo}deg)`;

  beam.classList.add("active");

  setTimeout(() => {
    beam.classList.remove("active");
  }, 700);
}

/* ==========================
   ENVELOPE
========================== */

export function mostrarEnvelope(pessoa) {
  overlay.classList.add("active");

  container.innerHTML = `
<div class="cosmicEnvelope active">

    <div class="envelopeGlow"></div>

    <div class="envelopeBody">

        <div class="envelopeBack"></div>

        <!-- PAPEL -->
        <div class="envelopeLetter">

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

  setTimeout(() => {
    envelope.classList.add("openFlap");
  }, 500);

  setTimeout(() => {
    envelope.classList.add("showLetter");

    criarParticulas();
  }, 1500);

  setTimeout(() => {
    escreverTexto(pessoa.texto);
  }, 2200);

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

  let i = 0;

  function escrever() {
    if (i >= texto.length) return;

    destino.innerHTML += texto.charAt(i);

    i++;

    setTimeout(escrever, 20);
  }

  escrever();
}

function criarParticulas() {
  const carta = document.querySelector(".envelopeLetter");

  if (!carta) return;

  for (let i = 0; i < 25; i++) {
    const p = document.createElement("span");

    p.className = "magicParticle";

    p.style.left = 50 + Math.random() * 160 + "px";

    p.style.top = "20px";

    p.style.setProperty("--x", Math.random() - 0.5);

    p.style.animationDuration = 2 + Math.random() + "s";

    p.style.animationDelay = Math.random() * 0.4 + "s";

    carta.appendChild(p);

    setTimeout(() => p.remove(), 3000);
  }
}
