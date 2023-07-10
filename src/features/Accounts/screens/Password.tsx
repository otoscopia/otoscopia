import {View} from 'react-native';
import React, {useEffect, useState} from 'react';
import AnimatedLottieView from 'lottie-react-native';
import {Checkbox, Text} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';
import Container from '../../../components/Container';
import Animation from '../../../assets/password-animation.json';
import Header from '../components/Header';
import PasswordInput from '../components/PasswordInput';
import Button from '../../../components/Button';
import colors from '../../../infrastructure/themes/colors';

const regexSymbolSearch = /[+=\/\-!@#$%^&*(){}[\]\\';:".<>,?_]/;
const regexCamelCaseSearch = /[a-z][A-Z]/;

export default function Password(): React.JSX.Element {
  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState(false);
  const [passwordSecure, setPasswordSecure] = useState(true);

  const [confirmPassword, setConfirmPassword] = useState('');
  const [confirmPasswordError, setConfirmPasswordError] = useState(false);
  const [confirmPasswordSecure, setConfirmPasswordSecure] = useState(true);

  const [minPassword, setMinPassword] = useState(false);
  const [camelCase, setCamelCase] = useState(false);
  const [hasSymbol, setHasSymbol] = useState(false);

  const navigation = useNavigation();

  console.log(regexCamelCaseSearch.test(password), password);

  const Submit = (): void => {
    if (minPassword && camelCase && hasSymbol && password === confirmPassword) {
      navigation.navigate('User Information');
    }
  };

  useEffect(() => {
    setCamelCase(regexCamelCaseSearch.test(password));
    setHasSymbol(regexSymbolSearch.test(password));
    setMinPassword(password.length >= 8);
  }, [password]);

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
        <Header
          title="Set your password"
          subtitle="Please enter your password"
        />
      </View>

      <View>
        <PasswordInput
          onChangeText={setPassword}
          onPress={() => {
            setPasswordSecure(!passwordSecure);
          }}
          onEndEditing={() => {
            !(password.length >= 8)
              ? setPasswordError(true)
              : setPasswordError(false);
          }}
          secureTextEntry={passwordSecure}
          showHelper={passwordError}
        />
      </View>

      <View>
        <PasswordInput
          label="Verify Password"
          onChangeText={setConfirmPassword}
          onPress={() => {
            setConfirmPasswordSecure(!confirmPasswordSecure);
          }}
          onEndEditing={() => {
            !(confirmPassword === password)
              ? setConfirmPasswordError(true)
              : setConfirmPasswordError(false);
          }}
          secureTextEntry={confirmPasswordSecure}
          showHelper={confirmPasswordError}
          helperMessage="Password does not match"
        />
      </View>

      <View>
        <View className="flex-row items-center space-x-2">
          <Text className={`${minPassword ? 'line-through' : ''}`}>
            At least 8 characters long
          </Text>
          {minPassword && (
            <Icon name="checkmark-outline" color={colors.primary} />
          )}
        </View>

        <View className="flex-row items-center space-x-2">
          <Text className={`${camelCase ? 'line-through' : ''}`}>
            Both uppercase and lowercase letter
          </Text>
          {camelCase && (
            <Icon name="checkmark-outline" color={colors.primary} />
          )}
        </View>

        <View className="flex-row items-center space-x-2">
          <Text className={`${hasSymbol ? 'line-through' : ''}`}>
            At least one number or symbol
          </Text>
          {hasSymbol && (
            <Icon name="checkmark-outline" color={colors.primary} />
          )}
        </View>
      </View>

      <View>
        <Button text="Submit" onPress={Submit} />
      </View>
    </Container>
  );
}
