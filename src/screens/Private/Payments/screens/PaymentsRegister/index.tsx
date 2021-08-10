import React from 'react';

import PrivateLayout from '~/src/screens/_Layouts/PrivateLayout';
import PaymentActionLayout from '../../components/PaymentActionLayout';

const PaymentsRegister: React.FC = () => (
  <PrivateLayout screenName="Registrar Pagamento">
    <PaymentActionLayout
      buttonText="Registrar"
      successMessage="Pagamento registrado com sucesso!"
      onSubmit={() => {}}
      // titleText="Registre um novo pagamento!"
    />
  </PrivateLayout>
);

export default PaymentsRegister;
