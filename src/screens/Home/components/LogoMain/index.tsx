import React from 'react';
import { Text, View } from 'react-native';

import { Container, LogoSymbolText, LogoLetters, LogoText } from './styles';

const LogoMain: React.FC = () => (
  <Container>
    <LogoLetters>
      <LogoSymbolText style={{ transform: [{ rotate: '180deg' }] }}>C</LogoSymbolText>
      <LogoSymbolText>C</LogoSymbolText>
    </LogoLetters>

    <LogoText>Deconta</LogoText>
  </Container>
);

export default LogoMain;
