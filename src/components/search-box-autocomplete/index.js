// Vendors
import React, { Component } from 'react';

// Material-ui
import AutoComplete from 'material-ui/AutoComplete';

class SearchBoxAutocomplete extends Component {

  state = {
    inputValue: ''
  }

  render() {
    return <div className="container">
      <AutoComplete
        fullWidth={true}
        floatingLabelText='Search by city'
        dataSource={this.props.allCities}
        filter={AutoComplete.caseInsensitiveFilter}
        onUpdateInput={(searchText) => {this.setState({ inputValue: searchText})}}
        onNewRequest={this.handleSubmit}
      />
    </div>
  }

  handleSubmit = () => {
    this.props.inputValue(this.state.inputValue);
  }

}

export default SearchBoxAutocomplete;
