
<template>

  <div class="features">

    <a id="features" name="features"></a>

    <div class="title">Features - Click any feature to see it in action!</div>

    <div class="grid feature-list is-col-min-10 is-gap-4">

      <div class="cell" @click="feature.video ? showVideo(`img/${feature.video}`) : () => {}" v-for="feature in features" :key="feature.video">
        <Feature :has-video="feature.video != null">
          <template v-slot:icon><i :class="feature.icon"></i></template>
          <template v-slot:title>{{ feature.title }}</template>
          <template v-slot:description>{{ feature.description }}</template>
        </Feature>
      </div>

    </div>

    <div class="modal is-active" v-if="video">
      <div class="modal-background" @click="stopVideo()"></div>
      <div class="modal-content">
        <div class="is-overlay"></div>
        <AutoplayVideo id="feature" :src="video" />
      </div>
    </div>

  </div>

</template>

<script setup>

import { ref } from 'vue'
import Feature from './Feature.vue'
import AutoplayVideo from './AutoplayVideo.vue'

const features = ref([
  {
    title: 'Chat',
    icon: 'bi-chat-square',
    description: 'Chat is the main window of Witsy. It allows you to interact with all the models in a conversational way. Ask anything you want and the AI will answer. A searchable history of all your conversations is available for you to come back to.',
    video: 'chat.mp4',
  },
  {
    title: 'Scratchpad',
    icon: 'bi-file-earmark-text',
    description: 'The scratchpad is your interactive way to build contents. Just give instructions to the AI model such as "add a title" or "add a paragraph" and it will do it for you. You can also use the magic action bar for quick actions.',
    video: 'scratchpad.mp4',
  },
  {
    title: 'AI Commands',
    icon: 'bi-magic',
    description: 'AI commands are a set of predefined actions that you can trigger with a simple keyboard shortcut. From any other application, Witsy will analyze the text you are working on, execute the command and paste the result back in your application!',
    video: 'commands.mp4',
  },
  {
    title: 'Prompt Anywhere',
    icon: 'bi-terminal',
    description: 'Prompt Anywhere allows you to trigger an AI model from any application. Prompt the AI model with the content you want it to create and it will paste the result directly in your application. You can then use AI commands to refine it if needed!',
    video: 'anywhere.mp4',
  },
  {
    title: 'Experts',
    icon: 'bi-person-vcard',
    description: 'Experts are a set of predefined prompts that will enable you to get the best of the models. From financial advisor to creative writer, you can choose the expert that fits your needs. And if you do not find the expert you need, you can create your own!',
    video: 'experts.mp4',
  },
  {
    title: 'Voice Chat',
    icon: 'bi-mic',
    description: 'Voice is the feature that allows you to interact with the AI models using your voice. Just click the microphone icon and start talking. In conversation mode, the AI model responses will be spoken back to you and you can continue the conversation!',
    video: 'voice.mp4',
  },
  {
    title: 'Voice Scratchpad',
    icon: 'bi-mic',
    description: 'You can also talk to the AI model in the scratchpad for the ultimate document creation experience! Work with Witsy as if you were collaborating with a peer!',
    video: 'scratchpad-voice.mp4',
  },
  {
    'title': 'Document Repository',
    'icon': 'bi-database',
    'description': 'You can upload any local file to Witsy. You can then ask the AI models questions about your documents, summarize them, or even write a new document for you!',
    'video': 'rag.mp4',
  },
  {
    title: 'Shortcuts',
    icon: 'bi-command',
    description: 'All features of Witsy are accessible through keyboard shortcuts. You can trigger the chat or scratchpad, execute commands and more. You can also customize the shortcuts to fit your needs!',
  },
])

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

  .modal {
    .modal-content {
      display: flex;
      justify-content: center;
      align-items: center;

      .is-overlay {
        background-color: black;
      }

      video {
        min-width: 640px;
        min-height: 498px;
        z-index: calc(var(--bulma-modal-z) + 1);
      }
    }
  }

}

@media (max-width: 980px) {
  .features {
    .modal {
      right: 12; /* don't really know why */
      .modal-content {
        margin: 0rem;
        video {
          min-width: auto;
          min-height: auto;
          max-width: 100%;
          max-height: 100%;
        }
      }
    }
  }
}

</style>
