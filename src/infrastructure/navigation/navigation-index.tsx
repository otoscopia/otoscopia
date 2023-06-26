import {Text} from 'react-native';
import React, {useContext} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {AuthenticationContext} from '../services/authentication/authentication-provider';

export default function Navigation(): React.JSX.Element {
  const {isAuthenticated} = useContext(AuthenticationContext);

  return (
    <NavigationContainer>
      {isAuthenticated ? <Text>True</Text> : <Text>False</Text>}
    </NavigationContainer>
  );
}
