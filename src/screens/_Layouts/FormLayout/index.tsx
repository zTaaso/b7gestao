import React from 'react';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

import FormHeader from './components/Header';

import { Container, Content } from './styles';
import { ScrollView } from 'react-native';

interface FormLayoutProps {
  disableKeyboardAvoidingView?: boolean;
  gradient?: boolean;
}

const FormLayout: React.FC<FormLayoutProps> = ({
  children,
  gradient,
  disableKeyboardAvoidingView,
}) => {
  if (disableKeyboardAvoidingView) {
    return (
      <Container
        colors={['#30D88B', '#48ACD8D8', '#FFF']}
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

  if (gradient) {
    return (
      <Container colors={['#30D88B', '#1a1f24']} end={{ y: 0.15, x: 0 }} locations={[0.1, 0.5]}>
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
  }

  return (
    <Content>
      <FormHeader />
      <Content>
        <KeyboardAwareScrollView
          contentContainerStyle={{ flexGrow: 1 }}
          showsVerticalScrollIndicator={false}
        >
          {children}
        </KeyboardAwareScrollView>
      </Content>
    </Content>
  );
};

export default FormLayout;
