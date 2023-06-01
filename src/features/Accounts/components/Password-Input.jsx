import React from 'react';
import { TextInput as PaperInput } from 'react-native-paper';
import PropTypes from 'prop-types';
import TextInput from '../../../components/Text-Input';

export default function PasswordInput({
  onChangeText,
  onEndEditing,
  secureTextEntry,
  onPress,
  showHelper,
}) {
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

PasswordInput.propTypes = {
  onChangeText: PropTypes.func.isRequired,
  onEndEditing: PropTypes.func.isRequired,
  secureTextEntry: PropTypes.bool.isRequired,
  onPress: PropTypes.func.isRequired,
  showHelper: PropTypes.bool.isRequired,
};
