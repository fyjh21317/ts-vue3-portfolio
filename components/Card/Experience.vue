<script setup lang="ts">
const props = defineProps({
  title: {
    type: String,
    required: true,
    default: ''
  },
  url: {
    type: String,
    required: false,
    default: null
  },
  date: {
    type: String,
    required: false,
    default: () => new Date().getFullYear().toString()
  },
  position: {
    type: String,
    required: false,
    default: null
  },
  hiddenBadge: {
    type: Boolean,
    required: false,
    default: false
  }
})

const showBadge = computed(() => props.hiddenBadge)
</script>

<template>
  <SmartLink :href="props.url" blank>
    <div class="card-base leading-relaxed rounded-lg">
      <div class="flex space-x-2 items-center justify-between">
        <h3 class="font-medium">{{ props.title }}</h3>
        <span class="text-black/50 dark:text-white/30 text-sm">{{ props.date }}</span>
      </div>

      <div
        v-if="props.position"
        class="truncate text-sm text-black/50 dark:text-white/30"
        :class="{ 'flex items-center justify-between': showBadge }"
      >
        {{ props.position }}
        <IconPlus v-if="showBadge" class="h-4 w-4" />
      </div>
    </div>
  </SmartLink>
</template>
