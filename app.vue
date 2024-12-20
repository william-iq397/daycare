<template>
    <div class=" w-[100%] xl:w-[90%] mx-auto h-full">
        <NuxtLayout>
            <NuxtPage />
        </NuxtLayout>
    </div>
</template>

<script setup>
import { useRoute } from 'vue-router'
import { useHead } from '#app'

// Define the Arabic translation map
const translations = {
  home: 'الصفحة الرئيسية',
  branches: 'الفروع',
  notes: 'الملاحظات',
  teachers: 'المعلمون',
  curriculums: 'المناهج',
  studentRegister : 'تسجيل الطلاب',
  almoatamed: 'المعتمد',
  login: "تسجيل الدخول",
  'data/requests' : 'طلبات التسجيل',
  'data/report' : "التقارير",
  'data/students' : "الطلاب المسجلين",
}

const route = useRoute()

// Compute a dynamic title in Arabic
const dynamicTitle = computed(() => {
  const path = route.path.replace('/', '') || 'home'
  return translations[path] || 'غير معروف' // Default to "Unknown" if no match
})

// Update the browser tab title dynamically in Arabic
useHead(() => ({
  title: `${dynamicTitle.value}`,
  link: [
    {
      rel: 'icon',
      type: 'image/x-icon',
      href: '/rainbow.png', // Path to your favicon
      sizes: '220x220'
    }
  ]
}))
</script>


<style>
#__nuxt {
    height: 100%;
}

html {
    position: relative;
    height: 100%;
    background-color: rgba(255, 206, 174, 0.281) !important;
}
</style>