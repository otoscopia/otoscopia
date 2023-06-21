import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import PatientInformation from '../../features/Screening/screens/Patient-Information';

const Stack = createNativeStackNavigator();

function PatientInformationComponent() {
  return <PatientInformation />;
}

const screenOptions = {
  headerShown: true,
  headerBackButtonMenuEnabled: true,
};

export default function Screening() {
  return (
    <Stack.Navigator screenOptions={screenOptions}>
      <Stack.Screen
        name="Patient Information"
        component={PatientInformationComponent}
        options={{
          headerTitle: 'Add Patient',
        }}
      />
    </Stack.Navigator>
  );
}
