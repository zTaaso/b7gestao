import styled from 'styled-components/native';
import Constants from 'expo-constants';

export const Container = styled.View`
  flex-direction: row;
  /* border: 1px solid red; */
  align-items: center;
  justify-content: space-between;
  /* padding: 5px 20px; */

  margin-top: ${Constants.statusBarHeight + 30}px;

  padding: 0 25px;
`;

export const IconContainer = styled.TouchableOpacity`
  /* flex: 1; */
  /* flex-direction: row; */
  /* border: 1px solid blue; */
  padding: 13px;
  border-radius: 40px;
  background-color: white;
`;
