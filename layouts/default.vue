<script setup lang="ts">
const string = 'freya.lcf'

useHead({
  titleTemplate: `%s - ${string}`,
  htmlAttrs: {
    class: `min-h-screen ${useColorMode().value}`
  },
  meta: [
    {
      hid: 'freyaliao',
      name: 'fang-ying liao portfolio',
      content: 'frontend developer | mobile developer | Vue.js'
    }
  ]
})
</script>

<template>
  <div class="min-h-screen bg-gray-50 dark:bg-neutral-900">
    <!-- 導覽列 -->
    <Navbar class="pt-10" />

    <!-- 主頁面 -->
    <main class="responsive-screen min-h-screen pb-8">
      <NuxtPage />
    </main>

    <!-- Go to top 按鈕-->
    <GoTop />
  </div>
</template>
