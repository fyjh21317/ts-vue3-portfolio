<script lang="ts" setup>
const props = defineProps({
  src: {
    type: String,
    required: false,
    default: null
  },
  title: {
    type: String,
    required: false,
    default: null
  },
  alt: {
    type: String,
    required: false,
    default: null
  },
  format: {
    type: String,
    required: false,
    default: 'webp'
  },
  fit: {
    type: String,
    required: false,
    default: 'cover'
  },
  width: {
    type: String,
    required: false,
    default: null
  },
  height: {
    type: String,
    required: false,
    default: null
  },
  caption: {
    type: String,
    required: false,
    default: null
  },
  optimize: {
    type: Boolean,
    required: false,
    default: true
  }
})

const error = ref(false)
const loaded = ref(true)

const getBackgroundUrl = computed(() => {
  if (error.value || !props.src) return '/icon.png'
  return props.optimize ? getProxifiedImageUrl(props.src) : props.src
})

const getProxifiedImageUrl = (url: string): string => {
  if (url.includes('i.imgur.com')) {
    return `https://proxy.duckduckgo.com/iu/?u=${encodeURIComponent(url)}`
  }
  return url
}

const handleError = () => {
  if (!props.optimize) return
  error.value = true
  loaded.value = false
}
</script>

<template>
  <div
    v-if="props.src"
    :style="{
      backgroundImage: loaded ? `url(${getBackgroundUrl})` : '',
      backgroundPosition: 'center',
      backgroundSize: props.fit
    }"
    :class="{
      'bg-gray-100 animate-pulse dark:bg-neutral-700 bg-no-repeat': !loaded,
      'relative caption': props.caption
    }"
    :title="props.title || props.caption"
    :failed-image-url="error && props.src"
  >
    <img
      :src="getBackgroundUrl"
      :alt="props.alt || props.caption || props.title || 'image'"
      :width="props.width"
      :height="props.height"
      class="invisible"
      loading="lazy"
      @error="handleError"
      @load="loaded = true"
    />

    <span
      v-if="props.caption"
      class="mx-8 text-center text-sm inset-x-0 -bottom-7 text-neutral-400 truncate absolute"
    >
      {{ props.caption }}
    </span>
  </div>
</template>

<style lang="css" scoped>
img {
  max-width: 100%;
  height: auto;
}
</style>
