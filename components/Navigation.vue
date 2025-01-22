
<template>
  <header class="sticky top-0 z-10 flex h-16 items-center justify-center px-6 py-5 bg-white dark:bg-zinc-950">
    <div class="mx-auto flex w-full items-center justify-between md:max-w-7xl">

      <!-- Logo and Title -->
      <NuxtLink to="/" class="relative flex items-center space-x-2">
        <Icon name="local:digimadan-logo" style="color: white;" class="w-16 h-16"/>
        <div class="text-sm font-bold text-zinc-950 dark:text-white">دیجی‌معدن</div>
        <span class="mb-4 select-none rounded bg-zinc-800 px-1.5 py-0.5 text-[10px] font-medium text-zinc-50">آزمایشی</span>
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