<template>
  <div class="grid grid-cols-1 lg:grid-cols-3 gap-4">
    <!-- First Childish Section with Sticker -->
    <div class="flex justify-center items-center p-4 rounded-lg shadow-lg">
      <img src="https://static.wixstatic.com/media/fd6e55_2848fe9d1bdf46aa882f150f9a831f6a~mv2.jpg/v1/crop/x_63,y_0,w_610,h_736/fill/w_321,h_356,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/02d00f80458e7fad9ec8aaa715fabe45.jpg" alt="Sticker" class="w-48 h-48"  />
    </div>

    <!-- Middle Section with Form -->
    <div>
      <studentRegisterForm />
    </div>

    <!-- Last Childish Section with Sticker -->
    <div class="flex justify-center items-center p-4 rounded-lg shadow-lg">
      <img src="https://static.wixstatic.com/media/fd6e55_34028c2891bc493e9f64f269d5eaffaa~mv2.jpg/v1/fill/w_182,h_182,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/670157444198f3f1268f8a7e67854a3b.jpg" alt="Sticker" />
    </div>
  </div>

       <!-- <div class="flex justify-center items-center p-4 rounded-lg shadow-lg">
      <img src="../images/pray.jpg" alt="Sticker"  />
    </div> -->

     <!-- <div class="flex justify-center items-center p-4 rounded-lg shadow-lg">
      <img src="../images/autumn.jpg" alt="Sticker" />
    </div>-->
</template>

<script setup>
import { useStudents } from '~/store/students';
import studentRegisterForm from '../components/studentRegisterForm.vue';
const useStudent = useStudents()
</script>

<style scoped>
/* Optional: Add more custom styles here to further enhance the look */
</style>
