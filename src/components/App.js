import React, { Component } from 'react';
import { connect } from 'react-redux';

//Actions
import { apiDataSearchCity, changeCitySearched } from '../actions/index';

//Components
import Searchbox from './Searchbox';
import SearchResults from './SearchResults';

class App extends Component {

  render() {
    console.log(this.props.apiData);
    return <div>
      <header className="header-image"></header>
      <div className="container">
        <Searchbox inputValue={this.handleSearchByCity}/>
        <h5 className="search-results-title">Results for <span>{this.props.cityInputValue}</span></h5>
        {this.props.apiData.map((carrier, index) =>
          <SearchResults key={Math.random()} id={carrier.Id} name={carrier.Name}/>
        )}
      </div>
    </div>
  }

  handleSearchByCity = (city) => {
    this.adjustCitySearched(city);
    const URL = `http://arrive-interview-api.azurewebsites.net/api/carriers/${city}`;

    fetch(URL)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      this.props.apiDataSearchCity(data);
    })
    .catch((error) => {
      console.log(error);
    });
  }

  adjustCitySearched = (city) => {
    this.props.changeCitySearched(city);
  }
}

const mapDispatchToProps = (dispatch) => {
    return {
        apiDataSearchCity: (apiData) => dispatch(apiDataSearchCity(apiData)),
        changeCitySearched: (city) => dispatch(changeCitySearched(city)),
    };
};

const mapStateToProps = (state) => {
    return {
        apiData: state.apiData,
        cityInputValue: state.cityInputValue,
    };
};

export default connect(mapStateToProps, mapDispatchToProps) (App);
