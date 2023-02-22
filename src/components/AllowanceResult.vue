<template>
  <div class="space-y-2">
    <div class="flex justify-between space-x-12">
      <span>Indemnité fixe</span>
      <span>723,99 EUR</span>
    </div>

    <div class="flex justify-between space-x-12">
      <span>+ Indemnité geographique</span>
      <span>1 538,30 EUR</span>
    </div>

    <div class="flex justify-between space-x-12 text-gray-400">
      <span>- Abattement de 20%</span>
      <span>307,66 EUR</span>
    </div>

    <div class="flex justify-between space-x-12">
      <span>+ Aide au logement</span>
      <div class="flex items-center">
        <PopOver content="Conversion effectuée avec un taux CAD/EUR à 0,74" />
        <span>624,45 EUR</span>
      </div>
    </div>
  </div>

  <hr class="h-px my-6 bg-gray-200 border-0" />

  <div class="space-y-2">
    <div class="flex justify-between space-x-12">
      <span class="font-bold">Total en EUR</span>
      <span>2 579,08 EUR</span>
    </div>

    <div class="flex justify-between space-x-12">
      <span class="font-bold">Total en CAD</span>
      <div class="flex items-center">
        <PopOver content="Conversion effectuée avec un taux EUR/CAD à 1,44" />
        <span>3 510 CAD</span>
      </div>
    </div>
  </div>

  <div class="mt-8 mb-4 text-xs text-gray-400">
    Taux de conversions applicables au 16/02/2023 à 22h51.
  </div>

  <button
    @click="back"
    class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded ml-auto mr-0"
  >
    Retour
  </button>
</template>

<script setup lang="ts">
import PopOver from "./PopOver.vue";
type Props = {
  back: () => void;
};

defineProps<Props>();
</script>
