<template>
  <CommonZoomIn>
  <div
    class="bg-primary-50 relative mx-4 overflow-hidden rounded-3xl pb-16 pt-8"
  >
    <UContainer>
      <div class="flex flex-col items-center justify-center gap-2 md:gap-4">
        <CommonBrandText
          label="Our Advisors"
          color="primary-700"
          class="text-xl font-semibold text-primary-700 md:text-6xl"
        >
        </CommonBrandText>
        <p class="mb-8 text-center text-s md:text-base">
          UpYouth is closely supported by high-level advisors, serial
          entrepreneurs, and seasoned investors.
        </p>
      </div>
      <div>
        <UCarousel 
          :items="items"
          ref="carouselRef"
          v-slot="{ item }"
          :ui="{
            item: 'basis-full md:basis-1/2 lg:basis-1/3 justify-center',
            indicators: {
              active: 'bg-primary-50',
              inactive: 'bg-primary-500',
              wrapper:
                'absolute flex items-center justify-center gap-3 -bottom-10 inset-x-0'
            }
          }"
          :wrap-around="true"
          indicators
        > 
          <HomepageAdvisorsItem
            :url="item.url"
            :avatar="item.avatar"
            :name="item.name"
            :office="item.office"
            :position="item.position"
          />
        </UCarousel>
        
      </div>
    </UContainer>
  </div>
  </CommonZoomIn>
</template>

<script setup lang="ts">
import type { ProfileItem } from '~/types/profile'

const items = ref<ProfileItem[]>([
  {
    url: 'https://www.linkedin.com/in/brianminhtran/',
    name: 'Brian Minh Tran',
    avatar: './advisor1.png',
    position: 'Co-founder',
    office: {
      name: '',
      position: 'Forbes 30U30 Asia'
    }
  },
  {
    url: 'https://www.linkedin.com/in/nam-doan-705102158/',
    name: 'Nam Doan',
    avatar: './advisor4.png',
    position: 'Co-founder',
    office: {
      name: '@ThinkZone Ventures',
      position: 'Accelerator Program Manager'
    }
  },
  {
    url: 'https://www.linkedin.com/in/thienhuongtran/',
    name: 'Huong Tran',
    avatar: './advisor2.png',
    position: 'Board Advisor',
    office: {
      name: "@Monk's Hill Ventures",
      position: 'Ex-Venture Partner'
    }
  },
  {
    url: 'https://www.linkedin.com/in/dr-cuong-nguyen-huu-miro-24844583/',
    name: 'Nguyen Huu Cuong',
    avatar: './advisor3.png',
    position: 'Board Advisor',
    office: {
      name: '@VinFast',
      position: 'Global KOL & Partnership Director'
    }
  },

  {
    url: 'https://www.linkedin.com/in/thaoha57/',
    name: 'Thao Ha',
    avatar: './advisor5.png',
    position: 'Board Advisor',
    office: {
      name: '@Integra Partners',
      position: 'Venture Partner'
    }
  }
])

const carouselRef = ref()

onMounted(() => {
  setInterval(() => {
    if (!carouselRef.value) return

    if (carouselRef.value.page === carouselRef.value.pages) {
      return carouselRef.value.select(0)
    }

    carouselRef.value.next()
  }, 3000)
})
</script>
