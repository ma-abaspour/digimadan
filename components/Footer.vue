
<template>

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
        <div class="flex flex-col sm:flex-row justify-between items-center sm:items-start pb-12">
            <!-- Copyright text -->
            <span class="text-sm text-gray-500 dark:text-gray-400 text-center sm:text-left">
                © 2025
                <NuxtLink to="https://flowbite.com/" class="hover:underline">دیجی معدن™</NuxtLink>. تمامی حقوق محفوظ است.
            </span>

            <!-- Social media icons -->
            <div class="flex mt-4 sm:mt-0">
                <NuxtLink to="#" class="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5">
                    <Icon name="uil:linkedin" style="color: white; font-size: 16px;" />
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