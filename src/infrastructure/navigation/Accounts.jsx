import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

function TemplateComponent() {
  return null;
}

export default function Accounts() {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator>
      <Stack.Screen name="template" component={TemplateComponent} />
    </Stack.Navigator>
  );
}
