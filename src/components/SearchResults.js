import React, { Component } from 'react';

//Components
import CarrierCard from './CarrierCard';

class SearchResults extends Component {

  state = {
    show: false,
    apiDataSearchResultsCarrier: []
  }

  render() {
    return <div>
    <div className="search-results-container container" onClick={this.handleClick}>
      <div className="search-results__name">
        <h5>{this.props.name}</h5>
      </div>
      <div className="search-results__locations">
        {this.props.locations.map((location, index) =>
          <h6 key={index}> {location.City} </h6>
        )}
      </div>
    </div>
      {this.state.show &&
        this.state.apiDataSearchResultsCarrier.map((carrier, index) =>
        <CarrierCard key={index} price={carrier.PricePerLoad} contactName={carrier.ContactName} contactEmail={carrier.ContactEmail} contactPhone={carrier.ContactPhone} capabilities={carrier.Capabilities}/>
      )
      }
    </div>
  }

  handleClick = () => {
    // Change the state show to hide/show the carrier's info
    this.setState({show: !this.state.show});

    // If the apiDataSearchResultsCarrier array is empty, make an API call and store the response in the components state
    if(this.state.apiDataSearchResultsCarrier.length <= 0){
      let URL = `http://arrive-interview-api.azurewebsites.net/api/carrierDetails/${this.props.id}`;

      fetch(URL)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const apiDataSearchResultsCarrier = this.state.apiDataSearchResultsCarrier;
        apiDataSearchResultsCarrier.push(data);
        this.setState({apiDataSearchResultsCarrier})
      })
      .catch((error) => {
        console.log(error);
      });
    }
  }

}

export default SearchResults;
