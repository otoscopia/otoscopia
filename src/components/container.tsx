import {
  View,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';

interface ContainerProps {
  children: React.ReactNode;
  scrollEnabled?: boolean;
  keyboardAvoidingEnabled?: boolean;
  padding?: boolean;
  styles?: string;
}

const style = StyleSheet.create({
  ScrollViewStyle: {
    flexGrow: 1,
  },
});

export default function Container({
  children,
  scrollEnabled = true,
  keyboardAvoidingEnabled = true,
  padding = true,
  styles = '',
}: ContainerProps): JSX.Element {
  return (
    <SafeAreaView className="flex-1 bg-light-background dark:bg-dark-background">
      <KeyboardAvoidingView
        enabled={keyboardAvoidingEnabled}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        className="flex-1">
        <ScrollView
          scrollEnabled={scrollEnabled}
          contentInsetAdjustmentBehavior="automatic"
          keyboardShouldPersistTaps="handled"
          contentContainerStyle={style.ScrollViewStyle}
          alwaysBounceVertical
          showsVerticalScrollIndicator={false}>
          <View className={`flex-1 ${padding ? 'p-4' : ''} ${styles}`}>
            {children}
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
