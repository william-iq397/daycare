<template>
   <div class="flex flex-col  gap-12 mt-10">
      <section class="mx-auto w-full relative">

         <img alt="Daycare Center" class="mx-auto" style="width: 100%; height: 40%; object-fit: cover;"
            data-ssr-src-done="true" fetchpriority="high"
            src="https://static.wixstatic.com/media/11062b_1b005544d1b746a1a79fbcf9fd004973~mv2.jpg/v1/fill/w_980,h_593,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/11062b_1b005544d1b746a1a79fbcf9fd004973~mv2.jpg">
         <pre
            class=" text-blue-700 font-black text-center text-lg lg:text-xl p-8 bg-[#FFCFAE] bg-opacity-50 rounded-[50%] h-40 md:h-72 lg:flex justify-center items-center hidden  md:flex absolute right-10 top-10 lg:right-40 lg:top-52">مرحباً بِكم في 

   حضانة و روضة المعتمد الأهلية
   أستكشف. العب. تعلم</pre>
      </section>


      <section class=" flex flex-col justify-between md:flex-row mx-auto">
         <img :src="Kids" class=" h-[600px]  hidden md:block" alt="image">
         <div class="flex flex-col justify-around items-center gap-24 w-full md:w-1/2 text-blue-950">
            <div class="flex justify-center items-center flex-col">
               <h2 class=" text-3xl font-black">!من نحن</h2>
               <hr class="w-60 h-[2px] bg-blue-950 text-blue-950"></hr>
            </div>
            <p class="text-right w-[80%] text-base md:text-lg lg:text-xl">روضة المعتمد للغات هي مؤسسة تعليمية متميزة في البصرة، تعتمد على المنهج البريطاني لتقديم تعليم عالي الجودة
               للأطفال في مرحلة الطفولة المبكرة. نركز على تطوير المهارات اللغوية والإبداعية من خلال أنشطة تفاعلية وبيئة
               محفزة تدعم التفكير النقدي. باستخدام اللغة الإنجليزية كلغة أساسية للتدريس، نهدف إلى إعداد الأطفال للتعليم
               الدولي، مع توفير بيئة آمنة تشجعهم على استكشاف قدراتهم وتحقيق إمكاناتهم الكاملة على يد فريق متخصص من
               المعلمين
            </p>
            <button class="transition-all duration-300 hover:bg-orange-500 text-white hover:border hover:border-solid hover:border-black hover:text-white  bg-orange-700 rounded-3xl  font-black flex justify-center items-center w-28 h-10 p-4 text-xl">شهادتنا</button>
         </div>
      </section>

      <Gallery/>
   </div>

</template>

<script setup>
import Kids from '../images/kids.jpg'
</script>