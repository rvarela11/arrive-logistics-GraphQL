import React, { Component } from 'react';

//Components
import CarrierCard from './CarrierCard';

class SearchResults extends Component {

  state = {
    show: false
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
      {this.state.show && <CarrierCard/>}
    </div>
  }

  handleClick = () => {
    this.setState({show: !this.state.show});
    // let URL = `http://arrive-interview-api.azurewebsites.net/api/carrierDetails/${this.props.id}`;
    //
    // fetch(URL)
    // .then((response) => {
    //   return response.json();
    // })
    // .then((data) => {
    //   console.log(data);
    // })
    // .catch((error) => {
    //   console.log(error);
    // });
  }

}

export default SearchResults;
