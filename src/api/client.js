// @flow
import ApolloClient, { InMemoryCache } from 'apollo-boost';

import { showOffline } from '~/store/modals/actions';
import { store } from '~/store';

const backendOptions = {
  httpGqlEndpoint: 'http://localhost:9002/graphql',
};


const client = new ApolloClient({
  uri: backendOptions.httpGqlEndpoint,

  // Error checking is not needed. We manually catch them in Sagas
  onError: ({
    graphQLErrors, networkError,
    // operation, forward,
  }) => {
    if (graphQLErrors) {
      graphQLErrors.forEach(({ message }) => {
        console.log('==> graphQLErrors', message);
        // switch (message) {
        // case 'UNAUTHENTICATED':
        // const oldHeaders = operation.getContext().headers;
        // operation.setContext({
        //   headers: {
        //     ...oldHeaders,
        //     authorization: getNewToken(),
        //   },
        // });
        // return forward(operation);
        // }
      });
    }

    if (networkError) {
      console.log(`==> [Network error]: ${networkError}`);
      store.dispatch(showOffline(true));
    }
  },
  cache: new InMemoryCache(),
});

export default client;
