// @flow
import React from 'react';
import { Provider } from 'react-redux';
import { StatusBar } from 'react-native';
import { ApolloClient } from 'apollo-client';
import { ApolloProvider } from 'react-apollo';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';

import { ErrorConnect, ResetPassword } from 'components/Modals';
import { RootNavigator, NavigationService } from 'navigation';
import store from 'store';

const client = new ApolloClient({
  link: new HttpLink({ uri: 'http://localhost:3000' }),
  cache: new InMemoryCache(),
});

const App = () => (
  <ApolloProvider client={client}>
    <Provider store={store}>
      <StatusBar barStyle="light-content" />
      <RootNavigator
        ref={navigatorRef => NavigationService.setTopLevelNavigator(navigatorRef)}
      />
      {/* modals */}
      <ErrorConnect />
      <ResetPassword />
    </Provider>
  </ApolloProvider>
);

export default App;
