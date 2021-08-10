import React, { useMemo, useState } from 'react';
import { format } from 'date-fns';
import pt from 'date-fns/locale/pt';
import Icon from '@expo/vector-icons/MaterialIcons';
import DateTimePicker, { Event } from '@react-native-community/datetimepicker';

import { Container, DateButton, DateText } from './styles';
import { TextInput } from 'react-native';
import { TouchableOpacity } from 'react-native';

interface DateInputProps {
  date?: Date;
  onDateChange(selectedDate: Date, formattedDate: string): void;
}

const DateInput: React.FC<DateInputProps> = ({
  date = new Date(),
  onDateChange,
  children,
  ...props
}) => {
  const [isOpen, setIsOpen] = useState(false);
  // console.log('dateinput remontado');

  function handleChange(_: Event, selectedDate?: Date) {
    setIsOpen(false);
    if (!selectedDate) return;

    const formattedDate = format(selectedDate, 'dd/MM/yyyy');

    onDateChange(selectedDate, formattedDate);
  }

  return (
    <Container
      onPress={() => {
        setIsOpen(!isOpen);
      }}
      {...props}
    >
      {children}
      {isOpen && (
        <DateTimePicker value={date} onChange={handleChange} mode="date" display="spinner" />
      )}
    </Container>
  );
};

export default DateInput;
