// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: ['@unocss/nuxt', '@nuxtjs/color-mode'],
  colorMode: {
    storageKey: "color-mode",
    preference: "system",
    fallback: "dark",
    classSuffix: "",
  },
  css: ['@/assets/stylesheets/root.scss'],
  ssr: process.env.NODE_ENV !== 'development',
  app: {
    head: {
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.svg' }
      ]
    }
  }
})