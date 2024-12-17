<template>
    <section id="comp-m37pglwf" tabindex="-1" class="Oqnisf comp-m37pglwf wixui-section"
        data-block-level-container="ClassicSection">
        <div id="comp-m3c264fv" class="wWvZUh" style="--height: 74px;">
            <h2 class="font_0 wixui-rich-text__text" style="font-size:40px; line-height:normal; text-align:center;">
                <span style="letter-spacing:normal;" class="wixui-rich-text__text">شهادات الأهالي</span>
            </h2>
        </div>
    </section>

    <section class="flex items-center overflow-hidden" id="controls-carousel">
        <ImagesCloudOne class="animate-wiggle"/>
        <Carousel />
        <ImagesCloudTwo class="animate-wiggle" />
    </section>


    <section tabindex="-1">
        <div >
            <div data-testid="colorUnderlay" class="LWbAav Kv1aVt"></div>
            <div id="bgMedia_comp-m37pqv33" data-motion-part="BG_MEDIA" class="VgO9Yg"></div>
        </div>
        <div>
            <h2 class="my-8" style="font-size:40px; text-align:center;">
                <span>بعض المشاكل</span>
            </h2>
        </div>

        <section class="relative w-full h-[50%] flex justify-between items-center">
            <VideoBG class="absolute -z-10 w-full" />
            <Videos />
        </section>

    </section>
</template>

<script setup>
import VideoBG from '../components/images/VideoBG.vue'
</script>
