<script setup lang="ts">
const string = 'freya.lcf'

useHead({
  titleTemplate: `%s - ${string}`,
  htmlAttrs: {
    class: `min-h-screen ${useColorMode().value}`
  },
  meta: [
    {
      hid: 'og:site_name',
      name: 'og:site_name',
      content: string
    }
  ]
})
</script>

<template>
  <div class="min-h-screen bg-gray-50 dark:bg-neutral-900">
    <!-- Nuxt component -->
    <main class="responsive-screen min-h-screen pb-8">
      <NuxtPage />
    </main>
  </div>
</template>
