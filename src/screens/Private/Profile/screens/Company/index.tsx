import React from 'react';
import { useEffect } from 'react';
import Toast from 'react-native-toast-message';
import PrivateLayout from '~/src/screens/_Layouts/PrivateLayout';

const ProfileCompany: React.FC = () => {
  useEffect(() => {
    Toast.show({ text1: 'Tela em desenvolvimento!', type: 'info', position: 'bottom' });
  }, []);

  return <PrivateLayout screenName="Empresa"></PrivateLayout>;
};

export default ProfileCompany;
