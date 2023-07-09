import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignIn from '../../features/accounts/screens/sign-in';

const Stack = createNativeStackNavigator();

function SignInComponent() {
  return <SignIn />;
}

export default function AccountsNavigation(): React.JSX.Element {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        animation: 'fade',
      }}>
      <Stack.Screen name="Sign In" component={SignInComponent} />
    </Stack.Navigator>
  );
}
