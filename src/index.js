var Router = require('react-router').Router;
var Route = require('react-router').Route;
var Link = require('react-router').Link;
var browserHistory = require('react-router').browserHistory;

var App = require('./components/App');
var VideoPlayer = require('./components/VideoPlayer');

var Provider = require('react-redux').Provider;

var store = require('./lib/store');


ReactDOM.render((
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/(:videoId)" component={App} />
    </Router>
  </Provider>
), document.getElementById('app'));
