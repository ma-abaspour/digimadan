



<template>
  <div class="min-w-screen min-h-screen bg-zinc-950 flex items-center justify-center relative overflow-hidden">
    <canvas id="particleCanvas" class="absolute inset-0"></canvas>
    <h1 class="text-white text-4xl font-bold z-10">
      Welcome to My App
    </h1>
  </div>
</template>

<script setup>
import { onMounted } from "vue";

onMounted(() => {
  const canvas = document.getElementById("particleCanvas");
  const ctx = canvas.getContext("2d");

  // Set canvas size
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  const particlesArray = [];
  const colors = ["#ffffff1a", "#ffffff33", "#ffffff4d"]; // Subtle transparency

  // Create a particle class
  class Particle {
    constructor(x, y, size, color, velocity) {
      this.x = x;
      this.y = y;
      this.size = size;
      this.color = color;
      this.velocity = velocity;
    }

    draw() {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
      ctx.fillStyle = this.color;
      ctx.fill();
    }

    update() {
      this.x += this.velocity.x;
      this.y += this.velocity.y;

      // Bounce from edges
      if (this.x + this.size > canvas.width || this.x - this.size < 0) {
        this.velocity.x *= -1;
      }
      if (this.y + this.size > canvas.height || this.y - this.size < 0) {
        this.velocity.y *= -1;
      }

      this.draw();
    }
  }

  // Initialize particles
  function init() {
    particlesArray.length = 0;
    const numberOfParticles = 80; // Reduced for subtlety

    for (let i = 0; i < numberOfParticles; i++) {
      const size = Math.random() * 3 + 1; // Smaller particles
      const x = Math.random() * (canvas.width - size * 2) + size;
      const y = Math.random() * (canvas.height - size * 2) + size;
      const color = colors[Math.floor(Math.random() * colors.length)];
      const velocity = {
        x: (Math.random() - 0.5) * 0.5, // Slower movement
        y: (Math.random() - 0.5) * 0.5,
      };

      particlesArray.push(new Particle(x, y, size, color, velocity));
    }
  }

  // Animation loop
  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particlesArray.forEach((particle) => particle.update());
    requestAnimationFrame(animate);
  }

  // Handle resizing
  window.addEventListener("resize", () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    init();
  });

  // Start animation
  init();
  animate();
});
</script>

<style scoped>
canvas {
  @apply absolute inset-0;
}
</style>
