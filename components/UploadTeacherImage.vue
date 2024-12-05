<template>
     <div class="flex flex-col items-center justify-center w-full">
        <!-- File Input -->
        <label class="block mb-2 text-sm font-medium text-gray-900" for="multiple_files">
            تحميل صورة المعلم
        </label>
        <input class="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" id="multiple_files" type="file" @change="handleFileUpload" required>

        <!-- Display Image -->
        <div class="object-cover mx-auto w-96 overflow-hidden">
            <img  v-if="useStudent.$state.teacher.teacher_image" :src="useStudent.$state.teacher.teacher_image" alt="تحميل الصورة" class="mt-4 max-w-xs mx-auto border border-gray-300 rounded-lg w-80 h-40" />
        </div>
    </div>
</template>

<script setup>
import { useStudents } from '../store/students';

const useStudent = useStudents()


// Handle File Upload
const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();

        // Convert the file to a data URL
        reader.onload = (e) => {
            useStudent.$state.teacher.teacher_image = e.target.result; // Save data URL in the state
        };

        reader.readAsDataURL(file);
    }
};
</script>