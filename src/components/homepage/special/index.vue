<template>
  <CommonZoomIn>
    <div class="bg-primary-50 relative mx-4 my-8 overflow-hidden rounded-3xl p-8 lg:my-16 lg:p-16">
      <UContainer class="mb-8 lg:mb-16">
        <div class="flex flex-col items-center justify-center gap-2 md:gap-4">
          <div>
            <CommonBrandText label="What makes us different?" color="primary-700"
              class="text-center text-2xl md:text-6xl" background></CommonBrandText>
          </div>
          <p class="text-center text-s md:text-base">
            We strive to become a go-to startup community by youth, for youth.
          </p>
        </div>
      </UContainer>
      <UContainer class="mx-auto grid auto-rows-max grid-cols-1 gap-4 md:grid-cols-2 md:gap-8">
        <div v-for="special in specialList" :key="special.id">
          <HomepageSpecialItem :icon="special.icon" :title="special.title" :prefix="special.prefix"
            :content="special.content" :suffix="special.suffix" class="z-10 h-full"></HomepageSpecialItem>
        </div>
      </UContainer>
    </div>
  </CommonZoomIn>
</template>

<script setup lang="ts">

const specialList = ref([
  {
    id: 1,
    icon: 'i-heroicons-signal',
    title: 'Elite network',
    prefix: 'UpYouth is backed by',
    content: '150+ experienced founders,',
    suffix:
      'top VCs, C-level executives from Homebase, Genesia Ventures, Base.vn,... to help deliver hands-on support to young technopreneurs.'
  },
  {
    id: 2,
    icon: 'i-heroicons-globe-alt',
    title: 'Like-minded community',
    prefix:
      'UpYouth puts community at the heart of everything we do, from peer-sharing sessions, offline meetups, to',
    content: 'online coding weekends.'
  },
  {
    id: 3,
    icon: 'i-heroicons-light-bulb',
    title: 'Access to talents',
    prefix: 'UpYouth grows a strong network of',
    content: 'young talents from top firms',
    suffix:
      'like Ericsson, McKinsey, and top global universities like NUS, UPenn, all committed to supporting startup growth.'
  },
  {
    id: 4,
    icon: 'i-heroicons-academic-cap',
    title: 'Founder-centric mindset',
    prefix: 'At UpYouth, founders back founders. We',
    content: 'move fast, fail fast, learn fast',
    suffix:
      "like a startup to best understand and solve young founders' biggest painpoints."
  }
])
</script>

