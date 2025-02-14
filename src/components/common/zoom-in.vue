<template>
    <div ref="zoomDiv" :class="zoomClass">
      <slot></slot>
    </div>
  </template>
  
  <script setup lang="ts">  
  const zoomDiv = ref<HTMLElement | null>(null);
  
  const zoomClass = computed(() => {
    return 'transition-transform duration-500 ease-out scale-90';
  });
  
  const handleIntersection = (entries: IntersectionObserverEntry[]) => {
    entries.forEach((entry) => {
      if (zoomDiv.value) {
        if (entry.isIntersecting) {
          zoomDiv.value.classList.remove('scale-90');
          zoomDiv.value.classList.add('scale-100');
        } else {
          zoomDiv.value.classList.remove('scale-100');
          zoomDiv.value.classList.add('scale-90');
        }
      }
    });
  };
  
  onMounted(() => {
    const observer = new IntersectionObserver(handleIntersection, {
      root: null,
      threshold: 0.5,
    });
  
    if (zoomDiv.value) {
      observer.observe(zoomDiv.value);
    }
  
    onUnmounted(() => {
      if (zoomDiv.value) {
        observer.unobserve(zoomDiv.value);
      }
    });
  });
  </script>
  