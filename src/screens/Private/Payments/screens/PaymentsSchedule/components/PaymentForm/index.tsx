import React from 'react';

import CustomText from '~/src/components/CustomText';
import PaymentActionLayout, { FormDataTypes } from '../../../../components/PaymentActionLayout';

import PaymentTransfer from '../../../../types/PaymentTransfer';
import createPaymentTransferItem from '../../../../util/createPaymentTransferItem';

import { Container } from './styles';

interface PaymentFormTypes {
  schedulePayment: (schedulePaymentItem: PaymentTransfer) => void;
}

const PaymentForm: React.FC<PaymentFormTypes> = ({ schedulePayment }) => {
  function handleFormSubmit(data: FormDataTypes) {
    const newScheduledPayment = createPaymentTransferItem({
      ...data,
      date: data.date.dateObj,
    });

    schedulePayment(newScheduledPayment);
  }

  return (
    <Container>
      <PaymentActionLayout
        buttonText="Agendar"
        successMessage="Pagamento agendado com sucesso!"
        titleText="Agendar pagamento"
        onSubmit={handleFormSubmit}
      />
    </Container>
  );
};

export default PaymentForm;
