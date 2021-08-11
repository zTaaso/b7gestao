import React from 'react';
import { FontAwesome } from '@expo/vector-icons';

import CustomText from '~/src/components/CustomText';

import PaymentTransfer from '~/src/screens/Private/Payments/types/PaymentTransfer';

import { Container, IconContainer } from './styles';
import createPaymentTransferItem from '../../../../util/createPaymentTransferItem';
import { Modalize } from 'react-native-modalize';

interface AddPaymentItemProps {
  scheduleModalRef: React.RefObject<Modalize>;
}

const AddPaymentItem: React.FC<AddPaymentItemProps> = ({ scheduleModalRef }) => {
  function handleSchedulePaymentPress() {
    scheduleModalRef.current?.open();
  }

  return (
    <Container onPress={handleSchedulePaymentPress}>
      <IconContainer>
        <FontAwesome name="plus" size={27} color="#E63874" />
      </IconContainer>

      <CustomText color="#FFF" font="Montserrat_Bold" fontSize="18">
        Agendar novo pagamento
      </CustomText>
    </Container>
  );
};

export default AddPaymentItem;
