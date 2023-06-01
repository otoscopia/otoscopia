import {
  View,
  KeyboardAvoidingView,
  ScrollView,
  Platform,
  StyleSheet,
} from 'react-native';
import React from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import PropTypes from 'prop-types';

export default function ScreenContainer({
  children,
  scrollEnabled,
  enableKeyboardAvoidingView,
}) {
  const {
    top: insetTop,
    right: insetRight,
    bottom: insetBottom,
    left: insetLeft,
  } = useSafeAreaInsets();

  const styles = StyleSheet.create({
    ScrollViewStyle: {
      flexGrow: 1,
    },
  });

  return (
    <View
      className={`flex-1 bg-light-background dark:bg-dark-background mt-[${insetTop}] mb-[${insetBottom}] ml-[${insetLeft}] mr-[${insetRight}]`}
      style={styles.ContainerStyle}>
      <KeyboardAvoidingView
        enabled={enableKeyboardAvoidingView}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        className="flex-1">
        <ScrollView
          scrollEnabled={scrollEnabled}
          contentInsetAdjustmentBehavior="automatic"
          keyboardShouldPersistTaps="handled"
          contentContainerStyle={styles.ScrollViewStyle}
          alwaysBounceVertical
          showsVerticalScrollIndicator={false}>
          {children}
        </ScrollView>
      </KeyboardAvoidingView>
    </View>
  );
}

ScreenContainer.propTypes = {
  children: PropTypes.node.isRequired,
  scrollEnabled: PropTypes.bool,
  enableKeyboardAvoidingView: PropTypes.bool,
};

ScreenContainer.defaultProps = {
  scrollEnabled: true,
  enableKeyboardAvoidingView: true,
};
