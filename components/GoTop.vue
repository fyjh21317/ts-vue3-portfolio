<script lang="ts" setup>
const position = ref(0)

// Computed property
const isActive = computed(() => position.value > 100)

// Method to update the position
const updatePosition = () => {
  position.value = window.scrollY
}

// Method to scroll to the top
const goTop = () => {
  window.scrollTo(0, 0)
}

// Add event listener on mounted
onMounted(() => {
  window.addEventListener('scroll', updatePosition)
})

// Remove event listener on beforeUnmount
onBeforeUnmount(() => {
  window.removeEventListener('scroll', updatePosition)
})
</script>

<template>
  <transition name="fade">
    <div v-show="isActive" class="right-6 bottom-4 z-50 fixed items-center md:flex md:space-x-2">
      <Button rounded elevated @click="goTop">
        <IconChevron up class="h-4 w-4" />
      </Button>

      <ColorSwitcher class="hidden md:block" />
    </div>
  </transition>
</template>
