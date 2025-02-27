<script setup lang="ts">
const pageLoaded = ref(false)
const tracks = ref<any[]>([])

// SEO Metadata
const title = 'Daily Song'
const description = 'Random tracks from my Spotify playlist. Let’s vibe. 🎧'

const randomTrack = computed(() => {
  const randomIndex = Math.floor(Math.random() * tracks.value.length)
  return tracks.value[randomIndex]
})

onMounted(async () => {
  pageLoaded.value = true
  try {
    const response = await $fetch('/api/spotify-playlist')
    tracks.value = response
  } catch (err) {
    console.error(err)
  }
})
</script>

<template>
  <PageLayout :title="title" :description="description">
    <div class="grid gap-4 md:grid-cols-2">
      <MusicInfo
        v-if="tracks.length > 0"
        :trackName="randomTrack.name"
        :artist="randomTrack.artist"
        :spotifyUrl="randomTrack.url"
        :albumImage="randomTrack.albumImage"
      />
    </div>
  </PageLayout>
</template>
