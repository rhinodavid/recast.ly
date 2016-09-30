var searchYouTube = (options, callback) => {
  $.ajax({
    type: 'GET',
    url: 'https://www.googleapis.com/youtube/v3/search',
    cache: false,
    data: {
      part: 'snippet',
      type: 'video',
      videoEmbeddable: 'true',
      maxResults: options.max || 5,
      q: options.query,
      key: options.key
    },
    success: (data) => {
      callback(data.items);
    },
    error: (err) => {
      console.error(err);
    }
  });
};

window.searchYouTube = searchYouTube;
