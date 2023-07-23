<template>
    <div ref="navbar" class="sticky top-0 left-0 z-10 navbar flex items-center justify-evenly shadow-lg py-2 w-screen bg-gray-100">
        <div class="logo cursor-pointer">
            <RouterLink to="/">  <img src="../assets/logo.png" class="w-80 r-2" alt=""></RouterLink>
        </div>
        <div class="relative hidden space-x-6 font-semibold md:flex gap-5 md:flex items-center">
            <span class="text-lg text-gray-700 hover:text-green duration-100"> <RouterLink to="/">Home</RouterLink></span>
            <div class="relative flex-col">
    <span @click="dropdownToggle" class="cursor-pointer text-lg text-gray-700 hover:text-green duration-100">
      <div>
      Services       <i ref="icon" class="rotate-[270deg] fa-solid fa-caret-down"></i>
    </div>
    <div>
    </div>
    </span>
    <div ref="dropdown" class="hidden text-gray-800 flex -left-[130%] absolute flex-col items-center container mx-auto text-center px-12 py-4 rounded-lg bg-white drop-shadow-md gap-4 w-max">
              <span class="text-lg text-gray-700 hover:text-green duration-100"> <RouterLink to="/privatetutoring">Private Tutoring</RouterLink></span>
              <span class="text-lg text-gray-700 hover:text-green duration-100"> <RouterLink to="/grouptutoring">Group Tutoring</RouterLink></span>
              <span class="text-lg text-gray-700 hover:text-green duration-100"> <RouterLink to="/counseling">Academic Counseling</RouterLink></span>
              <span class="text-lg text-gray-700 hover:text-green duration-100"> <RouterLink to="/homework">Homework Help</RouterLink></span>
            </div>
            </div>
           <span class="text-lg text-gray-700 hover:text-green duration-100 ">  <RouterLink to="/about">About</RouterLink></span>
        <span class="px-4 py-2 text-white bg-green rounded-full"><a href="#footer">Contact</a></span>
        </div>
        <button ref="button" @click="toggle" id="menu-btn" class="block hamburger md:hidden focus:outline-none">
          <span class="hamburger-top"></span>
          <span class="hamburger-middle"></span>
          <span class="hamburger-bottom"></span>
        </button>
        <div class="md:hidden">
        </div>
        <div class="md:hidden">
    <div ref="mobile" class="text-gray-800 flex absolute flex-col items-center hidden self-end py-8 mt-10 space-y-6 font-bold bg-white sm:w-auto sm:self-center left-6 right-6 drop-shadow-md">
        <span class="text-lg text-gray-700 hover:text-green duration-100"> <RouterLink to="/">Home</RouterLink></span>
           <span @click="toggleMobile" class="cursor-pointer text-lg text-gray-700 hover:text-green duration-100"> Services  <i ref="mobileicon" class="rotate-[270deg] fa-solid fa-caret-down" ></i></span>
            <div ref="mobiledropdown" class="hidden flex flex-col gap-8 bg-white  p-6 text-center shadow-md rounded-2xl ">
              <span class="text-lg text-gray-700 hover:text-green duration-100"> <RouterLink to="/privatetutoring">Private Tutoring</RouterLink></span>
              <span class="text-lg text-gray-700 hover:text-green duration-100"> <RouterLink to="/grouptutoring">Group Tutoring</RouterLink></span>
              <span class="text-lg text-gray-700 hover:text-green duration-100"> <RouterLink to="/counseling">Academic Counseling</RouterLink></span>
              <span class="text-lg text-gray-700 hover:text-green duration-100"> <RouterLink to="/homework">Homework Help</RouterLink></span>
            </div>
           <span class="text-lg text-gray-700 hover:text-green duration-100 ">  <RouterLink to="/about">About</RouterLink></span>
    </div>
    </div>
    </div>
</template>
<script setup>
import { ref } from 'vue';

const button = ref(null)
const mobile = ref(null)
const dropdown = ref(null)
const mobiledropdown = ref(null)
const icon = ref(null)
const mobileicon = ref(null)
const toggle = () => {
button.value.classList.toggle('open')
  mobile.value.classList.toggle('hidden')
}
const dropdownToggle = () => {
  dropdown.value.classList.toggle('hidden')
  icon.value.classList.toggle('rotate-[270deg]')
  
}
const toggleMobile = () => {
  mobiledropdown.value.classList.toggle('hidden')
  mobileicon.value.classList.toggle('rotate-[270deg]')
}
</script>
<style scoped>
.hamburger {
    cursor: pointer;
    width: 24px; 
    height: 24px;
    transition: all 0.25s;
    position: relative;
}

.hamburger-top, .hamburger-middle, .hamburger-bottom {
    position: absolute;
    top: 0;
    left: 0;
    width: 24px;
    height: 2px;
    background: #000;
    transform: rotate(0);
    transition: all 0.3s;
}

.hamburger-middle {
    transform: translateY(7px)
}

.hamburger-bottom {
    transform: translateY(14px)
}

.open {
    transform: rotate(90deg);
    transform: translateY(0px);
  }
  
  .open .hamburger-top {
    transform: rotate(45deg) translateY(6px) translate(6px);
  }
  
  .open .hamburger-middle {
    display: none;
  }
  
  .open .hamburger-bottom {
    transform: rotate(-45deg) translateY(6px) translate(-6px);
  }
</style>
