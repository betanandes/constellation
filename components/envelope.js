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
  
<div class="cosmicEnvelope">

    <div class="envelopeGlow"></div>

    <div class="envelopeBody">

        <div class="envelopeBack"></div>

        <div class="envelopeLetter">

            <button class="closeLetter">✕</button>

            <h2 class="letterTitle">${pessoa.titulo}</h2>

            <div class="typedText"></div>

        </div>

        <div class="envelopeFront"></div>

        <div class="envelopeFlap"></div>

    </div>

</div>

`;

  const envelope = document.querySelector(".cosmicEnvelope");

  setTimeout(() => {
    envelope.classList.add("active");
  }, 50);

  setTimeout(() => {
    envelope.classList.add("open");
  }, 900);

  setTimeout(() => {
    escreverTexto(pessoa.texto);
  }, 1800);

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
