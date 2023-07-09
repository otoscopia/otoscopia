import React from 'react';
import AuthenticationProvider from './src/services/authentication-context';
import NavigationIndex from './src/infrastructure/navigation/index';

export default function App() {
  return (
    <AuthenticationProvider>
      <NavigationIndex />
    </AuthenticationProvider>
  );
}
