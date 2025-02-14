<template>
  <CommonZoomIn>
  <div
    id="achievement"
    class="bg-primary-700 relative mx-4 mb-8 max-w-full rounded-3xl pt-8 text-white md:mx-8"
  >
    <UContainer>
      <div class="flex flex-col items-center justify-center gap-2 md:gap-4">
        <CommonBrandText
          label="Our numbers speak"
          background
          class="text-2xl font-bold md:text-6xl"
        />
        <p class="mb-4 text-center text-xs md:mb-8 md:text-base">
          UpYouth empowers can-do youth to create real impacts, and we also do
          the same.
        </p>
      </div>
    </UContainer>
    <UContainer
      class="flex flex-col items-center justify-between gap-8 overflow-hidden rounded-3xl pb-8 lg:flex-row lg:gap-0 lg:pb-16"
      :ui="{ constrained: 'lg:max-w-7xl md:max-w-md max-w-xs' }"
    >
      <div v-for="achievement in achievementList" :key="achievement.id">
        <HomepageAchievementItem
          :number="achievement.number"
          :content="achievement.content"
          :is-active="achievement.id === activeItemId"
          class="hidden lg:flex"
        />
        <HomepageAchievementMobileItem
          :number="achievement.number"
          :content="achievement.content"
          :is-active="achievement.id === activeItemId"
          class="lg:hidden"
        />
      </div>
    </UContainer>
  </div>
  </CommonZoomIn>
</template>

<script setup lang="ts">
const achievementList = ref([
  {
    id: 0,
    number: '150+',
    content: 'Ecosystem partners'
  },
  {
    id: 1,
    number: '$4.5M+',
    content: 'Raised combined'
  },
  {
    id: 2,
    number: '40+',
    content: 'Startups supported'
  },
  {
    id: 3,
    number: '4,000+',
    content: 'Community members'
  }
])

const activeItemId = ref(0)

onMounted(() => {
  setInterval(() => {
    activeItemId.value = (activeItemId.value + 1) % 4
  }, 1500)
})
</script>