import React from 'react';
import AnimatedLottieView from 'lottie-react-native';
import { View, useColorScheme } from 'react-native';
import LoadingAnimation from '../assets/loading-animation.json';
import colors from '../infrastructure/themes/colors';
import ScreenContainer from './Screen-Container';

export default function LoadingScreen() {
  const colorScheme = useColorScheme();

  return (
    <ScreenContainer enableKeyboardAvoidingView={false} scrollEnabled>
      <View className="flex-1 items-center justify-center">
        <AnimatedLottieView
          source={LoadingAnimation}
          autoPlay
          loop
          className="w-full"
          colorFilters={[
            {
              keypath: 'Shape Layer 2',
              color:
                colorScheme === 'dark'
                  ? colors.dark.background
                  : colors.light.background,
            },
          ]}
        />
      </View>
    </ScreenContainer>
  );
}
