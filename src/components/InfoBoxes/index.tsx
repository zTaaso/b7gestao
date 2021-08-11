import React from 'react';
import { Feather } from '@expo/vector-icons';

import CashUpIcon from '~/src/assets/icons/money-up.svg';
import DataCheckIcon from '~/src/assets/icons/data-check.svg';

import { Container, BoxContainer, IconContainer, TextContainer } from './styles';
import CustomText from '~/src/components/CustomText';
import { Linking, View, ViewProps } from 'react-native';

const InfoBoxes: React.FC<ViewProps> = (props) => {
  return (
    <Container {...props}>
      <BoxContainer
        style={{
          shadowColor: '#000',
          shadowOffset: { width: 1, height: 1 },
          shadowOpacity: 0.2,
          shadowRadius: 10,

          elevation: 8,
        }}
      >
        <IconContainer>
          <CashUpIcon width="60" height="60" />
        </IconContainer>
        <TextContainer>
          <CustomText color="#30D88B" fontSize="12">
            Acompanhe todas as suas movimentações em tempo real.
          </CustomText>

          <CustomText
            color="#30D88B"
            fontSize="12"
            style={{ marginTop: 15 }}
            underline
            onPress={() => Linking.openURL('https://letmegooglethat.com/?q=Fluxo%20financeiro')}
          >
            Saiba mais sobre fluxo financeiro.
          </CustomText>
        </TextContainer>
      </BoxContainer>

      <BoxContainer
        style={{
          shadowColor: '#000',
          shadowOffset: { width: 1, height: 1 },
          shadowOpacity: 0.2,
          shadowRadius: 10,

          elevation: 8,
        }}
      >
        <IconContainer>
          <DataCheckIcon width="60" height="60" />
        </IconContainer>
        <TextContainer>
          <CustomText color="#30D88B" fontSize="12">
            Mantenha seus dados salvos, organizados e seguros.
          </CustomText>
          <CustomText
            color="#30D88B"
            fontSize="12"
            style={{ marginTop: 15 }}
            underline
            onPress={() => Linking.openURL('https://letmegooglethat.com/?q=Organização financeira')}
          >
            Saiba mais sobre organização financeira.
          </CustomText>
        </TextContainer>
      </BoxContainer>
    </Container>
  );
};

export default InfoBoxes;
