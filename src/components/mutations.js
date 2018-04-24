import gql from 'graphql-tag';

export const updateCityInputValue = gql`
    mutation updateCityInputValue($cityInputValue: String) {
        updateCityInputValue(cityInputValue: $cityInputValue) @client
    }
`;
