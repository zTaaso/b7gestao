import React from 'react';
import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

import { Container, IconContainer, TextContainer } from './styles';
import CustomText from '~/src/components/CustomText';

interface PrivateHeaderProps {
  screenName?: string;
  showBackButton?: boolean;
}

const PrivateHeader: React.FC<PrivateHeaderProps> = ({ screenName, showBackButton = true }) => {
  const navigation = useNavigation();

  return (
    <Container>
      {showBackButton && (
        <IconContainer onPress={() => navigation.goBack()}>
          <MaterialIcons name="keyboard-arrow-left" size={50} color="#FFF" />
        </IconContainer>
      )}
      <TextContainer hasPaddingRight={showBackButton}>
        <CustomText color="#FFF" font="Montserrat_Bold">
          {screenName}
        </CustomText>
      </TextContainer>
    </Container>
  );
};

export default PrivateHeader;
