<script lang="ts" setup>
const props = defineProps({
  src: {
    type: String,
    default: null
  },
  alt: {
    type: String,
    default: null
  },
  caption: {
    type: String,
    default: null
  },
  imageClass: {
    type: String,
    default: null
  },
  border: {
    type: Boolean,
    default: false
  },
  zoomable: {
    type: Boolean,
    default: true
  }
})
</script>

<template>
  <figure class="w-full h-full overflow-hidden">
    <img
      :src="src"
      :alt="alt || caption || 'image'"
      loading="lazy"
      draggable="false"
      fit="cover"
      class="object-cover w-full rounded-md"
      :class="[imageClass, border && 'border border-black/10 dark:border-white/10']"
      :data-zoomable="zoomable"
    />

    <figcaption v-if="caption" class="text-center">
      {{ caption }}
    </figcaption>
  </figure>
</template>

<style>
.medium-zoom-overlay {
  @apply z-40;
}

.medium-zoom-image.medium-zoom-image--opened {
  @apply z-50;
}
</style>
