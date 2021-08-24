import React, { useEffect, useState } from 'react';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

import PrivateHeader from './components/Header';

import { Container, Content } from './styles';
import { ScrollView } from 'react-native';

interface PrivateLayoutProps {
  disableKeyboardAvoidingView?: boolean;
  gradient?: boolean;
  screenName?: string;
  showBackButton?: boolean;
}

const PrivateLayout: React.FC<PrivateLayoutProps> = ({
  children,
  disableKeyboardAvoidingView,
  screenName,
  gradient,
  showBackButton,
}) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    if (!isMounted) {
      setIsMounted(true);
    }
  }, []);

  if (!isMounted) {
    return <Content />;
  }

  if (disableKeyboardAvoidingView) {
    return (
      <Container
        colors={['#30D88B', '#23A0B1', '#3AD29F', '#FFF']}
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

  if (gradient) {
    return (
      <Container
        colors={['#30D88B', '#23A0B1', '#3AD29F', '#FFF']}
        end={{ y: 0.1, x: 1.9 }}
        locations={[0.1, 0.19, 0.68, 0]}
      >
        <Content>
          <PrivateHeader screenName={screenName} showBackButton={showBackButton} />
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
  }

  return (
    <Content>
      <PrivateHeader screenName={screenName} showBackButton={showBackButton} />
      <KeyboardAwareScrollView
        contentContainerStyle={{
          flexGrow: 1,

          backgroundColor: '#1a1f24',
        }}
        showsVerticalScrollIndicator={false}
      >
        {children}
      </KeyboardAwareScrollView>
    </Content>
  );
};

export default PrivateLayout;
