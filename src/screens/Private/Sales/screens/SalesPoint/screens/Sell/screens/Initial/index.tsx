import React from 'react';
import { AntDesign, FontAwesome, Ionicons } from '@expo/vector-icons';

import PrivateLayout from '~/src/screens/_Layouts/PrivateLayout';

import ProductCategory from '../../components/ProductCategory';
import CategoryList from '../../components/ItemsList';

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

const SalesPointSellInitial: React.FC = () => (
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

export default SalesPointSellInitial;
