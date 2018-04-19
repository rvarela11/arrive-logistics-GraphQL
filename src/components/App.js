import React, { Component } from 'react';
import { connect } from 'react-redux';

//Actions
import { apiGetAllData, apiDataResponseSearch, changeCitySearched } from '../actions/index';

//Components
import SearchBox from './SearchBox';
import Dropdown from './Dropdown';
import ShowResults from './show-results';

class App extends Component {

  componentDidMount () {
    //API call to get all the data.
    //This will be used to fill in the dropdown cities option tags.
    let URL = 'http://arrive-interview-api.azurewebsites.net/api/carriers';

    fetch(URL)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      this.props.apiGetAllData(data);
    })
    .catch((error) => {
      console.log(error);
    });
  }

  render() {
    return <div>
      <header className="header-image"></header>
      <div className="container">
        <SearchBox inputValue={this.handleSearchByCity} title="city"/>
        {this.selectCity()}
        <ShowResults cityInputValue={this.props.cityInputValue} apiDataSearchResults={this.props.apiDataSearchResults}/>
      </div>
    </div>
  }

  // Function to only get the cities.
  selectCity = () => {
    const allCitiesArray = [];
    const allCities = [];

    // For each loop to get locations array
    this.props.apiDataAll.forEach((carrier) => {
      carrier.Locations.forEach((location) => {
        allCitiesArray.push(location.City);
      });
    });

    // Reduce function to not get any duplicate cities
    const allCitiesObject = allCitiesArray.reduce((obj,item) => {
      if (!obj[item]){
        obj[item] = 0;
      }
      obj[item]++;
      return obj;
    },{});

    // Organize all the cities by alphabetical order
    allCities.push(Object.keys(allCitiesObject).sort());

    return <div className="dropdown-container container">
      <Dropdown title="City" arrayValues={allCities} valueSelected={this.handleSearchByCity}/>
    </div>
  }
  // Funciton will pass the value given from the search or dropdown to make an API call.
  // It will also display the value being search for under 'Results for ...'
  handleSearchByCity = (inputValue) => {
    this.ApiGetSearchResults(inputValue);
    this.props.changeCitySearched(inputValue);
  }
  ApiGetSearchResults = (inputValue) => {
    //API call to get all the data from the searchbox or dropdown
    let URL = `http://arrive-interview-api.azurewebsites.net/api/carriers/${inputValue}`;

    fetch(URL)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      this.props.apiDataResponseSearch(data);
    })
    .catch((error) => {
      console.log(error);
    });
  }

}

const mapDispatchToProps = (dispatch) => {
    return {
        apiGetAllData: (apiData) => dispatch(apiGetAllData(apiData)),
        apiDataResponseSearch: (apiData) => dispatch(apiDataResponseSearch(apiData)),
        changeCitySearched: (city) => dispatch(changeCitySearched(city)),
    };
};

const mapStateToProps = (state) => {
    return {
        apiDataAll: state.apiDataAll,
        apiDataSearchResults: state.apiDataSearchResults,
        cityInputValue: state.cityInputValue,
    };
};

export default connect(mapStateToProps, mapDispatchToProps) (App);
