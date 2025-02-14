<template>
  <div>
    <NuxtLayout>
      <NuxtLoadingIndicator />
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
<script setup lang="ts">
const route = useRoute()

useHead({
  meta: [{ property: 'og:title', content: `${route.meta.title}` }]
})