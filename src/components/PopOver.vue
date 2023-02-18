<template>
  <Popover
    class="flex"
    @mouseenter="open = true"
    @mouseleave="open = false"
    @click="open = !open"
  >
    <PopoverButton
      @click="open = !open"
      class="no-highlights-for-mobile-device focus:outline-none"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        class="w-4 h-4 mr-1 text-blue-600"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"
        />
      </svg>
    </PopoverButton>

    <transition
      enter-active-class="transition duration-300 ease-out"
      enter-from-class="translate-y-1 opacity-0"
      enter-to-class="translate-y-0 opacity-100"
      leave-active-class="transition duration-150 ease-in"
      leave-from-class="translate-y-0 opacity-100"
      leave-to-class="translate-y-1 opacity-0"
    >
      <div
        v-if="open"
        class="absolute z-10 mt-5 max-w-sm -translate-x-1/2 transform px-4 sm:px-0 lg:max-w-3xl"
      >
        <PopoverPanel static>
          <div class="rounded-md shadow-md bg-gray-100 p-8">
            Contenu du pop over
          </div>
        </PopoverPanel>
      </div>
    </transition>
  </Popover>
</template>

<style>
.no-highlights-for-mobile-device {
  -webkit-tap-highlight-color: transparent;
}
</style>

<script setup lang="ts">
import { Popover, PopoverButton, PopoverPanel } from "@headlessui/vue";
import { ref } from "vue";
const open = ref(false);
</script>
