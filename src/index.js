var Router = require('react-router').Router;
var Route = require('react-router').Route;
var Link = require('react-router').Link;
var browserHistory = require('react-router').browserHistory;

var App = require('./components/App');
var VideoPlayer = require('./components/VideoPlayer');

// ReactDOM.render(
//   <App />,
//   document.getElementById('app')
// );

ReactDOM.render((
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <Route path=":videoId" component={App} />
    </Route>
  </Router>
), document.getElementById('app'));