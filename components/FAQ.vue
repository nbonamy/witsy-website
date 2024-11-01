<template>

  <div class="faq">

    <a id="faq" name="faq"></a>

    <div class="title">Frequently Asked Questions</div>

    <div class="columns">

      <div class="column">

        <div class="question">
          <div class="q">What is Witsy?</div>
          <div class="a">Witsy is a desktop application that provides access to all generative AI models from top AI
            providers. It is a one-stop solution for all your generative AI needs.</div>
        </div>

        <div class="question">
          <div class="q">On what platforms is Witsy available?</div>
          <div class="a">Witsy is a desktop application meaning it runs on a computer. The platforms supported are
            Windows, macOS (both Intel and Apple Silicon architectures), and Linux. There is no mobile phone version
            available yet.</div>
        </div>

        <div class="question">
          <div class="q">How do I get started?</div>
          <div class="a">Simply download the app for your platform and start using it. No sign-up required. Additional setup
            is required to use models, such as providing API keys from the providers of your choice.
            <RouterLink :to="{ path: '/help' }">Help</RouterLink> is available in case you need it.</div>
        </div>

        <div class="question">
          <div class="q">Is Witsy really free?</div>
          <div class="a">Witsy itself is totally free. Although to use models you need to provide your own API keys from
            the providers of your choice. Those providers generally charge for their services, on a pay-per-use model.</div>
        </div>

      </div>

      <div class="column">

        <div class="question">
          <div class="q">How do I get API keys for models?</div>
          <div class="a">You need to sign up with the providers of your choice and get your API keys from them. Witsy
            will ask you for those keys when you try to use a model for the first time. You can also provide them in the
            settings.</div>
        </div>
        
        <div class="question">
          <div class="q">I don't want to pay at all!</div>
          <div class="a">Don't worry! <a href="https://ollama.com" target="_blank">Ollama</a> allows you to run all major opensource models
            such as the ones from Meta (the LLama family) on your computer entirely free. And of course Witsy is 100% compatible with Ollama.</div>
        </div>

        <div class="question">
          <div class="q">What are the models available?</div>
          <div class="a">It's impossible to provide a list of all available models as this changes all the time. Models from
            <a href="https://platform.openai.com/docs/models/continuous-model-upgrades" target="_blank">OpenAI</a>,
            <a href="https://docs.anthropic.com/en/docs/about-claude/models" target="_blank">Anthropic</a>,
            <a href="https://docs.mistral.ai/getting-started/models/models_overview/" target="_blank">MistralAI</a> and
            <a href="https://ai.google.dev/gemini-api/docs/models/gemini" target="_blank">GoogleAI</a> are available.
            <a href="https://ollama.com/library" target="_blank">Ollama</a>,
            <a href="https://console.groq.com/docs/models" target="_blank">Groq</a> and
            <a href="https://inference-docs.cerebras.ai/introduction" target="_blank">Cerebras</a>
            do not create models of their own but they will give
            you access to many more models including the ones from MetaAI.</div>
        </div>

      </div>

      <div class="column">

        <div class="question">
          <div class="q">I don't have access to o1 from OpenAI. Can Witsy help?</div>
          <div class="a">No. Access to models depends on your own access to those through the provider and based on their own policies.</div>
        </div>

        <div class="question">
          <div class="q">Can Witsy create images?</div>
          <div class="a">Yes! Although Witsy uses OpenAI models (DALL-E) to do so so you need to provide an OpenAI API key for image generation to work.
            But the good news is that any models can use DALL-E to create images, not only the OpenAI ones!</div>
        </div>

        <div class="question">
          <div class="q">Does Witsy respect my privacy?</div>
          <div class="a">Witsy itself does not collect any of your information. Not even performance data. Everything Witsy needs is saved on your computer and nowhere else.
            The models you use may have their own privacy policies, so make sure <a href="/policy">to check those out.</a></div>
        </div>

      </div>
    </div>


  </div>

</template>

<script setup>
</script>

<style scoped>

.faq {

  text-align: left;

  .title {
    margin-bottom: 3rem;
    font-size: 2rem;
    color: white;
  }

  .column {

    padding: 1rem;

    .question {

      margin-bottom: 2rem;
      font-size: 1rem;

      .q {
        font-weight: 600;
        margin-bottom: 0.5rem;
      }

      .a {
        font-weight: 200;
      }

      a {
        color: white;
      }
    }
  }
}

</style>
