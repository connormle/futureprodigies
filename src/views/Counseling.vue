<template>
    <Navbar />
    <section class="container mx-auto">
        <div class="flex flex-col-reverse gap-10 lg:flex-row p-10">
            <div class="lg:w-1/2">
            <h1 ref="header" class="text-center lg:text-left text-3xl text-gray-800 font-semibold py-10">Academic Counseling</h1>
            <p ref="info" class="text-gray-800 text-xl">
                Navigating high school academics can be a transformative experience, and our Academic Counseling Program is here to provide the guidance and support you need to thrive. Our tailored coaching sessions are designed to help high school students excel academically and develop essential skills for success.
<br><br>
Our experienced coaches offer personalized guidance in various subjects, study skills, time management, organization, goal setting, and effective learning strategies. Whether you're aiming to boost grades, improve study habits, or prepare for college, our coaching sessions are customized to address your unique needs and goals.
<br><br>

We offer flexible coaching options to suit your schedule and needs. Our 15-minute coaching call, priced at <strong>$10</strong>, is perfect for quick check-ins or specific questions, while our 30-minute call, priced at <strong>$15</strong>, provides more in-depth guidance and support.
<br> <br>
Contact us to schedule your personalized coaching sessions and embark on a journey toward achieving your academic goals.
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
