import { userStore } from "~/store/userStore";
export default defineNuxtRouteMiddleware((to, from) => {
    const { user } = userStore();
    if (user.name) {
        return navigateTo("/");
    }
});