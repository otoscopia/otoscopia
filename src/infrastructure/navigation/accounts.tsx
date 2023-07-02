import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import SignIn from '../../features/Accounts/screens/Sign-In';
import SignUp from '../../features/Accounts/screens/Sign-Up';
import Verification from '../../features/Accounts/screens/Verification';
import Password from '../../features/Accounts/screens/Password';
import UserInformation from '../../features/Accounts/screens/User-Information';

const Stack = createNativeStackNavigator();

function SignInComponent(): React.JSX.Element {
  return <SignIn />;
}

function SignUpComponent(): React.JSX.Element {
  return <SignUp />;
}

function VerificationComponent(): React.JSX.Element {
  return <Verification />;
}

function PasswordComponent(): React.JSX.Element {
  return <Password />;
}

function UserInformationComponent(): React.JSX.Element {
  return <UserInformation />;
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
      <Stack.Screen name="Verification" component={VerificationComponent} />
      <Stack.Screen name="Password" component={PasswordComponent} />
      <Stack.Screen
        name="User Information"
        component={UserInformationComponent}
      />
    </Stack.Navigator>
  );
}
