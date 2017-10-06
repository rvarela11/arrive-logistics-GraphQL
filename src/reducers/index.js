const initialState = {
  apiDataAll: [],
  apiDataSearchResults: [],
  cityInputValue: '',
};

export function reducer (state = initialState, action) {
  switch (action.type) {
    case 'ApiGetAllData':
        return {
          ...state,
          apiDataAll: action.apiData
        };
    case 'ApiDataResponseSearch':
        return {
          ...state,
          apiDataSearchResults: action.apiData
        };
    case 'ChangeCitySearched':
        return {
          ...state,
          cityInputValue: action.city
        };
    default:
        return state;
  }
}
