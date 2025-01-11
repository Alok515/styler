<script setup lang="ts">
    import { userStore } from '~/store/userStore';
    const timeOut = ref(3);
    const timer = setTimeout(() => {
        navigateTo("/signup");
    }, 3000);

    const { clearStore } = userStore();
    clearStore();
</script>

<template>
    <div>
        <h1 class="text-2xl font-bold font-jersey text-center my-4">Redirecting to Sign Up...</h1>
    </div>
</template>