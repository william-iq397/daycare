<template>
    <div class="min-h-screen bg-blue-50 py-10 px-4">
        <div class="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-6">
            <h1 class="text-3xl font-bold text-center text-blue-700 mb-8">المناهج</h1>
            <div class="text-black">
                <div v-for="subject in subjects" :key="subject.id"
                    class="flex flex-col items-center text-black rounded-lg shadow-md p-4">
                    <img :src="subject.image" :alt="subject.name" class="w-24 h-24 rounded-full mb-4" />
                    <h2 class="text-lg font-bold text-gray-800">{{ subject.name }}</h2>
                    <a :href="subject.file" download
                        class="mt-2 inline-block bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
                        تحميل
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import math from '../images/math.jfif'
import manners from '../images/manners.jfif'
import english from '../images/english.jfif'
const subjects = [
    {
        id: 1,
        name: "رياضيات",
        image: math,
        file: "/subjects/math.pdf", // Ensure this file exists in the `public/subjects` folder
    },
    {
        id: 2,
        name: "كتاب الاتكيت",
        image: manners,
        file: "/subjects/manners.pdf", // Ensure this file exists in the `public/subjects` folder
    },
    {
        id: 3,
        name: "الانكليزي",
        image: english,
        file: "/subjects/english.pdf", // Ensure this file exists in the `public/subjects` folder
    }
]
</script>
