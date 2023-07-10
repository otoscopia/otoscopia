import {useColorScheme} from 'react-native';
import React from 'react';
import Container from '../components/Container';
import Logo from '../assets/Logo';
import colors from '../infrastructure/themes/colors';

export default function Splashscreen(): React.JSX.Element {
  const colorScheme = useColorScheme() === 'dark';
  return (
    <Container className="justify-center items-center">
      <Logo
        subtitleColor={
          colorScheme ? colors.light.background : colors.dark.background
        }
      />
    </Container>
  );
}
