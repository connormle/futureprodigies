<template>
    <Navbar />
    <section class="container mx-auto">
        <div class="flex flex-col-reverse gap-10 lg:flex-row p-10">
            <div class="lg:w-1/2">
            <h1 ref="header" class="text-center lg:text-left text-3xl text-gray-800 font-semibold py-10">Private Tutoring</h1>
            <p ref="info" class="text-gray-800 text-xl">
Our private tutoring for students is designed to provide a solid foundation and build confidence from the ground up. 
<br><br>
At Future Prodigies, we understand that everyone learns at their own pace, especially when starting with little or no prior knowledge. Our experienced tutors specialize in working with raw beginners, guiding them through the fundamental concepts with patience and expertise. 
<br><br>
Whether it's mathematics, language arts, science, or any other subject, our personalized approach ensures that each tutoring session is tailored to the unique learning needs of the raw beginner. We break down complex concepts into manageable steps, using clear explanations and engaging teaching methods to foster understanding. Priced at <strong>$25 per hour </strong>, our private tutoring sessions offer high-quality instruction that is both effective and affordable.

</p>
</div>
<div ref="img" class="lg:w-1/2">
    <img  src="../assets/ptutor.avif" alt="">
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
