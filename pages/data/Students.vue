<template>
   <div>
     <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 table-auto border-collapse">
       <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
         <tr>
           <th
             scope="col"
             :colspan="head == 'action' ? 2 : 1"
             class="px-6 py-3 text-[14px] xl:text-[18px]"
             v-for="head in tableHead"
             :key="head"
           >
             <div
               :class="head == 'action' || head == 'ID' ? 'text-center' : 'text-left'"
             >
               {{ head }}
             </div>
           </th>
         </tr>
       </thead>
       <tbody v-if="useStudent.$state.students">
         <tr
           v-for="student in useStudent.$state.students"
           :key="student.id"
           class="bg-white dark:bg-gray-800 transition-all duration-100 text-[12px] xl:text-[16px]"
         >
           <th scope="row" class="px-6 py-4 font-medium whitespace-nowrap text-left">
             {{ student.student_name }}
           </th>
           <td class="px-6 py-4">{{ student.father_name }}</td>
           <td class="px-6 py-4">{{ student.mother_name }}</td>
           <td class="px-6 py-4">{{ student.student_birthdate }}</td>
           <td class="px-6 py-4 flex justify-center items-center">
             <img
               v-if="student.student_id_photo"
               :src="student.student_id_photo"
               class="h-12 w-12 border border-solid border-black rounded-lg cursor-pointer"
               @click="openImageModal(student.student_id_photo)"
             />
             <div v-else class="h-12 text-center flex justify-center items-center">
               لا يوجد صورة
             </div>
           </td>
           <td class="text-center">
             <button
               @click="updateStudent"
               class="hover:border-white transition-all duration-200 p-2 focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
             >
               تعديل
             </button>
           </td>
           <td class="text-center">
             <button
               @click="useStudent.deleteStudent(student.id, 'students')"
               class="w-[5em] hover:border-white transition-all duration-200 p-2 class=focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-3 py-2.5 me-2 mb-2"
             >
               حذف
             </button>
           </td>
         </tr>
       </tbody>
     </table>
 
     <!-- Image Modal -->
     <EditModal :img="openedImage" :isOpen="isOpen" @update:isOpen="isOpen = $event" />
   </div>
 </template>
 
 <script setup>
 import { ref, onMounted } from "vue";
 import { useStudents } from "~/store/students";
 import EditModal from "~/components/EditModal.vue";
 
 const useStudent = useStudents();
 
 const isOpen = ref(false);
 const openedImage = ref("");
 
 // Open the modal with the image
 function openImageModal(image) {
   openedImage.value = image;
   isOpen.value = true;
 }
 
 function updateStudent() {
   console.log("Student is updated");
 }
 
 // Fetch students when the page is loaded
 onMounted(() => {
   useStudent.fetchStudents();
 });
 
 const tableHead = ["student name", "father name", "mother name", "birth date", "ID", "action"];
 </script>
 