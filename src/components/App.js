import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addMessage, deleteMessage } from '../actions/index';

class App extends Component {

  render() {
    return <div className="mainContainer">
      <header className="header-image"></header>
      <button onClick={this.handleSearchCityClick}>Click</button>
    </div>
  }
  handleSearchCityClick = () => {
    const URL = 'http://arrive-interview-api.azurewebsites.net/api/carriers';

    fetch(URL)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data);
    })
    .catch((error) => {
      console.log(error);
    });
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
