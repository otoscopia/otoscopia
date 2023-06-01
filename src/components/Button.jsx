import React from 'react';
import { TouchableOpacity } from 'react-native';
import { Button as PaperButton } from 'react-native-paper';
import PropTypes from 'prop-types';

export default function Button({ text, onPress }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <PaperButton mode="contained">{text}</PaperButton>
    </TouchableOpacity>
  );
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
};
