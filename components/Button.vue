<!-- Button.vue -->
<script setup lang="ts">
const props = defineProps({
  href: {
    type: [String, Object] as PropType<string | Record<string, any>>,
    required: false,
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
  },
  block: {
    type: Boolean,
    default: false
  },
  rounded: {
    type: Boolean,
    default: false
  }
})
</script>

<template>
  <SmartLink
    :href="href"
    :blank="blank"
    :title="title"
    :internal="internal"
    :external="external"
    class="cursor-pointer justify-center px-5 py-2 rounded-lg card-base flex items-center space-x-2"
    :class="{
      'w-max': !block,
      'rounded-full': rounded
    }"
  >
    <slot />
  </SmartLink>
</template>
