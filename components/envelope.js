const envelope = document.querySelector(".cosmicEnvelope");

const envelopeTitle = document.querySelector(".cosmicLetterTitle");

const envelopeText = document.querySelector(".cosmicLetterText");

let cartaAtual = null;

function abrirEnvelopeCosmico(pessoa) {
  if (!envelope) {
    console.log("Envelope não encontrado");

    return;
  }

  cartaAtual = pessoa;

  envelopeTitle.textContent = pessoa.nome;

  envelopeText.textContent = "";

  envelope.classList.add("active");

  setTimeout(() => {
    envelope.classList.add("open");

    escreverTexto(pessoa.mensagem, envelopeText);
  }, 1200);
}

function fecharEnvelopeCosmico() {
  if (!envelope) return;

  envelope.classList.remove("open");

  setTimeout(() => {
    envelope.classList.remove("active");
  }, 800);
}
