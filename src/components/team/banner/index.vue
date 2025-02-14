<template>
  <div
    class="bg-team relative text-center sm:text-left pb-20 -mt-20 flex h-screen justify-center sm:justify-start items-center overflow-hidden lg:-mt-24"
  >
    <div class="mx-8 sm:mx-16">
      <h1 class="mb-4 text-4xl sm:text-6xl font-bold text-white">We are UpYouthians</h1>
      <p class="mb-6 sm:mb-12 text-base sm:text-2xl font-normal text-white">
        Every member of our team cares deeply <br />
        about technopreneurship.
      </p>
      <div class="flex gap-2 justify-center sm:justify-start">
        <NuxtLink to="https://tally.so/r/mZzXpo" target="_blank">
          <UButton
            :ui="{ rounded: 'rounded-full' }"
            class="border-none text-primary-600"
            size="xl"
            color="white"
            rounded="rounded-full"
            >Join our team</UButton
          ></NuxtLink
        >
        <UButton
          class="border-white text-white"
          :ui="{ rounded: 'rounded-full' }"
          color="white"
          size="xl"
          variant="outline"
          @click="handleDiscover"
          >Discover more</UButton
        >
      </div>
    </div>
    <img
      src="/arcs/arc1.png"
      class="absolute -right-[180px] lg:-right-[300px] z-10 w-[290px] -top-16  lg:-translate-y-1/2 rotate-180 transform lg:top-[420px] lg:w-[500px]"
    />
    <img
      src="/arcs/arc3.svg"
      class="absolute right-0 top-0 lg:top-24 z-10 w-[200px] lg:w-[400px]"
    />
  </div>
</template>
<script lang="ts" setup>

const emit = defineEmits<{
  (e: 'discover'): void;
}>();

const handleDiscover = () => {
    emit('discover')
}

</script>
<style scoped>
.bg-team {
  background: conic-gradient(
      from 238deg at 77.74% 91.87%,
      rgba(0, 0, 0, 0) 0deg,
      rgba(0, 0, 0, 0.2) 360deg
    ),
    conic-gradient(
      from 221deg at 81.38% 69.72%,
      rgba(0, 0, 0, 0) 0deg,
      rgba(0, 0, 0, 0.2) 360deg
    ),
    conic-gradient(from 202deg at 79.55% 28.47%, #0749e6 0deg, #042980 360deg);
}
</style>
