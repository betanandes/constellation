const universeAudio = new Audio("assets/audio/music.mp3");

universeAudio.loop = true;

function iniciarAudio() {
  if (universeAudio.paused) {
    universeAudio.volume = 0;

    universeAudio
      .play()
      .then(() => {
        let volume = 0;

        const fade = setInterval(() => {
          volume += 0.02;

          universeAudio.volume = volume;

          if (volume >= 0.6) {
            clearInterval(fade);
          }
        }, 100);
      })
      .catch(() => {});
  }
}
