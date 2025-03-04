<template>
  <div class="relative">
    <transition
      enter-active-class="transition-all duration-500 ease-in-out"
      enter-from-class="opacity-0"
      enter-to-class="opacity-100"
      leave-active-class="transition-all duration-500 ease-in-out"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
      mode="out-in"
    >
      <div
        class="text-primary-600 mobile group relative flex flex-col items-center justify-center gap-4 transition-colors duration-500 ease-in-out"
        :class="isActive ? 'text-primary-700' : 'text-primary-600'"
      >
        <span
          class="text-4xl font-bold transition-colors duration-500 ease-in-out md:text-7xl"
        >
          {{ number }}
        </span>
        <p
          class="text-center text-xs transition-colors duration-500 ease-in-out md:text-lg"
        >
          {{ content }}
        </p>
      </div>
    </transition>
  </div>
</template>

<script setup lang="ts">
import type { AchievementItem } from '~/types/achievement'

defineProps<AchievementItem>()
</script>
