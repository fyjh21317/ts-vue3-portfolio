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
      :src="props.src"
      :alt="props.alt || props.caption || 'image'"
      loading="lazy"
      draggable="false"
      fit="cover"
      class="object-cover w-full rounded-md"
      :class="[props.imageClass, props.border && 'border border-black/10 dark:border-white/10']"
      :data-zoomable="props.zoomable"
    />

    <figcaption v-if="props.caption" class="text-center">
      {{ props.caption }}
    </figcaption>
  </figure>
</template>
