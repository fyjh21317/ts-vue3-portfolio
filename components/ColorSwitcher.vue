<script setup lang="ts">
const colorMode = useColorMode()

/**
 * Returns the selected color mode value.
 * @returns {string} The color mode as "light" or "dark".
 */
const getSelectedTheme = computed(() => colorMode.value)

/**
 * Updates the color mode value.
 */
const switchTheme = () => {
  colorMode.preference = getSelectedTheme.value === 'dark' ? 'light' : 'dark'
}
</script>

<template>
  <Button rounded elevated @click="switchTheme">
    <IconSun v-if="getSelectedTheme === 'light'" class="h-4 w-4" />
    <IconMoon v-else class="h-4 w-4" />
  </Button>
</template>
