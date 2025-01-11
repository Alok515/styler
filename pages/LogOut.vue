<script setup lang="ts">
    import { userStore } from '~/store/userStore';
    definePageMeta({
        title: "Logout",
        middleware: "auth"
    });

    const { clearStore } = userStore();

    setTimeout(() => {
        clearStore();
        navigateTo("/signup");
    }, 3000);
</script>

<template>
    <h1 class="text-2xl font-bold font-jersey text-center my-4">Logout....</h1>
    <p>Redirecting to Sign Up....</p>
</template>