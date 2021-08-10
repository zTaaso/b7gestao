import React from 'react';
import { ViewProps } from 'react-native';

import { StyledText, StyledTextTypes } from './styles';

const CustomText: React.FC<StyledTextTypes> = ({ children, ...props }) => {
  return <StyledText {...props}>{children}</StyledText>;
};

export default CustomText;
