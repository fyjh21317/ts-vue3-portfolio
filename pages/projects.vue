<script setup lang="ts">
import { IconPlatform } from '#components'
const { $applyMediumZoom } = useNuxtApp()
const pageLoaded = ref(false)
const imagesLoaded = ref(false)

// SEO Metadata
const title = 'My Projects'
const description = '(Continuously growing!)'

// eggsy's website:
const eggsyUrl = 'https://eggsy.xyz/'

// 專案內容
const research = [
  {
    note: 'You Are Here 👀',
    name: 'Portfolio Website',
    image: 'https://i.imgur.com/F4qXnF5.png',
    description: `This personal website is developed using Nuxt (with Vue 3 and TypeScript), styled with UnoCSS, and integrates the Spotify API inspired by <a href="${eggsyUrl}" target='_blank' class='refer-highlight'>eggsy's website</a>. ✨`,
    buttons: [
      {
        text: 'Repo',
        link: 'https://github.com/fyjh21317/ts-vue3-portfolio',
        icon: 'GitHub'
      }
    ]
  }
]

// 等待所有圖片載入
const loadImages = async () => {
  const imagePromises = research
    .filter((project) => project.image)
    .map((project) => {
      return new Promise((resolve) => {
        const img = new Image()
        img.src = project.image
        img.onload = () => resolve(true)
        img.onerror = () => resolve(false)
      })
    })

  await Promise.all(imagePromises)
  imagesLoaded.value = true
}

onMounted(async () => {
  await loadImages()
  pageLoaded.value = true
  $applyMediumZoom()
})
</script>

<template>
  <PageLayout :title="title" :description="description">
    <!-- 加載中 -->
    <div v-if="!imagesLoaded" class="flex justify-center p-6">
      <LightLoader />
    </div>

    <template v-else>
      <!-- Jump To -->
      <section class="flex items-center flex-wrap gap-2">
        <span class="text-sm">Jump to:</span>
        <Button
          v-for="(project, index) in research"
          :key="`skipto-button-${index}`"
          :href="`#${project.name.toLowerCase().split(' ').join('-')}`"
        >
          {{ project.name.split(':')[0] }}
        </Button>
      </section>

      <!-- Projects -->
      <section
        v-for="(project, index) in research"
        :key="`project-${index}`"
        :id="project.name.toLowerCase().split(' ').join('-')"
        class="grid md:grid-cols-2 gap-8 md:gap-12 items-center"
        :class="index === 0 ? 'mt-24 mb-42' : 'my-42'"
      >
        <div class="space-y-4">
          <div class="flex gap-2">
            <span
              v-if="project.note"
              class="bg-orange-600/10 block w-max text-sm rounded-lg px-4 text-orange-600 py-1.5 dark:(bg-white/5 text-white/30)"
            >
              {{ project.note }}
            </span>
          </div>

          <h2 class="text-2xl text-black/90 font-bold dark:text-white/90">
            {{ project.name }}
          </h2>

          <p v-html="project.description" />

          <div v-if="project.buttons" class="flex flex-wrap gap-2">
            <Button
              v-for="(button, index) in project.buttons"
              :key="`button-${index}`"
              :href="button.link"
              :blank="!button.link.startsWith('/')"
            >
              <template #icon>
                <component :is="IconPlatform" :brand="button.icon" class="h-4 w-4" />
              </template>

              {{ button.text }}
            </Button>
          </div>
        </div>

        <SmartFigure
          v-if="project.image"
          :src="project.image"
          border
          :class="index % 2 === 0 && 'md:order-first'"
        />
      </section>
    </template>
  </PageLayout>
</template>

<style>
.refer-highlight {
  color: #b8bb9a;
}
</style>
