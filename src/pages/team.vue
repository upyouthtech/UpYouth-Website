<template>
  <div>
    <CommonHeader />
    <TeamBanner @discover="handleScrollToBanner" />
    <div ref="bannerSection">
      <TeamValue />
    </div>
    <TeamBoard />
    <TeamTrustee/>
    <TeamStory/>
    <TeamCta/>
    <CommonFooter />
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  title: 'Our Team',
  meta: [
    { name: 'description', content: 'Every member of our team cares deeply about technopreneurship.' }
  ]
})

const bannerSection = ref<HTMLElement | null>(null)

const handleScrollToBanner = () => {
  if (bannerSection.value) {
    bannerSection.value.scrollIntoView({ behavior: 'smooth' })
  }
}
</script>
