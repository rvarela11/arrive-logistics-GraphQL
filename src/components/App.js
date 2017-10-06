import React, { Component } from 'react';
import { connect } from 'react-redux';

//Actions
import { apiDataSearchCity } from '../actions/index';

//Components
import Searchbox from './Searchbox';

class App extends Component {

  render() {
    console.log(this.props.apiData);
    return <div>
      <header className="header-image"></header>
      <div className="main-container container">
        <Searchbox inputValue={this.handleSearchByCity}/>
      </div>
      <button onClick={this.handleSearchCityClick}>Click</button>
    </div>
  }

  handleSearchByCity = (city) => {

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
}

const mapDispatchToProps = (dispatch) => {
    return {
        apiDataSearchCity: (apiData) => dispatch(apiDataSearchCity(apiData)),
    };
};

const mapStateToProps = (state) => {
    return {
        apiData: state.apiData
    };
};

export default connect(mapStateToProps, mapDispatchToProps) (App);
