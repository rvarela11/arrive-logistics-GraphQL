const express = require('express');
const bodyParser = require('body-parser');
const { graphqlExpress, graphiqlExpress } = require('apollo-server-express');
const schema = require('./schema/schema');

// Initialize the app
const app = express();
const port = process.env.PORT || 5000;

app.use(‘/’, express.static(`${__dirname}/client/build`));
// The GraphQL endpoint
app.use('/graphql', bodyParser.json(), graphqlExpress({ schema }));

// GraphiQL, a visual editor for queries
app.use('/graphiql', graphiqlExpress({ endpointURL: '/graphql' }));

// Start the server
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
