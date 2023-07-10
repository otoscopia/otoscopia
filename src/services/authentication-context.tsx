import React, { createContext, useMemo, useState } from 'react';

interface AuthenticationContextValues {
  isAuthenticated: boolean;
  isLoading: boolean;
}

const AuthenticationContextDefaultProps: AuthenticationContextValues = {
  isAuthenticated: false,
  isLoading: false,
};

export const AuthenticationContext = createContext(
  AuthenticationContextDefaultProps,
);

interface AuthenticationProviderProps {
  children: React.ReactNode;
}

function AuthenticationProvider({
  children,
}: AuthenticationProviderProps): React.JSX.Element {
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();
  const [isLoading, setIsLoading] = useState(false);

  const contextValue = useMemo(
    () => ({ isAuthenticated: !!user, isLoading }),
    [user, isLoading],
  );
  return (
    <AuthenticationContext.Provider value={contextValue}>
      {children}
    </AuthenticationContext.Provider>
  );
}

export default AuthenticationProvider;
