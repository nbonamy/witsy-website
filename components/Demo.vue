
<template>
  <div class="demo">
    <a name="demo"></a>
    <div class="title">Write content 10 times faster!</div>
    <AutoplayVideo id="demo" src="img/demo.mp4" />
  </div>
</template>

<script setup>

import AutoplayVideo from './AutoplayVideo.vue'

</script>

<style scoped>

.demo {
  text-align: left;

  .title {
    margin-bottom: 3rem;
    font-size: 2rem;
    color: white;
  }

}

</style>
