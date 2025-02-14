<template>
    <div
      class="bg-primary-50 relative mx-4 overflow-hidden rounded-3xl pb-16 pt-8 mb-16"
    >
      <UContainer>
        <div class="flex flex-col items-center justify-center gap-2 md:gap-4">
          <h1 class="text-primary-700 mb-2 sm:mb-4 text-3xl sm:text-5xl font-bold">Our Board of Trustees</h1>
          <p class="mb-8 text-center text-base sm:text-xl">
            To best support startups, UpYouth works closely with high-level advisors, <br> serial entrepreneurs, and seasoned investors.
          </p>
        </div>
        <div>
          <UCarousel
            :items="items"
            v-slot="{ item }"
            :ui="{
              item: 'basis-full md:basis-1/2 lg:basis-1/3 justify-center',
              indicators: {
                active: 'bg-primary-700',
                inactive: 'bg-gray-300',
                wrapper:
                  'absolute flex items-center justify-center gap-3 -bottom-10 inset-x-0'
              }
            }"
            indicators
          >
            <TeamTrusteeItem
              :profile="item"
            />
          </UCarousel>
        </div>
      </UContainer>
    </div>
  </template>
  
  <script setup lang="ts">
  import type { ProfileItem } from '~/types/profile'
  
  const items = ref<ProfileItem[]>([
    {
      url: 'https://www.linkedin.com/in/thimle/',
      name: 'Thi Le',
      avatar: '/team/thi-le.png',
      position: 'Vice Chair',
      office: {
        name: ' Group CEO @Masan Group',
        position: 'Executive Assistant to'
      }
    },
    {
      url: 'https://www.linkedin.com/in/thanhhoang93/',
      name: 'Thanh Hoang',
      avatar: '/team/thanh-hoang.png',
      position: 'Chair',
      office: {
        name: '@Harvard Business School',
        position: 'Incoming MBA student'
      }
    },
    {
      url: 'https://www.linkedin.com/in/vutran1912/',
      name: 'Vu Tran',
      avatar: '/team/vu-tran.png',
      position: 'Vice Chair',
      office: {
        name: "(Antler VN7 Cohort)",
        position: 'Founder @Productiv'
      }
    }
  ])
  </script>
  
