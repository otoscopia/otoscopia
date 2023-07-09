import { View as NativeView } from 'react-native';
import React from 'react';

interface ViewProps {
  children: React.ReactNode;
  styles?: string;
}

const defaultProps = {
  styles: '',
} as ViewProps;

export default function View({
  children,
  styles,
}: ViewProps): React.JSX.Element {
  return <NativeView className={styles}>{children}</NativeView>;
}

View.defaultProps = defaultProps;
