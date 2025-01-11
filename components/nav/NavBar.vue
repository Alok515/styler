<script setup lang="ts">
import { userStore } from '~/store/userStore';
const links = reactive([
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Sign In", href: "/signup" },
]);

const { user } = userStore();

watch(() => user.name, () => {
    if (user.name) {
        links.pop();
        links.push({ name: "Logout", href: "/logout" });
    } else {
        links.pop();
        links.push({ name: "Sign Up", href: "/signup" });
    }
});
</script>

<template>
    <nav class="font-jersey font-bold flex px-2 justify-between">
        <NuxtLink to="/" class="text-2xl hover:text-green-300">Style</NuxtLink>
        <div class="flex gap-2 ml-auto">
            <NuxtLink v-for="link in links" :key="link.name" :to="link.href"
                class="hover:text-green-300 hover:shadow-lg" active-class="text-green-400">
                {{ link.name }}
            </NuxtLink>
        </div>
    </nav>
</template>