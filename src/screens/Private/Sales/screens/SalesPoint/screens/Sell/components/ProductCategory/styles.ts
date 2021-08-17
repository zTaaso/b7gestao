import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
  border-radius: 10px;
  background-color: #000;

  padding: 1px;

  height: 105px;
  width: 30%;

  margin: 6px;
`;

export const IconContainer = styled.View`
  align-items: center;
  justify-content: center;
  flex: 1;
`;

export const TextContainer = styled.View`
  border-top-width: 1px;
  border-top-color: rgba(255, 255, 255, 0.2);
  /* background-color: rgba(0, 0, 0, 0.9); */

  padding: 3px;
`;
