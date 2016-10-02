var connect = require('react-redux').connect;
var VideoList = require('./VideoList');

const mapStateToProps = (state) => {
  return {
    videos: state.videos
  };
};

const VideoListWrapper = connect(mapStateToProps, null)(VideoList);

module.exports = VideoListWrapper;