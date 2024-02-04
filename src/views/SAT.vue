<template>
    <Navbar />
    <section class="container mx-auto">
        <div class="flex flex-col-reverse gap-10 lg:flex-row p-10">
            <div class="lg:w-1/2">
            <h1 ref="header" class="text-center lg:text-left text-3xl text-gray-800 font-semibold py-10">SAT/ACT Prep </h1>
            <p ref="info" class="text-gray-800 text-xl">
                Preparing for the SAT or ACT exams can be a transformative journey, and we're here to guide you every step of the way. Our SAT/ACT Prep Program is meticulously designed to equip students with the skills, strategies, and confidence needed to excel in these crucial standardized tests.
  <br>
  <br>
  Our experienced tutors are well-versed in the intricacies of both the SAT and ACT exams. We offer comprehensive preparation, focusing on crucial areas such as Math, Reading, Writing, and Science (ACT). Each session is tailored to provide a deep understanding of the test format, time management techniques, and effective strategies to tackle each section.
  <br>
  <br>
  Priced at <strong>$50 per hour</strong>, our SAT/ACT Prep sessions offer high-quality instruction that is both effective and affordable. We emphasize personalized learning, adapting our teaching methods to suit individual learning styles and pace, ensuring maximum progress and confidence on test day.
  <br>
  <br>
  Whether you're aiming for top scores or looking to enhance specific areas, our program is designed to help you reach your goals. Join us in your journey towards SAT/ACT success!
  <br>
  <br>
  Contact us today to schedule your personalized SAT/ACT Prep sessions.
</p>
</div>
<div ref="img" class="lg:w-1/2">
    <img  src="../assets/SAT.avif"  alt="">
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
