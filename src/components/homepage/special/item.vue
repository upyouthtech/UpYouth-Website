<template>
  <UCard>
    <div class="mb-4 flex flex-row items-center gap-2 md:gap-4">
      <UIcon
        :name="icon"
        class="text-primary-700 h-6 w-6 md:h-9 md:w-9"
      ></UIcon>
      <h1 class="text-primary-700 text-xl font-bold md:text-3xl">
        {{ title }}
      </h1>
    </div>
    <div>
      <p class="text-xs leading-6 md:text-base lg:h-[72px]">
        <span>{{ prefix }}</span
        >{{ ' ' }}
        <span class="text-primary-700">
          {{ content }} </span
        >{{ ' ' }}
        <span>{{ suffix }}</span>
      </p>
    </div>
  </UCard>
</template>

<script setup lang="ts">
type Props = {
  icon: string
  title: string
  prefix?: string
  content: string
  suffix?: string
}
const props = defineProps<Props>()
</script>
