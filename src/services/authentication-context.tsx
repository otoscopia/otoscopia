import React, { createContext, useEffect, useMemo, useState } from 'react';
import auth, { FirebaseAuthTypes } from '@react-native-firebase/auth';

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
  const [user, setUser] = useState<FirebaseAuthTypes.User>();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(userData => {
      if (userData !== null) {
        setUser(userData);
      }
      setInitializing(false);
    });
    return subscriber;
  }, [initializing]);

  const contextValue = useMemo(
    () => ({
      isAuthenticated: !!user,
      isLoading,
    }),
    [user, isLoading],
  );
  return (
    <AuthenticationContext.Provider value={contextValue}>
      {children}
    </AuthenticationContext.Provider>
  );
}

export default AuthenticationProvider;
