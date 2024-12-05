<template>
    <div class="mt-24 mx-auto">
        <form class="max-w-md mx-auto text-md md:text-xl" @submit.prevent="useStudent.addTeacher">
            <div class="flex flex-col justify-between items-center md:gap-6">
                <div class="relative z-0 w-full mb-5">
                    <input type="text" id="floating_first_name" v-model="useStudent.teacher.teacher_name" class="block px-0 w-full text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none p-4 dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" required />
                    <label for="floating_first_name" class="peer-focus:font-medium absolute duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">اسم المعلم</label>
                </div>                
                <label for="description" class="block text-sm font-medium text-gray-900">يرجى ادخال المعلومات بهذه الطريقة</label>
                <textarea id="description" v-model="useStudent.teacher.teacher_description" rows="4" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="العمر, الشهادات, الحالة الاجتماعية, الاختصاص"></textarea>
                <div class="relative z-0 w-full mb-5 group">
                    <UploadTeacherImage :imageSource="useStudent.teacher.teacher_image" />
                </div>
            </div>
            <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm mx-auto sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">تسجيل المعلم</button>
        </form>
    </div>
</template>

<script setup>
import UploadTeacherImage from '../components/UploadTeacherImage.vue';
import { useStudents } from '../store/students';
const useStudent = useStudents()
</script>