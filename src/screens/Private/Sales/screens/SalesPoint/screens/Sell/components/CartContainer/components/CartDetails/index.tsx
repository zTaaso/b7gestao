import React, { useEffect, useRef } from 'react';
import { Animated } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import CustomText from '~/src/components/CustomText';
import CartProductItem from './components/CartProductItem';

import Product from '../../../../types/Product';

import { Container } from './styles';

interface CartDetailsProps {
  isVisible: boolean;
}

const CartDetails: React.FC<CartDetailsProps> = ({ isVisible }) => {
  const heightAnim = useRef(new Animated.Value(0)).current;

  const products: Product[] = [
    { id: 1, name: 'Arroz', price: 10, formattedPrice: 'R$10,00', image_url: '', amount: 1 },
    { id: 2, name: 'Feijão', price: 15, formattedPrice: 'R$15,00', image_url: '', amount: 1 },
    { id: 3, name: 'Macarrão', price: 12, formattedPrice: 'R$12,00', image_url: '', amount: 1 },
    { id: 4, name: 'Hambúrguer', price: 12, formattedPrice: 'R$15,00', image_url: '', amount: 1 },
  ];

  const FLATLIST_MAX_HEIGHT = 515;
  const DEFAULT_FLATLIST_HEIGHT = products.length * 55;
  const flatlistHeight =
    DEFAULT_FLATLIST_HEIGHT > FLATLIST_MAX_HEIGHT ? FLATLIST_MAX_HEIGHT : DEFAULT_FLATLIST_HEIGHT;

  const increaseHeight = () => {
    Animated.timing(heightAnim, {
      // toValue: 515,
      toValue: flatlistHeight,
      duration: 500,
      useNativeDriver: false,
    }).start();
  };

  const decreaseHeight = () => {
    Animated.timing(heightAnim, {
      toValue: 0,
      duration: 700,
      useNativeDriver: false,
    }).start();
  };

  const renderProductItem = React.useCallback(({ item }) => <CartProductItem product={item} />, []);
  const productKeyExtractor = React.useCallback((item) => item.id.toString(), []);

  useEffect(() => {
    if (isVisible) {
      increaseHeight();
      return;
    }

    decreaseHeight();
  }, [isVisible]);

  return (
    <Animated.FlatList
      style={{
        height: heightAnim,
        flexGrow: 1,
      }}
      contentContainerStyle={{ flexGrow: 1 }}
      data={products}
      renderItem={renderProductItem}
      keyExtractor={productKeyExtractor}
      ListEmptyComponent={
        <Container>
          <CustomText fontSize="24">{`Carrinho vazio \n`}</CustomText>
          <MaterialCommunityIcons name="cart-off" size={40} color="#30D88B" />
        </Container>
      }
    />
  );
};

export default React.memo(CartDetails);
