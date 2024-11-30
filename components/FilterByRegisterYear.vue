<template>
    <div class="w-60">
      <label for="years" class="block mb-2 text-sm font-medium text-gray-900">اختار سنة التسجيل</label>
      <select id="years" @change="handleYearChange" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
        <option value="الكل">الكل</option>
        <option v-for="(year, idx) in years" :key="idx" class="w-10 h-10">{{ year }}</option>
      </select>
    </div>
  </template>
  
  <script setup>
  const props = defineProps({
    yearSelected: Function,
    years: Array
  })
  

  const emit = defineEmits();
  
  function handleYearChange(event) {
    emit('yearSelected', event.target.value);
  }
  </script>
  