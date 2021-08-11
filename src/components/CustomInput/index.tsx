import React from 'react';
import { TextInput } from 'react-native';

import { StyledInput } from './styles';

const CustomInput: React.FC<TextInput> = ({ children, ...props }) => (
  <StyledInput placeholderTextColor="rgba(255, 255, 255, 0.6)" {...props}>
    {children}
  </StyledInput>
);

export default CustomInput;
