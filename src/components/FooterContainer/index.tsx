import React from 'react';
import { ViewProps } from 'react-native';

import { FooterContainer } from './styles';
import CustomText from '~/src/components/CustomText';

interface FooterProps extends ViewProps {
  fontColor?: string;
}

const Footer: React.FC<FooterProps> = ({ fontColor, ...props }) => {
  return (
    <FooterContainer {...props}>
      <CustomText fontSize="12" color={fontColor}>
        99Gestão © 2020. Todos os direitos reservados.
      </CustomText>
    </FooterContainer>
  );
};

export default Footer;
