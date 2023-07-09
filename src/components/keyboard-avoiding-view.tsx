import {
  KeyboardAvoidingView as NativeKeyboardAvoidingView,
  Platform,
} from 'react-native';
import React from 'react';

interface KeyboardAvoidingViewProps {
  children: React.ReactNode;
  enableKeyboardAvoiding?: boolean;
}

const defaultProps = {
  enableKeyboardAvoiding: true,
} as KeyboardAvoidingViewProps;

export default function KeyboardAvoidingView({
  children,
  enableKeyboardAvoiding,
}: KeyboardAvoidingViewProps): React.JSX.Element {
  return (
    <NativeKeyboardAvoidingView
      enabled={enableKeyboardAvoiding}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      className="flex-1">
      {children}
    </NativeKeyboardAvoidingView>
  );
}

KeyboardAvoidingView.defaultProps = defaultProps;
