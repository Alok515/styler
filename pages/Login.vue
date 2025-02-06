<script setup lang="ts">
import { Button } from '@/components/ui/button';
import Background from '~/components/ui/button/Background.vue';
import { userStore } from '~/store/userStore';

const title = ref("Sign Up");
const signUpFields = reactive([
    { name: "Email", type: "email", value: "" },
    { name: "Password", type: "password", value: "" },
]);

const extactValue = computed(() => {
    return signUpFields.reduce((acc: User | any, field) => {
        acc[field.name] = field.value;
        return acc;
    }, {});
});

const { setUser } = userStore();
const handleSignUp = (e: Event): void => {
    e.preventDefault();
    console.log(extactValue.value);
    setUser(extactValue.value);
    signUpFields.forEach(field => field.value = "");
    navigateTo("/");
}
</script>

<template>
    <div class="relative min-h-screen bg-white flex items-center justify-center">
        <Background></Background>

        <div class="relative bg-white p-10 rounded-lg text-center w-[40rem] sm:w-[400px]">
            <h1 class="text-3xl font-bold font-sarina text-primary mb-6">Hello gorgeous!</h1>

            <!-- Form Section -->
            <form class="flex flex-col gap-2 w-full">
                <!-- Email Input -->
                <div class="">
                    <label for="Email" class="text-lg font-semibold mb-2 text-primary flex justify-start">Log in</label>
                    <input v-model="signUpFields[0].value" type="email" id="Email" name="Email"
                        placeholder="username/email"
                        class="border-2 border-primary rounded bg-transparent text-gray-200 w-full focus:outline-none focus:ring-0 focus:bg-orange-700 px-4 py-2 mb-4" />
                </div>

                <!-- Password Input -->
                <div class="">
                    <label for="Password" class="text-lg font-semibold mb-2 text-primary flex justify-start">Password</label>
                    <input v-model="signUpFields[1].value" type="password" id="Password" name="Password"
                        placeholder="Enter your password"
                        class="border-2 border-primary rounded bg-transparent text-gray-200 w-full focus:outline-none focus:ring-0 focus:bg-orange-700 px-4 py-2 mb-1" />
                </div>

                <!-- Forget Password Link -->
                <div class="flex justify-start mb-6">
                    <a href="#" class="text-sm text-primary">Forgot your password?</a>
                </div>

                <!-- Buttons Section -->
                <div class="flex justify-between">
                    <Button variant="outline" class=" text-white bg-primary hover:text-gray-100 px-8 mb-4">New
                        User</Button>
                    <Button variant="outline" @click="handleSignUp"
                        class="bg-primary text-white hover:text-gray-100 mb-4 px-8">
                        Submit
                    </Button>
                </div>
            </form>
        </div>
    </div>
</template>
