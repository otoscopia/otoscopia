import React from 'react';
import { HelperText, TextInput as PaperInput } from 'react-native-paper';
import PropTypes from 'prop-types';

export default function TextInput({
  label,
  autoCapitalize,
  autoComplete,
  autoCorrect,
  editable,
  importantForAutofill,
  inputMode,
  keyboardType,
  maxLength,
  onChangeText,
  onEndEditing,
  placeholder,
  secureTextEntry,
  textContentType,
  left,
  right,
  showHelper,
  helperMessage,
}) {
  return (
    <>
      <PaperInput
        mode="outlined"
        label={label}
        autoCapitalize={autoCapitalize}
        autoComplete={autoComplete}
        autoCorrect={autoCorrect}
        caretHidden
        editable={editable}
        enablesReturnKeyAutomatically
        importantForAutofill={importantForAutofill}
        inputMode={inputMode}
        keyboardType={keyboardType}
        maxLength={maxLength}
        onChangeText={onChangeText}
        onEndEditing={onEndEditing}
        placeholder={placeholder}
        secureTextEntry={secureTextEntry}
        textContentType={textContentType}
        left={left}
        right={right}
        error={showHelper}
      />
      {showHelper && <HelperText>{helperMessage}</HelperText>}
    </>
  );
}

TextInput.propTypes = {
  label: PropTypes.node.isRequired,
  autoCapitalize: PropTypes.node,
  autoComplete: PropTypes.node,
  autoCorrect: PropTypes.bool,
  editable: PropTypes.bool,
  importantForAutofill: PropTypes.node,
  inputMode: PropTypes.node,
  keyboardType: PropTypes.node,
  maxLength: PropTypes.node,
  onChangeText: PropTypes.func.isRequired,
  onEndEditing: PropTypes.func.isRequired,
  placeholder: PropTypes.node.isRequired,
  secureTextEntry: PropTypes.bool,
  textContentType: PropTypes.node.isRequired,
  left: PropTypes.node,
  right: PropTypes.node,
  showHelper: PropTypes.bool,
  helperMessage: PropTypes.node.isRequired,
};

TextInput.defaultProps = {
  autoCapitalize: 'words',
  autoComplete: 'off',
  autoCorrect: false,
  editable: true,
  importantForAutofill: 'yes',
  inputMode: 'text',
  keyboardType: 'default',
  maxLength: 32,
  secureTextEntry: false,
  left: null,
  right: null,
  showHelper: false,
};
