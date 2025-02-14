<script setup lang="ts">
const socialItems = [
  {
    icon: 'i-mdi-facebook',
    link: 'https://www.facebook.com/upyouth.org'
  },
  {
    icon: 'i-mdi-linkedin',
    link: 'https://www.linkedin.com/company/upyouth/'
  },
  {
    icon: 'i-mdi-email-outline',
    link: 'mailto:info@upyouth.org'
  },
  {
    icon: 'i-mdi-instagram',
    link: 'https://www.instagram.com/_upyouth'
  }
]
</script>

<template>
  <div class="mt-4 flex gap-8 md:mt-0">
    <CommonFooterSocialLink
      v-for="item in socialItems"
      :key="item.icon"
      :link="item.link"
      :icon="item.icon"
    />
  </div>
</template>
