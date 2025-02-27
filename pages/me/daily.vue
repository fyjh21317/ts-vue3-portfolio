<script setup lang="ts">
const pageLoaded = ref(false)
const tracks = ref<any[]>([])

// SEO Metadata
const title = 'Daily Song'
const description = 'Daily random tracks from my Spotify playlist. Let’s vibe. 🎧'

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
      <div class="music-cards">
        <MusicInfo
          v-for="(track, index) in tracks"
          :key="index"
          :trackName="track.name"
          :artist="track.artist"
          :spotifyUrl="track.url"
          :albumImage="track.albumImage"
        />
      </div>
    </div>
  </PageLayout>
</template>
