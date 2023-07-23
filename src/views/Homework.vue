<template>
    <Navbar />
    <section class="container mx-auto">
        <div class="flex flex-col-reverse gap-10 lg:flex-row p-10">
            <div class="lg:w-1/2">
            <h1 ref="header" class="text-center lg:text-left text-3xl text-gray-800 font-semibold py-10">Homework Help </h1>
            <p ref="info" class="text-gray-800 text-xl">
                
Our homework help services at Future Prodigies are here to alleviate your stress and empower you to tackle any academic challenge with confidence.
<br><br>
With our homework help services, you'll have access to expert assistance tailored to your specific needs. Our tutors patiently explain concepts, offer step-by-step guidance, and clarify any doubts you may have. We ensure that you not only complete your assignments but also deepen your understanding of the subject matter.
<br><br>
Our goal is to instill strong study habits and problem-solving skills that extend beyond individual assignments. We equip you with valuable tools and techniques that will benefit you throughout your academic journey.

</p>
</div>
<div ref="img" class="lg:w-1/2">
    <img  src="../assets/homework.avif" alt="">
</div>
        </div>
    </section>
    <Footer />
</template>

<script setup>
import { ref, onMounted } from 'vue'
import Footer from '../components/Footer.vue';
import Navbar from '../components/Navbar.vue';
import { gsap } from "gsap";


const header = ref(null)
const info = ref(null)
const img = ref(null)

onMounted(() => {
    const tl = gsap.timeline()

tl.from(header.value, {
    x: -20,
    opacity: 0,
    duration: 1
}).from(info.value, {
    y: 20,
    opacity: 0,
    duration: 1,
    delay: -0.8,
}).from(img.value, {
    opacity: 0,
    transform: "scale(1.2)",
    delay: -0.8,
    duration: 1,
})
})

</script>
