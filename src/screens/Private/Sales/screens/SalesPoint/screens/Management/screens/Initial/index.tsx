import React, { useEffect, useState } from 'react';
import { MaterialIcons, Octicons, MaterialCommunityIcons, FontAwesome5 } from '@expo/vector-icons';
import { FlatList } from 'react-native-gesture-handler';

import PrivateLayout from '~/src/screens/_Layouts/PrivateLayout';
import OptionItem from '~/src/screens/Private/components/Option';

const optionsItems = [
  {
    label: 'Controle de Caixa',
    navigateTo: 'SalesPointSettingsMarketInfo',
    Icon: () => <FontAwesome5 name="money-bill" size={24} color="#30D88B" />,
  },
  {
    label: 'Pedidos em Aberto',
    navigateTo: 'SalesPointSettingsPreferences',
    Icon: () => (
      <MaterialCommunityIcons name="order-bool-ascending-variant" size={24} color="#30D88B" />
    ),
  },
  {
    label: 'Conta de Clientes',
    navigateTo: 'SalesPointSettingsHelp',
    Icon: () => <MaterialIcons name="help-outline" size={24} color="#30D88B" />,
  },
  {
    label: 'Consultar Estoque',
    navigateTo: 'SalesPointSettingsContact',
    Icon: () => <MaterialCommunityIcons name="message-text-outline" size={24} color="#30D88B" />,
  },
  {
    label: 'Consultar Vendas',
    navigateTo: 'Dashboard',
    Icon: () => <MaterialIcons name="cancel" size={24} color="#c54040" />,
  },
];

const SalesPointSettingsInitial: React.FC = () => {
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

export default SalesPointSettingsInitial;
