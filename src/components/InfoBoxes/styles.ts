import styled from 'styled-components/native';
import Constants from 'expo-constants';

export const Container = styled.View`
  /* flex: 1; */
  flex-direction: column;
  /* border: 1px solid red; */
  justify-content: space-around;
  /* padding: 5px 5px; */

  margin: 0 25px;

  margin-top: 15px;
  background-color: white;
  border-radius: 10px;

  /* margin: 30px 20px 0; */
`;

export const IconContainer = styled.View`
  padding: 10px;
  align-items: center;
  justify-content: center;
`;

export const BoxContainer = styled.View`
  flex-direction: row;
  background-color: white;

  margin-top: 10px;

  border: 1px solid rgba(0, 0, 0, 0.01);
  border-radius: 20px;

  padding: 15px 10px;
`;

export const TextContainer = styled.View`
  flex: 1;
  flex-direction: column;
  padding: 5px 0;
  justify-content: space-between;
`;
