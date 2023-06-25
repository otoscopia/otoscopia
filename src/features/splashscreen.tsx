import {useColorScheme} from 'react-native';
import React from 'react';
import Container from '../components/container';
import Icon from '../assets/icon';
import colors from '../infrastructure/themes/colors';

export default function Splashscreen(): JSX.Element {
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
