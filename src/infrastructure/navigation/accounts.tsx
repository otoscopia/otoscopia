import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import SignIn from '../../features/Accounts/screens/Sign-In';
import SignUp from '../../features/Accounts/screens/Sign-Up';

const Stack = createNativeStackNavigator();

function SignInComponent(): React.JSX.Element {
  return <SignIn />;
}

function SignUpComponent(): React.JSX.Element {
  return <SignUp />;
}

export default function Accounts(): React.JSX.Element {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        animation: 'fade',
      }}>
      <Stack.Screen name="Sign In" component={SignInComponent} />
      <Stack.Screen name="Sign Up" component={SignUpComponent} />
    </Stack.Navigator>
  );
}
