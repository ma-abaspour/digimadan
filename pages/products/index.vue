

<template>

  <Navigation />

  <section class="relative bg-white dark:bg-zinc-950 dark:text-white py-20 px-6 lg:py-32 lg:px-8 min-h-screen">

    <div class="bg-white dark:bg-zinc-950 dark:text-white">
      <div class="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-5xl lg:px-8">

        <div class="text-right mb-12">
          <h1 class="text-3xl font-bold text-gray-900 dark:text-gray-100 sm:text-4xl" dir="rtl">محصولات پلتفرم دیجی‌معدن</h1>
          <p class="mt-2 text-lg text-gray-600 dark:text-gray-400 sm:text-xl" dir="rtl">
            ارائه‌دهنده بهترین و باکیفیت‌ترین مواد معدنی برای تمامی صنایع.
          </p>
        </div>




        <div class="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 xl:gap-x-8">

          <NuxtLink to="/products/black-gypsum">
            <NuxtImg src="/black_gypsum.png"
              class="aspect-square w-full rounded-lg bg-gray-200 object-cover group-hover:opacity-75 xl:aspect-[7/8]" />
            <h3 class="mt-4 text-lg font-semibold text-gray-400 text-right" dir="rtl">گچ سیاه</h3>
            <p class="mt-1 text-sm text-gray-500 text-right" dir="rtl">گچ سیاه با کیفیت بالا برای استفاده در ساخت و ساز.
            </p>
          </NuxtLink>

          <NuxtLink to="/products/hematite">
            <NuxtImg src="/raw_hematite.png"
              class="aspect-square w-full rounded-lg bg-gray-200 object-cover group-hover:opacity-75 xl:aspect-[7/8]" />
            <h3 class="mt-4 text-lg font-semibold text-gray-400 text-right" dir="rtl">هماتیت</h3>
            <p class="mt-1 text-sm text-gray-500 text-right" dir="rtl">هماتیت خام برای استفاده در صنایع مختلف.</p>
          </NuxtLink>

          <NuxtLink to="/products/magnetite">
            <NuxtImg src="/raw_magnetite.png"
              class="aspect-square w-full rounded-lg bg-gray-200 object-cover group-hover:opacity-75 xl:aspect-[7/8]" />
            <h3 class="mt-4 text-lg font-semibold text-gray-400 text-right" dir="rtl">مگنتیت</h3>
            <p class="mt-1 text-sm text-gray-500 text-right" dir="rtl">مگنتیت خام برای کاربردهای صنعتی و علمی.</p>
          </NuxtLink>

        </div>
      </div>
    </div>

  </section>

  <Footer />


</template>