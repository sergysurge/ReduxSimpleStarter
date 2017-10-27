import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { fetchWeather } from '../actions/index';

class SearchBar extends Component {
  constructor(props){
    super(props);

    this.state = { term: ''};

    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onInputChange(e){
    this.setState({term:e.target.value});
  }

  onFormSubmit(e){
    e.preventDefault();

    //get and fetch data
    this.props.fetchWeather(this.state.term);
    //on click of submit, the input changes to empty string
    this.setState({term:''});
  }

  render() {
    return (
      <form onSubmit={this.onFormSubmit} className="input-group">
        <input
          placeholder="get a 5 day forecast in your fav cities"
          className="form-control"
          value={this.state.term}
          onChange={this.onInputChange} />
        <span className="input-group-btn">
          <input type="submit" className="btn btn-secondary" value="Submit" />
        </span>
      </form>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchWeather }, dispatch);
}

//pass null when we dont need to pass state to this container
export default connect(null, mapDispatchToProps)(SearchBar);