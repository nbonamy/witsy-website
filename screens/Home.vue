
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
    <Video title="Write content 10 times faster!" src="img/scratchpad.mp4" />
  </section>

  <section class="light">
    <Features />
  </section>

  <section class="dark">
    <Video title="Use GenAI in any application!" src="img/anywhere.mp4" />
  </section>

  <section class="light">
    <Testimonials />
  </section>

  <section class="dark">
    <FAQ />
  </section>

  <section class="white">
    <Footer />
  </section>

</template>

<script setup>

import Menubar from '../components/Menubar.vue'
import Hero from '../components/Hero.vue'
import Video from '../components/Video.vue'
import Features from '../components/Features.vue'
import FAQ from '../components/FAQ.vue'
import Testimonials from '../components/Testimonials.vue'
import Footer from '../components/Footer.vue'

</script>

<style scoped>

@media (max-width: 980px) {
  section:first-of-type {
    padding: 0rem 1rem;
  }
}

</style>