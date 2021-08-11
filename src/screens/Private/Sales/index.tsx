import React, { useEffect, useState } from 'react';
import { FlatList } from 'react-native-gesture-handler';
import { MaterialIcons, AntDesign, Entypo, Ionicons } from '@expo/vector-icons';

import OptionItem from '~/src/screens/Private/components/Option';
import PrivateLayout from '~/src/screens/_Layouts/PrivateLayout';

const optionsItems = [
  {
    label: 'Vendas/Contratos',
    navigateTo: 'SalesReports',
    Icon: () => <MaterialIcons name="monetization-on" size={24} color="#30D88B" />,
  },
  {
    label: 'Ordem de Serviços',
    navigateTo: 'SalesReports',
    Icon: () => <AntDesign name="customerservice" size={24} color="#30D88B" />,
  },
  {
    label: 'Ponto de Venda (PDV)',
    navigateTo: 'SalesReports',
    Icon: () => <AntDesign name="shoppingcart" size={24} color="#30D88B" />,
  },
  {
    label: 'Opções Auxiliares',
    navigateTo: 'SalesReports',
    Icon: () => <Entypo name="tools" size={24} color="#30D88B" />,
  },
  {
    label: 'Relatórios',
    navigateTo: 'SalesReports',
    Icon: () => <Ionicons name="newspaper-outline" size={24} color="#30D88B" />,
  },
];

const Sales: React.FC = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return <PrivateLayout screenName="Vendas"></PrivateLayout>;
  }

  return (
    <PrivateLayout screenName="Vendas">
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

export default Sales;
