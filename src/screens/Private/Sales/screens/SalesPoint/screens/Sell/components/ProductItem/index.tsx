import React from 'react';
import CustomText from '~/src/components/CustomText';
import { useSellContext } from '../../context/SellContext';

import Product from '../../types/Product';

import { Container, IconContainer, TextContainer } from './styles';

interface ProductItemProps {
  product: Product;
  // category: string;
}

const ProductItem: React.FC<ProductItemProps> = ({ children, product }) => {
  const { addProductItem } = useSellContext();

  const handlePress = React.useCallback(() => {
    addProductItem(product);
  }, [addProductItem, product]);

  return (
    <Container onPress={handlePress}>
      <IconContainer>
        {children || (
          <CustomText fontSize="30" font="Montserrat_Bold">
            {product.name.slice(0, 2)}
          </CustomText>
        )}
      </IconContainer>
      <TextContainer>
        <CustomText font="Montserrat_Bold" fontSize="14" numberOfLines={1}>
          {`${product.name}`}
        </CustomText>
        <CustomText font="Montserrat_Bold" fontSize="14" numberOfLines={1}>
          {`${product.formattedPrice}`}
        </CustomText>
      </TextContainer>
    </Container>
  );
};

export default React.memo(ProductItem);
