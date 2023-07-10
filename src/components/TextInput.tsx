import React from 'react';
import {HelperText, TextInput as PaperInput} from 'react-native-paper';

interface TextInputProps {
  label: string;
  autoCapitalize?: string;
  autoComplete?: string;
  autoCorrect?: boolean;
  editable?: boolean;
  importantForAutofill?: string;
  inputMode?: string;
  keyboardType?: string;
  maxLength?: number;
  onChangeText: (text: string | number) => void;
  onEndEditing: (event: any) => void;
  placeholder: string;
  secureTextEntry?: boolean;
  textContentType?: string;
  left?: () => void;
  right?: () => void;
  showHelper: boolean;
  helperMessage: string;
}

const defaultProps = {
  autoCapitalize: 'words',
  autoComplete: 'off',
  autoCorrect: false,
  editable: true,
  importantForAutofill: 'yes',
  inputMode: 'text',
  keyboardType: 'default',
  maxLength: 32,
  secureTextEntry: false,
  left: () => {},
  right: () => {},
  textContentType: '',
} as TextInputProps;

function TextInput({
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
}: TextInputProps): React.JSX.Element {
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

TextInput.defaultProps = defaultProps;

export default TextInput;
