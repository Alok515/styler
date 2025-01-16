<script setup lang="ts">
    import { userStore } from '~/store/userStore';
    definePageMeta({
        title: "Logout",
        middleware: "auth"
    });

    const { clearStore, user } = userStore();

    const logout: any  = await useFetch("/api/v1/auth/logout", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: {
            email: user.email
        }
    });
    clearStore();
    navigateTo("/signUp");
</script>

<template>
    <h1 class="text-2xl font-bold font-jersey text-center my-4">Logout....</h1>
    <p>Redirecting to Sign Up....</p>
</template>