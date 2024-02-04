<template>
    <Navbar />
    <section class="container mx-auto">
        <div class="flex flex-col-reverse gap-10 lg:flex-row p-10">
            <div class="lg:w-1/2">
            <h1 ref="header" class="text-center lg:text-left text-3xl text-gray-800 font-semibold py-10">Group Tutoring</h1>
            <p ref="info" class="text-gray-800 text-xl">
                Experience an interactive and collaborative learning experience with our group tutoring sessions at Future Prodigies
<br><br>
Our group tutoring brings together students with similar academic goals and subjects, creating a dynamic and supportive learning environment. Collaborating with peers allows for shared insights, diverse perspectives, and mutual encouragement, enhancing the overall learning experience
<br><br>
Our tutors foster a positive and inclusive atmosphere, ensuring that every student feels comfortable asking questions, seeking clarification, and sharing their ideas. This collaborative approach nurtures confidence, boosts motivation, and encourages students to take ownership of their learning journey. Each session is priced at <strong>$15 an hour per person</strong> and we can ensure high-quality instruction for all students. 

</p>
</div>
<div ref="img" class="lg:w-1/2">
    <img  src="../assets/gtutor.avif" alt="">
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
