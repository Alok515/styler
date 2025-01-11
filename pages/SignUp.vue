<script setup lang="ts">
  definePageMeta({
    title: "Sign Up",
    middleware: "redirect-to-home"
  })
</script>

<template>
  <div class="bg-gray-900 text-gray-400 w-full h-screen">
    <div>
      <SignupSignUp />
    </div>
  </div>
</template>