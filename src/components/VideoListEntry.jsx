var Link = require('react-router').Link;

var VideoListEntry = (props) => {

  const handleTitleClick = (e) => props.handleClick(props.video);

  return ( <div className="video-list-entry">
    <div className="media-left media-middle">
      <img className="media-object" src={props.video.snippet.thumbnails.default.url} alt="" />
    </div>
    <div className="media-body">
      <Link to="/avideoId">{props.video.snippet.title}</Link>
      <div className="video-list-entry-detail">{props.video.snippet.description}</div>
    </div>
  </div>);
};

// PropTypes tell other developers what `props` a component expects
// Warnings will be shown in the console when the defined rules are violated
VideoListEntry.propTypes = {
  video: React.PropTypes.object.isRequired
};

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
module.exports = VideoListEntry;

      // <div className="video-list-entry-title" onClick={handleTitleClick}>{props.video.snippet.title}</div>