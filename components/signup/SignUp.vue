<script setup lang="ts">
    import { Button } from '@/components/ui/button';
    import { userStore } from '~/store/userStore';

    const title = ref("Sign Up");
    const signUpFields = reactive([
      { name: "name", type: "text", value: "" },
      { name: "email", type: "email", value: "" },
      { name: "password", type: "password", value: "" },
    ]);

    const extactValue = computed(() => {
      return signUpFields.reduce((acc : User | any, field) => {
        acc[field.name] = field.value
        return acc
      }, {});
    });

    const { setUser } = userStore();
    const handleSignUp = async (e: Event) : Promise<void> => {
      e.preventDefault();
      console.log(extactValue.value);
      setUser(extactValue.value);
      const response = await $fetch("/api/v1/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(extactValue.value),
      });
      console.log(response);
      signUpFields.forEach(field => field.value = "");
      navigateTo("/");
    }
</script>

<template>
  <div>
    <h1 class="text-2xl font-bold font-jersey text-center my-4">{{ title }}</h1>
    <form class="flex flex-col gap-2 justify-center items-center border-spacing-2 border rounded-sm w-[30%] mx-auto">
      <div v-for="field in signUpFields" :key="field.name" class="w-full px-2 py-4 flex items-center justify-center">
        <input :type="field.type" :id="field.name" :name="field.name" :placeholder="field.name"
          v-model="field.value"
          class="border-none rounded bg-transparent text-gray-200 w-[80%] focus:outline-none focus:ring-0 focus:bg-slate-700 px-4 py-2"
        />
      </div>
      <Button variant="outline" @click="handleSignUp" class="bg-slate-700 hover:bg-gray-700 hover:text-gray-100 my-4">Sign Up</Button>
    </form>
  </div>

</template>