import React, { Component } from 'react';

class SearchResults extends Component {

  render() {
    return <div className="search-results-container container">
      <div className="search-results__name">
        <h5>{this.props.name}</h5>
      </div>
      <div className="search-results__locations">
        {this.props.locations.map((location, index) =>
          <h6 key={index}> {location.City} </h6>
        )}
      </div>
    </div>
  }

}

export default SearchResults;
