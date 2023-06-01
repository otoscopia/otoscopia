import React from 'react';
import AuthenticationProvider from './src/services/authentication/Authentication-Context';
import Navigation from './src/infrastructure/navigation/Navigation';

function App() {
  return (
    <AuthenticationProvider>
      <Navigation />
    </AuthenticationProvider>
  );
}

export default App;
