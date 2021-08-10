import React from 'react';
import { Feather } from '@expo/vector-icons';

import CashIcon from '~/src/assets/icons/cash.svg';
import TagIcon from '~/src/assets/icons/tag.svg';

import { Container, ButtonBox, IconContainer } from './styles';
import CustomText from '~/src/components/CustomText';
import { useNavigation } from '@react-navigation/native';

const ButtonSection = () => {
  const navigation = useNavigation();

  return (
    <Container>
      <ButtonBox
        style={{
          shadowColor: '#000',
          shadowOffset: { width: 1, height: 1 },
          shadowOpacity: 0.2,
          shadowRadius: 10,

          elevation: 8,
        }}
        onPress={() => navigation.navigate('Payments')}
      >
        <IconContainer>
          <CashIcon width="35" height="35" />
        </IconContainer>
        <CustomText color="#279DD1" fontSize="12">
          Pagamentos
        </CustomText>
      </ButtonBox>

      {/* <ButtonBox
        style={{
          shadowColor: '#000',
          shadowOffset: { width: 1, height: 1 },
          shadowOpacity: 0.2,
          shadowRadius: 10,

          elevation: 8,
        }}
        onPress={() => navigation.navigate('Sales')}
      >
        <IconContainer>
          <TagIcon width="35" height="35" />
        </IconContainer>
        <CustomText color="#279DD1" fontSize="12">
          Vendas
        </CustomText>
      </ButtonBox> */}

      <ButtonBox
        style={{
          shadowColor: '#000',
          shadowOffset: { width: 1, height: 1 },
          shadowOpacity: 0.2,
          shadowRadius: 10,

          elevation: 8,
        }}
        onPress={() => navigation.navigate('MessagesChats')}
      >
        <IconContainer>
          <Feather name="mail" size={35} color="#3AD29F" />
        </IconContainer>
        <CustomText color="#279DD1" fontSize="12">
          Mensagens
        </CustomText>
      </ButtonBox>
    </Container>
  );
};

export default ButtonSection;
