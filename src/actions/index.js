export const ApiDataSearchCity = 'ApiDataSearchCity';
export function apiDataSearchCity (apiData) {
  return {
    type: ApiDataSearchCity,
    apiData
  }
}

export const ChangeCitySearched = 'ChangeCitySearched';
export function changeCitySearched (city) {
  return {
    type: ChangeCitySearched,
    city
  }
}
