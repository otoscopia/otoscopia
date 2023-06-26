import React, {createContext, useMemo, useState, useEffect} from 'react';
import auth from '@react-native-firebase/auth';

interface AuthenticationContextValues {
  isAuthenticated: boolean;
  isLoading: boolean;
  signInRequest: (email: string, password: string) => void;
  signInRequestError: string
}

const defaultProp: AuthenticationContextValues = {
  isAuthenticated: false,
  isLoading: false,
  signInRequest: () => null,
};

export const AuthenticationContext =
  createContext<AuthenticationContextValues>(defaultProp);

export default function AuthenticationProvider({
  children,
}: React.PropsWithChildren<{
  children: React.ReactNode;
}>): React.JSX.Element {
  const [initializing, setInitializing] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [user, setUser] = useState(null);

  const [signInRequestError, setSignInRequestError] = useState('');

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(userData => {
      if (userData !== null) {
        setUser(userData);
      }
      setInitializing(false);
    });
    return subscriber;
  }, [initializing]);

  function signInRequest(email: string, password: string): void {
    setIsLoading(true);
    auth()
      .signInWithEmailAndPassword(email, password)
      .catch(error => {
        if (error.code === 'auth/email-already-in-use') {
          setSignInRequestError('That email address is already in use!');
        } else if (error.code === 'auth/invalid-email') {
          setSignInRequestError('That email address is invalid!');
        } else if (error.code === 'auth/user-not-found') {
          setSignInRequestError(
            'There is no user record corresponding to this email address, Please create a new account.',
          );
        } else {
          setSignInRequestError(error.code);
        }
        setIsLoading(false);
      });
    setIsLoading(false);
  }

  const contextValue = useMemo(
    () => ({
      // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
      isAuthenticated: !!user,
      isLoading,
      signInRequest,
      signInRequestError,
    }),
    [user, isLoading, signInRequestError],
  );

  return (
    <AuthenticationContext.Provider value={contextValue}>
      {children}
    </AuthenticationContext.Provider>
  );
}
