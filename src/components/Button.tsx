import React from 'react';
import {TouchableOpacity} from 'react-native';
import {Button as PaperButton} from 'react-native-paper';

interface ButtonProps {
  text: string;
  onPress: () => any;
}

export default function Button({
  text,
  onPress,
}: ButtonProps): React.JSX.Element {
  return (
    <TouchableOpacity onPress={onPress}>
      <PaperButton mode="contained">{text}</PaperButton>
    </TouchableOpacity>
  );
}
