import React, { useEffect, useState } from 'react';
import { MaterialIcons, Octicons, MaterialCommunityIcons, FontAwesome5 } from '@expo/vector-icons';
import { FlatList } from 'react-native-gesture-handler';

import PrivateLayout from '~/src/screens/_Layouts/PrivateLayout';
import OptionItem from '~/src/screens/Private/components/Option';

const optionsItems = [
  {
    label: 'Informações da Loja',
    navigateTo: 'SalesPointSettingsMarketInfo',
    Icon: () => <FontAwesome5 name="shopping-cart" size={24} color="#30D88B" />,
  },
  {
    label: 'Preferências',
    navigateTo: 'SalesPointSettingsPreferences',
    Icon: () => <Octicons name="settings" size={24} color="#30D88B" />,
  },
  {
    label: 'Ajuda',
    navigateTo: 'SalesPointSettingsHelp',
    Icon: () => <MaterialIcons name="help-outline" size={24} color="#30D88B" />,
  },
  {
    label: 'Entre em Contato',
    navigateTo: 'SalesPointSettingsContact',
    Icon: () => <MaterialCommunityIcons name="message-text-outline" size={24} color="#30D88B" />,
  },
  {
    label: 'Sair',
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
    <PrivateLayout screenName="Ajustes" showBackButton={false}>
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
