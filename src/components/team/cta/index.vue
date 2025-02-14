<template>
  <div
    class="bg-cta mx-4 rounded-tl-3xl rounded-tr-3xl py-10 text-center sm:mx-8 sm:py-16"
  >
    <h1 class="mb-8 text-3xl font-bold text-white sm:text-6xl">
      Be a part of our can-do team.
    </h1>
    <div class="flex flex-col justify-center gap-4 px-16 sm:flex-row">
      <NuxtLink to="https://tally.so/r/mZzXpo" target="_blank">
        <UButton
          :ui="{ rounded: 'rounded-full' }"
          class="text-primary-600 block w-full border-none sm:inline"
          size="xl"
          color="white"
          rounded="rounded-full"
          >Join our team</UButton
        ></NuxtLink
      >
      <NuxtLink
        to="https://drive.google.com/drive/folders/1fRVEc1knH6641i1rQxsi58IJ3TL7VWPI"
        target="_blank"
      ><UButton
          class="border-white text-white block sm:inline"
          :ui="{ rounded: 'rounded-full' }"
          color="white"
          size="xl"
          variant="outline"
          >Read our Ecosystem Reports</UButton
        >
    
      </NuxtLink>
    </div>
  </div>
</template>
<style scoped>
.bg-cta {
  background: conic-gradient(
      from -45deg at 22.03% 81.14%,
      rgba(7, 73, 230, 0.5) 0deg,
      rgba(0, 42, 143, 0.5) 360deg
    ),
    conic-gradient(from 45deg at 78.8% 83.8%, #002a8f 0deg, #0749e6 360deg);
}
</style>
