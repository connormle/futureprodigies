<template>
    <Navbar />
    <section class="container mx-auto">
        <div class="flex flex-col-reverse gap-10 lg:flex-row p-10">
            <div class="lg:w-1/2">
            <h1 ref="header" class="text-center lg:text-left text-3xl text-gray-800 font-semibold py-10">Academic Counseling</h1>
            <p ref="info" class="text-gray-800 text-xl">
                Our academic counseling services empower students to reach new heights of excellence and personal growth
<br><br>
Our academic counseling goes beyond traditional tutoring by providing comprehensive support and guidance to students throughout their educational journey. We believe that success extends beyond subject mastery—it encompasses the development of crucial study skills, time management techniques, and a growth mindset.
<br><br>

Our experienced academic coaches work closely with students to identify their unique strengths, challenges, and aspirations. Through personalized one-on-one sessions, they provide tailored strategies and resources to enhance study skills and high school career. 

</p>
</div>
<div ref="img" class="lg:w-1/2">
    <img  src="../assets/counseling.avif" alt="">
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
