import React, { useEffect, useState } from 'react';
import { FlatList } from 'react-native-gesture-handler';

import ChatProvider from '../Messages/screens/Chat/context/ChatContext';

import CalendarIcon from '~/src/assets/icons/calendar-check-regular.svg';
import ArrowUpIcon from '~/src/assets/icons/arrow-alt-circle-down-solid.svg';
import ArrowUpRegularIcon from '~/src/assets/icons/arrow-alt-circle-down-regular.svg';
import PenIcon from '~/src/assets/icons/pen-solid.svg';
import TransferIcon from '~/src/assets/icons/people-arrows-solid.svg';
import HistoryIcon from '~/src/assets/icons/history-solid.svg';

import OptionItem from '../components/Option';
import PrivateLayout from '~/src/screens/_Layouts/PrivateLayout';

const optionsItems = [
  { label: 'Agendamentos', navigateTo: 'PaymentsSchedule', Icon: CalendarIcon },
  { label: 'Pagamentos Realizados', navigateTo: 'PaymentsDone', Icon: ArrowUpIcon },
  { label: 'Pagamentos Recebidos', navigateTo: 'PaymentsReceived', Icon: ArrowUpRegularIcon },
  { label: 'Registrar Pagamento', navigateTo: 'PaymentsRegister', Icon: PenIcon },
  { label: 'Transferências', navigateTo: 'PaymentsTransfer', Icon: TransferIcon },
  // { label: 'Histórico de Movimentações', navigateTo: 'PaymentsHistory', Icon: HistoryIcon },
];

const Payments: React.FC = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return <PrivateLayout screenName="Pagamentos"></PrivateLayout>;
  }

  return (
    <PrivateLayout screenName="Pagamentos">
      <FlatList
        data={optionsItems}
        keyExtractor={(item) => item.navigateTo}
        renderItem={({ item }) => (
          <OptionItem Icon={item.Icon} label={item.label} navigateTo={item.navigateTo} />
        )}
      />
    </PrivateLayout>
  );
};

export default Payments;
