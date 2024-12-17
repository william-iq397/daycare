<template>
    
    <div class="relative w-[80%] md:w-96 mx-auto my-8" data-carousel="static">
            <!-- Carousel Wrapper -->
            <div class="relative overflow-hidden rounded-lg h-96 ">
                <!-- Carousel Items -->
                <div v-for="(image, index) in images" :key="index"
                    :class="`duration-700 ease-in-out absolute inset-0 transition-opacity ${index === activeIndex ? 'opacity-100' : 'opacity-0'}`"
                    data-carousel-item>
                    <img :src="image" class="block w-full h-full object-cover" alt="carousel image" />
                </div>
            </div>

            <!-- Slider Controls -->
            <button type="button"
                class="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
                @click="prevSlide">
                <span
                    class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70">
                    <svg class="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" xmlns="http://www.w3.org/2000/svg"
                        fill="none" viewBox="0 0 6 10">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M5 1 1 5l4 4" />
                    </svg>
                    <span class="sr-only">Previous</span>
                </span>
            </button>
            <button type="button"
                class="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
                @click="nextSlide">
                <span
                    class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70">
                    <svg class="w-4 h-4 text-white dark:text-gray-800" xmlns="http://www.w3.org/2000/svg" fill="none"
                        viewBox="0 0 6 10">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M1 1l4 4-4 4" />
                    </svg>
                    <span class="sr-only">Next</span>
                </span>
            </button>
        </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import One from '../images/testimonialOne.jpg'
import Two from '../images/testimonialTwo.jpg'
import Three from '../images/testimonialThree.jpg'
import Four from '../images/testimonialFour.jpg'
import Five from '../images/testimonialFive.jpg'

// Images array
const images = [
    One,
    Two,
    Three,
    Four,
    Five
];

// Active index state
const activeIndex = ref(0);


// Functions to navigate slides
const prevSlide = () => {
    activeIndex.value = (activeIndex.value - 1 + images.length) % images.length;
};

const nextSlide = () => {
    activeIndex.value = (activeIndex.value + 1) % images.length;
};

onMounted(() => {
    setInterval(() => {
        nextSlide()
    }, 1300);
})
</script>

<style>
[data-carousel-item] {
    position: absolute;
    inset: 0;
}
</style>
