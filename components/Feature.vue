
<template>

  <div class="card">
    <div class="card-content">
      <div class="media">
        <div class="media-left"><slot name="icon"></slot></div>
        <div class="media-content"><slot name="title"></slot></div>
      </div>
    </div>
    <div class="content">
      <slot name="description"></slot>
    </div>
    <div class="is-overlay">
      <i class="bi-film"></i>
    </div>
  </div>

</template>

<style scoped>

.card {

  position: relative;
  cursor: pointer;

  .media-left {
    margin-top: 5px;
  }

  .media-content {
    font-family: var(--title-font-family);
    font-size: 1.1rem;
    font-weight: bold;
  }

  .content {
    padding: 0rem 1.5rem 2rem 1.25rem;
  }

  .is-overlay {    
    background-color: rgba(255, 255, 255, 0.85);
    border-radius: var(--bulma-card-radius);
    display: none;
    justify-content: center;
    align-items: center;

    i {
      color: black;
      font-size: 1.5rem;
    }
  }

  &:hover .is-overlay {
    display: flex;
  }

}

</style>
