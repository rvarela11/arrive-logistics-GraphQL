import React, { Component } from 'react';

class SearchBox extends Component {

  state = {
    inputValue: ''
  }

  render() {
    return <div className="container input-field">
      <form onSubmit={this.handleSubmit}>
          <input id="searchbox_form_input" type="search" onChange={this.handleChange}/>
          <label htmlFor="searchbox_form_input">Search by {this.props.title}</label>
      </form>
    </div>
  }

  handleChange = (e) => {
    this.setState({ inputValue: e.target.value});
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.inputValue(this.state.inputValue);

    // Clean inputValue state and input value
    this.setState({ inputValue: ''});
    const searchbox_form_input = document.getElementById("searchbox_form_input");
    searchbox_form_input.value = "";
  }

}

export default SearchBox;
