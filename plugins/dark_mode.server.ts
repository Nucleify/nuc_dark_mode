import { defineNuxtPlugin, useHead } from 'nuxt/app'

const DARK_MODE_SCRIPT = `(function(){try{if(document.cookie.match(/(?:^|;\\s*)nuc-dark-mode=true/)){document.documentElement.classList.add('p-dark')}}catch(e){}})()`

export default defineNuxtPlugin(() => {
  if (import.meta.server) {
    useHead({
      script: [{ innerHTML: DARK_MODE_SCRIPT }],
    })
  }
})
