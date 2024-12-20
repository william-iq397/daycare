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
  branches: 'الفروع',
  notes: 'الملاحظات',
  teachers: 'المعلمين',
  curriculums: 'المناهج',
  studentRegister : 'تسجيل الطالب',
  almoatamed: 'المعتمد',
  login: "تسجيل الدخول",
  'data/requests' : 'طلبات التسجيل',
  'data/report' : "التقارير",
  'data/students' : "الطلاب المسجلين",
}

const route = useRoute()

// Compute a dynamic title in Arabic
const dynamicTitle = computed(() => {
  const path = route.path.replace('/', '') || 'المعتمد'
  return translations[path] || 'الصفحة الرئيسية' // Default to "Unknown" if no match
})

// Update the browser tab title dynamically in Arabic
useHead(() => ({
  title: `${dynamicTitle.value}`,
  link: [
  { rel: 'icon', type: 'image/png', href: '/icon.png' }
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