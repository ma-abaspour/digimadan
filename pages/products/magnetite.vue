
<template>
  <!-- Launch Banner Placeholder -->
  <div class="bg-blue-500 text-white py-2 text-center text-sm" dir="rtl">
    کامل ترین پلتفرم معدن کشور در حال توسعه است.
  </div>

  <Navigation />

  <section class="relative bg-white dark:bg-zinc-950 dark:text-white py-20 px-6 lg:py-32 lg:px-8 min-h-screen">
    <!-- Magnetite Page Content -->
    <div class="max-w-5xl mx-auto">
      <!-- Page Title -->
      <div class="text-right mb-12">
        <h1 class="text-3xl font-bold text-gray-900 dark:text-gray-100 sm:text-4xl" dir="rtl">
          مگنتیت
        </h1>
        <p class="mt-2 text-lg text-gray-600 dark:text-gray-400 sm:text-xl" dir="rtl">
          سنگ معدنی ارزشمند با خواص مغناطیسی و کاربردهای متعدد در صنعت.
        </p>
      </div>

      <div class="flex flex-col lg:flex-row-reverse items-center lg:items-start gap-8 lg:gap-12">
        <!-- Magnetite Image -->
        <div class="flex-shrink-0 w-full lg:w-1/3">
          <NuxtImg 
            src="/raw_magnetite.png" 
            alt="مگنتیت" 
            class="w-full h-auto max-w-sm mx-auto lg:mx-0 rounded-lg object-cover shadow-lg"
          />
        </div>

        <!-- Magnetite Description -->
        <div class="flex-grow w-full lg:w-2/3">
          <h2 class="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-4" dir="rtl">
            ویژگی‌ها و کاربردها
          </h2>
          <p class="text-gray-600 dark:text-gray-400 leading-relaxed mb-6" dir="rtl">
            مگنتیت یکی از اصلی‌ترین منابع آهن است که به دلیل خواص مغناطیسی خود در صنایع مختلف از جمله فولادسازی،
            تولید مواد مغناطیسی و حتی کاربردهای زیست‌محیطی مورد استفاده قرار می‌گیرد.
          </p>
          <ul class="list-disc list-inside text-gray-600 dark:text-gray-400" dir="rtl">
            <li>استفاده در تولید آهن و فولاد</li>
            <li>کاربرد در فناوری‌های مغناطیسی</li>
            <li>استفاده در تصفیه آب و محیط زیست</li>
            <li>تولید مواد پیشرفته و نانو</li>
          </ul>
        </div>
      </div>

      <!-- Product Features Table -->
      <div class="mt-16">
        <div class="flex justify-center">
          <div class="w-full max-w-2xl overflow-x-auto">
            <table
              class="w-full text-right text-sm text-gray-600 dark:text-gray-400 border border-gray-300 dark:border-gray-700"
              dir="rtl">
              <thead>
                <tr class="bg-gray-100 dark:bg-zinc-800">
                  <th class="px-4 py-2 border-b dark:border-gray-700">ویژگی</th>
                  <th class="px-4 py-2 border-b dark:border-gray-700">توضیحات</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td class="px-4 py-2 border-b dark:border-gray-700">درجه خلوص</td>
                  <td class="px-4 py-2 border-b dark:border-gray-700">۹۶٪</td>
                </tr>
                <tr>
                  <td class="px-4 py-2 border-b dark:border-gray-700">رنگ</td>
                  <td class="px-4 py-2 border-b dark:border-gray-700">سیاه</td>
                </tr>
                <tr>
                  <td class="px-4 py-2 border-b dark:border-gray-700">چگالی</td>
                  <td class="px-4 py-2 border-b dark:border-gray-700">۵.۱۷ گرم/سانتی‌متر مکعب</td>
                </tr>
                <tr>
                  <td class="px-4 py-2 border-b dark:border-gray-700">کاربرد</td>
                  <td class="px-4 py-2 border-b dark:border-gray-700">فولادسازی، فناوری‌های مغناطیسی</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <div class="mt-12 flex justify-center mt-20">
        <div class="bg-gray-100 dark:bg-zinc-800 p-4 md:p-6 rounded-lg shadow-lg max-w-md w-full">
          <h3 class="text-xl md:text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4 text-center" dir="rtl">
            سفارش و پشتیبانی
          </h3>
          <div class="flex flex-col gap-4">
            <!-- Call Option -->
            <a href="tel:+123456789"
              class="flex items-center justify-center bg-blue-500 text-white py-2 px-4 md:py-3 md:px-6 rounded-lg shadow-md hover:bg-blue-600 transition text-sm font-medium"
              dir="rtl">
              تماس با ما
            </a>
            <!-- Support Option -->
            <a href="/contact"
              class="flex items-center justify-center bg-green-500 text-white py-2 px-4 md:py-3 md:px-6 rounded-lg shadow-md hover:bg-green-600 transition text-sm font-medium"
              dir="rtl">
              پشتیبانی
            </a>
            <!-- Other Options -->
            <a href="/products"
              class="flex items-center justify-center bg-gray-500 text-white py-2 px-4 md:py-3 md:px-6 rounded-lg shadow-md hover:bg-gray-600 transition text-sm font-medium"
              dir="rtl">
              مشاهده محصولات
            </a>
          </div>
        </div>
      </div>

    </div>
  </section>

  <Footer />
</template>
