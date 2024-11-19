<template>
    <div class="min-h-screen bg-blue-50 py-10 px-4">
        <div class="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-6">
            <h1 class="text-3xl font-bold text-center text-blue-700 mb-8">Subjects and Resources</h1>
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                <div v-for="subject in subjects" :key="subject.id"
                    class="flex flex-col items-center bg-yellow-100 rounded-lg shadow-md p-4">
                    <img :src="subject.image" :alt="subject.name" class="w-24 h-24 rounded-full mb-4" />
                    <h2 class="text-lg font-bold text-gray-800">{{ subject.name }}</h2>
                    <a :href="subject.file" download
                        class="mt-2 inline-block bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">Download</a>
                </div>
            </div>
        </div>
    </div> 
</template>

<script>
// import kid from "../images/kids.jpg"
// import math from '../subjects/math.pdf'
// import manners from '../subjects/manners.pdf'

// const subjects = [
//     {
//         id: 1,
//         name: "رياضيات",
//         image: kid,
//         file: math
//     },
//     {
//         id: 2,
//         name: "كتاب الاتكيت",
//         image: kid,
//         file: manners
//     },
// ]
</script>

<style scoped>
body {
    font-family: 'Arial', sans-serif;
}
</style>