<script setup lang="ts">
import { userStore } from '~/store/userStore';

definePageMeta({
  title: "Home",
  middleware: "auth"
});

const { user } = userStore();

</script>

<template>
  <div class="bg-gray-900 h-screen text-center mt-8">
    <h1 class="text-3xl">Welcome {{ user.name }}</h1>
    <section>
      <p>Hello!! Hope you are having a good day!</p>
    </section>
  </div>
</template>