<script setup lang="ts">
import constants from '@/config/constants'

// Interface
type Link = {
  url: string
  title: string
  description: string
  icon: string
}

const pageLoaded = ref(false)

// SEO Metadata
const title = 'Contact'
const description = 'If you have any questions, feel free to contact me.'

const getLinks = computed(() => {
  const titles: Record<string, string> = {
    github: 'Follow me on GitHub!',
    linkedIn: 'Connect with me on LinkedIn!'
  }

  return Object.entries(constants.social)
    .filter(([key]) => key !== 'email')
    .map(([key, url]) => ({
      url,
      title: key.charAt(0).toUpperCase() + key.slice(1),
      description: titles[key],
      icon: key
    })) as Link[]
})

onMounted(() => {
  pageLoaded.value = true
})

const emailHref = computed(() =>
  pageLoaded.value ? `mailto:${constants.social.email}` : undefined
)
</script>

<template>
  <PageLayout :title="title" :description="description">
    <div class="grid gap-4 md:grid-cols-2">
      <Card
        v-for="(contact, index) in getLinks"
        :key="index"
        :title="contact.title"
        :href="contact.url"
        blank
      >
        <template #icon>
          <IconPlatform :brand="contact.icon" class="h-8 w-8" />
        </template>

        <span class="text-black/50 dark:text-white/30">{{ contact.description }}</span>
      </Card>

      <Card title="Email" :href="emailHref" icon="IconAt">
        <template #icon>
          <IconAt class="h-8 w-8" />
        </template>

        Send me an email!
      </Card>
    </div>
  </PageLayout>
</template>
