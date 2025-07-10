export type signUpFormDataType = {
  firstName: string,
  lastName: string,
  email: string,
  password: string,
  termsAccepted: boolean,
  privacyAccepted: boolean,
}

export type signInFormDataType = {
  email: string,
  password: string,
}

export type formType = 'signUp' | 'signIn';
