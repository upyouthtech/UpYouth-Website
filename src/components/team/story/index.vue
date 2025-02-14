<template>
  <div class="mx-4 sm:mx-auto mb-16 rounded-[32px] sm:p-10 text-center max-w-screen-2xl">
    <h3 class="text-primary-700 mb-2 sm:mb-4 text-3xl sm:text-5xl font-bold">Our founding story</h3>
    <p class="mx-auto mb-8 sm:mb-16 max-w-[930px] text-base sm:text-2xl">
      As ‘real founders’, we’ve grown UpYouth
      <span class="text-primary-700"
        >from an idea into a thriving community</span
      >
      for young Vietnamese entrepreneurs.
    </p>
    <div class="lg:flex shadow-md rounded-3xl p-2">
      <NuxtImg class="mx-auto max-w-[300px] sm:max-w-[450px]" src="/team/story.png"></NuxtImg>
      <div class="w-full p-5 sm:p-16 text-center lg:text-left">
        <h3 class="text-primary-700 mb-4 sm:mb-8 text-xl sm:text-4xl font-bold">
          From MIT to Vietnam. <br />
          We build a future for
          young founders.
        </h3>
        <hr class="mb-4 sm:mb-8 border-gray-300" />
        <p class="line-clamp-4 text-xs sm:text-xl mb-4 sm:mb-10">
         {{ content }}
        </p>
        <TeamStoryModal />
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
const content = ref(
  `While studying in the US, our founder, Brian, joined an entrepreneurship bootcamp organized by MIT and was amazed by how MIT wholeheartedly support out-of-the-box ideas from high school students. The mentors expected highschoolers to found REAL ventures. Brian adored staying long hours after training sessions just to discuss "more" with mentors, or freezing nightwalks around MIT until dawn just to think of solutions to his users’ pain points. He then imagined a future of Vietnamese youth receiving those resources and having an incredible amount of innovation. But in reality, doing startups is often associated with uncertainties and failures, making this pathway "too risky" for Vietnamese youths to follow. Even when the trend of startups was rolling around, most entrepreneurial activities for students in Vietnam were pitching competitions. Students lean towards ideating quick-fix solutions and showcasing their business skills, while the whole process of validating problems, building products, and operating real startups is out of focus. Thereby, those competitions can neither give student entrepreneurs a hands-on learning experience, nor help them hone in traits of a real founder. As a result, available resources in Vietnam are mostly targeting "mature founders", who are believed to have higher commitment to their startup journeys.`
)
</script>
