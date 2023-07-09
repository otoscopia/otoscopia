import React, { useContext } from 'react';
import { NavigationContainer as NativeContainer } from '@react-navigation/native';
import { AuthenticationContext } from '../../services/authentication-context';
import AccountsNavigation from './accounts-navigation';

export default function NavigationContainer(): React.JSX.Element {
  const { isAuthenticated } = useContext(AuthenticationContext);
  return (
    <NativeContainer>
      {isAuthenticated ? null : <AccountsNavigation />}
    </NativeContainer>
  );
}
