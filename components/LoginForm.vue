<!-- components/LoginForm.vue -->
<template>
  <div class="flex flex-col justify-evenly h-full">
    <input type="text" v-model="auth.email" placeholder="اسم المستخدم" class="border mb-4 p-2" />
    <input type="password" v-model="auth.password" placeholder="كلمة السر" class="border mb-4 p-2" />
    <button type="submit" class="bg-blue-500 text-white p-2 rounded" @click="auth.login">تسجيل</button>
  </div>
</template>


<script setup>
import { useAuth } from '../store/auth';
const auth = useAuth()
</script>
