
<template>
  <div class="min-w-screen min-h-screen bg-zinc-950 relative overflow-hidden">
    <canvas id="bubbleCanvas" class="absolute inset-0"></canvas>
    <h1 class="absolute top-1/2 left-1/2 text-white text-4xl font-bold transform -translate-x-1/2 -translate-y-1/2 z-10">
      Blowing Bubbles with Splash 🫧
    </h1>
  </div>
</template>

<script setup>
import { onMounted } from "vue";

onMounted(() => {
  const canvas = document.getElementById("bubbleCanvas");
  const ctx = canvas.getContext("2d");

  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  const bubblesArray = [];
  const particlesArray = [];

  // Class for the bubble
  class Bubble {
    constructor(x, y, size, velocityX, velocityY, growthRate) {
      this.x = x;
      this.y = y;
      this.size = size;
      this.velocityX = velocityX;
      this.velocityY = velocityY;
      this.growthRate = growthRate;
      this.color = "rgba(255, 255, 255, 0.1)";
      this.alpha = Math.random() * 0.3 + 0.2;
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
      this.x += this.velocityX; // Drift horizontally
      this.y -= this.velocityY; // Float upward
      this.size += this.growthRate; // Grow the bubble

      // If the bubble grows too large, create a splash effect and reset
      if (this.size > 30) {
        this.pop();
      }

      this.draw();
    }

    pop() {
      // Create particles for the splash effect
      for (let i = 0; i < 10; i++) {
        particlesArray.push(
          new Particle(
            this.x,
            this.y,
            Math.random() * 2 + 1, // Particle size
            (Math.random() - 0.5) * 4, // Horizontal velocity
            (Math.random() - 0.5) * 4, // Vertical velocity
            "rgba(255, 255, 255, 0.2)", // Color
            Math.random() * 0.02 + 0.01 // Fade-out rate
          )
        );
      }
      this.reset();
    }

    reset() {
      // Reset the bubble after it pops
      this.size = Math.random() * 5 + 2; // Start small
      this.x = Math.random() * canvas.width;
      this.y = canvas.height + this.size;
      this.velocityX = (Math.random() - 0.5) * 1; // New horizontal velocity
      this.velocityY = Math.random() * 1.2 + 0.3; // New upward velocity
      this.growthRate = Math.random() * 0.05 + 0.02; // New growth rate
    }
  }

  // Class for the splash particles
  class Particle {
    constructor(x, y, size, velocityX, velocityY, color, fadeRate) {
      this.x = x;
      this.y = y;
      this.size = size;
      this.velocityX = velocityX;
      this.velocityY = velocityY;
      this.color = color;
      this.alpha = 1; // Start fully visible
      this.fadeRate = fadeRate; // Rate at which the particle fades out
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
      this.alpha -= this.fadeRate; // Gradually fade out
      if (this.alpha > 0) {
        this.draw();
      }
    }
  }

  function initBubbles() {
    bubblesArray.length = 0;
    const numBubbles = 60; // Adjust for performance

    for (let i = 0; i < numBubbles; i++) {
      const size = Math.random() * 5 + 2;
      const x = Math.random() * canvas.width;
      const y = Math.random() * canvas.height;
      const velocityX = (Math.random() - 0.5) * 1;
      const velocityY = Math.random() * 1.2 + 0.3;
      const growthRate = Math.random() * 0.05 + 0.02;

      bubblesArray.push(new Bubble(x, y, size, velocityX, velocityY, growthRate));
    }
  }

  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Update and draw bubbles
    bubblesArray.forEach((bubble) => bubble.update());

    // Update and draw splash particles
    particlesArray.forEach((particle, index) => {
      particle.update();
      // Remove particles that have completely faded
      if (particle.alpha <= 0) {
        particlesArray.splice(index, 1);
      }
    });

    requestAnimationFrame(animate);
  }

  function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    initBubbles();
  }

  window.addEventListener("resize", resizeCanvas);

  initBubbles();
  animate();
});
</script>

<style scoped>
canvas {
  @apply absolute inset-0;
}
</style>
