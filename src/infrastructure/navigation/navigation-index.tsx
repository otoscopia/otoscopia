import {Text} from 'react-native';
import React, {useContext} from 'react';
import {PaperProvider} from 'react-native-paper';
import {NavigationContainer} from '@react-navigation/native';
import {AuthenticationContext} from '../../services/authentication/Authentication-Context-Provider';
import Accounts from './Accounts';

export default function Navigation(): React.JSX.Element {
  const {isAuthenticated} = useContext(AuthenticationContext);

  return (
    <PaperProvider>
      <NavigationContainer>
        {isAuthenticated ? <Text>True</Text> : <Accounts />}
      </NavigationContainer>
    </PaperProvider>
  );
}
