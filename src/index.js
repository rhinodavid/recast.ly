var App = require('./components/App');
var searchYouTube = require('./lib/searchYouTube');

ReactDOM.render(
  <App searchYouTube={searchYouTube} />,
  document.getElementById('app')
);