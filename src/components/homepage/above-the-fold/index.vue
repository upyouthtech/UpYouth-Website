<template>
  <div class="relative h-screen overflow-hidden -mt-20">
    <div class="relative mx-8 flex h-screen flex-col justify-center gap-8">
      <div class="flex flex-col items-start gap-8 lg:flex-row lg:items-center">
        <div class="flex-1 text-nowrap">
          <h1 class="text-4xl  font-bold md:text-8xl">Do like a</h1>
          <CommonBrandText
            label="Real founder"
            color="primary-700"
            class="text-4xl font-bold md:text-8xl"
            background
            slide
          />
        </div>
        <p class="flex-1 text-lg text-gray-500 md:text-xl">
          We are a youth-focused tech startup ecosystem providing the best
          resources for Vietnamese entrepreneurs to found REAL ventures.
        </p>
      </div>
      <div class="flex gap-2 justify-center sm:justify-start">
        <NuxtLink to="https://drive.google.com/drive/folders/1fRVEc1knH6641i1rQxsi58IJ3TL7VWPI" target="_blank">
          <UButton
            :ui="{ rounded: '8px' }"
            class="border-none text-white bg-blue-700 hover:bg-blue-800"
            size="xl"
            color="white"
            rounded="8px"
            >Read our Ecosystem Reports</UButton
          ></NuxtLink
        >
        <UButton
          label="Discover more"
          icon="i-heroicons-arrow-right-16-solid"
          :trailing="true"
          variant="solid"
          size="xl"
          color="white"
          class="8px border-1 border-primary-400 text-primary-700 button-fill transition duration-200"
          @click="discover()"
        ></UButton>
      </div>
    </div>
    <img
      src="/arcs/arc1.png"
      class="absolute -bottom-[105px] right-[70px] z-10 w-[190px] lg:-bottom-[220px] lg:w-[384px]"
    />
    <img
      src="/arcs/arc2.png"
      class="absolute -bottom-[100px] right-[145px] w-[190px] -rotate-90 lg:-bottom-[220px] lg:right-[200px] lg:w-[384px]"
    />
  </div>
</template>

<script setup lang="ts">
const discover = () => {
  const element = document.getElementById('achievement');
  if (element) {
    const offsetTop = element.getBoundingClientRect().top + window.pageYOffset;

    window.scrollTo({
      top: offsetTop - 100,
      behavior: 'smooth'
    });
  }
};
</script>
