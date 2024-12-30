<template>
  <!-- Launch Banner Placeholder -->
  <div class="bg-blue-500 text-white py-2 text-center text-sm" dir="rtl">
    کامل ترین پلتفرم معدن کشور در حال توسعه است.
  </div>


  <Navigation />

  <section class="relative bg-white dark:bg-zinc-950 dark:text-white py-20 px-6 lg:py-32 lg:px-8 min-h-screen">
    <div class="max-w-7xl mx-auto text-center">
      <h1 class="lg:text-xl font-bold">
        دیجی معدن، پیشتاز صنعت نوین ایران
      </h1>
      <p class="mt-6 mx-auto text-center max-w-xl" dir="rtl">
        راهکارهای پیشرفته برای مدیریت، آنالیز و بهینه‌سازی فرآیندهای معدنی. به ما بپیوندید و آینده معدن را متحول کنید.
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

    <div class="bg-white dark:bg-zinc-950 dark:text-white">
      <div class="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-5xl lg:px-8">
        <h2 class="sr-only">Products</h2>

        <div class="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 xl:gap-x-8">

          <NuxtLink to="#" class="group">
            <NuxtImg src="/black_gypsum.png" class="aspect-square w-full rounded-lg bg-gray-200 object-cover group-hover:opacity-75 xl:aspect-[7/8]" />
            <h3 class="mt-4 text-lg font-semibold text-gray-400 text-right" dir="rtl">گچ سیاه</h3>
            <p class="mt-1 text-sm text-gray-500 text-right" dir="rtl">گچ سیاه با کیفیت بالا برای استفاده در ساخت و ساز.</p>
          </NuxtLink>

          <NuxtLink to="#" class="group">
            <NuxtImg src="/raw_hematite.png" class="aspect-square w-full rounded-lg bg-gray-200 object-cover group-hover:opacity-75 xl:aspect-[7/8]" />
            <h3 class="mt-4 text-lg font-semibold text-gray-400 text-right" dir="rtl">هماتیت</h3>
            <p class="mt-1 text-sm text-gray-500 text-right" dir="rtl">هماتیت خام برای استفاده در صنایع مختلف.</p>
          </NuxtLink>

          <NuxtLink to="#" class="group">
            <NuxtImg src="/raw_magnetite.png" class="aspect-square w-full rounded-lg bg-gray-200 object-cover group-hover:opacity-75 xl:aspect-[7/8]" />
            <h3 class="mt-4 text-lg font-semibold text-gray-400 text-right" dir="rtl">مگنتیت</h3>
            <p class="mt-1 text-sm text-gray-500 text-right" dir="rtl">مگنتیت خام برای کاربردهای صنعتی و علمی.</p>
          </NuxtLink>

        </div>
      </div>
    </div>

  </section>

  <Footer />



  <!-- <div>
    <div class="px-6 lg:px-8">
      <div class="mx-auto md:max-w-7xl">
        <main class="min-w-0 max-w-full flex-1">
          <div class="relative mx-auto mt-20 max-w-md pb-16 text-center">
            <h1 class="text-sm font-medium text-[#0D74CE] dark:text-[#70B8FF]">
              Showcase
            </h1>
            <p class="mb-4 mt-6 text-3xl text-zinc-950 dark:text-zinc-50">
              Building something great with motion-primitives?
            </p>
            <p class="text-base text-zinc-600 dark:text-zinc-200">
              I’d love to feature it! Send me a DM on
              <a
                href="https://x.com/ibelick"
                target="_blank"
                class="text-zinc-950 underline hover:text-zinc-800 dark:text-zinc-50 dark:hover:text-zinc-200"
              >
                X
              </a>
              or email me at
              <a
                href="mailto:julien.thibeaut@gmail.com"
                class="text-zinc-950 underline hover:text-zinc-800 dark:text-zinc-50 dark:hover:text-zinc-200"
              >
                julien.thibeaut@gmail.com
              </a>
            </p>
          </div>

          <div
            class="mx-auto grid max-w-5xl grid-cols-1 gap-6 [mask-image:linear-gradient(to_bottom,black_30%,transparent)] md:grid-cols-2 lg:grid-cols-3"
          >
            <div
              v-for="i in 6"
              :key="i"
              class="h-48 rounded-2xl bg-zinc-100 dark:bg-zinc-900"
            ></div>
          </div>
        </main>
      </div>
    </div>
  </div> -->


</template>

<script setup>

// definePageMeta({
//   middleware: 'auth',
// });


</script>


<style scoped>
@keyframes spin-slow {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.animate-spin-slow {
  animation: spin-slow 4s linear infinite;
}
</style>

