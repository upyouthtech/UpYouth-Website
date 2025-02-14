<template>
    <nuxt-link :to="profile.url" target="_blank">
      <div class="mx-auto flex flex-col items-center text-center">
        <img
          :src="profile.avatar"
          :alt="profile.name"
          class="mb-2 h-[100px] w-[100px] rounded-full md:h-[200px] md:w-[200px]"
          draggable="false"
        />
        <div>
          <p class="text-base font-semibold md:text-2xl text-primary-700">
            {{ profile.name }}
          </p>
          <p class="mt-1.5 text-xs md:text-base">{{ profile.position }}</p>
          <p class="mt-1.5 text-xs  md:text-base">
            {{ profile.office.position }}
          </p>
          <p class="text-xs md:text-base">
            {{ profile.office.name }}
          </p>
        </div>
      </div>
    </nuxt-link>
  </template>
  
  <script setup lang="ts">
  import type { ProfileItem } from '~/types/profile'
  defineProps<{profile: ProfileItem}>()
  </script>
  