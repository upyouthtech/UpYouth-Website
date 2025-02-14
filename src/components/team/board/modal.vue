<template>
  <div>
    <UButton :padded="false" variant="link" @click="isOpen = true"
      >Read more</UButton
    >
    <UModal v-model="isOpen">
      <UCard
        :ui="{
          ring: '',
          divide: 'divide-y divide-gray-100'
        }"
      >
        <template #header>
          <div class="flex items-start  justify-between">
            <div class="flex gap-5 items-center">
              <NuxtImg class="w-[60px]" :src="item.img" />
              <div>
                <h5 class="text-primary-700 mb-1 text-2xl font-medium">
                  {{ item.name }}
                </h5>
                <p class="text-base">{{ item.title }}</p>
              </div>
            </div>
            <UButton
              color="gray"
              variant="ghost"
              icon="i-heroicons-x-mark-20-solid"
              class="-my-1"
              @click="isOpen = false"
            />
          </div>
        </template>

        <p class="mb-2" v-for="item in item.content" :key="item">{{ item }}</p>
      </UCard>
    </UModal>
  </div>
</template>
<script setup lang="ts">
import type { ExecutiveBoardItem } from '~/types/board'

defineProps<{ item: ExecutiveBoardItem }>()
const isOpen = ref(false)
</script>
