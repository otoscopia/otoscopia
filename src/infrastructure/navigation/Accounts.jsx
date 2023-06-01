import React, { useContext } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignIn from '../../features/Accounts/screens/Sign-In';
import SignUp from '../../features/Accounts/screens/Sign-Up';
import LoadingScreen from '../../components/Loading-Animation';
import { AuthenticationContext } from '../../services/authentication/Authentication-Context';

const Stack = createNativeStackNavigator();

function SignInComponent() {
  return <SignIn />;
}

function SignUpComponent() {
  return <SignUp />;
}

function LoadingComponent() {
  return <LoadingScreen />;
}

const screenOptions = {
  headerShown: false,
};

export default function Accounts() {
  const { isLoading } = useContext(AuthenticationContext);
  return (
    <Stack.Navigator screenOptions={screenOptions}>
      {isLoading ? (
        <Stack.Screen name="Loading Animation" component={LoadingComponent} />
      ) : (
        <>
          <Stack.Screen name="Sign In" component={SignInComponent} />
          <Stack.Screen name="Sign Up" component={SignUpComponent} />
        </>
      )}
    </Stack.Navigator>
  );
}
