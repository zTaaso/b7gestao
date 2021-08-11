import React from 'react';
import { TextInputMask, TextInputMaskTypeProp } from 'react-native-masked-text';

import { StyledInput } from './styles';

interface CustomMaskedInputProps {
  type: TextInputMaskTypeProp;
}

const CustomMaskedInput: React.FC<TextInputMask & CustomMaskedInputProps> = ({
  children,
  ...props
}) => (
  <StyledInput placeholderTextColor="rgba(255, 255, 255, 0.6)" {...props}>
    {children}
  </StyledInput>
);

export default CustomMaskedInput;
