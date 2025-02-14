<template>
    <div class="p-8 sm:p-16 rounded-3xl shadow-md flex flex-col items-center sm:flex-row gap-2 sm:gap-16 mb-1">
        <ULink :to="item.linkedin" target="_blank" class="text-center">
            <NuxtImg :src="item.img" class="w-[100px] sm:w-[200px] mb-3 sm:mb-6 mx-auto"></NuxtImg>
            <h5 class="text-base sm:text-2xl font-medium text-primary-700 mb-1">{{item.name}}</h5>
            <p class="text-xs sm:text-base">{{item.title}}</p>
        </ULink>
        <div class="max-w-[450px] text-center sm:text-left">
        <p class="text-base sm:text-lg font-bold mb-2">Our Story</p>
        <hr class="mb-4 sm:mb-8 border-gray-300" />
        <p class="line-clamp-5 text-xs sm:text-xl mb-4 sm:mb-10">
         {{item.content[0]}}
        </p>
        <TeamBoardModal :item="item" />
      </div>
    </div>
</template>
<script lang="ts" setup>

import type { ExecutiveBoardItem } from '~/types/board';

  defineProps<{item: ExecutiveBoardItem}>()
</script>