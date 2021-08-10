import React from 'react';
import { useEffect } from 'react';
import { ScrollView } from 'react-native';
import { useToggleMenuModal } from '~/src/context/DashboardContext';

import DashboardHeader from '../../components/Header';

import { Background, Container, BackGroundProps } from './styles';

const StaticBackGround: React.FC<BackGroundProps> = ({
  children,
  disablePaddingBottom = false,
}) => {
  return (
    <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ flexGrow: 1 }}>
      <Background
        colors={['#279DD1', '#23A0B1', '#3AD29F', '#fff']}
        start={{ y: 0, x: 0 }}
        // end={{ y: 0.4, x: 0.1 }}
        locations={[0.09, 0.13, 0.24, 0]}
        disablePaddingBottom={disablePaddingBottom}
      >
        <Container>
          <DashboardHeader />
          {children}
        </Container>
      </Background>
    </ScrollView>
  );
};

export default StaticBackGround;
