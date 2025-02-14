<template>
  <Carousel
    class="h-[250px] w-fit overflow-hidden rounded-3xl"
    :items-to-show="1"
    :wrap-around="true"
    :autoplay="1500"
  >
    <Slide v-for="item in items" :key="item">
      <img :src="item" class="h-full w-[500px] rounded-3xl" draggable="false" />
    </Slide>
  </Carousel>
</template>

<script setup lang="ts">
import type { AboutUsCarousel } from '~/types/about-us'

defineProps<AboutUsCarousel>()
</script>
