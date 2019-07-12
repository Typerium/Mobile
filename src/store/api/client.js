// @flow
import ApolloClient, { InMemoryCache } from 'apollo-boost';

const backendOptions = {
  httpGqlEndpoint: 'http://localhost:3000',
};


const client = new ApolloClient({
  uri: backendOptions.httpGqlEndpoint,

  // Error checking is not needed. We manually catch them in Sagas
  // onError: ({ graphQLErrors, networkError }) => {
  //   if (graphQLErrors) {
  //     graphQLErrors.map(
  //       ({ message }) => store.dispatch(
  //         setError(`[GraphQL error]: Message: ${message}`),
  //       ),
  //     );
  //   }

  //   if (networkError) {
  //     store.dispatch(
  //       setError(`[Network error]: ${networkError}`),
  //     );
  //   }
  // },
  cache: new InMemoryCache(),
});

export default client;
