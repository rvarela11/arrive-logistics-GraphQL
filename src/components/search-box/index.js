import React, { Component } from 'react';

class SearchBox extends Component {

  state = {
    inputValue: ''
  }

  render() {
    return <div className="container input-field">
      <form onSubmit={this.handleSubmit}>
          <input id="searchbox_form_input" type="search" value={this.state.inputValue} onChange={this.handleChange} />
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

    //Remove the focus from the search box
    e.target.children[0].blur();
  }

}

export default SearchBox;
