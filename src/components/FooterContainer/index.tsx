import React from 'react';
import { ViewProps } from 'react-native';

import { FooterContainer } from './styles';
import CustomText from '~/src/components/CustomText';

interface FooterProps extends ViewProps {
  fontColor?: string;
}

const Footer: React.FC<FooterProps> = ({ fontColor, ...props }) => (
  <FooterContainer {...props}>
    <CustomText fontSize="12" color={fontColor}>
      B7Gestão © 2021. Todos os direitos reservados.
    </CustomText>
  </FooterContainer>
);

export default Footer;
