<template>
  <div class="mx-4 rounded-3xl bg-primary-50 py-4 text-center md:py-8">
    <CommonZoomIn>
    <div class="mb-8 items-center justify-center">
      <h1
        class="mx-auto max-w-[800px] text-center text-xl font-semibold text-primary-700 md:text-6xl md:leading-[100%]"
      >
        UpYouth is proud to spread the entrepreneurial mindset
      </h1>
      <p class="mb-4 mt-12 text-xs  md:mb-8 md:text-base">
        Read our stories in Vietnamese news, and stay tuned for our global
        impacts.
      </p>
    </div>
    <div class="mx-auto grid w-fit grid-cols-1 gap-8 md:grid-cols-2">
      <div v-for="item in mindSetList" :key="item.id">
        <ULink :to="item.url" target="_blank">
          <img :src="item.image" class="max-w-[250px] lg:max-w-[500px]"
        /></ULink>
      </div>
    </div>
    </CommonZoomIn>
  </div>
</template>

<script setup lang="ts">
const mindSetList = ref([
  {
    id: 1,
    image: '/VnEconomy.png',
    url: 'https://vneconomy.vn/upyouth-khoi-dong-techyouth-incubator-2024.htm'
  },
  {
    id: 2,
    image: '/VnExpess.png',
    url: 'https://vnexpress.net/vuon-uom-khoi-nghiep-cong-nghe-cho-sinh-vien-viet-4478515.html'
  },
  {
    id: 3,
    image: '/dantri.png',
    url: 'https://dantri.com.vn/giao-duc/gia-toc-khoi-nghiep-cho-sinh-vien-ngay-tu-nam-nhat-khat-vong-vuon-tam-quoc-te-20220627174352460.htm'
  },
  {
    id: 4,
    image: '/vtv.png',
    url: 'https://vtv4.vtv.vn/video/ban-tin-tieng-viet/-41430.html'
  }
])
</script>
