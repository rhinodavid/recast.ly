class Search extends React.Component {
  handleChange(e) {
    this.props.handleUserInput(this.refs.searchInput.value);
  }

  render() {
    return (<div className="search-bar form-inline">
      <input className="form-control" type="text" ref="searchInput" onChange={this.handleChange.bind(this)}/>
      <button className="btn hidden-sm-down">
        <span className="glyphicon glyphicon-search"></span>
      </button>
    </div>);
  }
}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.Search = Search;
