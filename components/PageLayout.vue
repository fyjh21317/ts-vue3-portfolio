<script setup lang="ts">
const props = defineProps<{
  title: string
  description?: string | string[]
}>()

const getDescriptions = computed(() => {
  return typeof props.description === 'string' ? [props.description] : props.description || []
})

useHead({
  title: props.title
})
</script>

<template>
  <div class="text-black/50 dark:text-white/30">
    <header class="space-y-2 my-12">
      <h1 class="text-black/90 dark:text-white/90 text-4xl font-semibold">
        {{ props.title }}
      </h1>

      <p v-for="(description, index) in getDescriptions" :key="`description-${index}`">
        {{ description }}
      </p>
    </header>

    <slot />
  </div>
</template>
