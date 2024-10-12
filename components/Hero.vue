
<template>

  <div class="hero">

    <div class="maintitle">
      <div class="title">AI just <span class="emphasis">one keyboard shortcut</span> away!</div>
      <div class="subtitle">Language models from top AI providers.</div>
      <div class="subtitle">Instantaneously accessible on your desktop.</div>
    </div>

    <Download />

    <div class="screenshot">
      <img src="img/home.png" alt="Screenshot of the app">
    </div>

  </div>

</template>

<script setup>

import Download from '../components/Download.vue'

</script>

<style scoped>

.hero {

  margin-bottom: 6rem;
  padding: 0rem;

  .maintitle {

    text-align: center;

    .title {
      margin-bottom: 2rem;
      font-size: 2.5rem;

      .emphasis {
        color: var(--bulma-success-base);
        filter: brightness(0.9);
      }
    }

    .subtitle {
      margin-bottom: 0.5rem;
      font-size: 1.25rem;
      color: #888;
    }
  }

  .screenshot {
    margin-top: 3rem;
    img {
      width: 60rem;
    }

  }

}

@media (max-width: 980px) {
  .hero {
    .maintitle {
      margin-top: 3rem;
    }
  }
}
</style>