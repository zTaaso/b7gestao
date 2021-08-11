import React from 'react';
import { Linking, Platform, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { openInbox } from 'react-native-email-link';

import FormLayout from '~/src/screens/_Layouts/FormLayout';

import CustomText from '~/src/components/CustomText';
import InputContainer from '~/src/components/InputContainer';
import CustomInput from '~/src/components/CustomInput';
import ButtonContainer from '~/src/components/ButtonContainer';
import CustomButton from '~/src/components/CustomButton/index';
import Footer from '~/src/components/FooterContainer/index';
import TextContainer from '../components/TextContainer';

import MailLogo from '~/src/assets/icons/mail_success.svg';

import { IconContainer } from './styles';

const VerifyEmail: React.FC = ({}) => {
  const navigation = useNavigation();

  async function handleNextPress() {
    try {
      if (Platform.OS === 'ios') {
        await openInbox();
      } else {
        Linking.openURL(
          'mailto:ninguém@ninguémmesmo.com?subject=Verifique sua caixa de entrada!&body=Enviamos um e-mail contendo o link para ativar sua conta.'
        );
      }
    } catch (err) {
      console.log(err);
    }

    navigation.navigate('SuccessScreen', {
      title: 'Conta verificada com sucesso!',
      description:
        'Tudo certo por aqui, confirmamos seu e-mail e você já pode começar a usar o DeConta.',
      buttonText: 'Começar',
      redirectRoute: 'Dashboard',
    });
  }

  return (
    <FormLayout>
      <IconContainer>
        <MailLogo />
      </IconContainer>
      <TextContainer>
        <CustomText>
          Agora falta pouco!{'\n'}Só precisamos{' '}
          <CustomText font="Montserrat_Bold">verificar</CustomText> o seu e-mail.
        </CustomText>

        <CustomText fontSize={16}>
          {'\n\n'}Vá ao e-mail cadastrado e clique no link enviado para ativar sua conta.
        </CustomText>
      </TextContainer>
      <TouchableOpacity>
        <CustomText fontSize="12" underline color="#30D88B">
          Não recebeu o código? Clique aqui para reenviar.
        </CustomText>
      </TouchableOpacity>
      <ButtonContainer style={{ marginTop: 20 }}>
        <CustomButton bgColor="#30D88B" textColor="white" onPress={handleNextPress}>
          Verificar
        </CustomButton>
      </ButtonContainer>
      <Footer style={{ marginTop: 10 }} />
    </FormLayout>
  );
};

export default VerifyEmail;
