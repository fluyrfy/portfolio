// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxt/eslint',
    '@nuxt/image',
    '@nuxt/ui',
    '@nuxt/content',
    '@vueuse/nuxt',
    'nuxt-og-image',
    'motion-v/nuxt',
    'nuxt-studio',
    'nuxt-gtag',
    '@nuxtjs/seo'
  ],
  devtools: {
    enabled: true
  },

  css: ['~/assets/css/main.css'],

  site: { url: 'https://frankliao.dev', name: 'Frank Liao' },

  compatibilityDate: '2024-11-01',

  nitro: {
    prerender: {
      routes: [
        '/'
      ],
      crawlLinks: true
    }
  },

  eslint: {
    config: {
      stylistic: {
        commaDangle: 'never',
        braceStyle: '1tbs'
      }
    }
  },

  gtag: {
    id: process.env.NUXT_PUBLIC_GTAG_ID
  },
  studio: {
    repository: {
      provider: 'github',
      owner: 'fluyrfy',
      repo: 'portfolio',
      branch: 'main'
    }
  }
})
