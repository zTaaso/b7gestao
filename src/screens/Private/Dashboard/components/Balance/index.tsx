import React, { useState } from 'react';
import { TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import CustomText from '~/src/components/CustomText';

import { Container, Row, TextContainer } from './styles';

const Balance = () => {
  const [balanceValue, setBalanceValue] = useState('R$ 1280,50');
  const [balanceVisible, setBalanceVisible] = useState(false);

  const eyeIcon = balanceVisible ? 'eye' : 'eye-off';
  const balanceVisibleValue = balanceVisible ? balanceValue : '******';

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
          <CustomText color="#30D88B" fontSize="15" font="Montserrat_Bold">
            Saldo em Contas
          </CustomText>
        </TextContainer>
        <TouchableOpacity onPress={() => setBalanceVisible(!balanceVisible)}>
          <MaterialCommunityIcons name={eyeIcon} size={24} color="#30D88B" />
        </TouchableOpacity>
      </Row>

      <Row>
        <TextContainer style={{ alignItems: 'center' }}>
          <CustomText color="#000" fontSize="13" textAlign="left">
            Total:
          </CustomText>

          <CustomText color="#000" fontSize="30" textAlign="left">
            {balanceVisibleValue}
          </CustomText>
        </TextContainer>
      </Row>
      <Row>
        <TextContainer style={{ alignItems: 'center' }}>
          <CustomText color="#000" fontSize="12">
            Última despesa em: Pagamento de Encomen...
          </CustomText>
        </TextContainer>
      </Row>
    </Container>
  );
};

export default Balance;
