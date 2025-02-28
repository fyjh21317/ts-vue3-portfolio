<script setup lang="ts">
import { songLinks } from '@/assets/data/musicLinks'

interface Track {
  name: string
  artist: string
  url: string
  albumImage: string
}

const pageLoaded = ref(false)
const tracks = ref<Track[]>([])
const randomTrack = ref<Track | null>(null)
const youtubeUrl = ref('')
const error = ref<string | null>(null)

// SEO Metadata
const title = 'Daily Song'
const description = 'Random tracks from my Spotify playlist. Let’s vibe. 🎧'

// 取得隨機歌曲
const getRandomTrack = async () => {
  const randomIndex = Math.floor(Math.random() * tracks.value.length)
  const { name, artist, url, albumImage } = tracks.value[randomIndex]
  randomTrack.value = { name, artist, url, albumImage }

  // 更新 YouTube 播放器的 URL
  youtubeUrl.value =
    songLinks.find((link) => link.trackName === name)?.youtubeUrl ??
    'https://www.youtube.com/watch?v=j1hft9Wjq9U'
}

onMounted(async () => {
  pageLoaded.value = true
  try {
    const response = await $fetch('/api/spotify-playlist')
    tracks.value = response
    getRandomTrack()
  } catch (err) {
    console.error(err)
    error.value = 'Failed to load tracks. Please try again later.'
  }
})
</script>

<template>
  <PageLayout :title="title" :description="description">
    <div v-if="error" class="error-message">{{ error }}</div>
    <div class="grid gap-4 md:grid-cols-2">
      <MusicInfo
        v-if="randomTrack"
        :trackName="randomTrack.name"
        :artist="randomTrack.artist"
        :spotifyUrl="randomTrack.url"
        :albumImage="randomTrack.albumImage"
      />
      <YouTubePlayer :youtubeUrl="youtubeUrl" />
    </div>
  </PageLayout>
</template>
