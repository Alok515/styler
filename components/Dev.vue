<script setup lang="ts">
    import { Button } from '@/components/ui/button'
    const signUpFields = [
      { name: "name", type: "text" },
      { name: "email", type: "email" },
      { name: "password", type: "password" },
    ]
</script>

<template>
  <div>
    <h1 class="text-3xl">DeV Component</h1>
    <form class="flex flex-col gap-2 justify-center items-center border-spacing-2 border rounded-sm w-[30%] mx-auto h-48">
      <div v-for="field in signUpFields" :key="field.name" class="flex gap-2 justify-between w-full px-2">
        <label :for="field.name" class="text-gray-300">{{ field.name }}</label>
        <input :type="field.type" :id="field.name" :name="field.name" class="border rounded bg-transparent text-gray-300"/>
      </div>
      <Button variant="outline" class="bg-gray-900 hover:bg-cyan-300 hover:text-gray-100 mt-4">Sign Up</Button>
    </form>
  </div>

</template>