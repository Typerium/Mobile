import { all } from 'redux-saga/effects';

import * as welcome from './welcome/saga';
import * as dashboard from './dashboard/saga';

const getListeners = (...args) => args.reduce(
  (acc, nextArg) => [...acc, ...Object.values(nextArg).map(func => func())], [],
);
export default function* rootSaga() {
  yield all(getListeners(
    welcome,
    dashboard,
  ));
}
