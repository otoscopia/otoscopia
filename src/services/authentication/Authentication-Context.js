import PropTypes from 'prop-types';
import React, { createContext, useEffect, useMemo, useState } from 'react';
import auth from '@react-native-firebase/auth';

export const AuthenticationContext = createContext();

export default function AuthenticationProvider({ children }) {
  const [initializing, setInitializing] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(userData => {
      if (userData) {
        setUser(userData);
        if (initializing) {
          setInitializing(false);
        }
      }
    });
    return subscriber;
  }, [initializing]);

  function signInRequest(email, password) {
    setIsLoading(true);
    console.log(email, password);
    setIsLoading(false);
  }

  function signUpRequest(phoneNumber, email) {
    setIsLoading(true);
    console.log(phoneNumber, email);
    setIsLoading(false);
  }

  const contextValue = useMemo(
    () => ({
      isAuthenticated: !!user,
      isLoading,
      signInRequest,
      signUpRequest,
    }),
    [user, isLoading],
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
