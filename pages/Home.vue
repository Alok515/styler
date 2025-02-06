<template>
    <div class="relative min-h-screen bg-white flex items-center justify-center">
      <!-- <div class="absolute inset-0">
          <div class="absolute w-[250px] h-[250px] top-[6%] left-[30%] -translate-y-1/2 rounded-b-[29px] bg-lightSquareBox" ></div>
          <div class="absolute w-[340px] h-[250px] top-[231px] left-[-141px] rounded-r-[29px] bg-lightSquareBox"></div>
        <div class="absolute w-[300px] h-[300px] bottom-[-2%] right-[0%] rounded-tl-[29px]  bg-lightSquareBox"></div>
      </div> -->
      <Background></Background>
  
      <div class="relative bg-white p-10 rounded-lg text-center">
        <h1 class="text-4xl font-sarina text-primary">FindmyColor</h1>
        <p class="text-lg mt-4">Your one-stop solution for<span class="text-primary"> perfect skin color </span>analysis</p>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import Background from '~/components/ui/button/Background.vue';

  </script>
  
  <style scoped>
  </style>
  