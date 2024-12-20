<template>
    <header class="border border-solid border-black border-t-transparent rounded mt-10 w-full mb-20">
        <nav class="border-gray-200 w-full">
            <div class="flex justify-around items-center mx-auto w-full">
                <NuxtLink to="/" class="flex flex-col justify-center items-center w-44">
                     <Rainbow/>
                    <span class=" text-2xl font-semibold ">المعتمد</span>
                    <span class="min-w-max p-2">نادي المعتمد للغات والدروس</span>
                </NuxtLink>

                <!-- menu for mobile -->
                <dropDownMobile />

                <!-- menu for desktop -->
                <div class="hidden w-full md:block md:w-auto">  
                    <ul class="w-full xl:gap-2 font-thin flex flex-col md:flex-row items-center p-4 md:p-0 mt-4 border border-gray-100 rounded-3xl bg-[#FFCFAE]  md:space-x-0 rtl:space-x-reverse md:mt-0 md:border-0"> 
                        <li class="block py-2 px-3 bg-blue-700 rounded md:bg-transparent md:text-[#ff7500] md:p-0 text-xs md:text-sm lg:text-lg min-w-fit" v-for="page in pages" :key="page.name" aria-current="page">
                            <NuxtLink class="py-2 px-3 min-w-full" :class="{ 'text-black': route.path == page.link }" :to="page.link">{{ page.name }}</NuxtLink>
                        </li>
                        <li>
                            <dataDropDown v-if="user" />
                        </li>
                        <li class="text-[#ff7500] pr-2" v-if="user">
                            <button @click="auth.logout">تسجيل الخروج</button>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </header>
</template>


<script setup>
import { useRoute } from 'vue-router';
import Rainbow from './Rainbow.vue';
import { useAuth } from '../store/auth';

const user = useSupabaseUser()
const route = useRoute();
const auth = useAuth()
// ! TO DO 
// add pagination
// /teachers => change the admin email who can edit and delete

// Pages for the navbar
const pages = [
    { name: 'الصفحة الرئيسية', link: '/' },
    { name: 'المعتمد', link: '/almoatamed' },
    { name: 'فروعنا', link: '/branches' },
    { name: 'المعلمين', link: '/teachers' },
    { name: 'مناهج', link: '/curriculums' },
    { name: 'ملاحضات', link: '/notes' },
    { name: 'تسجيل طالب', link: '/studentRegister' },
];

</script>
