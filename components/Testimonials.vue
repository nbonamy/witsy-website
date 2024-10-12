
<template>

  <div class="testimonials">

    <a id="testimonials" name="testimonials"></a>

    <div class="title">Testimonials</div>

    <div class="testimonial">
      <div class="quote">{{ testimonials[index].quote }}</div>
      <div class="author">{{ testimonials[index].author }}</div>
    </div>

  </div>

</template>

<script setup>

import { ref } from 'vue'

const testimonials = ref([
  { quote: 'this is gen(ius) AI 😉🦄', author: 'Basti' },
  { quote: 'I started using it and I don’t know whether I will go back to using individual LLMs', author: 'Murthy' },
  { quote: '#witsy is amazing !!', author: 'Jean-Michel' },
  { quote: 'Wow, what an amazing tool! Thx a lot for your effort! Keep on going 👍', author: 'deliciousbob' },
  { quote: 'Hi, I am a big fan of Witsy, and it has become my daily tool of choice', author: 'irosyadi' },
])

const index = ref(Math.floor(Math.random() * testimonials.value.length))

</script>

<style scoped>

.testimonials {

  .title {
    color: #444;
  }
  
  .testimonial {

    font-family: 'PT Serif', serif;
    color: #888;

    .quote {
      font-size: 2rem;
    }

    .author {
      font-size: 1.5rem;
      font-style: italic;
    }
  }


}

</style>
