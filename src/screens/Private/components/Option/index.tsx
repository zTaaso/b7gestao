import React from 'react';
import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/core';

import CustomText from '~/src/components/CustomText';

import { Container, IconContainer, Name, ArrowIcon } from './styles';

interface OptionProps {
  Icon: React.FC;
  label: string;
  navigateTo: string;
}

const OptionItem: React.FC<OptionProps> = ({ Icon, label, navigateTo }) => {
  const navigation = useNavigation();

  return (
    <Container onPress={() => navigation.navigate(navigateTo)}>
      <IconContainer>
        <Icon />
      </IconContainer>

      <Name>
        <CustomText font="Montserrat_Bold" fontSize="17" color="#279DD1" textAlign="left">
          {label}
        </CustomText>
      </Name>

      <ArrowIcon>
        <MaterialIcons name="keyboard-arrow-right" size={27} color="#279DD1" />
      </ArrowIcon>
    </Container>
  );
};

export default OptionItem;
