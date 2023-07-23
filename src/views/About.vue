<template>
    <Navbar />
    <section class="container mx-auto">
        <div class="flex flex-col-reverse gap-10 lg:flex-row p-10">
            <div class="lg:w-1/2">
            <h1 ref="header2" class="text-center lg:text-left text-3xl text-gray-800 font-semibold py-10">Who We Are</h1>
            <p ref="info2" class="text-gray-800 text-xl">
                Future Prodigies is a high school tutoring serice that strives to help students academically. It was founded by a group of high school students who wish to bring upon education to students. We, high school students, created Future Prodigies to help students thrive in an academic setting, whether it be for school or extracurriculars. Additionally, Future Prodigies assists students expand their extracurricular profile and help them develop a passion.
</p>
</div>
<div ref="img2" class="lg:w-1/2">
    <img  src="../assets/svg1.svg" alt="">
</div>
        </div>


        <div class="flex flex-col gap-10 lg:flex-row-reverse p-10 mt-20">
            <div class="lg:w-1/2">
            <h1 ref="header" class="text-center lg:text-left text-3xl text-gray-800 font-semibold py-10">Our Mission</h1>
            <p ref="info" class="text-gray-800 text-xl">
                Our mission is to provide quality education and tutoring services for all students in grades K-12 to learn and grow as a person. Through Future Prodigies, all students will have opportunities to achieve their goals and develop new skills, which will help them in the long-term with their academic needs. Students will learn to adapt in any academic environment and succeed academically. Furthermore, Future Prodgies will help give students the confidence they need in and out of school.
</p>
</div>
<div ref="img" class="lg:w-1/2">
    <img  src="../assets/svg2.svg" alt="">
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
import { ScrollTrigger } from "gsap/ScrollTrigger";

const header = ref(null)
const info = ref(null)
const img = ref(null)
const header2 = ref(null)
const info2 = ref(null)
const img2 = ref(null)

onMounted(() => {

gsap.from(header.value, {
    x: -20,
    opacity: 0,
    duration: 1,
    scrollTrigger: {
        trigger: header.value,
        start: "top bottom"
    }
})
gsap.from(info.value, {
    y: 20,
    opacity: 0,
    duration: 1,
    scrollTrigger: {
        trigger: info.value,
        start: "top bottom"
    }
})
gsap.from(img.value, {
    opacity: 0,
    transform: "scale(1.2)",
    duration: 1,
    scrollTrigger: {
        trigger: img.value,
        start: "top bottom"
    }

})
gsap.from(header2.value, {
    x: 20,
    opacity: 0,
    duration: 1,
    scrollTrigger: {
        trigger: header2.value,
        start: "top bottom"
    }
});

gsap.from(info2.value, {
    y: -20,
    opacity: 0,
    duration: 1,
    scrollTrigger: {
        trigger: info2.value,
        start: "top bottom"
    }
});

gsap.from(img2.value, {
    opacity: 0,
    transform: "scale(.8)",
    duration: 1,
    scrollTrigger: {
        trigger: img2.value,
        start: "top bottom"
    }
});

})

</script>
