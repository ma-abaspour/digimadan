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


    <div class="flex items-center justify-center bg-white dark:bg-zinc-950" dir="rtl">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl w-full">

        <!-- Enhanced University Card -->
        <div
          class="relative text-center px-10 pt-10 pb-8 bg-gray-100 dark:bg-gradient-to-br dark:from-gray-800 dark:to-gray-900 rounded-3xl shadow-2xl border border-gray-300 dark:border-gray-700 hover:shadow-3xl transition-shadow duration-300">
          <!-- Header Icon -->
          <div class="flex justify-center mb-4">
            <div class="bg-green-600 text-white p-3 rounded-full shadow-lg">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24"
                stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l9-5-9-5-9 5 9 5z" />
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M12 14l6.16-3.422A12.083 12.083 0 0112 20.944 12.083 12.083 0 015.84 10.578L12 14z" />
              </svg>
            </div>
          </div>

          <!-- Description -->
          <p class="mb-8 text-gray-600 dark:text-gray-300 font-bold text-lg leading-relaxed">
            با شرکت در دوره‌های تخصصی، مهارت‌های عملی و کاربردی صنعت معدن را فرا بگیرید.
          </p>

          <!-- Courses List -->
          <div dir="rtl" class="mb-8 text-right text-gray-600 dark:text-gray-300 space-y-3">
            <div><span class="text-green-500 text-lg font-bold">•</span>&nbsp;دوره‌های علم و فناوری معدن و علوم مواد
            </div>
            <div><span class="text-green-500 text-lg font-bold">•</span>&nbsp;دوره‌های آموزش اقتصاد معدن، سرمایه‌گذاری و
              مدیریت</div>
            <div><span class="text-green-500 text-lg font-bold">•</span>&nbsp;کارگاه‌های نوآوری و تکنولوژی‌های نوین در
              صنایع معدنی
            </div>
          </div>

          <!-- Call-to-Action Button -->
          <a href="#university"
            class="inline-flex items-center px-8 py-3 text-sm font-semibold text-white bg-gradient-to-r from-green-500 to-green-600 rounded-full shadow-lg hover:from-green-600 hover:to-green-500 transform hover:scale-105 transition-transform duration-300">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24"
              stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
            ورود به دانشگاه
          </a>
        </div>

        <!-- Enhanced Community Card -->
        <div
          class="relative text-center px-10 pt-10 pb-8 bg-gray-100 dark:bg-gradient-to-br dark:from-gray-800 dark:to-gray-900 rounded-3xl shadow-2xl border border-gray-300 dark:border-gray-700 hover:shadow-3xl transition-shadow duration-300">

          <!-- Header Icon (Fixed and Optimized) -->
          <div class="flex justify-center mb-4">
            <div class="bg-blue-600 text-white p-3 rounded-full shadow-lg">
              <!-- Optimized SVG Icon -->
              <svg class="h-10 w-10" fill="currentColor" viewBox="0 0 1000 1000" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M323 816q11-18 25-40-22-35-55-85-3-4-7-7-1-1-.5-2t1.5-2q32-15 51-46-15-32-15-68 0-29 10-56-22-30-57.5-41.5t-71 0-57 41.5-21.5 67q0 33 19 61t49 42q1 1 1 2t-1 2q-4 3-6 7-44 65-66 102-9 15-9 25 0 21 37.5 36t89.5 15q34 0 68-8 1-20 15-45zm323 18q-28-48-81-126-3-5-8-9-1-1-1-2.5t2-2.5q37-18 60.5-52.5T642 566q0-38-19.5-70.5t-52-51.5-71-19-71 19-51.5 51.5-19 70.5q0 41 23.5 75.5T442 694q2 0 2 1.5t-1 2.5q-5 5-9 10-53 79-80 126-11 19-11 31 0 17 21 31.5t57 23 79 8.5 79-8.5 57-23 21-31.5q0-12-11-31zm206-672h-36v70q0 29-20.5 49.5T746 302H348v8q1 12 10 20t21 8h328l69 68q4 5 9.5 2.5t5.5-8.5l-4-62h65q13 0 22.5-9t9.5-23V194q0-13-9.5-22.5T852 162zM746 99H147q-13 0-22 9t-9 22v102q0 12 9 21.5t22 9.5h66l-13 83q-1 6 4.5 8.5t9.5-1.5l92-90h440q13 0 22-9t9-22V130q0-13-9-22t-22-9zm132 694q-23-39-65-102-3-4-7-7-1-1-1-2t1-2q30-14 49-42t19-61q0-37-22-67t-57-41.5-70.5 0T668 510q9 27 9 56 0 36-15 68 19 30 51 46 1 1 1.5 2t-.5 2q-4 3-7 7-34 51-55 85 14 22 25 40 14 25 15 45 34 8 68 8 52 0 89.5-15t37.5-36q0-10-9-25z" />
              </svg>
            </div>
          </div>

          <!-- Description -->
          <p class="mb-8 text-gray-600 dark:text-gray-300 font-bold text-lg leading-relaxed">
            به کامیونیتی ما بپیوندید و با متخصصین، کارآفرینان و صاحبان صنایع معدن ارتباط برقرار کنید.
          </p>

          <!-- Community Benefits List -->
          <div dir="rtl" class="mb-8 text-right text-gray-600 dark:text-gray-300 space-y-3">
            <div><span class="text-blue-500 text-lg font-bold">•</span>&nbsp;شبکه‌سازی با معدن‌داران و متخصصین صنعت معدن
            </div>
            <div><span class="text-blue-500 text-lg font-bold">•</span>&nbsp;به اشتراک‌گذاری ایده‌ها و کشف فرصت‌های جدید
              همکاری
            </div>
            <div><span class="text-blue-500 text-lg font-bold">•</span>&nbsp;دسترسی به رویدادها و همایش‌های تخصصی صنعت
              معدن
            </div>
          </div>

          <!-- Call-to-Action Button -->
          <a href="#community"
            class="inline-flex items-center px-8 py-3 text-sm font-semibold text-white bg-gradient-to-r from-blue-500 to-blue-600 rounded-full shadow-lg hover:from-blue-600 hover:to-blue-500 transform hover:scale-105 transition-transform duration-300">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24"
              stroke="currentColor">
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

