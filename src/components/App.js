import React, { Component } from 'react';
import { connect } from 'react-redux';

//Actions
import { addMessage, deleteMessage } from '../actions/index';

//Components
import Searchbox from './Searchbox';

class App extends Component {

  render() {
    return <div>
      <header className="header-image"></header>
      <div className="main-container container">
        <Searchbox inputValue={this.handleSearchByCity}/>
      </div>
      <button onClick={this.handleSearchCityClick}>Click</button>
    </div>
  }

  handleSearchByCity = (city) => {
    console.log(city);

    // const URL = `http://arrive-interview-api.azurewebsites.net/api/carriers/${city}`;
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

const mapDispatchToProps = (dispatch) => {
    return {
        addMessage: (inputMessage) => dispatch(addMessage(inputMessage)),
        deleteMessage: (index) => dispatch(deleteMessage(index))
    };
};

const mapStateToProps = (state) => {
    return {
        messages: state.messages
    };
};

export default connect(mapStateToProps, mapDispatchToProps) (App);
