import React from 'react';

//Components
import SearchResults from '../SearchResults';

const ShowResults = props => {
  // Condition to only pass array data to the SearchResults Component
  let apiDataResults = [];
  let showError = true;

  if (Array.isArray(props.apiDataSearchResults)) {
    apiDataResults = props.apiDataSearchResults;
    showError = false;
  }

  return <div>
    <h5 className="search-results-title">Results for <span>{props.cityInputValue}</span></h5>
    {showError && <h6 className="red-text error-search-results">No carriers found with provided city</h6>}
    {apiDataResults.map((carrier, index) =>
      <SearchResults key={index} id={carrier.Id} name={carrier.Name} locations={carrier.Locations}/>
    )}
  </div>

}

export default ShowResults;
