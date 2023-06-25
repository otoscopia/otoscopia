import React from 'react';
import AuthenticationProvider from './src/infrastructure/services/authentication/authentication-provider';
import {NavigationContainer} from '@react-navigation/native';
import Navigation from './src/infrastructure/navigation/navigation-index';

export default function App(): JSX.Element {
  return (
    <AuthenticationProvider>
      <NavigationContainer>
        <Navigation />
      </NavigationContainer>
    </AuthenticationProvider>
  );
}
