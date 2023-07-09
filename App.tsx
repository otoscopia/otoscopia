import React from 'react';
import { StatusBar, useColorScheme } from 'react-native';
import AuthenticationProvider from './src/services/authentication-context';
import NavigationContainer from './src/infrastructure/navigation/navigation-container';
import colors from './src/infrastructure/navigation/themes/colors';

export default function App(): React.JSX.Element {
  const colorScheme = useColorScheme() === 'dark';

  return (
    <AuthenticationProvider>
      <NavigationContainer />
      <StatusBar
        backgroundColor={
          colorScheme ? colors.dark.background : colors.light.background
        }
        barStyle={colorScheme ? 'light-content' : 'dark-content'}
      />
    </AuthenticationProvider>
  );
}
