/* eslint-disable import/prefer-default-export */
// @flow

export const validateEmail = (email: string) => /\S+@\S+\.\S+/.test(email);

export const passwordShortLength = (password: string) => password.length < 6;

export const isLowerCase = (str: string) => str === str.toLowerCase() && str !== str.toUpperCase();
export const isUpperCase = (str: string) => str !== str.toLowerCase() && str === str.toUpperCase();
export const isSpecialChar = (str: string) => /[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]/.test(str);

export const validatePassword = (
  password: string,
) => passwordShortLength(password) && !isLowerCase(password);
