// Function to get all the cities
export const getAllCities = (apiDataAll) => {
  const allCitiesArray = [];
  const allCities = [];

  // For each loop to get locations array
  apiDataAll.forEach((carrier) => {
    carrier.Locations.forEach((location) => {
      allCitiesArray.push(location.City);
    });
  });

  // Reduce function to not get any duplicate cities
  const allCitiesObject = allCitiesArray.reduce((obj,item) => {
    if (!obj[item]){
      obj[item] = 0;
    }
    obj[item]++;
    return obj;
  },{});

  // Organize all the cities by alphabetical order
  // Set them in an array of objects
  Object.keys(allCitiesObject).sort().forEach((city) => {
    allCities.push({
      text: city,
      value: city
    })
  })

  return allCities;
}
