<template>
  <div>
    {{ props.prefix }}
    <span
      ref="animatedSpan"
      :class="`${
        background
          ? `px-2 leading-loose ${slide ? 'slidy-div slide-right' : 'text-white'}`
          : 'text-primary-700'
      }`"
    >
      {{ label }}
    </span>
    {{ props.suffix }}
  </div>
</template>

<script lang="ts" setup>
import type { BrandText } from '~/types/brand-text'

const props = withDefaults(defineProps<BrandText>(), {
  color: 'primary',
  background: false,
  slide: false
})

const animatedSpan = ref<HTMLElement | null>(null)

const handleIntersection = (entries: IntersectionObserverEntry[]) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting && animatedSpan.value && props.slide) {
      animatedSpan.value.classList.add('slidy-div-selected')
      animatedSpan.value.classList.add('text-white')
    }
  })
}

onMounted(() => {
  const observer = new IntersectionObserver(handleIntersection, {
    root: null,
    threshold: 1
  })

  if (animatedSpan.value) {
    observer.observe(animatedSpan.value)
  }

  onUnmounted(() => {
    if (animatedSpan.value) {
      observer.unobserve(animatedSpan.value)
    }
  })
})

const label = computed(() => {
  const formattedLabel = props.label.replace(/\s+/g, ' ')
  return `${formattedLabel}`
})
</script>
