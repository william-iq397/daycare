<template>
    <div>
       <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 table-auto border-collapse">
          <thead class="text-xs text-gray-700 uppercase bg-gray-50  ">
             <tr>
                <th scope="col" :colspan="head == 'action' ? 2 : 1" class="px-6 py-3 text-[14px] xl:text-[18px]" v-for="head in tableHead" :key="head">
                  <div :class=" head == 'action' || head ==  'ID' || head == 'الهوية' || head == 'الميلاد' ?  'text-center' : 'text-left'"> {{ head }} </div>
                </th>
             </tr>
          </thead>
          <tbody v-if="useStudent.$state.studentsRequests">
             <tr  v-for="student in useStudent.$state.studentsRequests" :key="student.id" class="bg-white transition-all duration-100 text-[12px] xl:text-[16px] 2xl:text-[20px]">
                <th scope="row" class="px-6 py-4 font-medium  whitespace-nowrap text-left">
                   {{ student.student_name }}
                </th>
                <td class="px-6 py-4">
                   {{ student.father_name }}
                </td>
                <td class="px-6 py-4">
                   {{ student.mother_name }}
                </td>
                <td class="px-6 py-4">
                   {{ student.father_number }}
                </td>
                <td class="px-6 py-4">
                   {{ student.mother_number }}
                </td>
                <td class="px-6 py-4">
                   {{ student.branch }}
                </td>
                <td class="px-6 py-4">
                   {{ student.student_birthdate }}
                </td>
                <td class="px-6 py-4 flex justify-center items-center">
                  <img v-if="student.student_id_photo" :src="student.student_id_photo" class="h-12 w-12 border border-solid border-black rounded-lg" />
                  <div v-else class="h-12 text-center flex justify-center items-center">لا يوجد صورة</div>
                </td>
                <td class="text-center">
                   <button @click="useStudent.acceptStudent(student.id)" class=" hover:border-white transition-all duration-200 p-2  focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2">قبول</button>
                </td>
                <td class="text-center">
                   <button @click="useStudent.deleteStudent(student.id, 'students_request')" class=" hover:border-white transition-all duration-200 p-2 class=focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2">رفض</button>
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

 const tableHead = ["اسم الطالب", "اسم الاب", "اسم الام","رقم الام", "رقم الاب", "الفرع", "الميلاد", "الهوية", "action"]
 
</script>