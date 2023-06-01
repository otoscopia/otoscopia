import React from 'react';
import PropTypes from 'prop-types';
import { TextInput as PaperInput } from 'react-native-paper';
import TextInput from '../../../components/Text-Input';

export default function EmailInput({ onChangeText, onEndEditing, showHelper }) {
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

EmailInput.propTypes = {
  onChangeText: PropTypes.func.isRequired,
  onEndEditing: PropTypes.func.isRequired,
  showHelper: PropTypes.bool.isRequired,
};
