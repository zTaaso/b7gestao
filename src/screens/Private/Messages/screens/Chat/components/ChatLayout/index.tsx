import React from 'react';
import { View } from 'react-native';
import { KeyboardAvoidingView, ScrollView, ImageBackground } from 'react-native';

import ChatHeader from './components/Header';

import { Container, Content } from './styles';

interface ChatLayoutProps {
  disableKeyboardAvoidingView?: boolean;
  recipient: {
    name: string;
    pic?: string;
  };
  onDeleteMsg(ids: number[]): void;
}

const ChatLayout: React.FC<ChatLayoutProps> = ({
  children,
  disableKeyboardAvoidingView,
  recipient,
  onDeleteMsg,
}) => {
  if (disableKeyboardAvoidingView) {
    return (
      <Container
        colors={['#279DD1', '#23A0B1', '#3AD29F', '#FFF']}
        end={{ y: 0.2, x: 0.0 }}
        locations={[0.1, 0.19, 0.73, 0]}
      >
        <ChatHeader recipient={recipient} />
        <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
          <Content>{children}</Content>
        </ScrollView>
      </Container>
    );
  }

  return (
    <Container
      colors={['#279DD1', '#23A0B1', '#3AD29F', '#FFF']}
      end={{ y: 0.1, x: 1.9 }}
      locations={[0.1, 0.19, 0.68, 0]}
    >
      <ChatHeader recipient={recipient} onDeleteMsg={onDeleteMsg} />
      <Content>
        {/* <KeyboardAwareScrollView
          contentContainerStyle={{ flexGrow: 1 }}
          showsVerticalScrollIndicator={false}
        > */}
        {children}
        {/* </KeyboardAwareScrollView> */}
      </Content>
    </Container>
  );
};

export default React.memo(ChatLayout);
