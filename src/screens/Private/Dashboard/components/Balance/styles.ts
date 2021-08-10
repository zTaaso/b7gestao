import styled from 'styled-components/native';
import Constants from 'expo-constants';

export const Container = styled.View`
  flex-direction: column;
  /* border: 1px solid red; */
  /* align-items: center; */
  justify-content: space-between;
  padding: 10px 5px;

  margin: 0 25px;
  margin-top: 30px;
  background-color: white;
  border-radius: 10px;

  /* margin: 30px 20px 0; */
`;

export const IconContainer = styled.TouchableOpacity`
  /* flex: 1; */
  /* flex-direction: row; */
  /* border: 1px solid blue; */
  padding: 13px;
  border-radius: 40px;
  background-color: white;
`;

export const Row = styled.View`
  flex: 1;
  margin: 10px 5px;
  flex-direction: row;
  /* border: 1px solid blue; */

  align-items: center;
  /* justify-content: center; */

  background-color: white;
`;

export const TextContainer = styled.View`
  flex: 1;
  /* padding: 0 2px; */
  /* border: 1px solid blue; */

  /* align-items: baseline; */
`;
