import React from 'react';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

import PrivateHeader from './components/Header';

import { Container, Content } from './styles';
import { ScrollView } from 'react-native';

interface PrivateLayoutProps {
  disableKeyboardAvoidingView?: boolean;
  screenName?: string;
}

const PrivateLayout: React.FC<PrivateLayoutProps> = ({
  children,
  disableKeyboardAvoidingView,
  screenName,
}) => {
  if (disableKeyboardAvoidingView) {
    return (
      <Container
        colors={['#279DD1', '#23A0B1', '#3AD29F', '#FFF']}
        end={{ y: 0.2, x: 0.0 }}
        locations={[0.1, 0.2, 0.4, 0.8]}
      >
        <PrivateHeader />
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
      <Content>
        <PrivateHeader screenName={screenName} />
        <KeyboardAwareScrollView
          contentContainerStyle={{
            flexGrow: 1,

            backgroundColor: 'white',
          }}
          showsVerticalScrollIndicator={false}
        >
          {children}
        </KeyboardAwareScrollView>
      </Content>
    </Container>
  );
};

export default PrivateLayout;
