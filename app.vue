<template>
    <div class="w-[90%] mx-auto">
        <NuxtLayout :name="layout">
            <NuxtPage />
        </NuxtLayout>
    </div>
</template>

<script setup>
const layout = "default"
</script>

<style>
#__nuxt {
    height: 100%;
}

html {
    height: 100%;
    background-color :  rgba(255, 206, 174, 0.281) !important;
}

</style>