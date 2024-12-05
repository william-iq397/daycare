<template>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-5">
            <!-- <TeacherCard  class="mx-auto" /> -->
            <div v-for="teacher in useStudent.teachers" :teacher="teacher" :key="teacher.id" class="max-w-2xl text-black border border-gray-200 rounded-lg shadow bg-[#FFCFAE] dark:border-gray-700 flex flex-col justify-between">
                <div class="h-1/2 w-full">
                    <img class="rounded-t-lg mx-auto h-52 w-52" :src="teacher.teacher_image" alt="teacher image" />
                </div>
                <div class="p-5">  
                    <div>
                        <h5 class="mb-2 text-2xl font-bold tracking-tight ">{{ teacher.teacher_name }}</h5>
                    </div>
                    <p class="mb-3 font-normal ">{{teacher.teacher_description}}</p>
                </div>
                <div v-if="user" class="flex justify-around items-center mb-5 text-white">
                    <button class="p-2 px-4 bg-red-700 rounded" @click="useStudent.deleteTeacher(teacher.id)">حذف</button>
                    <button class="p-2 px-4 bg-green-800 rounded" @click="openEditModal(teacher)">تعديل</button>
                </div>
            </div>
            <EditTeacherModal v-if="isEditModalOpen" :isEditModalOpen="isEditModalOpen" :teacher="currentTeacher" @update:isEditModalOpen="isEditModalOpen = $event" />
        </div>
        <TeacherRegister v-if="user" />

       
</template>

<script setup>
import { onMounted } from 'vue';
import { useStudents } from '../store/students';
import TeacherRegister from '../components/TeacherRegister.vue';
const useStudent = useStudents()
const user = useSupabaseUser()

const currentTeacher = ref(null)
const isEditModalOpen = ref(false)

 // Open the edit modal
function openEditModal(teacher) {
  currentTeacher.value = teacher // Clone the object to avoid direct mutation
  isEditModalOpen.value = true;
}

onMounted(() => {
    useStudent.fetchTeachers()
})
</script>