
<template>
  <div ref="wrapper" class="topbar-wrapper">
    <div class="topbar">
      <div class="logo">
        <RouterLink :to="{ path: '/' }">
          <img src="img/logo.png" alt="logo" />
          Witsy
        </RouterLink>
      </div>
      <ul class="menu menu-left">
        <li><RouterLink :to="{ path: '/', hash: '#features' }">Features</RouterLink></li>
        <li><RouterLink :to="{ path: '/help' }">Help</RouterLink></li>
        <li><RouterLink :to="{ path: '/', hash: '#faq' }">FAQ</RouterLink></li>
        <li><RouterLink :to="{ path: '/', hash: '#testimonials' }">Testimonials</RouterLink></li>
        <li class="github"><a href="https://github.com/nbonamy/witsy" target="_blank"><img src="https://www.svgrepo.com/show/343674/github.svg"> GitHub</a></li>
      </ul>
      <ul class="menu menu-right">
        <li><RouterLink :to="{ path: '/' }" class="download">Download</RouterLink></li>
      </ul>
    </div>
  </div>
</template>

<script setup>

import { ref, onMounted } from 'vue'

const wrapper = ref(null)

onMounted(() => {
  document.addEventListener('scroll', (ev) => {
    wrapper.value?.classList.toggle('scrolled', document.body.scrollTop > 0)
  })
})

</script>

<style scoped>

.topbar-wrapper {

  position: fixed;
  background-color: var(--background-color);
  padding: 0.5rem 0.5rem 1rem 0.5rem;
  width: 100%;
  z-index: 10;

  &.scrolled {
    background-color: var(--background-color-alpha);
    border-bottom: 1px solid #ddd;
  }

  .topbar {

    max-width: 60rem;
    margin: 0 auto;
    display: flex;
    padding: 0 2rem;
    align-items: center;
    gap: 4rem;

    img {
      height: 2rem;
    }

    .logo a {
      display: flex;
      align-items: center;
      font-size: 1.5rem;
      font-weight: 700;
      color: #333;

      img {
        margin-right: 0.75rem;
      }
    }

    a {
      color: #444;
      text-decoration: none;
    }

    .menu {
      display: flex;
      align-items: center;
      gap: 3rem;

      li {
        font-weight: 400;
        font-size: 1rem;
        
        a:hover {
          color: var(--accent-color);
        }
      }

      .github {
        margin-left: 0.5rem;
        font-weight: 500;
        img {
          height: 1.5rem;
          margin-right: 0.2rem;
          position: relative;
          top: 3px;
        }
      }
    }

    .menu-right {
      margin-left: auto;

      .download {
        font-weight: 700;
        padding: 0.5rem 1rem;
        border-radius: 2rem;
      }
    }
  }

  /* &.scrolled {
    .topbar {
      .menu-right {
        li {
          .download {
              background-color: #444;
              color: white;
              &:hover {
                background-color: var(--accent-color);
                color: white;
              }
            }
        }
      }
    }
  } */

}

@media (max-width: 980px) {
  .topbar-wrapper {
    position: static;
    padding-bottom: 0rem;
    .topbar {
      justify-content: center;
      .menu {
        display: none;
      }
    }
  }
}

</style>