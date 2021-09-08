import React, { useState, useEffect } from 'react';
import { Picker } from '@react-native-picker/picker';

type Item = { label: string; value: string | number };

interface CustomPickerProps {
  items: Item[];
  selectedInitialValue?: string | number;
  onValueChange: (value: string | number) => void;
}

const CustomPicker: React.FC<CustomPickerProps> = ({
  items,
  initialSelectedValue,
  onValueChange,
}) => {
  const [selectedValue, setSelectedValue] = useState(initialSelectedValue);

  useEffect(() => {
    onValueChange(selectedValue);
  }, [selectedValue]);

  return (
    <Picker selectedValue={selectedValue} onValueChange={setSelectedValue}>
      {items.map((item) => (
        <Picker.Item {...item} />
      ))}
    </Picker>
  );
};

export default CustomPicker;
