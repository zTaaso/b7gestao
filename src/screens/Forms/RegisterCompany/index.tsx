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

const RegisterCompany: React.FC = ({}) => {
  const navigation = useNavigation();

  return (
    <FormLayout>
      <TextContainer>
        <CustomText>
          Agora preencha os dados da sua empresa para poder utilizar o{' '}
          <CustomText font="Montserrat_Bold">DeConta.</CustomText>
        </CustomText>

        <CustomText fontSize={16}>
          {'\n\n'}Só mais alguns dados, e você estará pronto para começar.
        </CustomText>
      </TextContainer>

      <InputContainer>
        <CustomInput placeholder="Razão Social" />
        <CustomInput placeholder="Nome Fantasia" />
        <CustomInput placeholder="E-mail" keyboardType="email-address" />
        <CustomInput placeholder="Fundação" />
        <CustomInput placeholder="CNPJ" keyboardType="number-pad" />
        <CustomInput placeholder="Telefone" keyboardType="number-pad" />
        <CustomInput placeholder="Telefone Celular" keyboardType="number-pad" />
        <CustomInput placeholder="Atividade Econômica" />
        <CustomInput placeholder="Número de Funcionários" keyboardType="number-pad" />
      </InputContainer>

      <ButtonContainer style={{ marginTop: 20 }}>
        <CustomButton
          bgColor="#279DD1"
          textColor="white"
          onPress={() => navigation.navigate('VerifyEmail')}
        >
          Próximo
        </CustomButton>
      </ButtonContainer>

      <Footer style={{ marginTop: 10 }} />
    </FormLayout>
  );
};

export default RegisterCompany;
