import {useColorScheme} from 'react-native';
import React from 'react';
import Container from '../components/Container';
import Icon from '../assets/icon';
import colors from '../infrastructure/themes/colors';

export default function Splashscreen(): React.JSX.Element {
  const colorScheme = useColorScheme() === 'dark';
  return (
    <Container styles="justify-center items-center">
      <Icon
        subtitleColor={
          colorScheme ? colors.light.background : colors.dark.background
        }
      />
    </Container>
  );
}