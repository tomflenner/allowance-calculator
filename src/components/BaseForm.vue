<script setup lang="ts">
import { ref } from "vue";
import AllowanceForm from "./AllowanceForm.vue";
import AllowanceResult from "./AllowanceResult.vue";

const showResult = ref(false);

const back = () => {
  showResult.value = false;
};

const calculate = () => {
  console.log("doing calculation...");
  showResult.value = true;
};
</script>

<template>
  <div
    class="w-full max-w-fit bg-white shadow-md truncate flex flex-col rounded-md px-8 pt-6 pb-8 mb-4 mt-4"
  >
    <AllowanceForm v-if="!showResult" :calculate="calculate" />
    <AllowanceResult v-if="showResult" :back="back" />
    <p class="text-center text-xs">
      &copy;2023 Tom Flenner. Tous droits réservés.
    </p>
  </div>
</template>
