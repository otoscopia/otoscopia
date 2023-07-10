import { ScrollView as NativeScrollView } from 'react-native';
import React from 'react';

interface ScrollViewProps {
  children: React.ReactNode;
  enableScroll?: boolean;
}

const defaultProps = {
  enableScroll: true,
} as ScrollViewProps;

const scrollViewStyle = {
  flexGrow: 1,
};

export default function ScrollView({
  children,
  enableScroll,
}: ScrollViewProps): React.JSX.Element {
  return (
    <NativeScrollView
      scrollEnabled={enableScroll}
      contentContainerStyle={scrollViewStyle}
      contentInsetAdjustmentBehavior="automatic"
      keyboardShouldPersistTaps="handled"
      showsVerticalScrollIndicator={false}
      showsHorizontalScrollIndicator={false}
      bounces>
      {children}
    </NativeScrollView>
  );
}

ScrollView.defaultProps = defaultProps;
