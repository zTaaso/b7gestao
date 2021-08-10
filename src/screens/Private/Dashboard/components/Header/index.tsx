import React from 'react';
import { Fontisto } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import Toast from 'react-native-toast-message';

import ProfileIcon from '~/src/assets/icons/profile_icon.svg';
import AppLogo from '../AppLogo';

import { Container, IconContainer } from './styles';
import { useToggleDashboardModal } from '~/src/context/DashboardContext';

const DashboardHeader: React.FC = () => {
  // const navigation = useNavigation();

  const { openDashboardModal } = useToggleDashboardModal();

  function handleButtonPress() {
    Toast.show({
      text1: 'Em breve...',
      text2: 'Funcionalidade em desenvolvimento 👨‍💻',
      type: 'info',
    });
  }

  function handleProfileButtonPress() {
    openDashboardModal('menu');
  }

  // return null;

  return (
    <Container>
      <IconContainer onPress={handleProfileButtonPress}>
        <ProfileIcon width="30" height="30" />
      </IconContainer>

      <AppLogo />

      <IconContainer onPress={handleButtonPress}>
        <Fontisto name="bell-alt" size={30} color="#3AD29F" />
      </IconContainer>
    </Container>
  );
};

export default DashboardHeader;
