import React, { Component } from 'react';

//Components
import SearchResults from './SearchResults';

class ShowResults extends Component {

  render() {
    // Condition to only pass array data to the SearchResults Component
    let apiDataResults = [];
    let showError = false;
    if (Array.isArray(this.props.apiDataSearchResults)) {
      apiDataResults = this.props.apiDataSearchResults;
      showError = false;
    } else {
      apiDataResults = [];
      showError = true;
    }

    return <div>
      <h5 className="search-results-title">Results for <span>{this.props.cityInputValue}</span></h5>
      {showError && <h6 className="red-text error-search-results">No carriers found with provided city</h6>}
      {apiDataResults.map((carrier, index) =>
        <SearchResults key={Math.random()} id={carrier.Id} name={carrier.Name} locations={carrier.Locations}/>
      )}
    </div>
  }

}

export default ShowResults;
