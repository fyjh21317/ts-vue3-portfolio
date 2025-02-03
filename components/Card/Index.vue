<script lang="ts" setup>
const props = defineProps({
  title: {
    type: String,
    required: false,
    default: null
  },
  description: {
    type: String,
    required: false,
    default: null
  },
  icon: {
    type: String,
    required: false,
    default: null
  },
  href: {
    type: [String, Object] as PropType<any>,
    required: false,
    default: null
  },
  tight: {
    type: Boolean,
    required: false,
    default: false
  },
  elevated: {
    type: Boolean,
    required: false,
    default: false
  },
  cursor: {
    type: Boolean,
    required: false,
    default: true
  },
  truncate: {
    type: Boolean,
    required: false,
    default: true
  }
})

// 獲取插槽
const slots = useSlots()

const classes = 'rounded-md overflow-x-hidden transition-colors'

// 動態類名，根據 props 和插槽計算
const dynamicClasses = computed((): Record<string, boolean> => {
  return {
    [classes]: true,
    'p-2': props.tight,
    'p-4': !props.tight,
    'cursor-pointer': props.cursor,
    'items-center flex space-x-4': !!slots.icon || !!slots['icon-left'],
    'justify-between': !!slots.icon && !slots['icon-left']
  }
})
</script>

<template>
  <component
    :is="href ? 'SmartLink' : 'div'"
    :href="href"
    class="rounded-lg card-base"
    :class="dynamicClasses"
    v-bind="href ? $attrs : false"
  >
    <div v-if="$slots['icon-left']" class="flex-shrink-0">
      <slot name="icon-left" />
    </div>

    <div class="overflow-x-hidden leading-relaxed space-y-2">
      <h2 v-if="title" class="font-bold text-black dark:text-white truncate">
        {{ title }}
      </h2>

      <p
        v-if="$slots.default"
        class="text-black/50 dark:text-white/30 text-sm"
        :class="truncate && 'line-clamp-2'"
      >
        <slot />
      </p>
    </div>

    <div v-if="$slots.icon" class="flex-shrink-0">
      <slot name="icon" />
    </div>
  </component>
</template>
