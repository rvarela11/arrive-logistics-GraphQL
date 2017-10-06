import React, { Component } from 'react';

class Dropdown extends Component {

  state = {
    valueSelected: ""
  }

  render() {
    return (
      <select className="browser-default" value={this.state.valueSelected} onChange={this.handleValueSelected}>
        <option disabled={true}>{this.props.title}</option>
        { this.props.arrayValues[0].map((optionValue, index) =>
          <option key={index} value={optionValue}> {optionValue} </option>
        )}
      </select>
  )
  }

  handleValueSelected = (e) => {
    this.props.valueSelected(e.target.value);
  }

}

export default Dropdown;
