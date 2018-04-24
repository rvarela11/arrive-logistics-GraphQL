const axios = require('axios');

const carrierListByCityResolver = (parentValue, args) =>
    axios.get(`http://arrive-interview-api.azurewebsites.net/api/carriers/${args.value}`)
    .then(response => response.data)
    .catch(console.log('Error'));

module.exports = {
    carrierListByCityResolver
};
