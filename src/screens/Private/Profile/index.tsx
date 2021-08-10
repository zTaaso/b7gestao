import React, { useEffect, useState } from 'react';
import { FlatList } from 'react-native-gesture-handler';
import { MaterialIcons, Ionicons } from '@expo/vector-icons';

import OptionItem from '../components/Option';
import PrivateLayout from '~/src/screens/_Layouts/PrivateLayout';

const optionsItems = [
  {
    label: 'Dados Pessoais',
    navigateTo: 'ProfilePersonal',
    Icon: () => <Ionicons name="person" size={24} color="#279DD1" />,
  },
  {
    label: 'Segurança',
    navigateTo: 'ProfileSecurity',
    Icon: () => <MaterialIcons name="security" size={24} color="#279DD1" />,
  },
  {
    label: 'Empresa',
    navigateTo: 'ProfileCompany',
    Icon: () => <MaterialIcons name="business-center" size={24} color="#279DD1" />,
  },
];

const Profile: React.FC = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return <PrivateLayout screenName="Dados da Conta" />;
  }

  return (
    <PrivateLayout screenName="Dados da Conta">
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

export default Profile;
