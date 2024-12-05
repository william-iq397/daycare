<template>
    <div class=" bg-opacity-50 flex justify-center items-center">
      <div class="bg-slate-700 p-8 rounded shadow-lg flex flex-col h-[27rem]" >
        <!-- Tab Buttons -->
  
        <!-- Conditional Rendering of Forms -->
        <div  class="h-full">
          <LoginForm />
        </div>
  
        <!-- Close Button -->
      </div>
    </div>
  </template>
  
  <script setup>
  import LoginForm from '~/components/LoginForm.vue';
  </script>
  