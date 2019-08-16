// @flow
import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { StatusBar } from 'react-native';
// import { ApolloClient } from 'apollo-client';
import { ApolloProvider } from 'react-apollo';
// import { HttpLink } from 'apollo-link-http';
// import { InMemoryCache } from 'apollo-cache-inmemory';

import {
  ErrorConnect, ResetPassword, PhoneCodes, Selection,
} from '~/components/Modals';
import { DashboardLeft, DashboardRight } from '~/components/Drawer';
import { RootNavigator, NavigationService } from '~/navigation';
import { store, persistor } from '~/store';
import client from '~/api/client';

// const client = new ApolloClient({
//   link: new HttpLink({ uri: 'http://localhost:3000' }),
//   cache: new InMemoryCache(),
// });

const App = () => (
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <ApolloProvider client={client}>
        <StatusBar barStyle="light-content" backgroundColor="#15171E" />
        <RootNavigator
          ref={navigatorRef => NavigationService.setTopLevelNavigator(navigatorRef)}
        />
        {/* modals */}
        <ErrorConnect />
        <ResetPassword />
        <PhoneCodes />
        <Selection />
        {/* Drawer */}
        <DashboardLeft />
        <DashboardRight />
      </ApolloProvider>
    </PersistGate>
  </Provider>
);

export default App;
