import React from 'react';
import { View } from 'react-native';
import { KeyboardAvoidingView, ScrollView, ImageBackground } from 'react-native';

import ChatHeader from './components/Header';

import { Container, Content } from './styles';

interface ChatLayoutProps {
  disableKeyboardAvoidingView?: boolean;
  gradient?: boolean;
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
  gradient,
  onDeleteMsg,
}) => {
  if (disableKeyboardAvoidingView) {
    return (
      <Container
        colors={['#30D88B', '#23A0B1', '#3AD29F', '#FFF']}
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

  if (gradient) {
    return (
      <Container
        colors={['#30D88B', '#23A0B1', '#3AD29F', '#FFF']}
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
  }

  return (
    <Content>
      <ChatHeader recipient={recipient} onDeleteMsg={onDeleteMsg} />
      <Content>
        {/* <KeyboardAwareScrollView
          contentContainerStyle={{ flexGrow: 1 }}
          showsVerticalScrollIndicator={false}
        > */}
        {children}
        {/* </KeyboardAwareScrollView> */}
      </Content>
    </Content>
  );
};

export default React.memo(ChatLayout);
