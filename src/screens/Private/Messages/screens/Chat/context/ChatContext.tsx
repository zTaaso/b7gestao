import React, { useContext, useEffect, useState } from 'react';

type selectedMessage = { id: string | number; text: string; date: Date };

interface ChatContextTypes {
  selectMessagesState: [boolean, React.Dispatch<React.SetStateAction<boolean>>];
  selectedMessagesState: [
    selectedMessage[],
    React.Dispatch<React.SetStateAction<selectedMessage[]>>
  ];
}

export const ChatContext = React.createContext<ChatContextTypes>({
  selectMessagesState: [false, () => {}],
  selectedMessagesState: [[], () => {}],
} as ChatContextTypes);

export const useChatContext = () => useContext(ChatContext);

const ChatProvider: React.FC = ({ children }) => {
  const selectMessagesState = useState(false);
  const selectedMessagesState = useState([] as selectedMessage[]);

  const [selectedMessages] = selectedMessagesState;
  const [, setSelectingMessages] = selectMessagesState;
  // console.log('chatcontext remontado');

  useEffect(() => {
    if (!selectedMessages.length) {
      setSelectingMessages(false);
    }
  }, [selectedMessagesState[0]]);

  // useEffect(() => {
  //   console.log({ selectMessagesState, selectedMessagesState });
  // }, [selectMessagesState, selectedMessagesState]);

  const state = {
    selectMessagesState,
    selectedMessagesState,
  };

  return <ChatContext.Provider value={state}>{children}</ChatContext.Provider>;
};

export default ChatProvider;
