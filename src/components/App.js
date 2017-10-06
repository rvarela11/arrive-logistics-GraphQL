import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addMessage, deleteMessage } from '../actions/index';

class App extends Component {

  render() {
    return <div className="mainContainer">
      <h1>Howdy</h1>
    </div>
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
