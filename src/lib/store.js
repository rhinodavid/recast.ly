var createStore = require('redux').createStore;

///// Redux Actions /////

const updateVideos = (videos) => {
  return { type: 'UPDATE_VIDEOS', videos };
};

const updateCurrentVideo = (video) => {
  return { type: 'UPDATE_CURRENT_VIDEO', video };
};

///// Redux Reducer /////

const initialState = {
  videos: [],
  currentVideo: {}
};

const videoReducer = (state, action) => {
  if (typeof state === 'undefined') {
    return initialState;
  }

  if (action.type === 'UPDATE_VIDEOS') {
    return Object.assign({}, state, {videos: action.videos});
  }

  if (action.type === 'UPDATE_CURRENT_VIDEO') {
    return Object.assign({}, state, {video: action.video});
  }
  return state;
};

let store = createStore(videoReducer);

module.exports = store;