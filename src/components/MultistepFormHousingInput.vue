<script setup lang="ts">
import "/node_modules/flag-icons/css/flag-icons.min.css";
import { countries } from "../datas/countries";
import { ref } from "vue";
import {
  Listbox,
  ListboxButton,
  ListboxOption,
  ListboxOptions,
} from "@headlessui/vue";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/vue/20/solid";
const selected = ref(countries[0]);
</script>
<template>
  <div class="flex">
    <Listbox as="div" class="flex-shrink-0 inline-flex" v-model="selected">
      <div class="relative">
        <ListboxButton
          class="relative w-full border border-gray-300 bg-white py-2 pl-3 pr-10 text-left shadow-sm sm:text-sm rounded-l-lg"
        >
          <span class="flex items-center">
            <span
              :class="selected.icon + ' h-6 w-6 flex-shrink-0 rounded-full'"
            ></span>
            <span class="ml-3 block truncate">{{ selected.currency }}</span>
          </span>
          <span
            class="pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center pr-2"
          >
            <ChevronUpDownIcon
              class="h-5 w-5 text-gray-400"
              aria-hidden="true"
            />
          </span>
        </ListboxButton>

        <transition
          leave-active-class="transition ease-in duration-100"
          leave-from-class="opacity-100"
          leave-to-class="opacity-0"
        >
          <ListboxOptions
            class="absolute z-10 mt-1 max-h-56 overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm"
          >
            <ListboxOption
              as="template"
              v-for="country in countries"
              :key="country.id"
              :value="country"
              v-slot="{ active, selected }"
            >
              <li
                :class="[
                  active ? 'text-white bg-indigo-600' : 'text-gray-900',
                  'relative cursor-default select-none py-2 pl-3 pr-9',
                ]"
              >
                <div class="flex items-center">
                  <span
                    :class="
                      country.icon + ' h-6 w-6 flex-shrink-0 rounded-full'
                    "
                  ></span>
                  <span
                    :class="[
                      selected ? 'font-semibold' : 'font-normal',
                      'ml-3 block truncate',
                    ]"
                    >{{ country.name }}</span
                  >
                </div>

                <span
                  v-if="selected"
                  :class="[
                    active ? 'text-white' : 'text-indigo-600',
                    'absolute inset-y-0 right-0 flex items-center pr-4',
                  ]"
                >
                  <CheckIcon class="h-5 w-5" aria-hidden="true" />
                </span>
              </li>
            </ListboxOption>
          </ListboxOptions>
        </transition>
      </div>
    </Listbox>

    <input
      class="border shadow-sm appearance-none rounded-r-lg w-full px-3 text-gray-700 leading-tight border-gray-300 bg-white focus:outline-none focus:shadow-outline"
      id="housingsupport"
      type="number"
      value="0"
    />
  </div>
</template>
