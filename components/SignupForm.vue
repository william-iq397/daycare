<template>
  <form @submit.prevent="signup" class="flex flex-col">
    <input type="text" v-model="auth.user_name" placeholder="اسم المستخدم" class="border mb-4 p-2" />
    <input type="email" v-model="auth.email" placeholder="الايميل" class="border mb-4 p-2" />
    <input type="password" v-model="auth.password" placeholder="كلمة السر" class="border mb-4 p-2" />
    <button type="submit" class="bg-green-500 text-white p-2 rounded" @click="auth.register">
      حساب جديد
    </button>
    <p v-if="auth.createError" class="text-red-500 mt-2">
      {{ auth.createError }}
    </p>
  </form>
</template>

<script setup>
import { useAuth } from '~/store/auth.js'; // Adjust the path if needed
const auth = useAuth();
</script>
