<template>
    <Navbar />
    <section class="container mx-auto">
        <div class="flex flex-col-reverse gap-10 lg:flex-row p-10">
            <div class="lg:w-1/2">
            <h1 ref="header" class="text-center lg:text-left text-3xl text-gray-800 font-semibold py-10">AP Test Prep </h1>
            <p ref="info" class="text-gray-800 text-xl">
                Our specialized AP Test Prep sessions are meticulously designed to help students excel in their Advanced Placement exams. With a proven track record of success, our experienced tutors provide tailored guidance, comprehensive subject review, and effective strategies to ensure students feel confident and well-prepared on exam day.
  <br>
  <br>
  Each session is structured to address specific AP subjects, covering key concepts, practice tests, and exam strategies. Our tutors work closely with students, customizing lesson plans to match individual learning styles and pace, maximizing their potential for success.
  <br>
  <br>

  We offer comprehensive preparation for various AP courses, including but not limited to:
<br>
  <br>AP Calculus (AB/BC)
  <br>AP Biology
  <br>AP Chemistry
  <br>AP Physics C
  <br>AP English Language and Composition
  <br>AP English Literature and Composition
  <br>AP History (U.S. History, World History)
  <br>AP Psychology
  <br>AP Environmental Science
  <br>AP Computer Science Principles and AP Computer Science A
  <br>AP Statistics
  <br>AP Spanish Language and Culture
  <br>AP Art History
  <br>AP US Government and Politics
  <br>
  <br>
  Our experienced tutors provide tailored guidance, comprehensive subject review, and effective strategies for each AP course. Each session, priced at <strong>$50 per hour</strong>, is structured to cover key concepts, practice tests, and exam strategies specific to the chosen AP subject.
  <br>
  <br>
  Contact us today to schedule your personalized AP Test Prep sessions!
</p>
</div>
<div ref="img" class="lg:w-1/2">
    <img  src="../assets/AP.jpg" alt="">
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
