<template>
  <section class="flow">
  <Navbar />
  <div ref="svg" class="hidden md:block absolute top-0 left-0 svg">
  
  </div>
  <section class="hero relative container mx-auto mt-10 pb-20">
  <div class="flex flex-col-reverse md:flex-row items-center justify-center">
      <div class="flex flex-col gap-10">
          <h1 ref="header" class="header lowercase md:uppercase text-gray-800 max-w-md text-5xl lg:text-5xl font-extrabold  text-center xl:text-6xl md:text-left">
                  Unlock the potential for academic execellence
              </h1>
              <p ref="info"  class="max-w-sm text-xl text-center text-gray-600 md:text-left">
           
           Unlock your child's full academic potential with our future prodigies tutoring. Our personalized approach empowers young minds to achieve academic excellence and embrace a brighter tomorrow.
                       </p>  
                       <div class="flex justify-center md:justify-start">
                  <a href="#footer" class="p-3 px-6 pt-2 text-white bg-green rounded-full">
                      Get Started
                  </a>
              </div>   
      </div>
      <div class="w-full md:w-1/2">
              <img ref="image" src="../assets/8576.jpg" alt="hero image">
          </div>
  </div>
  <!--Services-->
  <div ref="services" class="container mx-auto mt-4 shadow-lg p-6 mb-20 rounded-lgs">
        <div class="grid grid-cols-1 lg:grid-cols-4 gap-4">
          <RouterLink to="/privatetutoring">
          <div class="card cursor-pointer hover:text-blue flex flex-col h-full justify-center items-center service-item bg-blue-400 rounded-lg p-6">
            <i class="fa-solid fa-chalkboard-user text-3xl xl:text-4xl text-white"></i>
            <h1 class="text-lg xl:text-xl text-white font-medium">Private Tutoring</h1>
          </div>
          </RouterLink>
          <RouterLink to="/grouptutoring">
          <div class="card cursor-pointer flex flex-col h-full justify-center items-center service-item bg-purple-400 rounded-lg p-6">
            <i class="fa-solid fa-user-group text-3xl xl:text-4xl text-white"></i>
            <h1 class="text-lg xl:text-xl text-white font-medium">Group Tutoring</h1>
          </div>
        </RouterLink>
        <RouterLink to="/counseling">
          <div class="card text-center cursor-pointer flex flex-col h-full justify-center items-center service-item bg-green rounded-lg p-6">
            <i class="fa-solid fa-school text-3xl xl:text-4xl text-white"></i>
            <h1 class="text-lg xl:text-xl text-white font-medium">Academic Counseling</h1>
          </div>
        </RouterLink>
        <RouterLink to="/homework">
          <div class="card cursor-pointer flex flex-col h-full justify-center items-center service-item bg-yellow-400 rounded-lg p-6">
            <i class="fa-solid fa-pencil text-3xl xl:text-4xl text-white"></i>
            <h1 class="text-lg xl:text-xl text-white font-medium">Homework Help</h1>
          </div>
        </RouterLink>
        </div>
      </div>
  </section>
  <!--Consultant-->
  <div class="container mx-auto">
    <h1 class="text-gray-700  text-3xl md:text-5xl font-bold text-center  pb-20 px-16">
      Our Consultants
    </h1>
  </div>
  <div ref="con" class="container mx-auto pt-12 bg-green rounded-md text-white shadow-2xl shadow-green">
    <div class="flex flex-col lg:flex-row justify-around items-center">
      <div class="flex flex-col items-center justify-center space-y-1 text-center">
        <div class="rounded-full">
          <img class="border shadow-gray-600 shadow-2xl  rounded-full w-32" src="../assets/ethan2.jpg" alt="">
        </div>
        <h2 class="text-lg">Ethan Le</h2>
            <h2 class="text-lg">HBHS, 2024</h2>
      </div>
      <div class="flex items-center justify-center md:w-[68%] p-5">
        <p class="text-sm md:text-lg">
          Hello! I'm Ethan Le, a dedicated and passionate 12th grader attending Huntington Beach High School. I am thrilled to introduce myself as a tutor and educator who is committed to helping students excel academically and reach their full potential.
  I find great joy and fulfillment in helping students grasp challenging concepts, overcome obstacles, and achieve their academic goals. With my patient and supportive approach, I strive to create a positive and engaging learning environment where students can thrive.
  At Future Prodigies, my goal is to inspire and empower students through personalized tutoring sessions. I understand the challenges students face and the importance of tailoring instruction to meet their individual needs. Together, we will embark on a journey of learning, growth, and achievement.
  
        </p>
        </div>
    </div>
  </div>
  
  <div class="container mx-auto mt-8">
    <div ref="con2" class="container mx-auto pt-12 bg-blue-400 rounded-md text-white shadow-2xl shadow-blue-400">
    <div class="flex flex-col lg:flex-row justify-around items-center">
      <div class="flex flex-col items-center justify-center space-y-1 text-center">
        <div class="rounded-full">
          <img class="border shadow-gray-600 shadow-2xl  rounded-full w-32" src="../assets/michael.jpg" alt="">
        </div>
        <h2 class="text-lg">Connor Le</h2>
            <h2 class="text-lg">HBHS</h2>
      </div>
      <div class="flex items-center justify-center md:w-[68%] p-5">
        <p class="text-sm md:text-lg">
    
  Connor Le is the developer behind Future Prodigies'  you are currently exploring. Michael allows Future Prodigies to connect with its audience and inspire a brighter future for gifted individuals.
        </p>
        </div>
    </div>
  </div>
  </div>


  <div class="container mx-auto mt-8">
    <div ref="con3" class="container mx-auto pt-12 bg-purple-400 rounded-md text-white shadow-2xl shadow-blue-400">
    <div class="flex flex-col lg:flex-row justify-around items-center">
      <div class="flex flex-col items-center justify-center space-y-1 text-center">
        <div class="rounded-full">
          <img class="border shadow-gray-600 shadow-2xl  rounded-full w-32" src="../assets/amrit.jpg" alt="">
        </div>
        <h2 class="text-lg">Amrit Grewal</h2>
            <h2 class="text-lg">HBHS, 2024</h2>
      </div>
      <div class="flex items-center justify-center md:w-[68%] p-5">
        <p class="text-sm md:text-lg">
          Hello! I'm Amrit, a senior at Huntington Beach High School, deeply immersed in the world of tennis as an active member of the school team. Beyond sports, I take on roles such as supervising the Seva Collective food drive and actively participating in clubs like the Cultural Awareness Club and Pickleball club. Off the court, I balance my time hitting the gym, exploring biking trails, and savoring moments with friends. But my true passion lies in tutoring. I find immense joy in helping others grasp concepts and excel academically. Joining Future Prodigies is a perfect fit for me as I eagerly anticipate collaborating with fellow tutors and students alike. I can't wait to bring my enthusiasm for learning into every session, fostering a positive and engaging environment where everyone can thrive.
        </p>
        </div>
    </div>
  </div>
  </div>

