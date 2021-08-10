import React from 'react';
import { TextInputMaskProps } from 'react-native-masked-text';


import { StyledInput } from './styles';

const CustomMaskedInput: React.FC<TextInputMaskProps> = ({ children, ...props }) => {
  return (
    <StyledInput placeholderTextColor="rgba(0, 0, 0, 0.5)" {...props}>
      {children}
    </StyledInput>
  );
};

export default CustomMaskedInput;
