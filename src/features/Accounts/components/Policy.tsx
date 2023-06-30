import {useColorScheme, StyleSheet, ScrollView} from 'react-native';
import React from 'react';
import colors from '../../../infrastructure/themes/colors';
import {Modal, Portal, Text} from 'react-native-paper';
import {
  TermsAndConditions,
  PrivacyPolicy,
} from '../../../services/mock-data/index';

interface PolicyProps {
  visible: boolean;
  onDismiss: () => boolean;
}

export default function Policy({
  visible,
  onDismiss,
}: PolicyProps): React.JSX.Element {
  const colorScheme = useColorScheme() === 'dark';

  const style = StyleSheet.create({
    modalStyle: {
      backgroundColor: colorScheme ? colors.dark.surface : colors.light.surface,
      borderRadius: 5,
      marginHorizontal: 16,
      maxHeight: '70%',
      padding: 20,
    },
  });

  return (
    <Portal>
      <Modal
        visible={visible}
        onDismiss={onDismiss}
        contentContainerStyle={style.modalStyle}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Text className="font-bold text-2xl text-center">
            Terms and Conditions
          </Text>
          <Text>{TermsAndConditions}</Text>

          <Text className="font-bold text-2xl text-center">Privacy Policy</Text>
          <Text>{PrivacyPolicy}</Text>
        </ScrollView>
      </Modal>
    </Portal>
  );
}
