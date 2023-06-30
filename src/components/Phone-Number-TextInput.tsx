import {StyleSheet} from 'react-native';
import React from 'react';
import CountryFlag from 'react-native-country-flag';
import TextInput from './TextInput';
import {TextInput as PaperInput} from 'react-native-paper';

interface PhoneNumberTextInputProps {
  onChangeText: () => any;
  onEndEditing: () => any;
  showHelper: boolean;
}

interface IconProp {
  size: number;
}

const Icon = ({size}: IconProp): React.ReactNode => (
  <CountryFlag isoCode="ph" size={size} className="rounded-sm" />
);

const style = StyleSheet.create({
  textInputIcon: {
    borderRadius: 0,
  },
});

export default function PhoneNumberTextInput({
  onChangeText,
  onEndEditing,
  showHelper,
}: PhoneNumberTextInputProps): React.JSX.Element {
  return (
    <TextInput
      label="Phone Number"
      inputMode="numeric"
      keyboardType="numeric"
      maxLength={11}
      onChangeText={onChangeText}
      onEndEditing={onEndEditing}
      placeholder="09"
      textContentType="none"
      right={
        <PaperInput.Icon style={style.textInputIcon} icon={Icon} size={15} />
      }
      showHelper={showHelper}
      helperMessage="Invalid mobile number"
    />
  );
}
