<script setup lang="ts">
const props = defineProps<{
  youtubeUrl: string
}>()

// 將 YouTube 連結轉換為嵌入式 iframe URL
const youtubeEmbedUrl = computed(() => {
  const videoId = props.youtubeUrl.split('v=')[1]?.split('&')[0] // 解析出 YouTube 影片 ID
  return videoId ? `https://www.youtube.com/embed/${videoId}` : ''
})
</script>

<template>
  <v-card class="youtube-player" variant="plain">
    <iframe
      v-if="youtubeUrl"
      :src="youtubeEmbedUrl"
      frameborder="0"
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
    ></iframe>
    <p v-else>Unable to retrieve YouTube video.😞</p>
  </v-card>
</template>

<style scoped>
.youtube-player {
  position: relative;
  padding-top: 56.25%; /* 16:9 aspect ratio */
  height: 0;
  overflow: hidden;
  max-width: 100%;
}

.youtube-player iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
</style>
