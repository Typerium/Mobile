// @flow
import { takeLatest, put } from 'redux-saga/effects';

import { NavigationService, routes } from '~/navigation';
import { PUB } from '~/api';
import { setEmail } from '~/store/welcome/actions';
import { showResetPassword } from '~/store/modals/actions';
import type { Forgot } from '~/store/types/Welcome';
// $FlowFixMe
import { resetPassword as mutation } from '~/store/mutations.graphql';
import types from '../types';

type Action = {
  payload: Forgot
}

type Result = {
  resetPassword: boolean
}

export function* forgotPasswordSaga(
  { payload: { email } }: Action,
): any {
  try {
    yield put(showResetPassword(true));
    const { resetPassword }: Result = yield PUB(mutation, {
      email,
    });
    if (resetPassword) {
      // yield put(showResetPassword(true));
      yield put(setEmail({ email }));
      NavigationService.navigate(routes.Welcome.LogIn);
    }
  } catch (e) {
    console.log(e.message);
  }
}

export default function* listener(): Iterable<any> {
  yield takeLatest(types.FORGOT_PASSWORD, forgotPasswordSaga);
}
