import React, {useEffect, useState} from 'react';
import AuthenticationProvider from './src/services/authentication/Authentication-Context-Provider';
import Navigation from './src/infrastructure/navigation/Navigation-Index';
import Splashscreen from './src/features/Splashscreen';

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
