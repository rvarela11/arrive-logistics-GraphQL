import React, { Component } from 'react';

class SearchResults extends Component {

  render() {
    return (
      <ul>
        <li>{this.props.name}</li>
        <li>{this.props.city}</li>
        <li>{this.props.state}</li>
      </ul>
    )
  }

}

export default SearchResults;
