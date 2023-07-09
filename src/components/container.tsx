import React from 'react';
import SafeAreaView from './safe-area-view';
import View from './view';
import ScrollView from './scroll-view';
import KeyboardAvoidingView from './keyboard-avoiding-view';

interface ContainerProps {
  children: React.ReactNode;
  enableKeyboardAvoiding?: boolean;
  enableScroll?: boolean;
  styles?: string;
}

const defaultProps = {
  enableKeyboardAvoiding: true,
  enableScroll: true,
  styles: '',
} as ContainerProps;

export default function Container({
  children,
  enableKeyboardAvoiding,
  enableScroll,
  styles,
}: ContainerProps): React.JSX.Element {
  return (
    <SafeAreaView>
      <KeyboardAvoidingView enableKeyboardAvoiding={enableKeyboardAvoiding}>
        <ScrollView enableScroll={enableScroll}>
          <View styles={`flex-1 p-4 ${styles}`}>{children}</View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

Container.defaultProps = defaultProps;
