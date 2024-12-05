<template>
    <div class="max-w-xl mx-auto mt-8">
        <form @submit.prevent="useStudent.addCurriculum">
            <div class="grid grid-cols-1 gap-4">
                <div>
                    <label for="floating_first_name" class="block mb-2 text-sm font-medium text-gray-900 dark:focus:text-blue-500 focus:text-blue-600 peer">اسم المنهج</label>
                    <input type="text" id="floating_first_name" v-model="useStudent.curriculum.curriculum_name" class="block px-0 w-full text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none p-4 dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" required />
                </div>

                <div>
                    <label class="block mb-2 text-sm font-medium text-gray-900">صورة المنهج</label>
                    <input type="file" @change="onImageChange" class="block w-full p-2 border rounded-lg text-sm" />
                </div>

                <div>
                    <label class="block mb-2 text-sm font-medium text-gray-900">ملف المنهج</label> 
                    <input type="file" @change="onFileChange" class="block w-full p-2 border rounded-lg text-sm" />
                </div>
            </div>

            <div class="mt-6 flex justify-center gap-4">
                <button type="submit" class="px-4 py-2 text-white bg-blue-600 rounded-lg">اضافة منهج</button>
            </div>
        </form>
    </div>
</template>

<script setup>
import {useStudents} from '../store/students'
const useStudent = useStudents()

const onImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();

        // Convert the file to a data URL
        reader.onload = (e) => {
            useStudent.curriculum.curriculum_image = e.target.result; // Save data URL in the state
        };

        reader.readAsDataURL(file);
    }
}

const onFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();

        // Convert the file to a data URL
        reader.onload = (e) => {
            useStudent.curriculum.curriculum_file = e.target.result; // Save data URL in the state
        };

        reader.readAsDataURL(file);
    }
}
</script>