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
          درباره ما
        </NuxtLink>
      </div>
    </div>

    <div class="bg-white dark:bg-zinc-950 dark:text-white">
      <div class="mx-auto max-w-2xl px-4 py-8 sm:px-6 sm:py-12 lg:max-w-5xl lg:px-8">
        <h2 class="sr-only">Products</h2>

        <div class="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 xl:gap-x-8">
          <NuxtLink to="#" class="group">
            <NuxtImg src="/black_gypsum.png"
              class="aspect-square w-full rounded-lg bg-gray-200 object-cover group-hover:opacity-75 xl:aspect-[7/8]" />
            <h3 class="mt-4 text-lg font-semibold text-gray-400 text-right" dir="rtl">گچ سیاه</h3>
            <p class="mt-1 text-sm text-gray-500 text-right" dir="rtl">گچ سیاه با کیفیت بالا برای استفاده در ساخت و ساز.
            </p>
          </NuxtLink>

          <NuxtLink to="#" class="group">
            <NuxtImg src="/raw_hematite.png"
              class="aspect-square w-full rounded-lg bg-gray-200 object-cover group-hover:opacity-75 xl:aspect-[7/8]" />
            <h3 class="mt-4 text-lg font-semibold text-gray-400 text-right" dir="rtl">هماتیت</h3>
            <p class="mt-1 text-sm text-gray-500 text-right" dir="rtl">هماتیت خام برای استفاده در صنایع مختلف.</p>
          </NuxtLink>

          <NuxtLink to="#" class="group">
            <NuxtImg src="/raw_magnetite.png"
              class="aspect-square w-full rounded-lg bg-gray-200 object-cover group-hover:opacity-75 xl:aspect-[7/8]" />
            <h3 class="mt-4 text-lg font-semibold text-gray-400 text-right" dir="rtl">مگنتیت</h3>
            <p class="mt-1 text-sm text-gray-500 text-right" dir="rtl">مگنتیت خام برای کاربردهای صنعتی و علمی.</p>
          </NuxtLink>
        </div>
      </div>
    </div>

    <div class="flex items-center justify-center bg-zinc-950" dir="rtl">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl w-full ">



        <!-- Enhanced University Card -->
<div class="relative text-center px-10 pt-10 pb-8 bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl shadow-2xl border border-gray-700 hover:shadow-3xl transition-shadow duration-300">
  <!-- Header Icon -->
  <div class="flex justify-center mb-4">
    <div class="bg-green-600 text-white p-3 rounded-full shadow-lg">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l9-5-9-5-9 5 9 5z" />
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l6.16-3.422A12.083 12.083 0 0112 20.944 12.083 12.083 0 015.84 10.578L12 14z" />
      </svg>
    </div>
  </div>

  <!-- Description -->
  <p class="mb-8 text-gray-300 font-bold text-lg leading-relaxed">
    با شرکت در دوره‌های تخصصی، مهارت‌های عملی و کاربردی صنعت معدن را فرا بگیرید.
  </p>

  <!-- Courses List -->
  <div dir="rtl" class="mb-8 text-right text-gray-300 space-y-3">
    <div><span class="text-green-500 text-lg font-bold">•</span>&nbsp;دوره‌های علم و فناوری معدن و علوم مواد</div>
    <div><span class="text-green-500 text-lg font-bold">•</span>&nbsp;دوره‌های آموزش اقتصاد معدن، سرمایه‌گذاری و مدیریت</div>
    <div><span class="text-green-500 text-lg font-bold">•</span>&nbsp;کارگاه‌های نوآوری و تکنولوژی‌های نوین در صنایع معدنی</div>
  </div>

  <!-- Call-to-Action Button -->
  <a href="#university" class="inline-flex items-center px-8 py-3 text-sm font-semibold text-white bg-gradient-to-r from-green-500 to-green-600 rounded-full shadow-lg hover:from-green-600 hover:to-green-500 transform hover:scale-105 transition-transform duration-300">
    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
    </svg>
    ورود به دانشگاه
  </a>
</div>


<!-- Enhanced Community Card -->
<div class="relative text-center px-10 pt-10 pb-8 bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl shadow-2xl border border-gray-700 hover:shadow-3xl transition-shadow duration-300">
  <!-- Header Icon -->
  <div class="flex justify-center mb-4">
    <div class="bg-blue-600 text-white p-3 rounded-full shadow-lg">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a4 4 0 00-3-3.87M9 20h6M3 20h5m10-6a4 4 0 10-8 0m8 0a4 4 0 01-8 0m0 0a4 4 0 00-3-3.87V4a2 2 0 012-2h6a2 2 0 012 2v6.13a4 4 0 00-3 3.87z" />
      </svg>
    </div>
  </div>

  <!-- Description -->
  <p class="mb-8 text-gray-300 font-bold text-lg leading-relaxed">
    به کامیونیتی ما بپیوندید و با متخصصین، کارآفرینان و صاحبان صنایع معدن ارتباط برقرار کنید.
  </p>

  <!-- Community Benefits List -->
  <div dir="rtl" class="mb-8 text-right text-gray-300 space-y-3">
    <div><span class="text-blue-500 text-lg font-bold">•</span>&nbsp;شبکه‌سازی با معدن‌داران و متخصصین صنعت معدن</div>
    <div><span class="text-blue-500 text-lg font-bold">•</span>&nbsp;به اشتراک‌گذاری ایده‌ها و کشف فرصت‌های جدید همکاری</div>
    <div><span class="text-blue-500 text-lg font-bold">•</span>&nbsp;دسترسی به رویدادها و همایش‌های تخصصی صنعت معدن</div>
  </div>

  <!-- Call-to-Action Button -->
  <a href="#community" class="inline-flex items-center px-8 py-3 text-sm font-semibold text-white bg-gradient-to-r from-blue-500 to-blue-600 rounded-full shadow-lg hover:from-blue-600 hover:to-blue-500 transform hover:scale-105 transition-transform duration-300">
    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h8m0 0l-4-4m4 4l-4 4" />
    </svg>
    درخواست عضویت
  </a>
</div>



      </div>
    </div>




  </section>

  <Footer />


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

