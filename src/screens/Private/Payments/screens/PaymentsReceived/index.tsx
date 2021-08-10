import React, { useEffect, useState } from 'react';

import PrivateLayout from '~/src/screens/_Layouts/PrivateLayout';
import PaymentReportLayout from '../../components/PaymentReportLayout';

import PaymentTransfer from '~/src/screens/Private/Payments/types/PaymentTransfer';
import createPaymentTransferItem from '../../util/createPaymentTransferItem';

const mockPayments = [
  createPaymentTransferItem({
    payee: 'BH Softwares',
    payer: 'Saritur',
    bank: 'Nubank',
    description: 'Pagamento de empresa',
    title: 'Pagamento de empresa pelos serviços prestados',
    value: 2000,
  }),
  createPaymentTransferItem({
    payee: 'BH Softwares',
    payer: 'ABM Technology',
    bank: 'Nubank',
    description: 'Pagamento de empresa',
    title: 'Pagamento de empresa pelos serviços prestados',
    value: 1500,
  }),
  createPaymentTransferItem({
    payee: 'BH Softwares',
    payer: 'Jair Bolsonaro',
    bank: 'Rachadinha',
    description: 'Auxílio emergencial para ajudar famílias vulneráveis na pandemia.',
    title: 'Auxílio Emergencial',
    value: 600,
  }),
  createPaymentTransferItem({
    payee: 'BH Softwares',
    payer: 'Inácio Lula',
    bank: 'Lava jato',
    description: 'Bolsa Família',
    title: 'Auxílio para famílias de baixa renda.',
    value: 100,
  }),
  createPaymentTransferItem({
    payee: 'BH Softwares',
    payer: 'Saritur',
    bank: 'Nubank',
    description: 'Pagamento de empresa',
    title: 'Pagamento de empresa pelos serviços prestados',
    value: 2000,
  }),
  createPaymentTransferItem({
    payee: 'BH Softwares',
    payer: 'ABM Technology',
    bank: 'Nubank',
    description: 'Pagamento de empresa',
    title: 'Pagamento de empresa pelos serviços prestados',
    value: 1500,
  }),
  createPaymentTransferItem({
    payee: 'BH Softwares',
    payer: 'Jair Bolsonaro',
    bank: 'Rachadinha',
    description: 'Auxílio emergencial para ajudar famílias vulneráveis na pandemia.',
    title: 'Auxílio Emergencial',
    value: 600,
  }),
  createPaymentTransferItem({
    payee: 'BH Softwares',
    payer: 'Inácio Lula',
    bank: 'Lava jato',
    description: 'Bolsa Família',
    title: 'Auxílio para famílias de baixa renda.',
    value: 100,
  }),
  createPaymentTransferItem({
    payee: 'BH Softwares',
    payer: 'Saritur',
    bank: 'Nubank',
    description: 'Pagamento de empresa',
    title: 'Pagamento de empresa pelos serviços prestados',
    value: 2000,
  }),
  createPaymentTransferItem({
    payee: 'BH Softwares',
    payer: 'ABM Technology',
    bank: 'Nubank',
    description: 'Pagamento de empresa',
    title: 'Pagamento de empresa pelos serviços prestados',
    value: 1500,
  }),
  createPaymentTransferItem({
    payee: 'BH Softwares',
    payer: 'Jair Bolsonaro',
    bank: 'Rachadinha',
    description: 'Auxílio emergencial para ajudar famílias vulneráveis na pandemia.',
    title: 'Auxílio Emergencial',
    value: 600,
  }),
  createPaymentTransferItem({
    payee: 'BH Softwares',
    payer: 'Inácio Lula',
    bank: 'Lava jato',
    description: 'Bolsa Família',
    title: 'Auxílio para famílias de baixa renda.',
    value: 100,
  }),
  createPaymentTransferItem({
    payee: 'BH Softwares',
    payer: 'Saritur',
    bank: 'Nubank',
    description: 'Pagamento de empresa',
    title: 'Pagamento de empresa pelos serviços prestados',
    value: 2000,
  }),
  createPaymentTransferItem({
    payee: 'BH Softwares',
    payer: 'ABM Technology',
    bank: 'Nubank',
    description: 'Pagamento de empresa',
    title: 'Pagamento de empresa pelos serviços prestados',
    value: 1500,
  }),
  createPaymentTransferItem({
    payee: 'BH Softwares',
    payer: 'Jair Bolsonaro',
    bank: 'Rachadinha',
    description: 'Auxílio emergencial para ajudar famílias vulneráveis na pandemia.',
    title: 'Auxílio Emergencial',
    value: 600,
  }),
  createPaymentTransferItem({
    payee: 'BH Softwares',
    payer: 'Inácio Lula',
    bank: 'Lava jato',
    description: 'Bolsa Família',
    title: 'Auxílio para famílias de baixa renda.',
    value: 100,
  }),
];

const PaymentsReceived: React.FC = () => {
  const [isMounted, setIsMounted] = useState(false);

  const [payments, setPayments] = useState<PaymentTransfer[]>(mockPayments);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return <PrivateLayout screenName="Pagamentos Recebidos" />;
  }

  return (
    <PrivateLayout screenName="Pagamentos Recebidos">
      <PaymentReportLayout reportType="received" data={payments} />
    </PrivateLayout>
  );
};

export default PaymentsReceived;
