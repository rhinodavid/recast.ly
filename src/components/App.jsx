const Nav = require('./Nav');
const VideoPlayer = require('./VideoPlayer');
const VideoListWrapper = require('./VideoListWrapper');
const searchYouTube = require('../lib/searchYouTube');

const connect = require('react-redux').connect;


///// Redux Actions /////

const updateVideos = (videos) => {
  return { type: 'UPDATE_VIDEOS', videos };
};


class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      currentVideo: {}
    };
    this.handleUserInput = _.throttle(this.handleUserInput, 500);
  }

  componentDidMount() {
    this.searchYouTube('');
  }


  componentWillReceiveProps(nextProps) {
    if (nextProps.params.videoId !== undefined) {
      let selectedVideoId = nextProps.params.videoId;
      let localVideo = this.getCachedVideo(selectedVideoId);

      if (localVideo) {
        this.setState({currentVideo: localVideo});
      } else {
        this.getYouTubeVideo(selectedVideoId, (video) => {
          this.setState({currentVideo: video});
        });
      }
    }
  }

  getCachedVideo(videoId) {
    return this.props.videos.reduce((selectedVideo, video) => {
      if (video.id.videoId === videoId) {
        return video;
      }
      return selectedVideo;
    }, null);
  }

  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <Nav handleUserInput={this.handleUserInput.bind(this)} />
        </div>

        <div className="row">
          <div className="col-md-8">
            <VideoPlayer video={this.state.currentVideo} />
          </div>
          <div className="col-md-4">
            <VideoListWrapper />
          </div>
        </div>
      </div>
    );
  }

  handleUserInput(searchQuery) {
    this.searchYouTube(searchQuery);
  }

  searchYouTube(searchQuery) {
    searchYouTube({
      key: window.YOUTUBE_API_KEY,
      query: searchQuery,
      max: 5
    }, (videos) => this.props.dispatch(updateVideos(videos)));
  }

  getYouTubeVideo(videoId, callback) {
    debugger;
    searchYouTube({
      key: window.YOUTUBE_API_KEY,
      id: videoId,
      max: 1
    }, (videos) => callback(videos[0]));
  }

}

const mapStateToProps = (state) => {
  return {
    videos: state.videos
  };
};

App = connect(mapStateToProps, null)(App);


// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
module.exports = App;
