<!-- components/SignupForm.vue -->
<template>
  <form  class="flex flex-col">
    <input type="text" placeholder="اسم المستخدم" class="border mb-4 p-2" />
    <input type="email" placeholder="الايميل" class="border mb-4 p-2" />
    <input type="password" placeholder="كلمة السر" class="border mb-4 p-2" />
    <button type="submit" class="bg-green-500 text-white p-2 rounded" @click="signup">حساب جديد</button>
  </form>
</template>

<script setup>

</script>