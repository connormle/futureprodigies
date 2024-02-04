<template>
    <div>
        <Navbar />
        <section ref="faq" class="faq-section bg-gray-100 py-12">
            <h2 class="text-3xl font-semibold mb-8 text-center">Frequently Asked Questions</h2>
            <div class="faq-container max-w-4xl mx-auto">
                <div v-for="(qa, index) in qa_tutoring" :key="index" class="faq-item border-b py-4">
                    <h3 class="text-xl font-semibold mb-2">{{ qa.question }}</h3>
                    <p class="text-gray-700">{{ qa.answer }}</p>
                </div>
                <h2 class="text-3xl font-semibold my-8 text-center">FAQ: AP Class/Test Prep and SAT/ACT Prep</h2>
                <div v-for="(qa, index) in qa_advanced" :key="index" class="faq-item border-b py-4">
                    <h3 class="text-xl font-semibold mb-2">{{ qa.question }}</h3>
                    <p class="text-gray-700">{{ qa.answer }}</p>
                </div>
            </div>
        </section>
    </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import Navbar from '../components/Navbar.vue';
import { gsap } from "gsap";
const faq = ref(null)
onMounted(() => {
    gsap.from(faq.value, {
      opacity: 0,
      duration: 2,
    })
})
let qa_tutoring = ref([
    {
        "question": `How do I get started with tutoring services at Future Prodigies?`,
        "answer": `Getting started is easy! Simply visit our "Contact" page and reach out to us via phone or email. We'll be happy to discuss your tutoring needs and guide you through the process.`
    },
    {
        "question": `What subjects do you offer tutoring for?`,
        "answer": `We offer tutoring services for a wide range of subjects, including Mathematics, English Language Arts, Science, Social Studies, Languages, and more. We also offer a wide variety of test prep for AP Tests and the SAT/ACT. Our team of experienced tutors covers various academic areas.`
    },
    {
        "question": `Do you provide tutoring for specific grade levels?`,
        "answer": `Yes, we offer tutoring services for students of all grade levels, from elementary school to high school. Our tutors are skilled in adapting their instruction to meet the specific needs of each student.`
    },
    {
        "question": `Are your tutors qualified and experienced?`,
        "answer": `Absolutely! Our tutors are highly qualified professionals with extensive experience in their respective fields. They possess the necessary expertise to provide effective instruction and support to our students.`
    },
    {
        "question": `Do you offer online tutoring sessions?`,
        "answer": `Yes, we offer online tutoring sessions for students who prefer the convenience and flexibility of learning from home. Our online platform provides a seamless virtual classroom experience.`
    },
    {
        "question": `Do you offer online tutoring sessions?`,
        "answer": `Yes, we offer online tutoring sessions for students who prefer the convenience and flexibility of learning from home. Our online platform provides a seamless virtual classroom experience.`
    },
    {
        "question": `How long are the tutoring sessions?`,
        "answer": `Our tutoring sessions typically last one hour. However, we can discuss and customize session durations based on the specific needs and preferences of each student.`
    },
    {
        "question": `How much does an hour of private and group tutoring cost at Future Prodigies?`,
        "answer": `At Future Prodigies, we strive to make quality tutoring services accessible and affordable for our students. The cost of an hour of private tutoring is $25 while an hour of group tutoring is $15 per person. We believe in providing exceptional value while maintaining competitive pricing to support your academic journey.`
    },
    {
        "question": `How often should I schedule tutoring sessions?`,
        "answer": `The frequency of tutoring sessions depends on various factors, such as the student's goals, availability, and subject difficulty. During the initial consultation, we'll work together to determine an appropriate schedule that meets your needs.`
    },
    {
        "question": `What is your cancellation policy?`,
        "answer": `We understand that unforeseen circumstances may arise. If you need to cancel or reschedule a tutoring session, please notify us at least 24 hours in advance.`
    },
    {
        "question": `How do I make payments for tutoring services?`,
        "answer": `We accept various payment methods, including credit/debit cards, Paypal, Cashapp, Stripe, and cash. Detailed payment instructions will be provided during the enrollment process.`
    },
])

let qa_advanced = ref([
{
        "question": `What are the costs associated with your tutoring services, particularly for AP class/test prep and SAT/ACT prep?`,
        "answer": `Our tutoring services for AP class/test prep and SAT/ACT prep are priced at $50 an hour. We offer flexible packages tailored to meet individual student needs. Please contact us directly to discuss specific pricing details.`
    },
    {
         "question": "How do you structure your tutoring sessions for AP class/test prep and SAT/ACT prep?",
         "answer": "Our tutoring sessions are customized to suit each student's requirements. For AP class/test prep and SAT/ACT prep, we focus on comprehensive subject review, practice tests, exam strategies, and personalized guidance to ensure students feel confident and well-prepared."
    },
    {
        "question": "Are the tutoring sessions conducted one-on-one or in a group setting for AP and standardized test preparation?",
         "answer": "We offer both one-on-one and small group tutoring sessions for AP and standardized test preparation. This allows us to cater to different learning preferences while ensuring personalized attention and an interactive learning environment. For pricing information, please contact us directly."
    },
    {
        "question": "Can you tailor the tutoring approach to accommodate my child's specific learning style and pace when preparing for AP exams or standardized tests?",
        "answer": "Absolutely! We understand the importance of personalized learning. Our tutors adapt teaching methods to match each student's unique learning style, pace, and areas of improvement for effective preparation."
    },
    {
        "question": "Are there any additional support services or resources available to supplement the tutoring sessions for AP or standardized test preparation?",
    "answer": "Alongside tutoring sessions, we offer access to supplementary materials, study guides, and online resources to further support and enhance your child's preparation for AP exams and standardized tests."
    },
    {
        "question": "What is the typical duration or timeline for your AP class/test prep and SAT/ACT prep programs, and how do you accommodate varying schedules and timelines?",
    "answer": "The duration of our programs varies based on individual needs and goals. We offer flexible scheduling options to accommodate different timelines and ensure students receive the necessary support for successful preparation."
    }
])
</script>

<style scoped>

</style>