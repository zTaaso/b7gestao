import React, { useState } from 'react';

import { StyledMessageInputContainer } from './styles';

import MessageInput from './components/MessageInput';
import SendButton from './components/SendButton';

interface MessageInputContainerProps {
  onMessageSubmit: (message: string) => void;
}

const MessageInputContainer: React.FC<MessageInputContainerProps> = ({ onMessageSubmit }) => {
  const [newMessageText, setNewMessageText] = useState('');

  function handleSendButtonPress() {
    setNewMessageText('');
    onMessageSubmit(newMessageText);
  }

  return (
    <StyledMessageInputContainer>
      <MessageInput
        placeholder="Digite sua mensagem"
        onChangeText={setNewMessageText}
        value={newMessageText}
        multiline
      />
      <SendButton onPress={handleSendButtonPress} disabled={!newMessageText} />
    </StyledMessageInputContainer>
  );
};

export default MessageInputContainer;
