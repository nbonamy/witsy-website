
<template>

  <header>
    <nav>
      <Menubar />
    </nav>
  </header>

  <section>

    <div class="title">Witsy Privacy Policy</div>

    <div class="content">
      Witsy itself <b>does not collect or process</b> any personal data. All your data is <b>kept on your computer and never leaves it</b>.
    </div>

    <div class="content">
      Witsy <b>does not use cookies</b> or any other tracking technologies.
    </div>

    <div class="content">
      Nevertheless, Witsy uses the LLM providers API to generate text and images. <b>Each of those providers have their own data policy that applies when you use their models.</b> You may want to check their privacy policy before using Witsy.
      <ul>
        <li>OpenAI privacy policy: <a href="https://openai.com/privacy" target="_blank">https://openai.com/privacy</a></li>
        <li>Anthropic privacy policy: <a href="https://www.anthropic.com/privacy" target="_blank">https://www.anthropic.com/privacy</a></li>
        <li>MistralAI privacy policy: <a href="https://mistral.ai/terms/#privacy-policy" target="_blank">https://mistral.ai/terms/#privacy-policy</a></li>
        <li>Google AI privacy policy: <a href="https://transparency.google/intl/en_US/our-policies/privacy-policy-terms-of-service/" target="_blank">https://transparency.google/intl/en_US/our-policies/privacy-policy-terms-of-service/</a></li>
        <li>xAI privacy policy: <a href="https://x.ai/privacy-policy" target="_blank">https://x.ai/privacy-policy</a></li>
        <li>Groq privacy policy: <a href="https://groq.com/privacy" target="_blank">https://groq.com/privacy</a></li>
        <li>Cerebras privacy policy: <a href="https://cerebras.net/privacy" target="_blank">https://cerebras.net/privacy</a></li>
      </ul>
    </div>

  </section>

</template>

<script setup>

import Menubar from '../components/Menubar.vue'

</script>

<style scoped>

section {
  text-align: left;
  padding-top: 0rem;
  padding-bottom: 4rem;
}

section:first-of-type {
  padding-top: 4rem;
}

ul {
  list-style-type: disc;
  padding-left: 1.5rem;
  li {
    margin: 0.5rem 0rem;
  }
}

b {
  text-decoration: underline;
  text-underline-offset: 0.2em;
  text-decoration-thickness: 0.5px;
}

</style>

