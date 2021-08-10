import React from 'react';
import { useNavigation } from '@react-navigation/native';

import FormLayout from '~/src/screens/_Layouts/FormLayout';

import CustomText from '~/src/components/CustomText';
import InputContainer from '~/src/components/InputContainer';
import CustomInput from '~/src/components/CustomInput';
import ButtonContainer from '~/src/components/ButtonContainer';
import CustomButton from '~/src/components/CustomButton/index';
import Footer from '~/src/components/FooterContainer/index';
import TextContainer from '../components/TextContainer';

import { ForgotPasswordTouchable } from './styles';

const Login: React.FC = ({}) => {
  const navigation = useNavigation();

  return (
    <FormLayout>
      <TextContainer>
        <CustomText>
          <CustomText font="Montserrat_Bold">Bem vindo de volta!</CustomText> É muito bom ter você
          aqui de novo.
        </CustomText>

        <CustomText fontSize={16}>
          {'\n\n'}Para acessar sua conta, realize o login preenchendo os campos abaixo.
        </CustomText>
      </TextContainer>

      <InputContainer>
        <CustomInput placeholder="E-mail" />
        <CustomInput placeholder="Senha" secureTextEntry />

        <ForgotPasswordTouchable>
          <CustomText fontSize="13" color="#279DD1" underline>
            Não lembra sua senha? Clique aqui.
          </CustomText>
        </ForgotPasswordTouchable>
      </InputContainer>

      <ButtonContainer style={{ marginTop: 20 }}>
        <CustomButton
          bgColor="#279DD1"
          textColor="white"
          onPress={() => navigation.navigate('Dashboard')}
        >
          Entrar
        </CustomButton>
      </ButtonContainer>

      <Footer style={{ marginTop: 10 }} />
    </FormLayout>
  );
};

export default Login;
