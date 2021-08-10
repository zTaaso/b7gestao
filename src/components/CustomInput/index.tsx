import React from 'react';
import { TextInputProps, ViewProps } from 'react-native';

import { StyledInput } from './styles';

const CustomInput: React.FC<TextInputProps> = ({ children, ...props }) => {
  return (
    <StyledInput placeholderTextColor="rgba(0, 0, 0, 0.5)" {...props}>
      {children}
    </StyledInput>
  );
};

export default CustomInput;
