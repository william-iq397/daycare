<template>
    <div class="relative overflow-x-auto">
       <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
             <tr>
                <th scope="col" :colspan="head == 'action' ? 2 : 1" class="px-6 py-3 text-[14px] xl:text-[18px]" v-for="head in tableHead" :key="head">
                  <div :class=" head == 'action' ?  'text-center' : 'text-left'"> {{ head }} </div>
                </th>
             </tr>
          </thead>
          <tbody v-if="useStudent.$state.studentsRequests">
             <tr  v-for="student in useStudent.$state.studentsRequests" :key="student.id" class="bg-white dark:bg-gray-800  transition-all duration-100 text-[12px] xl:text-[16px]">
                <th scope="row" class="px-6 py-4 font-medium  whitespace-nowrap dark:text-white text-left">
                   {{ student.student_name }}
                </th>
                <td class="px-6 py-4">
                   {{ student.father_name }}
                </td>
                <td class="px-6 py-4">
                   {{ student.mother_name }}
                </td>
                <td class="px-6 py-4">
                   {{ student.student_birthdate }}
                </td>
                <td class="text-center">
                   <button @click="useStudent.acceptStudent(student.id)" class=" hover:border-white transition-all duration-200 p-2  focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Accept</button>
                </td>
                <td class="text-center">
                   <button @click="useStudent.deleteStudent(student.id)" class=" hover:border-white transition-all duration-200 p-2 class=focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">Reject</button>
                </td>
             </tr>
          </tbody>
       </table>
    </div>
 </template>
 
 <script setup>
 import { useStudents } from '~/store/students';
 const useStudent = useStudents()
 

 // once the page loaded the students will be fetched
 onMounted(() => {
    useStudent.fetchStudentsRequests();
 })

 const tableHead = ["student name", "father name", "mother name", "birth date", "action"]
 
</script>