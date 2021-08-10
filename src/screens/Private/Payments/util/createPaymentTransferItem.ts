import moment from 'moment';

import PaymentTransfer from '~/src/screens/Private/Payments/types/PaymentTransfer';
import formatToReal from '~/src/util/formatToReal';

type createPaymentTransfer = Omit<PaymentTransfer, 'formattedValue' | 'date'> & {
  value: number;
  date?: Date;
};

const createPaymentTransferItem = (item: createPaymentTransfer) => {
  const date = item.date || new Date();

  const randomNumber = Math.round(Math.random() * 1000);
  const randomID = `${date.getMilliseconds().toString()}-${randomNumber}`;

  moment.locale('pt-br');
  const month = moment(date).format('MMM');
  const weekDay = moment(date).format('ddd');
  const monthDay = moment(date).format('DD');

  return {
    ...item,
    id: randomID,
    date: {
      dateObj: date,
      weekDay,
      month,
      monthDay,
    },
    formattedValue: formatToReal(item.value),
  };
};

export default createPaymentTransferItem;
