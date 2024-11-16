<!-- components/SignupForm.vue -->
<template>
  <div class="flex flex-col">
    <input type="text" placeholder="Username" class="border mb-4 p-2" />
    <input type="email" placeholder="Email" class="border mb-4 p-2" />
    <input type="password" placeholder="Password" class="border mb-4 p-2" />
    <input type="password" placeholder="Confirm Password" class="border mb-4 p-2" />
    <button type="submit" class="bg-green-500 text-white p-2 rounded" @click="signup">Sign Up</button>
  </div>
</template>

<script setup>

</script>