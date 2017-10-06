export const ApiGetAllData = 'ApiGetAllData';
export function apiGetAllData (apiData) {
  return {
    type: ApiGetAllData,
    apiData
  }
}

export const ApiDataResponseSearch = 'ApiDataResponseSearch';
export function apiDataResponseSearch (apiData) {
  return {
    type: ApiDataResponseSearch,
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
