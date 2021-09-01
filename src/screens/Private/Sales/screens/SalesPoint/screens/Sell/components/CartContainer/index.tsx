import React, { useEffect, useState } from 'react';
import { InteractionManager } from 'react-native';
import { Feather, FontAwesome5 } from '@expo/vector-icons';

import { useSellContext } from '../../context/SellContext';

import CustomText from '~/src/components/CustomText';
import CartDetails from './components/CartDetails';

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

const SalesPointCartContainer: React.FC = () => {
  const { cartInfo, showCartState } = useSellContext();

  const [isMounted, setIsMounted] = useState(false);

  const [isDetailsToggled, setIsDetailsToggled] = useState(false);

  console.log('cart container remontado');

  const handleCartInfoPress = React.useCallback(() => {
    setIsDetailsToggled(!isDetailsToggled);
  }, [isDetailsToggled]);

  useEffect(() => {
    InteractionManager.runAfterInteractions(() => {
      setIsMounted(true);
    });
  }, []);

  const [shoudShowCart] = showCartState;
  if (!shoudShowCart) return null;

  if (!isMounted) {
    return null;
  }

  return (
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
      <CartDetails isVisible={isDetailsToggled} />
      <CartContainer>
        <CartInfo onPress={handleCartInfoPress}>
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
              {cartInfo.productsAmount} Produtos
            </CustomText>
            <CustomText fontSize="14" numberOfLines={1} style={{ maxWidth: 130 }}>
              {cartInfo.formattedTotalPrice}
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
};

export default React.memo(SalesPointCartContainer);
