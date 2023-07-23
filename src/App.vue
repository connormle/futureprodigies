<template>
  <RouterView />
</template>

<script setup>
import { RouterView } from 'vue-router'
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600&display=swap');
*{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'Poppins', sans-serif;
}
body {
  background-color: rgb(255, 255, 255);
  font-family: 'Poppins', sans-serif;
}
html {
  scroll-behavior: smooth;
}
</style>