
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

let scrollBack = false

// we need to compensate for the fixed header
// so when a hash is clicked remember that
document.addEventListener('click', (e) => {
  if (e.target.hash) {
    scrollBack = true
  }
})

// scroll back to compensate for the fixed header
// but do it only once (yeah it's a hack)
window.addEventListener('scroll', () => {
  if (scrollBack) {
    scrollBack = false
    window.scrollBy({ top: -96, behavior: 'instant' })
  }
})

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
  padding: 0 2rem;
  margin: 0 auto;
}

section.light {
  background-color: transparent;
  * {
    color: black;
  }
}

section.white {
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

@media (max-width: 980px) {
  header {
    padding-bottom: 0rem;
  }
  section:not(:first-of-type) {
    padding-top: 4rem;
    padding-bottom: 4rem;
  }
}

</style>