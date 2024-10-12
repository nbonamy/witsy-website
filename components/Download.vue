
<template>
  <div class="download">
    <div class="buttons" v-if="platform.pf === 'darwin'">
      <button class="button" @click="download('darwin', 'arm64')">
        <span class="has-text-weight-bold">Download for {{ platform.os }}</span>
        <br/><span class="sub">Apple Silicon (M1, M2, M3, M4)</span>
      </button>
      <button class="button" @click="download('darwin', 'x64')">
        Download for {{ platform.os }}
        <br/><span class="sub">Mac Intel architecture</span>
      </button>
    </div>
    <div v-else-if="platform.pf === 'win32' || platform.pf === 'linux'">
      <button class="button" @click="download(platform.pf)">
        Download for {{ platform.os }} {{ platform.ver }}
      </button>
    </div>
    <div v-else>
      <button class="button">
        Sorry. Witsy is not<br/>
        available for your device
      </button>
    </div>
    <div class="others">
      <span v-if="version">Latest version {{ version }},&nbsp;</span>
      <a href="https://github.com/nbonamy/witsy/releases" target="_blank">Other versions</a>
    </div>
  </div>
</template>

<script setup>

import { ref, onMounted } from 'vue'
import { usePlatform } from '../composables/platform.mjs'
import { useDownload } from '../composables/download.mjs'

const platform = usePlatform()
const downloader = useDownload()

const version = ref(null)

onMounted(async () => {
  version.value = await downloader.version()
})

const download = async (platform, arch) => {

  // if no arch is provided, we'll use the default one for the platform
  if (!arch) {
    if (platform === 'win32') arch = 'x64'
    else if (platform === 'linux') arch = 'x64'
    else {
      alert('Unsupported platform')
      return
    }
  }

  // now downlaod
  const version = await downloader.version()
  const url = await downloader.url(version, platform, arch)
  console.log(url)
  window.location.href = url
}

</script>

<style scoped>

.download {

  margin-top: 2rem;

  .buttons {
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin-bottom: 0rem;
    gap: 1rem;
  }

  button {
    background-color: var(--accent-color);
    color: white;
    font-weight: bold;
    display: inline-block;

    &:hover {
      background-color: var(--accent-color-alpha);
    }

    .sub {
      font-size: 0.75rem;      
      font-weight: normal;
    }
  }

  .others, .others a {
    margin-top: 0.75rem;
    color: #888;
    font-size: 0.9rem;
  }
}

</style>