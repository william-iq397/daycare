<template>
    <section class="flex flex-col md:flex-row justify-between  w-full h-full relative ">
        <ImagesWheat class="absolute top-0 -left-5" />
        <div class="w-full md:w-[50%] bg-[#f7a56ea8] border border-solid rounded-lg p-6">
            <ol class="list-decimal ml-4">
                <li>توفير تعليم متميز يعتمد على مناهج مبتكرة تسهم في تطوير مهارات التفكير الإبداعي وحب الاستطلاع لدى
                    الأطفال.</li> <br />
                <li>تقديم منهج بريطاني يركز على تنمية مهارات اللغة الإنجليزية لدى الأطفال، مما يساعدهم على اكتساب اللغة
                    بطلاقة ويساعدهم في بناء أساس قوي للتعليم المستقبلي.</li><br />
                <li>خلق بيئة آمنة ومشجعة، تُشعر الطفل بالثقة وتساعده على اكتشاف مواهبه وقدراته الفريدة.</li> <br />
                <li>بناء مهارات اجتماعية قوية، من خلال تعزيز العمل الجماعي والاحترام المتبادل بين الأطفال.</li> <br />
                <li>تقديم أنشطة متنوعة تشمل التعلم من خلال اللعب والفن والموسيقى، بما يسهم في تطوير مهاراتهم الحركية
                    والحسية.</li> <br />
                <li>تجهيز الأطفال للمرحلة الابتدائية من خلال برامج تعليمية مدروسة تساعدهم على الانتقال السلس للمرحلة
                    التالية في مسيرتهم التعليمية.</li>
            </ol>
            <ImagesFlower class="absolute bottom-0 -left-5" />
        </div>

        <ImagesDrawHands class="absolute right-[38%] top-[30%] rounded-t-full hidden md:block"  />

        <div class="flex flex-col justify-evenly  w-full h-full md:w-[50%] items-end relative md:overflow-hidden text-right border border-solid rounded-lg p-6">
            <KidBike class="absolute -z-10 overflow-hidden " />
            <div class="relative">
                <ImagesButterFlyTwo class="absolute -bottom-20 md:right-40  -left-[400%]" />
                <h1 class="text-3xl text-right">أهدافنا </h1>
                <hr class="border border-solid border-[rgb(33,52,114)] w-24 2xl:w-48 ml-auto" />
            </div>
            <p class="flex justify-start w-3/4">
                تأسست روضتنا في عام 2018، بهدف توفير بيئة تعليمية آمنة وداعمة للأطفال في مرحلة التعليم المبكر.
                ومنذ البداية، ركزت الروضة على تنمية مهارات الأطفال بشكل شامل،
                حيث تقدم منهجاً متوازناً يشمل الأنشطة التعليمية والترفيهية
                ، ويعزز النمو الاجتماعي والعاطفي والجسدي.
                <br />
                <br />
                <br />
                <br />
                تسعى الروضة منذ تأسيسها إلى تحقيق هذه الأهداف من خلال فريق تربوي
                متخصص ومنهج بريطاني شامل يرتكز على أسس علمية وحديثة في مجال التربية والتعليم المبكر،
                مع تركيز خاص على تطوير مهارات اللغة الإنجليزية.
            </p>
        </div>
    </section>
</template>

<script setup>
import KidBike from '../components/images/KidBike'
</script>

<style scoped>
@media (min-width: 1536px) {
    ol li {
        font-size: 1.2rem !important
            /* 30px */
        ;
        line-height: 2.25rem !important
            /* 36px */
        ;
    }
}
</style>