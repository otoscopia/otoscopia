import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

function TemplateComponent() {
  return null;
}

const screenOptions = {
  headerShown: false,
};

export default function Accounts() {
  return (
    <Stack.Navigator screenOptions={screenOptions}>
      <Stack.Screen name="template" component={TemplateComponent} />
    </Stack.Navigator>
  );
}
