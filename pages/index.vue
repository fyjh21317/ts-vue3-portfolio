<script setup lang="ts">
const { $annotate } = useNuxtApp()
const notationColor = '#ECE8C5'
const isTextAnimating = ref(false)
const notationDom = ref<HTMLElement | null>(null)

// 建立 rough-notation 實例
let annotation: ReturnType<typeof $annotate> | null = null

onMounted(async () => {
  await nextTick()

  if (notationDom.value) {
    annotation = $annotate(notationDom.value, {
      type: 'highlight',
      color: notationColor
    })
    initTextAnimation()
  } else {
    console.error('notationDom is null')
  }
})

// 初始化動畫
function initTextAnimation() {
  setTimeout(() => {
    isTextAnimating.value = true
    annotation?.show()
  }, 800)
}

useHead({
  title: 'Home'
})
</script>

<template>
  <div class="space-y-24 mb-10">
    <header
      class="rounded-md flex flex-col-reverse my-16 py-10 md:(flex-row items-center justify-between) justify-center"
    >
      <div class="md:w-8/12">
        <div class="space-y-8">
          <!-- 自我介紹 -->
          <div class="lg:space-y-4">
            <h1
              class="font-semibold text-center text-lg md:(text-xl text-left) text-black/50 dark:text-white/50"
            >
              Hi, I am
              <span class="text-black/90 dark:text-white/90">Freya Liao</span>
            </h1>

            <h1
              class="font-semibold text-center text-4xl md:(text-6xl text-left) text-black/90 leading-normal dark:text-white/90"
            >
              Full-stack Web Developer
            </h1>

            <h3
              class="font-semibold justify-center text-xl items-center md:(text-2xl text-left justify-start) transition-opacity duration-1000 flex gap-2 text-center text-[#fde047] dark:text-dark-200"
              :class="isTextAnimating ? 'opacity-100' : 'opacity-30'"
            >
              <div class="flex flex-col items-end text-[10px] text-black/50 dark:text-white/50">
                <span>currently</span>
              </div>

              <span ref="notationDom" class="text-black/90 dark:text-white/90 px-2">
                Beginner in Cross-Platform Mobile Apps
              </span>
            </h3>
          </div>

          <!--  技能 ＆ 跳轉至所有技能 -->
          <div class="flex items-center justify-center md:justify-start gap-x-3 gap-y-2 flex-wrap">
            <Button
              v-for="item in ['Vue.js', 'JavaScript', 'TypeScript']"
              :key="item"
              class="inline-block"
            >
              <IconDev :brand="item" class="h-5 w-5" />
            </Button>

            <!-- <Button
              v-tippy="{ content: 'More', placement: 'bottom' }"
              @click.native="scrollToSection('#technologies')"
            >
              <IconEllipsis class="h-5 w-5" />
            </Button> -->
          </div>
        </div>
      </div>

      <!-- 大頭貼 -->
      <div class="rounded-full mx-auto mb-4 md:mb-0">
        <SmartImage src="/images/picture.png" class="rounded-full h-50 w-50" />
      </div>
    </header>
  </div>
</template>

<style lang="scss" scoped></style>
