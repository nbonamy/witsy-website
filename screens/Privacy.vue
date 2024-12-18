
<template>

  <header>
    <nav>
      <Menubar />
    </nav>
  </header>

  <section>

    <div class="title">Witsy Privacy Policy</div>

    <div class="platforms">
      <span class="platform" :class="{ active: platform == 'desktop' }" @click="platform = 'desktop'">Desktop</span>
      <span class="platform" :class="{ active: platform == 'mobile' }" @click="platform = 'mobile'">Mobile App</span>
    </div>

    <div v-if="platform == 'desktop'">

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

    </div>

    <div v-if="platform == 'mobile'">

      <div class="content">
        Witsy has been designed to <b>respect your privacy</b> and <b>collect as little information as possible</b>.
      </div>

      <div class="content">
        <p>The information collected allows Witsy to provide you with the best possible experience. This includes:</p>
        <table>
          <thead>
            <tr>
              <th width="19%">Information</th>
              <th width="27%">Description</th>
              <th width="27%">On-device storage</th>
              <th width="27%">Witsy servers storage</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>User token</strong></td>
              <td>Randomly generated user token that uniquely identifies you. This user token allows us to keep record of your subscription.</td>
              <td>Yes</td>
              <td>Yes</td>
            </tr>
            <tr>
              <td><strong>Trace of queries</strong></td>
              <td>Witsy keeps track of every query you submit.</td>
              <td>On your device, this trace includes all text and images you entered and all text and images generated by Witsy.
                It is stored in the Witsy mobile app and is never accessed for any other purposes that <b>showing your chat history</b>,
                and allowing you to <b>resume chats</b>. You can delete this data in the Witsy app.</td>
              <td>On Witsy servers, this trace <b>does not include any text or images</b>. The information stored is: date and time of each query
                and number of input and completion tokens for each query.</td>
            </tr>
            <tr>
              <td><strong>Generated images</strong></td>
              <td>The images you generate using Witsy.</td>
              <td>Stored on your device. You can delete this data in the Witsy app.</td>
              <td>Images are temporarily stored on our servers. As soon as the mobile application has downloaded a local copy of these images, they are deleted from our Witsy servers.</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div class="content">
        Witsy uses the LLM providers API to generate text and images. <b>Each of those providers have their own data policy that applies when you use their models.</b> You may want to check their privacy policy before using Witsy.
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

    </div>
  
  </section>

</template>

<script setup>

import { ref, onMounted } from 'vue'
import Menubar from '../components/Menubar.vue'

const platform = ref('desktop')

onMounted(() => {
  // check hashtag
  if (window.location.hash == '#mobile') {
    platform.value = 'mobile'
  }
})

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

.platforms {
  display: flex;
  justify-content: start;
  margin-top: 1rem;
  margin-bottom: 2rem;
  gap: 2rem;
}

.platform {
  cursor: pointer;
  padding: 0.5rem 1rem;
}

.platform.active {
  font-weight: bold;
  border-bottom: 4px solid rgb(212, 1, 69);
}

</style>

