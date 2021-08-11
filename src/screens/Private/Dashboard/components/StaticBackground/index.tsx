import React from 'react';
import { useEffect } from 'react';
import { ScrollView } from 'react-native';
import { useToggleMenuModal } from '~/src/context/DashboardContext';

import DashboardHeader from '../../components/Header';

import { Background, Container, BackGroundProps } from './styles';

const StaticBackGround: React.FC<BackGroundProps> = ({
  children,
  disablePaddingBottom = false,
}) => (
  <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ flexGrow: 1 }}>
    <Background
      colors={['#1a1f24', '#1a1f24', '#1a1f24', '#1a1f24']}
      start={{ y: 0, x: 0 }}
      // end={{ y: 0.4, x: 0.1 }}
      locations={[0.02, 0.15, 0, 0.1]}
      disablePaddingBottom={disablePaddingBottom}
    >
      <Container>
        <DashboardHeader />
        {children}
      </Container>
    </Background>
  </ScrollView>
);

export default StaticBackGround;
