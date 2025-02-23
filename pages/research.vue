<script setup lang="ts">
import { IconPlay, IconDocument } from '#components'
const { $applyMediumZoom } = useNuxtApp()
const pageLoaded = ref(false)

// SEO Metadata
const title = 'My Research'
const description = 'Sharing findings and innovative ideas from my research journey.'

// 研究內容
const research = [
  {
    mine: "NTU Master's Thesis",
    name: 'Strange Familiars: Exploring the Design of Avatars and Virtual Environments for Reviving Dormant Ties in Social VR',
    description:
      'This study explores how social virtual reality can reactivate dormant social ties by using familiar avatars and environments to enhance social closeness and spark conversation.',
    authors:
      'Yu-Ting Yen, <span class="name-highlight">Fang-Ying Liao</span>, Ruei-Che Chang, Chi-Lan Yang, Bing-Yu Chen, Fu-Yin Cherng',
    image: 'https://i.imgur.com/uFUjguR.png',
    buttons: [
      {
        text: 'PDF',
        link: 'https://tdr.lib.ntu.edu.tw/jspui/handle/123456789/87445',
        icon: 'IconDocument'
      }
    ]
  },
  {
    note: 'UIST 2021',
    name: 'Daedalus in the Dark: Designing for Non-Visual Accessible Construction of Laser-Cut Architecture',
    description:
      'We developed Daedalus, a Fusion 360 add-in that auto-generates tactile cues to aid BLV users in laser-cut assembly.',
    authors:
      'Ruei-Che Chang, Chih-An Tsao, <span class="name-highlight">Fang-Ying Liao</span>, Seraphina Yong, Tom Yeh, Bing-Yu Chen',
    image: 'https://i.imgur.com/TdBMWj0.png',
    buttons: [
      {
        text: 'Video',
        link: 'https://www.youtube.com/watch?v=mKV39PAnKn4',
        icon: 'IconPlay'
      },
      {
        text: 'PDF',
        link: 'http://graphics.im.ntu.edu.tw/docs/uist21.pdf',
        icon: 'IconDocument'
      }
    ]
  },
  {
    note: 'IEEE VR 2022',
    name: 'FrictShoes: Providing Multilevel Nonuniform Friction Feedback on Shoes in VR',
    description:
      'We propose FrictShoes, a device consisting of a pair of foot accessories, to provide multilevel nonuniform friction force feedback to feet in VR.',
    authors:
      'Chih-An Tsao, Tzu-Chun Wu, Hsin-Ruey Tsai, Tzu-Yun Wei, <span class="name-highlight">Fang-Ying Liao</span>, Sean Chapman',
    image: 'https://i.imgur.com/HzJc3gt.png',
    buttons: [
      {
        text: 'Video',
        link: 'https://www.youtube.com/watch?v=IDjh2ylkLqM',
        icon: 'IconPlay'
      },
      {
        text: 'PDF',
        link: 'http://graphics.im.ntu.edu.tw/docs/vr22.pdf',
        icon: 'IconDocument'
      }
    ]
  }
]

onMounted(() => {
  pageLoaded.value = true
  $applyMediumZoom()
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
        <div class="flex gap-2">
          <span
            v-if="project.mine"
            class="bg-blue-600/10 block w-max text-sm rounded-lg px-4 text-blue-600 py-1.5 dark:(bg-white/5 text-white/30)"
          >
            {{ project.mine }}
          </span>

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

        <p>
          {{ project.description }}
        </p>

        <p v-html="project.authors" />

        <div v-if="project.buttons" class="flex flex-wrap gap-2">
          <Button
            v-for="(button, index) in project.buttons"
            :key="`button-${index}`"
            :href="button.link"
            :blank="!button.link.startsWith('/')"
          >
            <template #icon>
              <component
                :is="button.icon === 'IconPlay' ? IconPlay : IconDocument"
                class="h-4 w-4"
              />
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

<style>
.name-highlight {
  color: #ea580b;
}
</style>
