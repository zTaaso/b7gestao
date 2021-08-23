import React from 'react';
import CustomText from '~/src/components/CustomText';
import { MaterialIcons } from '@expo/vector-icons';

import { useSellContext } from '../../../../../../context/SellContext';

import Product from '../../../../../../types/Product';

import { Container, LeftContent, RightContent, DeleteIcon } from './styles';

interface CartProductItemProps {
  product: Product;
  // category: string;
}

const CartProductItem: React.FC<CartProductItemProps> = ({ product }) => {
  //   const { addProductItem } = useSellContext();

  const handlePress = React.useCallback(() => {
    // see product details
    console.log('navegar para detlahe do produto');
  }, []);

  return (
    <Container onPress={handlePress}>
      <LeftContent>
        <CustomText fontSize="16">{product.amount}x </CustomText>

        <CustomText fontSize="16" font="Montserrat_Bold">
          {`   ${product.name}`}
        </CustomText>
      </LeftContent>
      <RightContent>
        <CustomText fontSize="16"> {product.formattedPrice}</CustomText>

        <DeleteIcon>
          <MaterialIcons name="delete" size={28} color="#ff3c00" />
        </DeleteIcon>
      </RightContent>
    </Container>
  );
};

export default CartProductItem;
