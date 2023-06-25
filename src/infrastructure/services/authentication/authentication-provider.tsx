import React, {createContext, useMemo, useState} from 'react';

interface AuthenticationContextValues {
  isAuthenticated: boolean;
  isLoading: boolean;
}

export const AuthenticationContext =
  createContext<AuthenticationContextValues | null>(null);

export default function AuthenticationProvider({
  children,
}: React.PropsWithChildren<{
  children: React.ReactNode;
}>): React.JSX.Element {
  const [isLoading, setIsLoading] = useState(false);
  const [user, setUser] = useState(null);

  const contextValue = useMemo(
    () => ({
      // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
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
