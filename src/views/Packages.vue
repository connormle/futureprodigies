<template>
    <Navbar />
    <section class="text-center container mx-auto">
        <div class="flex">
            <div class="w-full">
                <h1 ref="header" class="text-center text-4xl text-gray-800 font-semibold py-10">Tutoring Packages</h1>
                <p ref="info" class="text-gray-800 text-xl">
                    <!-- Individual Tutoring Sessions -->
                    <h2 class="text-2xl font-semibold mt-4">Individual Tutoring Sessions For All Grades</h2>
                    <ul>
                        <li>3 Tutoring Sessions - $65 (Pre-K - 12)</li>
                        <li>6 Tutoring Sessions - $120 (Pre-K - 12)</li>
                    </ul>
                    <br>
                    <!-- Group Tutoring Sessions -->
                    <h2 class="text-2xl font-semibold mt-4">Group Tutoring Sessions For All Grades</h2>
                    <ul>
                        <li>3 Group Tutoring Sessions - $40 per person (Pre-K - 12)</li>
                        <li>6 Group Tutoring Sessions - $60 per person (Pre-K - 12)</li>
                    </ul>
                    <br>
                    <!-- Individual AP Test Tutoring Sessions -->
                    <h2 class="text-2xl font-semibold mt-4">Individual AP Test Tutoring Sessions For High Schoolers</h2>
                    <ul>
                        <li>3 AP Test Tutoring Sessions - $135 (9 to 12)</li>
                        <li>6 AP Test Tutoring Sessions - $250 (9 to 12)</li>
                    </ul>
                    <br>
                    <!-- Group AP Test Tutoring Sessions -->
                    <h2 class="text-2xl font-semibold mt-4">Group AP Test Tutoring Sessions For High Schoolers</h2>
                    <ul>
                        <li>3 AP Test Tutoring Sessions - $90 per person (9 to 12)</li>
                        <li>6 AP Test Tutoring Sessions - $150 per person (9 to 12)</li>
                    </ul>
                    <br>
                    <!-- Individual SAT/ACT Tutoring Sessions -->
                    <h2 class="text-2xl font-semibold mt-4">Individual SAT/ACT Tutoring Sessions For High Schoolers</h2>
                    <ul>
                        <li>3 SAT/ACT Tutoring Sessions - $135 (9 to 12)</li>
                        <li>6 SAT/ACT Tutoring Sessions - $250 (9 to 12)</li>
                    </ul>
                </p>
            </div>
        </div>
    </section>
    <section ref="cta" class="cta bg-purple-400 shadow-2xl shadow-purple-400">
  <div class="container mx-auto flex-col items-center justify-between space-y-8 text-center mt-20 text-white py-14">
    <h1 class="text-5xl font-bold">Purchase Now!</h1>
    <p class="text-lg pb-10">Buy a package today by scheduling a consultation!</p>
    <a href="#footer" class="p-3 px-6 pt-2 text-white bg-green rounded-full">
                      Contact
                  </a>
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
