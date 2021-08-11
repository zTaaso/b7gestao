import React from 'react';
import { useNavigation } from '@react-navigation/native';

import {
  Container,
  ImageContainer,
  DarkLayer,
  LogoContent,
  TermsContainer,
  TermsText,
} from './styles';

import LogoMain from '~/src/screens/Home/components/LogoMain';

import CustomButton from '~/src/components/CustomButton/index';
import ButtonContainer from '~/src/components/ButtonContainer';
import Footer from '~/src/components/FooterContainer';

const Home: React.FC = () => {
  const navigation = useNavigation();

  return (
    // <ImageContainer source={require('../../assets/images/home_bg_img.png')} resizeMode="cover">
    <Container>
      <LogoContent>
        <LogoMain />
      </LogoContent>

      <ButtonContainer
        style={{
          marginTop: 150,
          justifyContent: 'flex-end',
        }}
      >
        <CustomButton
          type="default"
          bgColor="#35af72"
          textColor="#FFF"
          onPress={() => navigation.navigate('Login')}
        >
          Entrar
        </CustomButton>

        <CustomButton
          type="default"
          onPress={() => navigation.navigate('RegisterUser')}
          textColor="#FFF"
          bgColor="#E63874"
        >
          Cadastrar
        </CustomButton>
      </ButtonContainer>

      <TermsContainer>
        <TermsText>
          Leia os nossos{' '}
          <TermsText underline onPress={() => console.log('termos de uso')}>
            Termos de Uso
          </TermsText>{' '}
          e{' '}
          <TermsText underline onPress={() => console.log('politicas de privacidade')}>
            Políticas de Privacidade
          </TermsText>
        </TermsText>
      </TermsContainer>

      <Footer fontColor="white" />
    </Container>
  );
};

export default Home;
