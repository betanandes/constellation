function iniciarConstellation() {
  const membros = document.querySelectorAll(".member");

  membros.forEach((member) => {
    member.addEventListener("click", () => {
      abrirCarta(member);
    });
  });
}

function abrirCarta(member) {
  const id = member.classList[1];

  // S4M continua apenas como elemento central
  if (id === "s4m") {
    return;
  }

  const pessoa = integrantes[id];

  if (!pessoa) {
    console.log("Pessoa não encontrada:", id);

    return;
  }

  // Escurece o universo

  overlay.classList.add("active");

  // Inicia música

  iniciarAudio();

  // Reação do universo

  if (typeof universoCartaAberta === "function") {
    universoCartaAberta();
  }

  // Abre o envelope com a pessoa escolhida

  abrirEnvelopeCosmico(pessoa);
}
