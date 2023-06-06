import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignIn from '../../features/Accounts/screens/Sign-In';
import SignUp from '../../features/Accounts/screens/Sign-Up';
import VerificationCode from '../../features/Accounts/screens/Verification-Code';

const Stack = createNativeStackNavigator();

function SignInComponent() {
  return <SignIn />;
}

function SignUpComponent() {
  return <SignUp />;
}

function VerificationCodeComponent() {
  return <VerificationCode />;
}

const screenOptions = {
  headerShown: false,
  animation: 'fade',
};

export default function Accounts() {
  return (
    <Stack.Navigator screenOptions={screenOptions}>
      <Stack.Screen name="Sign In" component={SignInComponent} />
      <Stack.Screen name="Sign Up" component={SignUpComponent} />
      <Stack.Screen
        name="Verification Code"
        component={VerificationCodeComponent}
      />
    </Stack.Navigator>
  );
}
