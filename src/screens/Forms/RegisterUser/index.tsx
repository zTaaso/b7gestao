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

const RegisterUser: React.FC = ({}) => {
  const navigation = useNavigation();

  return (
    <FormLayout>
      <TextContainer>
        <CustomText>
          Olá, seja bem-vindo ao <CustomText font="Montserrat_Bold">DeConta</CustomText>. Organize o
          financeiro da sua empresa com nosso App.
        </CustomText>

        <CustomText fontSize={16}>
          {'\n\n'}Para acessar os recursos basta criar um cadastro DeConta, preenchendo os campos
          abaixo.
        </CustomText>
      </TextContainer>

      <InputContainer>
        <CustomInput placeholder="Nome" />
        <CustomInput placeholder="Sobrenome" />
        <CustomInput placeholder="E-mail" />
        <CustomInput placeholder="Senha" secureTextEntry />
        <CustomInput placeholder="CPF" />
        <CustomInput placeholder="Profissão/Cargo" />

        <TextContainer style={{ marginTop: 10 }}>
          <CustomText fontSize="15">
            Ao clicar em{' '}
            <CustomText fontSize="15" font="Montserrat_Bold">
              Próximo
            </CustomText>{' '}
            você concorda com nossos Termos de Uso e Políticas de Privacidade.
          </CustomText>
        </TextContainer>
      </InputContainer>

      <ButtonContainer style={{ marginTop: 20 }}>
        <CustomButton
          bgColor="#30D88B"
          textColor="white"
          onPress={() => navigation.navigate('RegisterCompany')}
        >
          Próximo
        </CustomButton>
      </ButtonContainer>

      <Footer style={{ marginTop: 10 }} />
    </FormLayout>
  );
};

export default RegisterUser;
