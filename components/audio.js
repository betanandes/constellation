// audio.js
const music = new Audio("assets/audio/music.mp3"); // Caminho corrigido
music.loop = true;
music.volume = 0.2;

export function iniciarMusica() {
  music.play().catch((e) => console.log("Aguardando interação."));
}

export function tocarSom(efeito) {
  const audio = new Audio(`assets/audio/${efeito}.mp3`); // Caminho corrigido
  audio.volume = 0.5;
  audio.play().catch((e) => console.error("Erro ao tocar som:", e));
}
