import PropTypes from 'prop-types';
import React, { createContext, useMemo, useState } from 'react';

export const AuthenticationContext = createContext();

export default function AuthenticationProvider({ children }) {
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState(null);

  function signInRequest(email, password) {
    console.log(email, password);
  }

  const contextValue = useMemo(
    () => ({ isAuthenticated: !!user, signInRequest }),
    [user],
  );

  return (
    <AuthenticationContext.Provider value={contextValue}>
      {children}
    </AuthenticationContext.Provider>
  );
}

AuthenticationProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
