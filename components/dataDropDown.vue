<template>
  <div class="relative text-left border-none text-[#213472] bg-blue-700 rounded-3xl md:bg-transparent  md:p-0 text-xs md:text-xs lg:text-lg cursor-pointer " @click="display">

    <div class="flex justify-center items-center w-full gap-x-1.5 border-none px-3 py-2 font-semibold text-[#213472] shadow-sm text-xs md:text-xs lg:text-lg min-w-fit"> البيانات
      <svg width="24" height="24" viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg">
        <path d="M7 10l5 5 5-5H7z" />
      </svg>
    </div>

   
    <div :class="{ 'block': isOpen == true, 'hidden': isOpen == false }" class="absolute right-0 z-10 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg  focus:outline-none">
      <div class="py-1 flex flex-col justify-center items-center w-full">
        <div v-for="page in pages" :to="page.link" :key="page.name" class="text-md text-center py-2 w-full">
          <NuxtLink :to="page.link" class="py-4 px-[50px] w-full text-md"  :class="{'text-[#213472] outline-none w-full h-full' : route.path == page.link , 'text-sm':   page.name == 'تسجيل الطلبات'  , 'text-[#213472] w-full h-full' : route.path != page.link}">{{ page.name }}</NuxtLink>
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
