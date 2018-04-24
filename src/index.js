import React from 'react';
import ReactDOM from 'react-dom';

// Material UI
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

// Apollo
import { ApolloProvider } from 'react-apollo';
import { ApolloClient } from 'apollo-client';
import { ApolloLink } from 'apollo-link';
import { createHttpLink } from 'apollo-link-http';
import { withClientState } from 'apollo-link-state';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { onError } from 'apollo-link-error';
import apolloLogger from 'apollo-link-logger';
import { defaults, resolvers } from './state';

// Component
import App from './components/App'

const cache = new InMemoryCache();
const stateLink = withClientState({ resolvers, cache, defaults });

const link = ApolloLink.from([
    onError(({ graphQLErrors, networkError }) => {
        if (graphQLErrors) {
            graphQLErrors.forEach(({ message, locations, path }) => {
                // eslint-disable-next-line no-console
                console.log(`[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`);
            });
        }
        // eslint-disable-next-line no-console
        if (networkError) console.log(`[Network error]: ${networkError}`);
    }),
    apolloLogger,
    stateLink,
    createHttpLink({
        uri: '/graphql',
        credentials: 'same-origin'
    })
]);

const client = new ApolloClient({
    cache,
    link
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <MuiThemeProvider>
      <App />
    </MuiThemeProvider>
  </ApolloProvider>,
  document.getElementById('root')
);
