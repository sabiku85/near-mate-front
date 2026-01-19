// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',

  devtools: { enabled: true },

  modules: [
    '@nuxt/ui',
    '@nuxt/icon',
    '@nuxt/eslint',
    "@nuxt/test-utils",
    "@nuxtjs/html-validator",
  ],

  css: ['~/assets/css/main.css'],

  routeRules: {
    '/': { prerender: true },
    '/auth/**': { ssr: false },
    '/dashboard/**': { ssr: true },
  },

  runtimeConfig: {
    public: {
      apiBase: '/api'
    }
  },

  app: {
    // baseURL is set by GitHub Pages preset, but can be overridden via NUXT_APP_BASE_URL env var
    // @ts-expect-error - process.env is available at build time in Node.js context
    baseURL: process.env.NUXT_APP_BASE_URL || '/',
    head: {
      title: "nearMate",
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'nearMate Application' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
      ]
    }
  }
})