import React, { useEffect, useState } from 'react';
import { StatusBar, useColorScheme } from 'react-native';
import { Provider as PaperProvider } from 'react-native-paper';
import AuthenticationProvider from './src/services/authentication/Authentication-Context';
import Navigation from './src/infrastructure/navigation/Navigation';
import colors from './src/infrastructure/themes/colors';
import SplashScreen from './src/features/SplashScreen';
import PostProvider from './src/services/post/Post-Context';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const colorScheme = useColorScheme() === 'dark';

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  return isLoading ? (
    <SplashScreen />
  ) : (
    <AuthenticationProvider>
      <PostProvider>
        <PaperProvider>
          <Navigation />
        </PaperProvider>
      </PostProvider>
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
