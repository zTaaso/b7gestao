import React, { useState } from 'react';
import Toast from 'react-native-toast-message';
import { SimpleLineIcons } from '@expo/vector-icons';

import CustomText from '~/src/components/CustomText';
import MCLogo from '~/src/assets/icons/mc_symbol.svg';

import { Container, Row, TextContainer, IconContainer } from './styles';
import { TouchableOpacity } from 'react-native';

const CreditCard = () => {
  function handleButtonPress() {
    Toast.show({
      text1: 'Em breve...',
      text2: 'Funcionalidade em desenvolvimento 👨‍💻',
      type: 'info',
    });
  }

  return (
    <Container
      style={{
        shadowColor: '#000',
        shadowOffset: { width: 10, height: 10 },
        shadowOpacity: 0.2,
        shadowRadius: 20,

        elevation: 6,
      }}
    >
      <Row>
        <TextContainer>
          <CustomText color="#279DD1" fontSize="15" font="Montserrat_Bold">
            Cartão de Crédito
          </CustomText>
        </TextContainer>
        <TouchableOpacity onPress={handleButtonPress}>
          <SimpleLineIcons name="arrow-right" size={20} color="#279DD1" />
        </TouchableOpacity>
      </Row>

      <Row>
        <TextContainer
          style={{
            alignItems: 'center',
            flexDirection: 'row',
            paddingLeft: 10,
            justifyContent: 'center',
          }}
        >
          <CustomText color="#279DD1" fontSize="20" font="Montserrat_Bold">
            Nubank:{' '}
          </CustomText>
          <CustomText color="#279DD1" fontSize="16" font="Montserrat">
            xxxx xxxx xxxx 1234
          </CustomText>
        </TextContainer>
        <IconContainer>
          <MCLogo width="70" height="70" />
        </IconContainer>
      </Row>
    </Container>
  );
};

export default CreditCard;
