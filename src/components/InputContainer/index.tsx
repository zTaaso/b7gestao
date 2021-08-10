import React from 'react';
import { ViewProps } from 'react-native';

import { Container } from './styles';

const InputContainer: React.FC<ViewProps> = ({ children, ...props }) => {
  return <Container {...props}>{children}</Container>;
};

export default InputContainer;
