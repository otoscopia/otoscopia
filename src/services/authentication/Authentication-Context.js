import PropTypes from 'prop-types';
import React, { createContext, useEffect, useMemo, useState } from 'react';
import auth from '@react-native-firebase/auth';

export const AuthenticationContext = createContext();

export default function AuthenticationProvider({ children }) {
  const [initializing, setInitializing] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [user, setUser] = useState(null);

  const [signInRequestError, setSignInRequestError] = useState('');

  const [codeRequestError, setCodeRequestError] = useState();

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(userData => {
      if (userData) {
        setUser(userData);
      }
      if (initializing) {
        setInitializing(false);
      }
    });
    return subscriber;
  }, [initializing]);

  function signInRequest(email, password) {
    setIsLoading(true);
    auth()
      .signInWithEmailAndPassword(email, password)
      .catch(error => {
        if (error.code === 'auth/email-already-in-use') {
          setSignInRequestError('That email address is already in use!');
        }

        if (error.code === 'auth/invalid-email') {
          setSignInRequestError('That email address is invalid!');
        }

        if (error.code === 'auth/user-not-found') {
          setSignInRequestError(
            'There is no user record corresponding to this email address, Please create a new account.',
          );
        }
        setIsLoading(false);
      });
  }

  function signUpRequest(phoneNumber, email) {
    setIsLoading(true);
    console.log(phoneNumber, email);
    setIsLoading(false);
  }

  function codeRequest(phoneNumber) {
    const countryCode = '+63';
    const tempPhoneNumber = phoneNumber.toString().trim(1);
    const countryPhoneNumber = countryCode + tempPhoneNumber;

    auth()
      .verifyPhoneNumber(countryPhoneNumber, 120)
      .then(data => {
        console.log(data);
      })
      .catch(error => {
        setCodeRequestError('Error sending verification code.', error);
      });
  }

  const contextValue = useMemo(
    () => ({
      isAuthenticated: !!user,
      isLoading,
      signInRequest,
      signInRequestError,
      signUpRequest,
      codeRequest,
      codeRequestError,
    }),
    [user, isLoading, signInRequestError, codeRequestError],
  );

  if (initializing) return null;

  return (
    <AuthenticationContext.Provider value={contextValue}>
      {children}
    </AuthenticationContext.Provider>
  );
}

AuthenticationProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
