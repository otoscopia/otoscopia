import React, { useContext, useRef } from 'react';
import { Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import analytics from '@react-native-firebase/analytics';
import { AuthenticationContext } from '../../services/authentication/Authentication-Context';
import Accounts from './Accounts';

export default function Navigation() {
  const { isAuthenticated } = useContext(AuthenticationContext);

  const routeNameRef = useRef();
  const navigationRef = useRef();

  const onReady = () => {
    routeNameRef.current = navigationRef.current.getCurrentRoute().name;
  };

  const onStateChange = async () => {
    const previousRouteName = routeNameRef.current;
    const currentRouteName = navigationRef.current.getCurrentRoute().name;

    if (previousRouteName !== currentRouteName) {
      await analytics().logScreenView({
        screen_name: currentRouteName,
        screen_class: currentRouteName,
      });
    }
    routeNameRef.current = currentRouteName;
  };

  return (
    <NavigationContainer
      ref={navigationRef}
      onReady={onReady}
      onStateChange={onStateChange}>
      {isAuthenticated ? <Text>True</Text> : <Accounts />}
    </NavigationContainer>
  );
}
