const axios = require('axios');

const URL = 'http://arrive-interview-api.azurewebsites.net/api/carriers';

const citiesResolver = () =>
    axios.get(URL)
    .then(response => response.data)
    .catch(console.log('Error'));

module.exports = {
    citiesResolver
};
