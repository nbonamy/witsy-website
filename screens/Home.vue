
<template>

  <header>
    <nav>
      <Menubar />
    </nav>
  </header>

  <section>
    <Hero />
  </section>

  <section class="dark">
    <Demo />
  </section>

  <section class="light">
    <Features />
  </section>

  <section class="dark">
    <FAQ />
  </section>

</template>

<script setup>

import Menubar from '../components/Menubar.vue'
import Hero from '../components/Hero.vue'
import Demo from '../components/Demo.vue'
import Features from '../components/Features.vue'
import FAQ from '../components/FAQ.vue'

</script>

<style scoped>

header {
  padding-bottom: 4rem;
}

section:not(:first-of-type) {
  padding-top: 6rem;
  padding: 6rem 0rem;
}

section > * { 
  max-width: 60rem;
  margin: 0 auto;
}

section.light {
  background-color: white;
  * {
    color: black;
  }
}

section.dark {
  background-color: black;
  * {
    color: white !important;
  }
}

.maintitle {

  text-align: center;
  margin-top: 4rem;

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

</style>