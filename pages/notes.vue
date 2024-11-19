<template>
    <section id="comp-m37pglwf" tabindex="-1" class="Oqnisf comp-m37pglwf wixui-section"
        data-block-level-container="ClassicSection">
        <div id="comp-m3c264fv" class="wWvZUh" style="--height: 74px;">
            <h2 class="font_0 wixui-rich-text__text" style="font-size:40px; line-height:normal; text-align:center;">
                <span style="letter-spacing:normal;" class="wixui-rich-text__text">شهادات الأهالي</span>
            </h2>
        </div>
    </section>

    <section class="flex justify-evenly items-center">
        <ImagesCloudOne/>
        <Carousel />
        <ImagesCloudTwo/>
    </section>


    <section id="comp-m37pqv33" tabindex="-1" class="Oqnisf comp-m37pqv33 wixui-section"
        data-block-level-container="ClassicSection">
        <div id="bgLayers_comp-m37pqv33" data-hook="bgLayers" data-motion-part="BG_LAYER" class="MW5IWV">
            <div data-testid="colorUnderlay" class="LWbAav Kv1aVt"></div>
            <div id="bgMedia_comp-m37pqv33" data-motion-part="BG_MEDIA" class="VgO9Yg"></div>
        </div>
        <div data-mesh-id="comp-m37pqv33inlineContent" data-testid="inline-content" class="">
            <h2 class="font_0 wixui-rich-text__text my-8" style="font-size:40px; text-align:center;">
                <span class="color_41 wixui-rich-text__text">بعض المشاكل</span>
            </h2>
        </div>

        <section class="relative w-full h-[90%] flex justify-between items-center">
            <VideoBG class="absolute -z-10 h-full" />
            <Videos />
        </section>

    </section>
</template>

<script setup>
import VideoBG from '../components/images/VideoBG.vue'
</script>
