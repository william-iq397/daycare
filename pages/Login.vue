<template>
    <div v-if="isVisible" class="fixed z-10 inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center">
        <OnClickOutside @trigger="closePopup">
      <div class="bg-white p-8 rounded shadow-lg flex flex-col h-[27rem]" >
        <!-- Tab Buttons -->
        <div class="flex justify-center items-center mb-4">
          <button
            :class="{ 'bg-blue-500 text-white': activeTab === 'تسجيل الدخول', 'text-blue-500 hover:bg-blue-600 hover:text-white hover:opacity-20': activeTab !== 'تسجيل الدخول' }"
            class="px-6 py-2 rounded-l-lg focus:outline-none transition-all duration-100"
            @click="setActiveTab('تسجيل الدخول')">Login</button>
          <button
            :class="{ 'bg-blue-500 text-white': activeTab === 'حساب جديد', 'text-blue-500 hover:bg-blue-600 hover:text-white hover:opacity-20': activeTab !== 'حساب جديد' }"
            class="px-6 py-2 rounded-r-lg focus:outline-none transition-all duration-100"
            @click="setActiveTab('حساب جديد')">SignUp</button>
        </div>
  
        <!-- Conditional Rendering of Forms -->
        <div v-if="activeTab === 'تسجيل الدخول'" class="h-full">
          <LoginForm />
        </div>
        <div v-if="activeTab === 'حساب جديد'" class="h-full">
          <SignupForm />
        </div>
  
        <!-- Close Button -->
        <button @click="closePopup" class="mt-4 py-2 rounded text-white bg-gray-500">اغلاق</button>
      </div>
        </OnClickOutside>
    </div>
  </template>
  
  <script setup>
  import LoginForm from '~/components/LoginForm.vue';
  import SignupForm from '~/components/SignupForm.vue';
  import { OnClickOutside } from '@vueuse/components'; 
  
  // Props
  const props = defineProps({
    isVisible: {
      type: Boolean,
      required: true,
    },
    closePopup: {
      type: Function,
      required: true,
    },
  });
  
  // Reactive State
  const activeTab = ref('تسجيل الدخول'); // Set default active tab to 'login'
  
  // Methods
  function setActiveTab(tab) {
    activeTab.value = tab;
  }
  </script>
  