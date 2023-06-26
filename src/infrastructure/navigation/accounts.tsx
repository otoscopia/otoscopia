import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import SignIn from '../../features/Accounts/screens/sign-in';

const Stack = createNativeStackNavigator();

function SignInComponent(): React.JSX.Element {
  return <SignIn />;
}

export default function Accounts(): React.JSX.Element {
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
