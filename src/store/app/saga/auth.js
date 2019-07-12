// @flow
import {
  takeLatest,
  // put
} from 'redux-saga/effects';

import { NavigationService, routes } from 'navigation';
// import { PUB } from 'store/api';
import types from '../types';
// import mutation from './auth.gql';

type Action = {
  payload: {
    email: string,
    password: string,
  }
}

export function* authSaga(
  { payload: { email, password } }: Action,
): Iterable<any> {
  try {
    // const result = yield PUB(mutation, {
    //   email,
    //   password,
    // });
    yield NavigationService.navigate(routes.Welcome.WelcomeBack);
  } catch (e) {
    console.warn(e.message);
  }
}

export default function* listener(): Iterable<any> {
  yield takeLatest(types.AUTH, authSaga);
}
