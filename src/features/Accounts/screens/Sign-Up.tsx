import {TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import {Checkbox, Divider, Text} from 'react-native-paper';
import AnimatedLottieView from 'lottie-react-native';
import {useNavigation} from '@react-navigation/native';
import Container from '../../../components/Container';
import Animation from '../../../assets/sign-up-animation.json';
import Header from '../components/Header';
import PhoneNumberTextInput from '../../../components/Phone-Number-TextInput';
import EmailInput from '../components/EmailInput';
import Policy from '../components/Policy';
import Button from '../../../components/Button';

export default function SignUp(): React.JSX.Element {
  const [phoneNumber, setPhoneNumber] = useState(0);
  const [phoneNumberError, setPhoneNumberError] = useState(false);

  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState(false);

  const [checkbox, setCheckbox] = useState(false);
  const [checkboxError, setCheckboxError] = useState(false);

  const [modal, setModal] = useState(false);

  const navigation = useNavigation();

  const signUpFunction = (): void => {
    if (email.length === 0) {
      setEmailError(true);
    }

    if (phoneNumber.toString().length <= 10) {
      setPhoneNumberError(true);
    }

    if (!checkbox) {
      setCheckboxError(true);
    }

    if (!phoneNumberError && !emailError && checkbox) {
      navigation.navigate('Verification', {
        email,
        phoneNumber,
      });
    }
  };

  return (
    <Container styles="space-y-4 justify-center">
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
          secondTitle="Create account"
          thirdTitle="now."
          subtitle="Please fill in the form to create a new account and continue"
        />
      </View>

      <View>
        <PhoneNumberTextInput
          onChangeText={setPhoneNumber}
          onEndEditing={() => {
            phoneNumber.toString().length !== 11
              ? setPhoneNumberError(true)
              : setPhoneNumberError(false);
          }}
          showHelper={phoneNumberError}
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
      <Policy
        visible={modal}
        onDismiss={() => {
          setModal(false);
        }}
      />

      <View className="flex-row w-[90%] items-center">
        <Checkbox
          status={checkbox ? 'checked' : 'unchecked'}
          onPress={() => {
            setCheckboxError(false);
            setCheckbox(!checkbox);
          }}
          uncheckedColor={checkboxError ? 'red' : undefined}
        />

        <TouchableOpacity
          onPress={() => {
            setModal(true);
          }}>
          <Text>
            <Text>I agree to the </Text>
            <Text className="font-bold">terms & conditions </Text>
            <Text>and </Text>
            <Text className="font-bold">privacy policy</Text>
          </Text>
        </TouchableOpacity>
      </View>

      <View>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Sign In');
          }}>
          <Text className="text-center">
            Already have an Account?{' '}
            <Text className="font-bold">Click Here</Text>
          </Text>
        </TouchableOpacity>
      </View>

      <View>
        <Button text="Sign Up" onPress={signUpFunction} />
      </View>
    </Container>
  );
}
