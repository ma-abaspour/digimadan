
<template>
  <!-- Launch Banner Placeholder -->
  <div class="bg-blue-500 text-white py-2 text-center text-sm">
    کامل ترین پلتفرم معدن کشور در حال توسعه است
  </div>

  <header
    class="sticky top-0 z-10 flex h-16 items-center justify-center border-b border-zinc-200 bg-white px-6 py-5 dark:border-white/10 dark:bg-zinc-950">
    <div class="mx-auto flex w-full items-center justify-between md:max-w-7xl">
      <!-- Logo and Title -->
      <NuxtLink to="/" class="relative flex items-center space-x-2">
        <div class="relative h-6 w-6 bg-gray-300 rounded-full overflow-hidden">
          <div class="absolute inset-0 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 animate-spin-slow">
          </div>
        </div>
        <div class="text-sm font-medium text-zinc-950 dark:text-white">
          دیجی معدن
        </div>
        <span class="mb-4 ml-2 select-none rounded bg-zinc-800 px-1.5 py-0.5 text-[10px] font-medium text-zinc-50">
          آزمایشی
        </span>
      </NuxtLink>

      <!-- Navigation Links -->
      <div class="flex items-center space-x-6">
        <nav class="hidden items-center space-x-6 sm:flex">
          <NuxtLink to="/"
            class="text-sm font-medium text-zinc-700 hover:text-zinc-950 dark:text-zinc-300 dark:hover:text-white">
            محصولات
          </NuxtLink>
          <NuxtLink to="/"
            class="text-sm font-medium text-zinc-700 hover:text-zinc-950 dark:text-zinc-300 dark:hover:text-white">
            تماس با ما
          </NuxtLink>
        </nav>

        <!-- Divider -->
        <div class="hidden h-8 w-[0.5px] bg-zinc-200 dark:bg-zinc-800 sm:flex"></div>

        <!-- Social Links and Theme Switch Placeholder -->
        <nav class="flex items-center space-x-2">
          <a href="/" target="_blank" rel="noopener noreferrer"
            class="inline-flex h-9 w-9 items-center justify-center bg-zinc-950 rounded-full">
            <Icon name="uil:user" style="color: white" />
          </a>
          <button class="h-9 w-9 bg-zinc-950 rounded-full">🌙</button>
        </nav>
      </div>
    </div>
  </header>

  <!-- Particle Background Section -->
  <section class="relative bg-zinc-950 text-white py-20 px-6 lg:py-32 lg:px-8 min-h-screen overflow-hidden">
    <canvas id="particleCanvas" class="absolute inset-0"></canvas>
    <div class="relative z-10 text-center">
      <h1 class="lg:text-xl font-bold">
        دیجی معدن، پیشتاز صنعت نوین ایران
      </h1>
      <p class="mt-6 mx-auto text-center max-w-xl">
        راهکارهای پیشرفته برای مدیریت، آنالیز و بهینه‌سازی فرآیندهای معدنی. به ما بپیوندید و آینده معدن را متحول کنید
      </p>
      <div class="mt-8 flex justify-center space-x-4">
        <NuxtLink to="/"
          class="bg-white text-zinc-950 font-medium text-sm py-3 px-6 rounded-lg shadow-lg hover:bg-gray-100 transition">
          مشاهده محصولات
        </NuxtLink>
        <NuxtLink to="/"
          class="bg-zinc-800 text-white font-medium text-sm py-3 px-6 rounded-lg shadow-lg hover:bg-zinc-700 transition">
          عضویت
        </NuxtLink>
      </div>
    </div>

        <div class="bg-zinc-950 text-white">
      <div class="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-5xl lg:px-8">
        <h2 class="sr-only">Products</h2>

        <div class="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 xl:gap-x-8">

          <NuxtLink to="#" class="group">
            <img src="https://tailwindui.com/plus/img/ecommerce-images/category-page-04-image-card-01.jpg"
              alt="بطری باریک و بلند چینی با بدنه بافت طبیعی خاک رس و درب چوب پنبه‌ای."
              class="aspect-square w-full rounded-lg bg-gray-200 object-cover group-hover:opacity-75 xl:aspect-[7/8]">
            <h3 class="mt-4 text-lg font-semibold text-gray-400 text-right" dir="rtl">بطری خاکی</h3>
            <p class="mt-1 text-sm text-gray-500 text-right" dir="rtl">محصولی ساده و زیبا برای نگهداری مایعات.</p>
          </NuxtLink>

          <NuxtLink to="#" class="group">
            <img src="https://tailwindui.com/plus/img/ecommerce-images/category-page-04-image-card-02.jpg"
              alt="بطری عایق شده سبز زیتونی با درب پیچی پخش شده و سطح صاف"
              class="aspect-square w-full rounded-lg bg-gray-200 object-cover group-hover:opacity-75 xl:aspect-[7/8]">
            <h3 class="mt-4 text-lg font-semibold text-gray-400 text-right" dir="rtl">لیوان عشایری</h3>
            <p class="mt-1 text-sm text-gray-500 text-right" dir="rtl">ایده‌آل برای مسافرت و نوشیدنی‌های گرم.</p>
          </NuxtLink>

          <NuxtLink to="#" class="group">
            <img src="https://tailwindui.com/plus/img/ecommerce-images/category-page-04-image-card-03.jpg"
              alt="شخصی از یک قلم برای خط زدن یک کار از کارت کاغذی بهره‌وری استفاده می‌کند"
              class="aspect-square w-full rounded-lg bg-gray-200 object-cover group-hover:opacity-75 xl:aspect-[7/8]">
            <h3 class="mt-4 text-lg font-semibold text-gray-400 text-right" dir="rtl">کارت کاغذی تمرکز</h3>
            <p class="mt-1 text-sm text-gray-500 text-right" dir="rtl">بهترین ابزار برای مدیریت کارهای روزانه.</p>
          </NuxtLink>

        </div>
      </div>
    </div>

  </section>

  
  <footer class="bg-white dark:bg-zinc-950 w-full" dir="rtl">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        <!-- Top section with logo and links -->
        <div class="flex flex-col sm:flex-row justify-between items-center sm:items-start">
            <!-- Logo and title -->
            <div class="flex items-center justify-between mb-4 sm:mb-0">
                <div class="relative h-6 w-6 bg-gray-300 rounded-full overflow-hidden">
                    <div class="absolute inset-0 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 animate-spin-slow"></div>
                </div>
                <span class="text-2xl font-semibold whitespace-nowrap dark:text-white ms-3">دیجی معدن</span>
            </div>
            <!-- Links section -->
            <div class="flex flex-row gap-4 sm:gap-8">
                <NuxtLink to="#" class="block text-gray-500 dark:text-gray-400 hover:underline">سیاست حفظ حریم خصوصی</NuxtLink>
                <NuxtLink to="#" class="block text-gray-500 dark:text-gray-400 hover:underline">شرایط و قوانین</NuxtLink>
            </div>
        </div>

        <!-- Divider line -->
        <hr class="my-3 border-gray-200 sm:mx-auto dark:border-gray-700" />

        <!-- Bottom section with copyright and social links -->
        <div class="flex flex-col sm:flex-row justify-between items-center sm:items-start pb-32">
            <!-- Copyright text -->
            <span class="text-sm text-gray-500 dark:text-gray-400 text-center sm:text-left">
                © 2023
                <NuxtLink to="https://flowbite.com/" class="hover:underline">دیجی معدن™</NuxtLink>. تمامی حقوق محفوظ است.
            </span>

            <!-- Social media icons -->
            <div class="flex mt-4 sm:mt-0">
                <NuxtLink to="#" class="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5">
                    <Icon name="uil:facebook" style="color: white; font-size: 16px;" />
                    <span class="sr-only">صفحه فیسبوک</span>
                </NuxtLink>
                <NuxtLink to="#" class="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5">
                    <Icon name="uil:discord" style="color: white; font-size: 16px;" />
                    <span class="sr-only">جامعه دیسکورد</span>
                </NuxtLink>
                <NuxtLink to="#" class="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5">
                    <Icon name="uil:twitter" style="color: white; font-size: 16px;" />
                    <span class="sr-only">صفحه توییتر</span>
                </NuxtLink>
            </div>
        </div>

    </div>
