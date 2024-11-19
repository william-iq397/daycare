<template>
    <header class="border border-solid border-black mt-10 w-full mb-20 text-[#213472]">
        <nav class="border-gray-200 w-full">
            <div class="flex justify-around items-center mx-auto w-full">
                <NuxtLink to="/" class="flex flex-col justify-center items-center w-44">
                    <img :src="Image" alt="rainbow image" />
                    <span class=" text-2xl font-semibold ">المعتمد</span>
                    <span class="min-w-max p-2">نادي المعتمد للغات والدروس</span>
                </NuxtLink>

                <!-- menu for mobile -->
                <dropDownMobile />

                <!-- menu for desktop -->
                <div class="hidden w-full md:block md:w-auto" id="navbar-default">
                    <ul class="w-full  xl:gap-2 font-medium flex flex-col md:flex-row items-center  p-4 md:p-0 mt-4 border border-gray-100 rounded-3xl bg-[#FFCFAE]  md:space-x-4 lg:space-x10 rtl:space-x-reverse md:mt-0 md:border-0">
                        <li class="block py-2 px-3  bg-blue-700 rounded md:bg-transparent md:text-[#213472] md:p-0 text-xs md:text-xs lg:text-lg min-w-fit" v-for="page in pages" :key="page.name" aria-current="page">
                            <NuxtLink class="py-2 px-3 min-w-full" :class="{'text-black': route.path == page.link && showLoginPopup == false, }" :to="page.link">{{ page.name }}</NuxtLink>
                        </li>
                        <li>
                            <dataDropDown />
                        </li>
                        <li class="pr-4">
                            <button @click="toggleLoginPopup" class="min-w-full bg-blue-700 rounded md:bg-transparent md:text-[#213472] md:p-0 text-xs md:text-xs lg:text-sm" :class="{'text-black' : toggleLoginPopup == true, 'text-blue-500': toggleLoginPopup == false}">تسجيل الدخول</button>
                            <Login :isVisible="showLoginPopup" :closePopup="toggleLoginPopup" />
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </header>
</template>

<script setup>
import { useRoute } from 'vue-router';
import Image from "../images/rainbow.png"; // Adjust the path based on your folder structure
import Login from "~/pages/Login.vue";


const route = useRoute();

// get the pages folder and turn it into an array
const pages = [
    { name: 'الصفحة الرئيسية', link: '/' },
    { name: 'المعتمد', link: '/almoatamed' },
    { name: 'المناهج', link: '/methodaligies' },
    { name: 'ملاحضات', link: '/notes' },
    { name: 'تسجيل الطالب', link: '/studentRegister' },
]

const showLoginPopup = ref(false); // Manage visibility of the popup

function toggleLoginPopup() {
    showLoginPopup.value = !showLoginPopup.value; // Toggle popup visibility
}


</script>