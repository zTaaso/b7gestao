import React from 'react';
import { Text, View } from 'react-native';

import { Container, ImageLogo } from './styles';

import B7Logo from '~/src/assets/images/b7gestao.png';

const LogoMain: React.FC = () => (
  <Container>
    <ImageLogo source={B7Logo} resizeMode="center" />
  </Container>
);

export default LogoMain;
