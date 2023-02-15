<script setup lang="ts">
import MultistepFormStep from "./MultistepFormStep.vue";
import MultistepFormDropdown from "./MultistepFormDropdown.vue";
</script>

<template>
  <div class="flex flex-col items-center space-y-8">
    <MultistepFormStep />
    <div class="w-full max-w-xs">
      <div
        class="bg-white shadow-md flex flex-col rounded-md px-8 pt-6 pb-8 mb-4 mt-4"
      >
        <div class="mb-4">
          <label
            class="block text-gray-700 text-sm font-bold mb-2"
            for="username"
          >
            Sélectionner le pays de destination
          </label>
          <MultistepFormDropdown />
        </div>
        <button
          class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded ml-auto mr-0"
        >
          Suivant
        </button>
      </div>
      <p class="text-center text-xs">
        &copy;2023 Tom Flenner. All rights reserved.
      </p>
    </div>
  </div>
</template>
