import { View } from 'react-native';
import React, { useState } from 'react';
import AnimatedLottieView from 'lottie-react-native';
import { useNavigation } from '@react-navigation/native';
import ScreenContainer from '../../../components/Screen-Container';
import Illustration from '../../../assets/user-information-animation.json';
import Header from '../components/Header';
import TextInput from '../../../components/Text-Input';
import Button from '../../../components/Button';

export default function UserInformation() {
  const navigation = useNavigation();

  const [username, setUsername] = useState('');
  const [usernameError, setUsernameError] = useState('');

  const [firstName, setFirstName] = useState('');
  const [firstNameError, setFirstNameError] = useState('');

  const [middleName, setMiddleName] = useState('');
  const [middleNameError, setMiddleNameError] = useState('');

  const [familyName, setFamilyName] = useState('');
  const [familyNameError, setFamilyNameError] = useState('');

  const [suffixName, setSuffixName] = useState('');

  return (
    <ScreenContainer>
      <View className="flex-1 justify-center p-4 space-y-4">
        <View>
          <AnimatedLottieView
            source={Illustration}
            autoPlay
            loop
            className="w-full"
          />
        </View>

        <View>
          <Header
            title="Set your information"
            subtitle="Please enter your information"
          />
        </View>

        <View>
          <TextInput
            label="Username"
            onChangeText={setUsername}
            onEndEditing={() =>
              username.length !== 0
                ? setUsernameError(false)
                : setUsernameError(true)
            }
            showHelper={usernameError}
            helperMessage="Username Error"
            placeholder="Prince"
          />
        </View>

        <View>
          <TextInput
            label="First Name"
            onChangeText={setFirstName}
            onEndEditing={() =>
              firstName.length !== 0
                ? setFirstNameError(false)
                : setFirstNameError(true)
            }
            showHelper={firstNameError}
            helperMessage="First Name Error"
            placeholder="Laurence"
          />
        </View>

        <View>
          <TextInput
            label="Middle Name"
            onChangeText={setMiddleName}
            onEndEditing={() =>
              middleName.length !== 0
                ? setMiddleNameError(false)
                : setMiddleNameError(true)
            }
            showHelper={middleNameError}
            helperMessage="Middle Name Error"
            placeholder="Avila"
          />
        </View>

        <View>
          <TextInput
            label="Family Name"
            onChangeText={setFamilyName}
            onEndEditing={() =>
              familyName.length !== 0
                ? setFamilyNameError(false)
                : setFamilyNameError(true)
            }
            showHelper={familyNameError}
            helperMessage="Family Name Error"
            placeholder="Macabato"
          />
        </View>

        <View>
          <TextInput
            label="Name Suffix"
            onChangeText={setSuffixName}
            placeholder="Jr."
          />
        </View>

        <View>
          <Button
            text="Continue"
            onPress={() => navigation.navigate('Gender')}
          />
        </View>
      </View>
    </ScreenContainer>
  );
}
