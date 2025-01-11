<script setup lang="ts">
import { NuxtPage } from '#build/components';

</script>

<template>
  <div class="bg-gray-900 h-screen text-zinc-300 font-montserrat flex flex-col gap-2 p-1"> 
    <NavBar />
    <slot />
  </div>
</template>