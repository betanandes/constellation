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

  if (id === "s4m") return;

  const pessoa = integrantes[id];

  letterTitle.textContent = pessoa.nome;

  overlay.classList.add("active");

  letterContainer.classList.add("active");

  iniciarAudio();

  escreverTexto(pessoa.mensagem, letterText);
}
