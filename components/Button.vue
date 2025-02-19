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
    :class="{
      'cursor-pointer flex-c px-5 py-2 card-base space-x-2 w-max': true,
      'rounded-lg': !rounded,
      'rounded-full': rounded
    }"
  >
    <slot name="icon" />
    <span>
      <slot />
    </span>
  </SmartLink>
</template>
