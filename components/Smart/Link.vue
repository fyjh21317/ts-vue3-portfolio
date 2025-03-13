<!-- SmartLink.vue -->
<script setup lang="ts">
const props = defineProps({
  href: {
    type: [String, Object] as PropType<string | Record<string, any>>,
    required: true,
    default: ''
  },
  blank: {
    type: Boolean,
    default: false
  },
  title: {
    type: String,
    default: ''
  },
  internal: {
    type: Boolean,
    default: false
  },
  external: {
    type: Boolean,
    default: false
  }
})

// 格式化 href
const formattedHref = computed(() => {
  if (typeof props.href === 'string') {
    if (!props.href) return '#'
    return props.href
  } else if (typeof props.href === 'object') {
    return JSON.stringify(props.href)
  }
  return ''
})

// 判斷是否為內部連結
const isInternalPage = computed(() => {
  const href = formattedHref.value
  if (href && ['/', '#'].includes(href[0])) return true
  return false
})

const handleClick = (event: MouseEvent) => {
  if (formattedHref.value === '#') {
    event.preventDefault() // 避免頁面重複刷新
  }
}
</script>

<template>
  <!-- Internal Link -->
  <NuxtLink
    v-if="isInternalPage && !external"
    :to="href"
    :target="blank ? '_blank' : ''"
    :title="title"
  >
    <slot />
  </NuxtLink>

  <!-- External Link -->
  <a
    v-else
    :href="formattedHref"
    :target="blank ? '_blank' : ''"
    rel="noreferrer noopener"
    :title="title"
    @click="handleClick"
  >
    <slot />
  </a>
</template>
