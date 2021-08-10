import React from 'react';

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
import { useNavigation } from '@react-navigation/native';
import Footer from './../../components/FooterContainer/index';

const Home: React.FC = ({}) => {
  const navigation = useNavigation();

  return (
    <ImageContainer source={require('../../assets/images/home_bg_img.png')} resizeMode="cover">
      <DarkLayer>
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
            <CustomButton type="gradient" onPress={() => navigation.navigate('Login')}>
              Entrar
            </CustomButton>

            <CustomButton
              type="default"
              onPress={() => navigation.navigate('RegisterUser')}
              textColor="#279DD1"
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
      </DarkLayer>
    </ImageContainer>
  );
};

export default Home;
