const canvas = document.getElementById("spaceParticles");

const ctx = canvas.getContext("2d");

let particles = [];

function resizeCanvas() {
  canvas.width = window.innerWidth;

  canvas.height = window.innerHeight;
}

window.addEventListener("resize", resizeCanvas);

resizeCanvas();

class Particle {
  constructor() {
    this.reset();
  }

  reset() {
    this.x = Math.random() * canvas.width;

    this.y = Math.random() * canvas.height;

    this.size = Math.random() * 2 + 0.5;

    this.speedX = (Math.random() - 0.5) * 0.25;

    this.speedY = (Math.random() - 0.5) * 0.25;

    this.opacity = Math.random();

    this.fade = Math.random() * 0.01 + 0.003;
  }

  update() {
    this.x += this.speedX;

    this.y += this.speedY;

    this.opacity += this.fade;

    if (this.opacity >= 1 || this.opacity <= 0) {
      this.fade *= -1;
    }

    if (
      this.x < 0 ||
      this.x > canvas.width ||
      this.y < 0 ||
      this.y > canvas.height
    ) {
      this.reset();
    }
  }

  draw() {
    ctx.beginPath();

    ctx.arc(
      this.x,

      this.y,

      this.size,

      0,

      Math.PI * 2,
    );

    ctx.fillStyle = `
rgba(
180,
220,
255,
${this.opacity}
)
`;

    ctx.fill();
  }
}

function createParticles() {
  particles = [];

  for (let i = 0; i < 220; i++) {
    particles.push(new Particle());
  }
}

function animateParticles() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  particles.forEach((particle) => {
    particle.update();

    particle.draw();
  });

  requestAnimationFrame(animateParticles);
}

createParticles();

animateParticles();
