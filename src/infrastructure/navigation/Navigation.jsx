import React, { useContext } from 'react';
import { Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { AuthenticationContext } from '../../services/authentication/Authentication-Context';
import Accounts from './Accounts';

export default function Navigation() {
  const { isAuthenticated } = useContext(AuthenticationContext);
  return (
    <NavigationContainer>
      {isAuthenticated ? <Text>True</Text> : <Accounts />}
    </NavigationContainer>
  );
}
