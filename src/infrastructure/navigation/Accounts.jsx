import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignIn from '../../features/Accounts/screens/Sign-In';
import SignUp from '../../features/Accounts/screens/Sign-Up';
import VerificationCode from '../../features/Accounts/screens/Verification-Code';
import Password from '../../features/Accounts/screens/Password';
import UserInformation from '../../features/Accounts/screens/User-Information';
import ForgotPassword from '../../features/Accounts/screens/ForgotPassword';
import Gender from '../../features/Accounts/screens/Gender';
import Camera from '../../features/Accounts/screens/Camera';
import SetProfile from '../../features/Accounts/screens/SetProfile';
import Welcome from '../../features/Accounts/screens/Welcome';

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

function UserInformationComponent() {
  return <UserInformation />;
}

function ForgotPasswordComponent() {
  return <ForgotPassword />;
}

function GenderComponent() {
  return <Gender />;
}

function SetProfileComponent() {
  return <SetProfile />;
}

function CameraComponent() {
  return <Camera />;
}

function WelcomeComponent() {
  return <Welcome />;
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
      <Stack.Screen
        name="User Information"
        component={UserInformationComponent}
      />
      <Stack.Screen name="Gender" component={GenderComponent} />
      <Stack.Screen name="Set Profile" component={SetProfileComponent} />
      <Stack.Screen name="Camera" component={CameraComponent} />
      <Stack.Screen name="Welcome" component={WelcomeComponent} />
      <Stack.Screen
        name="Forgot Password"
        component={ForgotPasswordComponent}
      />
    </Stack.Navigator>
  );
}
