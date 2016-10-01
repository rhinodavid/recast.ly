var Search = require('./Search');

var Nav = (props) => (
  <nav className="navbar">
    <div className="col-md-8">
      <Search handleUserInput={props.handleUserInput} />
    </div>
  </nav>
);

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
module.exports = Nav;
