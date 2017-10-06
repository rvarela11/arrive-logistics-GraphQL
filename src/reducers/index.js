const initialState = {
  apiData: [],
  cityInputValue: 'Austin',
};

export function reducer (state = initialState, action) {
  switch (action.type) {
    case 'ApiDataSearchCity':
        return {
          ...state,
          apiData: action.apiData
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
