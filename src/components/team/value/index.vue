<template>
  <div class="pt-24 pb-8 sm:pt-32 sm:pb-16 max-w-screen-2xl mx-auto">
    <div class="bg-primary-50 mx-4 sm:mx-8 rounded-3xl sm:rounded-[32px] p-7 sm:p-10 text-center">
      <h3 class="text-primary-700 mb-3 sm:mb-6 text-3xl sm:text-5xl font-bold">Our core values</h3>
      <p class="mx-auto mb-8 max-w-[930px] text-base sm:text-2xl">
        Our culture is <span class="text-primary-700">can-do mindset</span>.
        Even though what we do is challenging, we are able to achieve all we
        want with
        <span class="text-primary-700">03 working principles.</span>
      </p>
      <div v-for="(item, index) in coreValue" :key="item.title">
        <TeamValueItem :value="item" class="mb-4" :class="{ 'flex-row-reverse': index % 2 !== 0 }"></TeamValueItem>

      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
const coreValue = ref([
  {
    icon: 'i-heroicons-rocket-launch',
    title: 'Goal-oriented',
    description: {
      leading: 'We do not do things without being crystal clear ',
      main: 'WHY we do them and WHAT success looks like.',
      trailing: ' We are resilient to overcome all difficulties until we achieve the goal or pivot to a new goal.'
    },
    img: '/team/goal-oriented.png'
  },
  {
    icon: 'i-heroicons-star',
    title: 'Excellence',
    description: {
      leading: 'We insist on the ',
      main: 'highest level of quality in EVERYTHING we do,',
      trailing: 'down to details like an email. We consistently try to learn and improve instead of being content with the status quo.'
    },
    img: '/team/excellence.png'
  },
  {
    icon: 'i-heroicons-user-group',
    title: 'Like a Family',
    description: {
      leading: 'We are ready to give brutally honest feedback to one another to make them better. ',
      main: 'We work hard and play hard TOGETHER.',
      trailing: ''
    },
    img: '/team/like-a-family.png'
  }
])
</script>
