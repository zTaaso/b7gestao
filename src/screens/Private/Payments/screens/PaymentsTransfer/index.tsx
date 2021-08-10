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
    payee: 'Thiago Afonso',
    payer: 'BH Softwares',
    bank: 'Inter',
    description: 'Pagamento de funcionário',
    title: 'Pagamento de funcionário',
    value: 1500,
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
    payee: 'Durval Paicheco',
    payer: 'BH Softwares',
    bank: 'Itaú',
    description: 'Pagamento de funcionário',
    title: 'Pagamento de funcionário',
    value: 2000,
  }),
  createPaymentTransferItem({
    payee: 'Maicon Lima',
    payer: 'BH Softwares',
    bank: 'Nubank',
    description: 'Pagamento de funcionário',
    title: 'Pagamento de funcionário',
    value: 1700,
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
    payee: 'Thiago Afonso',
    payer: 'BH Softwares',
    bank: 'Inter',
    description: 'Pagamento de funcionário',
    title: 'Pagamento de funcionário',
    value: 1500,
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
    payee: 'Durval Paicheco',
    payer: 'BH Softwares',
    bank: 'Itaú',
    description: 'Pagamento de funcionário',
    title: 'Pagamento de funcionário',
    value: 2000,
  }),
  createPaymentTransferItem({
    payee: 'Maicon Lima',
    payer: 'BH Softwares',
    bank: 'Nubank',
    description: 'Pagamento de funcionário',
    title: 'Pagamento de funcionário',
    value: 1700,
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
    payee: 'Thiago Afonso',
    payer: 'BH Softwares',
    bank: 'Inter',
    description: 'Pagamento de funcionário',
    title: 'Pagamento de funcionário',
    value: 1500,
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
    payee: 'Durval Paicheco',
    payer: 'BH Softwares',
    bank: 'Itaú',
    description: 'Pagamento de funcionário',
    title: 'Pagamento de funcionário',
    value: 2000,
  }),
  createPaymentTransferItem({
    payee: 'Maicon Lima',
    payer: 'BH Softwares',
    bank: 'Nubank',
    description: 'Pagamento de funcionário',
    title: 'Pagamento de funcionário',
    value: 1700,
  }),
];

const PaymentsTransferred: React.FC = () => {
  const [isMounted, setIsMounted] = useState(false);
  const [payments, setPayments] = useState<PaymentTransfer[]>(mockPayments);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return <PrivateLayout screenName="Transferências" />;
  }

  return (
    <PrivateLayout screenName="Transferências">
      <PaymentReportLayout reportType="all" data={payments} />
    </PrivateLayout>
  );
};

export default PaymentsTransferred;
