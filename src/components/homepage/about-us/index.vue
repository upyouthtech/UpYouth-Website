<template>
    <UContainer class="text-center">
      <div class="leading-10">
        <h1 class="text-2xl font-bold md:text-6xl">Our community nurtures</h1>
        <CommonBrandText
          label="young founders from 0 to 1"
          class="text-2xl font-bold md:text-6xl"
          color="primary-700"
          background
          slide
        ></CommonBrandText>
      </div>
      <div class="my-4 text-center text-xs md:my-10 md:text-base">
        <p>
          Vietnamese youth often get stuck in ideation stage due to critical
          lack of resources.<br>UpYouth's here to offer the right resources,
          direction, and connections you need.
        </p>
      </div>
    </UContainer>
    <UContainer :ui="{ constrained: 'lg:max-w-7xl max-w-xl' }">
      <div v-for="item in aboutUsList" :key="item.id">
        <div
          class="gap-4 text-center lg:flex lg:items-center lg:justify-between lg:gap-16 lg:text-left"
          :class="item.id % 2 === 0 ? 'my-8 flex-row md:my-16' : 'flex-row-reverse'"
        >
          <div class="h-full w-full flex-1">
            <HomepageAboutUsCarousel
              :items="item.images"
              class="h-full w-full rounded-3xl object-contain"
            ></HomepageAboutUsCarousel>
          </div>
          <div
            class="mt-4 flex flex-1 flex-col items-center gap-2 md:mt-16 md:gap-4 lg:mt-0 lg:items-start lg:gap-8"
          >
            <div class="text-lg leading-8 sm:text-3xl lg:text-2xl">
              <CommonBrandText
                :label="item.label"
                class="font-bold"
                color="primary-700"
              ></CommonBrandText>
            </div>
            <p class="text-xs leading-6 sm:text-base">{{ item.content }}</p>
            <ULink :to="item.url" target="_blank">
              <UButton
                :label="item.link"
                icon="i-heroicons-arrow-right-16-solid"
                :trailing="true"
                variant="solid"
                size="lg"
                color="white"
                class="hidden w-fit rounded-8px button-fill md:flex border-primary-400 text-primary-700"
              ></UButton>
              <UButton
                :label="item.link"
                icon="i-heroicons-arrow-right-16-solid"
                :trailing="true"
                variant="solid"
                size="md"
                color="white"
                class="w-fit rounded-8px button-fill md:hidden border-primary-400 text-primary-700"
              ></UButton>
            </ULink>
          </div>
        </div>
      </div>
    </UContainer>
</template>


<script setup lang="ts">
import { ref, onMounted } from 'vue';
import type { AboutUs } from '~/types/about-us';

const aboutUsList = ref<AboutUs[]>([
  {
    id: 1,
    images: [
      '/projects/techyouth/ty1.JPG',
      '/projects/techyouth/ty2.JPG',
      '/projects/techyouth/ty3.JPG',
      '/projects/techyouth/ty4.JPG'
    ],
    label: 'TechYouth Incubator',
    content:
      'A startup program helping 40+ startups gain over 4500+ users combined and raise money from top VCs like Antler and Iterative, through a package of AWS credits, recruitment support, and close mentorship from 50+ industry leaders and successful founders.',
    link: 'Visit TechYouth Incubator',
    url: 'https://docs.google.com/presentation/d/1aT6MXV_LUXPcURcq6Bmm5YOUD2lHDElhQO5wqqd34kw/edit?usp=sharing'
  },
  {
    id: 2,
    images: [
      '/projects/events/TYSD1.jpg',
      '/projects/events/TYSD2.jpg',
      '/projects/events/TYSD3.jpg',
      '/projects/events/TYSD4.jpg'
    ],
    label: 'Ecosystem community events',
    content:
      "Exclusive networking events uniting the startup ecosystem's top minds, with 130+ high-level guests from the US, Singapore, and Vietnam (e.g. Antler, Singapore Global Network, etc.) and 200+ young talents from MBB, Momo, Shopee, etc.",
    link: 'Visit our recap',
    url: 'https://www.facebook.com/upyouth.org/posts/pfbid0RacN8D7Umgraz6ruijf6HTh62uBPkr1fA1r5gBp83TsBvHCogCZhURMYZst2cvYql?rdid=XXOOCOYFSu0ToKjN'
  },
  {
    id: 3,
    images: ['buildstreet.png'],
    label: 'Build Street',
    content:
      'A community for all builders (scientists, engineers, artists, film makers,...) with weekly 4-hour co-working sessions to bring ideas from 0 to 1 together.',
    link: 'Visit Build Street',
    url: 'https://www.buildstreet.xyz/'
  },
  {
    id: 4,
    images: [
      '/projects/hackyouth/HY1.jpg',
      '/projects/hackyouth/HY2.jpg',
      '/projects/hackyouth/HY3.jpg',
      '/projects/hackyouth/HY4.jpg'
    ],
    label: 'HackYouth',
    content:
      'A 2-day hackathon with HackMIT as a technical advisor, offering a 300-million-VND prize for future entrepreneurs to solve real social challenges by Elsa, Timo, VinaCapital Ventures, and more.',
    link: 'Discover more',
    url: 'https://docs.google.com/presentation/d/1U0l-ruKMciXCLRuP999u4-FP8kaBk3wUSKzMyw9zxwI/edit?usp=sharing'
  }
]);
</script>



