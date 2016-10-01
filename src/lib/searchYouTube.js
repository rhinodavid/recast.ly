var searchYouTube = (options, callback) => {
  let url = '';
  let params = {
    part: 'snippet',
    type: 'video',
    id: options.id,
    videoEmbeddable: 'true',
    maxResults: options.max || 5,
    q: options.query,
    key: options.key
  };

  if (options.hasOwnProperty('id')) {
    url = new URL('https://www.googleapis.com/youtube/v3/videos');
  } else {
    url = new URL('https://www.googleapis.com/youtube/v3/search');
  }

  Object.keys(params).forEach(key => url.searchParams.append(key, params[key]));

  let request = new Request(url, {
    method: 'GET'
  });

  fetch(request)
    .then(response => response.json()).then(data => callback(data.items))
    .catch(err => console.error(err));
};

module.exports = searchYouTube;
