<script setup lang="ts">
import AllowanceForm from "./AllowanceForm.vue";
import AllowanceResult from "./AllowanceResult.vue";
</script>

<template>
  <div
    class="w-full max-w-fit bg-white shadow-md truncate flex flex-col rounded-md px-8 pt-6 pb-8 mb-4 mt-4"
  >
    <AllowanceForm />
    <AllowanceResult />
    <p class="text-center text-xs">
      &copy;2023 Tom Flenner. Tous droits réservés.
    </p>
  </div>
</template>
