import React, { useState } from 'react';
import ButtonContainer from '~/src/components/ButtonContainer';
import CustomButton from '~/src/components/CustomButton';

import CustomInput from '~/src/components/CustomInput';
import InputContainer from '~/src/components/InputContainer';

import { Container } from './styles';
import Toast from 'react-native-toast-message';
import CustomText from '~/src/components/CustomText';
import DateInput from '~/src/components/DateInput';
import CustomMaskedInput from '~/src/components/CustomMaskedInput';
import verifyData from '~/src/util/verifyData';

interface PaymentActionLayoutProps {
  buttonText: string;
  titleText?: string;
  successMessage: string;
  onSubmit(data: FormDataTypes): void;
}

export interface FormDataTypes {
  title: string;
  payer: string;
  payee: string;
  value?: string;
  type: string;
  description: string;
  date: { dateObj: Date; formatted: string };
}

const PaymentActionLayout: React.FC<PaymentActionLayoutProps> = (props) => {
  const [formData, setFormData] = useState<FormDataTypes>({} as FormDataTypes);

  function handleSubmitPress() {
    const isValidated = verifyData(formData, [
      'title',
      'payer',
      'payee',
      'value',
      'type',
      'description',
      'date',
    ]);

    console.log({ isValidated, formData });
    if (!isValidated) {
      Toast.show({ type: 'error', text1: 'Preencha todos os campos!' });

      return;
    }

    props.onSubmit(formData);

    Toast.show({ type: 'success', text1: props.successMessage });
  }

  function handleEditForm(value: any, field: string) {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  }

  // console.log(formData);

  return (
    <Container>
      <CustomText font="Montserrat_Bold" color="#30D88B">
        {props.titleText}
      </CustomText>
      <InputContainer style={{ paddingBottom: props.titleText ? 25 : 0 }}>
        <CustomInput
          placeholder="Título"
          onChangeText={(text) => handleEditForm(text, 'title')}
          value={formData.title}
        />
        <CustomInput
          placeholder="Pagador"
          onChangeText={(text) => handleEditForm(text, 'payer')}
          value={formData.payer}
        />
        <CustomInput
          placeholder="Beneficiário"
          onChangeText={(text) => handleEditForm(text, 'payee')}
          value={formData.payee}
        />
        <CustomMaskedInput
          placeholder="Valor"
          onChangeText={(_, raw) => handleEditForm(raw, 'value')}
          value={formData.value || ''}
          type="money"
          includeRawValueInChangeText
        />
        <DateInput
          onDateChange={(date, formatted) => handleEditForm({ dateObj: date, formatted }, 'date')}
        >
          <CustomInput placeholder="Data" editable={false} value={formData.date?.formatted || ''} />
        </DateInput>
        <CustomInput
          placeholder="Tipo"
          onChangeText={(text) => handleEditForm(text, 'type')}
          value={formData.type}
        />
        <CustomInput
          placeholder="Observação"
          onChangeText={(text) => handleEditForm(text, 'description')}
          value={formData.description}
        />
      </InputContainer>

      <ButtonContainer
        style={{
          paddingHorizontal: 30,
          // paddingTop: 10,

          justifyContent: 'flex-start',
        }}
      >
        <CustomButton
          bgColor="#30D88B"
          textColor="white"
          onPress={handleSubmitPress}
          textProps={{ fontSize: 18 }}
        >
          {props.buttonText}
        </CustomButton>
      </ButtonContainer>
    </Container>
  );
};

export default PaymentActionLayout;
