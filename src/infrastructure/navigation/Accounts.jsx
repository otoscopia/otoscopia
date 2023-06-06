import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignIn from '../../features/Accounts/screens/Sign-In';
import SignUp from '../../features/Accounts/screens/Sign-Up';
import VerificationCode from '../../features/Accounts/screens/Verification-Code';
import Password from '../../features/Accounts/screens/Password';

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

function PasswordComponent() {
  return <Password />;
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
      <Stack.Screen name="Password" component={PasswordComponent} />
    </Stack.Navigator>
  );
}
