


<template>
  <div class="min-h-screen flex items-center justify-center bg-zinc-950 relative overflow-hidden" dir="rtl">
    <!-- Canvas Background -->
    <canvas id="particleCanvas" class="absolute inset-0"></canvas>

    <!-- Login Card -->
    <div class="relative w-full max-w-md mx-auto bg-gray-800 p-8 rounded-2xl shadow-lg border border-gray-700 z-10">
      <h1 class="text-3xl font-extrabold text-white text-center mb-8 tracking-tight">ورود به حساب</h1>
      <form @submit.prevent="handleLogin" class="space-y-6">
        <!-- Email Field -->
        <div>
          <label for="email" class="block text-sm font-medium text-gray-300 mb-2">ایمیل</label>
          <input
            v-model="email"
            type="email"
            id="email"
            placeholder="example@domain.com"
            class="w-full bg-gray-700 border border-gray-600 rounded-lg p-4 text-gray-200 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <!-- Password Field -->
        <div>
          <label for="password" class="block text-sm font-medium text-gray-300 mb-2">گذرواژه</label>
          <input
            v-model="password"
            type="password"
            id="password"
            placeholder="••••••••"
            class="w-full bg-gray-700 border border-gray-600 rounded-lg p-4 text-gray-200 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <!-- Remember Me and Forgot Password -->
        <div class="flex items-center justify-between">
          <label class="flex items-center text-sm text-gray-300">
            <input type="checkbox" class="w-4 h-4 bg-gray-700 border-gray-600 rounded focus:ring-blue-500">
            <span class="mr-2">مرا به خاطر بسپار</span>
          </label>
          <a href="#" class="text-sm text-blue-400 hover:underline">فراموشی گذرواژه؟</a>
        </div>
        <!-- Submit Button -->
        <button
          type="submit"
          class="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg text-lg py-3 transition focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          ورود
        </button>
      </form>
      <!-- Sign Up Link -->
      <p class="mt-6 text-center text-sm text-gray-400">
        حساب کاربری ندارید؟
        <a href="#" class="text-blue-400 hover:underline">ثبت نام</a>
      </p>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import { useState } from '#app'; // Use Nuxt 3's state for temporary login tracking

const email = ref('');
const password = ref('');
const router = useRouter();

// Use state for tracking login status (in-memory)
const isLoggedIn = useState('isLoggedIn', () => false);

// Handle login functionality
const handleLogin = () => {
  // Dummy login check
  if (email.value === 'dummy@example.com' && password.value === 'dummyPassword') {
    // Set the login state to true (in-memory)
    isLoggedIn.value = true;

    // Redirect to the protected page (e.g., dashboard)
    router.push('/');
  } else {
    alert('ایمیل یا گذرواژه اشتباه است');
  }
};

// Particle Canvas Effect
onMounted(() => {
  const canvas = document.getElementById('particleCanvas');
  if (canvas) {
    const ctx = canvas.getContext('2d');

    // Set canvas size
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particlesArray = [];
    const colors = ['#ffffff1a', '#ffffff33', '#ffffff4d']; // Subtle transparency

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

        if (this.x + this.size > canvas.width || this.x - this.size < 0) {
          this.velocity.x *= -1;
        }
        if (this.y + this.size > canvas.height || this.y - this.size < 0) {
          this.velocity.y *= -1;
        }

        this.draw();
      }
    }

    function init() {
      particlesArray.length = 0;
      const numberOfParticles = 80;

      for (let i = 0; i < numberOfParticles; i++) {
        const size = Math.random() * 3 + 1;
        const x = Math.random() * (canvas.width - size * 2) + size;
        const y = Math.random() * (canvas.height - size * 2) + size;
        const color = colors[Math.floor(Math.random() * colors.length)];
        const velocity = {
          x: (Math.random() - 0.5) * 0.5,
          y: (Math.random() - 0.5) * 0.5,
        };

        particlesArray.push(new Particle(x, y, size, color, velocity));
      }
    }

    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particlesArray.forEach((particle) => particle.update());
      requestAnimationFrame(animate);
    }

    window.addEventListener('resize', () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      init();
    });

    init();
    animate();
  }
});
</script>

<style scoped>
canvas {
  @apply absolute inset-0;
}
</style>
