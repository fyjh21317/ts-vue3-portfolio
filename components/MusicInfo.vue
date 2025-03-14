<script setup lang="ts">
import { comments } from '@/assets/data/musicComment'
// 接收從父組件傳入的歌曲資訊
const props = defineProps({
  trackName: String,
  artist: String,
  spotifyUrl: String,
  albumImage: String
})

// 用來控制展開/收起顯示額外內容
const show = ref(false)

// 根據歌曲名稱查找評論
const getComment = (trackName: string): string => {
  const comment = comments.find((c) => c.trackName === trackName)
  return comment?.comment ?? '這首你一定會喜歡！'
}

const btnColor = {
  hover: '#E8F5E9',
  text: '#00C853'
}
</script>

<template>
  <v-card class="mx-auto" variant="plain" max-width="350">
    <!-- 封面圖片 -->
    <v-img aspect-ratio="1/1" :src="albumImage" cover :width="350" class="hover-card"></v-img>

    <!-- 歌曲名稱 -->
    <v-card-title v-tooltip="trackName" class="dark:text-white/90">{{ trackName }}</v-card-title>

    <!-- 歌手名稱 -->
    <v-card-subtitle class="dark:text-white/90">{{ artist }}</v-card-subtitle>

    <!-- Spotify 連結 -->
    <v-card-actions>
      <v-btn :color="btnColor.hover" :href="spotifyUrl" target="_blank">
        <span class="font-medium" :style="{ color: btnColor.text, zIndex: 1 }"
          >Listen on Spotify
        </span>
      </v-btn>

      <v-spacer></v-spacer>

      <v-btn :icon="show ? 'mdi-chevron-up' : 'mdi-chevron-down'" @click="show = !show"></v-btn>
    </v-card-actions>

    <v-expand-transition>
      <div v-show="show">
        <v-divider></v-divider>

        <v-card-text>
          <span class="text-wrap">{{ getComment(trackName ?? '這首你一定會喜歡！') }}</span>
        </v-card-text>
      </div>
    </v-expand-transition>
  </v-card>
</template>

<style scoped>
/* v-card 懸停時顏色變化 */
.hover-card {
  background-color: #e0e0e0; /* 初始為灰色 */
  transition: background-color 0.3s ease;
}

.hover-card:hover {
  background-color: transparent; /* hover後恢復為透明 */
}

.text-wrap {
  word-break: break-word;
  white-space: normal;
}
</style>
