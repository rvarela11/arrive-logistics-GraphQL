import React, { Component } from 'react';
import { connect } from 'react-redux';

//Actions
import { apiGetAllData, apiDataResponseSearch, changeCitySearched } from '../actions/index';

//Components
import SearchBoxAutocomplete from './search-box-autocomplete';
import ShowResults from './show-results';
import { getAllCities } from '../utils';

class App extends Component {

  componentDidMount () {
    //API call to get all the data.
    //This will be used to fill in the search box autocomplete cities
    let URL = 'http://arrive-interview-api.azurewebsites.net/api/carriers';

    fetch(URL)
    .then(res => res.json())
    .then(data => this.props.apiGetAllData(data))
    .catch((error) => console.log(error));
  }

  render() {
    return <div>
      <header className="header-image"></header>
      <div className="container">
        <SearchBoxAutocomplete inputValue={this.handleSearchByCity} allCities={getAllCities(this.props.apiDataAll)}/>
        <ShowResults cityInputValue={this.props.cityInputValue} apiDataSearchResults={this.props.apiDataSearchResults}/>
      </div>
    </div>
  }

  // Funciton will pass the value given from the search to make an API call.
  // It will also display the value being search for under 'Results for ...'
  handleSearchByCity = (inputValue) => {
    this.props.changeCitySearched(inputValue);

    //API call to get all the data from the searchbox
    let URL = `http://arrive-interview-api.azurewebsites.net/api/carriers/${inputValue}`;

    fetch(URL)
    .then(res => res.json())
    .then(data => this.props.apiDataResponseSearch(data))
    .catch((error) => console.log(error));
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
