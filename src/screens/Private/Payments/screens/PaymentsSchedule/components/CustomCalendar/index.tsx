import React, { useEffect, useState } from 'react';
import {
  Calendar,
  DateCallbackHandler,
  DotMarking,
  LocaleConfig,
  DateObject,
} from 'react-native-calendars';
import { format } from 'date-fns';

import PaymentTransfer from '~/src/screens/Private/Payments/types/PaymentTransfer';

interface CustomCalendarProps {
  // dottedDates?: {
  //   [date: string]: DotMarking;
  // };
  onMonthChange: DateCallbackHandler;
  scheduledPayments: PaymentTransfer[];
}

type MarkedDates = { [date: string]: DotMarking };

const CustomCalendar: React.FC<CustomCalendarProps> = (props) => {
  const [markedDates, setMarkedDates] = useState<MarkedDates>({});
  const [dottedDays, setDottedDays] = useState<MarkedDates>({});

  const handleDayPress = React.useCallback(
    (date) => {
      const oldMarkedDate = markedDates[date.dateString];
      if (oldMarkedDate && oldMarkedDate.selected) {
        // está selecionado e o usuário pressionou novamente
        const newMarkedDate = {
          ...markedDates,
          [date.dateString]: { ...oldMarkedDate, selected: false },
        };
        setMarkedDates(newMarkedDate);
        return;
      }

      const selectedDate = markedDates[date.dateString] || {};
      setMarkedDates(() => ({
        ...dottedDays,
        [date.dateString]: { ...selectedDate, selected: true },
      }));
    },
    [markedDates, dottedDays]
  );

  function handleMonthChange(date: DateObject) {
    props.onMonthChange(date);

    let newDottedDays = dottedDays;

    Object.entries(dottedDays).forEach(([key]) => {
      newDottedDays = { ...newDottedDays, [key]: { marked: false } };
    });

    setDottedDays(newDottedDays);
  }

  useEffect(() => {
    // resumo: pra cada agendamento, adiciona uma bolinha abaixo do dia do mês.
    // toda vez que o scheduledPayments muda, faz um reduce no array, que pra cada agendamento, pega a data e retorna um objeto indicando
    // que essa data tem que estar marcada no calendário
    const newDottedDays = props.scheduledPayments.reduce(
      (prev, curr) => {
        const monthDay =
          curr.date.monthDay.length > 1 ? curr.date.monthDay : `0${curr.date.monthDay}`;
        const formatInput = `yyyy'-'MM'-'${monthDay}`;
        const formattedDate = format(curr.date.dateObj, formatInput);

        return {
          ...prev,
          [formattedDate]: { marked: true },
        };
      },
      { '': {} }
    );

    setDottedDays(newDottedDays);
  }, [props.scheduledPayments]);

  useEffect(() => {
    setMarkedDates(() => ({
      ...markedDates,
      ...dottedDays,
    }));
  }, [dottedDays]);

  return (
    <Calendar
      markedDates={markedDates}
      theme={{
        textDayFontFamily: 'Montserrat_Bold',
        dayTextColor: '#279DD1',
        monthTextColor: '#279DD1',
        todayTextColor: '#3AD29F',
        backgroundColor: '#3AD29F',
        dotColor: '#3AD29F',
        textMonthFontFamily: 'Montserrat_Bold',
        selectedDayBackgroundColor: '#279DD1',
        selectedDayTextColor: 'white',
      }}
      monthFormat="MMMM - yyyy"
      onDayPress={handleDayPress}
      onMonthChange={handleMonthChange}
    />
  );
};

LocaleConfig.locales['pt'] = {
  monthNames: [
    'Janeiro',
    'Fevereiro',
    'Março',
    'Abril',
    'Maio',
    'Junho',
    'Julho',
    'Agosto',
    'Setembro',
    'Outubro',
    'Novembro',
    'Dezembro',
  ],
  monthNamesShort: [
    'Jan',
    'Fev',
    'Mar',
    'Abr',
    'Mai',
    'Jul',
    'Jun',
    'Ago',
    'Set',
    'Out',
    'Nov',
    'Dez',
  ],
  dayNames: ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'],
  dayNamesShort: ['Dom', 'Seg', 'Ter', 'Qui', 'Qua', 'Sex', 'Sáb'],
  today: 'Hoje',
};
LocaleConfig.defaultLocale = 'pt';

export default CustomCalendar;
