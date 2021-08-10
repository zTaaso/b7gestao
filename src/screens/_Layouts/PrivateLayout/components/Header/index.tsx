import React from 'react';
import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

import { Container, IconContainer, TextContainer } from './styles';
import CustomText from '~/src/components/CustomText';

interface PrivateHeaderProps {
  screenName?: string;
}

const PrivateHeader: React.FC<PrivateHeaderProps> = ({ screenName }) => {
  const navigation = useNavigation();

  return (
    <Container>
      <IconContainer onPress={() => navigation.goBack()}>
        <MaterialIcons name="keyboard-arrow-left" size={50} color="#FFF" />
      </IconContainer>
      <TextContainer>
        <CustomText color="#FFF">{screenName}</CustomText>
      </TextContainer>
    </Container>
  );
};

export default PrivateHeader;
