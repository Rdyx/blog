// streamerUserLogin is set from default page before this script is called
const twitchApiUrl = 'https://api.twitch.tv/helix/streams?user_login=' + streamerUserLogin;

// https://dev.twitch.tv/docs/authentication
const clientId = 'fg2dc3fmo4eziwfs5xqrl5idv6wah7';
const token = 'hp8l8yt8ikh1xhpe9x8ivjftptmq43';

const headers = new Headers();
headers.append("Client-Id", clientId);
headers.append("Authorization", "Bearer " + token);

const requestInit = { method: 'GET', headers: headers };
const request = new Request(twitchApiUrl,requestInit);

// Fetching twitch API
fetch(request, requestInit)
.then(function(response) {
  return response.json();
}).then(jsonResponse => {
  const data = jsonResponse['data'][0];

  if (data) {
    // List because we are showing 2 circles (responsive)
    twitchStatusList = document.querySelectorAll('#twitch-status');

    // Let user know stream is live with a green blinking circle
    twitchStatusList.forEach(status => {
      status.classList.replace('red-circle', 'green-circle');
      status.classList.add('blink-circle');
    });
  }
});