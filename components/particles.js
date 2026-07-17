const canvas = document.getElementById("particles");
const ctx = canvas.getContext("2d");

let particles = [];

function resize() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}

window.addEventListener("resize", resize);
resize();

class Particle {
  constructor() {
    this.reset();
  }

  reset() {
    this.x = Math.random() * canvas.width;
    this.y = Math.random() * canvas.height;

    this.radius = Math.random() * 2 + 0.5;

    this.speed = Math.random() * 0.25 + 0.05;

    this.opacity = Math.random() * 0.8 + 0.2;

    this.blur = Math.random() * 10;
  }

  update() {
    this.y -= this.speed;

    if (this.y < -10) {
      this.y = canvas.height + 10;

      this.x = Math.random() * canvas.width;
    }
  }

  draw() {
    ctx.beginPath();

    ctx.fillStyle = `rgba(170,220,255,${this.opacity})`;

    ctx.shadowBlur = this.blur;

    ctx.shadowColor = "#8fd6ff";

    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);

    ctx.fill();
  }
}

for (let i = 0; i < 220; i++) {
  particles.push(new Particle());
}

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  particles.forEach((p) => {
    p.update();

    p.draw();
  });

  requestAnimationFrame(animate);
}

animate();
