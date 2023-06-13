import React from 'react';
import { TextInput as PaperInput } from 'react-native-paper';
import PropTypes from 'prop-types';
import TextInput from '../../../components/Text-Input';

export default function PasswordInput({
  label,
  onChangeText,
  onEndEditing,
  secureTextEntry,
  onPress,
  showHelper,
  helperMessage,
}) {
  return (
    <TextInput
      label={label}
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
      helperMessage={helperMessage}
    />
  );
}

PasswordInput.propTypes = {
  label: PropTypes.string,
  onChangeText: PropTypes.func.isRequired,
  onEndEditing: PropTypes.func.isRequired,
  secureTextEntry: PropTypes.bool.isRequired,
  onPress: PropTypes.func.isRequired,
  showHelper: PropTypes.bool.isRequired,
  helperMessage: PropTypes.string,
};

PasswordInput.defaultProps = {
  label: 'Password',
  helperMessage: 'Invalid password',
};
