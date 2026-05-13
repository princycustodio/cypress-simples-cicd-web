import { defineConfig } from 'cypress'

export default defineConfig({

  e2e: {

    baseUrl: 'https://patrick-cst.github.io/cadastro-produtos/',

    setupNodeEvents(on, config) {
      return config
    }
  }
})