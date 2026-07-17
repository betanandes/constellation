const overlay = document.querySelector(".overlay");
const envelopeScene = document.getElementById("envelopeScene");

let integrantes = [];

/* ==========================
   CARREGA O JSON
========================== */

async function carregarMensagens() {
  try {
    const resposta = await fetch("assets/data/integrantes.json");
    integrantes = await resposta.json();
  } catch (erro) {
    console.error("Erro ao carregar integrantes.json", erro);
  }
}

carregarMensagens();

/* ==========================
   EVENTOS DOS NOMES
========================== */

document.querySelectorAll(".member").forEach((member) => {
  member.addEventListener("click", () => {
    const nome = member.textContent.replace("✦", "").trim();

    const pessoa = integrantes.find((i) => i.nome === nome);

    if (!pessoa) return;

    abrirCarta(pessoa);
  });
});

/* ==========================
   ABRIR CARTA
========================== */

function abrirCarta(pessoa) {
  overlay.classList.add("active");

  envelopeScene.innerHTML = `
    
    <div class="cosmicEnvelope active">

        <div class="envelopeGlow"></div>

        <div class="envelopeBody">

            <div class="envelopeFlap"></div>

            <div class="envelopeSeal">
                ✦
            </div>

            <div class="paper">

                <button class="closeLetter">
                    ✕
                </button>

                <h2>${pessoa.titulo}</h2>

                <div class="typedText"></div>

            </div>

        </div>

    </div>

    `;

  /* abre a tampa */

  setTimeout(() => {
    document.querySelector(".cosmicEnvelope").classList.add("open");
  }, 900);

  /* começa a escrever */

  setTimeout(() => {
    escreverTexto(pessoa.texto);
  }, 2200);
}

/* ==========================
   EFEITO DIGITAÇÃO
========================== */

function escreverTexto(texto) {
  const destino = document.querySelector(".typedText");

  destino.innerHTML = "";

  let i = 0;

  function escrever() {
    if (i < texto.length) {
      destino.innerHTML += texto.charAt(i);

      i++;

      setTimeout(escrever, 22);
    }
  }

  escrever();
}

/* ==========================
   FECHAR CARTA
========================== */

document.addEventListener("click", (e) => {
  if (!e.target.classList.contains("closeLetter")) return;

  overlay.classList.remove("active");

  envelopeScene.innerHTML = "";
});
