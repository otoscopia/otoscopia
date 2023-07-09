import { ScrollView as NativeScrollView } from 'react-native';
import React from 'react';

const scrollViewStyle = {
  flex: 1,
};

export default function ScrollView({
  children,
  enableScroll,
}: {
  children: React.ReactNode;
  enableScroll?: boolean;
}): React.JSX.Element {
  return (
    <NativeScrollView
      contentContainerStyle={scrollViewStyle}
      scrollEnabled={enableScroll}
      contentInsetAdjustmentBehavior="automatic"
      keyboardShouldPersistTaps="handled"
      showsVerticalScrollIndicator={false}>
      {children}
    </NativeScrollView>
  );
}
