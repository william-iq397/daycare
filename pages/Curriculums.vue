<template>
    <div class="bg-blue-50 py-10 px-4">
        <div class="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-6">
            <h1 class="text-3xl font-bold text-center text-blue-700 mb-8">المناهج</h1>
            <div class="text-black">
                <div v-if="useStudent.curriculums" v-for="curriculum in useStudent.curriculums" :key="curriculum.id" class="flex flex-col items-center text-black rounded-lg shadow-md p-4">
                    <img :src="curriculum.curriculum_image" :alt="curriculum.curriculum_name" class="w-24 h-24 rounded-full mb-4" />
                    <h2 class="text-lg font-bold text-gray-800">{{ curriculum.curriculum_name }}</h2>
                    <a :href="curriculum.curriculum_file" download class="mt-2 inline-block bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">تحميل</a>
                    <div class="flex justify-between w-1/2 text-white mt-4">
                        <button class="p-2 px-4 bg-red-700 rounded" @click="useStudent.deleteCurriculum(curriculum.id)">حذف</button>
                        <button class="p-2 px-4 bg-green-800 rounded" @click="openEditModal(curriculum)">تعديل</button>
                    </div>
                </div>
            </div>
        </div>
        <EditCurriculumModal  v-if="isEditModalOpen" :isEditModalOpen="isEditModalOpen" :curriculum="currentCurriculum" @update:isEditModalOpen="isEditModalOpen = $event" />
    </div>

    <AddCurriculum />
</template>

<script setup>
import { useStudents } from '../store/students';
import AddCurriculum from '../components/AddCurriculum.vue';
import EditCurriculumModal from './EditCurriculumModal.vue';
// import math from '../images/math.jfif'
// import manners from '../images/manners.jfif'
// import english from '../images/english.jfif'

const useStudent = useStudents()
const isEditModalOpen = ref(false)
const currentCurriculum = ref(null)

function openEditModal(curriculum) {
    currentCurriculum.value = curriculum
    isEditModalOpen.value = true
}

onMounted(() => {
    useStudent.fetchCurriculums()
})

// const subjects = [
//     {
//         id: 1,
//         name: "رياضيات",
//         image: math,
//         file: "/subjects/math.pdf", // Ensure this file exists in the `public/subjects` folder
//     },
//     {
//         id: 2,
//         name: "كتاب الاتكيت",
//         image: manners,
//         file: "/subjects/manners.pdf", // Ensure this file exists in the `public/subjects` folder
//     },
//     {
//         id: 3,
//         name: "الانكليزي",
//         image: english,
//         file: "/subjects/english.pdf", // Ensure this file exists in the `public/subjects` folder
//     }
// ]
</script>
