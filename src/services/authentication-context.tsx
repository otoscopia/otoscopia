import React, { createContext, useMemo, useState } from 'react';

interface AuthenticationContextValues {
  isAuthenticated: boolean;
}

const AuthenticationContextDefaultProps: AuthenticationContextValues = {
  isAuthenticated: false,
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

  const contextValue = useMemo(() => ({ isAuthenticated: !!user }), [user]);
  return (
    <AuthenticationContext.Provider value={contextValue}>
      {children}
    </AuthenticationContext.Provider>
  );
}

export default AuthenticationProvider;
