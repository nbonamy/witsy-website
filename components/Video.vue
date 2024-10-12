
<template>
  <div class="video-wrapper">
    <div class="title">{{ title }}</div>
    <AutoplayVideo class="video" :id="src.split('/')[1]" :src="src" />
  </div>
</template>

<script setup>

import AutoplayVideo from './AutoplayVideo.vue'

defineProps({
  title: String,
  src: String
})

</script>

<style scoped>

.video-wrapper {

  .title {
    text-align: left;
    margin-bottom: 3rem;
    font-size: 2rem;
    color: white;
  }

  .video {
    height: 35rem;
  }

}

@media (max-width: 980px) {
  .video-wrapper {
    .video {
      height: auto;
    }
  }
}

</style>
