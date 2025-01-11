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
  utm: {
    type: Boolean,
    default: true
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

// 為外部連結添加 UTM 參數
const getUtmLink = computed(() => {
  const href = formattedHref.value
  try {
    const url = new URL(href)
    url.searchParams.append('utm_source', 'eggsy.xyz')
    return url.href
  } catch (err) {
    return href
  }
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
    :to="formattedHref"
    :target="blank ? '_blank' : ''"
    :title="title"
  >
    <slot />
  </NuxtLink>

  <!-- External Link -->
  <a
    v-else
    :href="utm ? getUtmLink : formattedHref"
    :target="blank ? '_blank' : ''"
    rel="noreferrer noopener"
    :title="title"
    @click="handleClick"
  >
    <slot />
  </a>
</template>
