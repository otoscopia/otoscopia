import React, { useContext, useRef } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import analytics from '@react-native-firebase/analytics';
import { AuthenticationContext } from '../../services/authentication/Authentication-Context';
import Accounts from './Accounts';
import AppNavigation from './AppNavigation';

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
      {isAuthenticated ? <AppNavigation /> : <Accounts />}
    </NavigationContainer>
  );
}
