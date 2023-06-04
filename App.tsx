import React from 'react';
import { StatusBar, useColorScheme } from 'react-native';
import { Provider as PaperProvider } from 'react-native-paper';
import AuthenticationProvider from './src/services/authentication/Authentication-Context';
import Navigation from './src/infrastructure/navigation/Navigation';
import colors from './src/infrastructure/themes/colors';

function App() {
  const colorScheme = useColorScheme() === 'dark';

  return (
    <AuthenticationProvider>
      <PaperProvider>
        <Navigation />
      </PaperProvider>
      <StatusBar
        barStyle={colorScheme ? 'light-content' : 'dark-content'}
        backgroundColor={
          colorScheme ? colors.dark.background : colors.light.background
        }
      />
    </AuthenticationProvider>
  );
}

export default App;
