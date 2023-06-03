import React from 'react';
import AnimatedLottieView from 'lottie-react-native';
import { View, useColorScheme } from 'react-native';
import { Modal, Portal } from 'react-native-paper';
import PropTypes from 'prop-types';
import LoadingAnimation from '../assets/loading-animation.json';
import colors from '../infrastructure/themes/colors';

export default function LoadingScreen({ visible }) {
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

LoadingScreen.propTypes = {
  visible: PropTypes.bool,
};

LoadingScreen.defaultProps = {
  visible: false,
};
