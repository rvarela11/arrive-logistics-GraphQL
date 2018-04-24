import React, { Component } from 'react';

//GraphQL
import { graphql, compose } from 'react-apollo';

//Components
import SearchBoxAutocomplete from './search-box-autocomplete';
import ShowResults from './show-results';

import { getAllCities } from '../utils';
import { getAllCitiesFromAPI, getCarrierListBySearch, getCityInputValueFromState } from './queries';
import { updateCityInputValue } from './mutations';
import { defaults } from '../state';

class App extends Component {

  render() {
    const {
      allCitiesFromAPI,
      apiDataSearchResults,
      cityInputValue
    } = this.props;
    return <div>
      <header className="header-image"></header>
      <div className="container">
        <SearchBoxAutocomplete inputValue={this.handleSearchByCity} allCities={getAllCities(allCitiesFromAPI)}/>
        <ShowResults cityInputValue={cityInputValue} apiDataSearchResults={(apiDataSearchResults) ? apiDataSearchResults : []}/>
      </div>
    </div>
  }

  // Funciton will pass the value given from the search to make an API call.
  // It will also display the value being search for under 'Results for ...'
  handleSearchByCity = (inputValue) => {
    this.props.updateCityInputValue(inputValue);
  }

}

export default compose(
  // Queries
  graphql(getAllCitiesFromAPI, {
        props: ({ data }) => {
          if (data.loading) {
            return {
              allCitiesFromAPI: defaults.allCitiesFromAPI
            }
          }
          if (data.error) {
            return { error: data.error }
          }
            return {
                allCitiesFromAPI: data.Cities,
            };
        }
    }),
    graphql(getCityInputValueFromState, {
        props: ({ data }) => {
            if (data.loading) {
                return {
                    cityInputValue: defaults.cityInputValue,
                };
            }
            return {
                cityInputValue: data.cityInputValue
            };
        }
    }),
    graphql(getCarrierListBySearch, {
        options: props => ({
            variables: {
                value: props.cityInputValue
            },
            fetchPolicy: 'network-only'
        }),
        skip: props => props.cityInputValue === '',
        props: ({ data }) => {
          if (data.loading) {
            return {
              apiDataSearchResults: []
            }
          }
          if (data.error) {
            return { error: data.error }
          }
            return {
                apiDataSearchResults: data.CarrierListByCity,
            };
        }
    }),
    // Mutations
    graphql(updateCityInputValue, {
        props: ({ mutate }) => ({
            updateCityInputValue: (cityInputValue) => {
                mutate({ variables: { cityInputValue } });
            }
        })
    })
)(App);
