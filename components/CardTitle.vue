<script setup lang="ts">
const props = defineProps({
  size: {
    type: String as PropType<'1' | '2' | '3' | '4' | '5' | 'sm' | 'xs'>,
    required: false,
    default: '3'
  },
  uppercase: {
    type: Boolean,
    required: false,
    default: true
  },
  bold: {
    type: Boolean,
    required: false,
    default: false
  }
})

const tag = computed(() => (['sm', 'xs'].includes(props.size) ? 'h3' : `h${props.size}`))
const classes = computed(() => ({
  'text-2xl': props.size === '1',
  'text-xl': props.size === '2',
  'text-sm': props.size === 'sm',
  'text-xs': props.size === 'xs',
  'text-lg': !['1', '2', 'sm', 'xs'].includes(props.size),
  'font-bold': props.bold,
  'font-medium': !props.bold,
  uppercase: props.uppercase
}))
</script>

<template>
  <component :is="tag" class="text-sm text-black/70 dark:text-white/50" :class="classes">
    <slot></slot>
  </component>
</template>
