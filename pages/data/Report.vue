<template>
    <div class="flex flex-col justify-between items-center gap-8">
      <div class="w-72 flex justify-between items-start  gap-4">
        <input
          type="search"
          v-model="useStudent.filter"
          id="location-search"
          class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-e-lg border-s-gray-50 border-s-2 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-s-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500"
          placeholder="filter students"
          required
        />


        <button type="button" class="p-8 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800" @click="print()">طباعة</button>

      </div>
  
      <table id="printableTable" class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 table-auto border-collapse">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th
              v-for="head in tableHead"
              :key="head"
              class="px-6 py-3 text-center text-[14px] xl:text-[18px]"
              :class="{'id': head == 'الهوية', }"
            >
              <div :class="head === 'الهوية' ? 'text-center' : 'text-left'">
                {{ head }}
              </div>
            </th>
          </tr>
        </thead>
        <tbody v-if="filteredStudents.length">
          <tr v-for="student in filteredStudents" :key="student.id" class="bg-white dark:bg-gray-800 transition-all duration-100 text-[12px] xl:text-[16px] ">
            <th class="px-6 py-4 font-medium whitespace-nowrap text-left"> {{ student.student_name }} </th>
            <td class="px-6 py-4">{{ student.father_name }}</td>
            <td class="px-6 py-4">{{ student.mother_name }}</td>
            <td class="px-6 py-4 birth-date">{{ student.student_birthdate }}</td>
            <td class="px-6 py-4">{{ student.father_number }}</td>
            <td class="px-6 py-4">{{ student.mother_number }}</td>
            <td class="px-6 py-4">{{ student.branch }}</td>
            <td class="px-6 py-4">{{ student.study_status }}</td>
            <td class="px-6 py-4 flex justify-center items-center print:w-[300px]">
              <img v-if="student.student_id_photo" :src="student.student_id_photo" @click="openImageModal(student.student_id_photo)" class="h-12 w-12 border border-solid border-black rounded-lg print:w-[150px] print:h-[150px] cursor-pointer" />
              <div v-else class="h-12 text-center flex justify-center items-center">لا يوجد صورة</div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <EditModal :img="openedImage" :isOpen="isOpen" @update:isOpen="isOpen = $event" />

  </template>
  
  <script setup>
  import { computed, onMounted } from "vue";
  import { useStudents } from "~/store/students";
  
  const useStudent = useStudents();
  
  onMounted(() => {
    useStudent.fetchStudents();
  });

  function print() {
    window.print()
  }

  
  const isOpen = ref(false);
 const openedImage = ref("");
 
 // Open the modal with the image
 function openImageModal(image) {
   openedImage.value = image;
   isOpen.value = true;
 }
 
  
   const tableHead = ["اسم الطالب", "اسم الاب", "اسم الام", "الميلاد", "رقم الاب", "رقم الام", "الفرع", "الحالة", "الهوية",]

  
  // Filtered students based on the search input
  const filteredStudents = computed(() =>
    useStudent.students.filter((student) =>
      JSON.stringify(student).toLowerCase().includes(useStudent.filter.toLowerCase())
    )
  )

</script>

<style>
@media print {

    body * {
    visibility: hidden;
  }

  /* Only make the table visible */
  #printableTable, #printableTable * {
    visibility: visible;
  }

  /* Optionally, adjust the table's position and size for printing */
  #printableTable {
    position: absolute;
    left: 0;
    top: 0;
  }

    table {
        width: 100%;
        font-size: 1.275rem ; /* Tailwind's text-sm */
        text-align: left;
        direction: ltr; /* Tailwind's rtl:text-right */
        color: #6b7280; /* Tailwind's text-gray-500 */
        border-collapse: collapse;
    }

    thead {
    font-size: 0.75rem; /* Tailwind's text-xs */
    color: #374151; /* Tailwind's text-gray-700 */
    background-color: #f9fafb; /* Tailwind's bg-gray-50 */
    text-transform: uppercase; /* Tailwind's uppercase */
    }

    .id {
        display:flex;
        justify-content: center;
        align-items: center;
        text-align: center;
        width: 300px;
        margin-inline: auto;
    }

    tr {
        border: solid 1px black;
    }

    th {
    padding-left: 1.5rem; /* Tailwind's px-6 */
    padding-right: 1.5rem; /* Tailwind's px-6 */
    padding-top: 0.75rem; /* Tailwind's py-3 */
    padding-bottom: 0.75rem; /* Tailwind's py-3 */
    font-size: 1rem !important; /* Tailwind's text-[14px] */
    text-align: left;
    }

    tbody {
    background-color: white; /* Tailwind's bg-white */
    color: #6b7280; /* Tailwind's text-gray-500 */
    font-size: 1rem !important; /* Tailwind's text-[12px] */
    transition: all 0.1s ease-in-out; /* Tailwind's transition-all duration-100 */
    }

    td {
    padding-left: 1.5rem; /* Tailwind's px-6 */
    padding-right: 1.5rem; /* Tailwind's px-6 */
    padding-top: 1rem; /* Tailwind's py-4 */
    padding-bottom: 1rem; /* Tailwind's py-4 */
    font-size: 1rem !important; /* Tailwind's text-[14px] */
    }


    .image-container {
    display: flex;
    justify-content: center;
    align-items: center;
    }

    img {
    height: 5rem; /* Tailwind's h-12 */
    width: 9rem; /* Tailwind's w-12 */
    border: 1px solid black; /* Tailwind's border border-solid border-black */
    border-radius: 0.375rem; /* Tailwind's rounded-lg */
        }
}
</style>