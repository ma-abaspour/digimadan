
<template>
  <header class="sticky top-0 z-10 flex h-16 items-center justify-center px-6 py-5 bg-white dark:bg-zinc-950">
    <div class="mx-auto flex w-full items-center justify-between md:max-w-7xl">

      <!-- Logo and Title -->
      <NuxtLink to="/" class="relative flex items-center space-x-2">
        <div class="relative h-6 w-6 bg-gray-300 rounded-full overflow-hidden">
          <div class="absolute inset-0 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 animate-spin-slow">
          </div>
        </div>

        <div class="text-sm font-bold text-zinc-950 dark:text-white">دیجی‌معدن</div>
      </NuxtLink>

      <!-- Navigation Links -->
      <div class="flex items-center space-x-6">
        <nav class="hidden items-center space-x-6 sm:flex">
          <NuxtLink to="/products"
            class="text-sm font-medium text-zinc-700 hover:text-zinc-950 dark:text-zinc-300 dark:hover:text-white">
            محصولات
          </NuxtLink>
          <NuxtLink to="https://community.digimadan.com"
            class="text-sm font-medium text-zinc-700 hover:text-zinc-950 dark:text-zinc-300 dark:hover:text-white">
            کامیونیتی
          </NuxtLink>
          <NuxtLink to="/contact"
            class="text-sm font-medium text-zinc-700 hover:text-zinc-950 dark:text-zinc-300 dark:hover:text-white">
            تماس با ما
          </NuxtLink>
        </nav>

        <!-- Divider -->
        <div class="hidden h-8 w-[3px] bg-zinc-200 dark:bg-zinc-800 sm:flex"></div>

        <!-- Social Links and Theme Toggle -->
        <nav class="flex items-center justify-center gap-4">
          <ThemeToggle />
        </nav>


      </div>
    </div>
  </header>
</template>