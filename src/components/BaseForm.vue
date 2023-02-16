<script setup lang="ts">
import MultistepFormDropdown from "./FormDropDown.vue";
</script>

<template>
  <div class="w-full max-w-xs">
    <form
      class="bg-white shadow-md flex flex-col rounded-md px-8 pt-6 pb-8 mb-4 mt-4"
    >
      <div class="mb-8">
        <label
          class="block text-gray-700 text-sm font-bold mb-2"
          for="username"
        >
          Sélectionner le pays de destination
        </label>
        <MultistepFormDropdown :currency="false" />
      </div>

      <div class="mb-4">
        <label
          class="block text-gray-700 text-sm font-bold mb-2"
          for="username"
        >
          Aide au logement
        </label>

        <MultistepFormDropdown :currency="true" />

        <div class="flex items-center mb-2 mt-4">
          <input
            id="default-checkbox"
            type="checkbox"
            value=""
            class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
          />
          <label
            for="default-checkbox"
            class="ml-2 text-gray-700 text-sm font-bold"
            >Je n'ai pas d'aide au logement</label
          >
        </div>
      </div>

      <button
        class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded ml-auto mr-0"
      >
        Calculer
      </button>
    </form>
    <p class="text-center text-xs">
      &copy;2023 Tom Flenner. Tous droits réservés.
    </p>
  </div>
</template>
