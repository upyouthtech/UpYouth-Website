<template>
  <UContainer>
    <div class="flex flex-col items-center justify-center gap-2 md:gap-4">
      <h1 class="text-xl text-center font-semibold md:text-6xl">We partnered with the best to create </h1>
      <CommonBrandText label="the best" color="primary-700" class="text-center text-xl font-semibold md:text-6xl" background
        slide>
      </CommonBrandText>
      <p class="text-center text-xs md:text-base">
        Our elite partners in startup ecosystems help you build real ventures
        and grow them far beyond.
      </p>
    </div>
    <div class="my-8 flex flex-col gap-8">
      <Carousel :items-to-show="2.5" :breakpoints="breakpoints" :autoplay="1500" :wrap-around="true" :transition="500">
        <Slide v-for="item in items" :key="item">
          <div
            class="flex h-[60px] items-center justify-center rounded-lg border border-gray-300 md:h-[90px] lg:h-[140px]">
            <img :src="item" draggable="false" class="mx-6 w-[80px] md:w-[140px] lg:w-[200px]" />
          </div>
        </Slide>
      </Carousel>
      <Carousel :items-to-show="2.5" :breakpoints="breakpoints" :autoplay="1500" :wrap-around="true" :transition="500">
        <Slide v-for="item in items2" :key="item">
          <div
            class="flex h-[60px] items-center justify-center rounded-lg border border-gray-300 md:h-[90px] lg:h-[140px]">
            <img :src="item" draggable="false" class="mx-6 w-[80px] md:w-[140px] lg:w-[200px]" />
          </div>
        </Slide>
      </Carousel>
    </div>
  </UContainer>
</template>

<script setup lang="ts">

const items = [
  '/sponsors/Advertising Vietnam.svg',
  '/sponsors/Ái Việt Ventures.svg',
  '/sponsors/Airtable.svg',
  '/sponsors/Antler.svg',
  '/sponsors/AWS.svg',
  '/sponsors/Brands Vietnam.svg',
  '/sponsors/Builtfirst.svg',
  '/sponsors/Elsa.svg',
  '/sponsors/Genestory.svg',
  '/sponsors/HubSpot.svg',
  '/sponsors/Indochine Counsel.svg'
]

const items2 = [
  '/sponsors/infina.svg',
  '/sponsors/mixpanel.svg',
  '/sponsors/Notion.svg',
  '/sponsors/pre.dev.svg',
  '/sponsors/Singapore Global Network.svg',
  '/sponsors/Startup Wheel.svg',
  '/sponsors/Stucolab.svg',
  '/sponsors/The Sentry P.svg',
  '/sponsors/Timo Bank.svg',
  '/sponsors/TopCV.svg'
]

const settings = ref({
  itemsToShow: 2.5,
  snapAlign: 'center'
})

const breakpoints = ref({
  700: {
    itemsToShow: 3.5,
    snapAlign: 'center'
  },
  1024: {
    itemsToShow: 4,
    snapAlign: 'center'
  }
})
</script>

