
<template>

  <div class="footer">
    
    <div class="columns">

      <div class="column">
        <h1>Witsy</h1>
        <h2>AI just a keyboard shortcut away!</h2>
      </div>

      <div class="column">
        <h1>Get notified of new features and updates</h1>
        <div class="field has-addons">
          <div class="control">
            <input class="input is-small" type="text" placeholder="Email address">
          </div>
          <div class="control">
            <button class="button is-small is-success" @click="onSubscribe">Subscribe</button>
          </div>
        </div>
      </div>

    </div>

    <div class="signature">
      &copy; Nicolas Bonamy {{ new Date().getFullYear() }}
    </div>

  </div>

</template>

<script setup>

const onSubscribe = () => {
  alert('Thanks for your interest! There is no newsletter yet, but it you are interesed in the project, you can follow it on GitHub!')
}

</script>

<style scoped>

.footer {

  background-color: transparent;
  padding: 0;
  margin: 0 auto;
  
  * {
    color: #888;
  }

  .column {
    h1 {
      font-weight: 700;
    }
  }

  .column:first-child {
    text-align: left;
  }

  .column:nth-child(2) {
    text-align: right;

    .field.has-addons {
      margin-top: 0.5rem;
      justify-content: flex-end;
      button {
        color: white;
      }
    }
  }

  .signature {
    margin-top: 4rem;
    border-top: 1px solid #eee;
    padding-top: 0.5rem;
    font-size: 0.75rem;
  }


}

@media (max-width: 980px) {
  .footer {
    .columns {
      flex-direction: column;
      .column {
        text-align: center;
        margin-bottom: 1rem;
      }
      .column:nth-child(2) {
        .field.has-addons {
          justify-content: center;
        }
      }
    }
    .signature {
      margin-top: 1.5rem;
    }
  }
}

</style>