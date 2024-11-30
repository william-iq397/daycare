<template>
   <div>
     <div class="mx-auto flex justify-center items-center gap-4 my-4">
      <!-- Master Checkbox -->
      <FilterByRegisterYear v-if="useStudent?.$state?.students" :years="studentsYearRegister" @yearSelected="filterStudentsByYear"/>
      <input type="checkbox" @change="toggleAllSelection($event)" :checked="areAllSelected" /> تحديد الكل
      <!-- Bulk Delete Button -->
      <button  @click="deleteSelectedStudents" class="mt-4 text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800" :disabled="selectedStudents.length === 0">حذف المحددين</button>
    </div>

     <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 table-auto border-collapse">
       <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
         <tr>
           <th scope="col" :colspan="head == 'action' ? 2 : 1" class="px-6 py-3 text-[14px] xl:text-[18px]" v-for="head in tableHead" :key="head">
             <div :class="head == 'action' || head == 'ID' ? 'text-center' : 'text-left'"> {{ head }} </div>
           </th>
         </tr>
       </thead>
       <tbody v-if="useStudent?.$state?.students">
         <tr v-for="student in filteredStudents" :key="student.id" class="bg-white dark:bg-gray-800 transition-all duration-100 text-[12px] xl:text-[16px]">
          <td class="text-center"><input type="checkbox" v-model="selectedStudents" :value="student.id"/></td>
           <th scope="row" class="px-4 text-center py-4 font-medium whitespace-nowrap"> {{ student.student_name }} </th>
           <td class="px-4 text-center py-4">{{ student.father_name }}</td>
           <td class="px-4 text-center py-4">{{ student.mother_name }}</td>
           <td class="px-4 text-center py-4">{{ student.father_number }}</td>
           <td class="px-4 text-center py-4">{{ student.mother_number }}</td>
           <td class="px-4 text-center py-4">{{ student.student_birthdate }}</td>
           <td class="px-4 text-center py-4">{{ student.branch }}</td>
           <td class="px-4 text-center py-4">{{ student.study_status }}</td>
           <td class="px-4 text-center py-4 flex justify-center items-center">
           <img v-if="student.student_id_photo" :src="student.student_id_photo" class="h-12 w-12 border border-solid border-black rounded-lg cursor-pointer" @click="openImageModal(student.student_id_photo)" />
             <div v-else class="h-12 text-center flex justify-center items-center">
               لا يوجد صورة
             </div>
           </td>
           <td class="text-center">
            <button @click="() => openEditModal(student)" class="hover:border-white transition-all duration-200 p-2 focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800" >تعديل</button>
           </td>
           <td class="text-center">
             <button @click="() => useStudent.deleteStudent(student.id, 'students')" class="w-[5em] hover:border-white transition-all duration-200 p-2 class=focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-3 py-2.5 me-2 mb-2"> حذف</button>
           </td>
         </tr>
       </tbody>
     </table>

     <!-- Edit Modal -->
     <EditModal :student="currentStudent" :isEditModalOpen="isEditModalOpen" @update:isEditModalOpen="isEditModalOpen = $event" />
     <!-- Image Modal -->
     <ImageModal :img="openedImage" :isImageModalOpen="isImageModalOpen" @update:isImageModalOpen="isImageModalOpen = $event" />
   </div>
 </template>
 
 <script setup>
 import { ref, onMounted } from "vue";
 import { useStudents } from "~/store/students";
 import EditModal from "~/components/EditModal.vue";

  // Fetch students when the page is loaded
  onMounted(() => {
   useStudent.fetchStudents();
 });
 
 const useStudent = useStudents()
 const isImageModalOpen = ref(false)
 const isEditModalOpen = ref(false)
 const openedImage = ref("")
 const selectedStudents = ref([])
 const currentStudent = ref(null) // Tracks student for editing

 // Open the modal with the image
 function openImageModal(image) {
   openedImage.value = image;
   isImageModalOpen.value = true;
 }

 // Open the edit modal
function openEditModal(student) {
  currentStudent.value = student // Clone the object to avoid direct mutation
  isEditModalOpen.value = true;
}
 
 const tableHead = ["", "اسم الطالب", "اسم الاب", "اسم الام","رقم الاب", "رقم الام","الميلاد", "الفرع", "الحالة", "الهوية", "action"]


const filteredStudents = ref(useStudent?.$state?.students);
// Filter the students by the selected year
const studentsYearRegister = ref([...new Set(useStudent?.students?.map(student => student?.created_at.slice(0, 10).split("-")[0]))])

function filterStudentsByYear(selectedYear) {
  if (selectedYear == "الكل") {
    filteredStudents.value = useStudent.$state.students;
  } else {
    filteredStudents.value = useStudent.$state.students.filter((student) => {
      const year = student.created_at.slice(0, 10).split("-")[0];
      return year === selectedYear;
    });
  }
}


// bulk delete prerequisits 
// Delete selected students
function deleteSelectedStudents() {
    selectedStudents.value.forEach((studentId) => {
    useStudent.deleteStudent(studentId, "students");
  });
  // Clear the selected students after deletion
  selectedStudents.value = [];
}

// Toggle all checkboxes
function toggleAllSelection(event) {
  if (event.target.checked) {
    selectedStudents.value = useStudent.$state.students.map((student) => student.id);
    console.log(selectedStudents)
  } else {
    selectedStudents.value = [];
  }
}

// Check if all students are selected
const areAllSelected = computed(() => {
  return (
    selectedStudents.value.length === useStudent.$state.students.length &&
    useStudent.$state.students.length > 0
  );
});

 </script>
 