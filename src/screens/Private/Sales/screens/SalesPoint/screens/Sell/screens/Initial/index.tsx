import React, { useState, useEffect } from 'react';
import { InteractionManager } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import { AntDesign, FontAwesome, Ionicons } from '@expo/vector-icons';

import PrivateLayout from '~/src/screens/_Layouts/PrivateLayout';

import ProductCategory from '../../components/ProductCategory';
import CategoryList from '../../components/ItemsList';

import { useSellContext } from '../../context/SellContext';

const categoryItemsInfo = [
  {
    props: { title: 'Todos', category: 'all', screenName: 'Todos os produtos' },
    Icon: <FontAwesome name="tags" size={40} color="#30D88B" />,
  },
  {
    props: { title: 'Favoritos', category: 'favourite', screenName: 'Produtos Favoritos' },
    Icon: <AntDesign name="heart" size={40} color="#30D88B" />,
  },
  {
    props: { title: 'Geral', category: 'geral', screenName: 'Geral' },
    Icon: null,
  },
];

const SalesPointSellInitial: React.FC = () => {
  const [isMounted, setIsMounted] = useState(false);
  const { showCartState } = useSellContext();
  useEffect(() => {
    if (!isMounted) {
      setIsMounted(true);
    }
  }, []);

  useFocusEffect(() => {
    InteractionManager.runAfterInteractions(() => {
      const [, setShowCart] = showCartState;
      setShowCart(true);
    });
  });

  if (!isMounted) {
    return <PrivateLayout screenName="Vender" showBackButton={false} />;
  }

  return (
    <PrivateLayout screenName="Vender" showBackButton={false}>
      <CategoryList>
        {categoryItemsInfo.map((category) => (
          <ProductCategory key={category.props.category} {...category.props}>
            {category.Icon}
          </ProductCategory>
        ))}

        <ProductCategory title="Adicionar Categoria" onPress={() => {}}>
          <Ionicons name="ios-add" size={40} color="#30D88B" />
        </ProductCategory>
      </CategoryList>
    </PrivateLayout>
  );
};

export default SalesPointSellInitial;
