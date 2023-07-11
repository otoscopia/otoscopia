import React from 'react';
import AuthenticationProvider from './src/services/authentication-context';
import NavigationContainer from './src/infrastructure/navigation/navigation-container';

export default function App(): React.JSX.Element {
  return (
    <AuthenticationProvider>
      <NavigationContainer />
    </AuthenticationProvider>
  );
}
