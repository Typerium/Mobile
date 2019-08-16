import { combineReducers } from 'redux';
import AsyncStorage from '@react-native-community/async-storage';
import { persistReducer } from 'redux-persist';

import modals from './modals/reducer';
import welcome from './welcome/reducer';
import tokens from './tokens/reducer';
import dashboard from './dashboard/reducer';

const rootPersistConfig = {
  key: 'root',
  storage: AsyncStorage,
};

export default combineReducers({
  modals,
  welcome,
  dashboard,
  tokens: persistReducer(rootPersistConfig, tokens),
});
