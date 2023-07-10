import React, { ReactNode } from 'react';
import { KeyboardTypeOptions, InputModeOptions } from 'react-native';
import { HelperText, TextInput as PaperInput } from 'react-native-paper';

interface TextInputProps {
  label: string;
  autoCapitalize?: 'none' | 'sentences' | 'words' | 'characters';
  autoComplete?:
    | 'additional-name'
    | 'email'
    | 'family-name'
    | 'given-name'
    | 'name'
    | 'name-family'
    | 'name-given'
    | 'name-middle'
    | 'name-middle-initial'
    | 'name-prefix'
    | 'name-suffix'
    | 'new-password'
    | 'password'
    | 'password-new'
    | 'username'
    | 'off';
  autoCorrect?: boolean;
  editable?: boolean;
  importantForAutofill?: 'auto' | 'no' | 'yes';
  inputMode?: InputModeOptions;
  keyboardType?: KeyboardTypeOptions;
  maxLength?: number;
  onChangeText: (text: string | number) => void;
  onEndEditing: (event: any) => void;
  placeholder: string;
  secureTextEntry?: boolean;
  textContentType?:
    | 'none'
    | 'emailAddress'
    | 'familyName'
    | 'givenName'
    | 'middleName'
    | 'name'
    | 'nameSuffix'
    | 'nickname'
    | 'username'
    | 'password'
    | 'newPassword';
  left?: ReactNode;
  right?: ReactNode;
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
  textContentType: 'none',
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
      {showHelper && <HelperText type="error">{helperMessage}</HelperText>}
    </>
  );
}

TextInput.defaultProps = defaultProps;

export default TextInput;
