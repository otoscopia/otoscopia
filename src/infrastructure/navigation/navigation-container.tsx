import React, { useContext } from 'react';
import { NavigationContainer as NativeContainer } from '@react-navigation/native';
import { Provider as PaperProvider } from 'react-native-paper';
import { AuthenticationContext } from '../../services/authentication-context';
import AccountsNavigation from './accounts-navigation';

export default function NavigationContainer(): React.JSX.Element {
  const { isAuthenticated } = useContext(AuthenticationContext);
  return (
    <PaperProvider>
      <NativeContainer>
        {isAuthenticated ? null : <AccountsNavigation />}
      </NativeContainer>
    </PaperProvider>
  );
}
