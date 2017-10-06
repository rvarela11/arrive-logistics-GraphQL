const initialState = {
  apiData: []
};

export function reducer (state = initialState, action) {
  switch (action.type) {
    case 'ApiDataSearchCity':
        return {
          ...state,
          apiData: action.apiData
        };
    default:
        return state;
  }
}
