<script setup lang="ts">
import { IconPlay, IconLink } from '#components'
const pageLoaded = ref(false)

// SEO Metadata
const title = 'My Research'
const description = 'Sharing findings and innovative ideas from my research journey.'

// 研究內容
const research = [
  {
    note: 'IEEE VR 2022',
    name: 'FrictShoes: Providing Multilevel Nonuniform Friction Feedback on Shoes in VR',
    description:
      'We propose FrictShoes, a device consisting of a pair of foot accessories, to provide multilevel nonuniform friction force feedback to feet in VR.',
    image: 'https://i.imgur.com/HzJc3gt.png',
    buttons: [
      {
        text: 'Video',
        link: 'https://www.youtube.com/watch?v=IDjh2ylkLqM',
        icon: 'IconPlay'
      },
      {
        text: 'Read',
        link: 'http://graphics.im.ntu.edu.tw/docs/vr22.pdf',
        icon: 'IconLink'
      }
    ]
  }
]

onMounted(() => {
  pageLoaded.value = true
})
</script>

<template>
  <PageLayout :title="title" :description="description">
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

    <!-- Research -->
    <section
      v-for="(project, index) in research"
      :key="`project-${index}`"
      :id="project.name.toLowerCase().split(' ').join('-')"
      class="grid md:grid-cols-2 gap-8 md:gap-12 items-center"
      :class="index === 0 ? 'mt-24 mb-42' : 'my-42'"
    >
      <div class="space-y-4">
        <span
          v-if="project.note"
          class="bg-orange-600/10 block w-max text-sm rounded-lg px-4 text-orange-600 py-1.5 dark:(bg-white/5 text-white/30)"
        >
          {{ project.note }}
        </span>

        <h2 class="text-3xl text-black/90 font-bold dark:text-white/90">
          {{ project.name }}
        </h2>

        <p>
          {{ project.description }}
        </p>

        <div v-if="project.buttons" class="flex flex-wrap gap-2">
          <Button
            v-for="(button, index) in project.buttons"
            :key="`button-${index}`"
            :href="button.link"
            :blank="!button.link.startsWith('/')"
          >
            <template #icon>
              <component :is="button.icon === 'IconPlay' ? IconPlay : IconLink" class="h-4 w-4" />
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
  </PageLayout>
</template>
