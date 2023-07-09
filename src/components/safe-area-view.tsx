import React from 'react';
import { SafeAreaView as NativeSafeArea } from 'react-native-safe-area-context';

export default function SafeAreaView({
  children,
}: {
  children: React.ReactNode;
}): React.JSX.Element {
  return (
    <NativeSafeArea className="flex-1 bg-light-background dark:bg-dark-background">
      {children}
    </NativeSafeArea>
  );
}
