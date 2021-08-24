import React, { useEffect, useRef } from 'react';
import { Animated } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import CustomText from '~/src/components/CustomText';
import CartProductItem from './components/CartProductItem';

import { Container } from './styles';
import { useSellContext } from '../../../../context/SellContext';

interface CartDetailsProps {
  isVisible: boolean;
}

const CartDetails: React.FC<CartDetailsProps> = ({ isVisible }) => {
  const heightAnim = useRef(new Animated.Value(0)).current;

  const { selectedProducts } = useSellContext();

  console.log('\n\ncart details render');

  const FLATLIST_MAX_HEIGHT = 515;
  const DEFAULT_FLATLIST_HEIGHT = selectedProducts.length * 55 || 150;
  const flatlistHeight =
    DEFAULT_FLATLIST_HEIGHT > FLATLIST_MAX_HEIGHT ? FLATLIST_MAX_HEIGHT : DEFAULT_FLATLIST_HEIGHT;

  const increaseHeight = () => {
    Animated.timing(heightAnim, {
      toValue: flatlistHeight,
      duration: 250,
      useNativeDriver: false,
    }).start();
  };

  const decreaseHeight = () => {
    Animated.timing(heightAnim, {
      toValue: 0,
      duration: 250,
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

  useEffect(() => {
    if (isVisible) {
      increaseHeight();
    }
  }, [selectedProducts.length]);

  return React.useMemo(
    () => (
      <Animated.FlatList
        style={{
          height: heightAnim,
          flexGrow: 1,
        }}
        contentContainerStyle={{ flexGrow: 1 }}
        data={selectedProducts}
        renderItem={renderProductItem}
        keyExtractor={productKeyExtractor}
        ListEmptyComponent={
          <Container>
            <CustomText fontSize="24">{`Carrinho vazio \n`}</CustomText>
            <MaterialCommunityIcons name="cart-off" size={40} color="#30D88B" />
          </Container>
        }
      />
    ),
    [heightAnim, selectedProducts]
  );
};

export default React.memo(CartDetails);
