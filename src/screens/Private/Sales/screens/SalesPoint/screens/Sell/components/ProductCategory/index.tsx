import { useNavigation } from '@react-navigation/native';
import React from 'react';
import CustomText from '~/src/components/CustomText';

import { Container, IconContainer, TextContainer } from './styles';

interface ProductCategoryProps {
  title?: string;
  screenName?: string;
  category?: string;
  onPress?: () => void;
}

const ProductCategory: React.FC<ProductCategoryProps> = ({
  children,
  title,
  screenName,
  category,
  onPress,
}) => {
  const navigation = useNavigation();

  const onPressFunc = onPress
    ? onPress
    : () => navigation.navigate('SalesPointSellProductsListing', { screenName, category });

  return (
    <Container onPress={onPressFunc}>
      <IconContainer>
        {children || (
          <CustomText fontSize="30" font="Montserrat_Bold">
            {title.slice(0, 2)}
          </CustomText>
        )}
      </IconContainer>
      <TextContainer>
        <CustomText font="Montserrat_Bold" fontSize="14">
          {title}
        </CustomText>
      </TextContainer>
    </Container>
  );
};

export default ProductCategory;
