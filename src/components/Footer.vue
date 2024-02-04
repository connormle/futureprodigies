<template>
<footer id="footer" class="bg-gradient-to-r from-blue-400 to-blue-600 mt-20 shadow-2xl shadow-blue-600">
<div class="container flex flex-col-reverse justify-evenly gap-10 mx-auto md:flex-row">
<div class="p-10 flex flex-col justify-center gap-4 text-center">
  <div class="container mx-auto flex justify-center">
  <img src="../assets/ft-logo.png" class="w-80 r-2" alt="">
</div>
  <span class="text-lg  text-white"> <RouterLink to="/">Home</RouterLink></span>
    <span class="text-lg text-white">  <RouterLink to="/about">About</RouterLink></span>
    <span class="text-lg  text-white">  <RouterLink to="/privatetutoring">Private Tutoring</RouterLink></span>
    <span class="text-lg  text-white">  <RouterLink to="/grouptutoring">Group Tutoring</RouterLink></span>
    <span class="text-lg d text-white">  <RouterLink to="/counseling">Academic Counseling</RouterLink></span>
    <span class="text-lg  text-white">  <RouterLink to="/homework">Homework Help</RouterLink></span>
  </div>
  <div class="p-10 flex flex-col justify-center gap-4 text-center">
  <span class="text-lg  text-white"> <RouterLink to="/ap">AP Test Prep</RouterLink></span>
  <span class="text-lg  text-white"> <RouterLink to="/sat">SAT/ACT Prep</RouterLink></span>
  <span class="text-lg  text-white"> <RouterLink to="/packages">Packages</RouterLink></span>
  </div>
  <div class="flex-col gap-10 p-10">
    <p class="text-lg p-6 text-white text-center">Ready to schedule an Appointment?</p>
    <p class="text-white text-lg font-bold text-center">Email: <span class="font-medium">futureprodigiescontact@gmail.com</span></p>
    <p class="text-white text-lg font-bold text-center pt-6">Phone Number: <span class="font-medium">714-293-4490</span></p>
  </div>
</div>
</footer>
</template>