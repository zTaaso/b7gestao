import React, { useEffect, useState } from 'react';
import { FlatList } from 'react-native-gesture-handler';
import { Modalize } from 'react-native-modalize';

import PrivateLayout from '~/src/screens/_Layouts/PrivateLayout';

import PaymentActionLayout from '../../components/PaymentActionLayout';
import CustomCalendar from './components/CustomCalendar';
import ScheduledPaymentItem from './components/ScheduledPaymentItem';
import AddPaymentItem from './components/AddPaymentItem';

import { Container, CalendarContainer } from './styles';
import { format } from 'date-fns';
import PaymentTransfer from '~/src/screens/Private/Payments/types/PaymentTransfer';
import Menu from '../../../Dashboard/screens/Menu';
import PaymentForm from './components/PaymentForm';

const mockPayments = [
  {
    id: 1,
    date: {
      dateObj: new Date('2021-07-07'),
      weekDay: 'Qui',
      month: 'Jul',
      monthDay: '7',
    },
    title: 'PAGAMENTO DE FUNCIONÁRIOS',
    description: 'Pagamento de funcionários da empresa.',
    formattedValue: 'R$ 3.000,00',
    payer: 'Leonardo Cotta',
    payee: 'Thiago Afonso',
  },
  {
    id: 2,
    date: {
      dateObj: new Date('2021-07-09'),
      weekDay: 'Sex',
      month: 'Jul',
      monthDay: '9',
    },
    title: 'PAGAMENTO DE CONTAS BÁSICAS',
    description: 'Pagamento das contas de luz e água.',
    formattedValue: 'R$ 2.500,00',
    payer: 'Leonardo Cotta',
    payee: 'CEMIG',
  },
  {
    id: 3,
    date: {
      dateObj: new Date('2021-02-27'),
      weekDay: 'Ter',
      month: 'Fev',
      monthDay: '27',
    },
    title: 'PAGAMENTO DO ALUGUEL',
    description: 'Pagamento do aluguel da empresa.',
    formattedValue: 'R$ 1.300,00',
    payer: 'Leonardo Cotta',
    payee: 'Prédio',
  },
  {
    id: 4,
    date: {
      dateObj: new Date('2021-08-20'),
      weekDay: 'Sex',
      month: 'Ago',
      monthDay: '20',
    },
    title: 'PAGAMENTO DE FUNCIONÁRIOS',
    description: 'Pagamento de funcionários da empresa.',
    formattedValue: 'R$ 2.500,00',
    payer: 'Leonardo Cotta',
    payee: 'Maicon Ghazzaoui',
  },
];

const PaymentsSchedule: React.FC = () => {
  // console.log('paymentscheudle remontado');
  const [isMounted, setIsMounted] = useState(false);

  const [monthScheduledPayments, setMonthScheduledPayments] =
    useState<PaymentTransfer[]>(mockPayments);
  const [allScheduledPayments, setAllScheduledPayments] = useState<PaymentTransfer[]>(mockPayments);

  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth() + 1);

  const scheduleModalRef = React.useRef<Modalize>(null);

  const renderPaymentItem = React.useCallback(
    ({ item }) => <ScheduledPaymentItem data={item} />,
    []
  );
  const extractPaymentItemKey = React.useCallback((_, index: Number) => index.toString(), []);

  function handleNewSchedulePayment(newSchedulePayment: PaymentTransfer) {
    const newSchedulePayments = [...allScheduledPayments, newSchedulePayment];
    setAllScheduledPayments(newSchedulePayments);
    scheduleModalRef.current?.close();
  }

  useEffect(() => {
    const newScheduledPayments = allScheduledPayments.filter(
      (item) => item.date.dateObj.getMonth() + 1 === currentMonth
    );

    setMonthScheduledPayments(newScheduledPayments);
  }, [currentMonth, allScheduledPayments]);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return <PrivateLayout screenName="Agendamentos"></PrivateLayout>;
  }

  return (
    <>
      <Modalize
        ref={scheduleModalRef}
        modalStyle={{
          backgroundColor: '#1a1f24',
        }}
        adjustToContentHeight
        snapPoint={480}
        handlePosition="inside"
      >
        <PaymentForm schedulePayment={handleNewSchedulePayment} />
      </Modalize>
      <PrivateLayout screenName="Agendamentos">
        <Container>
          <CalendarContainer>
            <CustomCalendar
              onMonthChange={(date) => setCurrentMonth(date.month)}
              scheduledPayments={monthScheduledPayments}
            />
          </CalendarContainer>

          <FlatList
            data={monthScheduledPayments}
            renderItem={renderPaymentItem}
            keyExtractor={extractPaymentItemKey}
            contentContainerStyle={{ flexGrow: 1 }}
            ListFooterComponent={
              <AddPaymentItem
                scheduleModalRef={scheduleModalRef}
                schedulePayment={handleNewSchedulePayment}
              />
            }
          />
        </Container>
      </PrivateLayout>
    </>
  );
};

export default PaymentsSchedule;
