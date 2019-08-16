// @flow

export type SignIn = {
  login: string,
  password: string,
  remember: boolean
}

export type SignUp = {
  email: string,
  userName: string,
  phone: string,
  password: string,
}

export type Email = {
  email: string
}

export type Forgot = Email;

export type State = {
  email: string,
}

export type User = {
  id: string,
  email: string,
  userName: string,
  phone: string,
}
