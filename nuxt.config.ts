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
  plugins: ['~/plugins/notation.ts'],
  css: ['@/assets/stylesheets/root.scss'],
  ssr: process.env.NODE_ENV !== 'development',
})