import {
  KeyboardAvoidingView,
  ScrollView,
  Platform,
  StyleSheet,
} from 'react-native';
import React from 'react';
import PropTypes from 'prop-types';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function ScreenContainer({
  children,
  scrollEnabled,
  enableKeyboardAvoidingView,
}) {
  const styles = StyleSheet.create({
    ScrollViewStyle: {
      flexGrow: 1,
    },
  });

  return (
    <SafeAreaView
      className="flex-1 bg-light-background dark:bg-dark-background"
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
    </SafeAreaView>
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
