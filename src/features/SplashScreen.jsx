import React from 'react';
import { View, useColorScheme } from 'react-native';
import ScreenContainer from '../components/Screen-Container';
import Splash from '../components/Splash';
import colors from '../infrastructure/themes/colors';

function SplashScreen() {
  const colorScheme = useColorScheme() === 'dark';
  return (
    <ScreenContainer>
      <View className="flex-1 justify-center items-center">
        <Splash
          subtitleColor={
            colorScheme ? colors.light.background : colors.dark.background
          }
        />
      </View>
    </ScreenContainer>
  );
}

export default SplashScreen;
