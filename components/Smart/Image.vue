<script lang="ts">
export default defineComponent({
  props: {
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
  },
  setup(props) {
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

    return {
      error,
      loaded,
      getBackgroundUrl,
      getProxifiedImageUrl,
      handleError
    }
  }
})
</script>

<template>
  <div
    v-if="src"
    :style="{
      backgroundImage: loaded ? `url(${getBackgroundUrl})` : '',
      backgroundPosition: 'center',
      backgroundSize: fit
    }"
    :class="{
      'bg-gray-100 animate-pulse dark:bg-neutral-700 bg-no-repeat': !loaded,
      'relative caption': caption
    }"
    :title="title || caption"
    :failed-image-url="error && src"
  >
    <img
      :src="getBackgroundUrl"
      :alt="alt || caption || title || 'image'"
      :width="width"
      :height="height"
      class="invisible"
      loading="lazy"
      @error="handleError"
      @load="loaded = true"
    />

    <span
      v-if="caption"
      class="mx-8 text-center text-sm inset-x-0 -bottom-7 text-neutral-400 truncate absolute"
    >
      {{ caption }}
    </span>
  </div>
</template>
