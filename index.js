/**
 * @format
 */

import React, { useState } from 'react';
import { AppRegistry } from 'react-native';
import App from './App.tsx';
import { name as appName } from './app.json';

function Main() {
  const [initializing, setInitializing] = useState(true);

  setTimeout(() => {
    setInitializing(false);
  }, 2500);

  return initializing ? undefined : <App />;
}

AppRegistry.registerComponent(appName, () => Main);
