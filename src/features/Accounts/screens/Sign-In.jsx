import React, { useContext, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { View } from 'react-native';
import { Divider, HelperText } from 'react-native-paper';
import AnimatedLottieView from 'lottie-react-native';
import ScreenContainer from '../../../components/Screen-Container';
import { AuthenticationContext } from '../../../services/authentication/Authentication-Context';
import Header from '../components/Header';
import EmailInput from '../components/Email-Input';
import PasswordInput from '../components/Password-Input';
import Button from '../../../components/Button';
import PressableText from '../../../components/Pressable-Text';
import AnimatedIllustration from '../../../assets/sign-in-illustration.json';
import LoadingScreen from '../../../components/Loading-Animation';

export default function SignIn() {
  const navigation = useNavigation();
  const { signInRequest, isLoading, signInRequestError } = useContext(
    AuthenticationContext,
  );

  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState(false);

  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState(false);
  const [passwordSecure, setPasswordSecure] = useState(true);

  const signInFunction = () => {
    if (email.length !== 0 && password.length !== 0) {
      if (emailError === false && passwordError === false) {
        signInRequest(email.toLowerCase().trim(), password.trim());
      }
    } else {
      setEmailError(true);
      setPasswordError(true);
    }
  };

  return (
    <ScreenContainer>
      <View className="flex-1 justify-center p-4 space-y-4">
        <View>
          <AnimatedLottieView
            source={AnimatedIllustration}
            autoPlay
            loop
            className="w-full"
          />
        </View>

        <View>
          <Divider />
        </View>

        <View>
          <Header
            title="Hello"
            secondTitle="Login Now"
            subtitle="Please fill in the form to create a new account and continue"
          />
        </View>

        <View>
          <EmailInput
            onChangeText={setEmail}
            onEndEditing={() =>
              !email.includes('@deped.edu.ph')
                ? setEmailError(true)
                : setEmailError(false)
            }
            showHelper={emailError}
          />
        </View>

        <View>
          <PasswordInput
            onChangeText={setPassword}
            onPress={() => setPasswordSecure(!passwordSecure)}
            onEndEditing={() =>
              !(password.length >= 8)
                ? setPasswordError(true)
                : setPasswordError(false)
            }
            secureTextEntry={passwordSecure}
            showHelper={passwordError}
          />
        </View>

        <View>
          <Button text="Sign In" onPress={signInFunction} />
        </View>

        <LoadingScreen visible={isLoading} />

        {!!signInRequestError && (
          <HelperText className="text-center" type="error">
            {signInRequestError}
          </HelperText>
        )}

        <View>
          <PressableText
            text="Don&lsquo;t have have an account?"
            strongText=" Register here"
            onPress={() => navigation.navigate('Sign Up')}
            center
          />
        </View>

        <View>
          <PressableText
            text="Forgot password?"
            strongText=" Click here"
            onPress={() => navigation.navigate('Forgot Password')}
            center
          />
        </View>
      </View>
    </ScreenContainer>
  );
}
