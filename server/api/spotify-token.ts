const {
  SPOTIFY_CLIENT_ID: clientId,
  SPOTIFY_CLIENT_SECRET: clientSecret,
} = process.env;

export default defineEventHandler(async (event) => {
  const response = await fetch("https://accounts.spotify.com/api/token", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      Authorization:
        "Basic " + Buffer.from(clientId + ":" + clientSecret).toString("base64"),
    },
    body: "grant_type=client_credentials",
  });

  if (!response.ok) {
    throw new Error("獲取 Spotify Token 失敗");
  }

  const data = await response.json();
  return { access_token: data.access_token };
});
