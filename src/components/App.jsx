var Nav = require('./Nav');
var VideoPlayer = require('./VideoPlayer');
var VideoList = require('./VideoList');
var searchYouTube = require('../lib/searchYouTube');


class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      videos: [],
      currentVideo: {}
    };
    this.handleUserInput = _.throttle(this.handleUserInput, 500);
  }

  componentDidMount() {
    this.searchYouTube('');
  }

  componentWillReceiveProps(nextProps) {
    console.log(nextProps);
  }

  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <Nav handleUserInput={this.handleUserInput.bind(this)} />
        </div>

        <div className="row">
          <div className="col-md-8">
            <VideoPlayer video={this.state.currentVideo}/>
          </div>
          <div className="col-md-4">
            <VideoList videos={this.state.videos} handleClick={this.handleClick.bind(this)}/>
          </div>
        </div>
      </div>
    );
  }

  handleClick(video) {
    // reset the current video to the one just clicked
    this.setState({currentVideo: video});
  }

  handleUserInput(searchQuery) {
    this.searchYouTube(searchQuery);
  }

  searchYouTube(searchQuery) {
    searchYouTube({
      key: window.YOUTUBE_API_KEY,
      query: searchQuery,
      max: 5
    }, (videos) => this.setState({videos}));
  }

}





// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
module.exports = App;
