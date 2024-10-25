
<template>
  <div class="download">
    <div class="buttons" v-if="pinfo.pf === 'darwin'">
      <button class="button" :class="{ highlight: arch == 'arm64' }" @click="download('darwin', 'arm64')">
        <span class="has-text-weight-bold">Download for {{ pinfo.os }}</span>
        <br/><span class="sub">Apple Silicon (M1, M2, M3, M4)</span>
      </button>
      <button class="button" :class="{ highlight: arch == 'x64' }"  @click="download('darwin', 'x64')">
        Download for {{ pinfo.os }}
        <br/><span class="sub">Mac Intel architecture</span>
      </button>
    </div>
    <div class="buttons" v-else-if="pinfo.pf === 'linux'">
      <button class="button" @click="download('linux', 'rpm')">
        <span class="has-text-weight-bold">Download RPM for {{ pinfo.os }}</span>
        <br/><span class="sub">RedHat, Fedora, CentOS...</span>
      </button>
      <button class="button" @click="download('linux', 'deb')">
        <span class="has-text-weight-bold">Download DEB for {{ pinfo.os }}</span>
        <br/><span class="sub">Ubuntu, Debian, Mint...</span>
      </button>
      <button class="button" @click="download('linux', '')">
        <span class="has-text-weight-bold">Download ZIP for {{ pinfo.os }}</span>
        <br/><span class="sub">Other distros</span>
      </button>
    </div>
    <div v-else-if="pinfo.pf === 'win32'">
      <button class="button" @click="download(pinfo.pf)">
        Download for {{ pinfo.os }}
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

const pinfo = usePlatform()
const downloader = useDownload()

const arch = ref(null)
const version = ref(null)

onMounted(async () => {
  arch.value = router.currentRoute.value.params.arch
  version.value = await downloader.version(pinfo.pf)
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
  const version = await downloader.version(platform)
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

    &.highlight {
      background-color: hsla(var(--bulma-success-h),var(--bulma-success-s),calc(var(--bulma-success-l)*.8),1);
      &:hover {
        background-color: hsla(var(--bulma-success-h),var(--bulma-success-s),calc(var(--bulma-success-l)),1);
      }
    }

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