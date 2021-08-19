import React, { useEffect, useState } from 'react';
import {
  MaterialIcons,
  AntDesign,
  MaterialCommunityIcons,
  FontAwesome,
  FontAwesome5,
} from '@expo/vector-icons';
import { FlatList } from 'react-native-gesture-handler';

import PrivateLayout from '~/src/screens/_Layouts/PrivateLayout';
import OptionItem from '~/src/screens/Private/components/Option';

const optionsItems = [
  {
    label: 'Cadastro de Categorias',
    navigateTo: 'SalesPointRegisterCategories',
    Icon: () => (
      <MaterialCommunityIcons name="format-list-bulleted-type" size={24} color="#30D88B" />
    ),
  },
  {
    label: 'Cadastro de Produtos',
    navigateTo: 'SalesPointRegisterProducts',
    Icon: () => <FontAwesome name="tags" size={24} color="#30D88B" />,
  },
  {
    label: 'Cadastro de Modificadores',
    navigateTo: 'SalesPointRegisterModifiers',
    Icon: () => <AntDesign name="edit" size={24} color="#30D88B" />,
  },
  {
    label: 'Cadastro de Clientes',
    navigateTo: 'SalesPointRegisterClients',
    Icon: () => <FontAwesome5 name="user-alt" size={24} color="#30d88b" />,
  },
  {
    label: 'Cadastro de Vendedores',
    navigateTo: 'SalesPointRegisterSellers',
    Icon: () => <FontAwesome5 name="user-tag" size={24} color="#30d88b" />,
  },
];

const SalesPointRegisterInitial: React.FC = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return <PrivateLayout screenName="Cadastro" showBackButton={false} />;
  }

  return (
    <PrivateLayout screenName="Cadastro" showBackButton={false}>
      <FlatList
        data={optionsItems}
        keyExtractor={(item) => item.navigateTo}
        renderItem={({ item }) => (
          <OptionItem Icon={item.Icon} label={item.label} navigateTo={item.navigateTo} />
        )}
      />
    </PrivateLayout>
  );
};

export default SalesPointRegisterInitial;
