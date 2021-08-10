import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { TouchableOpacityProps } from 'react-native';

import { Container } from './styles';

interface SendButtonProps extends TouchableOpacityProps {}

const SendButton: React.FC<SendButtonProps> = (props) => (
  <Container {...props}>
    <Ionicons name="send" size={24} color="white" />
  </Container>
);

export default SendButton;
