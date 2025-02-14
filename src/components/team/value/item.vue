<template>
  <div
    class="items-center justify-between gap-16 rounded-xl bg-white p-8 text-center shadow-sm sm:rounded-3xl sm:text-left lg:flex"
  >
    <div class="flex-1">
      <div class="mb-4 flex items-center justify-center gap-2 sm:justify-start">
        <UIcon
          :name="value.icon"
          class="text-primary-700 h-6 w-6 sm:h-9 sm:w-9"
        />
        <h2 class="text-primary-700 text-2xl font-bold sm:text-4xl">
          {{ value.title }}
        </h2>
      </div>
      <p class="mb-4 text-xs sm:mb-8 sm:text-left sm:text-xl">
        {{ value.description.leading }}
        <span class="text-primary-700">{{ value.description.main }}</span>
        {{ value.description.trailing }}
      </p>
    </div>
    <NuxtImg class="flex-2 lg:max-w-[600px]" :src="value.img"></NuxtImg>
  </div>
</template>

<script lang="ts" setup>
import type { Value } from '~/types/value'

defineProps<{ value: Value }>()
</script>
