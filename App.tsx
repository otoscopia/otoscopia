import React, {useEffect, useState} from 'react';
import AuthenticationProvider from './src/infrastructure/services/authentication/authentication-provider';
import {NavigationContainer} from '@react-navigation/native';
import Navigation from './src/infrastructure/navigation/navigation-index';

export default function App(): JSX.Element {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2500);
  }, []);

  return (
    <AuthenticationProvider>
      {isLoading ? undefined : (
        <NavigationContainer>
          <Navigation />
        </NavigationContainer>
      )}
    </AuthenticationProvider>
  );
}
