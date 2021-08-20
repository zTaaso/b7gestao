import React from 'react';
import { Feather, FontAwesome5 } from '@expo/vector-icons';

import CustomText from '~/src/components/CustomText';

import {
  Container,
  EntityContainer,
  EntityBlock,
  EntityIconContainer,
  CartContainer,
  CartInfo,
  ChargeButtonContainer,
  ChargeButton,
  CartIconContainer,
  CartTextInfo,
} from './styles';

const SalesPointCartContainer: React.FC = () => (
  <Container>
    <EntityContainer>
      <EntityBlock>
        <EntityIconContainer>
          <FontAwesome5 name="user-tag" size={24} color="#30d88b" />
        </EntityIconContainer>
        <CustomText font="Montserrat_Bold" fontSize="16">
          Vendedor
        </CustomText>
      </EntityBlock>
      <EntityBlock hasBorderLeft>
        <EntityIconContainer>
          <FontAwesome5 name="user-alt" size={24} color="#30d88b" />
        </EntityIconContainer>
        <CustomText font="Montserrat_Bold" fontSize="16">
          Comprador
        </CustomText>
      </EntityBlock>
    </EntityContainer>
    <CartContainer>
      <CartInfo>
        <CartIconContainer>
          <Feather name="shopping-cart" size={28} color="#30D88B" />
        </CartIconContainer>
        <CartTextInfo>
          <CustomText
            fontSize="16"
            font="Montserrat_Bold"
            numberOfLines={1}
            style={{ maxWidth: 130 }}
          >
            280 Produtos
          </CustomText>
          <CustomText fontSize="14" numberOfLines={1} style={{ maxWidth: 130 }}>
            R$ 20.000,00
          </CustomText>
        </CartTextInfo>
      </CartInfo>
      <ChargeButtonContainer>
        <ChargeButton>
          <CustomText color="#000" font="Montserrat_Bold">
            Cobrar
          </CustomText>
        </ChargeButton>
      </ChargeButtonContainer>
    </CartContainer>
  </Container>
);

export default SalesPointCartContainer;
