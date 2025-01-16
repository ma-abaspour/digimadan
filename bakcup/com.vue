
<template>

<section class="bg-gray-50 dark:bg-zinc-950 dark:text-white py-12 px-6 lg:px-8 min-h-screen" dir="rtl">
  <div class="max-w-7xl mx-auto">
    <!-- Page Title -->
    <div class="text-center mb-12">
      <h1 class="text-3xl font-bold text-gray-900 dark:text-gray-100 sm:text-4xl">
        جامعه ما
      </h1>
      <p class="mt-2 text-lg text-gray-600 dark:text-gray-400 sm:text-xl">
        به جامعه ما بپیوندید و در رویدادها، بحث‌ها، و ارتباطات شرکت کنید.
      </p>
    </div>

    <!-- Announcements Section -->
    <div class="mb-16">
      <h2 class="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-6 text-center">
        اطلاعیه‌ها
      </h2>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div class="bg-white dark:bg-zinc-800 p-4 rounded-lg shadow-lg text-right">
          <h3 class="text-lg font-medium text-gray-900 dark:text-gray-100">رویداد جدید</h3>
          <p class="text-gray-600 dark:text-gray-400 mt-2">
            رویداد ماهانه جامعه در تاریخ ۲۵ بهمن برگزار خواهد شد.
          </p>
          <a href="#" class="mt-4 text-blue-500 hover:underline block">
            مشاهده جزئیات
          </a>
        </div>
        <div class="bg-white dark:bg-zinc-800 p-4 rounded-lg shadow-lg text-right">
          <h3 class="text-lg font-medium text-gray-900 dark:text-gray-100">بروزرسانی سایت</h3>
          <p class="text-gray-600 dark:text-gray-400 mt-2">
            نسخه جدید سایت با ویژگی‌های بهبود یافته منتشر شد.
          </p>
          <a href="#" class="mt-4 text-blue-500 hover:underline block">
            مشاهده جزئیات
          </a>
        </div>
        <div class="bg-white dark:bg-zinc-800 p-4 rounded-lg shadow-lg text-right">
          <h3 class="text-lg font-medium text-gray-900 dark:text-gray-100">دعوت به مشارکت</h3>
          <p class="text-gray-600 dark:text-gray-400 mt-2">
            ایده‌ها و پیشنهادات خود را برای بهبود جامعه با ما به اشتراک بگذارید.
          </p>
          <a href="#" class="mt-4 text-blue-500 hover:underline block">
            ارسال پیشنهاد
          </a>
        </div>
      </div>
    </div>

    <!-- Discussion Forum Section -->
    <div class="mb-16">
      <h2 class="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-6 text-center">
        انجمن بحث
      </h2>
      <div class="bg-white dark:bg-zinc-800 p-6 rounded-lg shadow-lg text-right">
        <h3 class="text-lg font-medium text-gray-900 dark:text-gray-100 mb-4">آخرین بحث‌ها</h3>
        <ul class="space-y-4">
          <li>
            <a href="#" class="text-blue-500 hover:underline">
              بهترین راهکارها برای پروژه‌های تیمی چیست؟
            </a>
            <p class="text-gray-600 dark:text-gray-400 text-sm">۲۵ نظر</p>
          </li>
          <li>
            <a href="#" class="text-blue-500 hover:underline">
              چگونه می‌توانیم تعامل در جامعه را افزایش دهیم؟
            </a>
            <p class="text-gray-600 dark:text-gray-400 text-sm">۱۸ نظر</p>
          </li>
          <li>
            <a href="#" class="text-blue-500 hover:underline">
              معرفی بهترین منابع یادگیری برنامه‌نویسی
            </a>
            <p class="text-gray-600 dark:text-gray-400 text-sm">۳۲ نظر</p>
          </li>
        </ul>
        <a href="#" class="block mt-6 text-center text-blue-500 hover:underline">
          مشاهده همه بحث‌ها
        </a>
      </div>
    </div>

    <!-- Upcoming Events Section -->
    <div class="mb-16">
      <h2 class="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-6 text-center">
        رویدادهای آینده
      </h2>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div class="bg-white dark:bg-zinc-800 p-4 rounded-lg shadow-lg text-right">
          <h3 class="text-lg font-medium text-gray-900 dark:text-gray-100">کارگاه طراحی UI/UX</h3>
          <p class="text-gray-600 dark:text-gray-400 mt-2">۲۳ بهمن | ساعت ۱۸:۰۰</p>
          <a href="#" class="mt-4 text-blue-500 hover:underline block">
            ثبت‌نام
          </a>
        </div>
        <div class="bg-white dark:bg-zinc-800 p-4 rounded-lg shadow-lg text-right">
          <h3 class="text-lg font-medium text-gray-900 dark:text-gray-100">جلسه تیمی</h3>
          <p class="text-gray-600 dark:text-gray-400 mt-2">۳۰ بهمن | ساعت ۲۰:۰۰</p>
          <a href="#" class="mt-4 text-blue-500 hover:underline block">
            ثبت‌نام
          </a>
        </div>
      </div>
    </div>

    <!-- Member Highlight Section -->
    <div class="mb-16">
      <h2 class="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-6 text-center">
        عضو برجسته
      </h2>
      <div class="flex flex-col md:flex-row-reverse items-center gap-6 bg-white dark:bg-zinc-800 p-6 rounded-lg shadow-lg">
        <!-- <img src="/member.png" alt="Member" class="w-24 h-24 rounded-full object-cover"> -->
        <div class="text-right">
          <h3 class="text-lg font-medium text-gray-900 dark:text-gray-100">نام عضو</h3>
          <p class="text-gray-600 dark:text-gray-400">توضیحاتی درباره عضو برجسته جامعه.</p>
        </div>
      </div>
    </div>

    <!-- Call to Action -->
    <div class="text-center">
      <a href="/join" class="bg-blue-500 text-white py-3 px-6 rounded-lg shadow-lg hover:bg-blue-600 transition text-lg font-medium">
        عضویت در جامعه
      </a>
    </div>
  </div>
</section>



</template>