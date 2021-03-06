var VideoPlayer = (props) => {
  let videoId = props.video.id ? props.video.id.videoId : '';

  if (props.video.kind === 'youtube#video') {
    // controlling for the edge case where the data is coming
    // straight from a youtube search based on videoId
    //
    // this occurs when the application loads with no videos in
    // the store but a videoId specified in the URL
    
    videoId = props.video.id;
  }

  let title = props.video.snippet ? props.video.snippet.title : '';
  let description = props.video.snippet ? props.video.snippet.description : '';
  return (
    <div className="video-player">
      <div className="embed-responsive embed-responsive-16by9">
        <iframe className="embed-responsive-item" src={`https://www.youtube.com/embed/${videoId}`} allowFullScreen></iframe>
      </div>
      <div className="video-player-details">
        <h3>{title}</h3>
        <div>{description}</div>
      </div>
    </div>
  );
};

// PropTypes tell other developers what `props` a component expects
// Warnings will be shown in the console when the defined rules are violated
// VideoPlayer.propTypes = {
//   video: React.PropTypes.object.isRequired
// };

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
module.exports = VideoPlayer;
