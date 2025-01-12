<script setup lang="ts">
  definePageMeta({
    title: "Sign Up",
    middleware: "redirect-to-home"
  })
</script>

<template>
  <div class="bg-slate-700 text-gray-400 w-full h-screen">
    <div>
      <SignupSignUp />
    </div>
  </div>
</template>