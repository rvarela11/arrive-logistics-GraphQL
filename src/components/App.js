import React, { Component } from 'react';

//GraphQL
import { Query, Mutation } from 'react-apollo';

//Components
import SearchBoxAutocomplete from './search-box-autocomplete';
import ShowResults from './show-results';

import { getAllCities } from '../utils';
import { getAllCitiesFromAPI, getCarrierListBySearch, getCityInputValueFromState } from './queries';
import { updateCityInputValue } from './mutations';
import { defaults } from '../state';

class App extends Component {

  render() {
    return (
      <Query query={getAllCitiesFromAPI}>
        {({ data: { Cities }, loading }) => {
          if (loading) {
            Cities = defaults.allCitiesFromAPI;
          }
          return (
            <Query query={getCityInputValueFromState}>
              {({ data: { cityInputValue }, loading }) => {
                if (loading) {
                  cityInputValue = defaults.cityInputValue;
                }
                  return (
                    <Query
                      query={getCarrierListBySearch}
                      variables={{ value: cityInputValue }}
                      skip={cityInputValue === ''}
                    >
                      {({ data: { CarrierListByCity }, loading }) => {
                        if (loading) {
                          CarrierListByCity = [];
                        }
                        return <div>
                            <header className="header-image"></header>
                            <Mutation
                              mutation={updateCityInputValue}
                            >
                              {updateCityInputValue => (
                                <div className="container">
                                  <SearchBoxAutocomplete inputValue={(inputValue) => updateCityInputValue({ variables: { cityInputValue: inputValue } })} allCities={getAllCities(Cities)}/>
                                  <ShowResults cityInputValue={cityInputValue} apiDataSearchResults={CarrierListByCity}/>
                                </div>
                              )}
                            </Mutation>
                        </div>
                      }}
                    </Query>
                  )
              }}
            </Query>
          )
        }}
      </Query>
    )
  }
}

export default App;
