<template>
    <section class="flex flex-col justify-between overflow-hidden">
        <div class="flex flex-col sm:flex-row justify-between items-center text-[rgb(33,52,114)] font-bold ">
            <ImagesPlanet />
            <div class="flex flex-col items-center justify-between">
                <h3 class="text-xl">مع المعتمد</h3>
                <h1 class="text-3xl">طفلك في ايدي امينة</h1>
            </div>
            <ImagesButterFly class="animate-wiggle" />
        </div>

        <!-- <hr class="border border-solid border-[rgb(33,52,114)] my-16" /> -->

        <Manager />

        <hr class="border border-solid border-[rgb(33,52,114)] my-16" />
        
        <div class="flex flex-col justify-between gap-20">
            <Goals />

            <hr class="border border-solid border-transparent md:border-[rgb(33,52,114)]  my-16  md:block" />

            <Staff />
        </div>
    </section>
</template>
