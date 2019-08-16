// @flow
import type {
  SignIn, SignUp, Forgot, Email,
} from '~/store/types/Welcome';
import types from './types';


export const setEmail = ({ email }: Email): {} => ({
  type: types.SET_EMAIL,
  payload: { email },
});

export const resendEmail = () => ({
  type: types.RESEND_EMAIL,
});

export const signIn = ({ login, password, remember }: SignIn): {} => ({
  type: types.SIGN_IN,
  payload: { login, password, remember },
});

export const signUp = ({
  email, userName, phone, password,
}: SignUp): {} => ({
  type: types.SIGN_UP,
  payload: {
    email, userName, phone, password,
  },
});

export const forgotPassword = ({ email }: Forgot): {} => ({
  type: types.FORGOT_PASSWORD,
  payload: { email },
});
