
<template>

  <div class="features">

    <a name="features"></a>
    
    <div class="title">Features - Click any feature to see it in action!</div>

    <div class="grid feature-list is-col-min-12 is-gap-4">

      <div class="cell" @click="showVideo('img/chat.mp4')">
        <Feature>
          <template v-slot:icon><i class="bi-chat"></i></template>
          <template v-slot:title>Chat</template>
          <template v-slot:description>
            Chat is the main window of Witsy. It allows you to interact with all the models in a conversational way. Ask anything you want and the AI will answer.
            A searchable history of all your conversations is available for you to come back to.
          </template>
        </Feature>
      </div>

      <div class="cell" @click="showVideo('img/demo.mp4')">
        <Feature>
          <template v-slot:icon><i class="bi-file-earmark-text"></i></template>
          <template v-slot:title>Scratchpad</template>
          <template v-slot:description>
            The scratchpad is your interactive way to build contents. Just give instructions to the AI model such as "add a title" or "add a paragraph" and it will do it for you.
            You can also use the magic action bar for quick actions.
          </template>
        </Feature>
      </div>

      <div class="cell" @click="showVideo('img/commands.mp4')">
        <Feature>
          <template v-slot:icon><i class="bi-magic"></i></template>
          <template v-slot:title>AI Commands</template>
          <template v-slot:description>
            AI commands are a set of predefined actions that you can trigger with a simple keyboard shortcut. From any other application, Witsy will analyze the text you are working,
            execute the command and paste the result back in your application!
          </template>
        </Feature>
      </div>

      <div class="cell" @click="showVideo('img/anywhere.mp4')">
        <Feature>
          <template v-slot:icon><i class="bi-terminal"></i></template>
          <template v-slot:title>Prompt Anywhere</template>
          <template v-slot:description>
            Prompt Anywhere is a feature that allows you to trigger the AI model from any application. Prompt the AI model with the content you want it to create and it will paste the result directlt in your application.
            You can the use AI commands to refine it if needed!
          </template>
        </Feature>
      </div>

      <div class="cell" @click="showVideo('img/experts.mp4')">
        <Feature>
          <template v-slot:icon><i class="bi-person-vcard"></i></template>
          <template v-slot:title>Experts</template>
          <template v-slot:description>
            Experts are a set of predefined prompts that will enable you to get the best of the models. From financial advisor to creative writer, you can choose the expert that fits your needs.
            And if you do not find the expert you need, you can create your own!
          </template>
        </Feature>
      </div>

      <div class="cell" @click="showVideo('img/voice.mp4')">
        <Feature>
          <template v-slot:icon><i class="bi-megaphone"></i></template>
          <template v-slot:title>Voice</template>
          <template v-slot:description>
            Voice is the feature that allows you to interact with the AI models using your voice. Just click the microphone icon and start talking. In conversation mode,
            the AI model responses will be spoken back to you and you can continue the conversation!
          </template>
        </Feature>
      </div>

    </div>

    <div class="modal is-active" v-if="video">
      <div class="modal-background" @click="stopVideo()"></div>
      <div class="modal-content">
        <AutoplayVideo id="feature" :src="video" />
      </div>
    </div>

  </div>

</template>

<script setup>

import { ref } from 'vue'
import Feature from './Feature.vue'
import AutoplayVideo from './AutoplayVideo.vue'

const video = ref(null)

const showVideo = (src) => {
  video.value = src
}

const stopVideo = () => {
  video.value = null
}

</script>

<style scoped>

.features {
  text-align: left;

  .title {
    margin-bottom: 3rem;
    font-size: 2rem;
  }

}

</style>
