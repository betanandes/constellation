const membros = document.querySelectorAll(".member");

membros.forEach((membro) => {
  membro.addEventListener("click", () => {
    console.log("Selecionado:", membro.innerText);
  });
});
