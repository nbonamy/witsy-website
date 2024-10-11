
<template>
  <video :id="id" ref="video" autoplay controls playsinline>
    <source :src="src" type="video/mp4">
    Your browser does not support the video tag.
  </video>
</template>

<script setup>

import { ref, onMounted } from 'vue'

const props = defineProps({
  id: String,
  src: String,
})

const video = ref(null)

onMounted(() => {

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        video.value.play()
      }
    })
  }, {
    root: null,
    rootMargin: '0px',
    threshold: 1.0,
  })

  observer.observe(video.value)

})

</script>

<style scoped>
</style>
