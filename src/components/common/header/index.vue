<template>
  <div class="sticky top-0 z-30">
    <div
      :class="activeBlur ? 'bg-white/50' : 'bg-white'"
      class="flex w-full flex-row items-center justify-between border-b border-gray-300 px-4 py-6 backdrop-blur-md transition-opacity duration-300 ease-in-out md:px-8"
    >
      <div class="flex max-w-32 flex-row items-center gap-2">
        <UButton
          variant="ghost"
          :icon="
            isVerticalNavOpen
              ? 'i-heroicons-x-mark'
              : 'i-heroicons-bars-3-bottom-left'
          "
          size="xs"
          class="text-gray-900 md:hidden"
          @click="toggleVerticalNav"
        />
        <CommonLogo />
      </div>
      <UHorizontalNavigation
        :links="navigationLinks"
        class="hidden justify-end md:flex"
      />
      <NuxtLink
        to="https://wga5q7u479w.sg.larksuite.com/share/base/form/shrlgs6JmB9MJLlGSas4XWlTfVb?from=from_parent_docs"
        target="_blank"
        class="ml-4 transform whitespace-nowrap rounded-full bg-gradient-to-r from-blue-600 to-blue-800 px-4 py-2 font-semibold text-white shadow-lg transition-transform hover:scale-105 hover:from-blue-700 hover:to-blue-900"
      >
        Join us now!
      </NuxtLink>
    </div>
    <div class="border-b border-gray-300 bg-white">
      <UVerticalNavigation
        :links="navigationLinks"
        class="md:hidden"
        :class="!isVerticalNavOpen && 'hidden'"
      />
    </div>
  </div>
  <hr />
</template>

<script setup lang="ts">
const navigationLinks = [
  {
    label: 'Homepage',
    to: '/'
  },
  {
    label: 'Our Team',
    to: 'https://upyouth.framer.website/'
  }
]

const isVerticalNavOpen = ref(false)
const activeBlur = ref(false)

const toggleVerticalNav = () => {
  isVerticalNavOpen.value = !isVerticalNavOpen.value
}

const handleScroll = () => {
  activeBlur.value = window.scrollY > 48
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>
