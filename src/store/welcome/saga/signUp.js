// @flow
import { takeLatest, put } from 'redux-saga/effects';

import { PUB } from '~/api';
import type { SignUp, User } from '~/store/types/Welcome';
import { NavigationService, routes } from '~/navigation';
import { setEmail } from '~/store/welcome/actions';
// $FlowFixMe
import { signUp as mutation } from '~/store/mutations.graphql';
import types from '../types';

type Action = {
  payload: SignUp
}

type Result = {
  signUp: User
}

export function* signUpSaga(
  {
    payload: {
      email, userName, phone, password,
    },
  }: Action,
): any {
  try {
    yield put(setEmail({ email }));
    NavigationService.navigate(routes.Welcome.ConfirmEmail);
    const { signUp }: Result = yield PUB(mutation, {
      email, userName, phone, password,
    });
    console.log(signUp.id);
  } catch (e) {
    console.log(e.message);
  }
}

export default function* listener(): Iterable<any> {
  yield takeLatest(types.SIGN_UP, signUpSaga);
}