</footer>

</template>

<script setup>
import { onMounted } from 'vue';

onMounted(() => {
  const canvas = document.getElementById("particleCanvas");
  const ctx = canvas.getContext("2d");

  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  const particlesArray = [];
  const colors = ["#ffffff1a", "#ffffff33", "#ffffff4d"];

  class Particle {
    constructor(x, y, size, velocity) {
      this.x = x;
      this.y = y;
      this.size = size;
      this.color = colors[Math.floor(Math.random() * colors.length)];
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

  function initParticles() {
    particlesArray.length = 0;
    const numParticles = 80;

    for (let i = 0; i < numParticles; i++) {
      const size = Math.random() * 3 + 1;
      const x = Math.random() * canvas.width;
      const y = Math.random() * canvas.height;
      const velocity = {
        x: (Math.random() - 0.5) * 0.5,
        y: (Math.random() - 0.5) * 0.5,
      };

      particlesArray.push(new Particle(x, y, size, velocity));
    }
  }

  function animateParticles() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particlesArray.forEach((particle) => particle.update());
    requestAnimationFrame(animateParticles);
  }

  window.addEventListener("resize", () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    initParticles();
  });

  initParticles();
  animateParticles();
});
</script>

<style scoped>
canvas {
  @apply absolute inset-0;
}
</style>
