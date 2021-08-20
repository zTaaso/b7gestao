import React, { useEffect, useRef } from 'react';
import { Animated } from 'react-native';
import CustomText from '~/src/components/CustomText';

import { Container } from './styles';

interface CartDetailsProps {
  isVisible: boolean;
}

const CartDetails: React.FC<CartDetailsProps> = ({ isVisible }) => {
  const heightAnim = useRef(new Animated.Value(0)).current;

  const increaseHeight = () => {
    Animated.timing(heightAnim, {
      toValue: 500,
      duration: 500,
      useNativeDriver: false,
    }).start();
  };

  const decreaseHeight = () => {
    Animated.timing(heightAnim, {
      toValue: 0,
      duration: 1000,
      useNativeDriver: false,
    }).start();
  };

  useEffect(() => {
    if (isVisible) {
      increaseHeight();
      return;
    }

    decreaseHeight();
  }, [isVisible]);

  return (
    <Animated.ScrollView
      style={{
        height: heightAnim,
        // padding: 10,
        // borderColor: 'red',
        // borderWidth: 1,
      }}
      contentContainerStyle={{ flexGrow: 1 }}
    >
      <Container>
        <CustomText>Em breve</CustomText>
      </Container>
    </Animated.ScrollView>
  );
};

export default CartDetails;
