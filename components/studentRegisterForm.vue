<template>
    <form class="max-w-md mx-auto text-white border border-solid border-gray-700 rounded-lg p-8 my-8 flex flex-col justify-center" @submit.prevent="useStudent.addStudent">
        <div class="relative z-0 w-full mb-5 group">
            <input type="text" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none :text-white :focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder="" v-model="useStudent.student.student_name" required />
            <label class="peer-focus:font-medium absolute text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus::text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">اسم  الطالب</label>
        </div> 
        <div class="relative z-0 w-full mb-5 group">
            <input type="text" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none :text-white :focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " v-model="useStudent.student.father_name" required />
            <label class="peer-focus:font-medium absolute text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus::text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">اسم والد الطالب</label>
        </div>
        <div class="relative z-0 w-full mb-5 group">
            <input type="text" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none :text-white :focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " v-model="useStudent.student.mother_name" required />
            <label class="peer-focus:font-medium absolute text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus::text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">اسم  ام الطالب</label>
        </div>
        <div class="relative z-0 w-full mb-5 group">
            <input type="text" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none :text-white :focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " v-model="useStudent.student.father_number" required />
            <label class="peer-focus:font-medium absolute text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus::text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">رقم هاتف والد الطالب</label>
        </div>
        <div class="relative z-0 w-full mb-5 group">
            <input type="text" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none :text-white :focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " v-model="useStudent.student.mother_number" required />
            <label class="peer-focus:font-medium absolute text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus::text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">رقم هاتف ام الطالب</label>
        </div>
        <select id="countries" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500" v-model="useStudent.student.branch">
            <option value="الجبيلة" class="text-black" selected>فرع الجبيلة</option>
            <option value="المناوي" class="text-black">فرع المناوي</option>
            <option value="البراضعية" class="text-black">فرع البراضعية</option>
        </select>
        <div class="grid md:grid-cols-2 md:gap-6 my-4">
            <div class="relative z-0 w-full mb-5 group">
                <input type="date" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  :focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600" placeholder="" v-model="useStudent.student.student_birthdate" required />
                <label class="peer-focus:font-medium absolute text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus::text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">ميلاد  الطالب</label>
            </div>
        </div>
        <div class="relative z-0 w-full mb-5 group">
            <UploadImageInput />
        </div>
        <button type="submit" class="mx-auto text-white bg-blue-700 hover:bg-blue-800  font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center :hover:bg-blue-700 ">تسجيل</button>
    </form>
</template>

<script setup>
import UploadImageInput from './UploadImageInput.vue';
import { useStudents } from '~/store/students';
const useStudent = useStudents()
</script>