import React, { useState } from 'react';
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';

import ChatProvider from './context/ChatContext';

import ChatLayout from './components/ChatLayout';
import TimelineItem from './components/TimelineItem';
import ChatFlatList from './components/ChatFlatList';
import MessageInputContainer from './components/MessageInputContainer/index';

import ChatProps from './chat';
import TimelineItemProps from '~/src/types/TimelineItem';

import createMessage from '~/src/util/createMessage';

import { ChatContainer } from './styles';
import { FlatList } from 'react-native-gesture-handler';
import { FlatListProps } from 'react-native';

const mockMessages = [createMessage('Olá, como vai?', false)];

const ChatMain: React.FC = () => {
  // const navigation = useNavigation();
  const route = useRoute() as RouteProp<ChatProps, 'ChatMain'>;
  const { recipient } = route.params;

  const [chatItems, setChatItems] = useState<TimelineItemProps[]>(mockMessages);

  // console.log('chatmain remontado');

  const flatListRef = React.useRef<FlatList<FlatListProps<any>>>();

  const handleSendMessage = React.useCallback(
    (message: string) => {
      flatListRef.current?.scrollToOffset({ offset: 0 });

      const newChatItem = createMessage(message, true);

      const newChatItems = [newChatItem, ...chatItems];

      setChatItems(newChatItems);
    },
    [chatItems]
  );

  const handleDeleteMsg = React.useCallback(
    (ids: number[]) => {
      const newChatItems = chatItems.filter((chatItem) => !ids.includes(chatItem.id));

      setChatItems(newChatItems);
    },
    [chatItems]
  );

  const renderChatItem = React.useCallback(({ item }) => <TimelineItem data={item} />, []);
  const extractChatItemKey = React.useCallback((item) => item.id, []);

  return (
    <ChatLayout recipient={recipient} onDeleteMsg={handleDeleteMsg}>
      <ChatContainer>
        <ChatFlatList
          data={chatItems}
          keyExtractor={extractChatItemKey}
          renderItem={renderChatItem}
          ref={flatListRef}
        />
      </ChatContainer>

      <MessageInputContainer onMessageSubmit={handleSendMessage} />
    </ChatLayout>
  );
};

const ChatMainWithProvider = () => {
  const ChatMainComponent = React.memo(ChatMain);

  return (
    <ChatProvider>
      <ChatMainComponent />
    </ChatProvider>
  );
};
export default ChatMainWithProvider;
