import gql from 'graphql-tag';

export const getAllCitiesFromAPI = gql`
  {
    Cities {
      Locations {
        City
        State
      }
    }
  }
`;

export const getCarrierListBySearch = gql`
    query getCarrierListBySearch($value: String) {
        CarrierListByCity (value: $value) {
          Id
          Name
          Locations {
            City
            State
          }
        }
    }
`;

export const getCityInputValueFromState = gql`
    query getCityInputValueFromState {
        cityInputValue @client
    }
`;
