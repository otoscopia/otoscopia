import React from 'react';
import { TouchableOpacity } from 'react-native';
import { Text } from 'react-native-paper';
import PropTypes from 'prop-types';

export default function PressableText({ text, strongText, onPress, center }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <Text className={`${center ? 'text-center' : null}`}>
        <Text>{text}</Text>
        <Text className="font-bold">{strongText}</Text>
      </Text>
    </TouchableOpacity>
  );
}

PressableText.propTypes = {
  text: PropTypes.node.isRequired,
  strongText: PropTypes.node.isRequired,
  onPress: PropTypes.func.isRequired,
  center: PropTypes.bool.isRequired,
};
