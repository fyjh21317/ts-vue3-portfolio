<script setup lang="ts">
import IconDev from '@/components/Icon/Dev.vue'
// 使用 TS 泛型
const props = withDefaults(
  defineProps<{
    title: string
    image?: string
    iconPack?: string
  }>(),
  {
    iconPack: 'IconDev'
  }
)
</script>

<template>
  <div class="card-base rounded-lg flex items-center space-x-4">
    <div class="rounded-lg flex">
      <SmartImage v-if="image" :src="image" class="h-5 w-5 flex-shrink-0" />
      <IconPlatform
        v-else-if="iconPack === 'IconPlatform'"
        :brand="title"
        class="h-5 w-5 flex-shrink-0"
      />
      <IconDev v-else :brand="title" class="h-5 w-5 flex-shrink-0" />
    </div>

    <span class="flex-1 truncate text-sm">
      {{ title }}
    </span>
  </div>
</template>
