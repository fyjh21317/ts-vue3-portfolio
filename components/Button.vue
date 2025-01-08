<script lang="ts">
export default defineComponent({
  props: {
    href: {
      type: [String, Object] as PropType<string | Record<string, any> | null>,
      required: false,
      default: null
    },
    icon: {
      type: String,
      required: false,
      default: null
    },
    block: {
      type: Boolean,
      required: false,
      default: false
    },
    rounded: {
      type: Boolean,
      required: false,
      default: false
    },
    blank: {
      type: Boolean,
      required: false,
      default: false
    },
    disabled: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  setup(props) {
    // 動態計算 icon 名稱
    const getIconName = computed(() => {
      return props.icon?.startsWith('Icon') ? props.icon : `Icon${props.icon}`
    })

    return {
      getIconName
    }
  }
})
</script>

<template>
  <SmartLink
    :href="!disabled && href"
    :blank="blank"
    class="cursor-pointer justify-center px-5 py-2 rounded-lg card-base flex items-center space-x-2"
    :class="{
      'w-max': !block,
      'rounded-full': rounded
    }"
  >
    <!-- Icon Slot or Component -->
    <component :is="getIconName" v-if="icon && !$slots.icon" class="h-4 w-4" />
    <slot v-else name="icon" />

    <!-- Default Slot -->
    <span v-if="$slots.default">
      <slot />
    </span>
  </SmartLink>
</template>
