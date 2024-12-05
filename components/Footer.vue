<template>
    <footer class="rounded-lg shadow text-white bg-gray-800 mt-28 p-6">
      <div class="w-full max-w-screen-xl mx-auto">
        <div class="sm:flex sm:items-center sm:justify-between">
          <!-- الشعار والعنوان -->
          <NuxtLink to="/" class="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
            <img 
            loading="lazy"
            src="https://i.ibb.co/ZVhm4vB/kids-drawing.png"
            alt="شعار الأطفال" 
              class="h-10 rounded-full"
            />
            <span class="self-center text-xl font-bold text-gray-100">روضة المعتمد</span>
          </NuxtLink>
  
          <!-- روابط التنقل -->
          <ul class="flex flex-wrap items-center mb-6 text-sm font-medium sm:mb-0 space-x-6 rtl:space-x-reverse">
            <li v-for="page in pages">
              <NuxtLink :to="page.link" class="hover:underline text-gray-300">{{ page.name }}</NuxtLink>
            </li>
          </ul>
        </div>
  
        <!-- الفاصل -->
        <hr class="my-6 border-gray-700 sm:mx-auto lg:my-8" />
  
        <!-- القسم السفلي من الفوتر -->
        <div class="sm:flex sm:justify-between items-center">
          <!-- حقوق الطبع والنشر -->
          <span class="block text-xs sm:text-center text-gray-400">
            © {{ currentYear }} <a href="#" class="hover:underline text-gray-300">روضة المعتمد™</a>. جميع الحقوق محفوظة.
          </span>
  
          <!-- صور لطيفة -->
          <div class="flex space-x-4 rtl:space-x-reverse mt-4 sm:mt-0">
            <img
              src="https://i.ibb.co/ZVhm4vB/kids-drawing.png"
              loading="lazy"
              alt="رسم"
              class="h-10 w-10 rounded-full"
            />
            <img
              src="https://i.ibb.co/ZVhm4vB/kids-drawing.png"
              loading="lazy"
              alt="بالون"
              class="h-10 w-10 rounded-full"
            />
            <img
            src="https://i.ibb.co/ZVhm4vB/kids-drawing.png"
            loading="lazy"
            alt="مكعبات"
              class="h-10 w-10 rounded-full"
            />
          </div>
        </div>
      </div>
    </footer>
  </template>

<script setup>

const currentYear = ref(new Date().getFullYear())

const pages = [
    { name: 'الصفحة الرئيسية', link: '/' },
    { name: 'المعتمد', link: '/almoatamed' },
    { name: 'الفروع', link: '/branches' },
    { name: 'المناهج', link: 'curriculums' },
    { name: 'ملاحضات', link: '/notes' },
    { name: 'تسجيل الطالب', link: '/studentRegister' },
]

</script>
  
  <style scoped>
  a {
    transition: color 0.2s ease-in-out;
  }
  a:hover {
    color: #ffd700; /* ذهبي */
  }
  </style>
  