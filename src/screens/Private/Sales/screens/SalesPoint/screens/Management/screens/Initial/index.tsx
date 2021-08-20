import React, { useEffect, useState } from 'react';
import { MaterialIcons, MaterialCommunityIcons, FontAwesome5, Feather } from '@expo/vector-icons';
import { FlatList } from 'react-native-gesture-handler';

import PrivateLayout from '~/src/screens/_Layouts/PrivateLayout';
import OptionItem from '~/src/screens/Private/components/Option';

const optionsItems = [
  {
    label: 'Controle de Caixa',
    navigateTo: 'SalesPointManagementCashControl',
    Icon: () => <FontAwesome5 name="money-bill" size={24} color="#30D88B" />,
  },
  {
    label: 'Pedidos em Aberto',
    navigateTo: 'SalesPointManagementOpenOrders',
    Icon: () => (
      <MaterialCommunityIcons name="order-bool-ascending-variant" size={24} color="#30D88B" />
    ),
  },
  {
    label: 'Conta de Clientes',
    navigateTo: 'SalesPointManagementClients',
    Icon: () => <MaterialIcons name="people" size={24} color="#30D88B" />,
  },
  {
    label: 'Consultar Estoque',
    navigateTo: 'SalesPointManagementStock',
    Icon: () => <Feather name="box" size={24} color="#30D88B" />,
  },
  {
    label: 'Consultar Vendas',
    navigateTo: 'SalesPointManagementSales',
    Icon: () => <FontAwesome5 name="tags" size={24} color="#30D88B" />,
  },
];

const SalesPointManagementInitial: React.FC = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return <PrivateLayout screenName="Ajustes" showBackButton={false} />;
  }

  return (
    <PrivateLayout screenName="Gestão" showBackButton={false}>
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

export default SalesPointManagementInitial;
