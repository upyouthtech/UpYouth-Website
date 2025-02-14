<template>
  <div
    class="mx-auto flex w-full flex-col items-center gap-4 rounded-lg border border-gray-300 p-8 lg:grow"
  >
    <span class="text-primary-700 w-max text-3xl font-bold">{{ text }}</span>
    <div class="grid w-max grid-cols-2 place-items-center gap-6 md:grid-cols-3">
      <img v-for="place in places" :key="place" :src="place" class="h-[48px]" />
    </div>
  </div>
</template>

<script setup lang="ts">
import type { MemberIntroItem } from '~/types/member-intro'

defineProps<MemberIntroItem>()
</script>
