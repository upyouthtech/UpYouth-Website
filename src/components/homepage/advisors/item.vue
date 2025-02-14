<template>
  <nuxt-link :to="url" target="_blank">
    <div class="mx-auto flex flex-col items-center text-center text-white">
      <img
        :src="avatar"
        :alt="name"
        class="mb-2 h-[100px] w-[100px] rounded-full md:h-[200px] md:w-[200px]"
        draggable="false"
      />
      <div>
        <p class="text-base font-semibold md:text-2xl">
          {{ name }}
        </p>
        <p class="mt-1.5 text-xs md:text-base">{{ position }}</p>
        <p class="mt-1.5 text-xs text-white md:text-base">
          {{ office.position }}
        </p>
        <p class="text-xs text-white md:text-base">
          {{ office.name }}
        </p>
      </div>
    </div>
  </nuxt-link>
</template>

<script setup lang="ts">
import type { ProfileItem } from '~/types/profile'

defineProps<ProfileItem>()
</script>
