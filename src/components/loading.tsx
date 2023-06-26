import React from 'react';
import AnimatedLottieView from 'lottie-react-native';
import {View, useColorScheme} from 'react-native';
import {Modal, Portal} from 'react-native-paper';
import LoadingAnimation from '../assets/loading-animation.json';
import colors from '../infrastructure/themes/colors';

interface LoadingProp {
  visible: boolean;
}

Loading.defaultProps = {
  visible: false,
};

export default function Loading({visible}: LoadingProp): React.JSX.Element {
  const colorScheme = useColorScheme();

  return (
    <Portal>
      <Modal visible={visible}>
        <View className="h-full bg-light-surface dark:bg-dark-surface justify-center items-center">
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
                    ? colors.dark.surface
                    : colors.light.background,
              },
            ]}
          />
        </View>
      </Modal>
    </Portal>
  );
}
