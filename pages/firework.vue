
<template>
  <div class="min-w-screen min-h-screen bg-zinc-900 relative overflow-hidden">
    <canvas id="fireworkCanvas" class="absolute inset-0"></canvas>
    <h1 class="absolute top-1/2 left-1/2 text-white text-4xl font-bold transform -translate-x-1/2 -translate-y-1/2 z-10">
      Fireworks Show 🎆
    </h1>
  </div>
</template>

<script setup>
import { onMounted } from "vue";

onMounted(() => {
  const canvas = document.getElementById("fireworkCanvas");
  const ctx = canvas.getContext("2d");

  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  const fireworks = [];
  const particles = [];

  class Firework {
    constructor(x, y, targetY, color) {
      this.x = x;
      this.y = y;
      this.targetY = targetY;
      this.color = color;
      this.size = 2;
      this.speed = Math.random() * 4 + 4;
      this.exploded = false;
    }

    draw() {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
      ctx.fillStyle = this.color;
      ctx.fill();
    }

    update() {
      if (this.y > this.targetY) {
        this.y -= this.speed;
      } else if (!this.exploded) {
        this.exploded = true;
        for (let i = 0; i < 50; i++) {
          const angle = (Math.PI * 2 * i) / 50;
          const speed = Math.random() * 3 + 2;
          particles.push(
            new Particle(
              this.x,
              this.y,
              Math.cos(angle) * speed,
              Math.sin(angle) * speed,
              this.color
            )
          );
        }
      }
      this.draw();
    }
  }

  class Particle {
    constructor(x, y, velocityX, velocityY, color) {
      this.x = x;
      this.y = y;
      this.velocityX = velocityX;
      this.velocityY = velocityY;
      this.color = color;
      this.size = Math.random() * 3 + 1;
      this.alpha = 1;
      this.decay = Math.random() * 0.02 + 0.01;
    }

    draw() {
      ctx.globalAlpha = this.alpha;
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
      ctx.fillStyle = this.color;
      ctx.fill();
      ctx.globalAlpha = 1;
    }

    update() {
      this.x += this.velocityX;
      this.y += this.velocityY;
      this.alpha -= this.decay;
      this.draw();
    }
  }

  function addFirework() {
    const x = Math.random() * canvas.width;
    const targetY = Math.random() * canvas.height * 0.5;
    const color = `hsl(${Math.random() * 360}, 100%, 50%)`;
    fireworks.push(new Firework(x, canvas.height, targetY, color));
  }

  function animate() {
    ctx.fillStyle = "rgba(0, 0, 0, 0.1)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    fireworks.forEach((firework, index) => {
      firework.update();
      if (firework.exploded) fireworks.splice(index, 1);
    });

    particles.forEach((particle, index) => {
      particle.update();
      if (particle.alpha <= 0) particles.splice(index, 1);
    });

    requestAnimationFrame(animate);
  }

  function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }

  window.addEventListener("resize", resizeCanvas);

  setInterval(addFirework, 700);
  animate();
});
</script>

<style scoped>
canvas {
  @apply absolute inset-0;
}
</style>
