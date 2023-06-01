import React from 'react';
import { Text } from 'react-native-paper';
import PropTypes from 'prop-types';

export default function Header({ title, secondTitle, thirdTitle, subtitle }) {
  return (
    <>
      <Text className="font-bold text-3xl text-primary">{title}</Text>
      <Text className="font-bold text-3xl">{secondTitle}.</Text>
      {!!thirdTitle && <Text className="font-bold text-3xl">{thirdTitle}</Text>}
      <Text className="text-sm w-3/4 leading-4 mt-1">{subtitle}</Text>
    </>
  );
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
  secondTitle: PropTypes.string.isRequired,
  thirdTitle: PropTypes.string,
  subtitle: PropTypes.string.isRequired,
};

Header.defaultProps = {
  thirdTitle: null,
};
