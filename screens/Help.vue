
<template>

  <header>
    <nav>
      <Menubar />
    </nav>
  </header>

  <section>

    <div class="openai">
      
      <div class="title">How to setup Witsy for OpenAI models</div>

      <div class="carousel">

        <div class="box">
          <div class="subtitle">Get your OpenAI API key</div>
          <ul>
            <li>Go to <a href="https://platform.openai.com/" target="_blank">OpenAI Platform</a> website</li>
            <li>Click <b>Log in</b> or <b>Sign up</b> to create an account (upper right corner)</li>
            <li>If you create a new account, you will have to verify your email address</li>
            <li>Once logged in, click <b>Dashboard</b> in the horizontal menu (upper right)</li>
            <li>Click on <b>API keys</b> in the left side menu. You may have to validate your phone number</li>
            <li>Click <b>+ Create new secret key</b></li>
            <li>Give it a name (e.g. Witsy) and click <b>Create secret key</b></li>
            <li>Make sure to <b>Copy</b> your secret key</li>
          </ul>
          <div class="nav" @click="carousels['openai'].next()"><i class="bi-arrow-right-circle-fill"></i>Next</div>
        </div>

        <div class="box">
          <div class="subtitle">Setup Witsy</div>
          <ul>
            <li>Open Witsy</li>
            <li>Click on the <b>Settings</b> icon in the bottom left corner</li>
            <li>Click on <b>Models</b></li>
            <li>Make sure <b>OpenAI</b> is selected in the left hand-side list</li>
            <li>Paste your OpenAI secret key in the <b>API key</b> field</li>
            <li>The <b>Chat model</b> list should refresh allowing to select the model of your choice</li>
            <li>You are all set! You can close the settings and start using Witsy</li>
          </ul>
          <div class="nav" @click="carousels['openai'].previous()"><i class="bi-arrow-left-circle-fill"></i>Back</div>
        </div>

      </div>

    </div>

  </section>

  <section>

    <div class="ollama">
      
      <div class="title">How to setup Witsy for Ollama models</div>

      <div class="carousel">

        <div class="box">
          
          <div class="subtitle">Install Ollama</div>
          <ul>
            <li>Go to the <a href="https://ollama.com" target="_blank">Ollama homepage</a></li>
            <li>Click <b>Download ↓</b> to download the latest version of Ollama</li>
            <li>Execute the downloaded installation program to install Ollama on your computer</li>
            <li>Launch Ollama</li>
          </ul>
          <div class="nav" @click="carousels['ollama'].next()"><i class="bi-arrow-right-circle-fill"></i>Next</div>
        </div>

        <div class="box">
          <div class="subtitle">Setup Witsy</div>
          <ul>
            <li>Open Witsy</li>
            <li>Click on the <b>Settings</b> icon in the bottom left corner</li>
            <li>Click on <b>Models</b></li>
            <li>Make sure <b>Ollama</b> is selected in the left hand-side list</li>
            <li>Select one of the models from <b>Or select one from this list</b></li>
            <li>Click the <b>Pull</b> button. Warning: this may take some time!</li>
            <li>You are all set! You can close the settings and start using Witsy</li>
            <li>Make sure Ollama is running before you start using Witsy!</li>
          </ul>
          <div class="nav" @click="carousels['ollama'].previous()"><i class="bi-arrow-left-circle-fill"></i>Back</div>
        </div>

      </div>

    </div>

    </section>

</template>

<script setup>

import { ref, onMounted } from 'vue'
import Menubar from '../components/Menubar.vue'

const carousels = ref({})

onMounted(() => {

  // install carousels
  for (const el of ['openai', 'ollama']) {
    carousels.value[el] = bulmaCarousel.attach(`.${el} .carousel`, {
      initialSlide: 0,
      slidesToScroll: 1,
      slidesToShow: 1,
      infinite: false,
      pagination: false,
      navigation: false,
    })[0]

    // fix carousel transition
    // otherwise our opacity transition is not working
    carousels.value[el].on('show', () => {
      carousels.value[el]._transitioner.end()
      carousels.value[el]._setClasses()
    })

  }
})

</script>

<style>

.slider-container {
  min-height: auto;
  height: 60%;
  .slider-item {
    transition: opacity 0.3s;
  }
  .slider-item.is-current {
    opacity: 1;
  }
  .slider-item.is-slide-previous, .slider-item.is-slide-next {
    opacity: 0;
  }
}

</style>

<style scoped>

section {
  text-align: left;
  padding-top: 0rem;
  padding-bottom: 4rem;
}

section:first-of-type {
  padding-top: 4rem;
}

.box {
  padding: 2rem;
  margin: 2rem auto;
  max-width: 80%;
}

.subtitle {
  font-family: var(--title-font-family);
  font-weight: 700;
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

.nav {
  cursor: pointer;
  margin-top: 1rem;
  font-family: var(--title-font-family);
  font-weight: 700;
  font-size: 1.1rem;
  i {
    margin-right: 0.5rem;
  }
}

</style>

