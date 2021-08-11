import React from 'react';
import { MaterialIcons } from '@expo/vector-icons';
import { Container, IconContainer } from './styles';
import { useNavigation } from '@react-navigation/native';

const FormHeader: React.FC = () => {
  const navigation = useNavigation();

  return (
    <Container>
      <IconContainer onPress={() => navigation.goBack()}>
        <MaterialIcons name="keyboard-arrow-left" size={50} color="#30D88B" />
      </IconContainer>
    </Container>
  );
};

export default FormHeader;
