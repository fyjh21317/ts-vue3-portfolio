<script setup lang="ts">
const colorMode = useColorMode()

/** 根據 colorMode 的 value 計算是否是 dark 模式 */
const isDarkMode = computed(() => colorMode.value === 'dark')

/** 切換主題 */
const switchTheme = () => {
  colorMode.preference = isDarkMode.value ? 'light' : 'dark'
}
</script>

<template>
  <Button rounded elevated @click="switchTheme">
    <IconMoon v-if="isDarkMode" class="h-4 w-4" />
    <IconSun v-else class="h-4 w-4" />
  </Button>
</template>
