import React, {useEffect, useState} from 'react';
import AuthenticationProvider from './src/infrastructure/services/authentication/authentication-provider';
import Navigation from './src/infrastructure/navigation/navigation-index';
import Splashscreen from './src/features/splashscreen';

export default function App(): React.JSX.Element {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2500);
  }, []);

  return (
    <AuthenticationProvider>
      {isLoading ? <Splashscreen /> : <Navigation />}
    </AuthenticationProvider>
  );
}
