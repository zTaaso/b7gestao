import styled from 'styled-components/native';
// import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
  flex: 1;
  padding-top: 10px;
`;

export const QuantiyForm = styled.View`
  /* flex: 1; */
  flex-direction: row;
  /* border: 1px solid red; */
  padding: 10px;
  margin: 15px 0;

  align-items: center;
  justify-content: space-around;
`;

export const QuantityInput = styled.TextInput`
  flex: 1;
  color: #fff;
  font-size: 32px;
  font-family: 'Montserrat';
  text-align: center;

  margin-top: 10px;

  max-width: 200px;

  border-bottom-width: 1px;
  border-bottom-color: #30d88b;
`;

export const EditAmountButton = styled.TouchableOpacity`
  padding: 10px;
  border: 1px solid #30d88b;
  border-radius: 10px;
  background-color: #30d88b;
`;

export const FormContent = styled.View`
  flex-direction: row;
  padding: 15px 10px;
`;

export const NotesInput = styled.TextInput`
  flex: 1;
  color: #fff;
  font-size: 18px;
  font-family: 'Montserrat';
  /* text-align: center; */

  margin-top: 10px;
  padding: 5px 0;

  /* max-width: 200px; */

  border-bottom-width: 1px;
  border-bottom-color: #30d88b;
`;

export const BlockContent = styled.View`
  border-bottom-width: 1px;
  border-bottom-color: rgba(255, 255, 255, 0.1);
  padding: 10px 0;
`;
