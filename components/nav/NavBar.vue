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
    <nav class="font-jersey font-bold flex p-4 justify-between mt-4 border-y-2">
        <NuxtLink to="/" class="text-2xl hover:text-green-300 ml-5 font-lobster">Style</NuxtLink>
        <div class="flex gap-10 ml-auto my-1">
            <NuxtLink v-for="link in links" :key="link.name" :to="link.href"
                class="hover:text-green-300 text-center" active-class="text-green-400">
                {{ link.name }}
            </NuxtLink>
        </div>
    </nav>
</template>