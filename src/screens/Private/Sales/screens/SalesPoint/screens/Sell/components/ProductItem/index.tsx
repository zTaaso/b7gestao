import { useNavigation } from '@react-navigation/native';
import React from 'react';
import CustomText from '~/src/components/CustomText';

import { Container, IconContainer, TextContainer } from './styles';

interface ProductItemProps {
  title: string;
  price: string;
  // category: string;
}

const ProductItem: React.FC<ProductItemProps> = ({ children, title, price }) => {
  const handlePress = React.useCallback(() => {
    // a fazer: adicionar produto em um contexto global de vendas
    console.log(`clicou no ${title}!`);
  }, []);

  return (
    <Container onPress={handlePress}>
      <IconContainer>
        {children || (
          <CustomText fontSize="30" font="Montserrat_Bold">
            {title.slice(0, 2)}
          </CustomText>
        )}
      </IconContainer>
      <TextContainer>
        <CustomText font="Montserrat_Bold" fontSize="14" numberOfLines={1}>
          {`${title}`}
        </CustomText>
        <CustomText font="Montserrat_Bold" fontSize="14" numberOfLines={1}>
          {`${price}`}
        </CustomText>
      </TextContainer>
    </Container>
  );
};

export default React.memo(ProductItem);