<section class="container mx-auto mt-40">
  <h1 class="text-gray-700  text-3xl md:text-5xl font-bold text-center  py-7 px-16 pb-20">
     Why Us?
    </h1>
  <div class="grid grid-cols-1 xl:grid-cols-4 gap-4">
    <div ref="w1" class="card cursor-pointer flex flex-col h-full justify-center items-center service-item bg-purple-400 rounded-lg p-6 shadow-2xl shadow-purple-400">
            <i class="fa-solid fa-check-double text-4xl xl:text-5xl text-white"></i>
            <h1 class="text-lg xl:text-xl text-white font-medium">Proven Results</h1>
            <p class="text-white text-md">
              Over the years, we have helped numerous students achieve remarkable results academically. Our track record of success speaks volumes about the effectiveness of our tutoring methods.
            </p>
            </div>
            <div ref="w2" class="card cursor-pointer flex flex-col h-full justify-between items-center service-item bg-green rounded-lg p-6 shadow-2xl shadow-green">
            <i class="bx bx-dollar-circle text-4xl xl:text-5xl text-white"></i>
            <h1 class="text-lg xl:text-xl text-white font-medium">Affordable Pricing</h1>
            <p class="text-white text-md">
              Quality education should be accessible to all. Our competitive pricing ensures that exceptional tutoring is within reach for families of various financial backgrounds.
            </p>
            </div>

            <div  ref="w3" class="card cursor-pointer flex flex-col h-full justify-between items-center service-item bg-blue-400 rounded-lg p-6 shadow-2xl shadow-blue-400">
            <i class="fa-solid fa-book text-4xl xl:text-5xl text-white"></i>
            <h1 class="text-lg xl:text-xl text-white font-medium">Wide Subject Coverage</h1>
            <p class="text-white text-md">
              Future Prodigies offers tutoring across a wide range of subjects and academic levels. Our comprehensive coverage ensures that we can meet the needs of our students.
            </p>
            </div>

            
            <div ref="w4" class="card cursor-pointer flex flex-col h-full justify-between items-center service-item bg-yellow-400 rounded-lg p-6 shadow-2xl shadow-yellow-400">
            <i class="bx bxs-school text-4xl xl:text-5xl text-white"></i>
            <h1 class="text-lg xl:text-xl text-white font-medium">Experienced Tutors</h1>
            <p class="text-white text-md">
              Our team of educators comprises experienced tutors who are well-versed in their respective fields. We strive to create an inspiring learning environment for students.
            </p>
            </div>


  </div>

  
</section>

<section ref="cta" class="cta bg-green shadow-2xl shadow-green">
  <div class="container mx-auto flex-col items-center justify-between space-y-8 text-center mt-20 text-white py-14">
    <h1 class="text-5xl font-bold">100% Satisfaction Guaranteed</h1>
    <p class="text-lg pb-10">Ready to unlock your child's potential? Schedule a consultation today!</p>
    <a href="#footer" class="p-3 px-6 pt-2 text-white bg-purple-400 rounded-full">
                      Contact
                  </a>
  </div>      
</section>

