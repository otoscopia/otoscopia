import React, {useContext, useState} from 'react';
import {View, TouchableOpacity} from 'react-native';
import AnimatedLottieView from 'lottie-react-native';
import {Divider, Text, HelperText} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';
import Container from '../../../components/Container';
import Header from '../components/Header';
import Animation from '../../../assets/sign-in-animation.json';
import EmailInput from '../components/EmailInput';
import PasswordInput from '../components/PasswordInput';
import Button from '../../../components/Button';
import {AuthenticationContext} from '../../../services/authentication/Authentication-Context-Provider';
import Loading from '../../../components/Loading';

export default function SignIn(): React.JSX.Element {
  const navigation = useNavigation();

  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState(false);

  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState(false);
  const [passwordSecure, setPasswordSecure] = useState(true);

  const {signInRequest, signInRequestError} = useContext(AuthenticationContext);

  const signIn = (): void => {
    if (email.length === 0) {
      setEmailError(true);
    } else if (password.length === 0) {
      setPasswordError(true);
    } else if (!emailError && !passwordError) {
      signInRequest(email, password);
    }
  };

  return (
    <Container styles="justify-center space-y-4">
      <View>
        <AnimatedLottieView
          source={Animation}
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
          onEndEditing={() => {
            !email.includes('@deped.edu.ph')
              ? setEmailError(true)
              : setEmailError(false);
          }}
          showHelper={emailError}
        />
      </View>

      <View>
        <PasswordInput
          onChangeText={setPassword}
          onPress={() => {
            setPasswordSecure(!passwordSecure);
          }}
          onEndEditing={() => {
            password.length < 8
              ? setPasswordError(true)
              : setPasswordError(false);
          }}
          secureTextEntry={passwordSecure}
          showHelper={passwordError}
        />
      </View>

      <View>
        <Button text="Sign In" onPress={signIn} />
      </View>

      <Loading />

      {!!signInRequestError && (
        <HelperText className="text-center" type="error">
          {signInRequestError}
        </HelperText>
      )}

      <View>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Sign Up');
          }}>
          <Text className="text-center">Don&lsquo;t have have an account?</Text>
        </TouchableOpacity>
      </View>

      <View>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Forgot Password');
          }}>
          <Text className="text-center">
            Forgot Password? <Text className="font-bold">Click Here</Text>
          </Text>
        </TouchableOpacity>
      </View>
    </Container>
  );
}
