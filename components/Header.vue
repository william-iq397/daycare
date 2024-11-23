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
                <div class="hidden w-full md:block md:w-auto">  
                    <ul
                        class="w-full xl:gap-2 font-medium flex flex-col md:flex-row items-center p-4 md:p-0 mt-4 border border-gray-100 rounded-3xl bg-[#FFCFAE] md:space-x-0 lg:space-x-4 rtl:space-x-reverse md:mt-0 md:border-0"> 
                        <li class="block py-2 px-3 bg-blue-700 rounded md:bg-transparent md:text-[#213472] md:p-0 text-xs md:text-xs lg:text-lg min-w-fit" v-for="page in pages" :key="page.name" aria-current="page">
                            <NuxtLink class="py-2 px-3 min-w-full" :class="{ 'text-black': route.path == page.link }" :to="page.link">{{ page.name }}</NuxtLink>
                        </li>
                        <li v-if="auth.role == 'admin'">
                            <dataDropDown />
                        </li>
                        <!-- Conditional Login/Logout Button -->
                        <li v-if="user">
                            <button @click="auth.logout" class="min-w-full bg-blue-700 rounded md:bg-transparent md:text-[#213472] md:p-0 text-xs md:text-xs lg:text-sm">
                                تسجيل الخروج
                            </button>
                        </li>
                        <li v-else>
                            <button @click="toggleLoginPopup"
                                class="min-w-full bg-blue-700 rounded md:bg-transparent md:text-[#213472] md:p-0 text-xs md:text-xs lg:text-sm"
                                :class="{ 'text-black': showLoginPopup, 'text-blue-500': !showLoginPopup }">
                                تسجيل الدخول
                            </button>
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
import Image from "../images/rainbow.png";
import Login from "~/pages/Login.vue";
import { useAuth } from '../store/auth';
import { supabase } from '../supabase';
import { onMounted, watchEffect } from 'vue';

const showLoginPopup = ref(false)
const auth = useAuth();
const route = useRoute();
const user = useSupabaseUser()
// ! TO DO 
// check if the user is already has an email when he signs up
// insert the data to the users table when the user signs up with the same id of the auth/users id

const checkUserStatus = async () => {
    const { data: { user }, error } = await supabase.auth.getUser();
    auth.isUserSignedIn = user !== null;
};

onMounted(() => {
    auth.fetchUserRole()
    supabase.auth.onAuthStateChange(() => {
        checkUserStatus();
    });
});


// Toggle login popup visibility
function toggleLoginPopup() {
    showLoginPopup.value = !showLoginPopup.value
    console.log(showLoginPopup.value)
}

// Pages for the navbar
const pages = [
    { name: 'الصفحة الرئيسية', link: '/' },
    { name: 'المعتمد', link: '/almoatamed' },
    { name: 'فروعنا', link: '/branches' },
    { name: 'مناهج', link: '/methodaligies' },
    { name: 'ملاحضات', link: '/notes' },
    { name: 'تسجيل طالب', link: '/studentRegister' },
];

watchEffect(auth?.role , () => {
    auth.fetchUserRole()
})
</script>