<Footer />
</section>
  </template>
  <!-- Your template code remains unchanged -->
  
  <script setup>
  import { onMounted, ref } from 'vue';
  import Navbar from '../components/Navbar.vue';
  import Footer from '../components/Footer.vue';
  import { gsap } from "gsap";
  import { ScrollTrigger } from "gsap/ScrollTrigger";
  import Loader from '../components/Loader.vue';
import { RouterView } from 'vue-router';
  gsap.registerPlugin(ScrollTrigger);
  const header = ref(null);
  const info = ref(null);
  const image = ref(null);
  const services = ref(null);
  const con = ref(null)
  const svg = ref(null)
  const con2 = ref(null)
  const con3 = ref(null)
  const w1 = ref(null)
  const w2 = ref(null)
  const w3 = ref(null)
  const w4 = ref(null)
  const cta = ref(null)
  onMounted(() => { 
    gsap.from(header.value, {
      opacity: 0,
      x: -46,
      duration: 1.1,
    })
    gsap.from(svg.value, {
      opacity: 0,
      width: 0,
      duration: 1.1
    })
    
    gsap.from(info.value, {
      opacity: 0,
      x: 46,
      duration: 1.1,
    })

    gsap.from(image.value, {
      opacity: 0,
      y: 46,
      duration: 1.1,
    })

    gsap.from(services.value, {
      opacity: 0,
      y: 100,
      duration: 1.1,
    })

    gsap.from(con.value, {
      x: -100,
      opacity: 0,
      duration: 1,
      scrollTrigger: {
        trigger: con.value,
        toggleActions: "restart none none none",
        start: "top 96%", // Adjust this value to control when the animation starts
        end: "bottom bottom", // Adjust this value to control when the animation ends
      },
    })
    gsap.from(con2.value, {
      x: 100,
      opacity: 0,
      duration: 1,
      scrollTrigger: {
        trigger: con2.value,
        toggleActions: "restart none none none",
        start: "top bottom", // Adjust this value to control when the animation starts
        end: "bottom bottom", // Adjust this value to control when the animation ends
      },
    })

    gsap.from(con3.value, {
      y: 100,
      opacity: 0,
      duration: 1,
      scrollTrigger: {
        trigger: con2.value,
        toggleActions: "restart none none none",
        start: "top bottom", // Adjust this value to control when the animation starts
        end: "bottom bottom", // Adjust this value to control when the animation ends
      },
    })


    gsap.from(w1.value, {
      x: -20,
      opacity: 0,
      duration: 1,
      scrollTrigger: {
        trigger: w1.value,
        toggleActions: "restart none none none",
        start: "top bottom", // Adjust this value to control when the animation starts
        end: "bottom bottom", // Adjust this value to control when the animation ends
      },
    })

    gsap.from(w2.value, {
      y: -20,
      opacity: 0,
      duration: 1,
      scrollTrigger: {
        trigger: w2.value,
        toggleActions: "restart none none none",
        start: "top bottom", // Adjust this value to control when the animation starts
        end: "bottom bottom", // Adjust this value to control when the animation ends
      },
    })

    gsap.from(w3.value, {
      y: 20,
      opacity: 0,
      duration: 1,
      scrollTrigger: {
        trigger: w3.value,
        toggleActions: "restart none none none",
        start: "top bottom", // Adjust this value to control when the animation starts
        end: "bottom bottom", // Adjust this value to control when the animation ends
      },
    })

    gsap.from(w4.value, {
      x: 40,
      opacity: 0,
      duration: 1,
      scrollTrigger: {
        trigger: w4.value,
        toggleActions: "restart none none none",
        start: "top bottom", // Adjust this value to control when the animation starts
        end: "bottom bottom", // Adjust this value to control when the animation ends
      },
    })
    gsap.from(cta.value, {
      opacity: 0,
      duration: .9,
      scrollTrigger: {
        trigger: cta.value,
        toggleActions: "restart none none none",
        start: "top bottom", // Adjust this value to control when the animation starts
        end: "bottom bottom", // Adjust this value to control when the animation ends
      },
    })
  });
  
  </script>
  <style scoped>
  body {
    overflow-x: hidden !important;
  }
  .svg {
    width: 700px;
    height: 100vh;
    background-image: url(../assets/blob.svg);
      background-repeat: no-repeat;
      background-size: 700px;
      transform: translateY(4%)
  }
  .cta {
    background-image: url(../assets/blob.svg);
    background-repeat: no-repeat;
  }


  @media screen and (max-width: 1200px) {
    .svg {
    transform: translateX(-20%)
  }
  .svg {
    top: 50px;
    background-size: 500px;
  }
  }

  @media screen and (max-width: 1500px) {
    .svg {
    transform: translateX(-20%);
    top: 40px;
  }
  }


  @media screen and (min-width: 2100px) {
    .svg {
    transform: translateX(20%);
    top: 40px;
  }
  }

  @media screen and (min-width: 2400px) {
    .svg {
    transform: translateX(35%);
    top: 40px;
  }
  }


  @media screen and (min-width: 2600px) {
    .svg {
    transform: translateX(55%);
    top: 55px;
  }
  }


  </style>
  