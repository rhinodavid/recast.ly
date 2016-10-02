var createStore = require('redux').createStore;

///// Redux Reducer /////

const initialState = {
  videos: []
};

const videoReducer = (state, action) => {
  if (typeof state === 'undefined') {
    return initialState;
  }

  if (action.type === 'UPDATE_VIDEOS') {
    return Object.assign({}, state, {videos: action.videos});
  }


  return state;
};

let store = createStore(videoReducer);

module.exports = store;