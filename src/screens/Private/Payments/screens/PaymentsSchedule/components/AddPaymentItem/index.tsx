import React from 'react';
import { FontAwesome } from '@expo/vector-icons';

import CustomText from '~/src/components/CustomText';

import PaymentTransfer from '~/src/screens/Private/Payments/types/PaymentTransfer';

import { Container, IconContainer } from './styles';
import createPaymentTransferItem from '../../../../util/createPaymentTransferItem';
import { Modalize } from 'react-native-modalize';

interface AddPaymentItemProps {
  schedulePayment: (schedulePaymentItem: PaymentTransfer) => void;
  scheduleModalRef: React.RefObject<Modalize>;
}

const AddPaymentItem: React.FC<AddPaymentItemProps> = ({
  schedulePayment = () => {},
  scheduleModalRef,
}) => {
  function handleSchedulePaymentPress() {
    scheduleModalRef.current?.open();

    // const newSchedulePayment = createPaymentTransferItem({
    //   title: 'Novo agendamento',
    //   description: 'Agendamento teste',
    //   payer: 'Novo pagador',
    //   payee: 'Novo beneficiário',
    //   value: 10,
    //   date: new Date(),
    // });

    // schedulePayment(newSchedulePayment);
  }

  return (
    <Container onPress={handleSchedulePaymentPress}>
      <IconContainer>
        <FontAwesome name="plus" size={27} color="#3AD29F" />
      </IconContainer>

      <CustomText color="#279DD1" fontSize="18">
        Agendar novo pagamento
      </CustomText>
    </Container>
  );
};

export default AddPaymentItem;
