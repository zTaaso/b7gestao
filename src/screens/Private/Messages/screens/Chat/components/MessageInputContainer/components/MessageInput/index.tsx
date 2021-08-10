import React from 'react';
import { TextInputProps } from 'react-native';

import { Container, StyledInput } from './styles';

interface MessageInputProps extends TextInputProps {}

const MessageInput: React.FC<MessageInputProps> = (props) => (
  <Container>
    <StyledInput {...props} />
  </Container>
);

export default React.memo(MessageInput);
