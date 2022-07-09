const authEndpoint = "htpps://accounts.spotify.com/authoriza?";
const clientId = "ced9a75c43114a14b906dfda8c3b19a2";
const redirectUri = "http://localhost:3000";
const scopes = ["user-follow-read", "playlist-read-private"];

export const loginEndpoint = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join(
  "%20"
)}&response_type=token&show_dialog=true`;
