export const signInRequest = error => {
  if (error.code === 'auth/email-already-in-use') {
    return 'That email address is already in use!';
  }
  if (error.code === 'auth/invalid-email') {
    return 'That email address is invalid!';
  }
  if (error.code === 'auth/user-not-found') {
    return 'There is no user record corresponding to this email address, Please create a new account.';
  }
  return error.code;
};
