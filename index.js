/**
 * @format
 */
import React from 'react';
import { AppRegistry } from 'react-native';
import {
  SafeAreaProvider,
  initialWindowMetrics,
} from 'react-native-safe-area-context';
import App from './App.tsx';
import { name as appName } from './app.json';

function Main() {
  return (
    <SafeAreaProvider initialMetrics={initialWindowMetrics}>
      <App />
    </SafeAreaProvider>
  );
}

AppRegistry.registerComponent(appName, () => Main);
