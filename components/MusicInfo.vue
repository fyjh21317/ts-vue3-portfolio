<script setup lang="ts">
// 定義傳入的 prop 類型
interface Track {
  trackName: string
  artist: string
  spotifyUrl: string
  albumImage: string
}

// 接收外部傳入的數據
const props = defineProps<Track>()
</script>

<style scoped>
.card {
  width: 300px;
  border-radius: 12px;
  overflow: hidden;
  background-color: #fff;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s;
}

.player-card__image {
  width: 100%;
  height: 180px;
  overflow: hidden;
}

.player-card__img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.player-card__info {
  padding: 16px;
}

.track-name {
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 8px;
}

.artist-name {
  font-size: 14px;
  color: #666;
  margin-bottom: 12px;
}

.spotify-link {
  display: inline-block;
  padding: 8px 12px;
  background-color: #1db954;
  color: white;
  text-decoration: none;
  border-radius: 4px;
  text-align: center;
}

.spotify-link:hover {
  background-color: #1ed760;
}
</style>

<template>
  <div class="card player-card">
    <!-- 封面圖片 -->
    <div class="player-card__image">
      <img :src="albumImage" alt="Album Cover" class="player-card__img" />
    </div>

    <!-- 音樂資訊區域 -->
    <div class="player-card__info">
      <h3 class="track-name">{{ trackName }}</h3>
      <p class="artist-name">{{ artist }}</p>
      <a :href="spotifyUrl" target="_blank" class="spotify-link">Listen on Spotify</a>
    </div>
  </div>
</template>
