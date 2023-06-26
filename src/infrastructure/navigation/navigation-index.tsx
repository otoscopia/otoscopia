import {Text} from 'react-native';
import React, {useContext} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {AuthenticationContext} from '../services/authentication/authentication-provider';
import Accounts from './accounts';

export default function Navigation(): React.JSX.Element {
  const {isAuthenticated} = useContext(AuthenticationContext);

  return (
    <NavigationContainer>
      {isAuthenticated ? <Text>True</Text> : <Accounts />}
    </NavigationContainer>
  );
}
