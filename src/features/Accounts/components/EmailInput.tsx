import React from 'react';
import {TextInput as PaperInput} from 'react-native-paper';
import TextInput from '../../../components/TextInput';

interface EmailInputProps {
  onChangeText: () => void;
  onEndEditing: () => void;
  showHelper: boolean;
}

export default function EmailInput({
  onChangeText,
  onEndEditing,
  showHelper,
}: EmailInputProps): React.JSX.Element {
  return (
    <TextInput
      label="Email Address"
      autoCapitalize="none"
      autoComplete="email"
      inputMode="email"
      keyboardType="email-address"
      onChangeText={onChangeText}
      onEndEditing={onEndEditing}
      placeholder="@deped.edu.ph"
      textContentType="emailAddress"
      right={<PaperInput.Icon icon="email" forceTextInputFocus={false} />}
      showHelper={showHelper}
      helperMessage="Invalid email address"
    />
  );
}
