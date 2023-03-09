<template>
  <div class="mb-8">
    <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
      Sélectionner le pays de destination
    </label>
    <FormDropDown :is-currency-drop-down="false" />
  </div>

  <div class="mb-4">
    <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
      Aide au logement
    </label>

    <FormDropDown :is-currency-drop-down="true" />

    <div class="flex items-center mb-2 mt-4">
      <input
        id="default-checkbox"
        type="checkbox"
        v-model="checked"
        class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded"
      />
      <label for="default-checkbox" class="ml-2 text-gray-700 text-sm font-bold"
        >Je n'ai pas d'aide au logement</label
      >
    </div>
  </div>

  <button
    @click="calculate"
    :disabled="!(checked || positiveValue)"
    class="font-bold py-2 px-4 rounded ml-auto mr-0"
    :class="[
      checked || positiveValue
        ? 'bg-blue-600 hover:bg-blue-700 text-white'
        : 'bg-gray-300 hover:bg-gray-400 text-gray-800',
    ]"
  >
    Calculer
  </button>
</template>

<style>
button[disabled] {
  pointer-events: none;
  background-color: lightgray;
  color: black;
}
</style>

<script setup lang="ts">
import { computed, ref } from "vue";
import { useAllowancesStore } from "@/stores/allowances";
import FormDropDown from "./FormDropDown.vue";
type Props = {
  calculate: () => void;
};
defineProps<Props>();

const checked = ref(false);
const store = useAllowancesStore();
const positiveValue = computed(() => store.state.housingSupportValue > 0);
</script>
