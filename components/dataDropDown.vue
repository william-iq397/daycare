<template>
  <div
    class="relative inline-block text-left border-none text-white bg-blue-700 rounded-3xl md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500 text-xs md:text-xs lg:text-lg cursor-pointer "
    @click="display()">

    <div
      class="flex justify-center items-center w-full gap-x-1.5  px-3 py-2 font-semibold text-blue-600 shadow-sm text-xs md:text-xs lg:text-lg min-w-fit">
      البيانات
      <svg width="24" height="24" viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg">
        <path d="M7 10l5 5 5-5H7z" />
      </svg>
    </div>

    <!-- Dropdown -->
    <div :class="{ 'block': isOpen == true, 'hidden': isOpen == false }" class="absolute right-0 z-10 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg  focus:outline-none">
      <div class="py-1 flex flex-col justify-center items-center">
        <div v-for="page in pages" :to="page.link" :key="page.name" class="text-md py-1 text-center">
          <NuxtLink :to="page.link"  :class="{'text-blue-500 outline-none' : route.path == page.link , 'text-gray-700 ' : route.path != page.link}">{{ page.name }}</NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router';

const route = useRoute()

// Define a ref for controlling modal visibility
const isOpen = ref(false)

// Function to toggle the modal visibility when clicking the button
function display() {
  isOpen.value = !isOpen.value
}

// Array containing the pages for dropdown options
const pages = [
  { name: "طلبات التسجيل", link: "/data/requests" },
  { name: "التقارير", link: "/data/report" },
  { name: "الطلبة", link: "/data/students" },
]

</script>
