const {
  SPOTIFY_PLAYLIST_ID: playlistId,
} = process.env;
export default defineEventHandler(async (event) => {
  const tokenResponse = await $fetch<{ access_token: string }>("/api/spotify-token"); // 取得 access_token
  const accessToken = tokenResponse.access_token;

  const playlistResponse = await fetch(
    `https://api.spotify.com/v1/playlists/${playlistId}/tracks?fields=items(track(name,artists(name),external_urls,album(images)))`,
    {
      headers: { Authorization: `Bearer ${accessToken}` },
    }
  );

  if (!playlistResponse.ok) {
    throw new Error(`Error fetching playlist: ${playlistResponse.statusText}`);
  }

  const playlistData = await playlistResponse.json();

  // 驗證回應結構
  if (!playlistData.items || !Array.isArray(playlistData.items)) {
    throw new Error("No valid items found in playlist data.");
  }

  const tracks = playlistData.items.map((item: any) => ({
    name: item.track.name, // 歌曲名稱
    artist: item.track.artists.map((a: any) => a.name).join(", "), // 歌手名稱
    url: item.track.external_urls.spotify, // 歌曲的 Spotify 連結
    albumImage: item.track.album.images[0].url, // 專輯封面圖片
  }));

  return tracks;
});