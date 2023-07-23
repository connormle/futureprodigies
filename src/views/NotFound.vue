<template>
    <div class="main-container flex flex-col min-h-screen">
      <Navbar />
      <div class="stuff container mx-auto p-10 flex-grow flex flex-col gap-10">
        <h1 class="text-gray-800 text-center text-6xl font-bold">Uh Oh!</h1>
        <p class="text-gray-800 text-center font-semibold text-4xl">404 Error</p>
        <p class="text-gray-800 text-center font-semibold text-3xl">We couldn't find the page you were looking for</p>
        <div class="flex justify-center">
          <span class="px-4 py-2 text-white bg-green rounded-full"><RouterLink to="/">Return to HomePage </RouterLink></span>
        </div>
      </div>
      <Footer />
    </div>
  </template>
  
  <script setup>
  import Navbar from '../components/Navbar.vue';
  import Footer from '../components/Footer.vue';
  </script>
  
  <style scoped>
  /* Ensure the main container takes up the full height of the viewport */
  .main-container {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
  }
  
  /* Allow the content to grow to fill available space, but shrink if necessary */
  .stuff {
    flex-grow: 1;
    flex-shrink: 1;
  }
  
  /* Ensure the footer stays at the bottom and doesn't shrink */
  footer {
    flex-shrink: 0;
  }
  </style>
  