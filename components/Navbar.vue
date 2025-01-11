<script setup lang="ts">
// 動態計算導航連結的目標，目前只返回首頁
const getTargetLink = computed(() => {
  return '/'
})
</script>

<template>
  <nav class="w-full">
    <div class="responsive-screen relative">
      <div class="flex items-center justify-between gap-6">
        <!-- 導航連結 -->
        <NuxtLink :to="getTargetLink" class="flex-shrink-0 h-10 w-10 flex items-center space-x-4">
          <img
            src="/images/calcifer.png"
            alt="Logo"
            class="rounded-md bg-gray-100 ring-black transition-transform ring-2 ring-opacity-5 sm:transform hover:-rotate-6 flex-shrink-0 h-10 w-10"
          />
        </NuxtLink>

        <!-- 右側按鈕區 -->
        <div class="flex space-x-2 items-center">
          <!-- <OmnibarButton />
          <ColorSwitcher /> -->
        </div>
      </div>
    </div>
  </nav>
</template>
