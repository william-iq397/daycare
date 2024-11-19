<template>
    <div class="relative  text-left md:hidden">
        <!-- Dropdown Toggle Button -->
        <button @click="toggleDropdown" id="dropdownDefaultButton"
            class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center items-center"
            type="button">
           menu
            <svg class="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                viewBox="0 0 10 6">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="m1 1 4 4 4-4" />
            </svg>
        </button>

        <!-- Dropdown Menu -->
        <div v-if="isOpen"
            class="z-10 absolute bg-white divide-y divide-gray-100 rounded-lg shadow w-44 mt-2">
            <ul class="py-2 text-sm text-gray-700" aria-labelledby="dropdownDefaultButton">
                <li class="block px-4 py-2 hover:bg-gray-100"
                    v-for="page in pages">
                    <NuxtLink :to="page.link">{{ page.name }}</NuxtLink>
                </li>
            </ul>
        </div>
    </div>
</template>

<script setup>
const pages = [
    { name: 'الصفحة الرئيسية', link: '/' },
    { name: 'المعتمد', link: '/almoatamed' },
    { name: 'المناهج', link: '/methodaligies' },
    { name: 'ملاحضات', link: '/notes' },
    { name: 'تسجيل الطالب', link: '/studentregister' },
    { name: 'تسجيل الدخول', link: '/login' },
]

const isOpen = ref(false)

const toggleDropdown = () => {
    isOpen.value = !isOpen.value;
};
</script>