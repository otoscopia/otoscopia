import React from 'react';
import { Provider as PaperProvider } from 'react-native-paper';
import AuthenticationProvider from './src/services/authentication/Authentication-Context';
import Navigation from './src/infrastructure/navigation/Navigation';

function App() {
  return (
    <AuthenticationProvider>
      <PaperProvider>
        <Navigation />
      </PaperProvider>
    </AuthenticationProvider>
  );
}

export default App;
