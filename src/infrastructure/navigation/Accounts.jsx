import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignIn from '../../features/Accounts/screens/Sign-In';

const Stack = createNativeStackNavigator();

function SignInComponent() {
  return <SignIn />;
}

const screenOptions = {
  headerShown: false,
};

export default function Accounts() {
  return (
    <Stack.Navigator screenOptions={screenOptions}>
      <Stack.Screen name="template" component={SignInComponent} />
    </Stack.Navigator>
  );
}
