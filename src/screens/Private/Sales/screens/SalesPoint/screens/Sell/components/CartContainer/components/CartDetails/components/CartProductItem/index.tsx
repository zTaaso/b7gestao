import React from 'react';
import { useNavigation } from '@react-navigation/core';
import { MaterialIcons } from '@expo/vector-icons';

import { useSellContext } from '../../../../../../context/SellContext';

import Product from '../../../../../../types/Product';
import CustomText from '~/src/components/CustomText';
import asyncAlert from '~/src/util/asyncAlert';

import { Container, LeftContent, RightContent, DeleteIcon } from './styles';

interface CartProductItemProps {
  product: Product;
  // category: string;
}

const CartProductItem: React.FC<CartProductItemProps> = ({ product }) => {
  const { removeProductItem, showCartState } = useSellContext();

  const navigation = useNavigation();

  console.log(`${product.name} renderizou`);

  const handlePress = React.useCallback(() => {
    // see product details
    navigation.navigate('SalesPointSellProductDetails', { product });

    const [, setShouldShowCart] = showCartState;
    setShouldShowCart(false);
  }, [product, navigation]);

  const handleRemove = React.useCallback(async () => {
    const isUserSure = await asyncAlert(
      'Remover produto',
      `Deseja remover o produto ${product.name}?`,
      [{ text: 'Não' }, { text: 'Sim, remover', returnTrue: true }]
    );

    console.log({ isUserSure });
    if (!isUserSure) return;

    removeProductItem(product);
  }, [removeProductItem]);

  return React.useMemo(
    () => (
      <Container onPress={handlePress}>
        <LeftContent>
          <CustomText fontSize="16">{product.amount}x </CustomText>

          <CustomText fontSize="16" font="Montserrat_Bold">
            {`   ${product.name}`}
          </CustomText>
        </LeftContent>
        <RightContent>
          <CustomText fontSize="16"> {product.formattedPrice}</CustomText>

          <DeleteIcon onPress={handleRemove}>
            <MaterialIcons name="delete" size={28} color="#E63874" />
          </DeleteIcon>
        </RightContent>
      </Container>
    ),
    [product, handleRemove]
  );
};

export default React.memo(CartProductItem);
