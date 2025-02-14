<template>
  <div>
    <UButton :padded="false" variant="link" @click="isOpen = true">Read more</UButton>
    <UModal v-model="isOpen" fullscreen>
      <UCard
        :ui="{
          base: 'h-full flex flex-col',
          rounded: '',
          divide: 'divide-y divide-gray-100 dark:divide-gray-800',
          body: {
            base: 'grow'
          }
        }"
      >
        <template #header>
          <div class="flex items-center justify-between">
            <h3
              class="text-md font-semibold leading-6 text-gray-900 dark:text-white"
            >
            From MIT to Vietnam. We build a future for young founders.
            </h3>
            <UButton
              color="gray"
              variant="ghost"
              icon="i-heroicons-x-mark-20-solid"
              class="-my-1"
              @click="isOpen = false"
            />
          </div>
        </template>

        <p class="mb-4">While studying in the US, our founder, Brian, joined an entrepreneurship bootcamp organized by MIT and was amazed by how MIT wholeheartedly support out-of-the-box ideas from high school students. <span class="text-primary-700">The mentors expected highschoolers to found REAL ventures. </span>Brian adored staying long hours after training sessions just to discuss "more" with mentors, or freezing nightwalks around MIT until dawn just to think of solutions to his users’ pain points.</p>
        <p class="mb-4">He then imagined a future of Vietnamese youth receiving those resources and having an incredible amount of innovation. But in reality, doing startups is often associated with uncertainties and failures, making this pathway "too risky" for Vietnamese youths to follow. Even when the trend of startups was rolling around, most entrepreneurial activities for students in Vietnam were pitching competitions. </p>
        <p class="mb-4">Students lean towards ideating quick-fix solutions and showcasing their business skills, while the whole process of validating problems, building products, and operating real startups is out of focus. Thereby, those competitions can neither give student entrepreneurs a <span class="text-primary-700">hands-on learning experience</span>, nor help them <span class="text-primary-700">hone in traits of a real founder. </span></p>
        <p>As a result, available resources in Vietnam are mostly targeting "mature founders", who are believed to have higher commitment to their startup journeys.</p>
        </UCard>
    </UModal>
  </div>
</template>
<script setup lang="ts">
const isOpen = ref(false)
</script>
