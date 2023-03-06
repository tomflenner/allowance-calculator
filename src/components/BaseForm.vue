<script setup lang="ts">
import { useAllowancesStore } from "@/stores/allowances";
import axios from "axios";
import { onMounted, ref } from "vue";
import AllowanceForm from "./AllowanceForm.vue";
import AllowanceResult from "./AllowanceResult.vue";

const showResult = ref(false);

const back = () => {
  console.log("going back...");
  showResult.value = false;
};

const calculate = () => {
  console.log("doing calculation...");
  showResult.value = true;
};

const store = useAllowancesStore();

const fetchAllowanceDoc = () => {
  axios
    .get("https://allowanceextractor.azurewebsites.net/api/AllowanceExtractor")
    .then((response) => {
      store.setDocumentDate(response.data.documentDate);
      store.setAllowances(response.data.allowances);
      store.setSelectedAllowance(response.data.allowances[0]);
      store.setSelectedHousingSupport(response.data.allowances[0]);
    })
    .catch((error) => {
      console.log("ERROR: " + error);
    });
};

onMounted(fetchAllowanceDoc);
</script>

<template>
  <div
    class="w-full max-w-fit bg-white shadow-md flex flex-col rounded-md px-8 pt-6 pb-8 mb-4 mt-4"
  >
    <AllowanceForm v-if="!showResult" :calculate="calculate" />
    <AllowanceResult v-if="showResult" :back="back" />
  </div>
  <p class="text-center text-xs">
    &copy;2023 Tom Flenner. Tous droits réservés.
  </p>
</template>
