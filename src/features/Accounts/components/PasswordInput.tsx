import React from 'react';
import {TextInput as PaperInput} from 'react-native-paper';
import TextInput from '../../../components/TextInput';

interface PasswordInputProps {
  onChangeText: () => any;
  onEndEditing: () => any;
  secureTextEntry: boolean;
  onPress: () => any;
  showHelper: boolean;
}

export default function PasswordInput({
  onChangeText,
  onEndEditing,
  secureTextEntry,
  onPress,
  showHelper,
}: PasswordInputProps): React.JSX.Element {
  return (
    <TextInput
      label="Password"
      autoComplete="password"
      autoCapitalize="none"
      inputMode="text"
      onChangeText={onChangeText}
      onEndEditing={onEndEditing}
      placeholder="P@ssw0rd"
      secureTextEntry={secureTextEntry}
      textContentType="password"
      right={
        <PaperInput.Icon
          icon={secureTextEntry ? 'eye' : 'eye-outline'}
          onPress={onPress}
          forceTextInputFocus={false}
        />
      }
      showHelper={showHelper}
      helperMessage="Invalid password"
    />
  );
}
