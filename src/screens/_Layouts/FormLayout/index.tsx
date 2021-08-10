import React from 'react';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

import FormHeader from './components/Header';

import { Container, Content } from './styles';
import { ScrollView } from 'react-native';

interface FormLayoutProps {
  disableKeyboardAvoidingView?: boolean;
}

const FormLayout: React.FC<FormLayoutProps> = ({ children, disableKeyboardAvoidingView }) => {
  if (disableKeyboardAvoidingView) {
    return (
      <Container
        colors={['#279DD1', '#48ACD8D8', '#FFF']}
        end={{ y: 0.2, x: 0.0 }}
        locations={[0.1, 0.2, 0.8]}
      >
        <FormHeader />
        <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
          <Content>{children}</Content>
        </ScrollView>
      </Container>
    );
  }

  return (
    <Container
      colors={['#279DD1', '#48ACD8D8', '#FFF']}
      end={{ y: 0.2, x: 0.0 }}
      locations={[0.1, 0.3, 0.8]}
    >
      <FormHeader />
      <Content>
        <KeyboardAwareScrollView
          contentContainerStyle={{ flexGrow: 1 }}
          showsVerticalScrollIndicator={false}
        >
          {children}
        </KeyboardAwareScrollView>
      </Content>
    </Container>
  );
};

export default FormLayout;
