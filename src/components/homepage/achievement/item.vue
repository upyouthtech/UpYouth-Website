<template>
  <div
    class="text-primary-600 group relative flex flex-col items-center justify-center gap-4 transition duration-500 ease-in-out"
    :class="isActive && 'text-white scale-110'"
  >
    <span class="text-text-4xl font-bold md:text-7xl">
      {{ number }}
    </span>
    <p class="text-center text-xs md:text-lg">
      {{ content }}
    </p>
    <div
      class="absolute top-[145px] h-[106px] w-[106px] transform rounded-full bg-[#48a6ff] opacity-0 blur-lg backdrop-blur-[64px] transition-all duration-700 ease-in-out"
      :class="isActive && 'scale-100 opacity-100'"
    ></div>
  </div>
</template>

<script setup lang="ts">
import type { AchievementItem } from '~/types/achievement'

defineProps<AchievementItem>()
</script>
